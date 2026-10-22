---
title: 'Pinfunktionen im Überblick'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'pinfunktionen-analog-read-mc.png,pinfunktionen-analog-read-orl-konf.png,pinfunktionen-analog-read-orl.png,pinfunktionen-analog-read.png,pinfunktionen-analog-write-mc.png,pinfunktionen-analog-write-orl-konf.png,pinfunktionen-analog-write-orl.png,pinfunktionen-digital-read-mc.png,pinfunktionen-digital-read-orl-konf.png,pinfunktionen-digital-read-orl.png,pinfunktionen-digital-read.png,pinfunktionen-digital-write-mc.png,pinfunktionen-digital-write-orl-konf.png,pinfunktionen-digital-write-orl.png,pinfunktionen-digital-write.png'
---

Jeder GPIO-Pin ("General Purpose Input Output") des Calliope kann grundsätzlich zwei Rollen einnehmen: Er kann als **Ausgang** ein angeschlossenes Bauteil (einen Aktor) ansteuern oder als **Eingang** ein angeschlossenes Bauteil (einen Sensor) auslesen. Dabei wird jeweils zwischen einer digitalen Variante mit nur zwei Zuständen (an/aus bzw. 0/1) und einer analogen Variante mit vielen Zwischenwerten (z. B. eine Zahl zwischen 0 und 1023) unterschieden. Insgesamt ergeben sich daraus vier Funktionen, die auf dieser Seite nacheinander vorgestellt werden.

Für die folgenden Beispiele wird dabei stets der Pin P0 gewählt. Aber auch die weiteren Pins verfügen in der Regel über die gleichen Funktionen. Zu beachten ist, dass einige Pins doppelt genutzt werden und daher vielleicht schon an anderer Stelle belegt sind. Eine Übersicht über alle Pins und deren Funktionen findet sich in der [Dokumentation zu den Pins des Calliope v3](https://docs.calliope.cc/tech/hardware/pins/?target="_blank").

<div markdown="1" class="aufgabe">
#### Digitaler Aktor: LED ein- und ausschalten

Im folgenden Schaltplan ist eine LED über einen Vorwiderstand mit dem GPIO-Pin C1 verbunden. Der Pin wird als digitaler Aktor genutzt: Er gibt entweder einen hohen Pegel (die LED leuchtet) oder einen niedrigen Pegel (die LED ist aus) aus.

![Schaltplan LED](pinfunktionen-digital-write.png?Lightbox=1024&resize=500&classes=caption "Schaltplan: Die LED ist über einen Vorwiderstand mit dem Pin C1 verbunden.")

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

![pinfunktionen-digital-write-orl-konf](pinfunktionen-digital-write-orl-konf.png?Lightbox=1024&resize=500&classes=caption "Konfiguration: Der Pin C1 wird als digitaler Ausgang eingestellt.")

Anschließend kann der Pin im Programm geschaltet werden:

![pinfunktionen-digital-write-orl](pinfunktionen-digital-write-orl.png?Lightbox=1024&resize=500&classes=caption "Im Open Roberta Lab schaltet der Block <schreibe digital auf Pin> die LED ein und aus.")
  </div>
  <div class="python content-block" markdown="1">
```python
# HIER PYTHON EINFÜGEN
```
  </div>
</div>
</div>

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/pinfunktionen-digital-write-video.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>

1. Beschreibe, was in dem Video zu beobachten ist.
2. Begründe, warum der GPIO-Pin in diesem Fall als digitaler Aktor genutzt wurde.

</div>

<div markdown="1" class="aufgabe">
#### Analoger Aktor: LED dimmen

Im folgenden Schaltplan ist eine LED über einen Vorwiderstand mit dem GPIO-Pin C1 verbunden. Der Pin wird hier als analoger Aktor genutzt: Statt die LED nur ein- oder auszuschalten, gibt der Pin Zwischenwerte aus, sodass sich die Helligkeit der LED stufenlos regeln lässt.

![Schaltplan LED dimmen](pinfunktionen-digital-write.png?Lightbox=1024&resize=500&classes=caption "Schaltplan: Die LED ist über einen Vorwiderstand mit dem Pin C1 verbunden.")

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

![pinfunktionen-analog-write-orl-konf](pinfunktionen-analog-write-orl-konf.png?Lightbox=1024&resize=500&classes=caption "Konfiguration: Der Pin C1 wird als analoger Ausgang eingestellt.")

Anschließend kann der Pin im Programm mit analogen Werten angesteuert werden:

![pinfunktionen-analog-write-orl](pinfunktionen-analog-write-orl.png?Lightbox=1024&resize=500&classes=caption "Im Open Roberta Lab schreibt der Block <schreibe analog auf Pin> einen analogen Wert auf den Pin.")
  </div>
  <div class="python content-block" markdown="1">
```python
# HIER PYTHON EINFÜGEN
```
  </div>
</div>
</div>

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/pinfunktionen-analog-write-video.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>

1. Beschreibe, was in dem Video zu beobachten ist.
2. Begründe, warum der GPIO-Pin in diesem Fall als analoger Aktor genutzt wurde.

</div>

<div markdown="1" class="aufgabe">
#### Digitaler Sensor: Taster auslesen

Im folgenden Schaltplan ist ein Taster mit dem GPIO-Pin C1 verbunden. Der Pin wird als digitaler Sensor genutzt: Er liest nur zwei Zustände ein, nämlich "Taster gedrückt" oder "Taster nicht gedrückt".

![Schaltplan Taster](pinfunktionen-digital-read.png?Lightbox=1024&resize=500&classes=caption "Schaltplan: Der Taster ist mit dem Pin C1 verbunden.")

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

![pinfunktionen-digital-read-orl-konf](pinfunktionen-digital-read-orl-konf.png?Lightbox=1024&resize=500&classes=caption "Konfiguration: Der Pin C1 wird als digitaler Eingang eingestellt.")

Anschließend kann der Pin im Programm ausgelesen werden:

![pinfunktionen-digital-read-orl](pinfunktionen-digital-read-orl.png?Lightbox=1024&resize=500&classes=caption "Im Open Roberta Lab liest der Block <lese digital von Pin> den Zustand des Tasters ein.")
  </div>
  <div class="python content-block" markdown="1">
```python
# HIER PYTHON EINFÜGEN
```
  </div>
</div>
</div>

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/pinfunktionen-digital-read-video.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>

1. Beschreibe, was in dem Video zu beobachten ist.
2. Begründe, warum der GPIO-Pin in diesem Fall als digitaler Sensor genutzt wurde.

</div>

<div markdown="1" class="aufgabe">
#### Analoger Sensor: Potentiometer auslesen

Im folgenden Schaltplan ist ein Potentiometer mit dem GPIO-Pin C1 verbunden. Der Pin wird als analoger Sensor genutzt: Er liest nicht nur zwei Zustände, sondern viele Zwischenwerte ein, die die Stellung des Drehreglers widerspiegeln.

![Schaltplan Potentiometer](pinfunktionen-analog-read.png?Lightbox=1024&resize=500&classes=caption "Schaltplan: Das Potentiometer ist mit dem Pin C1 verbunden.")

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

![pinfunktionen-analog-read-orl-konf](pinfunktionen-analog-read-orl-konf.png?Lightbox=1024&resize=500&classes=caption "Konfiguration: Der Pin C1 wird als analoger Eingang eingestellt.")

Anschließend kann der Pin im Programm ausgelesen werden:

![pinfunktionen-analog-read-orl](pinfunktionen-analog-read-orl.png?Lightbox=1024&resize=500&classes=caption "Im Open Roberta Lab liest der Block <lese analog von Pin> den Wert des Potentiometers ein.")
  </div>
  <div class="python content-block" markdown="1">
```python
# HIER PYTHON EINFÜGEN
```
  </div>
</div>
</div>

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/pinfunktionen-analog-read-video.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>

1. Beschreibe, was in dem Video zu beobachten ist.
2. Begründe, warum der GPIO-Pin in diesem Fall als analoger Sensor genutzt wurde.

</div>

<details class="details">
<summary class="details__trigger details__title">Zusammenfassung: Die vier Funktionen eines GPIO-Pins</summary>
<div class="details__content" markdown="1">
<div class="notices green" markdown="1">
#### Die vier Funktionen eines GPIO-Pins

Ein GPIO-Pin des Calliope kann vier verschiedene Rollen einnehmen:

1. **Digitaler Aktor (Ausgang):** Der Pin gibt nur zwei Zustände aus (an/aus bzw. 0/1). Damit lassen sich Bauteile wie LEDs, Relais oder Summer ein- und ausschalten.
2. **Analoger Aktor (Ausgang):** Der Pin gibt Zwischenwerte aus (z. B. 0 bis 1023). Damit lassen sich Bauteile wie LEDs stufenlos dimmen oder Motoren in ihrer Geschwindigkeit regeln.
3. **Digitaler Sensor (Eingang):** Der Pin liest nur zwei Zustände ein. Damit lassen sich Bauteile wie Taster oder Schalter abfragen, die entweder gedrückt oder nicht gedrückt sind.
4. **Analoger Sensor (Eingang):** Der Pin liest Zwischenwerte ein. Damit lassen sich Bauteile wie Potentiometer oder Temperatursensoren auslesen, die kontinuierliche Messwerte liefern.

Die Entscheidung, welche Funktion ein Pin einnimmt, hängt vom angeschlossenen Bauteil ab: Ein Bauteil, das Energie benötigt, um etwas zu tun, ist ein Aktor, und wird an einen Ausgang angeschlossen. Ein Bauteil, das Informationen über die Umgebung liefert, ist ein Sensor und wird an einen Eingang angeschlossen. Reicht dabei die Unterscheidung in zwei Zuständen aus, genügt die digitale Variante; werden Zwischenwerte benötigt, muss die analoge Variante verwendet werden.

</div>
</div>
</details>