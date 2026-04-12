---
title: 'Tropfen- und Feuchtigkeitssensor'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'feuchtigkeitssensor.jpg,tropfensensor.jpg,calliope-feuchtigkeitssensor.png,calliope-feuchtigkeitssensor-grove.png,makecode-erweiterung-grove.png,mc-grove-feuchtigkeitssensor-auslesen.png,mc-feuchtigkeitssensor-auslesen.png'
featured_image: feuchtigkeitssensor.jpg
taxonomy:
    Inhalte:
        - Tropfensensor
        - Feuchtigkeitssensor
    Niveau:
        - Basis
        - Fortgeschritten
---

Mit einem Tropfensensor lässt sich die Feuchtigkeit auf dem Sensorblatt messen. Solche Sensoren werden zum Beispiel in Windschutzscheiben von Autos eingesetzt, um die Scheibenwischer und ihre Geschwindigkeit zu steuern. Feuchtigkeitssensoren funktionieren im Wesentlichen genauso, allerdings sind die Kontakte dabei so weit auseinander, dass durch Tropfen noch kein Stromfluss entsteht, sondern erst durch zum Beispiel die feuchte Erde eines Blumentopfes, der automatisch bewässert werden soll.

<div class="flex-box">
<div markdown="1">![Tropfensensor.](tropfensensor.jpg?resize=300&classes=caption "Tropfensensor.")</div>
<div markdown="1">![Feuchtigkeitssensor.](feuchtigkeitssensor.jpg?resize=300&classes=caption "Feuchtigkeitssensor.")</div>
</div>

Die Feuchtigkeit kann leider nicht als absoluter Wert gemessen werden. Mit Hilfe des Sensors bekommt man einen Analogwert zwischen 0 und 1023 (in der Realität bis maximal 700), der sich grob einordnen lässt:

| Analogwert | Bedeutung |
| ---------------|----------------|
| 0 bis 300 | trocken |
| 300 bis 600 | feucht |
| größer 600 | sehr feucht |

## Verbindung mit Grove

### Schaltung

![calliope-feuchtigkeitssensor-grove](calliope-feuchtigkeitssensor-grove.png?lightbox=1024&resize=500&classes=caption "Verbindung des Feuchtigkeitssensors mit dem Calliope über den Grove-Verbinder. Man kann nur den rechten Anschluss A1 verwenden, nicht den linken Anschluss A0.")

### Programmierung

<!-- Tabs für die Auswahl -->
<div class="tab-group" data-group="programmierumgebung">
<div class="tabs">
  <button class="tab-button" data-umgebung="makecode">Makecode</button>
  <button class="tab-button" data-umgebung="roberta">Open Roberta Lab</button>
  <button class="tab-button" data-umgebung="python">Python</button>
</div>

<!-- Inhalte für jede Programmierumgebung -->
<div class="tab-content">
  <div class="makecode content-block">
Zum Auslesen des Feuchtigkeitssensors per Grove lädt man zuerst die Grove-Erweiterung. Dort findet sich der abgebildete Block.

<div class="flex-box">
<div markdown="1">
![makecode-erweiterung-grove](makecode-erweiterung-grove.png?resize=500"makecode-erweiterung-grove")
</div>
<div markdown="1">
![mc-grove-feuchtigkeitssensor-auslesen](mc-grove-feuchtigkeitssensor-auslesen.png?resize=500 "mc-grove-feuchtigkeitssensor-auslesen")
</div>
</div>

</div>

  </div>
  <div class="roberta content-block" markdown="1">
Zum Auslesen des Feuchtigkeitssensors muss man zunächst die Konfiguration der Pins als digitaler bzw. analoger Sensor vornehmen.

Nach der Konfiguration kann man sich die Werte auf dem Display des Calliope anzeigen lassen.

<div class="flex-box">
<div markdown="1">
![orl-tcrt5000-digital-auslesen](orl-tcrt5000-digital-auslesen.png?resize=500&classes=caption "Auslesen des digitalen Wertes des TCRT5000.")
</div>
<div markdown="1">
![orl-tcrt5000-analog-auslesen](orl-tcrt5000-analog-auslesen.png?resize=500&classes=caption "Auslesen des analogen Wertes des TCRT5000.")
</div>
</div>

  </div>
  <div class="python content-block" markdown="1">
Das gelbe Signalkabel des Feuchtigkeitssensors ist bei dem Grove-Anschluss mit dem Pin A1_RX (C16) verbunden. Von diesem werden die Analogwerte abgerufen und auf dem Display angezeigt.

```python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    feuchtigkeit = pin_A1_RX.read_analog() # Wert von 0–1023 
    display.scroll(feuchtigkeit)
    display.clear()
    sleep(500)
```

  </div>
</div>
</div>

## Verbindung mit der Pinleiste

### Schaltung

![calliope-feuchtigkeitssensor](calliope-feuchtigkeitssensor.png?lightbox=1024&resize=500&classes=caption "Anschluss des Feuchtigkeitssensors an der Pinleiste des Calliope. Für den Tropfensensor erfolgt der Anschluss analog.")

Das Signalkabel S (in der Schaltskizze blau eingezeichnet) muss mit einem Pin verbunden werden, der ein analoges Signal lesen kann. Dafür kommen folgende Pins in Frage: P0, P1, P2, C4, C10, C16, C18. Achtung: Die Pins können schon an anderer Stelle verwendet worden sein, z. B. über die Ringpads (P0, P1, P2) oder den Grove-Anschluss A1 (betrifft C16).

### Programmierung

<!-- Tabs für die Auswahl -->
<div class="tab-group" data-group="programmierumgebung">
<div class="tabs">
  <button class="tab-button" data-umgebung="makecode">Makecode</button>
  <button class="tab-button" data-umgebung="roberta">Open Roberta Lab</button>
  <button class="tab-button" data-umgebung="python">Python</button>
</div>

<!-- Inhalte für jede Programmierumgebung -->
<div class="tab-content">
  <div class="makecode content-block">
Zum Auslesen des Feuchtigkeitssensors lässt man sich aus der Kategorie "Pins" die analogen Werte des Signalpins anzeigen. Um eine prozentuale Anzeige zu erhalten, teilt man den Analogwert durch 1023.

![mc-feuchtigkeitssensor-auslesen](mc-feuchtigkeitssensor-auslesen.png?lightbox=1024&resize=500&classes=caption "Auslesen der Analogwerte des Feuchtigkeitssensors.")

  </div>
  <div class="roberta content-block" markdown="1">
Zum Auslesen des Feuchtigkeitssensors muss man zunächst die Konfiguration des Signalpins als analoger Sensor vornehmen.

![orl-tcrt5000-konf](orl-tcrt5000-konf.png?resize=500&classes=caption "Konfiguration von Pin P1 als digitaler bzw. analoger Sensor. Achtung: Die dargestellte Doppelkonfiguration ist nicht sinnvoll, sondern nur zu Demonstrationszwecken vorgenommen!")

! Bei der Konfiguration als analoger Sensor stehen nicht alle oben aufgezählten Pins zur Auswahl. Dies ist ein Bug im Open Roberta Lab (Stand: 01.04.26). Insbesondere ist auch der Pin P0 nicht als analoger Sensor auswählbar, weshalb anders als in oben dargestellten Schaltskizze der Pin P1 als analoger Sensor ausgewählt wird. **Wenn der Pin P1 als analoger Sensor konfiguriert wird, sollte er auch mit dem Signalpin des Feuchtigkeitssensors verbunden werden.**

Nach der Konfiguration kann man sich die Werte auf dem Display des Calliope anzeigen lassen.


  </div>
  <div class="python content-block" markdown="1">
Das in der Schaltskizze blau eingezeichnete Signalkabel des Feuchtigkeitssensors ist mit dem Pin P0 verbunden. Von diesem werden die Analogwerte abgerufen und auf dem Display angezeigt. Um eine prozentuale Anzeige zu erhalten, teilt man den Analogwert durch 1023.

```python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    feuchtigkeit = pin0.read_analog() # Wert von 0–1023 
    display.scroll(feuchtigkeit)
    display.clear()
    sleep(500)
```

  </div>
</div>
</div>




## Aufgaben

<div markdown="1" class="projekt">
#### Automatischer Scheibenwischer

Baue einen Scheibenwischer, der automatisch startet, wenn Feuchtigkeit registriert wird. Je nach Feuchtigkeitslevel soll eine von drei Geschwindigkeiten ausgewählt werden.

*Hinweis: Du kannst die vorkonfigurierten Blöcke von Nepo für den Tropfensensor verwenden oder einen analogen Sensor konfigurieren, dessen Analogwert du selbst in einen Prozentwert umrechnest (0 entspricht 0 %, 1023 entspricht 100 %).*
</div>
