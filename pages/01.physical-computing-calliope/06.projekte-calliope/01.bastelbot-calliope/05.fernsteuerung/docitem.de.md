---
title: Fernsteuerung
show_pageimage: true
image_width: 300
image_height: 400
featured_image: fernsteuerung-schematisch.png
media_order: 'fernsteuerung-schematisch.png,fernsteuerung-joystick-werte.png,fernsteuerung-joystick-idee1.png'
---

[TOC]

**Ziel:** Mit Hilfe eines zweiten Calliope und einem Joystick soll eine Fernsteuerung für den Bastelbot entwickelt werden!


## Fernsteuerung per Joystick

Mit Hilfe eines Joysticks lässt sich der Roboter intuitiv steuern. Dabei werden zwei Ideen verfolgt. Die erste Idee ist deutlich einfacher umzusetzen, aber bei der Steuerung weniger intuitiv. Dafür ist sie gleichzeitig eine gute Vorbereitung für die zweite Idee.

![fernsteuerung-schematisch](fernsteuerung-schematisch.png?lightbox=1024&resize=700&classes=caption "Schematische Darstellung der Fernsteuerung. Der Sender besteht aus einem Calliope mit einem angeschlossenen Joystick. Der Empfänger ist der Roboter, bei dem nur die Motoren benötigt werden (kein Ultraschall- oder Infrarotsensor).")

<div markdown="1" class="aufgabe">
#### Funktionstest des Senders

1. Recherchiere die Funktionsweise des [Joysticks](/physical-computing-calliope/bauteilkunde/sensoren-calliope/joystick) und lasse seine analogen Werte über die serielle Schnittstelle ausgeben. 
2. Erkunde, in welche Richtung der Joystick bewegt werden muss, um nur den x-Wert (`vrx`) oder nur den y-Wert (`vry`) zu verändern. 
3. Notiere die Werte für die unten abgebildeten Ausschläge. Der Joystick wird dabei so gehalten, dass die Kabel nach rechts zeigen.

![fernsteuerung-joystick-werte](fernsteuerung-joystick-werte.png?lightbox=1024&resize=500)
</div>

<div markdown="1" class="aufgabe">
#### Idee 1: Drehachsen entsprechen Motorleistung

Die erste Idee zur Fernsteuerung des Roboters ist die, dass jede der Drehachsen des Joysticks (entsprechend `vrx` und `vry`) die Leistung eines Motors steuert. Im Folgenden bezeichnen wir die Leistung von Motor M0 als `l0` un die Leistung von Motor M1 als `l1`. Wenn der Joystick in der Mitte steht, ist die jeweilige Motorleistung 0. Wenn der Joystick in x-Richtung nach links ausgelenkt wird, wird `l0` erhöht, bis sie 100% erreicht. Bei einer Bewegung nach rechts, wird `l0` verringert, bis sie -100% erreicht. Entsprechend für die y-Richtung.

![fernsteuerung-joystick-idee1](fernsteuerung-joystick-idee1.png?lightbox=1024&resize=700&classes=caption "Veranschaulichung der ersten Idee zur Fernsteuerung.")

1. Ordne den Punkten P1 bis P4 in der oberen Abbildung die folgenden Situationen zu: Geradeaus fahren, Linksdrehung, Rechtsdrehung, Rückwärtsfahren (jeweils mit maximaler Leistung).
2. Vervollständige die folgende Tabelle zur Übersetzung von Potentiometerwerten des Joysticks in Motorleistungen.
<div class="flex-box">
<div markdown="1">
Übersetzung von Potentiometerwert `vrx` in Motorleistung `l0` von Motor M0
| `vrx` | `l0` |
| --- | --- |
| 0 | |
| 512 | |
| 1023 | |
</div>
<div markdown="1">
Übersetzung von Potentiometerwert `vry` in Motorleistung `l1` von Motor M1
| `vry` | `l1` |
| --- | --- |
| 0 | |
| 512 | |
| 1023 | |
</div>
</div>

3. Finde eine Formel zur Berechnung von `l0`aus `vrx` und zur Berechnung von `l1` aus `vry`.

</div>
