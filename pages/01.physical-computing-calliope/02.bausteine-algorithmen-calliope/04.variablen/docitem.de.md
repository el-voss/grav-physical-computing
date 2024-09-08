---
title: Variablen
show_pageimage: true
image_width: 300
image_height: 400
taxonomy:
    Mindestvoraussetzungen:
        - 'Verarbeitung von Umwelteingaben'
        - Datentypen
        - 'Wiederholungen und zufällige Ereignisse'
    Inhalte:
        - Variablen
        - Trace-Tabelle
    Niveau:
        - Basis
featured_image: variable-speicher.png
media_order: 'trace-counter.png,trace-counter2.png,trace-rechnung.png,variable-speicher.png,variablen-zaehler.png,variable-potenz.png'
---

<div markdown="1" class="aufgabe">
#### Variableneinsatz

Das folgende Beispiel zeigt den Einsatz einer Variable namens `zaehler`.

![Einsatz einer Variable](variablen-zaehler.png?resize=300&lightbox=1024&classes=caption "Einsatz einer Variable.")

1. Analysiere das Programm:
	- Wie wird eine Variable eingeführt?
	- Welche Ausgabe macht der Calliope?
	- Was ist die letzte angezeigte Zahl?
2. Teste, ob du richtig liegst.
3. Erstelle ein Programm ohne Variable, das die gleiche Ausagbe erzeugt.
4. Vergleiche beide Programme. Begründe, warum der Einsatz einer Variable sinnvoll ist.
</div>

<div markdown="1" class="aufgabe">
#### Variableneinsatz II

Das folgende zweite Beispiel zeigt eine Alternative zur Anpassung des Variablenwertes.

![Alternativer Variableneinsatz](variable-potenz.png?resize=300&lightbox=1024&classes=caption "Alternativer Variableneinsatz.")

1. Stelle eine Vermutung an, welche Ausgabe dieses Programm erzeugt.
2. Teste deine Vermutung.
</div>

<div markdown="1" class="notices green clearfix">
![Variable als Zeiger auf einen Speicherplatz](variable-speicher.png?resize=300&classes=caption,figure-right "Variable zeigt auf Speicherplatz mit Wert.")
#### Variablen
<p>Eine Variable kann man sich als Koffer vorstellen, der einen Namen bekommt und in dem man einen festgelegten Datentyp speichert. Jedes Mal, wenn der Name des Koffers aufgerufen wird, wird der abgespeicherte Wert hervorgeholt und an die Stelle des Namens gesetzt. Intern wird der Variablenname als Verweis auf einen bestimmten Speicherplatz genutzt, in dem der Wert der Variable abgelegt ist.</p>
<p>Für den Namen hat sich der <a href="https://de.wikipedia.org/wiki/Binnenmajuskel#Programmiersprachen">lowerCamelCase</a> etabliert: Der erste Buchstabe ist klein; wenn weitere Wörter folgen, fangen diese mit einem großen Buchstaben an. Leerzeichen sind nicht erlaubt.</p>
</div>

<div class="aufgabe" markdown="1">
#### Wiederholschleifen mit Zähler vergleichen und verstehen

1. Vergleiche die beiden unten dargestellten Schleifen.
2. Ermittle jeweils den Wert, der auf dem Calliope angezeigt wird. Stelle dazu den Programmablauf mit einer Trace-Tabelle dar (siehe unten).

<div class="flex-box" markdown="1">
<div markdown="1"> ![wdhbis-zaehler-zeilennummern](wdhbis-zaehler-zeilennummern.png "wdhbis-zaehler-zeilennummern")</div>
<div markdown="1"> ![wdhsolange-zaehler-zeilennummern](wdhsolange-zaehler-zeilennummern.png "wdhsolange-zaehler-zeilennummern")</div>
</div>
</div>

!!!! #### Trace-Tabellen
!!!!
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1"> Trace-Tabellen stellen den Wert von Variablen beim Durchlaufen des Programms dar. Auf diese Art und Weise kann man sich zum Beispiel genau veranschaulichen, wann Schleifen abgebrochen werden.</div>
!!!! <div markdown="1">
!!!!  |**Zeile** | **counter** |
!!!!  |----------|-------|
!!!!  |   1   |  1  |
!!!!  |   2    |   1   |
!!!!  |   3      |   1   |
!!!!  |   4      |   2   |
!!!!  |   3      |   2   |
!!!!  |   4      |   3   |
!!!! </div>
!!!! </div>

<div class="aufgabe" markdown="1">
#### Berechnung mit einer Wiederholschleife

![trace-rechnung](trace-rechnung-zeilennummern.png?lightbox=1024&resize=500&classes=caption "Algorithmus zur Berechnung einer bestimmten Zahl.")

1. Stelle eine Vermutung an, welche Zahl mit dem vorliegenden Programm berechnet werden soll.
2. Überprüfe deine Vermutung und führe den Algorithmus durch. Stelle dazu den Programmablauf in einer Trace-Tabelle dar.

</div>