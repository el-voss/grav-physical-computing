---
title: 'Bau des Fahrgestells'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'akku-anschluss.jpg,batterie.jpg,calliopev3.jpg,calliopev3-rueckseite.jpg,fusskugel.jpg,gleichstrommotor.jpg,lochplatte.jpg,m3-kreuzschrauben.jpg,motorhalterung.jpg,pappe-einwellig.jpg,reifen.jpg,schere-stift-geo.jpg,schraubendreher.jpg'
---

Der Bau des Roboters beginnt mit dem Aufbau des Fahrgestells und der Verschaltung der Motoren.

### Bauteile

<div class="aufgabe" markdown="1">
#### Bauteile sammeln und kontrollieren

Suche in den bereitgestellten Kästen alle Teile heraus, die du für den Bastelbot benötigst. Bei den Werkzeugen und Schrauben müsst ihr euch ggf. untereinander austauschen und aushelfen, wenn sie nicht in ausreichender Anzahl vorliegen.
</div>

<div markdown="1" style="overflow:auto;">
| Bild | Bauteil | Anzahl | Hinweise |
|-------|----------|-----------|---------------------------------|
| ![lochplatte](lochplatte.jpg?lightbox=1024&resize=200 "lochplatte") | Lochplatte mit 7 x 10 Löchern | 1 | |
| ![motorhalterung](motorhalterung.jpg?lightbox=1024&resize=200 "motorhalterung") | Motorhalterung | 2 | |
| ![fusskugel](fusskugel.jpg?lightbox=1024&resize=200 "fusskugel") | Slider | 1 | |
| ![calliopev3](calliopev3.jpg?lightbox=1024&resize=200 "calliopev3") | Calliope v3 | 1 | erst v3 verfügt über geeingeten Motortreiber |
| ![getriebemotor-n20](gleichstrommotor.jpg?lightbox=512&resize=200 "getriebemotor-n20")  | N20 Getriebemotoren (100 RPM, 6V) | 2 | mit angelöteten Jumper-Kabeln |
| ![raeder](raeder.jpg?lightbox=512&resize=200 "raeder")  | Räder mit Felgen | 2 | passend zum Aufsetzen auf die Motorschäfte |
|  ![9v-block](batterie.jpg?lightbox=512&resize=200 "9v-block") | 9V-Block | 1 | Auch als USB-Akku verfügbar. |
| ![clip-mit-offenen-kontakten](akku-anschluss.jpg?lightbox=512&resize=200 "clip-mit-offenen-kontakten")  | Clip zum Anschluss des 9V-Block mit angelöteten Jumper-Kabeln | 1 | |
| ![m3-kreuzschrauben](m3-kreuzschrauben.jpg?lightbox=1024&resize=200 "m3-kreuzschrauben") | M3 Kreuzschrauben Set | 1 | ggf. mit zweiter Gruppe teilen |
| ![schraubendreher](schraubendreher.jpg?lightbox=1024&resize=200 "schraubendreher") | Schraubendreher | nach Bedarf | ggf. mit zweiter Gruppe teilen |
| ![pappe-einwellig](pappe-einwellig.jpg?lightbox=1024&resize=200 "pappe-einwellig") | Pappe | nach Bedarf | einwellig, ca. 3 mm dick |
| ![schere-stift-geo](schere-stift-geo.jpg?lightbox=1024&resize=200 "schere-stift-geo") | Schere, Bleistift, Geodreieck, Radiergummi | 1 | ggf. mit zweiter Gruppe teilen |
</div>




<div markdown="1" style="overflow:auto;">
| Bild | Bauteil | Anzahl | Hinweise |
|-------|-----------|----------|--------------|
| ![arduino-uno](arduino-uno.jpg?lightbox=512&resize=200 "arduino-uno")  | Arduino Uno | 1 | |
| ![expansion-board](expansion-board.jpg?lightbox=512&resize=200 "expansion-board")  | Expansion Shield mit kleinem Steckbrett und mehreren Pins für GND und 5V | 1 | |
|  ![l298n-front](l298n-front.jpg?lightbox=512&resize=200 "l298n-front") | Motortreiber L298N | 1 | [Aufbau und Funktionsweise](/arduinoskript/elektrik/transistoren-motoren/elektromotoren-mit-einem-motortreiber-steuern#steuerung-mit-dem-l298n) / [Informationen und Datenblatt zum L298N](https://components101.com/modules/l293n-motor-driver-module) |
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
