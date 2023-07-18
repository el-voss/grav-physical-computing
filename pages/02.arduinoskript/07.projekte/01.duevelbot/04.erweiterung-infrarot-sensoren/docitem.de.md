---
title: 'Erweiterung: Infrarot-Sensoren'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: Anleitung22.jpg
---

**Ziel:** Der Düvelbot soll um zwei Infrarot-Sensoren erweitert werden, sodass er einer Linie folgen kann, um Parcours zu absolvieren. Für die Anzeige der Sensorwerte bei der Feinjustierung wird ein Display angebracht.

!!! #### Wichtige Grundlagen
!!! Für diesen Abschnitt werden folgende Grundlagen benötigt:
!!! - [OLED-Display SSD1306](../../bauteilkunde/aktoren#oled-display-ssd1306)
!!! - [Infrarot-Sensor TCRT5000](../../bauteilkunde/sensoren#infrarot-sensor-tcrt5000)


### Montage

<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung20](Anleitung20.jpg?lightbox=1024&resize=400 "Anleitung20") </div>
<div markdown="1"> **Schritt 20:** Suche die Infrarot-Sensore (IR-Sensoren) und stecke jeweils drei Kabel auf die Pins `Vcc`, `GND` und `A0`. Da der digitale Pin `D0` hier nicht genutzt wird, kann er frei bleiben. Notiere dir, welche Farbe zu welchem Pin gehört, damit du sie später richtig verschalten kannst. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung21](Anleitung21.jpg?lightbox=1024&resize=400 "Anleitung21") </div>
<div markdown="1"> **Schritt 21:** Schiebe den Arduino etwas zurück und führe die Kabel durch die jeweilige Öffnung in das Chassis und nach oben hinaus. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung22](Anleitung22.jpg?lightbox=1024&resize=400 "Anleitung22") </div>
<div markdown="1"> **Schritt 22:** Schiebe die Platinen der IR-Sensoren in die dafür vorgesehene Schiene. Durch die Fertigungstoleranzen kann es dazu kommen, dass die Schiene sehr locker oder sehr eng sitzt. Bitte in keinem Fall grobe Gewalt anwenden! </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung23-Anmerkung](Anleitung23-Anmerkung.png?lightbox=1024&resize=400 "Anleitung23-Anmerkung") </div>
<div markdown="1"> **Schritt 23:** Führe die Kabel durch die seitliche Öffnung nach außen. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung24-Anmerkung](Anleitung24-Anmerkung.png?lightbox=1024&resize=400 "Anleitung24-Anmerkung") </div>
<div markdown="1"> **Schritt 24:** Schließe die Kabel entsprechend des Schaltplans (siehe unten) an. Notiere dir, ob der rechte oder der linke IR-Sensor mit `A0` am Arduino verbunden ist (und entsprechend der andere mit `A1` am Arduino), damit du dies später im Programm richtig konfigurieren kannst. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung25](Anleitung25.jpg?lightbox=1024&resize=400 "Anleitung25") </div>
<div markdown="1"> **Schritt 25:** Stecke das Display in das kleine Steckbrett und verkabele es entsprechend des Schaltplans (siehe unten). </div>
</div>


### Verkabelung

Die Verkabelung des Ultraschallsensors erfolgt nach dem folgenden Schaltplan.

![Schaltplan für die Infrarot-Sensoren und das Display](4_duevelbot-ir-sensoren_und_oled-display.png?lightbox=1024&resize=800&classes=caption "Schaltplan für die Infrarot-Sensoren und das Display.")


### Konfiguration und Programmierung

<div markdown="1" class="aufgabe">
#### Funktionstest

1. Recherchiere die Funktionsweise der [Infrarot-Sensoren](../../bauteilkunde/sensoren#infrarot-sensor-tcrt5000) und lasse ihre Werte auf dem seriellen Monitor ausgeben.
2. Recherchiere die Funktionsweise des [OLED-Display SSD1306](../../bauteilkunde/aktoren#oled-display-ssd1306). Lasse die Werte der Infrarot-Sensoren auf dem Display ausgeben.

</div>

Kantenverfolgung

Linienverfolgung

Linienverfolgung per Steuern und Regeln
