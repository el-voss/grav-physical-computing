---
title: Variablen
show_pageimage: true
image_width: 300
image_height: 400
featured_image: variable-speicher.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Kurze Einführung'
        - Datentypen
    Inhalte:
        - Variablen
    Niveau:
        - Fortgeschritten
---

<div markdown="1" class="aufgabe">
#### Programmvergleich

a) Jana und Jonas haben jeweils LEDs an den Arduino angeschlossen und steuern diese mit den unten abgebildeten Programmen. Vergleiche die beiden Programme im Hinblick auf ihre Wirkung und die Art der Programmierung. Welches gefällt dir besser?
b) Zusatzüberlegung: Wie viel muss man ändern, wenn man die Leuchtdauer ändern will?

<div markdown="1" class="flex-box">
<div markdown="1">![Janas Programm zum Steuern der LEDs.](lauflicht-ohne-variable.png?lightbox=1024&classes=caption "Janas Programm zum Steuern der LEDs.")</div>
<div markdown="1"> ![Jonas Programm zum Steuern der LEDs.](lauflicht-mit-variable.png?lightbox=1024&classes=caption "Jonas Programm zum Steuern der LEDs.")</div>
</div>
</div>

<div markdown="1" class="notices green clearfix">
![Variable als Zeiger auf einen Speicherplatz](variable-speicher.png?resize=300&classes=caption,figure-right "Variable zeigt auf Speicherplatz mit Wert.")
#### Variablen
<p>Eine Variable kann man sich als Koffer vorstellen, der einen Namen bekommt und in dem man einen festgelegten Datentyp speichert. Jedes Mal, wenn der Name des Koffers aufgerufen wird, wird der abgespeicherte Wert hervorgeholt und an die Stelle des Namens gesetzt. Intern wird der Variablenname als Verweis auf einen bestimmten Speicherplatz genutzt, in dem der Wert der Variable abgelegt ist.</p>
<p>Für den Namen hat sich der <a href="https://de.wikipedia.org/wiki/Binnenmajuskel#Programmiersprachen">lowerCamelCase</a> etabliert: Der erste Buchstabe ist klein; wenn weitere Wörter folgen, fangen diese mit einem großen Buchstaben an. Leerzeichen sind nicht erlaubt.</p>
</div>
