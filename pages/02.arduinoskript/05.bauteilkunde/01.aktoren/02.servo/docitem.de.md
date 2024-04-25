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
media_order: 'schaltplan-servo.png,servo-steuerung.png,servo.png,steckbrett-mit-power-supply-und-servo-Markierung.png,steckbrett-mit-power-module.jpg,steckbrett-mit-power-module-klein.png'
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

!! Der Arduino kann nur für einen Servo genügend Strom liefern. Wenn mehrere Servos oder andere Bauteile genutzt werden, die viel Strom benötigen, muss die Stromversorgung z. B. über ein *Power Supply Module* (ein Spannungsregler) gewährleistet werden. Eine genauere Beschreibung für mehrere Servos folgt unten.

<div markdown="1" class="projekt">
#### Schranke

Baue mit einem Servo eine Schranke, die auf Knopfdruck geöffnet und wieder geschlossen werden kann.

![Die Servo-Steuerung erfolgt über Angabe eines Winkels zwischen 0° und 180°.](servo-steuerung.png?classes=caption "Die Servo-Steuerung erfolgt über Angabe eines Winkels zwischen 0° und 180°.")
</div>

! **Recherche: Wie funktioniert die Steuerung eines Servos?**
! Der Winkel, auf den sich die Ausgangswelle des Servo drehen soll, wird über ein PWM-Signal geregelt. Recherchiere im Internet, wie dies realisiert wird und fasse es zusammen.

## Anschluss mehrerer Servos mit dem Power Supply Module

!!!! ![Power Supply Module](steckbrett-mit-power-module-klein.png?resize=300&classes=caption,figure-right "Power Supply Module auf Steckbrett mit angeschlossener Batterie.")
!!!! #### Das “Power Supply Module”
!!!! 
!!!! Das Power Supply Module dient zur Spannungsversorgung auf einem Steckbrett. Dazu kann eine Batterie mit $ 6,5\, V$ bis $ 12\, V$ oder ein USB-Kabel angeschlossen werden. Die Spannung wird auf dem Modul je nach Einstellung der *Jumper* auf $ 5\, V$ oder $ 3,3\, V$ heruntergeregelt. Dazu verbindet man mithilfe der Jumper die Anschlüsse `5V` und `OFF` bzw. `3.3` und `OFF`.
!!!! Die Spannung kann entlang der langen äußeren Leisten abgegriffen werden, wenn der Taster neben der Hohlbuchse gedrückt ist. Die Zuordnung zu Pluspol und Minuspol ist auf dem Power Supply Module mit `+` bzw. `-` markiert.

Das folgende Bild zeigt, wie man die Stromversorgung für einen Servo über ein Power Supply Module herstellt, das mehr Strom liefern kann als der Arduino.

![steckbrett-mit-power-supply-und-servo-Markierung](steckbrett-mit-power-supply-und-servo-Markierung.png?lightbox=1024&resize=800&classes=caption "Steckbrett mit Power Supply Module, Arduino und Servo.")

Wichtig sind dabei folgende Punkte:
- Das Power Supply Module ist so eingesteckt, dass das `+` vom Modul auf der `+`-Leiste vom Steckbrett und das `-` vom Modul auf der `-` -Leiste des Steckbretts liegt (rote Markierung).
- Die Jumper auf dem Power Supply Module stehen auf 5V (gelbe Markierung).
- Der GND-Anschluss des Arduino ist mit dem Minus-Anschluss des Steckbretts bzw. Power Supply Module verbunden.
- Bei manchen Steckbrettern sind die Plus- und Minusleisten in der Mitte getrennt. Gegebenenfalls muss hier ein Kabel zur Überbrückung eingebaut werden.