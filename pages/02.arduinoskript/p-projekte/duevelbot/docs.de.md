---
title: '[D] Düvelbot'
media_order: 'getriebemotor-n20.jpg,clip-mit-offenen-kontakten.jpg,9v-block.jpg,clip-mit-zylinderstecker.jpg,kabel.jpg,display-ssd1306.jpg,infrarot-sensoren.jpg,seitenhaenger.jpg,ultraschallsensor.jpg,summer.jpg,raeder.jpg,l298n-front.jpg,arduino-uno.jpg,expansion-board.jpg,slider.jpg,anhaenger.jpg,1_düvelbot.png,chassis.jpg,duevelbot-batteriehaenger.zip,duevelbot-chassis.zip,duevelbot-seitenhaenger.zip,duevelbot-slider.zip,l298n-oben.jpg,Anleitung01.jpg,Anleitung02.jpg,Anleitung03.jpg,Anleitung04.jpg,Anleitung05.jpg,Anleitung06.jpg,Anleitung07.jpg,Anleitung08.jpg,Anleitung09.jpg,Anleitung10.jpg,Anleitung11.jpg,Anleitung12.jpg,Anleitung15.jpg,Anleitung16.jpg,Anleitung17.jpg,Anleitung18.jpg,Anleitung19.jpg'
---

# Düvelbot

**Bild von Düvelbot ergänzen**

Der Düvelbot ist ein kleiner fahrender Roboter auf Arduino-Basis, der über einen Ultraschallsensor zur Entfernungsmessung und Hindernisvermeidung sowie zwei Infrarot-Sensoren zur Linienverfolgung verfügt. Zusätzlich wird ein Display angebracht, um wichtige Informationen darzustellen, und er kann Töne abgeben. Durch die offene Architektur und die Verwendung von Standard-Arduino-Bauteilen sind einige Erweiterungen denkbar. 

! Der Düvelbot geht zurück auf eine Idee von Marco Düvelmeyer, der auf seinem [Youtube-Kanal Technikwerkstatt 4.0](https://www.youtube.com/@Technikwerkstatt4.0) Tutorials rund um Arduino, 3D-Druck, CAD-Software und mehr für seinen Profilunterricht anbietet. Die Entwicklungsarbeit hat das Unternehmen [Funduino](https://funduino.de/) übernommen, das den Düvelbot auch [zum Kauf anbietet](https://funduinoshop.com/projekte/arduino-und-3d-druck/duevelbot/funduino-duevelbot). Dort gibt es auch eine [Montageanleitung für den Düvelbot](https://funduino.de/funduino-duevelbot). Für dieses Skript wurde der Düvelbot jedoch in einigen Bestandteilen angepasst und erweitert, daher findet sich hier eine eigene Anleitung mit einigen Anpassungen.

<br />

[TOC]

## Übersicht

Dieser Abschnitt gibt eine Übersicht über die benötigten Bauteile und wie diese zu verkabeln sind. Dies dient der Kontrolle und kann auch zunächst übersprungen werden.

### Bauteile

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
|  ![l298n-front](l298n-front.jpg?lightbox=512&resize=200 "l298n-front") | Motortreiber L298N | 1 | [Informationen und Datenblatt zum L298N](https://components101.com/modules/l293n-motor-driver-module) |
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

![Schaltplan des Düvelbot](1_d%C3%BCvelbot.png?lightbox=1024&resize=500&classes=caption "Vollständiger Schaltplan für den Düvelbot.")

## Basisversion mit Motoren und Piezo-Summer

**Ziel:** Es soll eine fahrbare Basisversion des Düvelbot gebaut und programmiert werden, sodass der Düvelbot vorwärts und rückwärts fahren, stoppen und lenken kann. Zudem soll er Töne abspielen können.

!!! #### Wichtige Grundlagen
!!! Für diesen Abschnitt werden folgende Grundlagen benötigt:
!!! - [Piezo-Summer](../../bausteine-algorithmen/entscheidungen-und-serieller-monitor#piezo-summer)
!!! - [Fallunterscheidungen](../../bausteine-algorithmen/entscheidungen-und-serieller-monitor#entscheidungen-programmieren)
!!! - [Funktionen](../..//bausteine-algorithmen/funktionen)
!!! - [Pulsweitenmodulation](../../elektrik/digitale-analoge-pins#pulsweitenmodulation)
!!! - [Motoren mit Motortreiber steuern](../../elektrik/transistoren-motoren#elektromotoren-mit-dem...)

### Verkabelung

Die Verkabelung erfolgt nach dem folgendem Schaltplan. Bitte scrolle an den entsprechenden Stellen der Anleitung hierhin zurück.

**Schaltplan einfügen**

### Montage

<div class="flex-box">
<div markdown="1"> ![Anleitung01](Anleitung01.jpg?lightbox=1024&resize=400 "Anleitung01")  </div>
<div markdown="1"> **Schritt 1:** Führe die Kabel eines Motors durch die Motorhalterung in der Gehäuse.</div>
</div>
<div class="flex-box">
<div markdown="1"> ![Anleitung02](Anleitung02.jpg?lightbox=1024&resize=400 "Anleitung02")  </div>
<div markdown="1"> **Schritt 2:** Drücke den Motor in seine Halterung. Die Lasche kann vorsichtig nach unten gedrückt werden, bis die äußere goldene Platte des Getriebes fest in der Lasche sitzt.</div>
</div>
<div class="flex-box">
<div markdown="1"> ![Anleitung03](Anleitung03.jpg?lightbox=1024&resize=400 "Anleitung03")  </div>
<div markdown="1"> **Schritt 3:** Verfahre mit dem Motor auf der anderen Seite genauso.  </div>
</div>
<div class="flex-box">
<div markdown="1"> ![Anleitung04](Anleitung04.jpg?lightbox=1024&resize=400 "Anleitung04")  </div>
<div markdown="1"> **Schritt 4:** Stecke die Kabel des linken Motors in die linke Schraubklemme des Motortreibers L298N und schraube sie fest. Verfahre genauso auf der rechten Seite </div>
</div>
<div class="flex-box">
<div markdown="1"> ![Anleitung05](Anleitung05.jpg?lightbox=1024&resize=400 "Anleitung05") </div>
<div markdown="1"> **Schritt 5:** Stecke die Kabel des Clips mit offenen Kontakten in der Schraubklemme für die Spannungsversorgung am Motortreiber L298N. In der mittleren Schraubklemme muss ein zweites schwarzes Kabel (male-male) ergänzt werden, mit dem ein gemeinsames GND-Potential mit dem Arduino hergestellt wird. </div>
</div>
<div class="flex-box">
<div markdown="1">   </div>
<div markdown="1">   </div>
</div>
<div class="flex-box">
<div markdown="1">   </div>
<div markdown="1">   </div>
</div>
<div class="flex-box">
<div markdown="1">   </div>
<div markdown="1">   </div>
</div>
<div class="flex-box">
<div markdown="1">   </div>
<div markdown="1">   </div>
</div>
<div class="flex-box">
<div markdown="1">   </div>
<div markdown="1">   </div>
</div>
<div class="flex-box">
<div markdown="1">   </div>
<div markdown="1">   </div>
</div>
<div class="flex-box">
<div markdown="1">   </div>
<div markdown="1">   </div>
</div>
<div class="flex-box">
<div markdown="1">   </div>
<div markdown="1">   </div>
</div>
<div class="flex-box">
<div markdown="1">   </div>
<div markdown="1">   </div>
</div>
<div class="flex-box">
<div markdown="1">   </div>
<div markdown="1">   </div>
</div>
<div class="flex-box">
<div markdown="1">   </div>
<div markdown="1">   </div>
</div>
<div class="flex-box">
<div markdown="1">   </div>
<div markdown="1">   </div>
</div>

### Konfiguration


### Programmierung


## Erweiterung: Ultraschallsensor


**Ziel:** Der Düvelbot soll um einen Ultraschallsensor erweitert werden, sodass er Hindernisse erkennen und umfahren kann.

!!! #### Wichtige Grundlagen
!!! Für diesen Abschnitt werden folgende Grundlagen benötigt:
!!! - [Ultraschallsensor](../../bauteilkunde/sensoren#ultraschallsensor)
!!! - [Variablen und Schleifen](../../bausteine-algorithmen/variablen-und-schleifen#programme-mit-variablen-und...)

### Montage


### Verkabelung


### Konfiguration


### Programmierung


## Erweiterung: Infrarot-Sensoren und Display


**Ziel:** Der Düvelbot soll um zwei Infrarot-Sensoren erweitert werden, sodass er einer Linie folgen kann, um Parcours zu absolvieren. Für die Anzeige der Sensorwerte bei der Feinjustierung wird ein Display angebracht.

!!! #### Wichtige Grundlagen
!!! Für diesen Abschnitt werden folgende Grundlagen benötigt:
!!! - [OLED-Display SSD1306](../../bauteilkunde/aktoren#oled-display-ssd1306)
!!! - [Infrarot-Sensor TCRT5000]()


### Montage


### Verkabelung


### Konfiguration


### Programmierung

