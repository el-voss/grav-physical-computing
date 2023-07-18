---
title: 'Erweiterung: Ultraschallsensor'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: Anleitung19.jpg
---

**Ziel:** Der Düvelbot soll um einen Ultraschallsensor erweitert werden, sodass er Hindernisse erkennen und umfahren kann.

!!! #### Wichtige Grundlagen
!!! Für diesen Abschnitt werden folgende Grundlagen benötigt:
!!! - [Ultraschallsensor](../../bauteilkunde/sensoren#ultraschallsensor)
!!! - [Variablen und Schleifen](../../bausteine-algorithmen/variablen-und-schleifen#programme-mit-variablen-und...)

### Montage

<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung18](Anleitung18.jpg?lightbox=1024&resize=400 "Anleitung18")  </div>
<div markdown="1"> **Schritt 18:** Stecke vier Kabel auf den Ultraschallsensor. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung19](Anleitung19.jpg?lightbox=1024&resize=400 "Anleitung19")  </div>
<div markdown="1"> **Schritt 19:** Verkabele den Ultraschallsensor entsprechend des Schaltplans (siehe unten).</div>
</div>

### Schaltplan

Die Verkabelung des Ultraschallsensors erfolgt nach dem folgenden Schaltplan.

![Schaltplan für den Ultraschallsensor](3_duevelbot-ultraschallsensor.png?lightbox=1024&resize=800&classes=caption "Schaltplan für den Ultraschallsensor.")

### Konfiguration und Programmierung

<div markdown="1" class="aufgabe">
#### Erster Test

1. Recherchiere die [Funktionsweise und Konfiguration des Ultraschallsensors](../../bauteilkunde/sensoren#ultraschallsensor).
2. Programmiere den Roboter so, dass er geradeaus fährt und möglichst genau 20cm vor einem Hindernis stoppt.
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
