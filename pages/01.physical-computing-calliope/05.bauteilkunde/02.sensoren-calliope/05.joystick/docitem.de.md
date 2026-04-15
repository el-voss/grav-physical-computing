---
title: Joystick
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'calliope-joystick.png,joystick.jpg,mc-joystick-seriell-ausgeben.png,orl-conf-joystick.png,orl-joystick-auslesen.png,py-serieller-monitor.png,Schaltplan-Joystick-Ersatz.png,mc-serieller-monitor.png,serial-monitor-starten.png'
---

Joysticks werden bekanntermaßen für Spielecontroller oder auch zur Steuerung von Maschinen genutzt. Mit dem Calliope lassen sich einfache Versionen davon nachbauen.

<div markdown="1" class="clearfix">
![Joystick.](joystick.jpg?resize=250&classes=caption,figure-right "Joystick.")
Ein Joystick besteht im Wesentlichen aus zwei Potentiometern, die über einen gemeinsamen Hebel variiert werden können. Wie im Schaltbild zu sehen, teilen sich beide den 5V- und GND-Anschluss; der mittlere Anschluss muss natürlich jeweils einzeln ausgelesen werden. Zusätzlich wird durch Drücken des Joysticks ein angebrachter Taster gedrückt, dessen Status am SW-Pin ausgelesen werden kann (*sw von engl. “switch”*). Da das elektrische Potential am SW-Pin normalerweise schwankt, sollte ein *Pullup*-Widerstand angebracht werden (als externer Widerstand oder als interner Widerstand - im Folgenden wird der interne Pullup-Widerstand durch entsprechende Programmierung aktiviert).
</div>

## Verbindung mit der Pinleiste

### Schaltung

<div class="flex-box">
<div markdown="1" class="flexible">![calliope-joystick](calliope-joystick.png?lightbox=1024&resize=500&classes=caption "Anschluss des Joystick-Moduls an den Arduino.")</div>
<div markdown="1" class="flexible">![Ersatzschaltplan für das Joystick-Modul.](Schaltplan-Joystick-Ersatz.png?lightbox=1024&resize=300&classes=caption "Ersatzschaltplan für das Joystick-Modul.")</div>
</div>

Die Signalkabel der Potentiometer(VRx und VRy, in der Schaltskizze grün und blau eingezeichnet) müssen mit einem Pin verbunden werden, der ein analoges Signal lesen kann. Dafür kommen folgende Pins in Frage: P0, P1, P2, C4, C10, C16, C18. Achtung: Die Pins können schon an anderer Stelle verwendet worden sein, z. B. über die Ringpads (P0, P1, P2) oder den Grove-Anschluss A1 (betrifft C16).

Das Signalkabel des Tasters (SW, in der Schaltskizze orange eingezeichnet) muss mit einem Pin verbunden werden, der digital lesen kann. Das können alle Pins.

Weitere Informationen finden sich in der [Pin-Übersicht des Calliope](https://docs.calliope.cc/tech/hardware/pins/?target=_blank).

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
Zum Auslesen des Joysticks lässt man sich aus der Kategorie "Pins" die analogen Werte bzw. den digitalen Wert der entsprechenden Pins (hier P0, P1, P2) anzeigen.

Für das Auslesen der Werte bietet es sich an, den analogen Wert über die serielle Schnittstelle (USB-Kabel) an den Computer schicken zu lassen und dort visualisieren zu lassen. Der Befehl dazu findet sich in der Kategorie "Seriell". Nach dem Übertragen des Programms kann man im linken Fensterbereich auf "Daten anzeigen Calliope mini" auswählen und bekommt die unten abgebildete Ansicht.
<div class="flex-box">
<div markdown="1">
![mc-joystick-seriell-ausgeben](mc-joystick-seriell-ausgeben.png?lightbox=1024&resize=500 "mc-joystick-seriell-ausgeben")
</div>
<div markdown="1">
![mc-serieller-monitor](mc-serieller-monitor.png?lightbox=1024&resize=500 "mc-serieller-monitor")
</div>
</div>

  </div>
  <div class="roberta content-block" markdown="1">
Zum Auslesen des Potentiometers muss man zunächst die Konfiguration der Signalpins der Potentiometer (VRx und VRy) als analoger Sensor vornehmen. Der SW-Pin des Tasters wird als digitaler Sensor konfiguriert und zusätzlich wird hier der Pullup-Widerstand aktiviert.

![orl-conf-joystick](orl-conf-joystick.png?resize=500&classes=caption "Konfiguration der Pins des Joysticks.")
      
! Bei der Konfiguration als analoger Sensor stehen nicht alle oben aufgezählten Pins zur Auswahl. Dies ist ein Bug im Open Roberta Lab (Stand: 01.04.26). Insbesondere ist auch der Pin P0 nicht als analoger Sensor auswählbar, weshalb anders als in oben dargestellten Schaltskizze der Pin P1 als analoger Sensor ausgewählt wird. Stattdessen wird Pin P0 als digitaler Sensor für den Taster konfiguriert. **Dementsprechend muss auch die Verkabelung geändert werden.**

Für das Auslesen der Werte bietet es sich an, die Werte über die serielle Schnittstelle (USB-Kabel) an den Computer schicken zu lassen, um den Verlauf besser nachzuvollziehen. Nach dem Übertragen des Programms kann man im [Open Roberta Connector](https://jira.iais.fraunhofer.de/wiki/spaces/ORInfo/pages/90802891/Open+Roberta+Connector?target=_blank) die Verbindung mit dem Calliope herstellen und den Seriellen Monitor starten (siehe Abbildung). Um die Werte zu visualisieren, kann man sie optional in eine Tabellenkalkulation kopieren und dort ein Diagramm erstellen.

<div class="flex-box">
<div markdown="1">
![orl-joystick-auslesen](orl-joystick-auslesen.png?resize=500&classes=caption "Senden der Werte über die serielle Schnittstelle (USB-Kabel) an den Computer.")
</div>
<div markdown="1">
![serial-monitor-starten](serial-monitor-starten.png?resize=500&classes=caption "Öffnen des seriellen Monitors im Open Roberta Connector.")
</div>
</div>

  </div>
  <div class="python content-block" markdown="1">
Zum Auslesen der Potentiometer und des Tasters lässt man sich aus die analogen Werte bzw. digitalen Werte des entsprechenden Pins anzeigen. Dabei bietet es sich an, die Wert über die serielle Schnittstelle (USB-Kabel) an den Computer schicken zu lassen, um den Verlauf besser nachzuvollziehen. Nach dem Übertragen des Programms kann man direkt im Python Editor den Seriellen Monitor öffnen. Um die Werte zu visualisieren, kann man sie optional in eine Tabellenkalkulation kopieren (alles markieren und STRG + UMSCHALT + C drücken) und dort ein Diagramm erstellen.

<div class="flex-box">
<div markdown="1">
 ```python
# Imports go at the top
from calliopemini import *

# Pin 1 mit einem Pullup-Widerstand versehen
# dadurch ist der Zustand im Fall "nicht gedrückt" 1 (HIGH)
pin1.set_pull(pin1.PULL_UP)

# Code in a 'while True:' loop repeats forever
while True:
    # Pin P0 analog auslesen, Ergebnis in String umwandeln und Ausgabe auf dem seriellen Monitor
    print("x: " + str(pin0.read_analog()) )

    # Pin P2 analog auslesen, Ergebnis in String umwandeln und Ausgabe auf dem seriellen Monitor
    print("y: " + str(pin2.read_analog()) )  

    # Pin P1 digital auslesen, Ergebnis in String umwandeln und Ausgabe auf dem seriellen Monitor
    print("sw: " + str(pin1.read_digital()) ) 
    print("--------------------")
    sleep(500)

 ```
Ausgabe des Analogwerts des Potentiometers auf dem seriellen Monitor.
</div>
<div markdown="1">![py-serieller-monitor](py-serieller-monitor.png?lightbox=1024&resize=400&classes=caption "Ausgabe der Werte des Joysticks auf dem seriellen Monitor.")</div>
</div>

  </div>
</div>
</div>

## Aufgaben

<div markdown="1" class="aufgabe">
#### Erste Experimente

1.  Bewege den Hebel des Joystick-Moduls und beobachte, wie sich dabei die Potentiometer an den Seiten mitbewegen. Bringe auch den Plastikdeckel an, drücke den Joystick herunter und beobachte dabei das Verhalten des Tasters.
2.  Schließe das Joystick-Modul wie oben beschrieben an den Arduino an. Lies die Werte der Potentiometer aus, während du sie bewegst. Notiere, welche Bewegungsrichtung die X-Richtung und welche die Y-Richtung darstellt. Notiere außerdem, welches der beiden Potentiometer (ggü. von Taster oder ggü. der Pins) für die X-Richtung bzw. Y-Richtung verantwortlich ist.
3.  Mit dem Pullup-Widerstand wird eine sogenannte Active-Low Schaltung aufgebaut. Teste die Funktionsweise des Tasters, indem du das elektrische Potential in D3 ausliest und beschreibe, was mit dem Begriff Active-Low gemeint ist.
</div>

<div markdown="1" class="projekt">
#### Joystick-Steuerung für eine LED-Kette

Schließe am Arduino zusätzlich zum Joystick fünf LEDs mit Vorwiderstand an. Diese sollen folgendermaßen programmiert werden:

- Wenn der Joystick in der Mitte steht, dann leuchtet nur die mittlere LED mit mittlerer Helligkeit.
- Wenn der Joystick nach oben bewegt wird, dann werden abhängig von der Auslenkung die "oberen" LEDs hinzugeschaltet, analog gilt dies für die "unteren" LEDs. Dies gilt nur solange, wie der Joystick nach oben bzw. unten gehalten wird.
- Wenn der Joystick nach links/rechts bewegt wird, dann wird abhängig von der Auslenkung die Helligkeit verringert / vergrößert.

Zusatz: Mit einem Druck auf den Joystick lassen sich die LEDs an- / ausschalten.
</div>

<div markdown="1" class="projekt">
#### Joystick-Motor-Steuerung

Steuere mit dem Joystick-Modul einen Schrittmotor!
</div>

!! **Achtung bei Verwendung von Motoren:** Spätestens, wenn mehr als ein Motor am Arduino betrieben werden soll, muss eine externe Spannungsquelle genutzt werden, zum Beispiel durch Anschluss einer 9 V-Batterie an das Power-Supply-Module. Schaue dir dazu noch einmal den [Infokasten zum Power Supply Module](/arduinoskript/elektrik/transistoren-motoren/elektromotor-mit-relais-steuern#das-“power-supply-module”) an.

