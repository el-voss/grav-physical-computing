---
title: 'Fahren lernen'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'motorblock.png,funktion-drehung-links.png,funktion-drehung-rechts.png,funktion-motor-leistung.png,funktion-motor-stop.png,bastelbot-quadrat-fahren.png,funktion-fahre.png,orl-funktion-geradeaus.png,orl-funktion-linksherum.png,orl-funktion-rechtsherum.png,orl-motorkonfiguration.png,orl-motoren-steuern.png,genau-1m-fahren.png,hindernis-umfahren-1m.png,hindernis-umfahren-quadrat.png,mc-einfache-verzweigung.png,mc-einfache-zählschleife.png,mc-ereignis.png,mc-sequenz.png,mc-verzweigung-mit-vgl.png'
taxonomy:
    Voraussetzungen:
        - 'Bau des Fahrgestells'
    Entwicklungsumgebung:
        - OpenRoberta
        - Makecode
        - Python
    Inhalte:
        - Funktionen
        - Getriebemotoren
        - 'Funktionen zum Fahren'
        - Hebelsteuerung
    Niveau:
        - Basis
featured_image: bastelbot-quadrat-fahren.png
---

[TOC]

Nachdem der Roboter nun über ein Fahrgestell verfügt und die Motoren verkabelt sind, wird es Zeit, ihm das Fahren beizubringen!

### Programmierung der Motoren

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
In der Kategorie "Motoren" gibt es dazu den Block "Motor ... an mit ...%", der es erlaubt, die Leistung der Motoren einzustellen:
- "50%" bedeutet, die Motoren drehen sich mit halber Leistung vorwärts,
- "0%" bedeutet, die Motoren bleiben stehen,
- "-50%" bedeutet, die Motoren drehen sich mit halber Leistung rückwärts.

![motorblock](motorblock.png?lightbox=500&resize=500&classes=caption "Block zum Ansteuern der Motoren, wenn Knopf A gedrückt wurde.")
  </div>
  <div class="roberta content-block" markdown="1">
Zunächst müssen die Motoren konfiguriert werden. Dabei werden die Anschlüsse von Motor M0 als Port A bezeichnet und diejenigen von Motor M1 als Port B. Es ist sinnvoll, die Benennung der Motoren so vorzunehmen, dass man gleich sieht, welcher Motor links und welcher rechts am Roboter angebracht ist.

![orl-motoren-steuern](orl-motorkonfiguration.png?lightbox=500&resize=500&classes=caption "Konfiguration der Motoren.")

In der Kategorie "Aktion" -> "Bewegen" finden sich einige Blöcke zum Steuern der Motoren. Die Werte für das Tempo in % können dabei von -100 (maximale Geschwindigkeit rückwärts) bis 100 (maximale Geschwindigkeit vorwärts) reichen.

![orl-motoren-steuern](orl-motoren-steuern.png?lightbox=500&resize=500&classes=caption "Block zum Ansteuern der Motoren, wenn Knopf A gedrückt wurde.")
  </div>
  <div class="python content-block" markdown="1">
Die Motor-Befehle finden sich in der Referenz unter "Motoren". Dort gibt es auch bereits einige hilfreiche Erklärungen und auswählbare Beispiele.

```python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    # vorwärts
    pin_M_MODE.write_digital(1)
    
    pin_M0_DIR.write_digital(0)  # Motor M0 vorwärts
    pin_M1_DIR.write_digital(0)  # Motor M1 vorwärts
    
    pin_M0_SPEED.write_analog(1023)  # Motor M0 mit voller Geschwindigkeit
    pin_M1_SPEED.write_analog(1023)  # Motor M1 mit voller Geschwindigkeit

    sleep(1000)  # für 1 Sekunde fahren
    
    # Stoppen
    pin_M_MODE.write_digital(1)
    
    pin_M0_DIR.write_digital(1)  # Motor M0 rückwärts
    pin_M1_DIR.write_digital(1)  # Motor M1 rückwärts
    
    pin_M0_SPEED.write_analog(0)  # Motor M0 Stopp (Geschwindigkeit 0)
    pin_M1_SPEED.write_analog(0)  # Motor M1 Stopp (Geschwindigkeit 0)

    sleep(1000)  # für 1 Sekunde stoppen
    
```

  </div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Vor und zurück

1. Füge ein Skript hinzu, sodass sich die Motoren stoppen lassen, wenn die Taste B gedrückt wird. Dies ist hilfreich, wenn du das nächste Programm übertragen willst.
2. Füge ein Skript zum Vorwärts- oder Rückwärtsfahren hinzu und beobachte die Motoren. Wenn sie sich falsch herum drehen, musst du die Kabel der Motoren anders herum am Calliope anschließen.
</div>

<div markdown="1" class="aufgabe">
#### Ein Meter

![genau-1m-fahren](genau-1m-fahren.png?lightbox=500&resize=500 "genau-1m-fahren")

1. Markiere mit Klebeband auf dem Boden eine Strecke von genau 1m.
2. Lasse den Roboter genau 1m weit fahren. Der Roboter soll erst starten, wenn die Taste A gedrückt wurde.
3. Dokumentiere den Versuch und insbesondere die Kombination von Motorleistung und Zeit, die der Roboter für 1m braucht.
4. Gib deinem Roboter Persönlichkeit: Lass ihn Töne abspielen und Lichtmuster auf der LED-Matrix anzeigen!

</div>

<div markdown="1" class="aufgabe">
#### Quadratfahren

![bastelbot-quadrat-fahren](bastelbot-quadrat-fahren.png?lightbox=500&resize=500 "bastelbot-quadrat-fahren")

1. Markiere auf dem Boden ein Quadrat mit Seitenlänge 1m.
2. Lass den Roboter das Quadrat abfahren! Sorge dafür, dass die Fahrt erst startet, wenn du auf Taste A gedrückt hast.

Tipp: Damit sich der Roboter auf der Stelle dreht, lasse einen Motor vorwärts und den anderen rückwärts drehen (eine sogenannte "Hebelsteuerung"). Füge danach eine Pause mit dem Block "pausiere ... ms" ein, die genau so lang ist, dass sich der Roboter um 90° dreht.
</div>

<div markdown="1" class="aufgabe">
#### Hindernis umfahren

Die folgenden Programme sollen mit Hilfe von Schleifen möglichst effizient gestaltet werden.

1. Positioniere in der Mitte der Strecke von 1m ein Hindernis. Programmiere den Roboter so, dass er dieses Hindernis umfährt.

![hindernis-umfahren-1m](hindernis-umfahren-1m.png?lightbox=500&resize=500 "hindernis-umfahren-1m")

2. Positioniere auf jeder Strecke des Quadrats mit Seitenlänge 1m ein Hindernis. Programmiere den Roboter so, dass er alle Hindernisse umfährt.

![hindernis-umfahren-quadrat](hindernis-umfahren-quadrat.png?lightbox=500&resize=500 "hindernis-umfahren-quadrat")
</div>

<details class="details">
<summary class="details__trigger details__title">Zusammenfassung: Algorithmus, Anweisung und Argument</summary>
<div class="details__content" markdown="1">

<div class="notices green" markdown="1">
#### Sequenzen, einfache Zählschleifen, Verzweigungen

In diesem Abschnitt hast du verschiedene Programmierstrukturen genutzt, die die Grundlage von fast jedem Programm bilden.

Eine **Sequenz** ist eine Folge von Anweisungen, die nacheinander ausgeführt werden.

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
![mc-sequenz](mc-sequenz.png?resize=400 "mc-sequenz")
  </div>
  <div class="roberta content-block" markdown="1">

  </div>
  <div class="python content-block" markdown="1">

```python
display.show(Image.HEART)
sleep(1000)
display.scroll('Hi!')

```

  </div>
</div>
</div>

Eine **einfache Zählschleife** wiederholt ihren Inhalt so oft, wie angegeben.

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
Die Schleife lässt "hi!" vier Mal auf der LED-Matrix anzeigen.
![mc-einfache-zählschleife](mc-einfache-z%C3%A4hlschleife.png?resize=400 "mc-einfache-zählschleife")
  </div>
  <div class="roberta content-block" markdown="1">

  </div>
  <div class="python content-block" markdown="1">
Das folgende Programm zeigt zwei Mal "Emma" an. In einem späteren Abschnitt gehen wir genauer auf die Bedeutung von `i` ein.
```python
for i in range(2):  
    display.scroll('Emma')   # der Inhalt der Schleife muss eingerückt sein!
```

  </div>
</div>
</div>
    
Bei einer **Verzweigung** werden Anweisungen nur unter einer bestimmten Bedingung ausgeführt, die wahr oder falsch sein muss.

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
Auf dem Display wird "A" angezeigt, wenn der Knopf A gedrückt wird
![mc-einfache-verzweigung](mc-einfache-verzweigung.png?resize=400 "mc-einfache-verzweigung")

Auf dem Display wird "laut" angezeigt, wenn der gemessene Wert für die Lautstärke größer als 125 ist.
![mc-verzweigung-mit-vgl](mc-verzweigung-mit-vgl.png?resize=400 "mc-verzweigung-mit-vgl")

**Wichtig:** Die folgenden Blöcke sind keine Verzweigungen, sondern sogenannte **Ereignisse**. 
![mc-ereignis](mc-ereignis.png?resize=700 "mc-ereignis")
Ereignisse unterbrechen das eigentlich ablaufende Programm in der Endlosschleife, wenn das angegebene Ereignis eintritt. Diese Unterbrechung sollte immer *möglichst kurz* sein, weil das Programm sonst bei mehreren Ereignissen zu viel hin- und herspringt und man den Überblick verliert. Insbesondere sind (Endlos-)Schleifen innerhalb eines Ereignisses ein *No-Go*.
  </div>
  <div class="roberta content-block" markdown="1">

  </div>
  <div class="python content-block" markdown="1">

```python
# auf dem Display wird "A" angezeigt, wenn der Knopf A gedrückt wird.
if button_a.is_pressed():
     display.show("A")  # der Inhalt der Verzweigung muss eingerückt sein!

# auf dem Display wird "laut" angezeigt, wenn der gemessene Wert für die Lautstärke größer als 125 ist
if microphone.sound_level() > 125:
        display.show("laut")   # der Inhalt der Verzweigung muss eingerückt sein!
```

  </div>
</div>
</div>

</div>
</div>
</details>