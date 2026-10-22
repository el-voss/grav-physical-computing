---
title: EVA-Prinzip
show_pageimage: true
image_width: 300
image_height: 400
taxonomy:
    Inhalte:
        - Sensor
        - Eingabe
        - Ausgabe
        - Verarbeitung
        - Aktor
    Niveau:
        - Basis
featured_image: eva-visualisierung.png
media_order: 'calliope-eva-hardware.png,calliope-eva-software.png,eva-visualisierung.png,tabelle-dig-ana-sen-akt.png'
---

<div markdown="1" class="aufgabe">
#### EVA-Prinzip und Bauteile

Zur Beschreibung von informationsverarbeitenden Systemen wird das EVA-Prinzip genutzt: Eingabe - Verarbeitung - Ausgabe (siehe unten). Kategorisiere die Bauteile auf dem Calliope danach, ob sie für die Eingabe oder für die Ausgabe zuständig sind.

Welche weiteren Gemeinsamkeiten und Unterschiede weisen die Bauteile auf?
</div>

!!!! #### Das EVA-Prinzip
!!!! 
!!!! Informationsverarbeitende Systeme lassen sich nach ihrer Funktion in drei Einheiten zerlegen: Eingabeeinheit, Verarbeitungseinheit, Ausgabeeinheit.
!!!! 
!!!! ![Visualisierung des EVA-Prinzips](eva-visualisierung.png)
!!!! 
!!!! Mit dem EVA-Prinzip wird die grundlegende Reihenfolge der Verarbeitung von Daten charakterisiert. Dies kann sowohl auf Hardwareebene (Bauteile) als auch auf Softwareebene (Programm) geschehen.
!!!!
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">![EVA-Prinzip auf Hardwareebene.](calliope-eva-hardware.png?Lightbox=1024&resize=500&classes=caption "EVA-Prinzip auf Hardwareebene.")</div>
!!!! <div markdown="1">![EVA-Prinzip auf Softwareebene.](calliope-eva-software.png?Lightbox=1024&resize=500&classes=caption "EVA-Prinzip auf Softwareebene.")</div>
!!!! </div>


<div markdown="1" class="aufgabe">
#### Bauteilkunde

Elektronische Bauteile und die von ihnen verarbeiteten Signale lassen sich jeweils grob in zwei Kategorien aufteilen: Es gibt Sensoren und Aktoren und es gibt analoge und digitale Signale.

Versuche, die folgenden Bauteile des Calliope aus eigener Überlegung zu kategorisieren, indem du sie passend in die folgende Tabelle einträgst. Achtung: Manche Bauteile lassen sich je nach Nutzung auch in zwei Felder eintragen.

- Taste A und Taste B
- Berührungspins (goldene Ringe)
- LED-Matrix (5×5 Display)
- RGB-LED
- Lautsprecher
- Mikrofon
- Lichtsensor
- Temperatursensor
- Kompass (Magnetometer)
- Beschleunigungssensor und Gyroskop

 |          | Sensor | Aktor |
 |---------|--------|-------|
 | Digital |        |       |
 | Analog  |        |       |

</div>

!!!! #### Sensoren und Aktoren mit digitalen und analogen Signalen
!!!!
!!!! Für die Eingabe von Daten werden *Sensoren* benötigt; für die Ausgabe hingegen *Aktoren*:
!!!! 
!!!! -   **Sensoren** (auch Fühler genannt) sind elektrische Bauteile, die eine physikalische Größe aus der Umwelt (Temperatur, Helligkeit, Luftdruck oder auch ein mechanischer Druck mit dem Finger) in eine elektrische Größe (Widerstand, Spannung, Stromstärke) umwandeln. Dadurch werden die physikalischen Größen aus der Umwelt einer elektronischen Verarbeitung zugänglich.
!!!! -   **Aktoren** (auch Aktuatoren genannt) sind elektrische Bauteile, die eine elektrische Größe in eine mechanische (Bewegung, Schallwellen) oder andere Größe (Temperatur, Licht, …) umwandeln. Sie ermöglichen, dass die elektronische Verarbeitung zu Handlungen bzw. Konsequenzen führen kann.
!!!! 
!!!! Die Signale von Sensoren und Aktoren können digital oder analog sein:
!!!! 
!!!! -   **Digitale Signale** können nur bestimmte, abgestufte Werte annehmen. In unseren Anwendungen genügen meist zwei Zustände - z.B. an / aus, gedrückt / nicht gedrückt oder 1 / 0.
!!!! -   **Analoge Signale** sind kontinuierlich: Sie ändern sich zeitlich und wertmäßig stufenlos und können dadurch unendlich viele Werte annehmen.
!!!! 
!!!! Digitale Geräte wie der Calliope können analoge Signale nicht exakt, sondern nur näherungsweise verarbeiten:
!!!! 
!!!! -   Beim **Einlesen** wandelt der Calliope die analoge Spannung am Eingang in eine Zahl um. Dabei sind 1024 verschiedene Stufen (0 bis 1023) möglich - der Calliope löst analoge Signale also mit 10 Bit auf. Diese Auflösung ist für die meisten Aufgaben fein genug.
!!!! -   Beim **Ausgeben** erzeugt der Calliope keine echten Zwischenwerte, sondern schaltet die Ausgabe sehr schnell ein und aus (Pulsweitenmodulation, kurz PWM). Über das Verhältnis von Ein- und Ausschaltzeit lässt sich dennoch die Helligkeit einer LED oder die Lautstärke des Lautsprechers stufenlos regeln.
!!!! 
!!!! ![Umwandlung eines analogen Signals in 32 Stufen.](analog-digital-wandlung.png?Lightbox=1024&resize=800&classes=caption "Das blau dargestellte Signal einer Sinusfunktion wird in 32 diskrete Stufen eingeteilt und kann dadurch digital verarbeitet werden. Am Calliope werden die Signale in 1024 Stufen eingeteilt, sodass die einzelnen Stufen kaum vom analogen Signal zu unterscheiden sind.")




