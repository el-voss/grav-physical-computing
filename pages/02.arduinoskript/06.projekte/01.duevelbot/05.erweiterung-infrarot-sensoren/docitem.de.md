---
title: 'Erweiterung: Infrarot-Sensoren'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: Anleitung22.jpg
taxonomy:
    Mindestvoraussetzungen:
        - 'Entscheidungen mit mehreren Kriterien'
        - 'Basisversion mit Motoren und Piezo-Summer'
        - 'Infrarot-Sensor TCRT5000'
        - Variablen
    Zusatzvoraussetzungen:
        - 'Oled-Display SSD1306'
    Inhalte:
        - Montage
        - Kantenverfolgung
        - Linienverfolgung
    Niveau:
        - Fortgeschritten
media_order: '5_duevelbot-ir-sensoren.png,Anleitung20.jpg,Anleitung21.jpg,Anleitung22.jpg,Anleitung23-Anmerkung.png,Anleitung24-Anmerkung.png,kantenverfolgung-geradeaus.png,kantenverfolgung-schwarz.png,kantenverfolgung-weiss.png,linienverfolgung-geradeaus.png,linienverfolgung-links-schwarz.png,linienverfolgung-rechts-schwarz.png'
---

**Ziel:** Der Düvelbot soll um zwei Infrarot-Sensoren erweitert werden, sodass er einer Linie folgen kann, um Parcours zu absolvieren.

!!! #### Wichtige Grundlagen
!!! Für diesen Abschnitt werden folgende Grundlagen benötigt:
!!! - [Infrarot-Sensor TCRT5000](/arduinoskript/bauteilkunde/sensoren/infrarot-sensor-tcrt5000)
!!!
!!! Hilfreich ist es, wenn bereits das Oled-Display an den Düvelbot angebracht wurde.


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


### Verkabelung

Die Verkabelung der Infrarot-Sensoren erfolgt nach dem folgenden Schaltplan.

![Schaltplan für die Infrarot-Sensoren](5_duevelbot-ir-sensoren.png?lightbox=1024&resize=800&classes=caption "Schaltplan für die Infrarot-Sensoren.")


### Konfiguration und Programmierung

<div markdown="1" class="aufgabe">
#### Funktionstest

Recherchiere die Funktionsweise der [Infrarot-Sensoren](/arduinoskript/bauteilkunde/sensoren/infrarot-sensor-tcrt5000) und lasse ihre Werte auf dem seriellen Monitor oder auf dem Oled-Display ausgeben.

</div>

<div markdown="1" class="aufgabe">
#### Kantenverfolgung

Für diese Aufgabe liegt ein Parcour mit einer schwarzen Linie bereit. Das Ziel ist es, dass der Roboter dieser schwarzen Linie bzw. ihrer Kante folgt und möglichst schnell den kompletten Parcour absolviert, ohne die Linie bzw. Kante zu verlieren. Dafür wird zunächst nur ein Sensor genutzt.

1. Notiere dir, welchen Analogwert der linke IR-Sensor anzeigt, wenn er auf schwarz und wenn er auf weiß steht.
2. Programmiere den Roboter so, dass er der Linie folgt. Beachte dabei die unten abgebildeten Fälle.

<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![kantenverfolgung-geradeaus](kantenverfolgung-geradeaus.png?lightbox=1024&resize=400 "kantenverfolgung-geradeaus") </div>
<div markdown="1"> ![kantenverfolgung-schwarz](kantenverfolgung-schwarz.png?lightbox=1024&resize=400 "kantenverfolgung-schwarz") </div>
<div markdown="1"> ![kantenverfolgung-weiss](kantenverfolgung-weiss.png?lightbox=1024&resize=400 "kantenverfolgung-weiss") </div>
</div>

</div>

<div markdown="1" class="aufgabe">
#### Linienverfolgung

Für diese Aufgabe liegt ein Parcour mit einer schwarzen Linie bereit. Das Ziel ist es, dass der Roboter dieser schwarzen Linie folgt und möglichst schnell den kompletten Parcour absolviert, ohne die Linie zu verlieren. Dafür werden nun beide Sensoren genutzt.

1. Notiere dir, welchen Analogwert der linke IR-Sensor und welchen Analogwert der rechte IR-Sensor anzeigt, wenn er auf schwarz und wenn er auf weiß steht. Es können kleine Unterschiede auftreten!
2. Programmiere den Roboter so, dass er der Linie folgt. Beachte dabei die unten abgebildeten Fälle.

<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![linienverfolgung-geradeaus](linienverfolgung-geradeaus.png?lightbox=1024&resize=400 "linienverfolgung-geradeaus") </div>
<div markdown="1"> ![linienverfolgung-links-schwarz](linienverfolgung-links-schwarz.png?lightbox=1024&resize=400 "linienverfolgung-links-schwarz") </div>
<div markdown="1"> ![linienverfolgung-rechts-schwarz](linienverfolgung-rechts-schwarz.png?lightbox=1024&resize=400 "linienverfolgung-rechts-schwarz") </div>
</div>

</div>

<!-- Linienverfolgung per Steuern und Regeln -->
