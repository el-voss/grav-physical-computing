---
title: 'Verarbeitung von Umwelteingaben'
menu: 'Verarbeitung von Umwelteingaben'
media_order: 'erste-entscheidung1.png,erste-entscheidung2.png,verzweigungen.png,bedingung-mit-schwellwert.png,bedingung-taste-A.png,nachtlicht-flackert.png'
featured_image: bedingung-mit-schwellwert.png
show_pageimage: true
image_width: 300
image_height: 400
taxonomy:
    Inhalte:
        - Fallunterscheidungen
        - Sensor
        - Wahrheitswert
    Niveau:
        - Basis
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
!!!! <div markdown="1">![bedingung-taste-A](bedingung-taste-A.png?classes=caption "Der Sensorblock <Taste A gedrueckt?> liefert <wahr> oder <falsch> (hellblaue Nase) und kann als Bedingung für Verzweigungen verwendet werden.")</div>
!!!! <div markdown="1">![bedingung-mit-schwellwert](bedingung-mit-schwellwert.png?classes=caption "Der Vergleich der Lautstärke mit einem Schwellwert liefert <wahr> oder <falsch> und kann als Bedingung für Verzweigungen genutzt werden.")</div>
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
</div>

</div>

<div markdown="1" class="aufgabe">
#### Probleme mit dem Nachtlicht

Das folgende Programm soll ein Nachtlicht im Flur dazu bringen, im Dunkeln zu leuchten, während es tagsüber aus ist.

![nachtlicht-flackert](nachtlicht-flackert.png?Lightbox=1024&resize=500&classes=caption "Programm für ein flackerndes Nachtlicht.")

Leo beobachtet, dass das Nachtlicht in der Dämmerung, wenn es noch nicht richtig dunkel, aber auch nicht mehr hell ist, immer anfängt zu flackern. Es geht also ständig an und wieder aus.

1. Erkläre das Flackern des Nachtlichts.
2. Mache einen Vorschlag zur Verbesserung des Programms.

</div>
