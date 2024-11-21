# grav-physical-computing

Dieses Repository enthält die grundlegenden Dateien der Webseite [mintorials.de](https://mintorials.de/de), die im Wesentlichen das Skript "Physical Computing. Eine Einführung in Informatik und Physik des Arduino mit dem Open Roberta Lab" enhtält. Die Seite dient dem Autor als Schulbuch für ein MINT-Profilfach im Jahrgang 10 eines Gymnasiums, in dem Schaltungen mit dem [Arduino](https://www.arduino.cc/) aufgebaut und mit dem [Open Roberta Lab](https://lab.open-roberta.org/) programmiert werden.

Dieses Repository und die Webseite stehen unter der Lizenz [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## Anregungen, Wünsche, Fehler

Ich habe noch einige Ideen, um die Webseite zu ergänzen und werde weiter daran arbeiten. Wenn dir ebenfalls etwas einfällt oder du sogar selbst dazu beitragen möchtest, dann erstelle gerne ein [Issue](https://github.com/el-voss/grav-physical-computing/issues).

## Umfangreiche Anpassungen für eigene Zwecke

Jeder unterrichtet auf eigene Weise, für andere Lerngruppen und Anforderungen. Wenn dir die Webseite grundsätzlich gut gefällt, sie aber nicht auf deinen Unterricht passt, dann kannst du sie entsprechend der Lizenz vervielfältigen und umfangreiche Anpassungen vornehmen. Um dies zu tun, befolge folgende Schritte:
- Das Content Management System für die Webseite ist Grav. Lade den Skeleton [RTFM Site](https://getgrav.org/downloads/skeletons) herunter und entpacke ihn in einem lokalen Ordner.
- Lade dieses Repository herunter und entpacke die Inhalte in die entsprechenden Ordner unter `<grav-ordner>/user/`.
- Zum Testen kann der lokale Webserver im Grav-Verzeichnis ausgeführt werden. Dafür muss PHP in Version 7.3.6+ installiert sein. Zum Testen öffne ein Terminal im Grav-Ordner und ...
  - kontrolliere die PHP Version mit `php -v`,
  - starte den eingebauten lokalen Webserver mit `php -S localhost:8000 system/router.php`,
  - öffne einen Browser und gib in die Adresszeile `localhost:8000` ein. Unter `localhost:8000/admin` lässt sich der Admin-Bereich aufrufen.
- Besser ist es, den Grav-Ordner auf einen Webserver zu kopieren und dessen Adresse im Browser aufzurufen. Befolge dazu die Anleitung in der Dokumentation: [Installation von Grav](https://learn.getgrav.org/17/basics/installation).
- Mache dich für Anpassungen mit der Funktionsweise von Grav vertraut. Die [Dokumentation](https://learn.getgrav.org/17) ist gut aufgebaut und sehr hilfreich.

Viel Erfolg und Spaß mit der Seite!
