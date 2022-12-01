<?php

// I'm India so my timezone is Asia/Calcutta
date_default_timezone_set('Asia/Calcutta');

// 24-hour format of an hour without leading zeros (0 through 23)
$Hour = date('G');

if ( $Hour >= 5 && $Hour <= 11 ) {
    echo "Good Morning";
} else if ( $Hour >= 12 && $Hour <= 18 ) {
    echo "Good Afternoon";
} else if ( $Hour >= 19 || $Hour <= 4 ) {
    echo "Good Evening";
}

?>