---
title: Ultraschallsensor
show_pageimage: true
image_width: 300
image_height: 300
featured_image: ultraschall-sensor-prinzip.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Einfache Entscheidungen programmieren'
    Inhalte:
        - Ultraschallsensor
        - Transducer
        - Receiver
        - 'Entfernung messen'
    Niveau:
        - Basis
---

<div markdown="1" class="clearfix">
![Ultraschallsensor am Auto.](ultraschallsensor-am-auto-qn.jpg?resize=250&rotate=90&classes=caption,figure-right "Ultraschallsensor am Auto.")
Ultraschallsensoren ermöglichen die berührungslose Messung eines Abstands zwischen dem Sensor und dem nächstgelegenen Gegenstand. Dies macht sie zu einer interessanten Ausrüstung für Staubsaugerroboter, die nicht gegen die Wand fahren sollen, oder Einparkhilfen im Auto, die dem Fahrer anzeigen sollen, wie viel Platz er noch hat.
</div>

Die wichtigsten Bestandteile des Ultraschallsensors sind der “Transducer” (**T**) und der “Receiver” (**R**). Der Transducer ist praktisch ein Lautsprecher, der für uns nicht hörbare Schallwellen aussendet. Der Receiver entspricht einem Mikrofon für Schallwellen. Die Schallwellen werden also vom Transducer ausgesendet, an einem Hindernis reflektiert und vom Receiver empfangen.

![Funktionsprinzip eines Ultraschallsensors.](ultraschall-sensor-prinzip.png?classes=caption "Funktionsprinzip eines Ultraschallsensors.")

Der Ultraschallsensor verfügt über vier Pins. GND und VCC (5 V) sind wie üblich zu belegen und dienen der Energieversorgung. Der Trigger-Pin dient dazu, einen Ultraschallpuls auszusenden - wird er für 10 Mikrosekunden auf ein HIGH-Potential gebracht, wird der Ultraschallpuls getriggert. Wenn dies geschieht, wird der Echo-Pin von der Elektronik des Sensors auf ein HIGH-Potential gebracht, das so lange anhält, bis der Receiver die reflektierte Schallwelle empfängt. Trigger-Pin und Echo-Pin können beide mit einem beliebigen Digitalpin am Arduino verbunden werden.

Die Zeit, die der Echo-Pin auf HIGH liegt, gibt also an, wie lange der Schall braucht, um vom Sensor zum Hindernis und zurück zu gelangen. Mit Hilfe der Schallgeschwindigkeit wird dann berechnet, welche Strecke der Schall zurückgelegt hat. Diese Berechnungen werden praktischerweise von den vorkonfigurierten Nepo-Blöcken übernommen, sodass man direkt die Strecke erhält.

<div class="flex-box">
<div markdown="1">![ultraschallsensor-konfiguration](ultraschallsensor-konfiguration.png?classes=caption "Konfigurationsblock des Ultraschallsensors mit den Standardeinstellungen.")</div>
<div markdown="1">![gib-Abstand-Befehl](gibEntfernung.png?classes=caption "Programmblock zur Abfrage der Entfernung in Zentimetern.")</div>
</div>

<div markdown="1" class="projekt">
#### Einparkhilfe für ein Auto

Baue eine Einparkhilfe für ein Auto, die umso schneller piepst, je näher man dem Hindernis kommt. Ab einer Entfernung von 30 cm soll der Ton durchgängig ertönen.
</div>

! **Recherche: Wie wird Ultraschall erzeugt und gemessen?**
! Die Erzeugung des Ultraschalls beruht wie beim Piezo-Summer auf dem inversen piezo-elektrischen Effekt (vgl. [Piezo-Summer](/arduinoskript/algorithmische-grundlagen/bausteine-von-algorithmen/einfache-entscheidungen-programmieren#piezo-summer)); die Messung des Ultraschalls beruht auf dem piezo-elektrischen Effekt. Recherchiere im Internet die Hintergründe dieser Effekte und fasse sie zusammen.