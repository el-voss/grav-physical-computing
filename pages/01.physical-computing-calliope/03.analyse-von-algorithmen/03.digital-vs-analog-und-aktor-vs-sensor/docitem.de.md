---
title: 'Digital vs. Analog und Aktor vs. Sensor'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: bauteilsammlung.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Verarbeitung von Umwelteingaben'
        - 'Wiederholungen und zufällige Ereignisse'
        - 'Variablen'
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

Elektronische Bauteile und die von ihnen verarbeiteten Signale lassen sich jeweils grob in zwei Kategorien aufteilen: Es gibt Sensoren und Aktoren und es gibt analoge und digitale Signale. Der Infokasten unten bietet genauere Informationen dazu an. Kategorisiere die Bauteile auf dem Calliope, indem du sie passend in die folgende Tabelle einträgst. Achtung: Manche lassen sich je nach Nutzung auch in zwei Felder eintragen.

|         | Sensor | Aktor |
|---------|--------|-------|
| Digital |        |       |
| Analog  |        |       |

</div>

!!!! #### Sensoren und Aktoren mit digitalen und analogen Signalen
!!!! ![Digitale und analoge Aktoren und Sensoren in Nepo.](sensoren-und-aktoren.png?resize=800&classes=caption "Digitale und analoge Aktoren und Sensoren in Nepo.")
!!!! Für die Eingabe von Daten werden *Sensoren* benötigt; für die Ausgabe hingegen *Aktoren*:
!!!! 
!!!! -   **Sensoren** (auch Fühler genannt) sind elektrische Bauteile, die eine physikalische Größe aus der Umwelt (Temperatur, Helligkeit, Luftdruck oder auch ein mechanischer Druck mit dem Finger) in eine elektrische Größe (Widerstand, Spannung, elektrisches Potential, Stromstärke) umwandeln. Dadurch werden die physikalischen Größen aus der Umwelt einer elektronischen Verarbeitung zugänglich.
!!!! -   **Aktoren** (auch Aktuatoren genannt) sind elektrische Bauteile, die eine elektrische Größe in eine mechanische (Bewegung, Schallwellen) oder andere Größe (Temperatur, Licht, …) umwandeln. Sie ermöglichen, dass die elektronische Verarbeitung zu Handlungen bzw. Konsequenzen führen kann.
!!!! 
!!!! Die Signale von Sensoren und Aktoren können digital oder analog sein:
!!!! 
!!!! -   **Digitale Signale** haben nur zwei mögliche Zustände - z.B. an aus, gedrückt / nicht gedrückt oder 1 / 0.
!!!! -   **Analoge Signale** haben unendlich viele mögliche Werte, weil sie beliebig fein eingeteilt werden können. Digitale Geräte wie der Calliope können nur *quasi* analoge Signale einlesen oder ausgeben. Bei den “analogen” Eingängen und Ausgaben sind jeweils 1024 verschiedene Stufen (von 0 bis 1023) möglich. Diese Einteilung ist für die meisten Aufgaben fein genug.
!!!! ![Umwandlung eines analogen Signals in 32 Stufen.](analog-digital-wandlung.png?Lightbox=1024&resize=800&classes=caption "Das blau dargestellte Signal einer Sinusfunktion wird in 32 diskrete Stufen eingeteilt und kann dadurch digital verarbeitet werden. Am Calliope werden die Signale in 1024 Stufen eingeteilt, sodass die einzelnen Stufen kaum vom analogen Signal zu unterscheiden sind.")



