---
title: 'Elektromotor mit Transistor steuern'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: motoranschluss-mit-steuerung.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Entscheidungen mit mehreren Kriterien'
        - Variablen
        - 'Spannung Stromstärke und Widerstand berechnen'
        - 'Digital vs Analog und Aktor vs Sensor'
        - Pulsweitenmodulation
    Zusatzvoraussetzungen:
        - Zählschleifen
        - 'Schaltungen mit Transistoren steuern'
        - 'Temperatur messen'
        - 'Das elektrische Potential'
    Inhalte:
        - 'Elektromotor mit Transistor steuern'
        - Beschleunigung
        - 'Externe Spannungsquelle'
    Niveau:
        - Fortgeschritten
---

Der 5 V-Pin des Arduino liefert zwar in vielen Fällen genügend Strom für den Motor, jedoch lässt er sich nicht programmieren. Dazu lässt sich ein Transistor einbauen.

**Frage:** Wie steuert man einen Elektromotor mit einem Transistor am Arduino?

Die unten abgebildete Schaltung zeigt, wie ein npn-Transistor eingebaut werden kann, um den Motor mithilfe von Digitalpin 9 zu schalten. Der Transistor lässt den Strom zwischen Emitter (E) und Kollektor (C) passieren, wenn die Spannung zwischen Basis (B) und Emitter (E) mehr als 0,7 V beträgt, anderenfalls sperrt er. Der Vorwiderstand mit $R= 330\,  \Omega$ sorgt dafür, dass der Basisstrom nicht zu groß wird.

Es ist ratsam, die Basis mit einem PWM-Pin (gekennzeichnet durch $\sim$) zu verbinden, da sich dadurch die Geschwindigkeit des Motors steuern lässt.

<div class="flex-box">
<div markdown="1" class="flexible">![Anschluss eines Gleichstrom-Elektromotors.](motoranschluss-mit-steuerung.png?lightbox=1024&resize=500&classes=caption "Anschluss eines Gleichstrom-Elektromotors mit Hilfe eines Transistors.")</div>
<div markdown="1" class="flexible">![npn-Transistor; Blick auf die flache Seite](transistor-schematisch.png?resize=250&classes=caption "npn-Transistor Pn2222; Blick auf die flache Seite.") </div>
</div>

<div markdown="1" class="aufgabe">
Baue die oben abgebildete Schaltung auf und probiere die Steuerung des Motors mittels Pulsweitenmodulation aus.

![analogen Wert schreiben](pwm-motorsteuerung.png)

Simuliere mit dem Motor eine konstant beschleunigende Bewegung (*vgl. [Fading](/arduinoskript/elektrik/digitale-analoge-pins/pulsweitenmodulation#fading)*), gefolgt von einer abrupten Bremsung.
</div>

<div markdown="1" class="projekt">
#### Handventilator
Baue einen Handventilator wie folgenden Video.

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/handventilator.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>
</div>

<div markdown="1" class="projekt">
#### Automatischer Lüfter
Baue einen Lüfter, der anspringt, wenn die Temperatur größer als $ 30 °C$ wird. Probiere deine Schaltung durch Anfassen des NTC aus.

*Erweiterung:* Programmiere die Schaltung so, dass der Lüfter sich umso schneller dreht, je höher die Temperatur ist.
</div>

*Schaltung mit externer Spannungsquelle*

Wenn der verwendete Elektromotor größer ist und mehr Strom zieht bzw. größere Spannungen benötigt, muss für den Elektromotor eine eigene Spannungsquelle verwendet werden, die genügend Spannung und Strom bieten kann. Der unten abgebildete Schaltplan zeigt, wie der Aufbau dann vorzunehmen ist. Wichtig ist dabei, dass ein gemeinsames GND-Niveau hergestellt wird - vergleichbar einem “Normalnull” für die Höhenangaben, hier allerdings als “Normalnull” für das elektrische Potenzial.

Der Arduino kann über USB oder eine zweite Batterie mit Strom versorgt werden.

![Anschluss eines Gleichstrom-Elektromotors am Arduino mit Steuerung über einen Transistor und mit externer Spannungsquelle für den Motor.](Schaltplan-Motoranschluss-ext-Spannung.png?lightbox=1024&resize=500&classes=caption "Anschluss eines Gleichstrom-Elektromotors am Arduino mit Steuerung über einen Transistor und mit externer Spannungsquelle für den Motor.")
