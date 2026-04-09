---
title: Servo
show_pageimage: true
image_width: 300
image_height: 400
taxonomy:
    Inhalte:
        - Servo
    Niveau:
        - Basis
featured_image: servo-3v.jpg
media_order: 'calliope-v3-servo-mit-batteriefach-6v.png,mc-erweiterung-servo.png,mc-360-grad-servo-steuern.png,servo.png,orl-conf-servo.png,servo-3v.jpg,mc-servo-steuern.png,mc-servo-mit-pwm-steuern.png,orl-servo-steuern.png,calliope-v3-3,3volt-servo.png,orl-servo-mit-pwm-steuern.png,orl-conf-aktor.png'
---

<div markdown="1" class="clearfix">
![Servo-Motor](servo-3v.jpg?resize=250&classes=caption,figure-right "Servo.")
Ein Servo ist ein kleiner Elektromotor zusammen mit einer elektronischen Steuereinheit, die dazu dient, den Motor auf einen bestimmten Winkel oder eine bestimmte Geschwindigkeit einzustellen. Häufig wird beides zusammen als Servomotor bezeichnet. Angewendet werden Servos in vielen Bereichen - zum Beispiel im Modellbau.

Es wird zwischen zwei Arten von Servos unterschieden:
- **Winkelsteller (auch 180° Servos)**: Diese Servos können auf einen bestimmten Winkel eingestellt werden. Ihre Bezeichnung endet auf einem **B** (z. B. FT90B). Der Winkelbereich beträgt 180°.
- **Kontinuierliche Servos (auch 360° Servos)**: Diese können sich kontinuierlich, um 360°, drehen. Das Steuersignal wird als Geschwindigkeit aufgefasst. Ihre Bezeichnung endet auf einem **R** (z. B. FT90R).

</div>
Jeder Servo kommt mit drei Anschlüssen: VCC (rotes Kabel, Pluspol) und GND (braunes Kabel, Minuspol) stellen die Stromversorgung sicher, ein drittes Kabel (orange) dient als Signalkabel, um den Winkel bzw. die Geschwindigkeit einzustellen. Das Signal wird per Pulsweitenmodulation übermittelt.

## Schaltung und Programmierung mit Jacdac-Anschluss

Über den Jacdac-Anschluss können auf einfache Weise Sensoren und Aktoren an den Calliope angeschlossen und angesteuert werden. Es können mehrere Jacdac-Bauteile hintereinander angeschlossen werden. Über den Jacdac-Hub können sie auch parallel angeschlossen werden. Jacdac ermöglicht nicht nur die Kommunikation von Sensor und Calliope, sondern auch per WebUSB mit Makecode. Auf diese Weise wird der aktuelle Wert direkt in Makecode angezeigt.

Für die Verbindung mit dem Jacdac-Anschluss gibt es ein Servo-Modul, an dem sich zwei Servos anschließen lassen. Beachte die Angabe der Farben auf dem Modul, damit die Kabel richtig herum angeschlossen werden! Da ein Servomotor recht viel Strom ziehen kann, wird zusätzlich das Power-Modul benötigt. **Der Anschluss und die Programmierung ist auf der [Jacdac-Seite von calliope.cc](https://calliope.cc/calliope-mini/erweiterungen/jacdac#servo) schön gezeigt**.

*Achte darauf, welcher Servo der kontinuierliche Servo (360° Servo) und welcher der Winkelsteller-Servo (180° Servo) ist, um sie richtig anzusteuern.*


## Schaltungen mit Jumper-Kabeln

### 3V-Servo am Calliope

Wenn nur ein Servo angesteuert werden soll und dieser schon ab einer Spannung von 3V funktioniert, lässt sich der Servo direkt an der Pin-Leiste des Calliope anschließen. (Wenn du dir unsicher bist, ob 3V für deinen Servo ausreichen, dann recherchiere im Internet, z. B. mit dem Begriff "Servo *bezeichnung* Datasheet".) Für die folgenden Beispiele wurden die 3V-Servos FT90R und FT90B verwendet.

![calliope-v3-3,3volt-servo](calliope-v3-3,3volt-servo.png?lightbox=1024&resize=500&classes=caption "Anschluss eines 3V-Servos direkt am Calliope.")

Für das Signalkabel (orange) kommen die Pins P0, P1, P2, P3, C4, C8, C9, C13, C14, C15, C16, C17 in Frage, soweit diese nicht anderweitig schon belegt sind (die Pins P0 bis P3 können über die goldenen Ringpads schon in Benutzung sein).

#### Programmierung mit Servo-Befehlen

<!-- Tabs für die Auswahl -->
<div class="tab-group" data-group="programmierumgebung">
<div class="tabs">
  <button class="tab-button" data-umgebung="makecode">Makecode</button>
  <button class="tab-button" data-umgebung="roberta">Open Roberta Lab</button>
  <button class="tab-button" data-umgebung="python">Python</button>
</div>

<!-- Inhalte für jede Programmierumgebung -->
<div class="tab-content">
  <div class="makecode content-block" markdown="1">
Zum Programmieren mit Makecode muss die Erweiterung "Servo" geladen werden. Damit können sowohl Winkelsteller-Servos als auch kontinuierliche Servos angesteuert werden.

<div class="flex-box">
<div markdown="1" class="flexible">![mc-erweiterung-servo](mc-erweiterung-servo.png?resize=400 "mc-erweiterung-servo")</div>
<div markdown="1" class="flexible">![mc-servo-steuern](mc-servo-steuern.png?lightbox=1024&resize=400&classes=caption "Testprogramm zum Ansteuern eines Winkelsteller-Servos.")</div>
<div markdown="1" class="flexible">![mc-360-grad-servo-steuern](mc-360-grad-servo-steuern.png?lightbox=1024&resize=400&classes=caption "Testprogramm zum Ansteuern eines kontinuierlichen Servos.")</div>
</div>

  </div>
  <div class="roberta content-block" markdown="1">
Zunächst muss der Servo in der Roboterkonfiguration angelegt werden. Dort stehen aktuell (Stand 09.04.26) nicht alle möglichen Pins zur Verfügung, daher muss das Signalkabel ggf. an einen anderen, hier ausgewählten Pin wie P1 angeschlossen werden. Bei dieser Programmierung können nur Winkelsteuer-Servos angesteuert werden.
<div class="flex-box">
<div markdown="1" class="flexible">![orl-conf-servo](orl-conf-servo.png?resize=300 "orl-conf-servo")</div>
<div markdown="1" class="flexible">![orl-servo-steuern](orl-servo-steuern.png?resize=500 "orl-servo-steuern")</div>
</div>
  </div>
  <div class="python content-block" markdown="1">
Zunächst muss das Modul "Servo" zum Projekt hinzugefügt werden, welches zwei Funktionen zum Ansteuern von Servos zur Verfügung stellt. Dazu gehe auf **Projekt -> Module hinzufügen -> Servo**. Danach muss das Modul in `main.py` importiert werden und die Funktionen stehen bereit.
<div class="flex-box">
<div markdown="1" class="flexible">
 ```python
# Imports go at the top
from calliopemini import *
from Servo import *

# Code in a 'while True:' loop repeats forever
while True:
    if button_a.is_pressed():
        # 180°-Servo an P0 wird auf 0°, 90° und 180° gestellt
        set_servo_angle(pin0, 0)  # Winkel auf 0°
        sleep(1000)
        set_servo_angle(pin0, 90)  # Winkel auf 90°
        sleep(1000)
        set_servo_angle(pin0, 180)  # Winkel auf 180°
        sleep(1000)
```
</div>
<div markdown="1" class="flexible">
 ```python
# Imports go at the top
from calliopemini import *
from Servo import *

# Code in a 'while True:' loop repeats forever
while True:
    if button_a.is_pressed():
        # 360°-Servo an P0 
        set_servo_speed(pin0, 100) # volles Tempo vorwärts
        sleep(1000)
        set_servo_speed(pin0, 0)   # Stopp
        sleep(1000)
        set_servo_angle(pin0, -100) # volles Tempo rückwärts
        sleep(1000)
        set_servo_speed(pin0, 0)   # Stopp
```
</div>
</div>
  </div>
</div>
</div>

#### Programmierung mit Pulsweitenmodulation

Die Steuerung der Servos erfolgt über ein PWM-Signal (Pulsweitenmodulation). Dabei gibt die Länge der Signalzeit, in der die Spannung auf 3,3V liegt, an, welcher Winkel bzw. welche Geschwindigkeit eingestellt werden soll. Die Signalzeiten variieren dabei von Servo zu Servo ein bisschen, sind aber im Wesentlichen vergleichbar. Wenn der Winkel mit Hilfe der Erweiterung (siehe oben) nicht ganz korrekt eingestellt wird, liegt das daran, dass die Signalzeiten für den verwendeten Servo nicht genau denen entsprechen, die der Erweiterung zugrunde liegen. Wenn man die Signalzeiten zu einem Analogwert für die Pulsweitenmodulation umrechnet, erhält man die exakten Werte.

Beispiel:
Die Signalzeit 1,5ms steht für einen Winkel von 90°. Um den zugehörigen Analogwert zu berechnen, teilt man die Signalzeit durch die Periodendauer (20ms) und multipliziert diese mit dem maximalen Analogwert von 1023: $\frac{1,5ms}{20ms} \cdot 1023 = 76,725 \approx 77$.

Im Folgenden wird die Programmierung mit den Signalzeiten für den Servo FT90R bzw. FT90B zu Grunde gelegt.

**FT90B** (180° Servo)

| Signalzeit | Bedeutung | Analogwert |
|--------------|----------------|-----------------|
| 0,7 ms | 0° | 36 |
| 1,5ms | 90° | 77 |
| 2,3ms | 180° | 118 |

**FT90R** (360° Servo)

| Signalzeit | Bedeutung | Analogwert |
|--------------|----------------|-----------------|
| 0,7 ms | Tempo 100% im Uhrzeigersinn | 36 |
| 1,5ms | Tempo 0% / Stopp | 77 |
| 2,3ms | Tempo 100% gegen den Uhrzeigersinn | 118 |

<!-- Tabs für die Auswahl -->
<div class="tab-group" data-group="programmierumgebung">
<div class="tabs">
  <button class="tab-button" data-umgebung="makecode">Makecode</button>
  <button class="tab-button" data-umgebung="roberta">Open Roberta Lab</button>
  <button class="tab-button" data-umgebung="python">Python</button>
</div>

<!-- Inhalte für jede Programmierumgebung -->
<div class="tab-content">
  <div class="makecode content-block" markdown="1">
Eine Erweiterung ist nicht nötig. Die Befehle finden sich unter Fortgeschritten -> Pins. Das folgende Programm stellt den Winkel bzw. die Geschwindigkeit entsprechend der oben dargestellten Tabellen ein.

![mc-servo-mit-pwm-steuern](mc-servo-mit-pwm-steuern.png?lightbox=1024&resize=500 "mc-servo-mit-pwm-steuern")

  </div>
  <div class="roberta content-block" markdown="1">
Zunächst muss ein analoger Aktor in der Roboterkonfiguration angelegt werden. Dort stehen aktuell (Stand 09.04.26) nicht alle möglichen Pins zur Verfügung, daher muss das Signalkabel ggf. an einen anderen, hier ausgewählten Pin wie P1 angeschlossen werden. Das folgende Programm stellt den Winkel bzw. die Geschwindigkeit entsprechend der oben dargestellten Tabellen ein.
<div class="flex-box">
<div markdown="1" class="flexible">![orl-conf-aktor](orl-conf-aktor.png?resize=300 "orl-conf-aktor")</div>
<div markdown="1" class="flexible">![orl-servo-mit-pwm-steuern](orl-servo-mit-pwm-steuern.png?resize=500 "orl-servo-mit-pwm-steuern")</div>
</div>
  </div>
  <div class="python content-block" markdown="1">
Das Hinzufügen eines Moduls ist nicht mehr nötig. Das folgende Programm stellt den Winkel bzw. die Geschwindigkeit entsprechend der oben dargestellten Tabellen ein.
```python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    if button_a.is_pressed():
        pin0.write_analog(118)
        sleep(5000)
        pin0.write_analog(77)
        sleep(5000)
        pin0.write_analog(36)
        sleep(5000)
        pin0.write_analog(77)
```

  </div>
</div>
</div>

# Aufgaben

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
- Am besten ist es, wenn sowohl der Arduino als auch das Power Supply Module von einer eigenen 9V-Batterie versorgt werden. Es werden also zwei Batterien benötigt.
- Alternativ kann nur eine 9V-Batterie am Power Supply Module angeschlossen werden. Dann wird zusätzlich ein Kabel von der `+`-Leiste des Steckbretts an den 5V-Anschluss des Arduino benötigt.

Auf diese Weise können auch mehrere Servos oder andere stromhungrige Bauteile genutzt werden, ohne den Arduino zu überlasten. Der maximale Stromfluss beträgt bei dem Power Supply Module $1\,A$.