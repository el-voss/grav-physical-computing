---
title: Servo
published: true
featured_image: servo.png
show_pageimage: true
image_width: 300
image_height: 300
taxonomy:
    Mindestvoraussetzungen:
        - 'Kurze Einführung'
        - 'Einfache Entscheidungen programmieren'
    Zusatzvoraussetzungen:
        - Pulsweitenmodulation
    Inhalte:
        - Servo
    Niveau:
        - Basis
---

<div markdown="1" class="clearfix">
![Servo-Motor](servo.png?resize=250&classes=caption,figure-right "Servo.")
Ein Servo ist in der Regel ein kleiner Elektromotor zusammen mit einer elektronischen Steuereinheit, die dazu dient, den Motor auf einen bestimmten Winkel einzustellen. Häufig wird beides zusammen als Servomotor bezeichnet. Angewendet werden Servos in vielen Bereichen - zum Beispiel im Modellbau.
</div>

![Verschaltung eines Servo am Arduino.](schaltplan-servo.png?lightbox=1024&resize=500&classes=caption "Verschaltung eines Servo am Arduino.")

Der Servo wird mit drei Anschlüssen an den Arduino angeschlossen:

  - VCC (rot): Die Stromversorgung des Servo wird mit dem 5 V-Pin des Arduino verbunden. Dabei ist zu beachten, dass ein Servomotor relativ große Stromstärken “ziehen” kann. Der 5 V-Pin des Arduino kann bis zu $200 \, mA$ ausgeben, bevor er durchbrennt. Das ist für den Servo genug. Ein normaler Digitalpin verträgt dagegen nur $40 \, mA$, was deutlich zu wenig für den Servo ist. Die Stromversorgung des Servo kann also nicht über einen normalen Digitalpin sichergestellt werden.
  - GND (schwarz/braun): Die Stromversorgung ist nur komplett, wenn auch das GND-Niveau auf das GND-Niveau des Arduino festgelegt wird.
  - Signalleitung (gelb): Die Einstellung des Winkels erfolgt über ein Pulsweitenmodulation, allerdings wird diese von einer zusätzlichen Bibliothek bereitgestellt, sodass das gelbe Kabel mit jedem Digitalpin am Arduino verbunden werden kann.

<div markdown="1" class="projekt">
#### Schranke

Baue mit einem Servo eine Schranke, die auf Knopfdruck geöffnet und wieder geschlossen werden kann.

![Die Servo-Steuerung erfolgt über Angabe eines Winkels zwischen 0° und 180°.](servo-steuerung.png?classes=caption "Die Servo-Steuerung erfolgt über Angabe eines Winkels zwischen 0° und 180°.")
</div>

! **Recherche: Wie funktioniert die Steuerung eines Servos?**
! Der Winkel, auf den sich die Ausgangswelle des Servo drehen soll, wird über ein PWM-Signal geregelt. Recherchiere im Internet, wie dies realisiert wird und fasse es zusammen.