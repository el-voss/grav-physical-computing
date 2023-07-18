---
title: Übersicht
show_pageimage: true
image_width: 300
image_height: 400
---

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
|  ![l298n-front](l298n-front.jpg?lightbox=512&resize=200 "l298n-front") | Motortreiber L298N | 1 | [Aufbau und Funktionsweise](#der-motortreiber-l298n) / [Informationen und Datenblatt zum L298N](https://components101.com/modules/l293n-motor-driver-module) |
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