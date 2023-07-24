---
title: RFID
show_pageimage: true
image_width: 300
image_height: 300
featured_image: rfid.jpg
taxonomy:
    Mindestvoraussetzungen:
        - Datentypen
        - Variablen
        - 'Einfache Entscheidungen programmieren'
        - 'Der serielle Monitor'
        - Servo
    Inhalte:
        - RFID-Chip
        - Sender
        - Empfänger
        - SPI
        - ID
        - Anwesenheit
    Niveau:
        - Fortgeschritten
---

<div markdown="1" class="clearfix">
![RFID-Sender und -Empfänger](rfid.jpg?resize=250&classes=caption,figure-right "RFID-Empfänger (rechts) mit blauem RFID-Sender (links).")
Mit RFID-Chips (***r**adio **f**requency **id**entification*) lässt sich ein digitaler Schlüssel bauen, um zum Beispiel Türen abzusichern. Der RFID-Empfänger sendet über die rechteckige Spule Radiowellen, welche Energie transportieren. Diese empfängt der RFID-Sender (blauer Chip oder auch weiße Karte), woraufhin er seine eizigartige ID zurücksendet. Diese wird wiederum von der Rechteckspule empfangen und elektronisch so aufbereitet, dass man am Arduino die ID lesen kann.
</div>

Die Verbindung mit dem Arduino erfolgt über ein *Serial Peripheral Interface (SPI)* (weitere Informationen unten), weshalb die meisten Pins am Arduino festgelegt sind (siehe unten). Der RST-Pin und der SDA-Pin lassen sich ggf. noch ändern. 

!! Wichtig: Der Mikrocontroller auf dem RFID-Chip arbeitet mit einem Logiklevel von $3,3 \, V$ und würde durchbrennen, wenn man ihn an 5 V anschließt. Der Arduino verfügt direkt neben dem 5 V-Anschluss auch über einen 3,3 V-Anschluss. 

Der IRQ-Pin des RFID-Empfängers wird nicht benötigt und kann ignoriert werden.

<div class="flex-box">
<div markdown="1" class="flexible">![RFID-Konfigurationsblock.](rfid-konfiguration.png?classes=caption "RFID-Konfigurationsblock.")</div>
<div markdown="1" class="flexible">
![RFID-Block zur Prüfung der Anwesenheit.](rfid-gibAnwesenheit.png?classes=caption "RFID-Block zur Prüfung der Anwesenheit.")
![RFID-Block zum Erhalten der ID.](rfid-gibID.png?classes=caption "RFID-Block zum Erhalten der ID.")
</div>
</div>

Zur Programmierung kann man die bloße Anwesenheit eines RFID-Senders abfragen oder die ID eines RFID-Senders. Die Anwesenheitsabfrage unterscheidet nicht, welcher RFID-Sender anwesend ist, sie liefert also bei *jedem* RFID-Sender `true` zurück. Sinnvoller ist also in den meisten Fällen die Abfrage der einzigartigen ID des RFID-Senders, um diese abspeichern und im nächsten Programm darauf reagieren zu können. Ein Beispielprogramm zeigt die folgende Abbildung.

![Beispielprogramm zum Auslesen eines RFID-Senders in Form einer weißen Karte.](rfid-bsp.png?classes=caption "Beispielprogramm zum Auslesen eines RFID-Senders in Form einer weißen Karte.")

!! *Fehlerquellen:* Bei der Programmierung gibt es zwei Fehlerquellen zu beachten, die man möglichst vermeiden sollte:
!! 
!!   - Werden die Befehle `gib ID` und `gib Anwesenheit` kurz hintereinander verwendet, wird der zweite Befehl nicht funktionieren, weil dazu (durch die Implementierung im Hintergrund) immer eine neue Karte erkannt werden muss.
!!   - Für den Vergleich von vorgegebener ID und eingelesener ID muss für beide eine Variable vom Typ Zeichenkette angelegt werden, damit Nepo keinen Fehler anzeigt. Das unten abgebildete Beispiel erzeugt also einen Fehler. (Hintergrund: Wenn die vorgegebene ID nicht als Zeichenkette (String) definiert wird, wird sie als sogenanntes Character-Array behandelt. Da die eingelesene ID aber vom Typ String ist, sollen sozusagen Äpfel mit Birnen verglichen werden.)
!!     
!!     ![Der Vergleich von vorgegebener ID und eingelesener ID erzeugt hier einen Fehler.](rfid-fehler-vgl-chararray-mit-string.png?classes=caption "Der Vergleich von vorgegebener ID und eingelesener ID erzeugt hier einen Fehler.")

<div markdown="1" class="projekt">
#### Katzentür

Baue und programmiere einen Prototypen für eine Katzentür, die sich automatisch öffnet, wenn die Katze (mit RFID-Chip am Halsband) sich der Tür nähert.

*Erweiterung:* Schließe einen weiteren RFID-Empfänger am Arduino an (siehe Informationen unten). Einer der RFID-Empfänger soll sich draußen, der andere drinnen befinden. Programmiere nun drei Modi, zwischen denen sich hin- und herschalten lässt:

  - Standard: Tür geht immer auf,
  - Tag: Tür geht nur von innen nach außen auf (alle Katzen sollen raus),
  - Nacht: Tür geht nur von außen nach innen auf (alle Katzen sollen rein).
</div>

!!!! #### Serial Peripheral Interface (SPI)
!!!! Das *Serial Peripheral Interface* (engl. für serielle periphäre Schnittstelle) ist ein Bus-System, um Daten zwischen Mikrocontrollern und integrierten Schaltkreisen nach dem Master-Slave-Prinzip auszutauschen. Der Master ist hier immer der Arduino, die Slaves sind die angeschlossenen Bauteile. Für die Kommunikation werden neben zwei Leitungen zur Spannungsversorgung (5 V bzw. 3,3 V und GND) vier weitere Leitungen benötigt:
!!!!  - *Serial Clock*. Auf dieser Leitung gibt der Master den Takt an, in dem die Bits gesendet werden.
!!!!  - *Master Out, Slave In*. Auf dieser Leitung sendet der Master Informationen, die die Slaves empfangen.
!!!!  - *Master In, Slave Out*. Auf dieser Leitung empfängt der Master Informationen, die die Slaves senden.
!!!!  - *Slave Select*. Diese Leitung wird vom Master auf ein GND-Potential (logisch 0) gebracht, um dem damit verbundenen Slave mitzuteilen, dass die folgenden Informationen an ihn gehen sollen. Im Gegensatz zu den ersten drei Leitungen erhält jeder Slave einen eigenen SS-Pin am Master, damit dieser sie einzeln ansprechen kann (siehe Abb. unten).
!!!! 
!!!! Da das RFID-Modul aus diesem Abschnitt auch über den I2C-Bus angesteuert werden kann, haben zwei Pins eine mehrfache Funktion. Insbesondere entspricht der SDA-Pin (im I2C-Bus die serielle Datenleitung) bei der Ansteuerung über den SPI-Bus dem SS-Pin (siehe [components101.com](https://components101.com/wireless/rc522-rfid-module)).
!!!! <figure class="image-caption">
!!!!    <img title="SPI-Verbindung mit einem Master und drei Slaves." alt="SPI-Verbindung mit einem Master und drei Slaves." class="caption" src="/user/pages/images/SPI-three-slaves.png">
!!!!    <figcaption class="">SPI-Verbindung mit einem Master und drei Slaves. Quelle: <a href="https://de.wikipedia.org/wiki/Datei:SPI_three_slaves.svg" target="_blank">Wikipedia</a>, Lizenz: <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.de" target="_blank">CC-BY-SA 3.0</a>, <a href="https://en.wikipedia.org/wiki/User:Cburnett" target="_blank">Colin Burnett</a>.</figcaption>
!!!! </figure>
