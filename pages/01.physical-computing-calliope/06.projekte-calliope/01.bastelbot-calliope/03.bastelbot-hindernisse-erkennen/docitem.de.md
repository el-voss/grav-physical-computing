---
title: 'Hindernisse erkennen'
show_pageimage: true
image_width: 300
image_height: 400
media_order: bastelbot-mit-ultraschallsensor.png
---

**Ziel:** Der Bastelbot soll um einen Ultraschallsensor erweitert werden, sodass er Hindernisse erkennen und umfahren kann.

### Montage und Anschluss

<div markdown="1" class="aufgabe">
#### Montage und Anschluss

1. Recherchiere die [Funktionsweise und Verkabelung des Ultraschallsensors](/physical-computing-calliope/bauteilkunde/sensoren-calliope/ultraschallsensor).
2. Bringe den Ultraschallsensor so am Roboter an, dass der Ultraschallsensor nach vorne "guckt", und führe die Verkabelung durch.

![bastelbot-mit-ultraschallsensor](bastelbot-mit-ultraschallsensor.png?lightbox=1024&resize=500&classes=caption "Bringe den Ultraschallsensor vorne am Bastelbot an.")
</div>


### Programmierung

<div markdown="1" class="aufgabe">
#### Erster Test

Programmiere den Roboter so, dass er geradeaus fährt und möglichst genau 20cm vor einem Hindernis stoppt.
</div>

<div markdown="1" class="aufgabe">
#### Endlosfahrt

Programmiere den Roboter so, dass er bei freier Bahn geradeaus fährt. Wenn er aber ein Hindernis "sieht", soll er sich um 90 Grad drehen, damit er wieder freie Fahrt hat. Dies wird endlos wiederholt, sodass der Roboter immer weiter fährt.
</div>

<div markdown="1" class="aufgabe">
#### Variable Geschwindigkeit

Programmiere den Roboter so, dass er schnell fährt, wenn kein Hindernis in Sicht ist und langsamer, wenn er ein Hindernis erkennen kann. Wenn das Hindernis zu nah kommt, dreht sich der Roboter und fährt in eine andere Richtung.
</div>

<div markdown="1" class="aufgabe">
#### Einparken

Programmiere den Roboter so, dass er möglichst genau 5cm vor einer Wand stoppt. Er wird bereits vorher immer langsamer und gibt dabei Töne ab. Je näher der Roboter dem Hindernis kommt, desto schneller folgen die Töne aufeinander.
</div>
