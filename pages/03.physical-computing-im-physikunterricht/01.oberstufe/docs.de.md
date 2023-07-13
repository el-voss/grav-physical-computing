---
title: Oberstufe
---

# Physical Computing im Physikunterricht der Oberstufe

Auf dieser Seite sammle ich Exkurse zu Physical Computing im Physikunterricht der Oberstufe. Sie sind so aufbereitet, dass ein Vorwissen nicht erforderlich ist.

[TOC]

## Vorbereitung: Aufbau und Programmierung des Arduino Uno

### Der Aufbau des Arduino UNO

Der Arduino Uno ist ein Mikrocontroller, der entwickelt wurde, um einen einfachen Einstieg in Elektronik und Programmierung zu ermöglichen.

![Die wichtigsten Komponenten eines Arduino Uno.](arduino-beschriftet.png?lightbox=1024&classes=caption "Die wichtigsten Komponenten eines Arduino Uno.")

Die Abbildung oben zeigt die wichtigsten Komponenten des Arduino Uno. Wichtig sind an dieser Stelle vor allem folgende Punkte:

-   Über den USB-Anschluss und das mitgelieferte Kabel lässt sich der Arduino mit dem PC verbinden und programmieren.
-   Das Programm läuft nach dem Übertragen auf dem eigentlichen Mikrocontroller, dem langen schwarzen Ding in der Mitte. Der ganze Rest auf dieser kleinen Platine dient der einfacheren Handhabung des Mikrocontrollers.
-   An den Seiten befinden sich die Pin-Leisten, an die sich zum Beispiel LEDs anschließen lassen. Die Pins sind durchnummeriert, sodass sie im Programm angesprochen werden können. *GND* steht für “Ground” oder den Minus-Kontakt. *5V* steht für den Plus-Kontakt und gibt an, dass dort stets eine Spannung von 5V anliegt, wenn der Arduino über USB oder Batterie mit Strom versorgt wird. Die  durchnummerierten Digitalpins können durch das Programm ebenfalls auf 5V gesetzt werden (`HIGH`), aber auch auf 0V, sodass kein Strom fließt (`LOW`).
-   Die analogen Eingänge A0 bis A5 ermöglichen das Messen einer Spannung.

### Das Open Roberta Lab und Nepo4Arduino

Um den Arduino zu programmieren, ruft man die Adresse <https://lab.open-roberta.org/> auf und wählt dann *Nepo4Arduino* und im nächsten Schritt den Arduino Uno aus. Damit das dort erstellte Programm aus dem Browser auf den Arduino übertragen werden kann, muss außerdem der *Open Roberta Connector* installiert werden. Auf der [Wiki-Seite](https://jira.iais.fraunhofer.de/wiki/display/ORInfo/Open+Roberta+Wiki) gibt es eine [Installations-Anleitung](https://jira.iais.fraunhofer.de/wiki/display/ORInfo/Open+Roberta+Connector) und eine [Anleitung zum Verbinden des Arduino mit dem Open Roberta Lab](https://jira.iais.fraunhofer.de/wiki/display/ORInfo/Vorbereitung+Nepo4Arduino).

Die folgende Abbildung zeigt eine Übersicht über die Oberfläche des Open Roberta Lab, jedoch lernt man sie am besten kennen, indem man einfach drauf loslegt und ausprobiert, was sich damit anstellen lässt.

![Übersicht über die Funktionen von Open Roberta Lab.](openrobertalab.png?lightbox=1024&classes=caption "Übersicht über die Funktionen von Open Roberta Lab.")

### Digitale Ausgänge steuern

<div markdown="1" class="aufgabe"> 
####Test der Funktionsweise

Zum Testen der Funktionsweise soll die bordeigene LED zum Blinken gebracht werden:

-   Stelle LED an.
-   Warte eine Sekunde.
-   Stelle LED aus.
-   Warte eine Sekunde.

1.  Verbinde den Arduino mit dem Open Roberta Lab nach der [Anleitung zum Verbinden des Arduino](https://jira.iais.fraunhofer.de/wiki/display/ORInfo/Vorbereitung+Nepo4Arduino).
2.  Überprüfe zunächst in der Roboterkonfiguration, ob der Block für die Board-LED bereits eingestellt ist. Benenne die LED als “BoardLED”.
3.  Erstelle das oben formulierte Programm mit Nepo4Arduino und übertrage es auf den Arduino.
4.  Zum Speichern des Programms wähle im  *Menü* die Funktion *exportiere Programm*. Finde das Programm im Download-Ordner deines Computers und benenne es als `Blink.xml`. Speichere es dann an einem    sinnvollen Ort ab.
*Hinweis:* Du kannst das Programm im gleichen Menü wieder importieren, um es zu einem späteren Zeitpunkt wieder aufzurufen.
</div>

### Werte auf dem seriellen Monitor ausgeben

Der Arduino und der Computer kommunizieren über die USB-Schnittstelle (*universal serial bus*), die auch serielle Schnittstelle genannt wird. Über diese Verbindung kann das Programm vom Open Roberta Lab auf den Arduino übertragen werden, aber es können auch umgekehrt Daten vom Arduino an den Computer gesendet werden.

<div markdown="1" class="aufgabe">
#### Test des seriellen Monitors

![](serialprint.png?classes=figure-right)
1.  Implementiere ein Programm, das in jeder Sekunde “Moin!” an den seriellen Monitor sendet und übertrage es auf den Arduino.
2.  [Öffne den seriellen Monitor](https://jira.iais.fraunhofer.de/wiki/display/ORInfo/Vorbereitung+Nepo4Arduino#VorbereitungNepo4Arduino-SerialMonitor) im Open Roberta Connector mit einer Baudrate von 9600 und kontrolliere dein Programm.
</div>

## Teslameter bauen

! **Vorwissen**
! - Programmierung mit dem Open Roberta Lab
! - Auslesen von Messwerten im seriellen Monitor
! - Hall-Effekt und Formel für die Hall-Spannung
! - Auswertung proportionaler Zusammenhänge
!
! **Ziele**
! - Teslameter bauen, um weitere Magnetfelder zu vermessen

Ein Teslameter misst die Stärke der magnetischen Flussdichte. Dazu werden üblicherweise Hall-Sensoren benutzt, wie sie im Bild unten zu sehen sind. 

<div class="flex-box">
<div markdown="1">![Hall-Sensor.](hall-a3124-lua-t.jpg?resize=150&classes=caption "Hall-Sensor.")</div>
<div markdown="1">![Hall-Sensor auf Platine.](hall-ky-035.jpg?resize=150&classes=caption "Hall-Sensor auf Platine.")</div>
</div>

Es gibt viele verschiedene Hall-Sensoren - in diesem Kurs wird das Hall-Sensor-Modul "KY-035" genutzt. Das ist eine kleine Platine, auf der der Hall-Sensor AH49E verlötet ist. Sensor und Modul verfügen über drei Pins, die beim Arduino an 5V, GND und einen analogen Eingang (A0 bis A5) angeschlossen werden, wie der Schaltplan unten zeigt. *Achtung*: Auf der Platine wird die Reihenfolge von 5V und GND vertauscht!

<!-- Schaltplan -->
![Schaltplan zum Anschluss des Hall-Sensor-Moduls an den Arduino.](hall-ky-035-an-arduino.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum Anschluss des Hall-Sensor-Moduls KY-035 an den Arduino. Man beachte, dass die Reihenfolge von VCC und GND auf der Platine vertauscht wird. Beim AH49E ohne Platine ist der GND-Pin dementsprechend in der Mitte.")

Die Verbindung mit 5V (Pluspol) und GND (Minuspol) sorgt für den Stromfluss durch das Hall-Plättchen. Der Signalpin, der an einen analogen Eingang angeschlossen wird, gibt eine Spannung (gegenüber GND) aus, mit der sich die magnetische Flussdichte berechnen lässt. Dies ist jedoch **nicht die Hall-Spannung**, da diese in der Regel zu klein wäre. Der Hall-Sensor verfügt über Schaltelemente, die die Hall-Spannung verstärken und stabilisieren, um ein gut messbares Signal als Ausgabespannung abzugeben.

<!-- Ersatzblockbild zur Spannung mit gemeinsamen Minuspol -->
![Vereinfachtes Blockdiagramm für den Aufbau des Hall-Sensors.](hall-blockdiagramm-vereinfacht.png?lightbox=1024&resize=500&classes=caption "Vereinfachtes Blockdiagramm für den Aufbau des Hall-Sensors. Der Stromfluss durch das Hallplättchen geht von unten nach oben. Die Hall-Spannung, die links und rechts am Hall-Sensor anliegt, wird mit GND zusammengeführt, sodass die Spannung stets gegenüber GND als Nullniveau gemessen wird.")

<div markdown="1" class="aufgabe">
#### Theorie: Spannung an analogen Eingängen messen

Die Spannung, die an einem analogen Eingang A[0-5] anliegt, wird über einen eingebauten Analog-Digital-Wandler (*engl. analog-to-digital converter, ADC*) durch eine ganze Zahl zwischen 0 und 1023 ausgedrückt.

<div class="flex-box">
<div markdown="1">
1.  Berechne mit Hilfe der Tabelle die Spannung, die einem Analogwert von 1 bzw. von 100 entspricht. Du kannst dabei von einem proportionalen Zusammenhang ausgehen.
2.  Gib den funktionalen Zusammenhang $U=f(A)$ an, wobei $U$ für die im analogen Eingang gemessene Spannung in Millivolt und $A$ für den entsprechenden Analogwert steht. 
</div>
<div markdown="1">
| **Analogwert** | **Spannung** |
| :------------: | :----------: |
|       0        |     0 mV      |
|       1        |              |
|      100       |              |
|      1023      |     5000m V      |
</div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Hall-Sensor auslesen

1. Schließe den Hall-Sensor wie oben angegeben am Arduino an.
2. Öffne die Konfiguration im Open Roberta Lab und erstelle einen analogen Sensor an dem entsprechenden analogen Eingang, den du gewählt hast.
3. Erstelle eine Variable für die Spannung U und ermittle mit Hilfe der unten angegebenen Blöcke die Spannung am Signalpin des Hall-Sensors. Gib diese Spannung auf dem seriellen Monitor aus. Die Spannung sollte ohne Magnetfeld bei etwa 2,5 V liegen.

<!--- Bilder von Blöcken ergänzen -->
![Blöcke für die Berechnung und Ausgabe der Spannung am analogen Eingang.](spannung-einlesen-programmbloecke.png?lightbox=1024&resize=800&classes=caption "Blöcke für die Berechnung und Ausgabe der Spannung am analogen Eingang.")
</div>

<div markdown="1" class="projekt">
#### Teslameter bauen

1. Aus dem [Datenblatt des Hall-Sensors AH49E](https://datasheetspdf.com/pdf-file/623226/BCD/AH49E/1) lässt sich entnehmen, dass die Ruhespannung, also die ausgegebene Spannung am Signalpin, wenn kein Magnetfeld vorliegt, bei etwa 2,5V liegt. Notiere den genauen Wert für die Ruhespannung bei deinem Hall-Sensor.
2. Je nach Richtung des Magnetfeldes wird sich die Ruhespannung vergrößern oder verkleinern. Diese *Änderung der Ruhespannung* ist eine verstärkte Hall-Spannung. Dabei gilt ein proportionaler Zusammenhang $B=a \cdot U_H$ zwischen der Hall-Spannung und der magnetischen Flussdichte. Der Proportionalitätsfaktor $a$ kann ermittelt werden, indem man die Spannung $U$ bei bekannter magnetischer Flussdichte $B$ misst. Dafür steht ein Teslameter und ein Hufeisenmagnet bereit. Bestimme den Faktor $a$ für deinen Hall-Sensor.
3. Implementiere die Berechnung der magnetischen Flussdichte in dein Programm und gib diese auf dem seriellen Monitor aus. Experimentiere mit verschiedenen Magneten.

*Reflexion:*
- Wie genau ist das gebaute Teslameter? Ermittle dazu den Unterschied der magnetischen Flussdichte bei einer Änderung des gemessenen Analogwertes um 1.
- Werden die gemessenen Werte durch das Erdmagnetfeld beeinflusst? Recherchiere die Stärke des Erdmagnetfeldes.
</div>
