---
title: 'Fahren mit Gedächtnis'
show_pageimage: true
image_width: 300
image_height: 400
taxonomy:
    Entwicklungsumgebung:
        - OpenRoberta
        - Makecode
        - Python
    Inhalte:
        - Variablen
    Niveau:
        - Fortgeschritten
---

!! Diese Seite ist noch nicht final!

[TOC]

**Ziel:** Der Bastelbot soll sich Werte merken können. Mit Hilfe von Variablen zählt er rückwärts, fährt wachsende Strecken und zählt schwarze Linien.

### Einstieg: Countdown

Beim Start einer Rakete läuft vorher ein Countdown. Genau das soll der Bastelbot nachbilden: Nach dem Start zeigt er auf der LED-Matrix eine Zahl an, zählt in Sekundenschritten herunter und fährt erst beim Erreichen der 0 los.

Das folgende Programm ist bereits fertig programmiert. Beschreibe in eigenen Worten, was in jeder Zeile passiert und was der Roboter dabei tut.

<div markdown="1" class="aufgabe">
#### Countdown verstehen

1. Beschreibe das unten abgebildete Programm Zeile für Zeile. Verwende dabei die Begriffe „Festlegen", „Anzeigen", „Warten", „Verändern" und „Wiederholen".
2. Erkläre, warum die Zahl erst nach der Pause verändert wird und nicht vorher.
3. Ändere das Programm so ab, dass der Countdown nicht von 10 bis 0, sondern von 20 bis 0 zählt.
4. Ändere das Programm so ab, dass der Countdown in Zweierschritten herunterzählt (20, 18, 16, ...).

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
![countdown-mc](countdown-mc.png?Lightbox=1024&resize=700&classes=caption "Das Countdown-Programm in Makecode.")
  </div>
  <div class="roberta content-block" markdown="1">
![countdown-orl](countdown-orl.png?Lightbox=1024&resize=700&classes=caption "Das Countdown-Programm in Open Roberta Lab.")
  </div>
  <div class="python content-block" markdown="1">

```python
from calliopemini import *

zaehler = 10                  # die Variable "zaehler" wird festgelegt (Initialisierung)
while zaehler > 0:             # Wiederholung, solange der Wert größer als 0 ist
    display.show(zaehler)      # der aktuelle Wert wird angezeigt
    sleep(1000)               # eine Sekunde warten
    zaehler = zaehler - 1     # der Wert wird um 1 verkleinert
display.show("Los!")           # der Countdown ist abgelaufen
```
  </div>
</div>
</div>
</div>

<details class="details">
<summary class="details__trigger details__title">Zusammenfassung: Variablen und Datentypen</summary>
<div class="details__content" markdown="1">
<div class="notices green" markdown="1">
#### Variablen

Eine Variable ist ein benannter Speicherplatz im Gedächtnis des Calliope. Man kann sich eine Variable wie eine Schublade mit einer Beschriftung vorstellen: In der Schublade liegt genau ein Wert, und die Beschriftung sorgt dafür, dass man den Wert jederzeit wiederfindet. Der Wert kann jederzeit gelesen, ersetzt und verändert werden.

Mit Variablen sind drei Grundoperationen verbunden:

1. **Festlegen (Initialisieren):** Die Variable wird angelegt und erhält einen Startwert, z. B. `zaehler = 10`.
2. **Lesen:** Der aktuelle Wert wird verwendet, z. B. für eine Anzeige, einen Vergleich oder als Parameter für einen Motor-Block.
3. **Verändern:** Der gespeicherte Wert wird ersetzt, z. B. um 1 verkleinert: `zaehler = zaehler - 1`.

Wichtig dabei: Bei der Operation `zaehler = zaehler - 1` wird zuerst der alte Wert gelesen, dann um 1 verkleinert und erst anschließend wieder abgespeichert. Der Calliope führt diese Schritte immer von rechts nach links aus.

**Achtung Verwechslungsgefahr:** Das Gleichheitszeichen `=` bedeutet in Python und in den Block-Umgebungen „speichere den Wert rechts in die Variable links". Es ist keine mathematische Gleichung. In Makecode und Open Roberta Lab heißen die Blöcke deshalb „setze" und „verändere".

#### Datentypen

In einer Variable wird immer ein Wert eines bestimmten Datentyps gespeichert. Die drei wichtigsten Datentypen sind:

- **Zahlen (integer):** ganze Zahlen wie 0, 10 oder -3. Mit Zahlen kann man rechnen, z. B. `zaehler = zaehler - 1`.
- **Text (string):** eine Zeichenkette wie "Los!", die z. B. mit `display.show("Los!")` angezeigt werden kann. Mit Text kann man nicht rechnen.
- **Wahrheitswerte (boolean):** genau zwei mögliche Werte, nämlich wahr und falsch. Wahrheitswerte entstehen z. B. beim Vergleich zweier Zahlen (`zaehler > 0`) und werden als Bedingung für Verzweigungen und Schleifen verwendet.

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
![variablen-mc](variablen-mc.png?Lightbox=1024&resize=700&classes=caption "Festlegen und Verändern einer Variable in Makecode.")

In Makecode legst du über die Kategorie „Variablen" eine neue Variable mit einem Namen an, z. B. `zaehler`. Der Block „setze" speichert einen Wert in der Variable, der Block „verändere" erhöht oder verringert den gespeicherten Wert. Die ovale Variable kannst du überall dort einsetzen, wo eine Zahl erwartet wird, z. B. in der LED-Matrix, in Warte-Blöcken oder in Motor-Blöcken.
  </div>
  <div class="roberta content-block" markdown="1">
![variablen-orl](variablen-orl.png?Lightbox=1024&resize=700&classes=caption "Festlegen und Verändern einer Variable in Open Roberta Lab.")

In Open Roberta Lab legst du über die Kategorie „Variablen" eine neue Variable mit einem Namen an, z. B. `zaehler`. Der Block „setze Variable auf" speichert einen Wert, der Block „addiere" erhöht den gespeicherten Wert. Mit „subtrahiere" verringert du ihn. Die Variable kannst du überall dort einsetzen, wo eine Zahl erwartet wird, z. B. in der LED-Matrix, in Warte-Blöcken oder in Motor-Blöcken.
  </div>
  <div class="python content-block" markdown="1">

```python
from calliopemini import *

zaehler = 10              # Zahl (integer)
name = "Los!"             # Text (string)

while zaehler > 0:        # Vergleich liefert einen Wahrheitswert (boolean)
    display.show(zaehler)
    zaehler = zaehler - 1 # oder kürzer: zaehler -= 1
display.scroll(name)
```

In Python legst du eine Variable an, indem du einfach einen Wert zuweist. Einen Datentyp musst du dabei nicht angeben; Python erkennt den Typ automatisch anhand des Wertes (10 → Zahl, "Los!" → Text). Der Wert wird mit `=` gespeichert. Mit `type(zaehler)` kannst du den Datentyp einer Variable abfragen.
  </div>
</div>
</div>
</div>
</div>
</details>

### Programmierung

<div markdown="1" class="aufgabe">
#### Eckige Spirale

Der Roboter soll eine quadratische Spirale fahren: Er fährt zunächst 1 Sekunde geradeaus und dreht sich dann um 90 Grad. Danach fährt er 2 Sekunden geradeaus, dreht sich wieder um 90 Grad, fährt 3 Sekunden geradeaus und so weiter. Die Seitenlänge wächst also mit jeder Seite um 1 Sekunde.

1. Überlege dir, welche Werte sich beim Fahren verändern und welche Werte gleich bleiben. Welche Variable benötigt dein Programm?
2. Programmiere den Roboter so, dass er die Spirale fährt. Nutze eine Variable für die Fahrdauer, die nach jeder Seite vergrößert wird.
3. Erweitere das Programm so, dass die Spirale nach 10 Seiten endet und der Roboter stehen bleibt.

![spirale-schematisch](spirale-schematisch.png?lightbox=1024&resize=500&classes=caption "Schematische Darstellung der quadratischen Spirale, die der Roboter fahren soll.")
</div>

<div markdown="1" class="aufgabe">
#### Zebrastreifen zählen

Vor dem Roboter liegt eine unbekannte Anzahl schwarzer Linien übereinander wie ein Zebrastreifen, getrennt durch weiße Zwischenräume. Der Roboter soll mit einem Infrarot-Sensor darüber fahren und am Ende die Anzahl der schwarzen Linien anzeigen.

1. Überlege dir, wie der Roboter erkennt, dass er eine neue schwarze Linie erreicht hat. Orientiere dich an den Analogwerten, die du auf der Seite „Linienverfolgung" ermittelt hast.
2. Überlege dir, warum es nicht ausreicht, einfach jede schwarze Messung zu zählen. Denke daran, dass der Sensor viele Messwerte pro Sekunde liefert, während der Roboter über eine Linie fährt.
3. Programmiere den Roboter so, dass er über den Zebrastreifen fährt und am Ende die Anzahl der schwarzen Linien auf der LED-Matrix anzeigt.

![zebrastreifen-schematisch](zebrastreifen-schematisch.png?lightbox=1024&resize=500&classes=caption "Schematische Darstellung des Zebrastreifens mit einer unbekannten Anzahl schwarzer Linien.")
</div>

<div markdown="1" class="aufgabe">
#### Fehler finden: Der verwirrte Countdown

Das folgende Programm soll einen Countdown von 10 bis 0 anzeigen. Leider verändert sich die angezeigte Zahl nie. Finde den Fehler und erkläre, warum die Variable nicht kleiner wird.

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
![debugging-countdown-mc](debugging-countdown-mc.png?Lightbox=1024&resize=700&classes=caption "Fehlerversion des Countdown-Programms in Makecode: Innerhalb der Schleife wird die Variable immer wieder auf 10 gesetzt statt verkleinert.")
  </div>
  <div class="roberta content-block" markdown="1">
![debugging-countdown-orl](debugging-countdown-orl.png?Lightbox=1024&resize=700&classes=caption "Fehlerversion des Countdown-Programms in Open Roberta Lab: Innerhalb der Schleife wird die Variable immer wieder auf 10 gesetzt statt verkleinert.")
  </div>
  <div class="python content-block" markdown="1">

```python
from calliopemini import *

zaehler = 10
while zaehler > 0:
    display.show(zaehler)
    zaehler = 10          # Fehler: Die Variable wird immer wieder auf den Startwert gesetzt
    sleep(1000)
```
  </div>
</div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Streckenzähler (Zusatzaufgabe)

Der Roboter soll eine freie Fahrt machen und dabei wie ein Kilometerzähler mitzählen, wie viele Sekunden er bereits gefahren ist. Der Streckenzähler wird jede Sekunde um 1 erhöht. Der Roboter hält an, wenn er ein Hindernis erkennt, und zeigt am Ende die gefahrene Zeit in Sekunden auf der LED-Matrix an.

1. Programmiere den Roboter so, dass er geradeaus fährt und die gefahrene Zeit in einer Variable speichert.
2. Lasse den Roboter beim Erkennen eines Hindernisses stoppen und die gespeicherte Zeit anzeigen.
3. Variiere die Aufgabe: Der Roboter soll die gefahrene Zeit erst nach dem Drücken von Taste A anzeigen.
</div>