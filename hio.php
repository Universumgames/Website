<?php

$iCalUrl = "https://hio.hsnr.de:443/qisserver/pages/cm/exa/timetable/individualTimetableCalendarExport.faces?user=b23d0170-8c7b-11ea-a8a8-8ee3c4439c7bb23d2880-8c7b-11ea-a8a8-8ee3c4439c7b&hash=dad1485c50a19f783607d387da0b2eb4&termgroup=";

$iCalFile = file_get_contents($iCalUrl);

header('Content-Type: text/calendar; charset=utf-8');
header('Content-Disposition: attachment; filename="hio.ics"');
echo $iCalFile;
?>
