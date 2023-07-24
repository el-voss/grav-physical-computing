---
title: Neigungsschalter
show_pageimage: true
image_width: 300
image_height: 300
featured_image: neigungsschalter.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Einfache Entscheidungen programmieren'
        - 'Digital vs Analog und Aktor vs Sensor'
    Inhalte:
        - Neigungsschalter
    Niveau:
        - Basis
---

<div markdown="1" class="clearfix">
![Neigungsschalter.](neigungsschalter.png?resize=250&classes=caption,figure-right "Neigungsschalter.")
Mit sogenannten Neigungsschaltern (engl. *tilt switch*) lässt sich eine Neigung, aber auch eine Erschütterung oder der Beginn einer Beschleunigung messen. So lässt sich zum Beispiel feststellen, ob ein Gegenstand angehoben wird.
</div>

<div markdown="1" class="aufgabe">
#### Funktionsweise des Neigungsschalters

Die Abbildungen unten zeigen den Aufbau eines Neigungsschalters im geschlossenen und geöffneten Fall. Beschreibe den Aufbau des Schalters und erkläre, wie es in Abhängigkeit der Neigung des Neigungsschalters zum Leuchten der LED im abgebildeten Schaltkreis kommt. Handelt es sich um einen digitalen oder analogen Sensor?
<div class="flex-box">
<div markdown="1"> ![Neigungsschalter (geöffnet).](neigungsschalter-offen.png?resize=300&classes=caption "Neigungsschalter (geöffnet).")</div>
<div markdown="1"> ![Neigungsschalter (geschlossen).](neigungsschalter-geschlossen.png?resize=300&classes=caption "Neigungsschalter (geschlossen).")</div>
<div markdown="1">![Einfacher Aufbau zum Test eines Neigungsschalters ohne Arduino.](neigungsschalter-einfach.png?resize=300&classes=caption "Einfacher Aufbau zum Test eines Neigungsschalters ohne Arduino.")</div>
</div>
</div>

*Schaltplan:* Wenn der Neigungsschalter wie unten abgebildet am Arduino angeschlossen wird, kann sein Zustand in Digitalpin 3 ausgelesen werden (vgl. das [Auslesen von Tastern](/arduinoskript/algorithmische-grundlagen/bausteine-von-algorithmen/einfache-entscheidungen-programmieren#taster)).

![Neigungsschalter am Arduino.](neigungsschalter-mit-arduino.png?lightbox=1024&resize=500&classes=caption "Neigungsschalter am Arduino.")

*Programmierung:* Der Neigungsschalter ist in Nepo nicht vorkonfiguriert, aber dies ist auch gar nicht nötig. Er lässt sich als digitaler Sensor konfigurieren. Der Rückgabewert eines digitalen Sensors ist in Nepo vom Typ *Zahl* statt vom Typ *Wahrheitswert*. Dabei bedeutet die Zahl `0` so viel wie `false` und die Zahl `1` bedeutet `true`.

<div class="flex-box">
<div markdown="1">![neigungsschalter-konfiguration](neigungsschalter-konfiguration.png?classes=caption "Konfiguration des Neigungsschalter als digitaler Sensor an Pin 3.") </div>
<div markdown="1"> ![Digitalen Sensor auslesen.](digitalen-sensor-auslesen.png?classes=caption "Auslesen eines digitalen Sensors in Nepo.")</div>
</div>
    
<div markdown="1" class="projekt">
#### Alarmanlage

Baue eine Alarmanlage, die auslöst, wenn das Steckbrett angehoben wird.

*Zusatz:* Erkläre, warum es sinnvoll ist, den Piezo-Summer nicht so wie die LED in der oben diskutierten Aufgabe direkt mit dem Neigungsschalter zu verbinden, sondern das Auslösen des Tons im Programm zu regeln.
</div>