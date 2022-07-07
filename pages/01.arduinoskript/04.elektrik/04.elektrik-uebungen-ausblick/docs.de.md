---
title: 'Übungen und Ausblick'
---

# Elektrische Grundlagen Teil 4: Vermischte Übungen und Ausblick

[TOC]

## Vermischte Übungen

<div markdown="1" class="aufgabe">
#### Reihenschaltung

Eine rote LED soll an Pin 13 des Arduino betrieben werden. Durch die LED soll eine Stromstärke von $ 10\,  mA$ fließen, was bei einer Spannung von $ 2,1\, V$ an der LED der Fall ist.

1.  Zeichne den zugehörigen Schaltplan.
2.  Berechne, wie groß der Vorwiderstand gewählt werden muss, damit diese Werte erreicht werden.
</div>

<div markdown="1" class="aufgabe">
#### Parallelschaltung

Drei grüne LEDs sollen parallel geschaltet an Pin 13 des Arduino angeschlossen und mit einem gemeinsamen Vorwiderstand betrieben werden. Die LEDs halten eine Stromstärke von maximal $ 20\,  mA$
bei einer Spannung von $ 3,3\, V$ aus.

1.  Zeichne den zugehörigen Schaltplan.
2.  Ein Digitalpin am Arduino darf maximal mit einer Stromstärke von $ 40\,  mA$ belastet werden. Berechne, welche Stromstärke dann maximal durch die einzelnen LEDs fließen darf.
3.  Der Tabelle unten kannst du den zugehörigen Spannungswert an den LEDs entnehmen. Berechne, wie groß der gemeinsame Vorwiderstand der LEDs sein muss, damit die in b) berechnete Stromstärke eingehalten wird.
    
    <div markdown="1" style="overflow:auto;">
    |  **Spannung U**   | 3,03 V | 3,07 V | 3,1 V | 3,13 V | 3,16 V | 3,19 V |
    | :---------------: | :----: | :----: | :---: | :----: | :----: | :----: |
    | **Stromstärke I** | 10 mA  | 11 mA  | 12 mA | 13 mA  | 14 mA  | 15 mA  |
    </div>
</div>

<div markdown="1" class="aufgabe">
#### Schaltung einer RGB-LED

Eine RGB-LED besteht aus drei einzelnen LEDs (rot, grün, blau), die jeweils über einen eigenen Digitalpin angesteuert werden (vgl. Schaltplan unten).
![RGB-LED-Schaltplan](/images/rgb-led-schaltplan.png?resize=300&classes=caption "Verschaltung einer RGB-LED.")
Am gemeinsamen GND-Anschluss soll ein gemeinsamer Vorwiderstand für alle LEDs angebracht werden, um die Stromstärke auf maximal $ 15\,  mA$ zu begrenzen. Die Spannung an den LEDs sollte dann $ 2,25\, V$ nicht überschreiten.

1.  Erkläre, welche Unterschiede zur Parallelschaltung von drei LEDs an *einem* Digitalpin zu beachten sind.
2.  Berechne, wie groß der gemeinsame Vorwiderstand mindestens sein muss.
</div>

## Ausblick

**Offene Fragen:**

  - Wie werden weitere Bauteile angeschlossen und im Programm angesprochen?
  - Wie wird die Programmlogik physikalisch abgebildet?
  - Wie funktionieren solche Bauteile wie LDR, NTC, Dioden, Transistoren?

! #### Motivationsquellen
! - [Laser-Game](https://www.instructables.com/id/Arduino-UNO-Laser-Game/): Ein kleines Spiel, das sich auf einfache Weise nachbauen lässt.
! - [Arduino Garden Controller](https://www.youtube.com/watch?v=O_Q1WKCtWiA): Gartenarbeit muss heute nicht mehr aufwendig sein: Mit einem Arduino lassen sich die Pflanzen automatisch bewässern, wenn die Erde nicht mehr feucht genug ist. Die erhobenen Daten lassen sich außerdem schön visualisieren.
! - [Wetterstation von bitluni](https://www.youtube.com/watch?v=at7wmm9t8UE)
! - [Das Problem mit Wettervorhersagen (*Dr. Whatson*, Youtube)](https://www.youtube.com/watch?v=aHkec8bA8iI): Selbst gebaute Wetterstationen sind beliebte Anfängerprojekte, bei denen meist ein WLAN-fähiger Mikrocontroller auf Basis des ESP8266 zum Einsatz kommt. Dieser lässt sich ebenfalls über die Arduino IDE programmieren. Wer etwas mehr Hintergrundwissen dazu haben will, schaut sich das Video von *Dr. Whatson* an, der außerdem das Projekt [SenseBox](https://www.sensebox.de/) vorstellt.
! - [“Use the force or your brainwaves” (Youtube)](https://www.youtube.com/watch?v=KtSCo6hIlRQ), [“Use the force or your brainwaves” (Projektseite)](https://create.arduino.cc/projecthub/Imetomi/use-the-force-or-your-brainwaves-9e839b): Der Schüler Imets Tamás hat es mithilfe mehrerer Arduinos geschafft, seine Gehirnwellen einzulesen und zu nutzen, um einen Roboter zu steuern!
! - [Autonomes Auto](https://www.instructables.com/id/Self-Driving-Car-Using-Arduinoautonomous-Guided-Ve/): Der Bastler hinter diesem Projekt hat einen Arduino-basierten Prototypen für ein autonomes Auto entworfen.
! - [Pong-Bot](https://www.instructables.com/id/Arduino-Controlled-Game-Pong-Bot-Vs-Human/): Ein kleines witziges Spiel hat dieser Bastler mit einem Arduino automatisiert.
! - [Snack-Automat](https://www.instructables.com/id/Snack-Vending-Machine-Powered-by-Arduino/): Ein Arduino-basierter Snack-Automat!