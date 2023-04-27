---
title: '[D] Düvelbot'
media_order: '1_düvelbot.png,duevelbot-batteriehaenger.zip,duevelbot-chassis.zip,duevelbot-seitenhaenger.zip,duevelbot-slider.zip,9v-block.jpg,anhaenger.jpg,arduino-uno.jpg,chassis.jpg,clip-mit-offenen-kontakten.jpg,clip-mit-zylinderstecker.jpg,display-ssd1306.jpg,getriebemotor-n20.jpg,infrarot-sensoren.jpg,kabel.jpg,l298n-front.jpg,l298n-oben.jpg,raeder.jpg,seitenhaenger.jpg,slider.jpg,summer.jpg'
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
|   | Chassis | 1 | <a href="./duevelbot/duevelbot-chassis.zip" download>duevelbot-chassis.zip</a> |
|   | Slider | 1 | <a href="./duevelbot/duevelbot-slider.zip" download>duevelbot-slider.zip</a> |
|   | Seitenhänger | 2 | <a href="./duevelbot/duevelbot-seitenhaenger.zip" download>duevelbot-seitenhaenger.zip</a> |
|   | Anhänger hinten | optional | <a href="./duevelbot/duevelbot-batteriehaenger.zip" download>duevelbot-batteriehaenger.zip</a> |
</div>

**Elektronikteile**

<div markdown="1" style="overflow:auto;">
| Bild | Bauteil | Anzahl | Hinweise |
|-------|-----------|----------|--------------|
|   | Arduino Uno | 1 | |
|   | Expansion Shield mit kleinem Steckbrett und mehreren Pins für GND und 5V | 1 | |
|   | Motortreiber L298N | 1 | [Informationen und Datenblatt zum L298N](https://components101.com/modules/l293n-motor-driver-module) |
|   | N20 Getriebemotoren (100 RPM, 6V) | 2 | |
|   | Räder mit Felgen | 2 | passend zum Aufsetzen auf die Motorschäfte |
|   | Piezo-Summer | 1 | |
|   | Ultraschallsensor | 1 | |
|   | Infrarotsensoren TCRT5000 | 2 | [Datenblatt des Sensors TCRT5000](https://www.mouser.de/datasheet/2/427/tcrt5000-240273.pdf) |
|   | OLED-Display SSD1306 0,96" | 1 | |
|   | Kabel male - female | viele | |
|   | 9V-Block | 2 | |
|   | Clip zum Anschluss des 9V-Block mit Zylinderstecker für Arduino | 1 | |
|   | Clip zum Anschluss des 9V-Block mit offenen Kontakten für Schraubklemme | 1 | |
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

### Montage


### Verkabelung


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

