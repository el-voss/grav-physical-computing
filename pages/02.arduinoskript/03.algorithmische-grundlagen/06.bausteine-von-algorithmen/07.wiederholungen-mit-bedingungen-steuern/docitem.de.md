---
title: 'Wiederholungen mit Bedingungen steuern'
show_pageimage: true
image_width: 300
image_height: 400
---

In vielen Fällen geht es bei Schleifen nicht um eine genau oder zufällig bestimmte Anzahl von Wiederholungen, sondern darum, einen Vorgang zu wiederholen, bis eine Bedingung wahr ergibt, bzw. solange, wie eine Bedingung wahr ergibt. Die Bedingung, die wahr oder falsch ergibt, kann auch Sensorwerte beinhalten.

<div class="projekt" markdown="1">
#### Alarmanlage

Baue und programiere eine Alarmanlage, die wie folgt funktioniert: Wenn über einen Bewegungsmelder eine Bewegung registriert wird, dann geht die Alarmanlage los (Blinken und / oder Piepsen). Die Alarmanlage bleibt so lange aktiv, bis ein Taster gedrückt wurde, um sie wieder auszustellen.
</div>

<div class="projekt clearfix" markdown="1">
#### Konfigurierbares Reaktionsspiel

Baue und programmiere ein konfigurierbares Reaktionsspiel!

![Ausgaben des Spiels auf dem seriellen Monitor](/images/reaktionsspiel-serial-monitor.png?resize=250&classes=caption,figure-right "Ausgaben auf dem seriellen Monitor.")
Dazu werden drei Taster (mit Widerstand!) am Arduino angeschlossen. Nach einer zufälligen Zeit wird auf dem seriellen Monitor angezeigt, welcher (zufällig ausgewürfelte) Taster gedrückt werden soll. Geschieht dies innerhalb einer vorgegebenen maximalen Reaktionszeit, hat man gewonnen, andernfalls verloren.

Am Anfang des Spiels soll diese maximale Reaktionszeit konfiguriert werden können. Das heißt, man kann die max. Reaktionszeit mit dem linken Taster verringern und mit dem rechten Taster vergrößern. Erst wenn der mittlere Taster gedrückt wird, startet das Spiel.

Für einen besseren Zugang zu diesem komplexen Spiel kannst du folgende Vorlage öffnen, mittels “Speichern unter” als `Reaktionsspiel.xml` auf dem Computer speichern und die Datei im Open Roberta Lab importieren: <a href="/p-templates/reaktionsspiel-start.xml" download><i class="fa fa-download" aria-hidden="true"></i> reaktionsspiel-start.xml</a>.
</div>

*Mögliche Erweiterungen:*
-   zusätzliche Ausgabe der Reaktionszeit,
-   Ober- und Untergrenze für die einstellbare maximale Reaktionszeit, damit das Spiel nicht unmöglich, aber auch nicht zu langweilig wird,
-   nach Spielstart folgen mehrere Spiele hintereinander und es wird mitgezählt, wie oft gewonnen wird,
-   je nach Reaktionszeit bekommt man mehr oder weniger Punkte,
-   ...

