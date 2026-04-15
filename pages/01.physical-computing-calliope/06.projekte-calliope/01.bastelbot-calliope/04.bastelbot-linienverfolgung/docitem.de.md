---
title: Linienverfolgung
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'bastelbot-kantenverfolgung-geradeaus.png,bastelbot-kantenverfolgung-schwarz.png,bastelbot-kantenverfolgung-weiss.png,bastelbot-linienverfolgung-geradeaus.png,bastelbot-linienverfolgung-links-schwarz.png,bastelbot-mit-infrarotsensoren.png,bastelbot-linienverfolgung-rechts-schwarz.png,calliope-mit-zwei-tcrt5000.png,infrarot-sensoren.jpg,kabel.jpg,steckbrett-klein.jpg'
featured_image: bastelbot-mit-infrarotsensoren.png
taxonomy:
    Mindestvoraussetzungen:
        - Variablen
        - 'Entscheidungen mit mehreren Kriterien'
    Inhalte:
        - Kantenverfolgung
        - Linienverfolgung
    Niveau:
        - Fortgeschritten
---

[TOC]

**Ziel:** Der Bastelbot soll um zwei Infrarot-Sensoren erweitert werden, sodass er einer Linie folgen kann, um Parcours zu absolvieren.

## Zusätzliches Material

<div markdown="1" style="overflow:auto;">
| Bild | Bauteil | Anzahl | Hinweise |
|-------|----------|-----------|---------------------------------|
| ![infrarot-sensoren](infrarot-sensoren.jpg?lightbox=1024&resize=200 "infrarot-sensoren") | Infrarot-Sensoren TCRT5000 | 2 | |
| ![kabel](kabel.jpg?lightbox=1024&resize=200 "kabel") | Jumper-Kabel male-female und male-male | 6 / 2 | |
| ![steckbrett-klein](steckbrett-klein.jpg?lightbox=1024&resize=200 "steckbrett-klein") | Kleines Steckbrett | 1 | auch andere Formen möglich |
</div>

Für eine schöne Verkleidung werden ggf. Karton, Schrauben und entsprechende Werkzeuge benötigt.

## Montage und Verbindung

Die Infrarot-Sensoren TCRT5000 werden vorne am Bastelbot angebracht, sodass die beiden Dioden nach unten zum Boden schauen. Die Module können mit einer Schraube auf der Lochplatte befestigt werden.

![bastelbot-mit-infrarotsensoren](bastelbot-mit-infrarotsensoren.png?lightbox=1024&resize=500&classes=caption "Die Infrarotsensoren lassen sich mit Schrauben auf der Lochplatte befestigen und mit Karton verkleiden.")

Bei der Verkabelung tritt das Problem auf, dass beide Module mit VCC und GND verbunden werden müssen. Dazu kann ein kleines Steckbrett verwendet werden. Innerhalb einer (halben) Reihe sind alle Löcher miteinander verbunden, sodass die beiden Kabel von den zwei Modulen hier zusammengeführt werden können.

Für die Pins, die das analoge Signal empfangen werden im folgenden Schaltplan P0 und P1 am Calliope gewählt. Falls diese bereits anderweitig besetzt sind, können auch folgende Pins des Calliope mit dem Pin A0 der Infrarotsensoren verbunden werden: P0, P1, P2, C4, C10, C16, C18. **Tipp:** Notiere dir, welche Seite (Infrarot_links, Infrarot_rechts) mit welchem Pin auf dem Calliope verbunden ist!
Da das digitale Signal aus D0 an den Infrarotsensoren nicht verwendet wird, muss dieser Pin nicht verkabelt werden.

![calliope-mit-zwei-tcrt5000](calliope-mit-zwei-tcrt5000.png?lightbox=1024&resize=500&classes=caption "Verkabelung von zwei TCRT5000 mit dem Calliope. Wenn man zwei TCRT5000 an den Calliope anschließen will, benötigt man ein kleines Steckbrett, um die beiden VCC- bzw. GND-Kabel zusammenzuführen.")

## Programmierung

<div markdown="1" class="aufgabe">
#### Funktionstest

Recherchiere die Funktionsweise der [Infrarot-Sensoren TCRT5000](/physical-computing-calliope/bauteilkunde/sensoren-calliope/infrarot-sensor-tcrt5000) und lasse ihre **analogen** Werte über die serielle Schnittstelle in Makecode ausgeben, während du den Sensor über weiße und schwarze Flächen hälst.

</div>

<div markdown="1" class="aufgabe">
#### Kantenverfolgung

Für diese Aufgabe liegt ein Parcour mit einer schwarzen Linie bereit. Das Ziel ist es, dass der Roboter dieser schwarzen Linie bzw. ihrer Kante folgt und möglichst schnell den kompletten Parcour absolviert, ohne die Linie bzw. Kante zu verlieren. Dafür wird **zunächst nur ein Sensor** genutzt.

1. Notiere dir, welchen Analogwert der linke IR-Sensor anzeigt, wenn er auf schwarz und wenn er auf weiß steht.
2. Programmiere den Roboter so, dass er der Linie folgt. Beachte dabei die unten abgebildeten Fälle.

<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![bastelbot-kantenverfolgung-geradeaus](bastelbot-kantenverfolgung-geradeaus.png?lightbox=1024&resize=400 "bastelbot-kantenverfolgung-geradeaus") </div>
<div markdown="1"> ![bastelbot-kantenverfolgung-schwarz](bastelbot-kantenverfolgung-schwarz.png?lightbox=1024&resize=400 "bastelbot-kantenverfolgung-schwarz")</div>
<div markdown="1"> ![bastelbot-kantenverfolgung-weiss](bastelbot-kantenverfolgung-weiss.png?lightbox=1024&resize=400 "bastelbot-kantenverfolgung-weiss") </div>
</div>

</div>

<div markdown="1" class="aufgabe">
#### Linienverfolgung

Für diese Aufgabe liegt ein Parcour mit einer schwarzen Linie bereit. Das Ziel ist es, dass der Roboter dieser schwarzen Linie folgt und möglichst schnell den kompletten Parcour absolviert, ohne die Linie zu verlieren. Dafür werden **nun beide Sensoren** genutzt.

1. Notiere dir, welchen Analogwert der linke IR-Sensor und welchen Analogwert der rechte IR-Sensor anzeigt, wenn er auf schwarz und wenn er auf weiß steht. Es können kleine Unterschiede auftreten!
2. Programmiere den Roboter so, dass er der Linie folgt. Beachte dabei die unten abgebildeten Fälle.

<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![bastelbot-linienverfolgung-geradeaus](bastelbot-linienverfolgung-geradeaus.png?lightbox=1024&resize=400 "bastelbot-linienverfolgung-geradeaus")</div>
<div markdown="1"> ![bastelbot-linienverfolgung-links-schwarz](bastelbot-linienverfolgung-links-schwarz.png?lightbox=1024&resize=400 "bastelbot-linienverfolgung-links-schwarz") </div>
<div markdown="1"> ![bastelbot-linienverfolgung-rechts-schwarz](bastelbot-linienverfolgung-rechts-schwarz.png?lightbox=1024&resize=400 "bastelbot-linienverfolgung-rechts-schwarz")</div>
</div>

</div>

<!-- Linienverfolgung per Steuern und Regeln -->