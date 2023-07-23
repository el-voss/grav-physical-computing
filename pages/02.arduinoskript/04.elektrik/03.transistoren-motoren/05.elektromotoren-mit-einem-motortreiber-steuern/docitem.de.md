---
title: 'Elektromotoren mit einem Motortreiber steuern (inkl. Drehrichtung)'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: vierquadrantensteller.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Motor und Diode'
        - 'Elektromotor mit Transistor steuern'
        - Pulsweitenmodulation
        - 'Digital vs Analog und Aktor vs Sensor'
    Zusatzvoraussetzungen:
        - Funktionen
    Inhalte:
        - H-Brücke
        - Vierquadrantensteller
        - 'Motortreiber L293D'
        - 'Motortreiber L298N'
        - Drehrichtung
    Niveau:
        - Fortgeschritten
        - Experte
---

Die Steuerung von Motoren erfordert beim Transistor und beim Relais stets mehrere Bauteile und einige Überlegungen zum Aufbau der Schaltung. Außerdem kann dabei nicht die Drehrichtung geändert werden. Integrierte Schaltkreise wie der L293D oder der L298N, auch Motortreiber genannt, vereinfachen den Aufbau der Schaltung für gleich zwei Motoren und ermöglichen zusätzlich die flexible Steuerung der Drehrichtung. Beide basieren auf der Schaltung mit einer *H-Brücke* bzw. einem *Vierquadrantensteller*.

**Frage:** Wie steuert man einen Motor inkl. Drehrichtung mit einem Motortreiber?

### Funktionsweise einer H-Brücke 

<div markdown="1" class="aufgabe">
#### Aufbau einer H-Brücke - der Vierquadrantensteller

Um die Drehrichtung des Motors kontrollieren zu können, braucht man eine spezielle Anordnung von Transistoren, die als *H-Brücke* oder *Vierquadrantensteller* bezeichnet wird. Dieser Aufbau befindet sich auch im L293D und im L298N.

![Vereinfachter Aufbau eines Vierquadrantenstellers mit Transistoren und zugehörigen Freilaufdioden (links) sowie die noch einmal vereinfachte Ersatzschaltung mit Schaltern.](vierquadrantensteller.png?lightbox=1024&resize=800&classes=caption "Vereinfachter Aufbau eines Vierquadrantenstellers mit Transistoren und zugehörigen Freilaufdioden (links) sowie die noch einmal vereinfachte Ersatzschaltung mit Schaltern.")

1.  Die Drehrichtung des Motors hängt davon ab, in welcher Richtung der Strom durch den Motor fließt. Notiere, welche Transistoren / Schalter eingeschaltet und welche Transistoren / Schalter ausgeschaltet sein müssen, damit der Strom von links nach rechts durch den Motor fließt. Notiere danach die Kombination für die Stromrichtung von rechts nach links.
2.  Erkläre, wie sich der Motor mithilfe der vier Transistoren bzw. Schalter bremsen lässt.
3.  Welche Schaltkombinationen der Transistoren müssen unbedingt vermieden werden?

*Hinweis:* Die Freilaufdioden dienen dazu, die vom Motor induzierten Ströme abfließen zu lassen.
</div>

Da stets zwei Transistoren gemeinsam eingeschaltet werden müssen, könnten diese beim Anschluss an den Arduino über einen gemeinsamen Digitalpin gesteuert werden. Zudem ist es im Allgemeinen sinnvoll, für den Motor und den Arduino verschiedene Spannungsquellen zu verwenden, die über einen gemeinsamen GND-Anschluss geerdet werden, damit die möglicherweise hohen Ströme des Motors den Arduino nicht zerstören.

![Steuerung eines Motors mit einem Vierquadrantensteller am Arduino.](vierquadrantensteller-an-arduino.png?lightbox=1024&resize=800&classes=caption "Steuerung eines Motors mit einem Vierquadrantensteller am Arduino.")

Bei der oben dargestellten Schaltung muss jedoch immer noch genau darauf geachtet werden, dass nicht versehentlich alle vier Transistoren leitend geschaltet werden. Daher ist die Steuerung mit dem L293D bzw. dem L298N noch ein wenig komplexer - die oben angestellten Überlegungen verdeutlichen aber gut den prinzipiellen Aufbau.

### Steuerung mit dem L293D

!!!! #### Der Motortreiber L293D
!!!! 
!!!! Der L293D ist ein integrierter Schaltkreis (*IC* von engl. *integrated circuit*), das heißt, in das schwarze Gehäuse sind Schaltkreise mit Transistoren, Widerständen, Dioden etc. integriert. Genauer gesagt, enthält der L293D zwei H-Brücken oder Vierquadrantensteller, die sich mit den Pins an beiden Seiten steuern lassen. Bei der Nummerierung der Pins ist darauf zu achten, dass die kleine Kerbe nach oben gehalten wird.
!!!! <div class="flex-box">
!!!! <div markdown="1">![L293D als Bild.](l293d.jpg?resize=150&classes=caption "L293D als Bild")</div>
!!!! <div markdown="1">![L293D als Schaltsymbol.](motortreiber-l293d.png?resize=200&classes=caption "L293D als Schaltsymbol.")</div>
!!!! </div>

!! *Achtung: Der L293D kann leicht mit anderen Bauteilen wie z. B. einem Shift-Register verwechselt werden, das dieselbe Bauart hat. Um sicher zu gehen, muss man die winzige Beschriftung des Bauteils lesen!*

Im Folgenden wird die Belegung der Pins für die linke Seite beschrieben (vgl. Abbildung unten). Die Belegung auf der rechten Seite verläuft analog.

Der Motor wird an Pin 3 und 6 (`Out1` und `Out2`) angeschlossen. Der jeweilige Zustand der `Out`-Pins kann über Pin 2 und 7 (`In1` und `In2`) geregelt werden. Wenn an `In1` der Zustand `HIGH` und an `In2` `LOW` anliegt, wird das auf `Out1` und `Out2` übertragen, sodass durch den Motor ein Strom fließen kann. Diese Übertragung wird jedoch durch Pin 1 (`En1,2` für *enable pin 1, 2*) gesteuert. Wenn an `En1,2` `HIGH` anliegt, wird die Input-Konfiguration übertragen, bei `LOW` nicht. Durch ein PWM-Signal an `En1,2` kann die Leistung des Motors entsprechend gedrosselt werden.

Die vier `GND`-Anschlüsse dienen zur Stromversorgung und zur Wärmeableitung, falls hohe Ströme auftreten. An `Vmotor` wird der Pluspol der Versorgungsspannung für den Motor angeschlossen; an `Vcc` der Logik-Pegel von 5V für die Schaltung des IC.

![Steuerung eines Motors mit dem L293D.](l293d-an-arduino.png?lightbox=1024&resize=500&classes=caption "Steuerung eines Motors mit dem L293D.")

<div markdown="1" class="aufgabe">
#### Betrieb des L293D

1.  Baue die oben beschriebene Schaltung auf. Nutze dazu das *Power Supply Module* (siehe oben).
2.  Experimentiere mit verschiedenen Input-Konfigurationen und PWM-Werten für den `En1,2`-Pin.
3.  Halte die Wirkung auf den Motor tabellarisch fest. Hier genügt es, wenn für den `En1,2`-Pin nur zwischen *ein / 255* und *aus / 0* unterschieden wird.
    
    | In1 | In 2 | En1,2 | Wirkung |
    | :-: | :--: | :---: | :-----: |
    |  1  |  0   |   255   |    …    |
    
<div class="flex-box">
<div markdown="1">![L293D in der Roboterkonfiguration.](prog-konfiguration-l293d.png?classes=caption "L293D in der Roboterkonfiguration.")</div>
<div markdown="1">![Steuerung des L293D.](prog-motorsteuerung-l293d.png?classes=caption "Steuerung des L293D.")</div>
</div>
</div>

! **Recherche: Wie stark darf der L293D belastet werden?**
! Bei Motoren ist immer genau darauf zu achten, welche Stromstärken und Spannungen die verwendeten Bauteile aushalten. Suche nach dem Datenblatt (*data sheet*) des L293D und notiere die Maximalwerte zu Versorgungsspannung, Stromstärke und kurzfristige Spitzenstromstärke, die der IC aushält (*absolute maximum ratings*).

### Steuerung mit dem L298N

!!!! #### Der Motortreiber L298N
!!!! 
!!!! Das Motortreibermodul L298N ist ein beliebtes Bauteil, weil es den Anschluss von Motoren sehr einfach macht und weil es zudem über einen Spannungsregler verfügt, den man in einigen Fällen für die Stromversorgung von weiteren Bauteilen verwenden kann. Der Motortreiber-IC ist an ein Kühlelement geschraubt, um die entstehende Wärme abzuleiten. In dem schwarzen Kasten sind zwei [H-Brücken bzw. Vierquadrantensteller](/arduinoskript/elektrik/transistoren-motoren/elektromotoren-mit-einem-motortreiber-steuern#aufbau-einer-h-brücke-der-vierquadrantensteller) verbaut, sodass sich die Motoren in beide Richtungen drehen lassen.
!!!! 
!!!! ![l298n-erklaerung](l298n-erklaerung.png?lightbox=1024&resize=600&classes=caption "Übersicht der Pinbelegung des Motortreibermoduls L298N.")
 
*Zur Motorsteuerung*
Ein Motor wird an `Out1`und `Out2` angeschlossen. Der jeweilige Zustand der `Out`-Pins kann über die Pins `In1` und `In2` geregelt werden. Wenn an `In1` der Zustand `LOW` und an `In2` der Zustand `HIGH` anliegt, wird dies auf `Out1` bzw. `Out2` übertragen, sodass durch den Motor ein Strom fließen kann und er sich vorwärts dreht. Diese Übertragung wird jedoch durch den Pin `En1,2` (für *Enable 1, 2*) gesteuert. Wenn an `En1,2` `HIGH` anliegt, wird die Input-Konfiguration übertragen, bei `LOW` nicht. Durch ein PWM-Signal an `En1,2` kann die Leistung des Motors entsprechend gedrosselt werden.

![l298n-flussdiagramm-bsp](l298n-flussdiagramm-bsp.png?lightbox=1024&resize=500&classes=caption "Veranschaulichung der Funktionsweise des Motortreibers (siehe Text).")
 
Die Steuerung des Motors an `Out3` und `Out4` erfolgt analog über `In3` und `In4`, deren Konfiguration übertragen wird, wenn `En3,4` auf `HIGH` steht.
 
*Hinweis:* Durch einen Jumper auf dem `En1,2`-Pin kann dieser direkt mit dem 5V-Potential (`HIGH`) verbunden werden, sodass die Input-Konfiguration immer direkt übertragen wird. Dann ist aber kein PWM-Signal mehr möglich, sodass der Motor immer mit voller Leistung dreht. Im Folgenden wird daher davon ausgegangen, dass die Jumper entfernt wurden und die `En1,2`-Pins stattdessen mit einem PWM-Pin des Arduino verbunden werden.
 
*Zur Spannungsversorgung*
Am `Vin`-Pin muss der Pluspol einer Batterie mit 7V bis 12V angeschlossen werden. Der Minuspol muss mit `GND` verbunden werden. Diese Spannung wird vom Spannungsregler auf ein stabiles 5V-Potential heruntergeregelt, welches für die Schaltlogik benötigt wird. Über den `5V`-Pin (in Kombination mit dem `GND`-Pin) kann dieses Potential auch für weitere Bauteile genutzt werden. In dieser Anleitung geschieht dies jedoch nicht, weil die Stromstärke der Batterie dann nicht mehr ausreicht, um eine stabile Spannungsversorgung für alle Bauteile zu gewährleisten.

<div markdown="1" class="aufgabe">
#### Betrieb des L298N

1.  Baue die oben beschriebene Schaltung auf. Nutze als Spannungsquelle eine 9V-Batterie an `VIN` und `GND` des L298N.
2.  Experimentiere mit verschiedenen Input-Konfigurationen und PWM-Werten für den `En1,2`-Pin.
3.  Halte die Wirkung auf den Motor tabellarisch fest. Hier genügt es, wenn für den `En1,2`-Pin nur zwischen *ein / 255* und *aus / 0* unterschieden wird.
    
    | In1 | In 2 | En1,2 | Wirkung |
    | :-: | :--: | :---: | :-----: |
    |  1  |  0   |   255   |    …    |
    
<div class="flex-box">
<div markdown="1">![L298N in der Roboterkonfiguration.](l298n-konfiguration.png?classes=caption "L298N in der Roboterkonfiguration.")</div>
<div markdown="1">![Steuerung des L298N.](l298n-steuerung-bsp.png?classes=caption "Steuerung des L298N.")</div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Einfachere Steuerung mit Funktionen

In der folgenden Abbildung ist festgehalten, wie sich die Motorsteuerung in eine Funktion auslagern lässt, um das Programm aussagekräftiger und kürzer zu machen, wenn die gleichen Blöcke immer wieder genutzt werden.

![l298n-steuerung-funktion](l298n-steuerung-funktion.png?lightbox=1024&resize=800&classes=caption "Steuerung des L298N mit einer Funktion.")

1. Implementiere das abgebildete Programm selbst und erkläre den Ablauf. Gehe auch darauf ein, welche Werte für die Leistung übergeben werden dürfen.
2. Passe die Funktion ggf. an, sodass sich dein Motor ebenfalls vorwärts dreht, wenn die Funktion ausgeführt wird (je nach Verkabelung kann es sein, dass dies bereits der Fall ist).
3. Implementiere selbst die folgenden Funktionen:
    - `stoppe`: Hält den Motor an.
    - `dreheRueckwaertsMitLeistung ( leistung )`: Dreht den Motor rückwärts mit der angegebenen Leistung.
    - `dreheVorwaertsMitLeistungInProzent ( leistung )`: Dreht den Motor vorwärts, wobei eine Leistung von 100 die höchstmögliche Geschwindigkeit bedeutet und eine Leistung von 0 einen Stopp bedeutet.

</div>

