<?php
	$line = sprintf("%s;%s\n", $_POST["email"], $_POST["telegram"]);

	$result = file_put_contents(__DIR__."/waitlist.csv", $line, FILE_APPEND | LOCK_EX);

	echo $result;
?>