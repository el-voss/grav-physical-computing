---
title: 'Fahren lernen'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'motorblock.png,funktion-drehung-links.png,funktion-drehung-rechts.png,funktion-motor-leistung.png,funktion-motor-stop.png,bastelbot-quadrat-fahren.png,funktion-fahre.png'
taxonomy:
    Inhalte:
        - Funktionen
        - Getriebemotoren
        - 'Funktionen zum Fahren'
        - Hebelsteuerung
    Niveau:
        - Basis
featured_image: bastelbot-quadrat-fahren.png
---

Nachdem der Roboter nun über ein Fahrgestell verfügt und die Motoren verkabelt sind, wird es Zeit, ihm das Fahren beizubringen!

In der Kategorie "Motoren" gibt es dazu den Block "Motor ... an mit ...%", der es erlaubt, die Leistung der Motoren einzustellen:
- "50%" bedeutet, die Motoren drehen sich mit halber Leistung vorwärts,
- "0%" bedeutet, die Motoren bleiben stehen,
- "-50%" bedeutet, die Motoren drehen sich mit halber Leistung rückwärts.

![motorblock](motorblock.png?lightbox=500&resize=500&classes=caption "Block zum Steuern der Motoren, wenn Knopf A gedrückt wurde.")

!! #### Sicherheitshinweis
!! Bevor der Calliope per USB-Kabel am Computer angeschlossen wird, muss die **Batterie stets abgeklemmt werden**. Ziehe dazu das rote Kabel vom Pluspol heraus. Das schwarze Kabel vom Minuspol kann stecken bleiben, da die Verbindung bereits unterbrochen ist. So musst du später nur ein Kabel wieder einstecken und dir dabei nicht merken, wohin "+" und "-" müssen, weil das Kabel vom Minuspol ja noch steckt.

<div markdown="1" class="aufgabe">
#### Vor und zurück

1. Füge ein Skript hinzu, sodass sich die Motoren stoppen lassen, wenn die Taste B gedrückt wird. Dies ist hilfreich, wenn du das nächste Programm übertragen willst.
2. Füge ein Skript zum Vorwärts- oder Rückwärtsfahren hinzu und beobachte die Motoren. Wenn sie sich falsch herum drehen, musst du die Kabel der Motoren anders herum am Calliope anschließen.
</div>

<div markdown="1" class="aufgabe">
#### Quadratfahren

![bastelbot-quadrat-fahren](bastelbot-quadrat-fahren.png?lightbox=500&resize=500 "bastelbot-quadrat-fahren")

1. Markiere auf dem Boden ein Quadrat mit Seitenlänge 1m.
2. Lass den Roboter das Quadrat abfahren! Sorge dafür, dass die Fahrt erst startet, wenn du auf Taste A gedrückt hast.

Tipp: Damit sich der Roboter auf der Stelle dreht, lasse einen Motor vorwärts und den anderen rückwärts drehen (eine sogenannte "Hebelsteuerung"). Füge danach eine Pause mit dem Block "pausiere ... ms" ein, die genau so lang ist, dass sich der Roboter um 90° dreht.
</div>

<div markdown="1" class="aufgabe">
#### Funktionen für das Fahren

Die Programme werden handlicher und übersichtlicher, wenn die einzelnen Fahrfunktionen auch als Funktion im Programm umgesetzt werden. Implementiere die unten abgebildeten Funktionen.

<div class="flex-box">
<div markdown="1" class="flexible">![funktion-motor-stop](funktion-motor-stop.png?lightbox=500&resize=300 "funktion-motor-stop")</div>
<div markdown="1" class="flexible">![funktion-motor-leistung](funktion-motor-leistung.png?lightbox=500&resize=500 "funktion-motor-leistung")</div>
<div markdown="1" class="flexible">![funktion-drehung-rechts](funktion-drehung-rechts.png?lightbox=500&resize=400 "funktion-drehung-rechts")</div>
<div markdown="1" class="flexible">![funktion-drehung-links](funktion-drehung-links.png?lightbox=500&resize=400 "funktion-drehung-links")</div>
<div markdown="1" class="flexible">![funktion-fahre](funktion-fahre.png?lightbox=500&resize=500 "funktion-fahre")</div>
</div>
</div>