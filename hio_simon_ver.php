<?php

$iCalUrl = "https://hio.hsnr.de/qisserver/pages/cm/exa/timetable/individualTimetableCalendarExport.faces?user=a755cd40-5d02-11ee-9b45-d5ba3ad9e55ea755f450-5d02-11ee-9b45-d5ba3ad9e55e&hash=b4f6f6ab3d399e04203141c1af12d705&termgroup=";

$iCalFile = file_get_contents($iCalUrl);

header('Content-Type: text/calendar; charset=utf-8');
header('Content-Disposition: attachment; filename="hio.ics"');
echo $iCalFile;
