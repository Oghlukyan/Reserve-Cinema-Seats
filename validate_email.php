<?php

echo filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
