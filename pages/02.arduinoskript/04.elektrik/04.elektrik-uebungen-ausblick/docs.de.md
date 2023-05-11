---
title: 'Übungen und Ausblick'
menu: '[U] Übungen und Ausblick'
media_order: 'schaltplan-ldr-in-reihe.png,schaltplan-spannungsmessung.png,schaltplan-pullup.png,schaltplan-dimmbarer-lautsprecher.png,Bloecke-Dimmbarer-Lautsprecher.png'
---

# Elektrische Grundlagen Teil 4: Vermischte Übungen und Ausblick

<style>
    body {
        --abk: 'EG-U';
    }
</style>

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
3.  Der Tabelle unten kannst du den zugehörigen Spannungswert an den LEDs entnehmen. Berechne, wie groß der gemeinsame Vorwiderstand der LEDs sein muss, damit die in 2) berechnete Stromstärke eingehalten wird.
    
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

<div markdown="1" class="aufgabe">
#### Spannungsmessung

Mit der unten abgebildeten Schaltung sollen am Arduino Spannungen an der Batterie bis zu 15V gemessen werden.

![schaltplan-spannungsmessung](schaltplan-spannungsmessung.png?lightbox=1024&resize=500&classes=caption "Schaltung zum Messen von Batteriespannungen bis 15V mit dem Arduino.")

1. Nenne mögliche, sinnvolle Größen für die Widerstände $R_1$ und $R_2$. Begründe, warum sie möglichst groß sein sollten.
2. Im analogen Eingang A2 wird ein Wert von 789 gemessen. Berechne die Spannung an der Batterie.
</div>

<div markdown="1" class="aufgabe">
#### Potentiometer

1. Erläutere die Funktionsweise eines Potentiometers und nenne ein Einsatzbeispiel.
2. Skizziere, wie man ein Potentiometer am Arduino anschließt.
3. Ein Potentiometer hat einen Gesamtwiderstand von $R_{ges}=10\,k\Omega$. Der mittlere Kontakt wird im analogen Eingang A0 ausgelesen und liefert einen Analogwert von 824. Berechne, wie groß die Teilwiderstände sind.
</div>

<div markdown="1" class="aufgabe">
#### Dimmbarer Lautsprecher

Der Schaltplan unten zeigt ein Potentiometer, dessen mittlerer Kontakt am analogen Eingang A0 eines Arduino angeschlossen ist. Auf der anderen Seite ist ein Piezo-Summer an Digitalpin 6 des Arduino angeschlossen.

![schaltplan-dimmbarer-lautsprecher](schaltplan-dimmbarer-lautsprecher.png?lightbox=1024&resize=500&classes=caption "Schaltplan für einen dimmbaren Lautsprecher.")

Entwickle mit den unten abgebildeten Befehlen ein Programm, das dafür sorgt, dass die Lautstärke des Piezo-Summers durch das Potentiometer gedimmt werden kann. Das Programm soll in einem Struktogramm dokumentiert werden.

![Bloecke-Dimmbarer-Lautsprecher](Bloecke-Dimmbarer-Lautsprecher.png "Blöcke zum Programmieren eines dimmbaren Lautsprechers.")
</div>

<div markdown="1" class="aufgabe">
#### LDR und NTC - Basics

1. Nenne jeweils einen Einsatzzweck für einen LDR und einen NTC.
2. Beschreibe das Widerstandsverhalten eines LDR (eines NTC), wenn sich die Helligkeit (die Temperatur) verringert.
3. Ein NTC ist in einem Spannungsteiler mit einem Festwiderstand $R_F=10\,k\Omega$ am Arduino angeschlossen (siehe Schaltplan unten). Im analogen Eingang A0 wird ein Wert von 643 gemessen. Berechne die Größe des Widerstands des NTC.
4. Die Tabelle unten zeigt für den verwendeten NTC, welche Widerstandswerte $R$ zu welcher Temperatur $T$ gehören. Bestimme mit Hilfe einer quadratischen Regression einen funktionalen Zusammenhang zwischen $R$ und $T$ und berechne damit die Temperatur, die zum Widerstandswert aus Aufgabenteil 3) gehört.


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