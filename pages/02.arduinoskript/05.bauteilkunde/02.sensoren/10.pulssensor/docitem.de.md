---
title: Pulssensor
show_pageimage: true
image_width: 300
image_height: 300
featured_image: pulssensor.jpg
taxonomy:
    Mindestvoraussetzungen:
        - 'Entscheidungen mit mehreren Kriterien'
        - 'Der serielle Monitor'
    Zusatzvoraussetzungen:
        - 'Spannung messen'
        - 'Digital vs Analog und Aktor vs Sensor'
    Inhalte:
        - Pulssensor
        - Pulsmessung
        - 'Serieller Plotter'
    Niveau:
        - Fortgeschritten
---

<div markdown="1" class="clearfix">
![Pulssensor.](pulssensor.jpg?resize=250&classes=caption,figure-right "Rückseite eines Pulssensors.")
Aktivitätstracker mit Pulsmessung liegen voll im Trend - aber wie funktioniert so ein Pulssensor eigentlich? Das lässt sich am einfachsten verstehen, wenn man selber einen nachbaut. Weitere Anwendungsmöglichkeiten wären übrigens Lügen-/Angstdetektoren, Schlafanalyse oder ein Alarmsystem für Risikopatienten.
</div>
Der Anschluss an den Arduino ist einfach: + an 5V, - an GND, der Signalpin S an einen analogen Eingang A[0-5]. Am Signalpin liegt eine Spannung an, die sich im Rhythmus des Herzschlags verändert und am analogen Eingang des Arduino gemessen werden kann. Dies lässt sich mit dem seriellen Plotter der Arduino IDE veranschaulichen (siehe Abbildung unten). Man erkennt, dass die gemessenen Analogwerte zwischen ca. 500 und ca. 535, also in einem relativ kleinen Bereich, schwanken (35 bzw. $0,171 \, V$).

![Visualisierung von gemessenen Analogwerten zur Bestimmung des Pulses.](pulsmessung-serieller-plotter.png?lightbox=1024&classes=caption "Visualisierung von gemessenen Analogwerten zur Bestimmung des Pulses.")

Als Kriterium für einen Herzschlag könnte man festlegen, dass der Analogwert über 520 liegt. Diese Werte sind jedoch wenig stabil und schwanken je nach Person und Umgebung! Man sollte unbedingt darauf achten, dass die Haut nicht verschwitzt ist und keine Bauteile auf dem Sensor berührt werden (insbesondere auf der Rückseite), damit die Ergebnisse einigermaßen zuverlässig sind. Wenn sich auf dem Arm keine brauchbaren Werte einstellen, lohnt sich ein Versuch auf dem Ringfinger oder dem Ohrläppchen.

Der Pulssensor kann mit den vorkonfigurierten Blöcken von Nepo oder direkt als analoger Sensor eingelesen werden. Im Hintergrund passiert das Gleiche.

<div markdown="1" class="aufgabe">
#### Theorie: Wie wird der Puls gemessen?

Für die Messung des Pulses ist die grüne LED und ein Lichtsensor zentral. Erkläre anhand der schematischen Abbildungen unten das Prinzip der optischen Pulsmessung.
<div class="flex-box">
<div markdown="1">![Pulssensor-Funktionsprinzip 1](pulssensor-prinzip1.png?lightbox=512)</div>
<div markdown="1">![Pulssensor-Funktionsprinzip 2](pulssensor-prinzip2.png?lightbox=512)</div>
<div markdown="1">![Pulssensor-Funktionsprinzip 3](pulssensor-prinzip3.png?lightbox=512)</div>
</div>
</div>

<div markdown="1" class="projekt">
#### Pulsmesser
Baue einen Pulsmesser, der anhand der Messwerte von 10 Sekunden den Puls (Herzschläge pro Minute) berechnet.

*Hinweis: Es kann nötig sein, sich die Werte von einem seriellen Plotter visualisieren zu lassen, um einen Eindruck vom Wertebereich und von der Grenze für die Herzschlagerkennung zu bekommen. Klappe dafür die Anleitung unter diesem Projekt aus.*
</div>

<details class="details">
<summary class="details__trigger details__title">Visualisierung mit dem Seriellen Plotter der Arduino IDE</summary>
<div class="details__content" markdown="1">
**0.** Vorbereitung: Damit überhaupt Werte über den seriellen Port (USB) übermittelt werden, erstelle ein Programm in Open Roberta, das fortlaufend den aktuellen Wert des Pulssensors auf den seriellen Monitor schreibt und übertrage es auf den Arduino.

**1.** Der Serielle Plotter ist in die Arduino IDE eingebaut, die genutzt wird, um den Arduino textbasiert zu programmieren. [Lade die Arduino IDE herunter](https://www.arduino.cc/en/software) und installiere sie.

**2.** Öffne die Arduino IDE. Zuerst muss der Arduino verbunden werden. Wähle dazu in der oberen Leiste *Werkzeuge* > *Board: Arduino Uno* und wähle unter *Werkzeuge* > *Port* den Port aus, an dem der Arduino angegeben wird (siehe unten).

![Verbinden eines Arduino mit der Arduino IDE](arduino-ide-plotter-oeffnen.png)

**3.** Öffne den Seriellen Plotter unter *Werkzeuge* > *Serieller Plotter*. Das Koordinatensystem wird automatisch an die vom Arduino übermittelten Werte angepasst. Falls keine Werte angezeigt werden, dann kontrolliere, ob die Baud-Rate (unten links) auf 9600 eingestellt ist.

![Serieller Plotter der Arduino IDE.](arduino-ide-plotter-baud.png?resize=600)

</div>
</details>