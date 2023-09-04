---
title: 'Der serielle Monitor'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: serialprint.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Einfache Entscheidungen programmieren'
    Inhalte:
        - LDR
        - 'Serieller Monitor'
    Niveau:
        - Basis
media_order: 'ldr-an-arduino-steckplatine.png,ldr-an-arduino2.png,ldr-konfiguration.png,ldr-schaltsymbol.png,ldr.jpg,ldr2.jpg,serialprint.png,gibLichtinProzent.png'
---

Bisher hatte die Kommunikation mit dem Arduino stets nur eine Richtung: Vom Computer zum Arduino. Das reicht nicht mehr, wenn eine Messung vorgenommen und deren Ergebnis zurück gemeldet werden soll. Die einfachste Möglichkeit, um dies zu realisieren, ist der serielle Monitor. Dieser soll im Folgenden genutzt werden, um eine Straßenlampe zu konfigurieren, die leuchtet, wenn es dunkel wird.

**Frage:** Wie kann der Arduino mit dem Computer kommunizieren?

<div markdown="1" class="aufgabe">
#### Test des seriellen Monitors

![](serialprint.png?classes=figure-right)
1.  Implementiere ein Programm, das in jeder Sekunde “Moin!” an den seriellen Monitor sendet und übertrage es auf den Arduino.
2.  [Öffne den seriellen Monitor](https://jira.iais.fraunhofer.de/wiki/display/ORInfo/Vorbereitung+Nepo4Arduino#VorbereitungNepo4Arduino-SerialMonitor) im Open Roberta Connector mit einer Baudrate von 9600 und kontrolliere dein Programm.
</div>

Ein LDR ist ein Widerstand, dessen Größe von der Lichtstärke abhängt, die auf ihn trifft (siehe unten). Um ihn auslesen zu können, muss er in einem sogenannten Spannungsteiler mit einem Festwiderstand von $R_F=10 \, k\Omega$ an den Arduino angeschlossen werden (siehe rechts). Der zugehörige Konfigurationsblock ist unten abgebildet.

<div markdown="1" class="flex-box">
<div markdown="1">![Ein LDR.](ldr2.jpg?lightbox=1024&resize=200&classes=caption "Ein LDR.")</div>
<div markdown="1">
![Konfiguration des LDR.](ldr-konfiguration.png?resize=200&classes=caption "Konfiguration des LDR.")
![gibLichtinProzent](gibLichtinProzent.png?resize=200&classes=caption "Block zum Auslesen des LDR.")
</div>
<div markdown="1">![Symbolischer Schaltplan: LDR am Arduino](ldr-an-arduino2.png?lightbox=1024&resize=500&classes=caption "Symbolischer Schaltplan: LDR am Arduino.")</div>
<div markdown="1">![Ikonischer Schaltplan: LDR am Arduino](ldr-an-arduino-steckplatine.png?lightbox=1024&resize=500&classes=caption "Ikonischer Schaltplan: LDR am Arduino.")</div>
</div>

<div markdown="1" class="aufgabe">
#### Erste Experimente mit dem LDR

1.  Baue die oben abgebildete Schaltung zum Auslesen eines LDR am Arduino auf und lasse dir die Lichtstärke in % auf dem seriellen Monitor ausgeben.
2.  Die Veränderung der Lichtstärke in % verläuft genau umgekehrt zur Veränderung des Widerstands des LDR. Beschreibe, wie sich der Widerstand des LDR verhält, wenn es dunkel bzw. wenn es hell wird.
</div>

<div markdown="1" class="projekt">
#### Straßenlampe

Baue eine Straßenlampe, deren Licht (Vorwiderstand!) angeht, wenn es dunkel wird, und ausgeht, wenn es hell wird.
</div>

!!!! #### Fotowiderstand
!!!! 
!!!! Ein **Fotowiderstand**, kurz: **LDR** (*engl. **l**ight **d**ependent **r**esistor*), ist ein lichtabhängiger Widerstand. Wenn es dunkel wird, wird der elektrische Widerstand des LDR größer; wenn es hell wird, wird der elektrische Widerstand des LDR kleiner.
!!!! 
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">![Ein LDR](ldr.jpg?resize=200&classes=caption "Ein LDR")</div>
!!!! <div markdown="1">![Schaltsymbol des LDR](ldr-schaltsymbol.png?resize=200&classes=caption "Schaltsymbol des LDR")</div>
!!!! </div>
