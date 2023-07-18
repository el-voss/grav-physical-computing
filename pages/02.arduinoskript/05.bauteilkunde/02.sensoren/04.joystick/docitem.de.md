---
title: Joystick
show_pageimage: true
image_width: 300
image_height: 300
featured_image: joystick.jpg
---

Joysticks werden bekanntermaßen für Spielecontroller oder auch zur Steuerung von Maschinen genutzt. Mit dem Arduino lassen sich einfache Versionen davon nachbauen.

<div markdown="1" class="clearfix">
![Joystick.](joystick.jpg?resize=250&classes=caption,figure-right "Joystick.")
Ein Joystick besteht im Wesentlichen aus zwei Potentiometern, die über einen gemeinsamen Hebel variiert werden können. Wie im Schaltbild zu sehen, teilen sich beide den 5V- und GND-Anschluss; der mittlere Anschluss muss natürlich jeweils einzeln ausgelesen werden. Zusätzlich wird durch Drücken des Joysticks ein angebrachter Taster gedrückt, dessen Status am SW-Pin ausgelesen werden kann (*sw von engl. “switch”*). Da das elektrische Potential am SW-Pin normalerweise schwankt, sollte ein *Pullup*-Widerstand mit $R=1 \, k\Omega$ angebracht werden (vgl. Schaltbild).
</div>

<div class="flex-box">
<div markdown="1" class="flexible">![Anschluss des Joystick-Moduls an den Arduino.](Schaltplan-Joystick.png?lightbox=1024&resize=500&classes=caption "Anschluss des Joystick-Moduls an den Arduino.")</div>
<div markdown="1" class="flexible">![Ersatzschaltplan für das Joystick-Modul.](Schaltplan-Joystick-Ersatz.png?lightbox=1024&resize=300&classes=caption "Ersatzschaltplan für das Joystick-Modul.")</div>
</div>

*Programmierung:* Das Joystick-Modul ist in Nepo nicht vorkonfiguriert. Die Bestandteile, also die zwei Potentiometer und der Taster, lassen sich aber einzeln konfigurieren. Dies geht wahlweise mit den vorkonfigurierten Potentiometer- und Taster-Blöcken oder als analoger und digitaler Sensor.

<div class="flex-box">
<div markdown="1">![joystick-vorkonfiguriert](joystick-vorkonfiguriert.png?classes=caption "Konfiguration des Joysticks mit vorkonfigurierten Blöcken.")</div>
<div markdown="1">![joystick-konfiguration](joystick-konfiguration.png?classes=caption "Konfiguration des Joysticks mit einem digitalen Sensor (Taster) und zwei analogen Sensoren (Potentiometer).")</div>
</div>

<div markdown="1" class="aufgabe">
#### Erste Experimente

1.  Bewege den Hebel des Joystick-Moduls und beobachte, wie sich dabei die Potentiometer an den Seiten mitbewegen. Bringe auch den Plastikdeckel an, drücke den Joystick herunter und beobachte dabei das Verhalten des Tasters.
2.  Schließe das Joystick-Modul wie oben beschrieben an den Arduino an. Lies die Werte der Potentiometer aus, während du sie bewegst. Notiere, welche Bewegungsrichtung die X-Richtung und welche die Y-Richtung darstellt. Notiere außerdem, welches der beiden Potentiometer (ggü. von Taster oder ggü. der Pins) für die X-Richtung bzw. Y-Richtung verantwortlich ist.
3.  Mit dem Pullup-Widerstand wird eine sogenannte Active-Low Schaltung aufgebaut. Teste die Funktionsweise des Tasters, indem du das elektrische Potential in D3 ausliest und beschreibe, was mit dem Begriff Active-Low gemeint ist.
</div>

<div markdown="1" class="projekt">
#### Joystick-Motor-Steuerung

Steuere mit dem Joystick-Modul einen Schrittmotor!
</div>

!! **Achtung bei Verwendung von Motoren:** Spätestens, wenn mehr als ein Motor am Arduino betrieben werden soll, muss eine externe Spannungsquelle genutzt werden, zum Beispiel durch Anschluss einer 9 V-Batterie an das Power-Supply-Module. Schaue dir dazu noch einmal den [Infokasten zum Power Supply Module](/arduinoskript/elektrik/transistoren-motoren/elektromotor-mit-relais-steuern#das-“power-supply-module”) an.

