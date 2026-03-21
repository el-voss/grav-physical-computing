---
title: Ultraschallsensor
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'ultraschall-sensor-prinzip.png,ultraschallsensor-am-auto.jpg,ultraschallsensor-grove.jpg,ultraschallsensor-jacdac.jpg,makecode-erweiterung-grove.png,makecode-erweiterung-jacdac.png,schaltskizze-ultraschall-grove.png,makecode-grove-ultraschall-test.png,makecode-jacdac-ultraschall-test.png,makecode-pulseIn-ultraschall-test.png,schaltskizze-calliope-hc-sr04.png'
featured_image: ultraschall-sensor-prinzip.png
published: true
taxonomy:
    Inhalte:
        - Ultraschallsensor
        - Transducer
        - Receiver
        - 'Entfernung messen'
    Niveau:
        - Basis
---

<div markdown="1" class="clearfix">
![Ultraschallsensor am Auto.](ultraschallsensor-am-auto.jpg?resize=250&classes=caption,figure-right "Ultraschallsensor am Auto.")
Ultraschallsensoren ermöglichen die berührungslose Messung eines Abstands zwischen dem Sensor und dem nächstgelegenen Gegenstand. Dies macht sie zu einer interessanten Ausrüstung für Staubsaugerroboter, die nicht gegen die Wand fahren sollen, oder Einparkhilfen im Auto, die dem Fahrer anzeigen sollen, wie viel Platz er noch hat.
</div>

Die wichtigsten Bestandteile des Ultraschallsensors sind der “Transducer” (**T**) und der “Receiver” (**R**). Der Transducer ist praktisch ein Lautsprecher, der für uns nicht hörbare Schallwellen (Ultraschallwellen) aussendet. Der Receiver entspricht einem Mikrofon für Schallwellen. Die Schallwellen werden also vom Transducer ausgesendet, an einem Hindernis reflektiert und vom Receiver empfangen.

![Funktionsprinzip eines Ultraschallsensors.](ultraschall-sensor-prinzip.png?classes=caption "Funktionsprinzip eines Ultraschallsensors.")

Ultraschallsensoren gibt es in verschiedenen Varianten und mit verschiedenen Verbindungsmöglichkeiten.

### Anschluss mit dem Grove-Connector

<div markdown="1" class="clearfix">
![ultraschallsensor-grove](ultraschallsensor-grove.jpg?lightbox=512&resize=250&classes=caption,figure-right "Ultraschallsensor mit Grove-Anschluss.")
Der Grove-Connector besteht im Wesentlichen aus einem weißen Plastikgehäuse, das so gestaltet ist, dass man die Kabel nur in einer Richtung einstecken kann. Auf diese Weise wird in jedem Fall die richtige Verbindung hergestellt. Auf dem Calliope müssen die Kabel in den Anschluss A1 gesteckt werden.

Das schwarze Kabel verbindet die beiden GND-Anschlüsse (Minus-Pol), das rote Kabel verbindet die beiden VCC-Anschlüsse (Plus-Pol, Spannung 3,3V). Das weiße Kabel verbindet den TX-Pin am Calliope mit dem NC-Pin am Ultraschallsensor. Über dieses Kabel kann der Calliope ein Signal an den Ultraschallsensor senden (daher *TX - transmit*) und darüber die Messung starten. Das gelbe Kabel verbindet den RX-Pin am Calliope mit dem SIG-Pin am Ultraschallsensor. Über dieses Kabel kann der Ultraschallsensor ein Signal an den Calliope senden, das dieser dann lesen kann (daher *RX - receive*).
</div>

![schaltskizze-ultraschall-grove](schaltskizze-ultraschall-grove.png?lightbox=1024&resize=500&classes=caption "Schaltskizze zum Anschluss des Ultraschallsensors am Anschluss A1 des Calliope.")

Zum Programmieren mit Makecode muss die Erweiterung "Grove" geladen werden. Darüber können mehrere Sensoren, die alle über einen Grove-Anschluss verfügen, angesteuert bzw. ausgelesen werden. Für den Ultraschallsensor wird der Block ```Entfernung <Pin> cm``` benötigt, der die Entfernung in Zentimetern zurückgibt, die mit dem Ultraschallsensor gemessen wurde. Als Pin muss ```C16 (A1 RX)``` ausgewählt werden, da dies der Echo-Pin ist, der das Signal zurückgibt.

<div class="flex-box">
<div markdown="1" class="flexible">![makecode-erweiterung-grove](makecode-erweiterung-grove.png?resize=400 "makecode-erweiterung-grove")</div>
<div markdown="1" class="flexible">![makecode-grove-ultraschall-test](makecode-grove-ultraschall-test.png?resize=400 "makecode-grove-ultraschall-test")</div>
</div>


### Anschluss mit Jacdac

<div markdown="1" class="clearfix">
![ultraschallsensor-jacdac](ultraschallsensor-jacdac.jpg?lightbox=512&resize=250&classes=caption,figure-right "Ultraschallsensor mit Jacdac-Anschluss.")
Über den Jacdac-Anschluss können auf einfache Weise Sensoren und Aktoren an den Calliope angeschlossen und angesteuert werden. Es können mehrere Jacdac-Bauteile hintereinander angeschlossen werden. Über den Jacdac-Hub können sie auch parallel angeschlossen werden. Jacdac ermöglicht nicht nur die Kommunikation von Sensor und Calliope, sondern auch per WebUSB mit Makecode. Auf diese Weise wird der aktuelle Sensorwert direkt in Makecode angezeigt.
</div>

Der Ultraschallsensor mit Jacdac-Anschluss wird mit einem der Jacdac-Anschlüsse des Calliope verbunden. Das Vorgehen für das Laden der Jacdac-Erweiterung und erste Programmierschritte zeigt die [Jacdac-Dokumentation der offiziellen Calliope-Seite](https://calliope.cc/calliope-mini/erweiterungen/jacdac) sehr gut. Im Überblick:
- Jacdac-Erweiterung laden. Danach erscheint die neue Block-Kategorie "Module", die aber nur zwei Blöcke enthält.
- Jacdac-Sensor anschließen und ein ggf. leeres Programm auf den Calliope herunterladen.
- Danach sollten der Sensor und die zugehörigen Blöcke in Makecode angezeigt werden.

Der Block ```<Messwert> Entfernung (m)``` stellt vier mögliche Messwerte in Metern bereit, nämlich ```entfernung1```, ```entfernung2```, ```distance3``` und ```distance4```. Welcher davon einen geeigneten Wert liefert, lässt sich durch ausprobieren herausfinden.

<div class="flex-box">
<div markdown="1" class="flexible">![makecode-erweiterung-jacdac](makecode-erweiterung-jacdac.png?resize=400 "makecode-erweiterung-jacdac")</div>
<div markdown="1" class="flexible">![makecode-jacdac-ultraschall-test](makecode-jacdac-ultraschall-test.png?resize=400 "makecode-jacdac-ultraschall-test")</div>
</div>

### Anschluss mit Jumper-Kabeln

!!! **Achtung:** Der HC-SR04 funktioniert nur mit dem Calliope, wenn er sich mit 3,3V betreiben lässt! Die meisten Ultraschallsensoren, die man findet, funktionieren allerdings nur mit 5V, daher muss man genau hinschauen.

Der Ultraschallsensor HC-SR04 ist für wenig Geld zu haben und daher sehr beliebt. Die Verkabelung erfolgt hier einzeln mit sogenannten Jumper-Kabeln. Sie ist dem folgenden Schaltplan zu entnehmen.

![schaltskizze-calliope-hc-sr04](schaltskizze-calliope-hc-sr04.png?lightbox=1024&resize=500&classes=caption "Schaltskizze zum Anschluss des HC-SR04 mit Jumper-Kabeln am Calliope.")

Grundsätzlich sind die folgenden Pins sowohl für den Trigger-Pin als auch für den Echo-Pin geeignet: P0, P1, P2, P3, C8, C9, C13, C14, C15, C16, C17. Beachte, dass die Pins P0, P1, P2, P3 über die äußeren Ringpads (goldene Ringe) schon belegt sein können.

Zur Bestimmung des Abstands muss man auf das Funktionsprinzip des Ultraschallsensors zurückgreifen, das oben beschrieben wurde. Mit dem folgenden Programm wird die Entfernung ermittelt und auf dem Display des Calliope ausgegeben.

![makecode-pulseIn-ultraschall-test](makecode-pulseIn-ultraschall-test.png?lightbox=1024&resize=500&classes=caption "Programm zur Ermittlung des Abstands mit dem HC-SR04 (Erklärung im Text).")

- Zuächst wird der Pin C9 und damit der Trigger-Pin des Ultraschallsensors für 5ms auf 0 gesetzt, sodass kein Strom fließt. Dies dient dazu, den Startzeitpunkt des folgenden Signals festzulegen.
- Als Nächstes wird der Pin C9 und damit der Trigger-Pin des Ultraschallsensors für 30ms auf 1 gesetzt. Dadurch wird ein Ultraschall-Signal ausgesendet.
- Im Folgenden werden sowohl C9 als auch C8, also Trigger und Echo am Ultraschallsensor, auf 0 gesetzt. Dadurch wird das Ultraschallsignal beendet und der Echo-Pin auf das Signal vorbereitet.
- Mit dem Befehl ```Impuls in Mikrosekunden an Pin C8 mit hoch``` wird die Zeit in Mikrosekunden ermittelt, die das Ultraschallsignal braucht, um nach dem Aussenden wieder zurück zum Ultraschallsensor zu gelangen. Dies wird in der Variable ```zeit``` gespeichert.
- Die gemessene Zeit muss nun durch 2 geteilt werden, weil die gesuchte Strecke zwei Mal vom Ultraschall durchlaufen wurde (Hin- und Rückweg). Das Ergebnis wird mit der Geschwindigkeit des Ultraschalls in Zentimeter pro Mikrosekunde multipliziert.

Für die Verwendung in größeren Zusammenhängen ist es sinnvoll, diese Abfolge in eine Funktion auszulagern, die die Entfernung zurückgibt.


### Anwendung

<div markdown="1" class="projekt">
#### Einparkhilfe für ein Auto

Baue eine Einparkhilfe für ein Auto, die umso schneller piepst, je näher man dem Hindernis kommt. Ab einer Entfernung von 30 cm soll der Ton durchgängig ertönen.
</div>

! **Recherche: Wie wird Ultraschall erzeugt und gemessen?**
! Die Erzeugung des Ultraschalls beruht wie beim Piezo-Summer auf dem inversen piezo-elektrischen Effekt (vgl. [Piezo-Summer](/arduinoskript/algorithmische-grundlagen/bausteine-von-algorithmen/einfache-entscheidungen-programmieren#piezo-summer)); die Messung des Ultraschalls beruht auf dem piezo-elektrischen Effekt. Recherchiere im Internet die Hintergründe dieser Effekte und fasse sie zusammen.