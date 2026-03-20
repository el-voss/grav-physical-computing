---
title: 'Bau des Fahrgestells'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'akku-anschluss.jpg,basisversion-frontal.jpg,basisversion-von-oben.jpg,batterie.jpg,calliopev3.jpg,calliopev3-rueckseite.jpg,fusskugel.jpg,gleichstrommotor.jpg,lochplatte.jpg,m3-kreuzschrauben.jpg,motorhalterung.jpg,motor-in-halterung.jpg,motor-in-halterung2.jpg,pappe-einwellig.jpg,reifen.jpg,schere-stift-geo.jpg,schraubendreher.jpg,bastelbot-anschluss-motoren-akku.png'
featured_image: basisversion-von-oben.jpg
published: true
taxonomy:
    Inhalte:
        - Montage
        - Kartonverbidnung
    Niveau:
        - Basis
---

Der Bau des Roboters beginnt mit dem Aufbau des Fahrgestells und der Verschaltung der Motoren.

![basisversion-von-oben](basisversion-von-oben.jpg?lightbox=1024&resize=500&classes=caption "Fertige Basisversion des Bastelbots")

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
|  ![9v-block](batterie.jpg?lightbox=512&resize=200 "9v-block") | 9V-Block | 1 | Auch als USB-Akku verfügbar. |
| ![clip-mit-offenen-kontakten](akku-anschluss.jpg?lightbox=512&resize=200 "clip-mit-offenen-kontakten")  | Clip zum Anschluss des 9V-Block mit angelöteten Jumper-Kabeln | 1 | |
| ![m3-kreuzschrauben](m3-kreuzschrauben.jpg?lightbox=1024&resize=200 "m3-kreuzschrauben") | M3 Kreuzschrauben Set | 1 | ggf. mit zweiter Gruppe teilen |
| ![schraubendreher](schraubendreher.jpg?lightbox=1024&resize=200 "schraubendreher") | Schraubendreher | nach Bedarf | ggf. mit zweiter Gruppe teilen |
| ![pappe-einwellig](pappe-einwellig.jpg?lightbox=1024&resize=200 "pappe-einwellig") | Pappe | nach Bedarf | einwellig, ca. 3 mm dick |
| ![schere-stift-geo](schere-stift-geo.jpg?lightbox=1024&resize=200 "schere-stift-geo") | Schere, Bleistift, Geodreieck, Radiergummi | 1 | ggf. mit zweiter Gruppe teilen |
</div>

### Aufbau

<div class="aufgabe" markdown="1">
#### Aufbau des Fahrgestells

1. Klemme die zwei Getriebemotoren in die Motorhalterungen. Achte darauf, die Kabel nicht einzuklemmen. Vergleiche mit den Fotos.
2. Befestige mit Hilfe von Schrauben und Muttern die Motorhalterungen und den Slider auf der Lochplatte.


![motor-in-halterung](motor-in-halterung.jpg?lightbox=512&resize=200 "motor-in-halterung")
![motor-in-halterung2](motor-in-halterung2.jpg?lightbox=512&resize=200 "motor-in-halterung2")
</div>

<div class="aufgabe" markdown="1">
#### Bau eines Gehäuses

Konstruiere mit Hilfe von Pappe und Schrauben ein geeignetes Gehäuse für deinen Bastelbot! Das Gehäuse sollte so gestaltet sein, dass der Calliope fest darauf sitzt und sowohl der USB-Anschluss als auch die schwarze Pin-Leiste unterhalb der drei RGB-LEDs zugänglich sind. Zudem sollte das Gehäuse so hoch sein, dass man daran weitere Sensoren befestigen kann.

Die Verbindungen der Pappe lassen sich wie im folgenden Video gezeigt mit Schrauben herstellen.
<center>
<video controls width="70%" height="auto" autoplay>
<source src="/user/pages/videos/calliope/schraubverbindung.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>
</div>

<div class="aufgabe" markdown="1">
#### Verkabelung

1. Schließe die Motoren an der Pin-Leiste des Calliope an. Dazu müssen die Kabel des einen Motors mit den Pins M0- und M0+ verbunden werden. Die Kabel des anderen Motors werden mit M1- und M1+ verbunden.
2. Schließe die Batterie an. **Beachte die Sicherheitshinweise.**

!! #### Sicherheitshinweise
!! Wenn die Batterie falsch angeschlossen wird, wird der Calliope zerstört. Daher ist es wichtig, bei diesem Schritt sehr genau vorzugehen. Die Batterie wird mit den beiden **Pins GND und VM+** auf der linken Seite der Abbildung unten verbunden. 
!! Das schwarze Kabel des Batterieclips, das mit dem Minuspol der Batterie verbunden ist, muss mit GND verbunden werden. Das rote Kabel des Batterieclips, das mit dem Pluspol der Batterie verbunden ist, muss mit VM+ verbunden werden. **Beachte, dass sich diese beiden Pins auf der rechten Seite befinden, wenn du den Calliope von oben betrachtest!**
!! Wenn der Calliope mit dem USB-Kabel programmiert wird, muss die Batterie wieder abgesteckt werden. Dazu reicht es, das rote Kabel von VM+ herauszuziehen.

<div class="fex-box">
<div markdown="1" class="flexible">![calliopev3-rueckseite](calliopev3-rueckseite.jpg?lightbox=1024&resize=500&classes=caption "Auf der Rückseite des Calliope kann man die Pinbelegung sehen. Achte darauf, den richtigen Pin zu erwischen, wenn du den Calliope umdrehst. Klicke das Bild an, um zu vergrößern.") </div>
<div markdown="1" class="flexible">![bastelbot-anschluss-motoren-akku](bastelbot-anschluss-motoren-akku.png?lightbox=1024&resize=500&classes=caption "Anschluss von Motor und Akku von vorne gesehen (schematisch). Klicke das Bild an, um es zu vergrößern.") </div>
</div>

</div>
