---
title: 'Verarbeitung von Umwelteingaben'
menu: 'Verarbeitung von Umwelteingaben'
media_order: 'erste-entscheidung1.png,erste-entscheidung2.png,eva-visualisierung.png,calliope-eva-software.png,calliope-eva-hardware.png,verzweigungen.png,bedingung-mit-schwellwert.png,bedingung-taste-A.png'
---

<div markdown="1" class="aufgabe">
#### Programmvergleich

Beschreibe, was die beiden folgenden Programme bewirken und vergleiche sie. Probiere es ggf. mit deinem Calliope aus.

<div markdown="1" class="flex-box">
<div markdown="1">![Programm A](erste-entscheidung1.png?Lightbox=1024&classes=caption "Programm A.")</div>
<div markdown="1"> ![Programm B](erste-entscheidung2.png?Lightbox=1024&classes=caption "Programm B.")</div>
</div>
</div>

!!!! #### Verzweigungen
!!!! 
!!!! Mit Verzweigungen kann man den Calliope je nach Situation anders reagieren lassen. Im einfachsten Fall wird eine Anweisung nur ausgeführt, wenn eine zugehörige Bedingung wahr ist (oberste Verzweigung im Bild). Es ist aber auch möglich, dass je nach Wahrheitswert der Bedingung die erste Anweisung oder die zweite Anweisung ausgeführt wird (mittlere Verzweigung im Bild). Dies lässt sich über das Plus noch weiter führen, um weitere Bedingungen und Fälle hinzuzufügen (untere Verzweigung im Bild.
!!!! 
!!!! ![verzweigungen](verzweigungen.png?Lightbox=1024&resize=500&classes=caption "Verschiedene Verzweigungen.")
!!!! 
!!!! Als Bedingung eignen sich hellblaue Blöcke. Manche Sensoreingaben, wie zum Beispiel das Drücken einer Taste, kann man auch direkt als Bedingung verwenden (erkennbar an der hellblauen Nase). Bei anderen Sensorblöcken erhält man erst durch den Vergleich mit einer Zahl einen Wahrheitswert (wahr oder falsch). Die Zahl, die zum Vergleich herangezogen wird, nennt man auch *Schwellwert*.
!!!! 
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">![bedingung-taste-A](bedingung-taste-A.png "Der Sensorblock <Taste A gedrückt?> liefert <wahr> oder <falsch> (hellblaue Nase) und kann als Bedingung für Verzweigungen verwendet werden.")</div>
!!!! <div markdown="1">![bedingung-mit-schwellwert](bedingung-mit-schwellwert.png "Der Vergleich der Lautstärke mit einem Schwellwert liefert <wahr> oder <falsch> und kann als Bedingung für Verzweigungen genutzt werden.")</div>
!!!! </div>

<div markdown="1" class="aufgabe">
#### Simulation von Informatiksystemen im Alltag

1. Simuliere mit dem Calliope verschiedene Informatiksysteme aus deinem Alltag. Wähle selbst.
2. Notiere jeweils, welche Bauteile auf dem Calliope benötigt werden und sichere das Programm als Screenshot und ggf. als Datei.
3. Diskutiere die Grenzen deiner Programme: Wo bzw. wann treten Probleme auf? Wo ist die Simulation unvollständig oder stößt an Grenzen?


<div class="flex-box">
<div markdown="1" class="example-card">
**Fußgängerampel**

Eine Fußgängerampel wechselt auf Knopfdruck von rot auf grün und nach einiger Zeit zurück auf rot.
</div>
<div markdown="1" class="example-card">
**Straßenlaterne**

Eine Straßenlaterne geht automatisch an, wenn es dunkel ist, und aus, wenn es hell ist.
</div>
<div markdown="1" class="example-card">
**Alarmanlage für das Etui**

Die Alarmanlage gibt ein lautes Piepsen von sich, wenn das Etui geöffnet oder angehoben wird.
</div>
<div markdown="1" class="example-card">
**Temperaturampel**

Die Temperaturampel zeigt an, ob die Temperatur zu kalt, angenehm oder zu warm ist.
</div>
<div markdown="1" class="example-card">
**Lärmampel**

Die Lärmampel zeigt an, ob die Lautstärke angenehm, noch erträglich oder zu laut ist.
</div>
<div markdown="1" class="example-card">
**Einparkhilfe**

Eine Einparkhilfe piepst immer schneller, je näher man einem Hindernis kommt.
</div>
</div>

</div>


<div markdown="1" class="aufgabe">
#### EVA-Prinzip und Bauteile

Zur Beschreibung von informationsverarbeitenden Systemen wird das EVA-Prinzip genutzt: Eingabe - Verarbeitung - Ausgabe (siehe unten). Kategorisiere die Bauteile auf dem Calliope danach, ob sie für die Eingabe oder für die Ausgabe zuständig sind.

Welche weiteren Gemeinsamkeiten und Unterschiede weisen die Bauteile auf?
</div>

!!!! #### Das EVA-Prinzip
!!!! 
!!!! Informationsverarbeitende Systeme lassen sich nach ihrer Funktion in drei Einheiten zerlegen: Eingabeeinheit, Verarbeitungseinheit, Ausgabeeinheit.
!!!! 
!!!! ![Visualisierung des EVA-Prinzips](eva-visualisierung.png)
!!!! 
!!!! Mit dem EVA-Prinzip wird die grundlegende Reihenfolge der Verarbeitung von Daten charakterisiert. Dies kann sowohl auf Hardwareebene (Bauteile) als auch auf Softwareebene (Programm) geschehen.
!!!!
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">![EVA-Prinzip auf Hardwareebene.](calliope-eva-hardware.png?Lightbox=1024&resize=500&classes=caption "EVA-Prinzip auf Hardwareebene.")</div>
!!!! <div markdown="1">![EVA-Prinzip auf Softwareebene.](calliope-eva-software.png?Lightbox=1024&resize=500&classes=caption "EVA-Prinzip auf Softwareebene.")</div>
!!!! </div>

