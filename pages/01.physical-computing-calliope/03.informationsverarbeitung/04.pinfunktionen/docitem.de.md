---
title: 'Pinfunktionen im Überblick'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'pinfunktionen-analog-read-mc.png,pinfunktionen-analog-read-orl-konf.png,pinfunktionen-analog-read-orl.png,pinfunktionen-analog-read.png,pinfunktionen-analog-write-mc.png,pinfunktionen-analog-write-orl-konf.png,pinfunktionen-analog-write-orl.png,pinfunktionen-digital-read-mc.png,pinfunktionen-digital-read-orl.png,pinfunktionen-digital-read.png,pinfunktionen-digital-write-mc.png,pinfunktionen-digital-write-orl-konf.png,pinfunktionen-digital-write.png,pinfunktionen-digital-read-orl-konf.png,pinfunktionen-digital-write-orl.png,sensor-und-aktor-digital-und-analog-übersichtsschema.png'
featured_image: sensor-und-aktor-digital-und-analog-übersichtsschema.png
---

Jeder GPIO-Pin ("General Purpose Input Output") des Calliope kann grundsätzlich zwei Rollen einnehmen: Er kann als **Ausgang** ein angeschlossenes Bauteil (einen Aktor) ansteuern oder als **Eingang** ein angeschlossenes Bauteil (einen Sensor) auslesen. Dabei wird jeweils zwischen einer digitalen Variante mit nur zwei Zuständen (an/aus bzw. 0/1) und einer analogen Variante mit vielen Zwischenwerten (z. B. eine Zahl zwischen 0 und 1023) unterschieden. Insgesamt ergeben sich daraus vier Funktionen, die auf dieser Seite nacheinander vorgestellt werden.

Für die folgenden Beispiele wird dabei stets der Pin P0 gewählt. Aber auch die weiteren Pins verfügen in der Regel über die gleichen Funktionen. Zu beachten ist, dass einige Pins doppelt genutzt werden und daher vielleicht schon an anderer Stelle belegt sind. Eine Übersicht über alle Pins und deren Funktionen findet sich in der [Dokumentation zu den Pins des Calliope v3](https://docs.calliope.cc/tech/hardware/pins/?target="_blank").


## Digitaler Aktor: LED ein- und ausschalten

Im folgenden Schaltplan ist eine LED über einen Vorwiderstand mit dem GPIO-Pin P0 verbunden. Der Pin wird als digitaler Aktor genutzt: Er gibt entweder die Spannung 3,3V oder die Spannung 0V aus.

![Schaltplan LED](pinfunktionen-digital-write.png?Lightbox=1024&resize=500&classes=caption "Schaltplan: Die LED ist über einen Vorwiderstand mit dem Pin P0 verbunden.")

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
![pinfunktionen-digital-write-mc](pinfunktionen-digital-write-mc.png?Lightbox=1024&resize=500&classes=caption "In Makecode kann der Pin über den Block <schreibe digital auf Pin> ein- und ausgeschaltet werden.")
  </div>
  <div class="roberta content-block" markdown="1">
Zunächst muss der Pin in der Konfiguration als digitaler Ausgang festgelegt werden:

![pinfunktionen-digital-write-orl-konf](pinfunktionen-digital-write-orl-konf.png?Lightbox=1024&resize=500&classes=caption "Konfiguration: Der Pin P0 wird als digitaler Ausgang eingestellt.")

Anschließend kann der Pin im Programm geschaltet werden:

![pinfunktionen-digital-write-orl](pinfunktionen-digital-write-orl.png?Lightbox=1024&resize=500&classes=caption "Im Open Roberta Lab schaltet der Block <schreibe digital auf Pin> die LED ein und aus.")
  </div>
  <div class="python content-block" markdown="1">
```python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    pin0.write_digital(1)  # schalte Spannung 3,3V ein
    sleep(1000)            # warte 1000 Millisekunden
    pin0.write_digital(0)  # schalte Spannung aus (-> 0V)
    sleep(1000)            # warte 1000 Millisekunden
```
  </div>
</div>
</div>

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/videos/calliope/pinfunktionen-digital-write-video.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>

<div markdown="1" class="aufgabe">
#### LED als digitaler Aktor

1. Beschreibe, was in dem Video zu beobachten ist, und erkläre dies anhand des Programms.
2. Begründe, warum der GPIO-Pin in diesem Fall als digitaler Aktor genutzt wurde.

</div>

## Analoger Aktor: LED dimmen

Im folgenden Schaltplan ist eine LED über einen Vorwiderstand mit dem GPIO-Pin P0 verbunden. Der Pin wird hier als analoger Aktor genutzt: Dabei wird sehr schnell zwischen 3,3V und 0V hin und her geschaltet. Der angegebene analoge Wert gibt an, wie lang die Phase mit 3,3V sein soll: Je größer die Zahl ist, desto länger ist die Phase mit 3,3V gegenüber 0V. 

- Der Analogwert 0 bedeutet, dass die ganze Zeit 0V geschaltet wird. 
- Der Analogwert 512 bedeutet, dass der Pin in der Hälfte der Zeit auf 3,3V und der anderen Hälfte auf 0V ist. 
- Der Analogwert 1023 bedeutet, dass die ganze Zeit 3,3V geschaltet wird.

![Schaltplan LED dimmen](pinfunktionen-digital-write.png?Lightbox=1024&resize=500&classes=caption "Schaltplan: Die LED ist über einen Vorwiderstand mit dem Pin P0 verbunden.")

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
![pinfunktionen-analog-write-mc](pinfunktionen-analog-write-mc.png?Lightbox=1024&resize=500&classes=caption "In Makecode kann über den Block <schreibe analog auf Pin> ein Wert zwischen 0 und 1023 ausgegeben werden.")
  </div>
  <div class="roberta content-block" markdown="1">
Zunächst muss der Pin in der Konfiguration als analoger Ausgang festgelegt werden:

![pinfunktionen-analog-write-orl-konf](pinfunktionen-analog-write-orl-konf.png?Lightbox=1024&resize=500&classes=caption "Konfiguration: Der Pin P1 wird als analoger Ausgang eingestellt.")

Anschließend kann der Pin im Programm mit analogen Werten angesteuert werden:

![pinfunktionen-analog-write-orl](pinfunktionen-analog-write-orl.png?Lightbox=1024&resize=500&classes=caption "Im Open Roberta Lab schreibt der Block <schreibe analog auf Pin> einen analogen Wert auf den Pin.")
  </div>
  <div class="python content-block" markdown="1">
```python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    pin0.write_analog(1023)  # schalte Spannung 3,3V dauerhaft ein
    sleep(1000)              # warte 1000 Millisekunden
    pin0.write_analog(768)   # schalte Spannung zu 3/4 ein
    sleep(1000)
    pin0.write_analog(512)   # schalte Spannung zur Hälfte ein
    sleep(1000)
    pin0.write_analog(256)   # schalte Spannung zu 1/4 ein
    sleep(1000)
    pin0.write_analog(0)     # schalte Spannung aus
    sleep(1000)
```
  </div>
</div>
</div>

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/videos/calliope/pinfunktionen-analog-write-video.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>


<div markdown="1" class="aufgabe">
#### Analoger Aktor: LED dimmen

1. Beschreibe, was in dem Video zu beobachten ist, und erkläre dies anhand des Programms.
2. Begründe, warum der GPIO-Pin in diesem Fall als analoger Aktor genutzt wurde.

</div>

## Digitaler Sensor: Taster auslesen

Im folgenden Schaltplan ist ein Taster mit dem GPIO-Pin P0 verbunden. Der Pin wird als digitaler Sensor genutzt.

![Schaltplan Taster](pinfunktionen-digital-read.png?Lightbox=1024&resize=500&classes=caption "Schaltplan: Der Taster ist mit dem Pin P0 verbunden.")

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
![pinfunktionen-digital-read-mc](pinfunktionen-digital-read-mc.png?Lightbox=1024&resize=500&classes=caption "In Makecode kann der Pin über den Block <lese digital von Pin> ausgelesen werden.")
  </div>
  <div class="roberta content-block" markdown="1">
Zunächst muss der Pin in der Konfiguration als digitaler Eingang festgelegt werden:

![pinfunktionen-digital-read-orl-konf](pinfunktionen-digital-read-orl-konf.png?Lightbox=1024&resize=500&classes=caption "Konfiguration: Der Pin P0 wird als digitaler Eingang eingestellt.")

Anschließend kann der Pin im Programm ausgelesen werden:

![pinfunktionen-digital-read-orl](pinfunktionen-digital-read-orl.png?Lightbox=1024&resize=500&classes=caption "Im Open Roberta Lab liest der Block <lese digital von Pin> den Zustand des Tasters ein.")
  </div>
  <div class="python content-block" markdown="1">
```python
# Imports go at the top
from calliopemini import *
import neopixel

np = neopixel.NeoPixel(pin_RGB, 3)

while True:
    if pin0.read_digital() == 1:
        np.fill((255, 255,0))      # grün
        np.show()
    else:
        np.fill((255, 0, 0))       # rot
        np.show()
```
  </div>
</div>
</div>

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/videos/calliope/pinfunktionen-digital-read-video.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>


<div markdown="1" class="aufgabe">
#### Digitaler Sensor: Taster auslesen

1. Beschreibe, was in dem Video zu beobachten ist, und erkläre dies anhand des Programms.
2. Begründe, warum der GPIO-Pin in diesem Fall als digitaler Sensor genutzt wurde.

</div>

## Analoger Sensor: Potentiometer auslesen

Im folgenden Schaltplan ist ein Potentiometer mit dem GPIO-Pin P0 verbunden. Der Pin wird als analoger Sensor genutzt: Er liest nicht nur zwei Zustände, sondern viele Zwischenwerte von 0 bis 1023 ein, die die Stellung des Drehreglers widerspiegeln.

![Schaltplan Potentiometer](pinfunktionen-analog-read.png?Lightbox=1024&resize=500&classes=caption "Schaltplan: Das Potentiometer ist mit dem Pin P0 verbunden.")

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
![pinfunktionen-analog-read-mc](pinfunktionen-analog-read-mc.png?Lightbox=1024&resize=500&classes=caption "In Makecode kann der Pin über den Block <lese analog von Pin> ausgelesen werden.")
  </div>
  <div class="roberta content-block" markdown="1">
Zunächst muss der Pin in der Konfiguration als analoger Eingang festgelegt werden:

![pinfunktionen-analog-read-orl-konf](pinfunktionen-analog-read-orl-konf.png?Lightbox=1024&resize=500&classes=caption "Konfiguration: Der Pin P1 wird als analoger Eingang eingestellt.")

Anschließend kann der Pin im Programm ausgelesen werden:

![pinfunktionen-analog-read-orl](pinfunktionen-analog-read-orl.png?Lightbox=1024&resize=500&classes=caption "Im Open Roberta Lab liest der Block <lese analog von Pin> den Wert des Potentiometers ein.")
  </div>
  <div class="python content-block" markdown="1">
```python
# Imports go at the top
from calliopemini import *
import neopixel

np = neopixel.NeoPixel(pin_RGB, 3)

while True:
    np.fill((255, 0, 0))       # rot
    np.show()
    sleep(pin0.read_analog())  # Leuchtzeit in ms so groß wie der Analogwert von P0
    np.clear()
    sleep(500)
```
  </div>
</div>
</div>

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/videos/calliope/pinfunktionen-analog-read-video.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>


<div markdown="1" class="aufgabe">
#### Analoger Sensor: Potentiometer auslesen

1. Beschreibe, was in dem Video zu beobachten ist, und erkläre dies anhand des Programms.
2. Begründe, warum der GPIO-Pin in diesem Fall als analoger Sensor genutzt wurde.

</div>

<details class="details">
<summary class="details__trigger details__title">Zusammenfassung: Die vier Funktionen eines GPIO-Pins</summary>
<div class="details__content" markdown="1">
<div class="notices green" markdown="1">
#### Die vier Funktionen eines GPIO-Pins

<!-- Beginn Bild mit Übersicht -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#37474f"/>
    </marker>
    <marker id="arrowWhite" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffffff"/>
    </marker>
  </defs>

  <rect x="0" y="0" width="1000" height="1000" fill="#ffffff"/>

  <text x="500" y="66" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="bold" fill="#1a237e">Vier Funktionen am Calliope</text>
  <text x="500" y="104" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#37474f">Sensoren geben ein – Aktoren geben aus. Signale sind digital (Stufen) oder analog (kontinuierlich).</text>

  <!-- Column headers -->
  <g font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="bold" text-anchor="middle">
    <rect x="190" y="126" width="380" height="56" rx="10" fill="#1a237e"/>
    <text x="380" y="164" fill="#ffffff">Digital (Stufen)</text>
    <rect x="600" y="126" width="380" height="56" rx="10" fill="#00695c"/>
    <text x="790" y="164" fill="#ffffff">Analog (kontinuierlich)</text>
  </g>

  <!-- Row labels -->
  <g font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="bold" text-anchor="middle">
    <rect x="14" y="200" width="150" height="380" rx="10" fill="#283593"/>
    <text x="89" y="372" fill="#ffffff" transform="rotate(-90 89 390)">Sensor (Eingabe)</text>
    <rect x="14" y="610" width="150" height="380" rx="10" fill="#ad1457"/>
    <text x="89" y="782" fill="#ffffff" transform="rotate(-90 89 800)">Aktor (Ausgabe)</text>
  </g>

  <!-- Quadrant backgrounds -->
  <rect x="190" y="200" width="380" height="380" rx="12" fill="#e8eaf6"/>
  <rect x="600" y="200" width="380" height="380" rx="12" fill="#e0f2f1"/>
  <rect x="190" y="610" width="380" height="380" rx="12" fill="#fce4ec"/>
  <rect x="600" y="610" width="380" height="380" rx="12" fill="#fff8e1"/>

  <!-- Quadrant titles with direction arrow to/from Calliope -->
  <g font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="bold" fill="#1a237e">
    <rect x="330" y="216" width="120" height="42" rx="8" fill="#5c6bc0"/>
    <text x="390" y="245" text-anchor="middle" fill="#ffffff">Calliope</text>
    <line x1="320" y1="237" x2="230" y2="237" stroke="#5c6bc0" stroke-width="5" marker-end="url(#arrow)"/>
    <text x="380" y="290" text-anchor="middle">Digitaler Sensor</text>
  </g>
  <g font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="bold" fill="#00695c">
    <rect x="740" y="216" width="120" height="42" rx="8" fill="#4db6ac"/>
    <text x="800" y="245" text-anchor="middle" fill="#ffffff">Calliope</text>
    <line x1="730" y1="237" x2="640" y2="237" stroke="#4db6ac" stroke-width="5" marker-end="url(#arrow)"/>
    <text x="790" y="290" text-anchor="middle">Analoger Sensor</text>
  </g>
  <g font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="bold" fill="#ad1457">
    <rect x="330" y="626" width="120" height="42" rx="8" fill="#ec407a"/>
    <text x="390" y="655" text-anchor="middle" fill="#ffffff">Calliope</text>
    <line x1="460" y1="647" x2="550" y2="647" stroke="#ec407a" stroke-width="5" marker-end="url(#arrow)"/>
    <text x="380" y="700" text-anchor="middle">Digitaler Aktor</text>
  </g>
  <g font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="bold" fill="#e65100">
    <rect x="740" y="626" width="120" height="42" rx="8" fill="#ffb300"/>
    <text x="800" y="655" text-anchor="middle" fill="#ffffff">Calliope</text>
    <line x1="870" y1="647" x2="960" y2="647" stroke="#ffb300" stroke-width="5" marker-end="url(#arrow)"/>
    <text x="790" y="700" text-anchor="middle">Analoger Aktor</text>
  </g>

  <!-- Signal sketches: axes -->
  <g stroke="#90a4ae" stroke-width="3" fill="none">
    <path d="M 230 500 L 230 320"/>
    <path d="M 230 500 L 520 500"/>
    <path d="M 640 500 L 640 320"/>
    <path d="M 640 500 L 930 500"/>
    <path d="M 230 910 L 230 730"/>
    <path d="M 230 910 L 520 910"/>
    <path d="M 640 910 L 640 730"/>
    <path d="M 640 910 L 930 910"/>
  </g>

  <!-- Digital sensor: step / square signal -->
  <path d="M 230 490 L 290 490 L 290 350 L 380 350 L 380 490 L 470 490 L 470 350 L 520 350" stroke="#283593" stroke-width="6" fill="none" stroke-linejoin="round"/>
  <text x="380" y="540" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#37474f" text-anchor="middle">nur zwei Zustände: 1 / 0</text>

  <!-- Analog sensor: continuous curve -->
  <path d="M 640 420 C 685 320 725 320 770 420 C 815 520 855 520 900 420" stroke="#00695c" stroke-width="6" fill="none"/>
  <text x="790" y="540" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#37474f" text-anchor="middle">jeder Zwischenwert möglich</text>

  <!-- Digital aktor: LED on/off -->
  <g>
    <rect x="300" y="780" width="46" height="46" rx="8" fill="#c62828"/>
    <rect x="390" y="780" width="46" height="46" rx="8" fill="#eeeeee" stroke="#bdbdbd" stroke-width="2"/>
    <text x="368" y="886" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#37474f" text-anchor="middle">aus – an – aus – an</text>
  </g>

  <!-- Analog aktor: fading LED -->
  <g>
    <rect x="680" y="780" width="46" height="46" rx="8" fill="#c62828" fill-opacity="0.15"/>
    <rect x="745" y="780" width="46" height="46" rx="8" fill="#c62828" fill-opacity="0.45"/>
    <rect x="810" y="780" width="46" height="46" rx="8" fill="#c62828" fill-opacity="0.8"/>
    <rect x="875" y="780" width="46" height="46" rx="8" fill="#c62828"/>
    <text x="800" y="886" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#37474f" text-anchor="middle">hell bis dunkel</text>
  </g>

  <!-- Examples -->
  <g font-family="Arial, Helvetica, sans-serif" font-size="19" fill="#455a64">
    <text x="380" y="318" text-anchor="middle">z.B. Taste A, Berührungspin</text>
    <text x="790" y="318" text-anchor="middle">z.B. Licht- und Temperatursensor</text>
    <text x="380" y="960" text-anchor="middle">z.B. einzelne LED-Punkte an / aus</text>
    <text x="790" y="960" text-anchor="middle">z.B. Lautsprecher, LED-Helligkeit (PWM)</text>
  </g>
</svg>

<!-- Ende Bild mit Übersicht -->

Ein GPIO-Pin des Calliope kann vier verschiedene Rollen einnehmen:

1. **Digitaler Aktor (Ausgang):** Der Pin gibt nur zwei Zustände aus (aus/an bzw. 0/1 bzw. 0V/3,3V). Damit lassen sich Bauteile wie LEDs, Relais oder Summer ein- und ausschalten.
2. **Analoger Aktor (Ausgang):** Der Pin gibt Zwischenwerte aus (0 bis 1023). Damit lassen sich Bauteile wie LEDs stufenlos dimmen oder Motoren in ihrer Geschwindigkeit regeln. Im Hintergrund läuft eine sogenannte *Pulsweitenmodulation*, die den Pin sehr schnell an- und ausschaltet. Das Verhältnis von an/3,3V zu aus/0V wird über den Analogwert eingestellt.
3. **Digitaler Sensor (Eingang):** Der Pin liest nur zwei Zustände ein. Damit lassen sich z. B. Taster abfragen, die entweder gedrückt oder nicht gedrückt sind.
4. **Analoger Sensor (Eingang):** Der Pin liest Zwischenwerte ein (0 bis 1023). Damit lassen sich Bauteile wie Potentiometer oder Temperatursensoren auslesen, die kontinuierliche Messwerte liefern.

Die Entscheidung, welche Funktion ein Pin einnimmt, hängt vom angeschlossenen Bauteil ab: Ein Bauteil, das Energie benötigt, um etwas zu tun, ist ein Aktor, und wird an einen Ausgang angeschlossen. Ein Bauteil, das Informationen über die Umgebung liefert, ist ein Sensor und wird an einen Eingang angeschlossen. Reicht dabei die Unterscheidung in zwei Zuständen aus, genügt die digitale Variante; werden Zwischenwerte benötigt, muss die analoge Variante verwendet werden.

</div>
</div>
</details>