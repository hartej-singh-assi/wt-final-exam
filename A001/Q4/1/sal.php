<?php

$basicSalary = $_GET[sal];

if ($basicSalary < 1500){
    $HDA = $basicSalary *0.1;
    $DA = $basicSalary * 0.9;
    $grossSal = $basicSalary + $HDA + $DA;
}
else{
    $HDA = 500;
    $DA = $basicSalary * 0.98;
    $grossSal = $basicSalary + $HDA + $DA;
}

?>