---
title: Fernsteuerung
show_pageimage: true
image_width: 300
image_height: 400
featured_image: fernsteuerung-schematisch.png
media_order: 'fernsteuerung-schematisch.png,fernsteuerung-joystick-werte.png'
---

[TOC]

**Ziel:** Mit Hilfe eines zweiten Calliope und einem Joystick soll eine Fernsteuerung für den Bastelbot entwickelt werden!


## Fernsteuerung per Joystick

Mit Hilfe eines Joysticks lässt sich der Roboter intuitiv steuern. Dabei werden zwei Ideen verfolgt. Die erste Idee ist deutlich einfacher umzusetzen, aber bei der Steuerung weniger intuitiv. Dafür ist sie gleichzeitig eine gute Vorbereitung für die zweite Idee.

![fernsteuerung-schematisch](fernsteuerung-schematisch.png?lightbox=1024&resize=700&caption "Schematische Darstellung der Fernsteuerung. Der Sender besteht aus einem Calliope mit einem angeschlossenen Joystick. Der Empfänger ist der Roboter, bei dem nur die Motoren benötigt werden (kein Ultraschall- oder Infrarotsensor).")

<div markdown="1" class="aufgabe">
#### Funktionstest des Senders

Recherchiere die Funktionsweise des [Joysticks](/physical-computing-calliope/bauteilkunde/sensoren-calliope/joystick) und lasse seine analogen Werte über die serielle Schnittstelle ausgeben. Erkunde, in welche Richtung der Joystick bewegt werden muss, um nur den x-Wert (vrx) oder nur den y-Wert (vry) zu verändern. Notiere die Werte für die unten abgebildeten Ausschläge. Der Joystick wird dabei so gehalten, dass die Kabel nach rechts zeigen.

![fernsteuerung-joystick-werte](fernsteuerung-joystick-werte.png?lightbox=1024&resize=500)
</div>
