---
title: 'Vermischte Übungen zu Bausteinen und zur Analyse von Algorithmen'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: hoerbare-helligkeit.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Bausteine von Algorithmen'
        - 'Analyse von Algorithmen'
    Niveau:
        - Basis
        - Fortgeschritten
media_order: 'diagonales-lauflicht-startbloecke.png,konfigurierbares-blinken-startbloecke.png,laermampel-zur-analyse.png,laermlampe-startbloecke.png,zaehlschleife-analysieren.png,zaehlschleifen-fuer-mathematik.png,Aufg-Programme-verstehen.png'
---

<div markdown="1" class="aufgabe">
#### Lärmlampe

Der Calliope soll auf Lärm reagieren: Normalerweise leuchtet die RGB-LED grün. Wenn die Lautstärke aber auf über 50% steigt, dann soll die RGB-LED rot leuchten.

1. Entwickle ein Programm nach den beschriebenen Anforderungen und stelle es als Struktogramm dar.
2. Bei dem beschriebenen Ansatz kann es zu einem Flackern, d.h. zu einem schnellen Wechsel zwischen Rot und Grün kommen. Erkläre, warum das so ist und wie man dieses Problem beheben könnte.

![befehle-zur-laermlampe](laermlampe-startbloecke.png?lightbox=1024&resize=800&classes=caption "Blöcke zum Programmieren der Lärmlampe. Die Argumente dürfen angepasst werden. Die Blöcke dürfen mehrmals verwendet werden.")
</div>

<div markdown="1" class="aufgabe">
#### Lärmlampe mit drei Stufen

Stefan hat sich an einer Lärmlampe mit drei Stufen versucht: Wenn es leise ist, soll die RGB-LED grün anzeigen, bei mittlerer Lautstärke gelb und bei hoher Lautstärke rot. Unten ist sein Programm abgebildet.

Analysiere sein Programm. Gehe dabei sowohl auf Teile ein, die gut funktionieren, als auch auf Teile, die fehlerhaft sind und verbessert werden müssten.

![laermampel-zur-analyse](laermampel-zur-analyse.png?lightbox=1024&resize=600&classes=caption "Stefans Programm für eine Lärmampel mit drei Stufen.")
</div>

<div markdown="1" class="aufgabe">
#### Konfigurierbares Blinken

Die RGB-LED des Calliope soll auf ganz bestimmte Weise zum Blinken gebracht werden. Zunächst soll die RGB-LED jeweils eine Sekunde lang an sein und eine Sekunde aus. Mit dem Taster A lässt sich die Zeit jedoch mit jedem Drücken um 100ms verringern. Wenn die Zeit dabei auf 200ms gestellt wird, wird sie stattdessen wieder auf 2000ms hochgesetzt.

Entwickle ein Programm nach den beschriebenen Anforderungen und stelle es als Struktogramm dar.

![befehle-zu-konfigurierbares-blinken](konfigurierbares-blinken-startbloecke.png?lightbox=1024&resize=800&classes=caption "Blöcke zum Programmieren des konfigurierbaren Blinkens. Die Argumente dürfen angepasst werden. Die Blöcke dürfen mehrmals verwendet werden.")
</div>


<div markdown="1" class="aufgabe">
#### Variablen und Datentypen

1.  Nenne Vorteile, die für die Verwendung von Variablen sprechen.
2.  Nenne drei Datentypen, die in Variablen gespeichert werden können.
</div>

<div markdown="1" class="aufgabe">
#### Programme verstehen

Auf dem Calliope wird das folgende Programm ausgeführt.

![Programm zur Analyse](Aufg-Programme-verstehen.png?resize=500)

1.  Stelle das oben abgebildete Programm als Struktogramm dar.
2.  Beschreibe die Wirkung des oben abgebildeten Programms.
3.  Erkläre, wie man das Programm ändern müsste, damit die RGB-LED zwei Mal blinkt, bevor wieder der Ton abgespielt wird.
</div>

<div markdown="1" class="aufgabe">
#### Zählschleife analysieren

Auf dem Calliope wird das folgende Programm ausgeführt.

![Zählschleife zur Analyse.](zaehlschleife-analysieren.png?classes=caption "Zählschleife zur Analyse.")

1.  Erstelle eine Trace-Tabelle für die Ausführung des Programms.
2.  Nenne die Zahlen, die auf dem Calliope ausgegeben werden.
3.  Stelle das Programm als Struktogramm dar.
</div>

<div markdown="1" class="aufgabe">
#### Diagonales Lauflicht

Entwickle ein Programm für den Calliope, sodass auf der Diagonale der LED-Matrix ein Lauflicht von oben links nach unten rechts verläuft. Stelle es als Struktogramm dar.

Hinweis: Zu jedem Zeitpunkt leuchtet genau eine der LEDs.

![befehle-zu-diagonales-lauflichtn](diagonales-lauflicht-startbloecke.png?lightbox=1024&resize=800&classes=caption "Blöcke zum Programmieren des diagonalen Lauflichts. Die Argumente dürfen angepasst werden. Die Blöcke dürfen mehrmals verwendet werden.")
</div>

<div markdown="1" class="aufgabe">
#### Zählschleifen für die Mathematik

Mit Hilfe der Zählschleifen im folgenden Programm sollen Eigenschaften von Zahlen untersucht werden.

![Zählschleifen für die Mathematik.](zaehlschleifen-fuer-mathematik.png?resize=800&classes=caption "Zwei Zählschleifen zur Untersuchung von Zahlen.")

1. Bestimme für `i=1` bis `i=5` welche Zahlen auf dem Calliope ausgegeben werden.
2. Erkläre allgemein, welche Zahlen auf dem Calliope ausgegeben werden.
</div>

<div markdown="1" class="aufgabe">
#### EVA am Smartphone

1. Nenne jeweils drei Bauteile im Smartphone, die für die Eingabe bzw. für die Ausgabe zuständig sind.
2. Anne schreibt Bernd mit ihrem Smartphone eine Textnachricht. Bernd empfängt diese auf seinem Smartphone. Kategorisiere den Prozess auf Annes und auf Bernds Smartphone jeweils nach dem EVA-Prinzip.

</div>


<div markdown="1" class="aufgabe">
#### Bauteilkategorisierung

Erkläre kurz, ...
1. ... warum ein Taster ein digitaler Sensor ist.
2. ... warum ein Summer ein analoger Aktor ist.
</div>
