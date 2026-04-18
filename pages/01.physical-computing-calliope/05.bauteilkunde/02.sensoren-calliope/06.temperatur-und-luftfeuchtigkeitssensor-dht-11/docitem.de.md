---
title: 'Temperatur- und Luftfeuchtigkeitssensor DHT-11'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'py-serielle-ausgabe.png,mc-serielle-ausgabe.png,mc-serielle-ausgabe-programm.png,mc-erweiterung-dht11_dht22.png,calliope-dht11-schaltskizze.png,dht11.jpg'
featured_image: dht11.jpg
---

[TOC] 

<div markdown="1" class="clearfix">
![DHT-11](dht11.jpg?resize=250&classes=caption,figure-right "DHT-11.")
Bei vielen Umweltmessungen interessiert nicht nur die Temperatur, sondern auch die Luftfeuchtigkeit. Der Sensor DHT-11 ist ein einfaches, kleines Bauteil, mit dem sich beides messen lässt.
</div>

## Verbindung mit der Pinleiste

### Schaltung

Den DHT-11 gibt es in verschiedenen Versionen. Der "nackte Sensor", also der blaue Kasten, verfügt über vier Pins, von denen einer über einen Pullup-Widerstand mit VCC verbunden werden muss. Die oben abgebildete Version befindet sich auf einer kleinen Platine, auf der diese Verbindung mit einem Widerstand R1 schon umgesetzt wurde. Dadurch bleiben nur noch drei Pins zur Verbindung mit dem Calliope übrig: VCC und GNC dienen der Stromversorgung, während das Signal zu den Messdaten über den Signalpin S ausgegeben wird. Für die Temperaturmessung ist auf dem DHT-11 ein NTC verbaut.

![calliope-dht11-schaltskizze](calliope-dht11-schaltskizze.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum DHT-11 am Calliope.")

Für die Verbindung mit dem Signalpin eignen sich grundsätzlich alle Digitalpins des Calliope, sofern diese nicht schon anderweitig in Benutzung sind. Siehe für doppelt belegte Pins auch die [Dokumentation zur Pinbelegung des Calliope](https://docs.calliope.cc/tech/hardware/pins/).

### Programmierung

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
Zum Programmieren mit Makecode muss die Erweiterung "DHT11_DHT22" geladen werden. Diese stellt mehrere Blöcke zur Abfrage des DHT-11 zur Verfügung. Zentral ist der "Query"-Block (engl. für Abfrage). Bei diesem lassen sich mehrere Einstellungen vornehmen:
- `Query`: Angabe des Sensortyps, in diesem Fall DHT11
- `Data pin`: Angabe des Signalpins, bei einer Schaltung wie oben abgebildet ist das P0
- `Pin pull up`: Aktivierung bzw. Deaktivierung eines Pullup-Widerstands. Bei Verwendung der oben abgebildeten Platinenversion mit drei Pins ist das nicht notwendig.
- `Serial output`: Aktivierung bzw. Deaktivierung einer seriellen Ausgabe zur Abfrage. Dies ist hilfreich, um Fehlermeldungen bei der Abfrage zu sehen, kann aber ansonsten deaktiviert werden.
- `Wait 2 sec after query`: Sollte auf jeden Fall aktiviert sein, um den Sensor nicht zu oft abzufragen.

<div class="flex-box">
<div markdown="1" class="flexible">![mc-erweiterung-dht11_dht22](mc-erweiterung-dht11_dht22.png?lightbox=1024&resize=400&classes=caption "Makecode-Erweiterung für den DHT-11 (und DHT-22).")</div>
<div markdown="1" class="flexible">![mc-serielle-ausgabe-programm](mc-serielle-ausgabe-programm.png?lightbox=1024&resize=400&classes=caption "Programm zum Auslesen des DHT-11.)</div>
</div>

Das abgebildete Programm ist relativ komplex, weil das Auslesen des DHT-11 in meinen Tests relativ häufig zu Fehlern führte. Zwischen zwei Messungen soll stets eine Wartezeit von 30 Sekunden liegen, daher wird die Variable `wartezeit` auf 30000 (Millisekunden) gesetzt. Dann werden bis zu 10 Versuche unternommen, den DHT-11 auszulesen. Falls die Abfrage geklappt hat, erfolgt eine entsprechende Ausgabe auf dem seriellen Monitor und die Schleife wird abgebrochen. Sonst erfolgt keine Ausgabe. Am Ende erfolt das Warten bis zur nächsten Messung, wobei die Wartezeit, die schon zwischen den ggf. mehrfachen Abfragen vergangen ist, abgezogen wird.
</div>
  <div class="roberta content-block" markdown="1">
Die Abfrage des DHT-11 mit dem Calliope v3 ist bisher nicht im Open Roberta Lab implementiert (Stand 18.04.26).
  </div>
  <div class="python content-block" markdown="1">
Zunächst muss das Modul "DHT-11" hinzugefügt werden. Gehe dazu links unten auf "Projekt" -> "Module hinzufügen" und wähle das Modul "DHT-11" aus. Die Nutzung dieses Moduls ist unten dargestellt und erklärt.

```python
# Imports go at the top
from calliopemini import *
from DHT11 import *   # Modul DHT11 importieren


# Code in a 'while True:' loop repeats forever
dht_sensor = DHT11(pin0)  # Initialisierung des DHT11-Sensors an Pin0 des Calliope
wartezeit = 30000         # zwischen zwei Messungen soll eine Wartezeit von 30 Sek. liegen

while True:
    
    # Versuche, den Sensor auszulesen
    try:
        
        # Sensor DHT11 auslesen und Werte in den Variablen t (Temperatur in °C) und 
        # h (Luftfeuchtigkeit in %) speichern
        t , h = dht_sensor.read()
        
        # Ausgabe der Werte auf dem seriellen Monitor
        # %2.1f bedeutet: Eine Fließkommazahl (-> f) wird mit zwei Stellen vor dem Komma
        # und einer Stelle nach dem Komma angegeben
        # C bedeutet: Einheit der Temperatur (Celsius)
        # %% bedeutet: Einheit der Luftfeuchtigkeit (%), wobei das doppelte Prozentzeichen 
        # nötig ist, um die Angabe von einem Formatierungszeichen (einfaches %) zu unterscheiden
        # % (t, h) bedeutet: Einsetzen der Variablenwerte
        print("%2.1fC  %2.1f%% " % (t, h))
    
    # falls der Versuch fehlschlägt, wird zwei Sek. bis zum nächsten Messversuch gewartet
    # die Wartezeit bis zur nächsten regulären Messung wird entsprechend verkürzt
    except:               
        sleep(2000)
        wartezeit = wartezeit - 2000
    
    # dies wird nur ausgeführt, wenn im try-Block kein Fehler aufgetreten ist, wenn 
    # die Messung also erfolgreich war
    else:
        # wenn noch reguläre Wartezeit übrig ist, wird sie ausgeführt
        if wartezeit > 0:
            sleep(wartezeit)

        # die Wartezeit wird wieder auf die regulären 30 Sek. zurückgesetzt
        wartezeit = 30000

```

Die Abbildung unten zeigt die entsprechende Ausgabe auf dem seriellen Monitor.

![py-serielle-ausgabe](py-serielle-ausgabe.png?lightbox=1024&resize=500 "py-serielle-ausgabe")

  </div>
</div>
</div>



## Aufgaben

<div markdown="1" class="projekt">
#### Wetterstation
Baue eine kleine Wetterstation, die alle zehn Minuten Temperatur und Luftfeuchtigkeit misst und auf dem seriellen Monitor ausgibt.
</div>

! **Recherche: Wie wird die Luftfeuchtigkeit gemessen?**
! Mit dem DHT-11 lässt sich die relative Luftfeuchtigkeit bestimmen. Recherchiere, was darunter zu verstehen ist, und wie diese durch ein elektrisches Bauteil gemessen wird.