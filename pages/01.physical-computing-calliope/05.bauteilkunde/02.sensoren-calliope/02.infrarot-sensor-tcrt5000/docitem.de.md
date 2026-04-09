---
title: 'Infrarot-Sensor TCRT5000'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'infrarot-sensoren.jpg,schaltskizze-calliope-infrarot-tcrt5000.png,tcrt5000-auslesen-analog-makecode.png,tcrt5000-digital-auslesen-makecode.png,makecode-serial-monitor-tcrt5000.png,tcrt5000-auslesen-analog-makecode-anzeige.png,orl-tcrt5000-analog-auslesen.png,orl-tcrt5000-digital-auslesen.png,orl-tcrt5000-konf.png,serial-monitor-starten.png,orl-tcrt5000-seriell-ausgeben.png,py-tcrt5000-seriell.png'
featured_image: infrarot-sensoren.jpg
---

Der Infrarot-Sensor TCRT5000 sendet Infrarotstrahlen aus und registriert die reflektierten Infrarotstrahlen aus der Umgebung. Dadurch können kurze Distanzen gemessen oder Farben erkannt werden. Zu seinen weiteren Einsatzzwecken gehört die Linienverfolgung bei Robotern und der Einsatz als Lichtschranke - so lässt sich bei Seifenspendern erkennen, ob eine Hand nah am Sensor ist und in 3D-Druckern lässt sich erkennen, ob noch Filament vorhanden ist oder nichts mehr nachkommt.

![infrarot-sensoren](infrarot-sensoren.jpg?lightbox=1024&resize=500&classes=caption "Infrarot-Sensor-Modul TCRT5000.")

Auf der Unterseite des Moduls sind zwei Seiten zu erkennen. Die durchsichtige/bläuliche Seite ist eine Infrarot-LED, die Licht im Infrarot-Bereich aussendet, welches für das menschliche Auge unsichtbar ist. Das Infrarot-Licht wird (abhängig von der Art und Farbe der Oberfläche) unterschiedlich gut reflektiert. Das reflektierte Infrarot-Licht trifft dann auf die dunkle Seite des Sensors. Dort befindet sich ein Phototransistor, der die Infrarotstrahlen registriert und daraus einen Strom macht. Der Strom ist umso stärker, je mehr Infrarotstrahlen auf den Phototransistor treffen. Die dunkle Kunstharzschicht dient dazu, das normale Tageslicht herauszufiltern, damit der Sensor nicht schon durch das normale Tageslicht ausgelöst wird, das ebenfalls Infrarotstrahlen enthält.

## Anschluss am Calliope

Durch den Stromfluss entsteht eine Spannung, die am Calliope registriert werden kann. Dabei gibt es zwei Möglichkeiten:

- Am `A0`-Pin des Moduls kann die Spannung direkt als analoges Signal gemessen werden.
- Am `D0`-Pin des Moduls wird ein digitales Signal ausgegeben. Ab einer bestimmten Stärke der reflektierten Strahlen ist das Signal am `D0`-Pin HIGH, sonst LOW. Die Grenze wird über das Trimmpotentiometer auf dem Modul eingestellt.

In der Regel wird man nur eines dieser Signale benötigen. Im folgenden Schaltplan ist der Vollständigkeit halber trotzdem der Anschluss beider Pins gezeigt.

![schaltskizze-calliope-infrarot-tcrt5000](schaltskizze-calliope-infrarot-tcrt5000.png?lightbox=1024&resize=500&classes=caption "Schaltskizze zum Anschluss des Sensors TCRT5000 am Calliope.")

! **Achtung:** Einige Pins auf der Pinleiste des Calliope sind doppelt belegt. So werden die im Schaltplan genutzten Pins P0 und P1 auch für die entsprechenden Ringpads (goldene Ringe) genutzt. Wenn dort also schon ein anderes Bauteil angeschlossen ist, lassen sich diese Pins nicht mehr nutzen. 
! - Die freien Pins zur allgemeinen Verwendung sind folgende: P0, P1, P2, P3, C8, C9, C13, C14, C15. 
! - Nicht alle davon eignen sich für das Lesen eines analogen Signals (Verbindung mit A0 des TCRT5000). Mit dem Ausgang A0 des TCRT5000 können nur folgende Pins verbunden werden: P0, P1, P2, C4, C10, C16, C18. 
! 
! Weitere Informationen finden sich in der [Dokumentation zu den Pins des Calliope](https://docs.calliope.cc/tech/hardware/pins/).

## Programmierung

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
Zum Auslesen des TCRT5000 lässt man sich aus der Kategorie "Pins" die digitalen bzw. analogen Werte der entsprechenden Pins anzeigen.

<div class="flex-box">
<div markdown="1">
![tcrt5000-digital-auslesen-makecode](tcrt5000-digital-auslesen-makecode.png?resize=500&classes=caption "Auslesen des digitalen Wertes des TCRT5000.")
</div>
<div markdown="1">
![tcrt5000-auslesen-analog-makecode-anzeige](tcrt5000-auslesen-analog-makecode-anzeige.png?resize=500&classes=caption "Auslesen des analogen Wertes des TCRT5000.")
</div>
</div>

Für das Auslesen des analogen Wertes bietet es sich an, den analogen Wert über die serielle Schnittstelle (USB-Kabel) an den Computer schicken zu lassen und dort visualisieren zu lassen. Der Befehl dazu findet sich in der Kategorie "Seriell". Nach dem Übertragen des Programms kann man im linken Fensterbereich auf "Daten anzeigen Calliope mini" auswählen und bekommt die unten abgebildete Ansicht.

<div class="flex-box">
<div markdown="1">
![tcrt5000-auslesen-analog-makecode](tcrt5000-auslesen-analog-makecode.png?resize=500&classes=caption "Senden des analogen Wertes über die serielle Schnittstelle (USB-Kabel) an den Computer.")
</div>
<div markdown="1">
![makecode-serial-monitor-tcrt5000](makecode-serial-monitor-tcrt5000.png?lightbox=1024&resize=500&classes=caption "Visualisierung der erhaltenen Werte in Makecode. Dabei wird der Sensor über unterschiedlich helle bzw. dunkle Flächen bewegt.")
</div>
</div>

  </div>
  <div class="roberta content-block" markdown="1">
Zum Auslesen des TCRT5000 muss man zunächst die Konfiguration der Pins als digitaler bzw. analoger Sensor vornehmen.

![orl-tcrt5000-konf](orl-tcrt5000-konf.png?resize=500&classes=caption "Konfiguration von Pin P1 als digitaler bzw. analoger Sensor. Achtung: Die dargestellte Doppelkonfiguration ist nicht sinnvoll, sondern nur zu Demonstrationszwecken vorgenommen!")

! Bei der Konfiguration als analoger Sensor stehen nicht alle oben aufgezählten Pins zur Auswahl. Dies ist ein Bug im Open Roberta Lab (Stand: 01.04.26). Insbesondere ist auch der Pin P0 nicht als analoger Sensor auswählbar, weshalb anders als in oben dargestellten Schaltskizze der Pin P1 als analoger Sensor ausgewählt wird. **Wenn der Pin P1 als analoger Sensor konfiguriert wird, sollte er auch mit Pin A0 des TCRT5000 verbunden werden.**

Nach der Konfiguration kann man sich die Werte auf dem Display des Calliope anzeigen lassen.

<div class="flex-box">
<div markdown="1">
![orl-tcrt5000-digital-auslesen](orl-tcrt5000-digital-auslesen.png?resize=500&classes=caption "Auslesen des digitalen Wertes des TCRT5000.")
</div>
<div markdown="1">
![orl-tcrt5000-analog-auslesen](orl-tcrt5000-analog-auslesen.png?resize=500&classes=caption "Auslesen des analogen Wertes des TCRT5000.")
</div>
</div>

Für das Auslesen des analogen Wertes bietet es sich an, den analogen Wert über die serielle Schnittstelle (USB-Kabel) an den Computer schicken zu lassen, um den Verlauf besser nachzuvollziehen. Nach dem Übertragen des Programms kann man im [Open Roberta Connector](https://jira.iais.fraunhofer.de/wiki/spaces/ORInfo/pages/90802891/Open+Roberta+Connector?target=_blank) die Verbindung mit dem Calliope herstellen und den Seriellen Monitor starten (siehe Abbildung). Um die Werte zu visualisieren, kann man sie optional in eine Tabellenkalkulation kopieren und dort ein Diagramm erstellen.

<div class="flex-box">
<div markdown="1">
![orl-tcrt5000-seriell-ausgeben](orl-tcrt5000-seriell-ausgeben.png?resize=500&classes=caption "Senden des analogen Wertes über die serielle Schnittstelle (USB-Kabel) an den Computer.")
</div>
<div markdown="1">
![serial-monitor-starten](serial-monitor-starten.png?resize=500&classes=caption "Öffnen des seriellen Monitors im Open Roberta Connector.")
</div>
</div>

  </div>
  <div class="python content-block" markdown="1">
Zum Auslesen des TCRT5000 lässt man sich aus der Kategorie "Pins" die digitalen bzw. analogen Werte der entsprechenden Pins anzeigen.

<div class="flex-box">
<div markdown="1">
´´´python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    display.show(pin1.read_digital())
    display.clear()
    sleep(1000)
´´´
Auslesen des digitalen Werts des TCRT5000.
</div>
<div markdown="1">
´´´python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    display.scroll(pin0.read_analog())
    display.clear()
    sleep(1000)
´´´
Auslesen des analogen Werts des TCRT5000.
</div>
</div>

Für das Auslesen des analogen Wertes bietet es sich an, den analogen Wert über die serielle Schnittstelle (USB-Kabel) an den Computer schicken zu lassen, um den Verlauf besser nachzuvollziehen. Nach dem Übertragen des Programms kann man direkt im Python Editor den Seriellen Monitor öffnen. Um die Werte zu visualisieren, kann man sie optional in eine Tabellenkalkulation kopieren und dort ein Diagramm erstellen.

<div class="flex-box">
<div markdown="1">
´´´python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    print(pin0.read_analog())
    sleep(500)
´´´
Ausgabe des Analogwerts des TCRT5000 auf dem seriellen Monitor.
</div>
<div markdown="1">
![py-tcrt5000-seriell](py-tcrt5000-seriell.png?lightbox=1024&resize=400&classes=caption "Ausgabe der Analogwerte des TCRT5000 auf dem seriellen Monitor.")
</div>
</div>
  </div>
</div>
</div>

## Aufgaben

<div markdown="1" class="aufgabe">
#### Farberkennung

Um herauszufinden, wie man mit Hilfe des Sensors unterschiedliche Farben erkennen kann, sollen die Analogwerte zu unterschiedlichen Farben dokumentiert werden.

1. Skizziere einen Versuchsaufbau und notiere den Abstand des Sensors zum farbigen Gegenstand. Begründe, dass der Sensor dabei immer den gleichen Abstand zum farbigen Gegenstand haben muss.
2. Schließe den Sensor an und erstelle ein kleines Programm zum Auslesen des Analogwertes.
3. Halte unterschiedliches farbiges Papier vor den Sensor und notiere den zugehörigen Analogwert. Welche Farben / Farbtöne lassen sich besonders gut erkennen und warum?
4. Implementiere ein Programm, das die vorher untersuchten Farben unterscheiden kann.
5. Untersuche die Abhängigkeit der Werte von der Umgebungshelligkeit (nutze deine Handytaschenlampe zum Erhellen oder deine Hände zum Verdunkeln!).
</div>

<div markdown="1" class="aufgabe">
#### Abstandsmessung

Laut [Datenblatt des TCRT5000](https://www.mouser.de/datasheet/2/427/tcrt5000-240273.pdf) lassen sich mit ihm kurze Entfernungen bis zu 15mm messen. Dies soll im Folgenden untersucht werden.

1. Skizziere einen Versuchsaufbau und notiere die Farbe des Gegenstands, dessen Abstand gemessen werden soll. Begründe, dass die Untersuchung zur Abstandsmessung nur für Gegenstände mit derselben Farbe gilt.
2. Schließe den Sensor an und erstelle ein kleines Programm zum Auslesen des Analogwertes.
3. Halte den Gegenstand in unterschiedlichen Abständen vor den Sensor und notiere den zugehörigen Analogwert. Ermittle (z. B. per Regression) einen funktionalen Zusammenhang zwischen Analogwert und Abstand.
4. Implementiere ein Programm, das aus dem Analogwert automatisch den Abstand berechnet.
5. Untersuche die Abhängigkeit der Werte von der Umgebungshelligkeit (nutze deine Handytaschenlampe zum Erhellen oder deine Hände zum Verdunkeln!).
</div>

