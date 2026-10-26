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
media_order: 'countdown-orl.png,countdown-mc.png,variablen-mc.png,variablen-orl.png,debugging-countdown-mc.png,debugging-countdown-orl.png,spirale-schematisch.png,zebrastreifen-schematisch.png'
featured_image: zebrastreifen-schematisch.png
---

[TOC]

**Ziel:** Der Bastelbot soll sich Werte merken können. Mit Hilfe von Variablen zählt er rückwärts, fährt wachsende Strecken und zählt schwarze Linien.

### Einstieg: Countdown

Beim Start einer Rakete läuft vorher ein Countdown. Genau das soll der Bastelbot nachbilden: Nach dem Start zeigt er auf der LED-Matrix eine Zahl an, zählt in Sekundenschritten herunter und fährt erst beim Erreichen der 0 los.

<div markdown="1" class="aufgabe">
#### Countdown verstehen

1. Beschreibe, wie der Countdown im unten abgebildeten Programm umgesetzt wird.
2. Erkläre, warum die Zahl erst nach der Pause verändert wird und nicht vorher.
3. Beschreibe, wie das Programm geändert werden muss, damit der Countdown nicht von 10 bis 0, sondern von 20 bis 0 zählt.
4. Beschreibe, wie das Programm geändert werden muss, damit der Countdown in Zweierschritten herunterzählt (20, 18, 16, ...).

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

<pre><code class="language-python">
from calliopemini import *

zaehler = 10                        # Initialisierung
while zaehler > 0:                
    display.show(zaehler)      
    sleep(1000)                    
    zaehler = zaehler - 1       # Änderung wird von rechts nach links ausgeführt
display.scroll("Los!")            
</code></pre>
  </div>
</div>
</div>
</div>

<details class="details">
<summary class="details__trigger details__title">Zusammenfassung: Variablen und Datentypen</summary>
<div class="details__content" markdown="1">
<div class="notices green" markdown="1">
#### Variablen

Eine Variable ist ein benannter Speicherplatz im Gedächtnis des Calliope. Man kann sich eine Variable wie eine Schublade mit einer Beschriftung vorstellen: In der Schublade liegt genau ein Wert, und die Beschriftung sorgt dafür, dass man den Wert jederzeit wiederfindet. Der Wert kann jederzeit *gelesen*, *ersetzt* und *verändert* werden.

Mit Variablen sind drei Grundoperationen verbunden:

1. **Festlegen (Initialisieren):** Die Variable wird angelegt und erhält einen Startwert.
2. **Lesen:** Der aktuelle Wert wird verwendet, z. B. für eine Anzeige.
3. **Verändern:** Der gespeicherte Wert wird ersetzt oder geändert, z. B. um 1 verkleinert.

**Achtung Verwechslungsgefahr:** Das Gleichheitszeichen `=` hat in Python die Bedeutung einer Zuweisung. Der Wert rechts das Gleichheitszeichens wird der Variable links zugewiesen. Es ist keine mathematische Gleichung.

#### Datentypen

In einer Variable wird immer ein Wert eines bestimmten Datentyps gespeichert. Die drei wichtigsten Datentypen sind:

- **Zahlen (integer):** Ganze Zahlen wie 0, 10 oder -3.
- **Text (string):** Eine Zeichenkette wie "Los!".
- **Wahrheitswerte (boolean):** Genau zwei mögliche Werte, nämlich wahr und falsch. Wahrheitswerte entstehen z. B. beim Vergleich zweier Zahlen (wie: zaehler > 0) und werden als Bedingung für Verzweigungen und Schleifen verwendet.

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

In Makecode legst du über die Kategorie „Variablen" eine neue Variable mit einem Namen an, z. B. `zaehler`. Der Block „setze" speichert einen Wert in der Variable, der Block „ändere" erhöht oder verringert den gespeicherten Wert. Die ovale Variable kannst du überall dort einsetzen, wo eine Zahl erwartet wird, z. B. in der LED-Matrix, in Warte-Blöcken oder in Motor-Blöcken.

Um in einer Variable einen Text abzuspeichern, musst du unter Fortgeschritten -> Text den Block für Text (zwei Anführungsstriche) in die setzen-Block der Variable ziehen.
  </div>
  <div class="roberta content-block" markdown="1">
![variablen-orl](variablen-orl.png?Lightbox=1024&resize=700&classes=caption "Festlegen und Verändern einer Variable in Open Roberta Lab.")

In Open Roberta Lab legst du über die Kategorie „Variablen" eine neue Variable mit einem Namen an, z. B. `zaehler`. Der Block „schreibe <Variable>" speichert einen Wert in der Variable. Die Variable kannst du überall dort einsetzen, wo der Datentyp passt (dargestellt über die Farbe der "Nase").
  </div>
  <div class="python content-block" markdown="1">

<pre><code class="language-python">
from calliopemini import *

zaehler = 10                        # Zahl (integer)
name = "Los!"                      # Text (string)

while zaehler > 0:                  # Vergleich liefert einen Wahrheitswert (boolean)
    display.show(zaehler)
    sleep(1000)
    zaehler = zaehler - 1          # oder kürzer: zaehler -= 1
display.scroll(name)
</code></pre>

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
2. Programmiere den Roboter so, dass er die Spirale fährt.
3. Erweitere das Programm so, dass die Spirale nach 10 Seiten endet und der Roboter stehen bleibt.

![spirale-schematisch](spirale-schematisch.png?lightbox=1024&resize=500&classes=caption "Schematische Darstellung der quadratischen Spirale, die der Roboter fahren soll.")
</div>

<div markdown="1" class="aufgabe">
#### Zebrastreifen zählen

Vor dem Roboter liegt eine unbekannte Anzahl schwarzer Linien übereinander wie ein Zebrastreifen, getrennt durch weiße Zwischenräume. Der Roboter soll mit einem Infrarot-Sensor darüber fahren und am Ende die Anzahl der schwarzen Linien anzeigen.

1. Begründe, warum es nicht ausreicht, einfach jede schwarze Messung zu zählen. Denke daran, dass der Sensor viele Messwerte pro Sekunde liefert.
2. Programmiere den Roboter so, dass er über den Zebrastreifen fährt und am Ende die Anzahl der schwarzen Linien auf der LED-Matrix anzeigt.

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

<pre><code class="language-python">
from calliopemini import *

zaehler = 10
while zaehler > 0:
    display.show(zaehler)
    zaehler = -1       
    sleep(1000)
display.scroll("Los!")
</code></pre>
  </div>
</div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Streckenzähler (Zusatzaufgabe)

Der Roboter soll eine freie Fahrt machen und dabei wie ein Kilometerzähler mitzählen, wie viele Sekunden er bereits gefahren ist. Der Streckenzähler wird jede Sekunde um 1 erhöht. Der Roboter hält an, wenn er ein Hindernis erkennt, und zeigt am Ende die gefahrene Zeit in Sekunden auf der LED-Matrix an.

1. Programmiere den Roboter so, dass er geradeaus fährt und die gefahrene Zeit in einer Variable speichert. Nutze die integrierte Stoppuhr des Calliope.
2. Lasse den Roboter beim Erkennen eines Hindernisses stoppen und die gespeicherte Zeit anzeigen.
3. Variiere die Aufgabe: Der Roboter soll die gefahrene Zeit erst nach dem Drücken von Taste A anzeigen.
</div>


