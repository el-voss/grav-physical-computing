---
title: '[D] Düvelbot'
media_order: 'getriebemotor-n20.jpg,3_duevelbot-ultraschallsensor.png,clip-mit-offenen-kontakten.jpg,9v-block.jpg,clip-mit-zylinderstecker.jpg,kabel.jpg,display-ssd1306.jpg,infrarot-sensoren.jpg,seitenhaenger.jpg,ultraschallsensor.jpg,summer.jpg,raeder.jpg,l298n-front.jpg,arduino-uno.jpg,expansion-board.jpg,slider.jpg,anhaenger.jpg,chassis.jpg,duevelbot-batteriehaenger.zip,duevelbot-chassis.zip,duevelbot-seitenhaenger.zip,duevelbot-slider.zip,l298n-oben.jpg,Anleitung01.jpg,Anleitung02.jpg,Anleitung03.jpg,Anleitung04.jpg,Anleitung05.jpg,Anleitung06.jpg,Anleitung07.jpg,Anleitung08.jpg,Anleitung09.jpg,Anleitung10.jpg,Anleitung11.jpg,Anleitung12.jpg,Anleitung15.jpg,Anleitung16.jpg,Anleitung17.jpg,Anleitung18.jpg,Anleitung19.jpg,Anleitung13.jpg,Anleitung14.jpg,1_duevelbot.png,2_duevelbot-motoren_und_piezo-summer.png,4_duevelbot-ir-sensoren_und_oled-display.png,Anleitung09a-jumper-entfernen.png,l298n-erklaerung.png,l298n-flussdiagramm-bsp.png'
---

# Düvelbot

<style>
    body {
        --abk: 'P-D';
    }
</style>

**Bild von Düvelbot ergänzen**

Der Düvelbot ist ein kleiner fahrender Roboter auf Arduino-Basis, der über einen Ultraschallsensor zur Entfernungsmessung und Hindernisvermeidung sowie zwei Infrarot-Sensoren zur Linienverfolgung verfügt. Zusätzlich wird ein Display angebracht, um wichtige Informationen darzustellen, und er kann Töne abgeben. Durch die offene Architektur und die Verwendung von Standard-Arduino-Bauteilen sind einige Erweiterungen denkbar. 

! Der Düvelbot geht zurück auf eine Idee von Marco Düvelmeyer, der auf seinem [Youtube-Kanal Technikwerkstatt 4.0](https://www.youtube.com/@Technikwerkstatt4.0) Tutorials rund um Arduino, 3D-Druck, CAD-Software und mehr für seinen Profilunterricht anbietet. Die Entwicklungsarbeit hat das Unternehmen [Funduino](https://funduino.de/) übernommen, das den Düvelbot auch [zum Kauf anbietet](https://funduinoshop.com/projekte/arduino-und-3d-druck/duevelbot/funduino-duevelbot). Dort gibt es auch eine [Montageanleitung für den Düvelbot](https://funduino.de/funduino-duevelbot). Für dieses Skript wurde der Düvelbot jedoch in einigen Bestandteilen angepasst und erweitert, daher findet sich hier eine eigene Anleitung mit einigen Anpassungen.

<br />

[TOC]

## Übersicht

Dieser Abschnitt gibt eine Übersicht über die benötigten Bauteile und wie diese zu verkabeln sind. Dies dient der Kontrolle und kann auch zunächst übersprungen werden.

### Bauteile

<div class="aufgabe" markdown="1">
#### Bauteile sammeln und kontrollieren

Suche in den bereitgestellten Kästen alle Kunststoffteile und Elektronikteile heraus, die du für den Düvelbot benötigst.
</div>

**Kunststoffteile**

<div markdown="1" style="overflow:auto;">
| Bild | Bauteil | Anzahl | STL-Datei zum Drucken |
|-------|----------|-----------|---------------------------------|
| ![chassis](chassis.jpg?lightbox=1024&resize=200 "chassis") | Chassis | 1 | <a href="./duevelbot/duevelbot-chassis.zip" download>duevelbot-chassis.zip</a> |
| ![slider](slider.jpg?lightbox=512&resize=200 "slider")  | Slider | 1 | <a href="./duevelbot/duevelbot-slider.zip" download>duevelbot-slider.zip</a> |
| ![seitenhaenger](seitenhaenger.jpg?lightbox=512&resize=200 "seitenhaenger")  | Seitenhänger | 2 | <a href="./duevelbot/duevelbot-seitenhaenger.zip" download>duevelbot-seitenhaenger.zip</a> |
|  ![anhaenger](anhaenger.jpg?lightbox=512&resize=200 "anhaenger") | Anhänger hinten | optional | <a href="./duevelbot/duevelbot-batteriehaenger.zip" download>duevelbot-batteriehaenger.zip</a> |
</div>

**Elektronikteile**

<div markdown="1" style="overflow:auto;">
| Bild | Bauteil | Anzahl | Hinweise |
|-------|-----------|----------|--------------|
| ![arduino-uno](arduino-uno.jpg?lightbox=512&resize=200 "arduino-uno")  | Arduino Uno | 1 | |
| ![expansion-board](expansion-board.jpg?lightbox=512&resize=200 "expansion-board")  | Expansion Shield mit kleinem Steckbrett und mehreren Pins für GND und 5V | 1 | |
|  ![l298n-front](l298n-front.jpg?lightbox=512&resize=200 "l298n-front") | Motortreiber L298N | 1 | [Aufbau und Funktionsweise](#der-motortreiber-l298n) \ [Informationen und Datenblatt zum L298N](https://components101.com/modules/l293n-motor-driver-module) |
| ![getriebemotor-n20](getriebemotor-n20.jpg?lightbox=512&resize=200 "getriebemotor-n20")  | N20 Getriebemotoren (100 RPM, 6V) | 2 | Die Kabel müssen noch angelötet werden. |
| ![raeder](raeder.jpg?lightbox=512&resize=200 "raeder")  | Räder mit Felgen | 2 | passend zum Aufsetzen auf die Motorschäfte |
| ![summer](summer.jpg?lightbox=512&resize=200 "summer")  | Piezo-Summer | 1 | |
| ![ultraschallsensor](ultraschallsensor.jpg?lightbox=512&resize=200 "ultraschallsensor")  | Ultraschallsensor | 1 | |
|  ![infrarot-sensoren](infrarot-sensoren.jpg?lightbox=512&resize=200 "infrarot-sensoren") | Infrarotsensoren TCRT5000 | 2 | [Datenblatt des Sensors TCRT5000](https://www.mouser.de/datasheet/2/427/tcrt5000-240273.pdf) |
| ![display-ssd1306](display-ssd1306.jpg?lightbox=512&resize=200 "display-ssd1306")  | OLED-Display SSD1306 0,96" | 1 | |
| ![kabel](kabel.jpg?lightbox=512&resize=200 "kabel")  | Kabel male - female | viele | Es wird zusätzlich ein male-male-Kabel benötigt. |
|  ![9v-block](9v-block.jpg?lightbox=512&resize=200 "9v-block") | 9V-Block | 2 | Auch als USB-Akku verfügbar. |
| ![clip-mit-zylinderstecker](clip-mit-zylinderstecker.jpg?lightbox=512&resize=200 "clip-mit-zylinderstecker")  | Clip zum Anschluss des 9V-Block mit Zylinderstecker für Arduino | 1 | |
| ![clip-mit-offenen-kontakten](clip-mit-offenen-kontakten.jpg?lightbox=512&resize=200 "clip-mit-offenen-kontakten")  | Clip zum Anschluss des 9V-Block mit offenen Kontakten für Schraubklemme | 1 | |
</div>

### Schaltplan

Der folgende Schaltplan gibt einen Gesamtüberblick über die Schaltung aller Bauteile. Dies wird im folgenden Schritt für Schritt entwickelt.

![Schaltplan des Düvelbot](1_duevelbot.png?lightbox=1024&resize=800&classes=caption "Vollständiger Schaltplan für den Düvelbot.")

## Basisversion mit Motoren und Piezo-Summer

**Ziel:** Es soll eine fahrbare Basisversion des Düvelbot gebaut und programmiert werden, sodass der Düvelbot vorwärts und rückwärts fahren, stoppen und lenken kann. Zudem soll er Töne abspielen können.

!!! #### Wichtige Grundlagen
!!! Für diesen Abschnitt werden folgende Grundlagen benötigt:
!!! - [Piezo-Summer](../../bausteine-algorithmen/entscheidungen-und-serieller-monitor#piezo-summer)
!!! - [Fallunterscheidungen](../../bausteine-algorithmen/entscheidungen-und-serieller-monitor#entscheidungen-programmieren)
!!! - [Funktionen](../..//bausteine-algorithmen/funktionen)
!!! - [Pulsweitenmodulation](../../elektrik/digitale-analoge-pins#pulsweitenmodulation)
!!! - [Motoren mit Motortreiber steuern](../../elektrik/transistoren-motoren#elektromotoren-mit-dem...)

### Montage

<div class="aufgabe" markdown="1">
#### Montage und Verkabelung

Befolge die folgende Anleitung zur Montage und Verkabelung, um die Basisversion des Düvelbots aufzubauen.
</div>

<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung01](Anleitung01.jpg?lightbox=1024&resize=400 "Anleitung01")  </div>
<div markdown="1"> **Schritt 1:** Führe die Kabel eines Motors durch die Motorhalterung in der Gehäuse.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung02](Anleitung02.jpg?lightbox=1024&resize=400 "Anleitung02")  </div>
<div markdown="1"> **Schritt 2:** Drücke den Motor in seine Halterung. Die Lasche kann vorsichtig nach unten gedrückt werden, bis die äußere goldene Platte des Getriebes fest in der Lasche sitzt.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung03](Anleitung03.jpg?lightbox=1024&resize=400 "Anleitung03")  </div>
<div markdown="1"> **Schritt 3:** Verfahre mit dem Motor auf der anderen Seite genauso.  </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung04](Anleitung04.jpg?lightbox=1024&resize=400 "Anleitung04")  </div>
<div markdown="1"> **Schritt 4:** Stecke die Kabel des linken Motors in die linke Schraubklemme des Motortreibers L298N und schraube sie fest. Verfahre genauso auf der rechten Seite </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung05](Anleitung05.jpg?lightbox=1024&resize=400 "Anleitung05") </div>
<div markdown="1"> **Schritt 5:** Stecke die Kabel des Clips mit offenen Kontakten in der Schraubklemme für die Spannungsversorgung am Motortreiber L298N. In der mittleren Schraubklemme muss ein zweites schwarzes Kabel (male-male) ergänzt werden, mit dem ein gemeinsames GND-Potential mit dem Arduino hergestellt wird. Teste durch vorsichtiges Ziehen an den Kabeln, ob sie fest verschraubt sind.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung06](Anleitung06.jpg?lightbox=1024&resize=400 "Anleitung06")  </div>
<div markdown="1"> **Schritt 6:** Platziere den Motortreiber im Gehäuse, ohne die Kabel zu stark zu knicken.  </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung07](Anleitung07.jpg?lightbox=1024&resize=400 "Anleitung07")  </div>
<div markdown="1"> **Schritt 7:** Suche die Räder und den Slider heraus und schiebe sie an ihre Position. Beachte die Kerbe an der Radnabe, die genau auf die Kerbe am Motorschaft passt. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung08](Anleitung08.jpg?lightbox=1024&resize=400 "Anleitung08")  </div>
<div markdown="1"> **Schritt 8:** Achte darauf, dass beide Räder gleich weit auf dem Motorschaft sitzen, sodass sie genau symmetrisch sind. Die Räder dürfen nicht am Gehäuse schleifen.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung09a Jumper entfernen](Anleitung09a-jumper-entfernen.png?lightbox=1024&resize=400 "Anleitung09a Jumper entfernen") </div>
<div markdown="1"> **Schritt 9a:** Entferne die Jumper für die Enable-Pins auf dem Motortreiber und verstaue sie so, dass sie nicht verloren gehen.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung09](Anleitung09.jpg?lightbox=1024&resize=400 "Anleitung09") </div>
<div markdown="1"> **Schritt 9b:** Stecke danach sechs Kabel auf die Pins En1/2, In1, In2, In3, In4 und En3/4. Eine genaue Beschriftung und Erklärung der Pins folgt im nächsten Abschnitt zum Schaltplan. Verwende für jeden Pin eine andere Farbe. Notiere dir, welche Farbe zu welchem Pin gehört.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung10](Anleitung10.jpg?lightbox=1024&resize=400 "Anleitung10")  </div>
<div markdown="1"> **Schritt 10:** Führe die Kabel durch die dafür vorgesehenen Öffnungen an den Seiten. In der Regel passen zwei Kabel gut durch das gleiche Loch (nacheinander). </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung11](Anleitung11.jpg?lightbox=1024&resize=400 "Anleitung11")  </div>
<div markdown="1">**Schritt 11:** Bereite den Piezo-Summer vor, indem du zwei Jumper-Kabel anbringst. Beachte das Plus-Symbol auf der oberen Seite - der Pin unter dem Plus muss mit dem Digitalpin am Arduino verbunden werden. Der andere Pin wird mit GND am Arduino verbunden. Am besten verwendest du hier wieder ein schwarzes Kabel für alle GND-Kontakte. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung12](Anleitung12.jpg?lightbox=1024&resize=400 "Anleitung12")  </div>
<div markdown="1">**Schritt 12:** Platziere den Piezo-Summer zwischen den beiden Motoren und führe die Kabel durch die Öffnungen an der Seite. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung13](Anleitung13.jpg?lightbox=1024&resize=400 "Anleitung13")  </div>
<div markdown="1"> **Schritt 13:** Stecke das Expansion-Board auf den Arduino. Achte darauf, dass die Pinleisten genau übereinander liegen und nicht gegeneinander versetzt sind.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung14](Anleitung14.jpg?lightbox=1024&resize=400 "Anleitung14")  </div>
<div markdown="1"> **Schritt 14:** Verkabele die Kabel der Bauteile entsprechend des Schaltplans mit dem Arduino (siehe nächsten Abschnitt unten). Nutze die GND-Leiste auf den Expansion-Board (schwarze Kabel im Bild).</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung15](Anleitung15.jpg?lightbox=1024&resize=400 "Anleitung15")  </div>
<div markdown="1"> **Schritt 15:** Schiebe den Arduino vollständig in das Gehäuse. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung16](Anleitung16.jpg?lightbox=1024&resize=400 "Anleitung16")  </div>
<div markdown="1"> **Schritt 16:** Hake die Seitenhänger in die Öffnungen an der Seite und platziere die zwei 9V-Blöcke darin. Stecke den Clip mit Zylinderanschluss auf eine der 9V-Blöcke. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung17](Anleitung17.jpg?lightbox=1024&resize=400 "Anleitung17")  </div>
<div markdown="1"> **Schritt 17:** Wenn der Roboter starten soll, werden beide 9V-Blöcke angeschlossen. Wenn der Roboter programmiert werden soll, werden die 9V-Blöcke abgeklemmt und stattdessen ein USB-Kabel an den Arduino angeschlossen.</div>
</div>

### Schaltplan

Die Verkabelung erfolgt nach dem folgendem Schaltplan.

![Schaltplan für die Motoren und den Piezo-Summer](2_duevelbot-motoren_und_piezo-summer.png?lightbox=1024&resize=800&classes=caption "Schaltplan für die Motoren und den Piezo-Summer.")

!!!! #### Der Motortreiber L298N
!!!! 
!!!! Das Motortreibermodul L298N ist ein beliebtes Bauteil, weil es den Anschluss von Motoren sehr einfach macht und weil es zudem über einen Spannungsregler verfügt, den man in einigen Fällen für die Stromversorgung von weiteren Bauteilen verwenden kann. Der Motortreiber-IC ist an ein Kühlelement geschraubt, um die entstehende Wärme abzuleiten. In dem schwarzen Kasten sind zwei [H-Brücken bzw. Vierquadrantensteller](https://doku.el-voss.de/de/arduinoskript/elektrik/transistoren-motoren#aufbau-des-l293d-der...) verbaut, sodass sich die Motoren in beide Richtungen drehen lassen.
!!!! 
!!!! ![l298n-erklaerung](l298n-erklaerung.png?lightbox=1024&resize=600&classes=caption "Übersicht der Pinbelegung des Motortreibermoduls L298N.")
!!!! 
!!!! *Zur Motorsteuerung*
!!!! Ein Motor wird an `Out1`und `Out2` angeschlossen. Der jeweilige Zustand der `Out`-Pins kann über die Pins `In1` und `In2` geregelt werden. Wenn an `In1` der Zustand `LOW` und an `In2` der Zustand `HIGH` anliegt, wird dies auf `Out1` bzw. `Out2` übertragen, sodass durch den Motor ein Strom fließen kann und er sich vorwärts dreht. Diese Übertragung wird jedoch durch den Pin `En1,2` (für *Enable 1, 2*) gesteuert. Wenn an `En1,2` `HIGH` anliegt, wird die Input-Konfiguration übertragen, bei `LOW` nicht. Durch ein PWM-Signal an `En1,2` kann die Leistung des Motors entsprechend gedrosselt werden.
!!!!
!!!! ![l298n-flussdiagramm-bsp](l298n-flussdiagramm-bsp.png?lightbox=1024&resize=500&classes=caption "Veranschaulichung der Funktionsweise des Motortreibers (siehe Text).")
!!!! 
!!!! Die Steuerung des Motors an `Out3` und `Out4` erfolgt analog über `In3` und `In4`, deren Konfiguration übertragen wird, wenn `En3,4` auf `HIGH` steht.
!!!! 
!!!! *Hinweis:* Durch den Jumper auf dem `En1,2`-Pin wird dieser mit dem 5V-Potential (`HIGH`) verbunden, sodass die Input-Konfiguration immer direkt übertragen wird. Dann ist aber kein PWM-Signal mehr möglich, weshalb die Jumper in der Anleitung oben entfernt werden. Stattdessen werden die `En1,2`-Pins mit einem PWM-Pin des Arduino verbunden.
!!!! 
!!!! *Zur Spannungsversorgung*
!!!! Am `Vin`-Pin muss der Pluspol einer Batterie mit 7V bis 12V angeschlossen werden. Der Minuspol muss mit `GND` verbunden werden. Diese Spannung wird vom Spannungsregler auf ein stabiles 5V-Potential heruntergeregelt, welches für die Schaltlogik benötigt wird. Über den `5V`-Pin (in Kombination mit dem `GND`-Pin) kann dieses Potential auch für weitere Bauteile genutzt werden. In dieser Anleitung geschieht dies jedoch nicht, weil die Stromstärke der Batterie dann nicht mehr ausreicht, um eine stabile Spannungsversorgung für alle Bauteile zu gewährleisten.


### Konfiguration und Programmierung

Erster Test: Töne abspielen

Vorwärts fahren und stoppen

Vorwärts fahren mit variabler Leistung

Hebelsteuerung


## Erweiterung: Ultraschallsensor


**Ziel:** Der Düvelbot soll um einen Ultraschallsensor erweitert werden, sodass er Hindernisse erkennen und umfahren kann.

!!! #### Wichtige Grundlagen
!!! Für diesen Abschnitt werden folgende Grundlagen benötigt:
!!! - [Ultraschallsensor](../../bauteilkunde/sensoren#ultraschallsensor)
!!! - [Variablen und Schleifen](../../bausteine-algorithmen/variablen-und-schleifen#programme-mit-variablen-und...)

### Montage

<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung18](Anleitung18.jpg?lightbox=1024&resize=400 "Anleitung18")  </div>
<div markdown="1"> **Schritt 18:** Stecke vier Kabel auf den Ultraschallsensor. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung19](Anleitung19.jpg?lightbox=1024&resize=400 "Anleitung19")  </div>
<div markdown="1"> **Schritt 19:** Verkabele den Ultraschallsensor entsprechend des Schaltplans (siehe unten).</div>
</div>

### Schaltplan

Die Verkabelung des Ultraschallsensors erfolgt nach dem folgenden Schaltplan.

![Schaltplan für den Ultraschallsensor](3_duevelbot-ultraschallsensor.png?lightbox=1024&resize=800&classes=caption "Schaltplan für den Ultraschallsensor.")

### Konfiguration und Programmierung



## Erweiterung: Infrarot-Sensoren und Display


**Ziel:** Der Düvelbot soll um zwei Infrarot-Sensoren erweitert werden, sodass er einer Linie folgen kann, um Parcours zu absolvieren. Für die Anzeige der Sensorwerte bei der Feinjustierung wird ein Display angebracht.

!!! #### Wichtige Grundlagen
!!! Für diesen Abschnitt werden folgende Grundlagen benötigt:
!!! - [OLED-Display SSD1306](../../bauteilkunde/aktoren#oled-display-ssd1306)
!!! - [Infrarot-Sensor TCRT5000]()


### Montage


### Verkabelung

Die Verkabelung des Ultraschallsensors erfolgt nach dem folgenden Schaltplan.

![Schaltplan für die Infrarot-Sensoren und das Display](4_duevelbot-ir-sensoren_und_oled-display.png?lightbox=1024&resize=800&classes=caption "Schaltplan für die Infrarot-Sensoren und das Display.")


### Konfiguration und Programmierung



