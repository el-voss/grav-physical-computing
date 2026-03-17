---
title: Ultraschallsensor
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'ultraschall-sensor-prinzip.png,ultraschallsensor-am-auto.jpg,ultraschallsensor-grove.jpg,ultraschallsensor-jacdac.jpg,makecode-erweiterung-grove.png,makecode-erweiterung-jacdac.png,makecode-jacdac-ultraschall-test.png,schaltskizze-ultraschall-grove.png'
---

<div markdown="1" class="clearfix">
![Ultraschallsensor am Auto.](ultraschallsensor-am-auto.jpg?resize=250&classes=caption,figure-right "Ultraschallsensor am Auto.")
Ultraschallsensoren ermöglichen die berührungslose Messung eines Abstands zwischen dem Sensor und dem nächstgelegenen Gegenstand. Dies macht sie zu einer interessanten Ausrüstung für Staubsaugerroboter, die nicht gegen die Wand fahren sollen, oder Einparkhilfen im Auto, die dem Fahrer anzeigen sollen, wie viel Platz er noch hat.
</div>

Die wichtigsten Bestandteile des Ultraschallsensors sind der “Transducer” (**T**) und der “Receiver” (**R**). Der Transducer ist praktisch ein Lautsprecher, der für uns nicht hörbare Schallwellen (Ultraschallwellen) aussendet. Der Receiver entspricht einem Mikrofon für Schallwellen. Die Schallwellen werden also vom Transducer ausgesendet, an einem Hindernis reflektiert und vom Receiver empfangen.

![Funktionsprinzip eines Ultraschallsensors.](ultraschall-sensor-prinzip.png?classes=caption "Funktionsprinzip eines Ultraschallsensors.")

Ultraschallsensoren gibt es in verschiedenen Varianten und mit verschiedenen Verbindungsmöglichkeiten.

## Anschluss mit dem Grove-Connector

<div markdown="1" class="clearfix">
![ultraschallsensor-grove](ultraschallsensor-grove.jpg?resize=250&classes=caption,figure-right "Ultraschallsensor mit Grove-Anschluss.")
Der Grove-Connector besteht im Wesentlichen aus einem weißen Plastikgehäuse, das so gestaltet ist, dass man die Kabel nur in einer Richtung einstecken kann. Auf diese Weise wird in jedem Fall die richtige Verbindung hergestellt. Auf dem Calliope müssen die Kabel in den Anschluss A1 gesteckt werden.


</div>

![schaltskizze-ultraschall-grove](schaltskizze-ultraschall-grove.png?resize=500&classes=caption "Schaltskizze zum Anschluss des Ultraschallsensors am Anschluss A1 des Calliope.")

Zum Programmieren mit Makecode muss die Erweiterung "Grove" geladen werden. Darüber können mehrere Sensoren, die alle über einen Grove-Anschluss verfügen, angesteuert bzw. ausgelesen werden. Für den Ultraschallsensor wird der Block ```Entfernung <Pin> cm``` benötigt, der die Entfernung in Zentimetern zurückgibt, die mit dem Ultraschallsensor gemessen wurde. Als Pin muss ```C16 (A1 RX)``` ausgewählt werden, da dies der Echo-Pin ist, der das Signal zurückgibt.

<div class="flex-box">
<div markdown="1" class="flexible">![makecode-erweiterung-grove](makecode-erweiterung-grove.png?resize=400 "makecode-erweiterung-grove")</div>
<div markdown="1" class="flexible">![makecode-grove-ultraschall-test](makecode-grove-ultraschall-test.png?resize=400 "makecode-grove-ultraschall-test")</div>
</div>
