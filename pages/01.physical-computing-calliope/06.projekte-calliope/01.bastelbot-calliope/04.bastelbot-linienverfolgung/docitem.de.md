---
title: Linienverfolgung
show_pageimage: true
image_width: 300
image_height: 400
---

**Ziel:** Der Düvelbot soll um zwei Infrarot-Sensoren erweitert werden, sodass er einer Linie folgen kann, um Parcours zu absolvieren.

### Montage und Verkabelung



### Programmierung

<div markdown="1" class="aufgabe">
#### Funktionstest

Recherchiere die Funktionsweise der [Infrarot-Sensoren TCRT5000](/physical-computing-calliope/bauteilkunde/sensoren-calliope/infrarot-sensor-tcrt5000) und lasse ihre **analogen** Werte über die serielle Schnittstelle in Makecode ausgeben. Die digitalen Werte werden nicht benötigt, daher ist das zugehörige Kabel ebenfalls nicht nötig.

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