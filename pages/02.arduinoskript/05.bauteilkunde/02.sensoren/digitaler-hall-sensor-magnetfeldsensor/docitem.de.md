---
title: 'Digitaler Hall-Sensor (Magnetfeldsensor)'
show_pageimage: true
image_width: 300
image_height: 300
---

Bei einem digitalen Hall-Sensor wird das analoge Signal eines Hall-Sensors durch weitere Elektronik so weiterverarbeitet, dass bei der Ausgabe nur noch zwischen *Magnetfeld bzw. Magnet anwesend* und *Magnetfeld bzw. Magnet nicht anwesend* unterschieden wird. Dies ist in vielen Anwendungsfällen das Einzige, was wirklich interessiert: So lässt sich damit feststellen, ob der Gurt eines Autos angelegt wurde oder es lässt sich messen, wie oft sich ein Motor oder ein Reifen gedreht hat. Letzteres lässt sich bei Autos oder Fahrrädern nutzen, um aus der Drehzahlmessung die Geschwindigkeit errechnen.
<!-- Bild von Fahrrad -->

<div class="flex-box">
<div markdown="1">![Hall-Sensor am Fahrrad.](hall-an-fahrrad.png?lightbox=1024&resize=300&classes=caption "Hall-Sensor am Fahrrad.")</div>
<div markdown="1">![Hall-Sensor A3144 auf Platine.](hall-digital-ky-003.jpg?lightbox=1024&resize=300&classes=caption "Digitales Hall-Sensor-Modul KY-003 mit dem Hall-Sensor A3144.")</div>
</div>

Es gibt verschiedene Hall-Sensoren - in diesem Kurs verwenden wir das Hall-Sensor-Modul KY-003, auf dem der Hall-Sensor A3144 zusammen mit einer LED und einem zugehörigen Widerstand verbaut ist.

!! *Achtung:* Hall-Sensoren können leicht mit Transistoren verwechselt werden! Achte genau auf die Aufschrift auf dem schwarzen Kästchen und hole ggf. eine Lupe, um zu erkennen, ob es sich um einen Transistor, einen analogen Hall-Sensor oder einen digitalen Hall-Sensor handelt.

Unten ist der Schaltplan zum Anschließen an den Arduino abgebildet.
<!-- Bild von Modul und Bild von Schaltplan -->
![Schaltplan zum Anschluss des Hall-Sensor-Moduls KY-003 an den Arduino.](hall-ky-003-an-arduino.png?lightbox=1024&resize=500&classes=caption "Anschluss des Hall-Sensor-Moduls KY-003 am Arduino. Falls der darauf verwendete Hall-Sensor A3144 ohne das Modul angeschlossen werden soll, ist darauf zu achten, dass VCC und GND auf der Platine vertauscht werden. Beim A3144 ist GND in der Mitte.")

Der Hall-Sensor ist nicht im Open Roberta Lab vorkonfiguriert. Er lässt sich aber einfach als *digitaler Sensor* in der Roboterkonfiguration angeben. Mit dem Befehl `gib <digitalen> Wert Sensor <S>` erhält man dann den Rückgabewert `0` (Spannung von 0V bzw. Potential `LOW`) oder den Rückgabewert `1` (Spannung von 5V bzw. Potential `HIGH`).

<div markdown="1" class="aufgabe">
#### Funktionstest des Hall-Sensor-Moduls

1. Schließe das Hall-Sensor-Modul wie beschrieben an den Arduino an, konfiguriere es als digitalen Sensor und lasse die Werte auf dem seriellen Monitor ausgeben.
2. Experimentiere mit verschiedenen Magneten, ab wann das Signal umschaltet. Welche Ausgabe erfolgt ohne und welche mit Anwesenheit eines Magnetfeldes?
</div>

<div markdown="1" class="aufgabe">
#### Hysterese

Laut [Datenblatt des Hall-Sensors A3144](https://pdf1.alldatasheet.com/datasheet-pdf/view/55092/ALLEGRO/A3144.html) verfügt dieser über eine sogenannte *Hysterese*. Das bedeutet, dass der Wechsel von `HIGH` zu `LOW` bei einer anderen Magnetfeldstärke passiert als der Wechsel von `LOW` zu `HIGH`. Unten wird dies graphisch dargestellt.

<!-- Graph von Geogebra -->
<figure class="image-caption">
   <img title="Graph zur Hysterese des Hall-Sensors." alt="Graph zur Hysterese des Hall-Sensors." class="caption" src="/user/pages/images/hall-digital-hysterese.png">
   <figcaption class="" markdown="1">Schematische Darstellung der Hysterese des A3144 am Arduino. Der rote Graph stellt den Wechsel von HIGH zu LOW dar, wenn die magnetische Flussdichte zunimmt. Der blaue Graph stellt den Wechsel von LOW zu HIGH dar, wenn die magnetische Flussdichte wieder kleiner wird. Die Werte für $B_{OP}, B_{RP}, B_{hys}$ und $U_{HIGH}, U_{LOW}$ im Diagramm wurden vom Autor beim Anschluss an einen Arduino mit $VCC = 5V$ mit einfachen Mitteln gemessen und schwanken. Sie stellen daher nur einen ungefähren Anhaltspunkt dar.</figcaption>
</figure>

Die Begriffe werden im Datenblatt auf S. 2 folgendermaßen erklärt:

| Größe | Erklärung |
|---|---|
| $B_{OP}$ | *operate point (ouput turns ON)* |
| $B_{RP}$ | *release point (ouput turns OFF)* |
| $B_{hys}$ | *hysteresis* ($B_{OP}-B_{RP}$) |

1. Erkläre anhand des Diagramms oben in eigenen Worten die Bedeutung der drei Größen und gib ihren jeweiligen Wert an.

2. Begründe anhand eines Signals für die magnetische Flussdichte $B$, das um den Wert $B \approx 9mT$ schwankt, warum es sinnvoll ist, dass der Hall-Sensor über eine Hysterese verfügt.
</div>

<div markdown="1" class="projekt">
#### Fahrradtacho

Mit dem digitalen Hall-Sensor kann man registrieren, wann der Reifen eines Fahrrads eine Umdrehung ausgeführt hat (siehe Bild am Anfang dieses Abschnitts). Nutze dies und baue damit einen einfachen Fahrradtacho, der die Geschwindigkeit berechnet und anzeigt!
</div>
