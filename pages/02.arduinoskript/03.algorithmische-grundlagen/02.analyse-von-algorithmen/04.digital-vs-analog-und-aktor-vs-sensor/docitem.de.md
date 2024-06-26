---
title: 'Digital vs. Analog und Aktor vs. Sensor'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: bauteilsammlung.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Einfache Entscheidungen programmieren'
        - 'Der serielle Monitor'
        - 'Entscheidungen mit mehreren Kriterien'
    Zusatzvoraussetzungen:
        - Zählschleifen
    Inhalte:
        - Digital
        - Analog
        - Sensor
        - Aktor
    Niveau:
        - Fortgeschritten
---

<div markdown="1" class="aufgabe">
#### Bauteilkunde

Du hast bisher (mindestens) folgende Bauteile verwendet:
![Bauteilsammlung](bauteilsammlung.png)
Benenne Gemeinsamkeiten und Unterschiede. Welche Bauteile lassen sich zusammenfassen?
</div>

!!!! #### Sensoren und Aktoren mit digitalen und analogen Signalen
!!!! Für die Eingabe von Daten werden *Sensoren* benötigt; für die Ausgabe hingegen *Aktoren*:
!!!! 
!!!! -   **Sensoren** (auch Fühler genannt) sind elektrische Bauteile, die eine physikalische Größe aus der Umwelt (Temperatur, Helligkeit, Luftdruck oder auch ein mechanischer Druck mit dem Finger) in eine elektrische Größe (Widerstand, Spannung, elektrisches Potential, Stromstärke) umwandeln. Dadurch werden die physikalischen Größen aus der Umwelt einer elektronischen Verarbeitung zugänglich.
!!!! -   **Aktoren** (auch Aktuatoren genannt) sind elektrische Bauteile, die eine elektrische Größe in eine mechanische (Bewegung, Schallwellen) oder andere Größe (Temperatur, Licht, …) umwandeln. Sie ermöglichen, dass die elektronische Verarbeitung zu Handlungen bzw. Konsequenzen führen kann.
!!!! 
!!!! Die Signale von Sensoren und Aktoren können digital oder analog sein:
!!!! 
!!!! -   **Digitale Signale** haben nur zwei mögliche Zustände - z.B. an aus, gedrückt / nicht gedrückt oder 1 / 0.
!!!! -   **Analoge Signale** haben unendlich viele mögliche Werte, weil sie beliebig fein eingeteilt werden können. Digitale Geräte wie der Arduino können nur *quasi* analoge Signale einlesen. Bei den “analogen” Eingängen A0, A1, …A5 des Arduino sind 1024 verschiedene Stufen möglich; bei “analogen” Ausgängen (Pins mit einer Tilde: $\sim$) sind 256 verschiedene Stufen möglich. Diese Einteilung ist für die meisten Aufgaben fein genug.
!!!! 
!!!! ![Digitale und analoge Aktoren und Sensoren in Nepo.](sensoren-und-aktoren.png?classes=caption "Digitale und analoge Aktoren und Sensoren in Nepo.")

<div markdown="1" class="projekt">
#### Alarmanlage mit Lichtschranke

![Lichtschranke mit LED und LDR.](lichtschranke.png?resize=250&classes=caption,figure-right "Lichtschranke mit LED und LDR.")
Baue eine Alarmanlage, indem du mit einer LED (Vorwiderstand!) und einem LDR eine Lichtschranke baust . Wird diese unterbrochen, soll ein akustischer Alarm ertönen. Konfiguriere alle benötigten Bauteile als Aktoren und Sensoren.

*Erweiterung:* Über einen zusätzlichen Taster (mit Widerstand!) soll die Alarmanlage “scharf” gestellt bzw. wieder ausgestellt werden können. Erstelle dazu eine Wahrheitswert-Variable `aktiv`, deren Wert über den Taster verändert wird. Das Auslösen der Alarmanlage wird nur ausgeführt, wenn `aktiv = wahr` ist.

Rücklinks (öffnen in neuem Tab): <a href="https://mintorials.de/de/arduinoskript/algorithmische-grundlagen/bausteine-von-algorithmen/einfache-entscheidungen-programmieren#taster" target="_blank">Taster anschließen</a>, <a href="https://mintorials.de/de/arduinoskript/algorithmische-grundlagen/bausteine-von-algorithmen/der-serielle-monitor" target="_blank">LDR anschließen</a>
<div class="flex-box">
<div markdown="1">![Befehl: Aktor ansteuern](aktor-ansteuern.png)</div>
<div markdown="1">![Befehl: Sensor auslesen](sensor-auslesen.png)</div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Analoge Aktoren

Analoge Aktoren kamen bisher nicht vor. Schließe eine LED mit Vorwiderstand an Pin 5 an und konfiguriere einen entsprechenden analogen Aktor.

1.  An Pin 5 können Werte von 0 bis 255 ausgegeben werden. Implementiere eine Zählschleife, die diese Werte systematisch durchläuft und beschreibe die Auswirkung auf die LED.
2.  Probiere Werte größer als 255 aus und beschreibe, welche Auswirkung diese haben.
</div>
