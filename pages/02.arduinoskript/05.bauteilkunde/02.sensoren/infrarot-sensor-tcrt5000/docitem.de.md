---
title: 'Infrarot-Sensor TCRT5000'
show_pageimage: true
image_width: 300
image_height: 300
featured_image: infrarot-sensoren.jpg
---

Der Infrarot-Sensor TCRT5000 sendet Infrarotstrahlen aus und registriert die reflektierten Infrarotstrahlen aus der Umgebung. Dadurch können kurze Distanzen gemessen oder Farben erkannt werden. Zu seinen weiteren Einsatzzwecken gehört die Linienverfolgung bei Robotern und der Einsatz als Lichtschranke - so lässt sich bei Seifenspendern erkennen, ob eine Hand nah am Sensor ist und in 3D-Druckern lässt sich erkennen, ob noch Filament vorhanden ist oder nichts mehr nachkommt.

![infrarot-sensoren](infrarot-sensoren.jpg?lightbox=1024&resize=500&classes=caption "Infrarot-Sensor-Modul TCRT5000.")

Auf der Unterseite des Moduls sind zwei Seiten zu erkennen. Die durchsichtige/bläuliche Seite ist eine Infrarot-LED, die Licht im Infrarot-Bereich aussendet, welches für das menschliche Auge unsichtbar ist. Das Infrarot-Licht wird (abhängig von der Art und Farbe der Oberfläche) unterschiedlich gut reflektiert. Das reflektierte Infrarot-Licht trifft dann auf die dunkle Seite des Sensors. Dort befindet sich ein Phototransistor, der die Infrarotstrahlen registriert und daraus einen Strom macht. Der Strom ist umso stärker, je mehr Infrarotstrahlen auf den Phototransistor treffen. Die dunkle Kunstharzschicht dient dazu, das normale Tageslicht herauszufiltern, damit der Sensor nicht schon durch das normale Tageslicht ausgelöst wird, das ebenfalls Infrarotstrahlen enthält.

Durch den Stromfluss entsteht eine Spannung, die am Arduino registriert werden kann. Dabei gibt es zwei Möglichkeiten:

- Am `A0`-Pin des Moduls kann die Spannung direkt als analoges Signal gemessen werden.
- Am `D0`-Pin des Moduls wird ein digitales Signal ausgegeben. Ab einer bestimmten Stärke der reflektierten Strahlen ist das Signal am `D0`-Pin HIGH, sonst LOW. Die Grenze wird über das Trimmpotentiometer auf dem Modul eingestellt.

In der Regel wird man nur eines dieser Signale benötigen. Im folgenden Schaltplan ist der Vollständigkeit halber trotzdem der Anschluss beider Pins gezeigt.

![schaltplan-tcrt5000](schaltplan-tcrt5000.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum Anschluss des Sensors TCRT5000 am Arduino.")

Der TCRT5000 ist im Open Roberta Lab nicht vorkonfiguriert. Daher muss man ihn -je nach gewähltem Anschluss- als digitalen oder analogen Sensor konfigurieren. Natürlich kann man auch beides gleichzeitig nutzen, wenn nötig.

<div class="flex-box">
<div markdown="1">
![konfiguration-tcrt5000-digital](konfiguration-tcrt5000-digital.png?resize=300 "konfiguration-tcrt5000-digital")
![tcrt5000-digital-auslesen](tcrt5000-digital-auslesen.png?resize=500&classes=caption "Konfiguration des TCRT5000 als digitaler Sensor an Pin 3 und Abfrage des Status im Programm.")
</div>
<div markdown="1">
![konfiguration-tcrt5000-analog](konfiguration-tcrt5000-analog.png?resize=300 "konfiguration-tcrt5000-analog")
![tcrt5000-auslesen-analog](tcrt5000-auslesen-analog.png?resize=500&classes=caption "Konfiguration des TCRT5000 als analoger Sensor an A0 und Auslesen des Wertes im Programm.")
</div>
</div>

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

