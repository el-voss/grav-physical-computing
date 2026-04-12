---
title: 'Tropfen- und Feuchtigkeitssensor'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'feuchtigkeitssensor.jpg,tropfensensor.jpg,calliope-feuchtigkeitssensor.png,calliope-feuchtigkeitssensor-grove.png'
featured_image: feuchtigkeitssensor.jpg
taxonomy:
    Inhalte:
        - Tropfensensor
        - Feuchtigkeitssensor
    Niveau:
        - Basis
        - Fortgeschritten
---

Mit einem Tropfensensor lässt sich die Feuchtigkeit auf dem Sensorblatt messen. Solche Sensoren werden zum Beispiel in Windschutzscheiben von Autos eingesetzt, um die Scheibenwischer und ihre Geschwindigkeit zu steuern. Feuchtigkeitssensoren funktionieren im Wesentlichen genauso, allerdings sind die Kontakte dabei so weit auseinander, dass durch Tropfen noch kein Stromfluss entsteht, sondern erst durch zum Beispiel die feuchte Erde eines Blumentopfes, der automatisch bewässert werden soll.

<div class="flex-box">
<div markdown="1">![Tropfensensor.](tropfensensor.jpg?resize=300&classes=caption "Tropfensensor.")</div>
<div markdown="1">![Feuchtigkeitssensor.](feuchtigkeitssensor.jpg?resize=300&classes=caption "Feuchtigkeitssensor.")</div>
</div>

## Verbindung mit Grove

### Schaltung

![calliope-feuchtigkeitssensor-grove](calliope-feuchtigkeitssensor-grove.png?lightbox=1024&resize=500&classes=caption "Verbindung des Feuchtigkeitssensors mit dem Calliope über den Grove-Verbinder. Man kann nur den rechten Anschluss A1 verwenden, nicht den linken Anschluss A0.")

### Programmierung



## Verbindung mit der Pinleiste

### Schaltung

![calliope-feuchtigkeitssensor](calliope-feuchtigkeitssensor.png?lightbox=1024&resize=500&classes=caption "Anschluss des Feuchtigkeitssensors an der Pinleiste des Calliope. Für den Tropfensensor erfolgt der Anschluss analog.")

Das Signalkabel S (in der Schaltskizze blau eingezeichnet) muss mit einem Pin verbunden werden, der ein analoges Signal lesen kann. Dafür kommen folgende Pins in Frage: P0, P1, P2, C4, C10, C16, C18. Achtung: Die Pins können schon an anderer Stelle verwendet worden sein, z. B. über die Ringpads (P0, P1, P2) oder den Grove-Anschluss A1 (betrifft C16).

### Programmierung



## Aufgaben

<div markdown="1" class="projekt">
#### Automatischer Scheibenwischer

Baue einen Scheibenwischer, der automatisch startet, wenn Feuchtigkeit registriert wird. Je nach Feuchtigkeitslevel soll eine von drei Geschwindigkeiten ausgewählt werden.

*Hinweis: Du kannst die vorkonfigurierten Blöcke von Nepo für den Tropfensensor verwenden oder einen analogen Sensor konfigurieren, dessen Analogwert du selbst in einen Prozentwert umrechnest (0 entspricht 0 %, 1023 entspricht 100 %).*
</div>
