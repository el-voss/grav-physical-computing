---
title: EVA-Prinzip
show_pageimage: true
image_width: 300
image_height: 400
taxonomy:
    Inhalte:
        - Sensor
        - Eingabe
        - Ausgabe
        - Verarbeitung
        - Aktor
        - Digital
        - Analog
    Niveau:
        - Basis
featured_image: tabelle-dig-ana-sen-akt.png
media_order: 'calliope-eva-hardware.png,calliope-eva-software.png,eva-visualisierung.png,tabelle-dig-ana-sen-akt.png,analog-digital-wandlung.png,eva-uebung-mc.png,eva-uebung-orl.png,eva-software-py.png,eva-software-mc.png'
---

<div markdown="1" class="aufgabe">
#### Kategorisierung nach dem EVA-Prinzip

1. Lies den Infokasten zum EVA-Prinzip, der unten abgebildet ist.
2. Hardware: Kategorisiere die Bauteile auf dem Calliope danach, ob sie für die Eingabe, die Verarbeitung oder die Ausgabe zuständig sind.
3. Software: Kategorisiere die Befehle im folgenden Programm danach, ob sie für die Eingabe, die Verarbeitung oder die Ausgabe zuständig sind.

<!-- Tabs für die Auswahl -->
<div class="tab-group" data-group="programmierumgebung">
<div class="tabs">
  <button class="tab-button" data-umgebung="makecode">Makecode</button>
  <button class="tab-button" data-umgebung="roberta">Open Roberta Lab</button>
  <button class="tab-button" data-umgebung="python">Python</button>
</div>

<!-- Inhalte für jede Programmierumgebung -->
<div class="tab-content">
  <div class="makecode content-block" markdown="1">
![eva-uebung-mc](eva-uebung-mc.png?Lightbox=1024&resize=500)
  </div>
  <div class="roberta content-block" markdown="1">
![eva-uebung-orl](eva-uebung-orl.png?Lightbox=1024&resize=500)
  </div>
  <div class="python content-block" markdown="1">
<pre><code class="language-python">
# Imports go at the top
from calliopemini import *
import neopixel
import music
np = neopixel.NeoPixel(pin_RGB, 3)

# Code in a 'while True:' loop repeats forever
while True:
    display.scroll('hi!')
    if temperature() &lt; 20:
        np.fill((0,0,255))
        np.show()
    else:
        np.fill((255, 125,0))
        np.show()
    music.play(['c'])
    while not( button_a.is_pressed() ):
        pass
</code></pre>
  </div>
</div>
</div>


</div>

<div class="notices green" markdown="1">
#### Das EVA-Prinzip

Informationsverarbeitende Systeme lassen sich nach ihrer Funktion in drei Einheiten zerlegen: Eingabeeinheit, Verarbeitungseinheit, Ausgabeeinheit.

![Visualisierung des EVA-Prinzips](eva-visualisierung.png)

Mit dem EVA-Prinzip wird die grundlegende Reihenfolge der Verarbeitung von Daten charakterisiert. Dies kann sowohl auf Hardwareebene (Bauteile) als auch auf Softwareebene (Programm) geschehen.

<div markdown="1" class="flex-box">
<div markdown="1">![EVA-Prinzip auf Hardwareebene.](calliope-eva-hardware.png?Lightbox=1024&resize=500&classes=caption "EVA-Prinzip auf Hardwareebene.")</div>
<div markdown="1">

<!-- Tabs für die Auswahl -->
<div class="tab-group" data-group="programmierumgebung">
<div class="tabs">
  <button class="tab-button" data-umgebung="makecode">Makecode</button>
  <button class="tab-button" data-umgebung="roberta">Open Roberta Lab</button>
  <button class="tab-button" data-umgebung="python">Python</button>
</div>

<!-- Inhalte für jede Programmierumgebung -->
<div class="tab-content">
  <div class="makecode content-block" markdown="1">
![eva-uebung-mc](eva-uebung-mc.png?Lightbox=1024&resize=500&classes=caption "EVA-Prinzip auf Softwareebene.")
  </div>
  <div class="roberta content-block" markdown="1">
![EVA-Prinzip auf Softwareebene.](calliope-eva-software.png?Lightbox=1024&resize=500&classes=caption "EVA-Prinzip auf Softwareebene.")
  </div>
  <div class="python content-block" markdown="1">
![eva-software-py](eva-software-py.png?Lightbox=1024&resize=500&classes=caption "EVA-Prinzip auf Softwareebene.")
  </div>
</div>
</div>

</div>
</div>

</div>


<div markdown="1" class="aufgabe">
#### Bauteilkunde

Elektronische Bauteile und die von ihnen verarbeiteten Signale lassen sich jeweils grob in zwei Kategorien aufteilen: Es gibt Sensoren und Aktoren und es gibt analoge und digitale Signale.

Versuche, die folgenden Bauteile des Calliope aus eigener Überlegung zu kategorisieren, indem du sie passend in die folgende Tabelle einträgst. Achtung: Manche Bauteile lassen sich je nach Nutzung auch in zwei Felder eintragen.

- Taste A und Taste B
- Berührungspins (goldene Ringe)
- LED-Matrix (5×5 Display)
- RGB-LED
- Lautsprecher
- Mikrofon
- Lichtsensor
- Temperatursensor
- Kompass (Magnetometer)
- Beschleunigungssensor und Gyroskop

 |          | Sensor | Aktor |
 |---------|--------|-------|
 | Digital |        |       |
 | Analog  |        |       |

</div>

!!!! #### Sensoren und Aktoren mit digitalen und analogen Signalen
!!!!
!!!! Für die Eingabe von Daten werden *Sensoren* benötigt; für die Ausgabe hingegen *Aktoren*:
!!!! 
!!!! -   **Sensoren** (auch Fühler genannt) sind elektrische Bauteile, die eine physikalische Größe aus der Umwelt (Temperatur, Helligkeit, Luftdruck oder auch ein mechanischer Druck mit dem Finger) in eine elektrische Größe (Widerstand, Spannung, Stromstärke) umwandeln. Dadurch werden die physikalischen Größen aus der Umwelt einer elektronischen Verarbeitung zugänglich.
!!!! -   **Aktoren** (auch Aktuatoren genannt) sind elektrische Bauteile, die eine elektrische Größe in eine mechanische (Bewegung, Schallwellen) oder andere Größe (Temperatur, Licht, …) umwandeln. Sie ermöglichen, dass die elektronische Verarbeitung zu Handlungen bzw. Konsequenzen führen kann.
!!!! 
!!!! Die Signale von Sensoren und Aktoren können digital oder analog sein:
!!!! 
!!!! -   **Digitale Signale** können nur bestimmte, abgestufte Werte annehmen. In unseren Anwendungen genügen meist zwei Zustände - z.B. an / aus, gedrückt / nicht gedrückt oder 1 / 0.
!!!! -   **Analoge Signale** sind kontinuierlich: Sie ändern sich zeitlich und wertmäßig stufenlos und können dadurch unendlich viele Werte annehmen.
!!!! 
!!!! Digitale Geräte wie der Calliope können analoge Signale nicht exakt, sondern nur näherungsweise verarbeiten:
!!!! 
!!!! -   Beim **Einlesen** wandelt der Calliope die analoge Spannung am Eingang in eine Zahl um. Dabei sind 1024 verschiedene Stufen (0 bis 1023) möglich - der Calliope löst analoge Signale also mit 10 Bit auf. Diese Auflösung ist für die meisten Aufgaben fein genug.
!!!! -   Beim **Ausgeben** erzeugt der Calliope keine echten Zwischenwerte, sondern schaltet die Ausgabe sehr schnell ein und aus (Pulsweitenmodulation, kurz PWM). Über das Verhältnis von Ein- und Ausschaltzeit lässt sich dennoch die Helligkeit einer LED oder die Lautstärke des Lautsprechers stufenlos regeln.
!!!! 
!!!! ![Umwandlung eines analogen Signals in 32 Stufen.](analog-digital-wandlung.png?Lightbox=1024&resize=800&classes=caption "Das blau dargestellte Signal einer Sinusfunktion wird in 32 diskrete Stufen eingeteilt und kann dadurch digital verarbeitet werden. Am Calliope werden die Signale in 1024 Stufen eingeteilt, sodass die einzelnen Stufen kaum vom analogen Signal zu unterscheiden sind.")




