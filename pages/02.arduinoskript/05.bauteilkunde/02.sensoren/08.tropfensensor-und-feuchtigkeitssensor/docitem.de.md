---
title: 'Tropfensensor und Feuchtigkeitssensor'
show_pageimage: true
image_width: 300
image_height: 300
featured_image: feuchtigkeitssensor.jpg
taxonomy:
    Mindestvoraussetzungen:
        - 'Einfache Entscheidungen programmieren'
        - Servo
    Zusatzvoraussetzungen:
        - 'Digital vs Analog und Aktor vs Sensor'
        - 'Spannung messen'
        - 'Schaltungen mit Transistoren steuern'
    Inhalte:
        - Tropfensensor
        - Feuchtigkeitssensor
    Niveau:
        - Basis
        - Fortgeschritten
---

Mit einem Tropfensensor lässt sich die Feuchtigkeit auf dem Sensorblatt messen. Solche Sensoren werden zum Beispiel in Windschutzscheiben von Autos eingesetzt, um die Scheibenwischer und ihre Geschwindigkeit zu steuern. Feuchtigkeitssensoren funktionieren im Wesentlichen genauso, allerdings sind die Kontakte dabei so weit auseinander, dass durch Tropfen noch kein Stromfluss entsteht, sondern erst durch zum Beispiel die feuchte Erde eines Blumentopfes, der automatisch bewässert werden soll.

<div class="flex-box">
<div markdown="1">![Tropfensensor.](tropfensensor.jpg?resize=300&classes=caption "Tropfensensor.")</div>
<div markdown="1">![Feuchtigkeitssensor.](feuchtigkeitssensor.jpg?resize=300&classes=caption "Feuchtigkeitssensor.")</div>
</div>

Der Anschluss an den Arduino ist in beiden Fällen einfach: + an 5V, - an GND und der Signalpin S an einen analogen Eingang A[0-5]. Am Signalpin wird eine Spannung (als Analogwert im analogen Eingang) gemessen, die im trockenen Zustand bei $0 \, V$ (0) liegt und bis zu $5 \, V$ (1023) steigen kann.

<div markdown="1" class="aufgabe">
#### Theorie: Wie kann man Feuchtigkeit messen?

Das grundlegende Prinzip eines Tropfensensors/Feuchtigkeitssensors ist einfach: Je nasser/feuchter es ist, desto besser der Strom durch die feuchte Stelle fließen. Der Arduino kann aber nur eine Spannung messen (als Analogwert) - wie bekommt man diese Umwandlung hin?

Erkläre anhand des unten abgebildeten Schaltplans eines Tropfensensors, wie die Feuchtigkeit auf den Kontakten des Sensorblatts am Signalpin S (analoger Eingang zur Spannungsmessung) gemessen werden kann.

*Tipp:* Zentral ist der Transistor J3Y, der mit seinen drei Kontakten auf dem Sensor gut erkennbar ist. Die Status-LED mit Vorwiderstand kann dagegen vernachlässigt werden.

<div class="flex-box">
<div markdown="1" class="flexible">![Schaltplan eines Tropfensensors.](tropfensensor-ersatz.png?lightbox=1024&resize=500&classes=caption "(Ersatz-)Schaltplan für einen Tropfensensor.")</div>
<div markdown="1" class="flexible">![Pinbelegung des Transistors J3Y auf dem Tropfen- und dem Feuchtigkeitssensor.](j3y-pinbelegung.png?resize=150&classes=caption "Pinbelegung des Transistors J3Y.")</div>
</div>
</div>

<div markdown="1" class="projekt">
#### Automatischer Scheibenwischer

Baue einen Scheibenwischer, der automatisch startet, wenn Feuchtigkeit registriert wird. Je nach Feuchtigkeitslevel soll eine von drei Geschwindigkeiten ausgewählt werden.

*Hinweis: Du kannst die vorkonfigurierten Blöcke von Nepo für den Tropfensensor verwenden oder einen analogen Sensor konfigurieren, dessen Analogwert du selbst in einen Prozentwert umrechnest (0 entspricht 0 %, 1023 entspricht 100 %).*
</div>
