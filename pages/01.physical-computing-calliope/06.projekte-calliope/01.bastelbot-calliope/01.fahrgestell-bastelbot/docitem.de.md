---
title: 'Bau des Fahrgestells'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'akku-anschluss.jpg,basisversion-frontal.jpg,basisversion-von-oben.jpg,batterie.jpg,calliopev3.jpg,calliopev3-rueckseite.jpg,fusskugel.jpg,gleichstrommotor.jpg,lochplatte.jpg,m3-kreuzschrauben.jpg,motorhalterung.jpg,motor-in-halterung.jpg,motor-in-halterung2.jpg,pappe-einwellig.jpg,reifen.jpg,schere-stift-geo.jpg,schraubendreher.jpg,bastelbot-anschluss-motoren-akku.png,lochplatte-anordnung-oben.png,lochplatte-anordnung-unten.png,bastelbot-mit-infrarotsensoren.png,kabel.jpg,steckbrett-klein.jpg,calliope-mit-zwei-tcrt5000.png,ultraschallsensor-grove.jpg,infrarot-sensoren.jpg,bastelbot-mit-ultraschallsensor.png,powerbank-und-usb.jpg,bastelbot-anschluss-motoren.png'
featured_image: basisversion-von-oben.jpg
published: true
taxonomy:
    Inhalte:
        - Montage
        - Kartonverbidnung
    Niveau:
        - Basis
---

[TOC]

Der Bau des Roboters beginnt mit dem Aufbau des Fahrgestells und der Verschaltung der Motoren.

![basisversion-von-oben](basisversion-von-oben.jpg?lightbox=1024&resize=500&classes=caption "Fertige Basisversion des Bastelbots")

## Bau des Fahrgestells

### Material

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
| ![calliopev3](calliopev3.jpg?lightbox=1024&resize=200 "calliopev3") | Calliope v3 | 1 | erst v3 verfügt über geeigneten Motortreiber |
| ![getriebemotor-n20](gleichstrommotor.jpg?lightbox=512&resize=200 "getriebemotor-n20")  | N20 Getriebemotoren (100 RPM, 6V) | 2 | mit angelöteten Jumper-Kabeln |
| ![raeder](reifen.jpg?lightbox=512&resize=200 "raeder")  | Räder mit Felgen | 2 | passend zum Aufsetzen auf die Motorschäfte |
| ![m3-kreuzschrauben](m3-kreuzschrauben.jpg?lightbox=1024&resize=200 "m3-kreuzschrauben") | M3 Kreuzschrauben Set | 1 | ggf. mit zweiter Gruppe teilen |
| ![schraubendreher](schraubendreher.jpg?lightbox=1024&resize=200 "schraubendreher") | Schraubendreher | nach Bedarf | ggf. mit zweiter Gruppe teilen |
| ![powerbank-und-usb](powerbank-und-usb.jpg?lightbox=1024&resize=200 "powerbank-und-usb") | kleine Powerbank und USB-Kabel | 1 | |
</div>

### Aufbau

<div class="aufgabe" markdown="1">
#### Aufbau des Fahrgestells

1. Klemme die zwei Getriebemotoren in die Motorhalterungen. Achte darauf, die Kabel nicht einzuklemmen. Vergleiche mit den Fotos.
2. Befestige mit Hilfe von Schrauben und Muttern die Motorhalterungen und den Slider auf der Lochplatte.

<div class="flex-box">
	<div markdown="1"> ![motor-in-halterung](motor-in-halterung.jpg?lightbox=512&resize=200 "motor-in-halterung")</div>
    <div markdown="1"> ![motor-in-halterung2](motor-in-halterung2.jpg?lightbox=512&resize=200 "motor-in-halterung2")</div>
</div>


<div class="flex-box">
	<div markdown="1"> ![lochplatte-anordnung-oben](lochplatte-anordnung-oben.png?lightbox=1024&resize=400  "lochplatte-anordnung-oben")</div>
    <div markdown="1"> ![lochplatte-anordnung-unten](lochplatte-anordnung-unten.png?lightbox=1024&resize=400  "lochplatte-anordnung-unten")</div>
</div>

</div>

<div class="aufgabe" markdown="1">
#### Verkabelung

Schließe die Motoren an der Pin-Leiste des Calliope an. Dazu müssen die Kabel des einen Motors mit den Pins M0- und M0+ verbunden werden. Die Kabel des anderen Motors werden mit M1- und M1+ verbunden.

![bastelbot-anschluss-motoren-akku](bastelbot-anschluss-motoren.png?lightbox=1024&resize=500&classes=caption "Anschluss der Motoren.") 

</div>

! Der Bastelbot ist nun bereit für das Kapitel [Fahren lernen](https://mintorials.de/de/physical-computing-calliope/projekte-calliope/bastelbot-calliope/fahren-lernen).

## Ultraschallsensor zur Hinderniserkennung

### Zusätzliches Material

<div markdown="1" style="overflow:auto;">
| Bild | Bauteil | Anzahl | Hinweise |
|-------|----------|-----------|---------------------------------|
| ![ultraschallsensor-grove](ultraschallsensor-grove.jpg?lightbox=1024&resize=200 "ultraschallsensor-grove") | Ultraschallsensor mit Kabel | 1 | unterschiedliche Anschlussarten (Grove, Jacdac, Jumper-Kabel) möglich |
</div>

### Montage und Verbindung

<div markdown="1" class="aufgabe">
#### Montage und Verbindung

1. Recherchiere die [Funktionsweise und Verkabelung des Ultraschallsensors](/physical-computing-calliope/bauteilkunde/sensoren-calliope/ultraschallsensor).
2. Bringe den Ultraschallsensor so am Roboter an, dass der Ultraschallsensor nach vorne "guckt", und führe die Verkabelung durch.

![bastelbot-mit-ultraschallsensor](bastelbot-mit-ultraschallsensor.png?lightbox=1024&resize=500&classes=caption "Bringe den Ultraschallsensor vorne am Bastelbot an.")
</div>

## Infrarot-Sensoren zur Linienverfolgung

### Zusätzliches Material

<div markdown="1" style="overflow:auto;">
| Bild | Bauteil | Anzahl | Hinweise |
|-------|----------|-----------|---------------------------------|
| ![infrarot-sensoren](infrarot-sensoren.jpg?lightbox=1024&resize=200 "infrarot-sensoren") | Infrarot-Sensoren TCRT5000 | 2 | |
| ![kabel](kabel.jpg?lightbox=1024&resize=200 "kabel") | Jumper-Kabel male-female und male-male | 6 / 2 | |
| ![steckbrett-klein](steckbrett-klein.jpg?lightbox=1024&resize=200 "steckbrett-klein") | Kleines Steckbrett | 1 | auch andere Formen möglich |
</div>

### Montage und Verbindung

Die Infrarot-Sensoren TCRT5000 werden vorne am Bastelbot angebracht, sodass die beiden Dioden nach unten zum Boden schauen. Die Module können mit einer Schraube auf der Lochplatte befestigt werden.

![bastelbot-mit-infrarotsensoren](bastelbot-mit-infrarotsensoren.png?lightbox=1024&resize=500&classes=caption "Die Infrarotsensoren lassen sich mit Schrauben auf der Lochplatte befestigen und mit Karton verkleiden.")

Bei der Verkabelung tritt das Problem auf, dass beide Module mit VCC und GND verbunden werden müssen. Dazu kann ein kleines Steckbrett verwendet werden. Innerhalb einer (halben) Reihe sind alle Löcher miteinander verbunden, sodass die beiden Kabel von den zwei Modulen hier zusammengeführt werden können.

Für die Pins, die das analoge Signal empfangen werden im folgenden Schaltplan P0 und P1 am Calliope gewählt. Falls diese bereits anderweitig besetzt sind, können auch folgende Pins des Calliope mit dem Pin A0 der Infrarotsensoren verbunden werden: P0, P1, P2, C4, C10, C16, C18. **Tipp:** Notiere dir, welche Seite (Infrarot_links, Infrarot_rechts) mit welchem Pin auf dem Calliope verbunden ist!
Da das digitale Signal aus D0 an den Infrarotsensoren nicht verwendet wird, muss dieser Pin nicht verkabelt werden.

![calliope-mit-zwei-tcrt5000](calliope-mit-zwei-tcrt5000.png?lightbox=1024&resize=500&classes=caption "Verkabelung von zwei TCRT5000 mit dem Calliope. Wenn man zwei TCRT5000 an den Calliope anschließen will, benötigt man ein kleines Steckbrett, um die beiden VCC- bzw. GND-Kabel zusammenzuführen.")

## Gehäuse

### Zusätzliches Material

<div markdown="1" style="overflow:auto;">
| Bild | Bauteil | Anzahl | Hinweise |
|-------|----------|-----------|---------------------------------|
| ![pappe-einwellig](pappe-einwellig.jpg?lightbox=1024&resize=200 "pappe-einwellig") | Pappe | nach Bedarf | einwellig, ca. 3 mm dick |
| ![schere-stift-geo](schere-stift-geo.jpg?lightbox=1024&resize=200 "schere-stift-geo") | Schere, Bleistift, Geodreieck, Radiergummi | 1 | ggf. mit zweiter Gruppe teilen |
</div>

### Aufbau

<div class="aufgabe" markdown="1">
#### Bau eines Gehäuses

Konstruiere mit Hilfe von Pappe und Schrauben ein geeignetes Gehäuse für deinen Bastelbot! Das Gehäuse sollte so gestaltet sein, dass der Calliope fest darauf sitzt und sowohl der USB-Anschluss als auch die schwarze Pin-Leiste unterhalb der drei RGB-LEDs zugänglich sind.

Die Verbindungen der Pappe lassen sich wie im folgenden Video gezeigt mit Schrauben herstellen.
<center>
<video controls width="70%" height="auto" autoplay>
<source src="/user/pages/videos/calliope/schraubverbindung.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>
</div>