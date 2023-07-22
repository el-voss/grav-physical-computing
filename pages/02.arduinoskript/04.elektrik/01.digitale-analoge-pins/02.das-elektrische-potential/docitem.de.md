---
title: 'Das elektrische Potential'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: el-potential.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Kurze Einführung'
        - 'Einfache Entscheidungen programmieren'
        - 'Spannung Stromstärke und Widerstand berechnen'
        - 'Digital vs Analog und Aktor vs Sensor'
    Inhalte:
        - Taster
        - 'Elektrisches Potential'
        - Ground
        - Pullup
        - Pulldown
        - 'Digitale Pins'
    Niveau:
        - Basis
        - Fortgeschritten
---

Die Ausgabe von 5 V gegenüber GND an einem digitalen Ausgang des Arduino ist vergleichbar mit einer Batterie oder einem Spannungsgerät. Um zu verstehen, wie der Arduino digitale Signale einliest und dadurch auf seine Umwelt reagieren kann, muss jedoch zuerst geklärt werden, was sich hinter dem *elektrischen Potential* verbirgt.

**Frage:** Wie werden digitale Signale am Arduino eingelesen?

<div markdown="1" class="aufgabe">
#### Eine Analogie für das elektrische Potential

1.  Anna und Bert schauen auf dasselbe Fenster. Anna meint, das Fenster befinde sich in 1 Meter Höhe. Bert hingegen meint, das Fenster befinde sich in 4 Meter Höhe. Beide haben jeweils für sich betrachtet Recht. Wie kann das sein?
2.  Die Vase fällt einen Meter tief. Gib an, … 
      - …mit welcher Höhe Anna die Höhenenergie nach dem Fallen berechnet und mit welcher Höhendifferenz sie die Höhenenergie berechnet, die in Bewegungsenergie umgewandelt wurde.
      - …mit welcher Höhe Bert die Höhenenergie nach dem Fallen berechnet und mit welcher Höhendifferenz er die Höhenenergie berechnet, die in Bewegungsenergie umgewandelt wurde.
    
    Hinweis: $E_H=m\cdot g\cdot h$
</div>

<div markdown="1" class="aufgabe">
#### Übersicht

1. Übertrage und vervollständige die folgende Tabelle von Analogien.
2. Erkläre, welche der genannten Größen in der Mechanik bzw. der Elektrik abhängig von der Festlegung eines Nullniveaus sind.

|  **Mechanik**  |      **Elektrik**      |
| :------------: | :--------------------: |
|  Höhenenergie  |                        |
|                | Elektrisches Potential |
| Höhendifferenz |                        |
|   Grundhöhe    |                        |
</div>

!!!! <div markdown="1" class="clearfix">
!!!! ![Elektrisches Potential](el-potential.png?lightbox=1024&resize=400&classes=caption,figure-right "El. Potential bei einem einfachen Schaltkreis.")
!!!! #### Elektrisches Potential
!!!! So wie die Höhendifferenz ein Maß für die Höhenenergie ist, die umgewandelt wird (z. B. in Bewegungsenergie), ist die Spannung ein Maß für die elektrische Energie, die an einer LED, einem Widerstand etc. umgewandelt wird.
!!!! 
!!!! Das elektrische Potential hingegen ist wie die Höhe ein Maß für die elektrische Energie der Elektronen im Stromkreislauf. Es kann nur in Bezug auf ein Nullniveau (“Ground”/GND) angegeben werden. Die Einheit des elektrischen Potentials ist Volt.
!!!! 
!!!! Elektrisches Potential am GND-Pin: 0V
!!!! Elektrisches Potential am 5V-Pin: 5V
!!!! </div>

!!! Druckvorlage zum Download: <a href="/worksheets/pulldown-pullup-druck.pdf" download><i class="fa fa-download" aria-hidden="true"></i> Pulldown-Pullup-Druck.pdf</a>

<div markdown="1" class="aufgabe">
#### Pulldown-Widerstand

In dem unten abgebildeten Schaltplan ist dargestellt, wie man einen Taster am Arduino so anschließt, dass man seinen Zustand im digitalen Pin 3 auslesen kann. Der Widerstand wird auch als *Pulldown-Widerstand* bezeichnet und sollte relativ groß sein. $ 10 \, k\Omega$ sind üblich.

Markiere die Kabel farbig, sodass die Kabel, die auf dem gleichen elektrischen Potential liegen, die gleiche Farbe haben. Notiere zudem den Wert des elektrischen Potentials.

<div class="flex-box">
<div markdown="1">![Taster geschlossen (Stromfluss).](taster-an-arduino.png?lightbox=1024&resize=400)</div>
<div markdown="1">![Taster geschlossen (Stromfluss).](taster-an-arduino-geschlossen.png?lightbox=1024&resize=400)</div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Pullup-Widerstand

Eine Alternative zu der bekannten oberen Schaltung ist die Schaltung mit einem sogenannten Pullup-Widerstand. In der Abbildung ist die Schaltung mit einem Taster und einem Pullup-Widerstand dargestellt.

![](schaltplan-pullup.png?lightbox=1024&resize=800)

1.  Markiere die Kabel jeweils farbig, sodass die Kabel, die auf dem gleichen elektrischen Potential liegen, die gleiche Farbe haben. Notiere zudem den Wert des elektrischen Potentials.
2.  Erläutere die Bedeutung der beiden Begriffe *Pulldown* und *Pullup*.
    *Hinweis: to pull - engl. für “ziehen”*
</div>

<div markdown="1" class="projekt">
#### Raketencountdown auf Knopfdruck
Erweitere deinen Raketencountdown so, dass er mit einem Taster gestartet wird. Verwende für den Taster eine Pullup-Schaltung!
</div>

<div markdown="1" class="projekt">
#### Fußgängerampel reloaded
Baue und programmiere eine Fußgängerampel mit einer Pullup-Schaltung für den Taster!
</div>

!!!! #### Digitale Pins des Arduino
!!!! 
!!!! <div class="flex-box">
!!!! <div markdown="1">
!!!! Die digitalen Pins des Arduino von 0 bis 13 kennen nur zwei Zustände, für die es unterschiedliche Bezeichnungen gibt (siehe rechts/unten). Sie können als digitaler Ausgang oder als digitaler Eingang konfiguriert werden. Bei einem digitalen Ausgang kann eine Spannung von 5 V oder 0 V gegenüber GND ausgegeben werden. Ein digitaler Eingang kann Spannungen zwischen 0 V und 5 V einlesen; dabei werden Spannungen von 0 V bis 1,4 V als `LOW` oder `0` interpretiert, größere Spannungen als `HIGH` oder `1`.
!!!! </div>
!!!! <div markdown="1">
!!!! Bezeichnungen für Zustände von digitalen Pins
!!!! 
!!!! |     An     |    Aus    |
!!!! | :--------: | :-------: |
!!!! | HIGH (5 V) | LOW (0 V) |
!!!! |     1      |     0     |
!!!! 
!!!! *Hinweis: Bei vielen anderen Mikrocontrollern entspricht das HIGH-Potential 3,3 V.*
!!!! </div>
!!!! </div>
