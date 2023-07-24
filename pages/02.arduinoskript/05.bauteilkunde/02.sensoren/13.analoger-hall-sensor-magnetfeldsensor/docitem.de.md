---
title: 'Analoger Hall-Sensor (Magnetfeldsensor)'
show_pageimage: true
image_width: 300
image_height: 300
featured_image: hall-ky-035.jpg
taxonomy:
    Mindestvoraussetzungen:
        - 'Der serielle Monitor'
        - Variablen
        - 'Digital vs Analog und Aktor vs Sensor'
    Zusatzvoraussetzungen:
        - 'Spannung messen'
    Inhalte:
        - Hall-Sensor
        - Hall-Spannung
        - Teslameter
        - Ruhespannung
        - Sensitivität
    Niveau:
        - Fortgeschritten
        - Experte
---

Mit einem analogen Hall-Sensor lässt sich die Stärke eines Magnetfeldes (verkürzt: eines Magneten) messen. Solche Messungen werden zum Beispiel bei der Pipeline-Inspektion genutzt, um Risse in einer Pipeline zu finden und ihre Größe abzuschätzen. Dabei wird die Pipeline durch sehr starke Magnete magnetisiert. Wenn Risse vorhanden sind, kommt es jedoch zu Änderungen bei der Magnetisierung. Diese können durch die Hall-Sensoren erfasst und gemessen werden.

<div class="video">
  <iframe
    class="video__iframe"
    data-src="https://www.youtube-nocookie.com/embed/k4komyUIims"
    frameborder="0"
    allowfullscreen="allowfullscreen"
  ></iframe>
  <form class="video__notice">
    <p>
      An dieser Stelle ist ein Video von Youtube eingebettet. Mit deiner Erlaubnis willigst du ein, dass deine Daten an YouTube in den USA übermittelt werden. Weitere Informationen zur Datenverarbeitung von YouTube findest du in der <a href="https://policies.google.com/privacy?hl=de">Datenschutzerklärung von YouTube</a>.
    </p>
    <button>Erlaube Inhalte von YouTube</button>
  </form>
</div>

Es gibt viele verschiedene Hall-Sensoren - in diesem Kurs wird das Hall-Sensor-Modul "KY-035" genutzt. Das ist eine kleine Platine, auf der der Hall-Sensor AH49E verlötet ist.

!! *Achtung:* Hall-Sensoren können leicht mit Transistoren verwechselt werden! Achte genau auf die Aufschrift auf dem schwarzen Kästchen und hole ggf. eine Lupe, um zu erkennen, ob es sich um einen Transistor, einen analogen Hall-Sensor oder einen digitalen Hall-Sensor handelt.

<div class="flex-box">
<div markdown="1">![Hall-Sensor.](hall-a3124-lua-t.jpg?resize=150&classes=caption "Hall-Sensor.")</div>
<div markdown="1">![Hall-Sensor auf Platine.](hall-ky-035.jpg?resize=150&classes=caption "Hall-Sensor auf Platine.")</div>
</div>

Sensor und Modul verfügen über drei Pins, die beim Arduino an 5V, GND und einen analogen Eingang (A0 bis A5) angeschlossen werden, wie der Schaltplan unten zeigt.

<!-- Schaltplan -->
![Schaltplan zum Anschluss des Hall-Sensor-Moduls an den Arduino.](hall-ky-035-an-arduino.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum Anschluss des Hall-Sensor-Moduls KY-035 an den Arduino. Falls der Hall-Sensor AH49E ohne das Modul angeschlossen werden soll, istzu beachten, dass die Reihenfolge von VCC und GND auf der Platine vertauscht wird. Beim AH49E ohne Platine ist der GND-Pin dementsprechend in der Mitte.")

Die Verbindung mit 5V (Pluspol) und GND (Minuspol) sorgt für den Stromfluss durch den Hall-Sensor. Wenn sich der Hall-Sensor in einem Magnetfeld befindet, dann entsteht in ihm eine sogenannte *Hall-Spannung*, die im Hall-Sensor noch weiter verstärkt und stabilisiert wird. Am Signalpin S kann man diese Spannung (gegenüber GND) messen, indem man ihn an einen analogen Eingang am Arduino anschließt.

<!-- Ersatzblockbild zur Spannung mit gemeinsamen Minuspol -->
![Vereinfachtes Blockdiagramm für den Aufbau des Hall-Sensors.](hall-blockdiagramm-vereinfacht.png?lightbox=1024&resize=500&classes=caption "Vereinfachtes Blockdiagramm für den Aufbau des Hall-Sensors. Der Stromfluss durch das Hallplättchen geht von unten nach oben. Die Hall-Spannung, die links und rechts am Hall-Sensor anliegt, wird mit GND zusammengeführt, sodass die Spannung stets gegenüber GND als Nullniveau gemessen wird.")

<div markdown="1" class="aufgabe">
#### Theorie: Spannung an analogen Eingängen messen

Am Arduino wird die Spannung, die der Hall-Sensor ausgibt und die mit der Stärke des Magnetfeldes zusammenhängt, über einen eingebauten Analog-Digital-Wandler (*engl. analog-to-digital converter, ADC*) durch eine ganze Zahl zwischen 0 und 1023 ausgedrückt. Zuerst muss aus diesem Analogwert die Spannung berechnet werden, um anhand der Spannung dann die Stärke des Magnetfeldes zu berechnen.

<div class="flex-box">
<div markdown="1">
1.  Berechne mit Hilfe der Tabelle die Spannung, die einem Analogwert von 1 bzw. von 100 entspricht. Du kannst dabei von einem proportionalen Zusammenhang ausgehen.
2.  Gib an, wie man allgemein für den Analogwert $A$ die zugehörige Spannung $U$ in Millivolt berechnet.
</div>
<div markdown="1">
| **Analogwert** | **Spannung** |
| :------------: | :----------: |
|       0        |     0 mV      |
|       1        |              |
|      100       |              |
|     A        |                  |
|      1023      |     5000m V      |
</div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Hall-Sensor auslesen

1. Schließe den Hall-Sensor wie oben angegeben am Arduino an.
2. Öffne die Konfiguration im Open Roberta Lab und erstelle einen analogen Sensor an dem entsprechenden analogen Eingang, den du gewählt hast.
3. Erstelle eine Variable für die Spannung U und ermittle mit Hilfe der unten angegebenen Blöcke die Spannung am Signalpin des Hall-Sensors. Gib diese Spannung auf dem seriellen Monitor aus. Die Spannung sollte ohne Magnetfeld bei etwa 2,5 V liegen.

<!--- Bilder von Blöcken-->
![Blöcke für die Berechnung und Ausgabe der Spannung am analogen Eingang.](spannung-einlesen-programmbloecke.png?lightbox=1024&resize=800&classes=caption "Blöcke für die Berechnung und Ausgabe der Spannung am analogen Eingang.")
</div>

Ein Teslameter ist ein Messgerät für die magnetische Flussdichte $B$, deren Einheit nach dem Physiker Nikola Tesla benannt ist. $1 \, T$ (Tesla) ist jedoch bereits eine sehr große Magnetfeldstärke. Handelsübliche Magnete liegen eher im Bereich von wenigen Millitesla.

<div markdown="1" class="projekt">
#### Teslameter bauen

<p></p>
<div class="flex-box">
<div markdown="1">
Um die ausgegebene Spannung und ihren Zusammenhang zur magnetischen Flussdichte zu verstehen, ist ein Blick in das Datenblatt des Hall-Sensors notwendig. Die unten / rechts stehende Tabelle enthält einen Auszug aus dem Datenblatt mit den wesentlichen Informationen zur *Ruhespannung*, die ausgegeben wird, wenn kein Magnetfeld vorliegt, und zur *Sensitvität der Spannung*, die angibt, wie stark sich die Ruhespannung ändert, wenn sich die magnetische Flussdichte ändert. Je nach Richtung des Magnetfeldes kann sich die Ruhespannung vergrößern oder verkleinern.
</div>
<div markdown="1" style="background: #eee; border: 3px solid #000; padding:1em; margin: 1em; overflow:auto;">
Auszug aus dem [Datenblatt des Hall-Sensors AH49E](https://datasheetspdf.com/pdf-file/623226/BCD/AH49E/1):

|             | min. | typ. | max. | unit |
|-----------|-------|------|---------|------|
| quiescent output voltage | 2.25 | 2.5 | 2.75 | V |
| output voltage sensitivity | 1.1  | 1.6  | 2.1  | mV/GS |
</div>
</div>

1. Vergleiche den Wert der Ruhespannung, den du in der letzten Aufgabe gemessen hast, mit den Werten aus dem Datenblatt.
2. Bei der Sensitivität wird die sonst eher unübliche Einheit *GS* / *GAUSS* genutzt, die auf den deutschen Mathematiker Carl Friedrich Gauß zurückgeht. Es gilt: $1 GS = 0,1 mT$. Gib die Sensitvität in der Einheit $\frac{mV}{mT}$ und erkläre, was sie bedeutet.
3. Erkläre, wie man anhand der gemessenen Spannung $U$ in $mV$ die magnetische Flussdichte $B$ in $mT$ berechnet.
4. Implementiere die Berechnung der magnetischen Flussdichte in dein Programm und gib diese auf dem seriellen Monitor aus. Experimentiere mit verschiedenen Magneten.
</div>

<div markdown="1" class="aufgabe">
#### Teslameter analysieren

*Experimentelle Verbesserung*

Laut [Datenblatt des Hall-Sensors AH49E](https://datasheetspdf.com/pdf-file/623226/BCD/AH49E/1) kann die *Output Voltage Sensitivity* schwanken und dementsprechend ungenau können die berechneten Werte für die magnetische Flussdichte sein. Mit einem professionellen Teslameter hingegen lässt sich das selbst gebaute Teslameter eichen.

Miss die Stärke eines Permanentmagneten mit einem professionellen Teslameter und miss die Spannung des Hall-Sensors am Arduino an der gleichen Stelle. Wandle deine Berechnung so ab, dass dein Teslameter den gleichen Wert wie das professionelle Teslameter anzeigt.

*Reflexion*
- Wie genau ist das gebaute Teslameter? Ermittle dazu den Unterschied der magnetischen Flussdichte bei einer Änderung des gemessenen Analogwertes um 1.
- Werden die gemessenen Werte durch das Erdmagnetfeld beeinflusst? Recherchiere die Stärke des Erdmagnetfeldes.

</div>

! **Hintergrund: Der Hall-Effekt**
!
! Die Messung der Stärke des Magnetfeldes beruht auf der Messung der Hall-Spannung, die im Hall-Sensor erzeugt wird. Im Hall-Sensor befindet sich ein winziges Hall-Plättchen, durch das Strom fließt. Wenn sich ein Magnetfeld diesem Plättchen nähert, werden die bewegten Elektronen zu einer Seite abgelenkt. Somit besteht auf einer Seite des Plättchens ein Elektronenüberschuss und auf der anderen Seite ein Elektronenmangel. Das bedeutet, dass an diesen beiden Seiten eine Spannung anliegt. Dieser Effekt wird nach dem Physiker Edwin Hall [Hall-Effekt](https://de.wikipedia.org/wiki/Hall-Effekt) genannt.
! Es lässt sich zeigen, dass diese Hall-Spannung proportional zur Stärke des Magnetfeldes ist. Daher sind Hall-Sensoren sehr gut für die Messung von Magnetfeldstärken geeignet.
!
! <center>
! <video controls="1" width="70%" height="auto" playsinline>
! <source src="https://upload.wikimedia.org/wikipedia/commons/7/77/Hall_Sensor.webm" type="video/webm"></source>
! Ihr Browser kann dieses Video nicht wiedergeben.
! </video>
! <p> Animation von <a href="https://de.wikipedia.org/wiki/Datei:Hall_Sensor.webm#filelinks">Fraunhofer IIS</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de">CC BY-SA 4.0</a>, via Wikimedia Commons </p>
! </center>
