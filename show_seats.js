$(function () {
    var checkedSeats = [];
    var maxSeatsInRow = 30;
    var rowCount = 8;

    // append seats to document
    for (var i = 0; i < rowCount; i++) {
        var appendRow = '<div id="' + i + '" class="row">\n';
        for (var j = 0; j < maxSeatsInRow - 2*i; j++)
            appendRow += '<div id="' + i + '.' + j + '" class="seat emptySeat border"></div>\n';
        appendRow += '</div>';
        $('#hall').append(appendRow);
        var row = $('#' + i);
        row.css("position", "absolute");
        row.css("top", i * row.height());
        row.css("left", Math.max(0, (($(window).width() - row.width()) / 2) + $(window).scrollLeft()) + "px");
    }

    emptySeatClickListener();
    checkedSeatClickListener();

    getReservedSeats();

    $('#fillData').on('hide.bs.modal', function() {
        checkedSeats = [];
    });

    var reserveButton = $('#reserveButton');
    reserveButton.css('position', 'absolute');
    reserveButton.css('top', (rowCount + 3) * row.height());
    reserveButton.css('left', (($(window).width() - reserveButton.width()) / 2));
    reserveButton.on('click', function () {
        for (var i = 0; i < rowCount; i++)
            for (var j = 0; j < maxSeatsInRow - 2 * i; j++)
                if ($('#' + i + '\\.' + j).hasClass('checkedSeat'))
                    checkedSeats.push({'row' : i, 'column' : j});
        (checkedSeats.length === 0) ? (alert('Choose Seats')) : ($('#fillData').modal('show'));
    });

    $('#save').on('click', function () {
        var filledData = getFilledData();
        if (validateData(filledData)) {
            reserveSeats(checkedSeats, filledData);
            getReservedSeats();
        }
    });
});

function emptySeatClickListener() {
    $('.emptySeat').on('click', function () {
        if (!$(this).hasClass('reservedSeat')) {
            $(this).removeClass('emptySeat');
            $(this).addClass('checkedSeat');
            checkedSeatClickListener();
        }
    });
}

function checkedSeatClickListener() {
    $('.checkedSeat').on('click', function () {
        if (!$(this).hasClass('reservedSeat')) {
            $(this).removeClass('checkedSeat');
            $(this).addClass('emptySeat');
            emptySeatClickListener();
        }
    });
}

function getReservedSeats() {
    $.get('get_reserved_seat_details.php', function (seats) {
        seats = JSON.parse($.parseJSON(seats));
        $.each(seats, function (i, seat) {
            var id = '#' + seat['row'] + '\\.' + seat['column'];
            $(id).removeClass('emptySeat');
            $(id).removeClass('checkedSeat');
            $(id).addClass('reservedSeat');
        });
    });
}

function getFilledData() {
    return {
        'firstName': $('#firstName').val(),
        'secondName': $('#secondName').val(),
        'email': $('#email').val()
    };
}

function validateData(filledData) {
    var isValid = true;
    $.each(filledData, function (index, input) {
        if ($.trim(input) === '') {
            $('#' + index).addClass('border-danger');
            isValid = false;
        } else {
            $('#' + index).removeClass('border-danger')
        }
    });
    var email = $('#email').val();
    $.post('validate_email.php', {email: email}, function (isEmailValid) {
        if (!isEmailValid) {
            isValid = false;
            $('#email').addClass('border-danger');
        }
    });
    return isValid;
}

function reserveSeats(checkedSeats, filledData) {
    $.each(checkedSeats, function (i, seat) {
        $.post(
            'reserve_seats.php',
            {
                seatRow : seat['row'],
                seatColumn : seat['column'],
                firstName : filledData['firstName'],
                secondName : filledData['secondName'],
                email : filledData['email']
            },
            function () {
                getReservedSeats();
            }
        );
    });
}
