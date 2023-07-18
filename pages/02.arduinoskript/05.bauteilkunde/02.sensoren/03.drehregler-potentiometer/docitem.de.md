---
title: 'Drehregler / Potentiometer'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: poti.jpg
---

<div markdown="1" class="clearfix">
![Potentiometer](poti.jpg?resize=200&classes=caption,figure-right "Potentiometer.")
Ein Drehregler oder Potentiometer ist ein Widerstand, der in zwei Teile aufgeteilt wird. Durch Drehen am Griff kann man die Größe der Teile verändern, allerdings bleibt der Gesamtwiderstand immer gleich groß. Durch den einstellbaren Teilwiderstand lässt sich zum Beispiel eine Lampe dimmen oder die Lautstärke eines Lautsprechers regulieren.
</div>

Zum Anschluss an den Arduino wird der mittlere Pin mit einem analogen Eingang verbunden, über den die Spannung am Teilwiderstand zwischen GND und dem analogen Eingang abgefragt werden kann. Die anderen beiden Pins müssen mit 5V und GND verbunden werden, wobei es egal ist, welcher Pin mit GND und welcher mit 5V verbunden wird.

<div class="flex-box">
<div markdown="1" class="flexible">![Anschluss des Potentiometers an den Arduino.](potentiometer-schaltplan.png?lightbox=1024&resize=400&classes=caption "Anschluss des Potentiometers an den Arduino.")</div>
<div markdown="1" class="flexible">![Ersatzschaltplan für das Potentiometer.](potentiometer-ersatzschaltplan.png?lightbox=1024&resize=400&classes=caption "Ersatzschaltplan für das Potentiometer.")</div>
</div>

Die Grundlagen des Potentiometers werden auch [im Kapitel Elektrische Grundlagen behandelt](/arduinoskript/elektrik/anwendungen-spannungsmessung/drehregler-verwenden).

Für das Potentiometer existiert ein vorkonfigurierter Block, über den man die Spannung am Teilwiderstand zwischen GND und dem analogen Eingang auslesen kann. Diese kann zwischen 0V (Teilwiderstand gleich null) oder 5V (Teilwiderstand gleich Gesamtwiderstand) bewegen. Alternativ kann das Potentiometer als analoger Sensor konfiguriert werden und der Analogwert im Programm abgefragt werden.

<div class="flex-box">
<div markdown="1">
![Konfiguration des Potentiometers](poti-vorkonfiguriert.png)
![Konfiguration und Auslesen des Potentiometers mit vorkonfigurierten Blöcken.](poti-befehl-vorkonfiguriert.png?classes=caption "Konfiguration und Auslesen des Potentiometers mit vorkonfigurierten Blöcken.")
</div>
<div markdown="1">
![Konfiguration des Potentiometers als analoger Sensor.](poti-analoger-sensor.png)
![Konfiguration und Auslesen des Potentiometers als analoger Sensor. Dabei werden die Analogwerte genauso wie bei den vorkonfigurierten Blöcken in eine Spannung umgerechnet.](poti-befehl-analoger-sensor.png?classes=caption "Konfiguration und Auslesen des Potentiometers als analoger Sensor. Dabei werden die Analogwerte genauso wie bei den vorkonfigurierten Blöcken in eine Spannung umgerechnet.")
</div>
</div>

<div markdown="1" class="projekt clearfix">
#### Dimmbare Lampe
![PWM-Analog-Diagramm](pwm-analog-diagramm.png?resize=300&classes=caption,figure-right "Diagramm zur Ermittlung einer Funktion.")
Baue und programmiere eine Lampe, deren Helligkeit sich durch ein Potentiometer einstellen lässt.

*Hinweis:* Du musst dafür sorgen, dass der eingelesene Analogwert zwischen 0 und 1023 in einen PWM-Wert zwischen 0 und 255 umgerechnet wird. Ermittle dazu eine passende Funktion.
</div>