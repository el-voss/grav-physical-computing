---
title: 'Drehregler / Potentiometer'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'poti.jpg,orl-poti-serielle-ausgabe.png,mc-poti-serielle-ausgabe.png,calliope-potentiometer.png,calliope-potentiometer-ersatzschaltskizze.png,poti-schaltsymbol.png,orl-conf-poti-serielle-ausgabe.png,serial-monitor-starten.png,pwm-analog-diagramm.png,mc-poti-serieller-monitor.png,py-poti-serieller-monitor.png,poti2.jpg'
featured_image: poti.jpg
taxonomy:
    Inhalte:
        - Potentiometer
        - Drehregler
        - 'Analoger Eingang'
    Niveau:
        - Basis
        - Fortgeschritten
---

[TOC]

<div markdown="1" class="clearfix">
![Potentiometer](poti.jpg?resize=200&classes=caption,figure-right "Potentiometer.")
Ein Drehregler oder Potentiometer ist ein Widerstand, der in zwei Teile aufgeteilt wird. Durch Drehen am Griff kann man die Größe der Teile verändern, allerdings bleibt der Gesamtwiderstand immer gleich groß. Durch den einstellbaren Teilwiderstand lässt sich zum Beispiel eine Lampe dimmen oder die Lautstärke eines Lautsprechers regulieren.

Es gibt auch Versionen, bei denen die Größe der Teilwiderstände nicht durch Drehung, sondern durch Verschiebung festgelegt wird. Man spricht dann von einem Schieberegler.
</div>

## Verbindung mit Jacdac

!!!! Über den Jacdac-Anschluss können auf einfache Weise Sensoren und Aktoren an den Calliope angeschlossen und angesteuert werden. Es können mehrere Jacdac-Bauteile hintereinander angeschlossen werden. Über den Jacdac-Hub können sie auch parallel angeschlossen werden. Jacdac ermöglicht nicht nur die Kommunikation von Sensor und Calliope, sondern auch per WebUSB mit Makecode. Auf diese Weise wird der aktuelle Sensorwert direkt in Makecode angezeigt.

**Der Anschluss und die Programmierung ist auf der [Jacdac-Seite von calliope.cc](https://calliope.cc/calliope-mini/erweiterungen/jacdac#schieberegler) schön gezeigt**.

## Verbindung mit der Pinleiste

### Schaltung

<div class="flex-box">
    <div markdown="1">![calliope-potentiometer](calliope-potentiometer.png?lightbox=1024&resize=500&classes=caption "Anschluss des Potentiometers mit dem Calliope.")</div>
    <div markdown="1">![calliope-potentiometer-ersatzschaltskizze](calliope-potentiometer-ersatzschaltskizze.png?lightbox=1024&resize=500&classes=caption "Ersatzschaltskizze zum Anschluss des Potentiometers an den Calliope. Er verdeutlicht, dass das Potentiometer aus zwei Teilwiderständen besteht, deren Größe sich durch Drehung oder Schieben einstellen lässt.")</div>
</div>

VCC und GND, also Pluspol und Minuspol, müssen mit den äußeren Kontakten verbunden werden, sodass zwischen diesen Polen der gesamte Widerstand liegt. Mit dem mittleren Kontakt lässt sich dann die Spannung am Teilwiderstand zwischen P0 und GND als Analogwert messen.

Das Signalkabel (in der Schaltskizze blau eingezeichnet) muss mit einem Pin verbunden werden, der ein analoges Signal lesen kann. Dafür kommen folgende Pins in Frage: P0, P1, P2, C4, C10, C16, C18. Achtung: Die Pins können schon an anderer Stelle verwendet worden sein, z. B. über die Ringpads (P0, P1, P2) oder den Grove-Anschluss A1 (betrifft C16).


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
Zum Auslesen des Potentiometers lässt man sich aus der Kategorie "Pins" die analogen Werte des entsprechenden Pins (hier P0) anzeigen.

Für das Auslesen des analogen Wertes bietet es sich an, den analogen Wert über die serielle Schnittstelle (USB-Kabel) an den Computer schicken zu lassen und dort visualisieren zu lassen. Der Befehl dazu findet sich in der Kategorie "Seriell". Nach dem Übertragen des Programms kann man im linken Fensterbereich auf "Daten anzeigen Calliope mini" auswählen und bekommt die unten abgebildete Ansicht.
<div class="flex-box">
<div markdown="1">
![mc-poti-serielle-ausgabe](mc-poti-serielle-ausgabe.png?lightbox=1024&resize=500 "mc-poti-serielle-ausgabe")
</div>
<div markdown="1">
![mc-poti-serieller-monitor](mc-poti-serieller-monitor.png?lightbox=1024&resize=500 "mc-poti-serieller-monitor")
</div>
</div>

  </div>
  <div class="roberta content-block" markdown="1">
Zum Auslesen des Potentiometers muss man zunächst die Konfiguration des Signalpins als analoger Sensor vornehmen.

![orl-conf-poti-serielle-ausgabe](orl-conf-poti-serielle-ausgabe.png?resize=500&classes=caption "Konfiguration des Signalpins P1 als analoger Sensor.")
      
! Bei der Konfiguration als analoger Sensor stehen nicht alle oben aufgezählten Pins zur Auswahl. Dies ist ein Bug im Open Roberta Lab (Stand: 01.04.26). Insbesondere ist auch der Pin P0 nicht als analoger Sensor auswählbar, weshalb anders als in oben dargestellten Schaltskizze der Pin P1 als analoger Sensor ausgewählt wird. **Wenn der Pin P1 als analoger Sensor konfiguriert wird, sollte er dementsprechend auch mit dem Potentiometer verbunden werden.**

Für das Auslesen des analogen Wertes bietet es sich an, den analogen Wert über die serielle Schnittstelle (USB-Kabel) an den Computer schicken zu lassen, um den Verlauf besser nachzuvollziehen. Nach dem Übertragen des Programms kann man im [Open Roberta Connector](https://jira.iais.fraunhofer.de/wiki/spaces/ORInfo/pages/90802891/Open+Roberta+Connector?target=_blank) die Verbindung mit dem Calliope herstellen und den Seriellen Monitor starten (siehe Abbildung). Um die Werte zu visualisieren, kann man sie optional in eine Tabellenkalkulation kopieren und dort ein Diagramm erstellen.

<div class="flex-box">
<div markdown="1">
![orl-poti-serielle-ausgabe](orl-poti-serielle-ausgabe.png?resize=500&classes=caption "Senden des analogen Wertes über die serielle Schnittstelle (USB-Kabel) an den Computer.")
</div>
<div markdown="1">
![serial-monitor-starten](serial-monitor-starten.png?resize=500&classes=caption "Öffnen des seriellen Monitors im Open Roberta Connector.")
</div>
</div>

  </div>
  <div class="python content-block" markdown="1">
Zum Auslesen des Potentiometers lässt man sich die analogen Werte des entsprechenden Pins (hier P0) anzeigen. Dabei bietet es sich an, den analogen Wert über die serielle Schnittstelle (USB-Kabel) an den Computer schicken zu lassen, um den Verlauf besser nachzuvollziehen. Nach dem Übertragen des Programms kann man direkt im Python Editor den Seriellen Monitor öffnen. Um die Werte zu visualisieren, kann man sie optional in eine Tabellenkalkulation kopieren (alles markieren und STRG + UMSCHALT + C drücken) und dort ein Diagramm erstellen.

<div class="flex-box">
<div markdown="1">
 ```python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    print(pin0.read_analog())
    sleep(200)
 ```
Ausgabe des Analogwerts des Potentiometers auf dem seriellen Monitor.
</div>
<div markdown="1">
![py-poti-serieller-monitor](py-poti-serieller-monitor.png?lightbox=1024&resize=400&classes=caption "Ausgabe der Analogwerte des Potentiometers auf dem seriellen Monitor.")</div>
</div>

  </div>
</div>
</div>

## Aufgaben

<div markdown="1" class="projekt clearfix">
#### Dimmbare Lampe
![PWM-Analog-Diagramm](pwm-analog-diagramm.png?resize=300&classes=caption,figure-right "Diagramm zur Ermittlung einer Funktion.")

Programmiere den Calliope so, dass die Helligkeit der drei RGB-LEDs durch das Potentiometer eingestellt wird.

Tipp für die Programmierung mit Python: Beschränke dich zunächst auf die Farbe Rot, die bei voller Helligkeit durch das Tupel (255, 0, 0) codiert wird. Dunklere Rottöne ergeben sich, wenn der erste Wert zwischen 0 und 255 liegt.
</div>