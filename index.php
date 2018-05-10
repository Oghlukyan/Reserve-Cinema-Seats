<?php

include "connection.php";

?>

<html>
    <head>
        <title>Reserve Ticket</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
    </head>
    <body>
        <div id="hall" class="hall"></div>
        <button id="reserveButton" type="button" class="btn btn-success" data-target="#fillData">
            Reserve
        </button>

        <!-- Modal -->
        <div id="fillData" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="fillDataLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="fillDataLabel">TELL US ABOUT YOU</h5>
                    </div>
                    <div class="modal-body">
                        <div class="input-group mb-3">
                            <input id="firstName" type="text" class="form-control" placeholder="First Name">
                        </div>
                        <div class="input-group mb-3">
                            <input id="secondName" type="text" class="form-control" placeholder="Second Name">
                        </div>
                        <div class="input-group mb-3">
                            <input id="email" type="text" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button id="close" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button id="save" type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
        <script src="show_seats.js"></script>
    </body>
</html>
