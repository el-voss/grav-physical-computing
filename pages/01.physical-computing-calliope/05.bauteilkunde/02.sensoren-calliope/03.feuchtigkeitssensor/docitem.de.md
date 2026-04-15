---
title: 'Tropfen- und Feuchtigkeitssensor'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'feuchtigkeitssensor.jpg,tropfensensor.jpg,calliope-feuchtigkeitssensor.png,calliope-feuchtigkeitssensor-grove.png,makecode-erweiterung-grove.png,mc-grove-feuchtigkeitssensor-auslesen.png,mc-feuchtigkeitssensor-auslesen.png,orl-conf-feuchtigkeitssensor-auslesen.png,orl-conf-feuchtigkeitssensor.png,orl-conf-grove-feuchtigkeitssensor.png,orl-grove-feuchtigkeitssensor-auslesen.png'
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
  <div class="makecode content-block" markdown="1">
Zum Auslesen des Feuchtigkeitssensors per Grove lädt man zuerst die Grove-Erweiterung. Dort findet sich der abgebildete Block.

<div class="flex-box">
<div markdown="1">
![makecode-erweiterung-grove](makecode-erweiterung-grove.png?resize=500 "makecode-erweiterung-grove")
</div>
<div markdown="1">
![mc-grove-feuchtigkeitssensor-auslesen](mc-grove-feuchtigkeitssensor-auslesen.png?resize=500 "mc-grove-feuchtigkeitssensor-auslesen")
</div>
</div>

</div>

  </div>
  <div class="roberta content-block" markdown="1">
Zum Auslesen des Feuchtigkeitssensors muss man zunächst in der Konfiguration den Feuchtigkeitssensor ergänzen. Die Verbindung mit dem Calliope wird falsch dargestellt, aber der Pin richtig angegeben (A1).

Nach der Konfiguration kann man sich die Werte auf dem Display des Calliope anzeigen lassen. Die Werte werden in Prozent von 0% bis 100% angegeben.

<div class="flex-box">
<div markdown="1">
![orl-conf-grove-feuchtigkeitssensor](orl-conf-grove-feuchtigkeitssensor.png?resize=500 "orl-conf-grove-feuchtigkeitssensor")
</div>
<div markdown="1">
![orl-grove-feuchtigkeitssensor-auslesen](orl-grove-feuchtigkeitssensor-auslesen.png?resize=500 "orl-grove-feuchtigkeitssensor-auslesen")
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
  <div class="makecode content-block" markdown="1">
Zum Auslesen des Feuchtigkeitssensors lässt man sich aus der Kategorie "Pins" die analogen Werte des Signalpins anzeigen. Um eine prozentuale Anzeige zu erhalten, teilt man den Analogwert durch 1023.

![mc-feuchtigkeitssensor-auslesen](mc-feuchtigkeitssensor-auslesen.png?lightbox=1024&resize=500&classes=caption "Auslesen der Analogwerte des Feuchtigkeitssensors.")

  </div>
  <div class="roberta content-block" markdown="1">
Zum Auslesen des Feuchtigkeitssensors muss man zunächst in der Konfiguration den Feuchtigkeitssensor ergänzen.

Nach der Konfiguration kann man sich die analogen Werte zwischen 0 und 1023 auf dem Display des Calliope anzeigen lassen. Um eine prozentuale Anzeige zu erhalten, teilt man den Analogwert durch 1023.

<div class="flex-box">
<div markdown="1">
![orl-conf-feuchtigkeitssensor-auslesen](orl-conf-feuchtigkeitssensor-auslesen.png?resize=500 "orl-conf-feuchtigkeitssensor-auslesen")
</div>
<div markdown="1">
![orl-conf-feuchtigkeitssensor](orl-conf-feuchtigkeitssensor.png?resize=500 "orl-conf-feuchtigkeitssensor")
</div>
</div>

! Bei der Konfiguration als analoger Sensor stehen nicht alle oben aufgezählten Pins zur Auswahl. Dies ist ein Bug im Open Roberta Lab (Stand: 01.04.26). Insbesondere ist auch der Pin P0 nicht als analoger Sensor auswählbar, weshalb anders als in oben dargestellten Schaltskizze der Pin P1 als analoger Sensor ausgewählt wird. **Wenn der Pin P1 als analoger Sensor konfiguriert wird, sollte er auch mit dem Signalpin des Feuchtigkeitssensors verbunden werden.**

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
</div>
