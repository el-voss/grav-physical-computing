---
title: Sensoren
menu: '[S] Sensoren'
media_order: 'ultraschallsensor-konfiguration.png,konfiguration-beschleunigungssensor.png'
---

# Baulteilkunde Teil 2: Sensoren

<style>
    body {
        --abk: 'BK.S';
    }
</style>


Die folgende Seite bietet jeweils eine Einführung in neue Bauteile aus der Kategorie Sensoren, für die unterschiedliche Grundlagen aus dem Kapitel “Bausteine von Algorithmen” benötigt werden. Das Kapitel “Elektrische Grundlagen” ist zum tieferen Verständnis sicherlich hilfreich, aber für diese vorkonfigurierten Bauteile nicht unbedingt notwendig. Mit den hier vorgestellten Bauteilen lässt sich bereits eine Vielzahl an größeren Projekten umsetzen. Vielleicht hast du eine tolle Idee?

[TOC]

## Sensoren

Im Folgenden werden Sensoren erklärt, also Bauteile, die aus einer physikalischen Größe in der Umwelt eine elektrische Größe machen, die sich vom Arduino weiterverarbeiten lässt.

### Neigungsschalter

<div markdown="1" class="clearfix">
![Neigungsschalter.](/images/neigungsschalter.png?resize=250&classes=caption,figure-right "Neigungsschalter.")
Mit sogenannten Neigungsschaltern (engl. *tilt switch*) lässt sich eine Neigung, aber auch eine Erschütterung oder der Beginn einer Beschleunigung messen. So lässt sich zum Beispiel feststellen, ob ein Gegenstand angehoben wird.
</div>

<div markdown="1" class="aufgabe">
#### Funktionsweise des Neigungsschalters

Die Abbildungen unten zeigen den Aufbau eines Neigungsschalters im geschlossenen und geöffneten Fall. Beschreibe den Aufbau des Schalters und erkläre, wie es in Abhängigkeit der Neigung des Neigungsschalters zum Leuchten der LED im abgebildeten Schaltkreis kommt. Handelt es sich um einen digitalen oder analogen Sensor?
<div class="flex-box">
<div markdown="1"> ![Neigungsschalter (geöffnet).](/images/neigungsschalter-offen.png?resize=300&classes=caption "Neigungsschalter (geöffnet).")</div>
<div markdown="1"> ![Neigungsschalter (geschlossen).](/images/neigungsschalter-geschlossen.png?resize=300&classes=caption "Neigungsschalter (geschlossen).")</div>
<div markdown="1">![Einfacher Aufbau zum Test eines Neigungsschalters ohne Arduino.](/circuits/neigungsschalter-einfach.png?resize=300&classes=caption "Einfacher Aufbau zum Test eines Neigungsschalters ohne Arduino.")</div>
</div>
</div>

*Programmierung:* Der Neigungsschalter ist in Nepo nicht vorkonfiguriert, aber dies ist auch gar nicht nötig. Er lässt sich als digitaler Sensor konfigurieren. Der Rückgabewert eines digitalen Sensors ist in Nepo vom Typ *Zahl* statt vom Typ *Wahrheitswert*. Dabei bedeutet die Zahl `0` so viel wie `false` und die Zahl `1` bedeutet `true`.

![Digitalen Sensor auslesen.](/images/digitalen-sensor-auslesen.png?classes=caption "Auslesen eines digitalen Sensors in Nepo.")

<div markdown="1" class="projekt">
#### Alarmanlage

Baue eine Alarmanlage, die auslöst, wenn das Steckbrett angehoben wird.

*Hinweis:* Wenn der Neigungsschalter wie unten abgebildet am Arduino angeschlossen wird, kann sein Zustand in Digitalpin 3 ausgelesen werden (vgl. das [Auslesen von Tastern](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen/entscheidungen-und-serieller-monitor#taster)).

![Neigungsschalter am Arduino.](/circuits/neigungsschalter-mit-arduino.png?lightbox=1024&resize=500&classes=caption "Neigungsschalter am Arduino.")

*Zusatz:* Erkläre, warum es sinnvoll ist, den Piezo-Summer nicht so wie die LED in der oben diskutierten Aufgabe direkt mit dem Neigungsschalter zu verbinden, sondern das Auslösen des Tons im Programm zu regeln.
</div>

### Bewegungsmelder

*Bewegungsmelder wurden bereits im Abschnitt [Entscheidungen mit mehreren Kriterien treffen](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen/entscheidungen-und-serieller-monitor#entscheidungen-mit-mehreren...) erklärt und genutzt, um Wahrheitswerte einzuführen. In diesem Abschnitt steht das Bauteil im Vordergrund. Dazu werden noch einmal alle Informationen zusammengefasst und eine alternative Programmierung vorgestellt.*

Bewegungsmelder verfügen über drei Pins, deren Beschriftung man lesen kann, wenn man die Kunststofflinse vorsichtig abzieht (*Vorsicht: Nach Abziehen der Linse nicht den Sensor berühren!*). `Vcc` und `GND` dienen der Stromversorgung der elektronischen Komponenten und müssen mit `5V` und `GND` am Arduino verbunden werden.

Der mittlere `OUT`-Pin ist der Signal-Pin: Wenn eine Bewegung registriert wurde, wird der Wert `wahr` zurückgegeben, ansonsten `falsch`. Zum Einlesen des Signals wird dieser Pin mit einem Digitalpin des Arduino verbunden.

Hinten befinden sich zwei Drehregler (“Potentiometer”), mit denen sich die Dauer des Bewegungssignals (links) und die Empfindlichkeit (rechts) einstellen lassen. Zusätzlich befindet sich auf der rechten Seite ein sogenannter Jumper, mit dem auf einfache Weise eine Steckverbindung zwischen benachbarten Pins hergestellt werden kann. Wenn sich der Jumper ganz außen befindet, dann bleibt das Bewegungssignal nach dem Erkennen einer Bewegung eine Weile aktiv und wird dann auf jeden Fall deaktiviert. Eine neue Bewegung kann erst nach einer gewissen Zeit wieder registriert werden. Wenn der Jumper hingegen leicht nach innen versetzt ist, bleibt das Bewegungssignal so lange erhalten, wie eine Bewegung erkannt wird (siehe [Funduino](https://funduino.de/nr-8-bewegungsmelder)).

<div markdown="1" class="flex-box">
<div markdown="1"> ![Bewegungsmelder mit Linse.](/images/bewegungsmelder.jpg?resize=200&classes=caption "Bewegungsmelder mit Linse.")</div>
<div markdown="1"> ![Pinbelegung.](/images/bewegungsmelder-ohne-linse.jpg?resize=200&classes=caption "Pinbelegung.")</div>
<div markdown="1"> ![Drehregler für Signaldauer (links) und Empfindlichkeit (rechts).](/images/bewegungsmelder-hinten.jpg?resize=200&classes=caption "Drehregler für die Signaldauer (links) und Empfindlichkeit (rechts).")</div>
</div>

*Programmierung:* Der Bewegungsmelder ist in Nepo bereits vorkonfiguriert und lässt sich damit einfach auslesen. Aufgrund der Ausgabe von `HIGH` und `LOW` bzw. `true` und `false` lässt er sich aber auch als digitaler Sensor konfigurieren. Der Rückgabewert eines digitalen Sensors ist in Nepo vom Typ *Zahl* statt vom Typ *Wahrheitswert*. Dabei bedeutet die Zahl `0` so viel wie `false` und die Zahl `1` bedeutet `true`.
<div class="flex-box">
<div markdown="1">![Vorkonfigurierten Bewegungsmelder auslesen.](/images/bewegungsmelder-auslesen.png?classes=caption "Vorkonfigurierten Bewegungsmelder auslesen.")</div>
<div markdown="1">![Bewegungsmelder als digitalen Sensor auslesen.](/images/digitalen-sensor-auslesen.png?classes=caption "Bewegungsmelder als digitalen Sensor auslesen.")</div>
</div>

<div markdown="1" class="projekt">
#### Automatische Tür

Baue und programmiere eine automatische Tür, die sich öffnet, wenn eine Bewegung registriert wird. Der Bewegungsmelder soll als digitaler Sensor konfiguriert werden. Experimentiere mit den Drehreglern, um die Empfindlichkeit und Dauer des Signals richtig einzustellen.
</div>

! **Recherche: Wie funktioniert eigentlich ein Bewegungsmelder?**
! Das zentrale Bauteil eines Bewegungsmelders ist ein sogenannter *Passiver Infrarot Sensor (PIR)*, auch *Pyroelektrischer Sensor*. Recherchiere im Internet, wie solche Sensoren funktionieren und fasse zusammen, wie es zur Registrierung einer Bewegung kommt.

### Drehregler / Potentiometer

<div markdown="1" class="clearfix">
![Potentiometer](/images/poti.jpg?resize=200&classes=caption,figure-right "Potentiometer.")
Ein Drehregler oder Potentiometer ist ein Widerstand, der in zwei Teile aufgeteilt wird. Durch Drehen am Griff kann man die Größe der Teile verändern, allerdings bleibt der Gesamtwiderstand immer gleich groß. Durch den einstellbaren Teilwiderstand lässt sich zum Beispiel eine Lampe dimmen oder die Lautstärke eines Lautsprechers regulieren.
</div>

Zum Anschluss an den Arduino wird der mittlere Pin mit einem analogen Eingang verbunden, über den die Spannung am Teilwiderstand zwischen GND und dem analogen Eingang abgefragt werden kann. Die anderen beiden Pins müssen mit 5V und GND verbunden werden, wobei es egal ist, welcher Pin mit GND und welcher mit 5V verbunden wird.

<div class="flex-box">
<div markdown="1" class="flexible">![Anschluss des Potentiometers an den Arduino.](/circuits/potentiometer-schaltplan.png?lightbox=1024&resize=400&classes=caption "Anschluss des Potentiometers an den Arduino.")</div>
<div markdown="1" class="flexible">![Ersatzschaltplan für das Potentiometer.](/circuits/potentiometer-ersatzschaltplan.png?lightbox=1024&resize=400&classes=caption "Ersatzschaltplan für das Potentiometer.")</div>
</div>

Die Grundlagen des Potentiometers werden auch [im Kapitel Elektrische Grundlagen behandelt](../../elektrik/anwendungen-spannungsmessung#drehregler-verwenden).

Für das Potentiometer existiert ein vorkonfigurierter Block, über den man die Spannung am Teilwiderstand zwischen GND und dem analogen Eingang auslesen kann. Diese kann zwischen 0V (Teilwiderstand gleich null) oder 5V (Teilwiderstand gleich Gesamtwiderstand) bewegen. Alternativ kann das Potentiometer als analoger Sensor konfiguriert werden und der Analogwert im Programm abgefragt werden.

<div class="flex-box">
<div markdown="1">
![Konfiguration des Potentiometers](/images/poti-vorkonfiguriert.png)
![Konfiguration und Auslesen des Potentiometers mit vorkonfigurierten Blöcken.](/images/poti-befehl-vorkonfiguriert.png?classes=caption "Konfiguration und Auslesen des Potentiometers mit vorkonfigurierten Blöcken.")
</div>
<div markdown="1">
![Konfiguration des Potentiometers als analoger Sensor.](/images/poti-analoger-sensor.png)
![Konfiguration und Auslesen des Potentiometers als analoger Sensor. Dabei werden die Analogwerte genauso wie bei den vorkonfigurierten Blöcken in eine Spannung umgerechnet.](/images/poti-befehl-analoger-sensor.png?classes=caption "Konfiguration und Auslesen des Potentiometers als analoger Sensor. Dabei werden die Analogwerte genauso wie bei den vorkonfigurierten Blöcken in eine Spannung umgerechnet.")
</div>
</div>

<div markdown="1" class="projekt clearfix">
#### Dimmbare Lampe
![PWM-Analog-Diagramm](/images/pwm-analog-diagramm.png?resize=300&classes=caption,figure-right "Diagramm zur Ermittlung einer Funktion.")
Baue und programmiere eine Lampe, deren Helligkeit sich durch ein Potentiometer einstellen lässt.

*Hinweis:* Du musst dafür sorgen, dass der eingelesene Analogwert zwischen 0 und 1023 in einen PWM-Wert zwischen 0 und 255 umgerechnet wird. Ermittle dazu eine passende Funktion.
</div>

### Joystick

Joysticks werden bekanntermaßen für Spielecontroller oder auch zur Steuerung von Maschinen genutzt. Mit dem Arduino lassen sich einfache Versionen davon nachbauen.

<div markdown="1" class="clearfix">
![Joystick.](/images/joystick.jpg?resize=250&classes=caption,figure-right "Joystick.")
Ein Joystick besteht im Wesentlichen aus zwei Potentiometern, die über einen gemeinsamen Hebel variiert werden können. Wie im Schaltbild zu sehen, teilen sich beide den 5V- und GND-Anschluss; der mittlere Anschluss muss natürlich jeweils einzeln ausgelesen werden. Zusätzlich wird durch Drücken des Joysticks ein angebrachter Taster gedrückt, dessen Status am SW-Pin ausgelesen werden kann (*sw von engl. “switch”*). Da das elektrische Potential am SW-Pin normalerweise schwankt, sollte ein *Pullup*-Widerstand mit $R=1 \, k\Omega$ angebracht werden (vgl. Schaltbild).
</div>

<div class="flex-box">
<div markdown="1" class="flexible">![Anschluss des Joystick-Moduls an den Arduino.](/circuits/Schaltplan-Joystick.png?lightbox=1024&resize=500&classes=caption "Anschluss des Joystick-Moduls an den Arduino.")</div>
<div markdown="1" class="flexible">![Ersatzschaltplan für das Joystick-Modul.](/circuits/Schaltplan-Joystick-Ersatz.png?lightbox=1024&resize=300&classes=caption "Ersatzschaltplan für das Joystick-Modul.")</div>
</div>

*Programmierung:* Das Joystick-Modul ist in Nepo nicht vorkonfiguriert. Die Bestandteile, also die zwei Potentiometer und der Taster, lassen sich aber einzeln konfigurieren. Dies geht wahlweise mit den vorkonfigurierten Potentiometer- und Taster-Blöcken oder als analoger und digitaler Sensor.

<div markdown="1" class="aufgabe">
#### Erste Experimente

1.  Bewege den Hebel des Joystick-Moduls und beobachte, wie sich dabei die Potentiometer an den Seiten mitbewegen. Bringe auch den Plastikdeckel an, drücke den Joystick herunter und beobachte dabei das Verhalten des Tasters.
2.  Schließe das Joystick-Modul wie oben beschrieben an den Arduino an. Lies die Werte der Potentiometer aus, während du sie bewegst. Notiere, welche Bewegungsrichtung die X-Richtung und welche die Y-Richtung darstellt. Notiere außerdem, welches der beiden Potentiometer (ggü. von Taster oder ggü. der Pins) für die X-Richtung bzw. Y-Richtung verantwortlich ist.
3.  Mit dem Pullup-Widerstand wird eine sogenannte Active-Low Schaltung aufgebaut. Teste die Funktionsweise des Tasters, indem du das elektrische Potential in D3 ausliest und beschreibe, was mit dem Begriff Active-Low gemeint ist.
</div>

<div markdown="1" class="projekt">
#### Joystick-Motor-Steuerung

Steuere mit dem Joystick-Modul einen Schrittmotor!
</div>

!! **Achtung bei Verwendung von Motoren:** Spätestens, wenn mehr als ein Motor am Arduino betrieben werden soll, muss eine externe Spannungsquelle genutzt werden, zum Beispiel durch Anschluss einer 9 V-Batterie an das Power-Supply-Module. Schaue dir dazu noch einmal den [Infokasten zum Power Supply Module](https://doku.el-voss.de/de/arduinoskript/elektrik#das-power-supply-module) an.

### Infrarot-Sensor mit Fernbedienung

Jeder weiß, wie angenehm es ist, wenn man ein Gerät fernsteuern kann statt aufstehen zu müssen, um die angebrachten Knöpfe zu drücken. Eine einfache Möglichkeit dafür bietet eine Infrarot(IR)-Fernbedienung.

Wie am Namen zu erkennen, verwendet eine IR-Fernbedienung Infrarotstrahlen, die mit dem bloßen Auge nicht sichtbar sind. Hält man jedoch eine Digitalkamera, z. B. vom Smartphone, auf die Infrarot-LED der Fernbedienung und drückt eine Taste, dann kann man ein schnelles Aufblitzen erkennen. Am besten probierst du es selbst einmal aus oder schaust dir ein kurzes Video der IR-Strahlen (siehe unten) an. Das Aufblitzen zeigt, dass die Strahlen in einem bestimmten Rhythmus gesendet werden, aus dem sich entschlüsseln lässt, welche Taste gedrückt wurde.

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/ir-strahlen-fernbedienung.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>

Empfangen werden die Infrarotstrahlen von einem Infrarotsensor, der im Wesentlichen aus einer [Photodiode](https://de.wikipedia.org/wiki/Photodiode) besteht. Diese ist sehr ähnlich wie eine Leuchtdiode aufgebaut, allerdings funktioniert sie genau umgekehrt: Anhand eintreffender (infraroter) Lichtstrahlen wird ein Stromfluss ausgelöst, der dann registriert und weiter verarbeitet werden kann. Die Photodiode reagiert zwar am empfindlichsten auf infrarotes Licht bei einer Frequenz von $38 \, kHz$, allerdings auch (weniger stark) auf sichtbares Licht. Um dieses sichtbare Licht, insbesondere die Umgebungshelligkeit, wegzufiltern, befindet sich die Photodiode in einer schwarzen Kunstharzschicht.
<div class="flex-box">
<div markdown="1">![Infrarotsensor.](/images/ir-sensor.jpg?resize=300&classes=caption "Infrarotsensor.")</div>
<div markdown="1">![Infrarotsensor-Modul.](/images/ir-sensor-led-modul.png?resize=300&classes=caption "Infrarotsensor-Modul.")</div>
</div>
Häufig wird der Infrarotsensor zusammen mit einer LED und einem zugehörigen Vorwiderstand auf einer kleinen Platine ausgeliefert, damit das Empfangen eines Signals durch die LED angezeigt werden kann. Es sind aber auch Infrarotsensoren ohne weitere Anzeige im Umlauf.

<div class="flex-box">
<div markdown="1">![Schaltplan zum Anschluss eines Infrarotsensors am Arduino.](/circuits/schaltplan-ir-sensor.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum Anschluss eines Infrarotsensors am Arduino.")</div>
<div markdown="1">![Schaltplan zum Anschluss eines Infrarotsensormoduls mit LED-Anzeige am Arduino.](/circuits/schaltplan-ir-sensor-modul.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum Anschluss eines Infrarotsensormoduls mit LED-Anzeige am Arduino.")</div>
</div>

Der Anschluss an den Arduino ist einfach: GND und 5V dienen wie üblich der Stromversorgung. Der Signal-Pin S muss mit einem beliebigen PWM-Pin (mit $\sim$) verbunden werden. Die Pin-Belegung ist aber leider unterschiedlich; je nach dem, ob man ein Modul mit LED-Anzeige oder nur den Infrarotsensor anschließt.

Nachdem der IR-Sensor mit dem Arduino verbunden und in Nepo konfiguriert wurde, können die empfangenen Werte in Nepo abgefragt werden. Die Abbildung unten zeigt ein einfaches Beispiel, wie mit den Tasten 0 und 1 auf einer Infrarot-Fernbedienung die Board-LED des Arduino an- und ausgestellt werden kann. Wenn die Taste mehrere Aktionen auslösen soll (wie die Ausgabe des Codes auf dem seriellen Monitor und das Anschalten der LED), dann muss der Wert in einer Variable gespeichert werden.

![Einfaches Beispielprogramm zur Verwendung einer IR-Fernbedienung.](/images/ir-fernbedienung-auslesen.png?classes=caption "Einfaches Beispielprogramm zur Verwendung einer IR-Fernbedienung.")

<div markdown="1" class="aufgabe">
#### Codes kennen lernen

1.  Übertrage das oben abgebildete Programm auf den Arduino und probiere es aus.
2.  Erstelle eine Tabelle, in der du den Zahlencode für jede Taste festhälst. Probiere auch aus, was passiert, wenn du die Tasten länger gedrückt hälst.
</div>

<div markdown="1" class="projekt">
#### Fernsteuerung eines LED-Streifens

In vielen Bereichen werden LED-Streifen genutzt, um einen Raum mit passendem, indirektem Licht auszustatten. Die meisten LED-Streifen lassen sich über eine kleine Infrarot-Fernbedienung steuern, wodurch sich die Farbe, aber auch der Modus einstellen lässt - zum Beispiel eine einzelne Farbe, [Fading](https://doku.el-voss.de/de/arduinoskript/elektrik#fading), Strobe, …

<div class="video">
  <iframe
    class="video__iframe"
    data-src="https://www.youtube-nocookie.com/embed/1PUyE8QJuAw"
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

Das Prinzip lässt sich auf ein Lauflicht übertragen. Baue ein Lauflicht und programmiere verschiedene Lauflicht-Modi, die sich mit der Fernbedienung einstellen lassen.
</div>

### Temperatur- und Luftfeuchtigkeitssensor DHT-11

<div markdown="1" class="clearfix">
![DHT-11](/images/dht11.jpg?resize=250&classes=caption,figure-right "DHT-11.")
Bei vielen Umweltmessungen interessiert nicht nur die Temperatur, sondern auch die Luftfeuchtigkeit. Der Sensor DHT-11 ist ein einfaches, kleines Bauteil, mit dem sich beides messen lässt.
</div>

Der DHT-11 verfügt über drei Pins - 5V und GND dienen der Stromversorgung, während das Signal zu den Messdaten über den Signalpin ausgegeben wird. Für die Temperaturmessung ist auf dem DHT-11 ein NTC verbaut.

![Schaltplan zum DHT-11 am Arduino.](/circuits/Schaltplan-DHT11.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum DHT-11 am Arduino.")

Das Auslesen des Signalpins ist einfach, weil der DHT-11 in der Konfiguration bereits implementiert wurde, sodass man nur noch den Signalpin angeben muss. Das Signal wird dann automatisch analysiert und decodiert, um anhand der entsprechenden Befehle auf die übermittelte Temperatur bzw. Luftfeuchtigkeit zuzugreifen. Die Größe kann über das Drop-Down-Menü ausgewählt werden.

![Temperatur auslesen](/images/dht-gibTemperatur.png)
![Luftfeuchtigkeit auslesen](/images/dht-gibLuftfeuchtigkeit.png)

<div markdown="1" class="projekt">
#### Wetterstation
Baue eine kleine Wetterstation, die alle zehn Minuten Temperatur und Luftfeuchtigkeit misst und auf dem seriellen Monitor ausgibt.
</div>

! **Recherche: Wie wird die Luftfeuchtigkeit gemessen?**
! Mit dem DHT-11 lässt sich die relative Luftfeuchtigkeit bestimmen. Recherchiere, was darunter zu verstehen ist, und wie diese durch ein elektrisches Bauteil gemessen wird.

### Temperatursensor TMP36

Bei deinen Temperaturmessungen mit einem NTC oder dem DHT-11 (in dem auch ein NTC verbaut ist), hast du vielleicht festgestellt, dass die Bauteile nicht besonders genau arbeiten. Für professionellere Anwendungen benötigt man eine wesentlich höhere Genauigkeit. Hier kann der TMP36 helfen: Er hat eine Genauigkeit von $\pm 1 \, °C$ und kann Temperaturen in einem Bereich von $-40 \, °C$ bis $125 \, °C$ zuverlässig messen. Die Messung der Temperatur erfolgt über die Messung einer temperaturabhängigen Spannung. Bei $0 \, °C$ beträgt die Spannung $500 \, mV$ (ein sogenannter *Offset*).

<div class="flex-box">
<div markdown="1"> ![Temperatursensor TMP36.](/images/tmp36.jpg?resize=200&classes=caption "Temperatursensor TMP36.")
</div>
<div markdown="1"> ![Pinbelegung des TMP35 (Blick auf die flache Seite).](/images/tmp36-pinbelegung.png?resize=200&classes=caption "Pinbelegung des TMP36 (Blick auf die flache Seite).")</div>
</div>

!! **Achtung:** Es besteht Verwechslungsgefahr mit dem Transistor! Achte daher genau auf die Aufschrift!

Ein weiterer Vorteil des TMP36 ist, dass die Abhängigkeit von ausgegebener Spannung und Temperatur linear verläuft: Eine Temperaturänderung von $1 \, °C$ entspricht immer einer Spannungsänderung von $10 \, mV$.

<div markdown="1" class="aufgabe">
#### Vergleich von Kennlinien

Ein linearer Zusammenhang zwischen der gemessenen Größe (oft eine Spannung) und der gesuchten Größe (hier die Temperatur) gilt als vorteilhaft, ein exponentieller Zusammenhang dagegen als nachteilig. Begründe anhand der unten abgebildeten Skizzen von Kennlinien, warum ein linearer Zusammenhang besser ist.

*Beachte: Jede Messung ist mit einem Fehler versehen!*
<div class="flex-box">
<div markdown="1">![Lineare Kennlinie](/images/u-t-lineare-kennlinie.png?classes=caption "Lineare Kennlinie.")</div>
<div markdown="1">![Exponentielle Kennlinie](/images/u-t-exponentielle-kennlinie.png?classes=caption "Exponentielle Kennlinie.")</div>
</div>
</div>

<div markdown="1" class="projekt">
#### Präzises Thermometer

1.  Baue ein präzises Thermometer mit den vorkonfigurierten Nepo-Blöcken für den TMP36.
2.  Baue ein präzises Thermometer und konfiguriere den TMP36 als analogen Sensor.
    
    *Tipp:* Zur Berechnung der Temperatur musst du zuerst den eingelesenen Analogwert in eine Spannung umrechnen. Um aus der Spannung die Temperatur zu berechnen, musst du die oben angegebenen Informationen noch einmal genau lesen. Zur Kontrolle: Die maximal mögliche Spannung am Signalpin beträgt $2 \, V$, was einer Temperatur von $150 \, °C$ entspricht.
</div>

### Tropfensensor und Feuchtigkeitssensor

Mit einem Tropfensensor lässt sich die Feuchtigkeit auf dem Sensorblatt messen. Solche Sensoren werden zum Beispiel in Windschutzscheiben von Autos eingesetzt, um die Scheibenwischer und ihre Geschwindigkeit zu steuern. Feuchtigkeitssensoren funktionieren im Wesentlichen genauso, allerdings sind die Kontakte dabei so weit auseinander, dass durch Tropfen noch kein Stromfluss entsteht, sondern erst durch zum Beispiel die feuchte Erde eines Blumentopfes, der automatisch bewässert werden soll.

<div class="flex-box">
<div markdown="1">![Tropfensensor.](/images/tropfensensor.jpg?resize=300&classes=caption "Tropfensensor.")</div>
<div markdown="1">![Feuchtigkeitssensor.](/images/feuchtigkeitssensor.jpg?resize=300&classes=caption "Feuchtigkeitssensor.")</div>
</div>

Der Anschluss an den Arduino ist in beiden Fällen einfach: + an 5V, - an GND und der Signalpin S an einen analogen Eingang A[0-5]. Am Signalpin wird eine Spannung (als Analogwert im analogen Eingang) gemessen, die im trockenen Zustand bei $0 \, V$ (0) liegt und bis zu $5 \, V$ (1023) steigen kann.

<div markdown="1" class="aufgabe">
#### Theorie: Wie kann man Feuchtigkeit messen?

Das grundlegende Prinzip eines Tropfensensors/Feuchtigkeitssensors ist einfach: Je nasser/feuchter es ist, desto besser der Strom durch die feuchte Stelle fließen. Der Arduino kann aber nur eine Spannung messen (als Analogwert) - wie bekommt man diese Umwandlung hin?

Erkläre anhand des unten abgebildeten Schaltplans eines Tropfensensors, wie die Feuchtigkeit auf den Kontakten des Sensorblatts am Signalpin S (analoger Eingang zur Spannungsmessung) gemessen werden kann.

*Tipp:* Zentral ist der Transistor J3Y, der mit seinen drei Kontakten auf dem Sensor gut erkennbar ist. Die Status-LED mit Vorwiderstand kann dagegen vernachlässigt werden.

<div class="flex-box">
<div markdown="1" class="flexible">![Schaltplan eines Tropfensensors.](/circuits/tropfensensor-ersatz.png?lightbox=1024&resize=500&classes=caption "(Ersatz-)Schaltplan für einen Tropfensensor.")</div>
<div markdown="1" class="flexible">![Pinbelegung des Transistors J3Y auf dem Tropfen- und dem Feuchtigkeitssensor.](/images/j3y-pinbelegung.png?resize=150&classes=caption "Pinbelegung des Transistors J3Y.")</div>
</div>
</div>

<div markdown="1" class="projekt">
#### Automatischer Scheibenwischer

Baue einen Scheibenwischer, der automatisch startet, wenn Feuchtigkeit registriert wird. Je nach Feuchtigkeitslevel soll eine von drei Geschwindigkeiten ausgewählt werden.

*Hinweis: Du kannst die vorkonfigurierten Blöcke von Nepo für den Tropfensensor verwenden oder einen analogen Sensor konfigurieren, dessen Analogwert du selbst in einen Prozentwert umrechnest (0 entspricht 0 %, 1023 entspricht 100 %).*
</div>

### Pulssensor

<div markdown="1" class="clearfix">
![Pulssensor.](/images/pulssensor.jpg?resize=250&classes=caption,figure-right "Rückseite eines Pulssensors.")
Aktivitätstracker mit Pulsmessung liegen voll im Trend - aber wie funktioniert so ein Pulssensor eigentlich? Das lässt sich am einfachsten verstehen, wenn man selber einen nachbaut. Weitere Anwendungsmöglichkeiten wären übrigens Lügen-/Angstdetektoren, Schlafanalyse oder ein Alarmsystem für Risikopatienten.
</div>
Der Anschluss an den Arduino ist einfach: + an 5V, - an GND, der Signalpin S an einen analogen Eingang A[0-5]. Am Signalpin liegt eine Spannung an, die sich im Rhythmus des Herzschlags verändert und am analogen Eingang des Arduino gemessen werden kann. Dies lässt sich mit dem seriellen Plotter der Arduino IDE veranschaulichen (siehe Abbildung unten). Man erkennt, dass die gemessenen Analogwerte zwischen ca. 500 und ca. 535, also in einem relativ kleinen Bereich, schwanken (35 bzw. $0,171 \, V$).

![Visualisierung von gemessenen Analogwerten zur Bestimmung des Pulses.](/images/pulsmessung-serieller-plotter.png?lightbox=1024&classes=caption "Visualisierung von gemessenen Analogwerten zur Bestimmung des Pulses.")

Als Kriterium für einen Herzschlag könnte man festlegen, dass der Analogwert über 520 liegt. Diese Werte sind jedoch wenig stabil und schwanken je nach Person und Umgebung! Man sollte unbedingt darauf achten, dass die Haut nicht verschwitzt ist und keine Bauteile auf dem Sensor berührt werden (insbesondere auf der Rückseite), damit die Ergebnisse einigermaßen zuverlässig sind. Wenn sich auf dem Arm keine brauchbaren Werte einstellen, lohnt sich ein Versuch auf dem Ringfinger oder dem Ohrläppchen.

Der Pulssensor kann mit den vorkonfigurierten Blöcken von Nepo oder direkt als analoger Sensor eingelesen werden. Im Hintergrund passiert das Gleiche.

<div markdown="1" class="aufgabe">
#### Theorie: Wie wird der Puls gemessen?

Für die Messung des Pulses ist die grüne LED und ein Lichtsensor zentral. Erkläre anhand der schematischen Abbildungen unten das Prinzip der optischen Pulsmessung.
<div class="flex-box">
<div markdown="1">![Pulssensor-Funktionsprinzip 1](/images/pulssensor-prinzip1.png?lightbox=512)</div>
<div markdown="1">![Pulssensor-Funktionsprinzip 2](/images/pulssensor-prinzip2.png?lightbox=512)</div>
<div markdown="1">![Pulssensor-Funktionsprinzip 3](/images/pulssensor-prinzip3.png?lightbox=512)</div>
</div>
</div>

<div markdown="1" class="projekt">
#### Pulsmesser
Baue einen Pulsmesser, der anhand der Messwerte von 10 Sekunden den Puls (Herzschläge pro Minute) berechnet.

*Hinweis: Es kann nötig sein, sich die Werte von einem seriellen Plotter visualisieren zu lassen, um einen Eindruck vom Wertebereich und von der Grenze für die Herzschlagerkennung zu bekommen. Klappe dafür die Anleitung unter diesem Projekt aus.*
</div>

<details class="details">
<summary class="details__trigger details__title">Visualisierung mit dem Seriellen Plotter der Arduino IDE</summary>
<div class="details__content" markdown="1">
**0.** Vorbereitung: Damit überhaupt Werte über den seriellen Port (USB) übermittelt werden, erstelle ein Programm in Open Roberta, das fortlaufend den aktuellen Wert des Pulssensors auf den seriellen Monitor schreibt und übertrage es auf den Arduino.

**1.** Der Serielle Plotter ist in die Arduino IDE eingebaut, die genutzt wird, um den Arduino textbasiert zu programmieren. [Lade die Arduino IDE herunter](https://www.arduino.cc/en/software) und installiere sie.

**2.** Öffne die Arduino IDE. Zuerst muss der Arduino verbunden werden. Wähle dazu in der oberen Leiste *Werkzeuge* > *Board: Arduino Uno* und wähle unter *Werkzeuge* > *Port* den Port aus, an dem der Arduino angegeben wird (siehe unten).

![Verbinden eines Arduino mit der Arduino IDE](/images/arduino-ide-plotter-oeffnen.png)

**3.** Öffne den Seriellen Plotter unter *Werkzeuge* > *Serieller Plotter*. Das Koordinatensystem wird automatisch an die vom Arduino übermittelten Werte angepasst. Falls keine Werte angezeigt werden, dann kontrolliere, ob die Baud-Rate (unten links) auf 9600 eingestellt ist.

![Serieller Plotter der Arduino IDE.](/images/arduino-ide-plotter-baud.png?resize=600)

</div>
</details>

### Ultraschallsensor

<div markdown="1" class="clearfix">
![Ultraschallsensor am Auto.](/images/ultraschallsensor-am-auto-qn.jpg?resize=250&rotate=90&classes=caption,figure-right "Ultraschallsensor am Auto.")
Ultraschallsensoren ermöglichen die berührungslose Messung eines Abstands zwischen dem Sensor und dem nächstgelegenen Gegenstand. Dies macht sie zu einer interessanten Ausrüstung für Staubsaugerroboter, die nicht gegen die Wand fahren sollen, oder Einparkhilfen im Auto, die dem Fahrer anzeigen sollen, wie viel Platz er noch hat.
</div>

Die wichtigsten Bestandteile des Ultraschallsensors sind der “Transducer” (**T**) und der “Receiver” (**R**). Der Transducer ist praktisch ein Lautsprecher, der für uns nicht hörbare Schallwellen aussendet. Der Receiver entspricht einem Mikrofon für Schallwellen. Die Schallwellen werden also vom Transducer ausgesendet, an einem Hindernis reflektiert und vom Receiver empfangen.

![Funktionsprinzip eines Ultraschallsensors.](/images/ultraschall-sensor-prinzip.png?classes=caption "Funktionsprinzip eines Ultraschallsensors.")

Der Ultraschallsensor verfügt über vier Pins. GND und VCC (5 V) sind wie üblich zu belegen und dienen der Energieversorgung. Der Trigger-Pin dient dazu, einen Ultraschallpuls auszusenden - wird er für 10 Mikrosekunden auf ein HIGH-Potential gebracht, wird der Ultraschallpuls getriggert. Wenn dies geschieht, wird der Echo-Pin von der Elektronik des Sensors auf ein HIGH-Potential gebracht, das so lange anhält, bis der Receiver die reflektierte Schallwelle empfängt. Trigger-Pin und Echo-Pin können beide mit einem beliebigen Digitalpin am Arduino verbunden werden.

Die Zeit, die der Echo-Pin auf HIGH liegt, gibt also an, wie lange der Schall braucht, um vom Sensor zum Hindernis und zurück zu gelangen. Mit Hilfe der Schallgeschwindigkeit wird dann berechnet, welche Strecke der Schall zurückgelegt hat. Diese Berechnungen werden praktischerweise von den vorkonfigurierten Nepo-Blöcken übernommen, sodass man direkt die Strecke erhält.

<div class="flex-box">
<div markdown="1">![ultraschallsensor-konfiguration](ultraschallsensor-konfiguration.png?classes=caption "Konfigurationsblock des Ultraschallsensors mit den Standardeinstellungen.")</div>
<div markdown="1">![gib-Abstand-Befehl](/images/gibEntfernung.png?classes=caption "Programmblock zur Abfrage der Entfernung in Zentimetern.")</div>
</div>

<div markdown="1" class="projekt">
#### Einparkhilfe für ein Auto

Baue eine Einparkhilfe für ein Auto, die umso schneller piepst, je näher man dem Hindernis kommt. Ab einer Entfernung von 30 cm soll der Ton durchgängig ertönen.
</div>

! **Recherche: Wie wird Ultraschall erzeugt und gemessen?**
! Die Erzeugung des Ultraschalls beruht wie beim Piezo-Summer auf dem inversen piezo-elektrischen Effekt (vgl. [Piezo-Summer](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen/entscheidungen-und-serieller-monitor#piezo-summer)); die Messung des Ultraschalls beruht auf dem piezo-elektrischen Effekt. Recherchiere im Internet die Hintergründe dieser Effekte und fasse sie zusammen.

### RFID

<div markdown="1" class="clearfix">
![RFID-Sender und -Empfänger](/images/rfid.jpg?resize=250&classes=caption,figure-right "RFID-Empfänger (rechts) mit blauem RFID-Sender (links).")
Mit RFID-Chips (***r**adio **f**requency **id**entification*) lässt sich ein digitaler Schlüssel bauen, um zum Beispiel Türen abzusichern. Der RFID-Empfänger sendet über die rechteckige Spule Radiowellen, welche Energie transportieren. Diese empfängt der RFID-Sender (blauer Chip oder auch weiße Karte), woraufhin er seine eizigartige ID zurücksendet. Diese wird wiederum von der Rechteckspule empfangen und elektronisch so aufbereitet, dass man am Arduino die ID lesen kann.
</div>

Die Verbindung mit dem Arduino erfolgt über ein *Serial Peripheral Interface (SPI)* (weitere Informationen unten), weshalb die meisten Pins am Arduino festgelegt sind (siehe unten). Der RST-Pin und der SDA-Pin lassen sich ggf. noch ändern. Wichtig: Der Mikrocontroller auf dem RFID-Chip arbeitet mit einem Logiklevel von $3,3 \, V$ und würde durchbrennen, wenn man ihn an 5 V anschließt. Der Arduino verfügt direkt neben dem 5 V-Anschluss auch über einen 3,3 V-Anschluss. Der IRQ-Pin des RFID-Empfängers wird nicht benötigt und kann ignoriert werden.

<div class="flex-box">
<div markdown="1" class="flexible">![RFID-Konfigurationsblock.](/images/rfid-konfiguration.png?classes=caption "RFID-Konfigurationsblock.")</div>
<div markdown="1" class="flexible">
![RFID-Block zur Prüfung der Anwesenheit.](/images/rfid-gibAnwesenheit.png?classes=caption "RFID-Block zur Prüfung der Anwesenheit.")
![RFID-Block zum Erhalten der ID.](/images/rfid-gibID.png?classes=caption "RFID-Block zum Erhalten der ID.")
</div>
</div>

Zur Programmierung kann man die bloße Anwesenheit eines RFID-Senders abfragen oder die ID eines RFID-Senders. Die Anwesenheitsabfrage unterscheidet nicht, welcher RFID-Sender anwesend ist, sie liefert also bei *jedem* RFID-Sender `true` zurück. Sinnvoller ist also in den meisten Fällen die Abfrage der einzigartigen ID des RFID-Senders, um diese abspeichern und im nächsten Programm darauf reagieren zu können. Ein Beispielprogramm zeigt die folgende Abbildung.

![Beispielprogramm zum Auslesen eines RFID-Senders in Form einer weißen Karte.](/images/rfid-bsp.png?classes=caption "Beispielprogramm zum Auslesen eines RFID-Senders in Form einer weißen Karte.")

!! *Fehlerquellen:* Bei der Programmierung gibt es zwei Fehlerquellen zu beachten, die man möglichst vermeiden sollte:
!! 
!!   - Werden die Befehle `gib ID` und `gib Anwesenheit` kurz hintereinander verwendet, wird der zweite Befehl nicht funktionieren, weil dazu (durch die Implementierung im Hintergrund) immer eine neue Karte erkannt werden muss.
!!   - Für den Vergleich von vorgegebener ID und eingelesener ID muss für beide eine Variable vom Typ Zeichenkette angelegt werden, damit Nepo keinen Fehler anzeigt. Das unten abgebildete Beispiel erzeugt also einen Fehler. (Hintergrund: Wenn die vorgegebene ID nicht als Zeichenkette (String) definiert wird, wird sie als sogenanntes Character-Array behandelt. Da die eingelesene ID aber vom Typ String ist, sollen sozusagen Äpfel mit Birnen verglichen werden.)
!!     
!!     ![Der Vergleich von vorgegebener ID und eingelesener ID erzeugt hier einen Fehler.](/images/rfid-fehler-vgl-chararray-mit-string.png?classes=caption "Der Vergleich von vorgegebener ID und eingelesener ID erzeugt hier einen Fehler.")

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

### Beschleunigungssensor oder Lagesensor

Beschleunigungssensoren oder Lagesensoren tauchen in zig verschiedenen Geräten auf:
- In Autos messen sie die Beschleunigung und regeln das Auslösen der AirBags, 
- in Digitalkameras dienen sie zur Bildstabilisierung, 
- in Tablets und Smartphones lösen sie das Drehen des Bildschirms aus, wenn das Gerät gedreht wurde, 
- oder sie dienen zum Steuern eines Spiels auf dem Smartphone. 

Auch mit dem Arduino lassen sich interessante Dinge mit Beschleunigungssensoren bauen. Verwendet wird hier das Modul GY-61, auf dem der Beschleunigungssensor ADXL335 verbaut ist. Da der ADXL335 mit einem Pegel von 3V arbeitet, befindet sich auf der kleinen Platine zusätzlich ein Spannungsregler, der die 5V vom Arduino auf 3V für den ADXL335 herunterregelt. Zusätzlich ist ein kleines Koordinatensystem auf der Platine gezeichnet, das angibt, in welchen Richtungen die Beschleunigung gemessen wird. Die z-Achse verläuft dabei senkrecht zur Platine nach unten, wenn man auf das Koordinatensystem schaut. Dies ist erkennbar an dem Kreis mit einem Kreuz darin - als Eselsbrücke kann man sich einen Dartpfeil vorstellen, dessen gekreuzte Federn man von hinten sieht, wenn er von einem weg zeigt.

<div class="flex-box">
<div markdown="1">![Modul GY61 mit dem Beschleunigungssensor ADXL335 von oben.](/images/beschleunigungssensor-gy61-oben.jpg?resize=300&classes=caption "Modul GY61 mit dem Beschleunigungssensor ADXL335 von oben.")</div>
<div markdown="1">![Modul GY61 mit dem Beschleunigungssensor ADXL335 von unten.](/images/beschleunigungssensor-gy61-unten.jpg?resize=300&classes=caption "Modul GY61 mit dem Beschleunigungssensor ADXL335 von unten.")</div>
</div>

Der ADXL335 gibt für die Beschleunigungen $a_x$ in x-Richtung, $a_y$ in y-Richtung und $a_z$ in z-Richtung jeweils eine Spannung aus, die [laut Datenblatt des ADXL335 (S. 10)](https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL335.pdf) proportional zur Beschleunigung ist. Am Arduino kann diese Spannung über die analogen Eingänge A0 bis A5 gemessen werden. Wenn die Schaltung wie im folgenden Schaltplan erfolgt, dann müssen im Open Roberta Lab drei analoge Sensoren für A0, A1 und A2 angelegt werden, deren Werte als Analogwerte ausgelesen werden.

<div class="flex-box">
<div markdown="1">![Schaltplan zum Beschleunigungsmodul GY-61 am Arduino.](/circuits/beschleunigungssensor-am-arduino.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum Beschleunigungsmodul am Arduino.")</div>
<div markdown="1">![konfiguration-beschleunigungssensor](konfiguration-beschleunigungssensor.png?resize=300&classes=caption "Konfiguration des Beschleunigungssensor entsprechend des links abgebildeten Schaltplans.")</div>
</div>

<div markdown="1" class="aufgabe">
#### Erste Experimente mit dem Beschleunigungssensor

1. Schließe den Beschleunigungssensor wie oben beschrieben am Arduino an, konfiguriere drei analoge Sensoren im Open Roberta Lab für die drei Beschleunigungen und lasse deren analogen Werte auf dem seriellen Monitor ausgeben. Beobachte die Werte, während du die Platine auf unterschiedliche Arten beschleunigst (Anheben, Schütteln, Drehen, ...).
2. Die Abbildung unten zeigt die Analogwerte, während sich der Beschleunigungssensor in Ruhe befindet. Begründe, warum der Analogwert für die Beschleunigung in z-Richtung größer als die anderen beiden ist.

![Analogwerte für die Beschleunigung in x-, y- und z-Richtung bei ruhendem Beschleunigungssensor.](/images/analogwerte-ruhend.png?lightbox=1024&resize=500&classes=caption "Analogwerte für die Beschleunigung in x-, y- und z-Richtung bei ruhendem Beschleunigungssensor.")

3. Die drei Spannungen und damit die Analogwerte, die in A0, A1 und A2 gemessen werden, sind proportional zur Beschleunigung. Ermittle mit Hilfe der Beobachtung aus Schritt 2 einen funktionalen Zusammenhang $a_z(w)$ für die Berechnung der Beschleunigung $a_z$ in Abhängigkeit vom Analogwert $w$. Ermittle auch eine Formel für $a_x$ und $a_y$. 
</div>

<div markdown="1" class="aufgabe">
#### Mathematischer Exkurs: Berechnung der Gesamtbeschleunigung

Nach Abzug der Analogwerte, die für die Beschleunigung 0 stehen, erhält man drei Analogwerte für die Beschleunigung in x-Richtung, y- Richtung und z-Richtung. Diese lassen sich mathematisch als dreidimensionaler Vektor auffassen, dessen Betrag bzw. Länge berechnet werden kann, um (einen Analogwert für) die Gesamtbeschleunigung zu erhalten.

1. Leite die Formel zur Berechnung der Länge eines dreidimensionalen Vektors anhand der folgenden Skizze her oder recherchiere sie. Ermittle damit eine Formel für einen Analogwert für die Gesamtbeschleunigung.
![Skizze für die Herleitung der Formel für die Länge des Beschleunigungsvektors.](/images/beschleunigungsvektor.png?lightbox=1024&resize=800&classes=caption "Skizze für die Herleitung der Formel für die Länge des Beschleunigungsvektors. In blau sind die Komponenten ax, ay und az des Beschleunigungsvektors eingetragen. Die gesuchte Länge ist die rot markierte Diagonale. Die Bestimmung der Länge der orange markierten Diagonale wird hilfreich sein.")
2. Ermittle mit den Formeln für die Beschleunigungen $a_x$, $a_y$ und $a_z$ (aus Schritt 3 der vorherigen Aufgabe) eine Formel für die Gesamtbeschleunigung.  
</div>

<div markdown="1" class="projekt">
#### Musikbox für Kinder

Entwickle eine Musikbox für Kinder mit einem einfachen Bedienkonzept: Um das nächste Lied abspielen zu lassen, muss man sie schütteln.

*Vorlage:* Du kannst das folgende Programm herunterladen und im Open Roberta Lab importieren, um es als Vorlage zu nutzen: <a href="/p-templates/beschleunigungssensor-vorlage.xml" download><i class="fa fa-download" aria-hidden="true"></i> beschleunigungssensor-vorlage.xml</a>. Du findest darin eine Funktion "gibBeschleunigung", die die Gesamtbeschleunigung (vgl. mathematischen Exkurs oben) für dich berechnet.

*Mögliche große Erweiterung:* Nutze eine RFID-Karte als CD. Je nachdem, welche RFID-Karte erkannt wird, werden andere Lieder abgespielt. *Diese Idee wird auch beim [Tonuino-Projekt](https://www.voss.earth/tonuino/) genutzt!*
</div>

<div markdown="1" class="projekt">
#### Schrittzähler

Entwickle einen Schrittzähler!

*Hinweise und Tipps:*
- Wenn du an einem Laptop arbeitest, kannst du den Arduino und das Steckbrett auf dem Laptop platzieren, während du durch die Gegend läufst und auf dem seriellen Monitor Werte sammelst.
- Überlege, welche der drei Beschleunigungen $a_x$, $a_y$ und $a_z$ am aussagekräftigsten ist. Konzentriere dich auf diese Beschleunigung.
- Ein Kriterium für einen Schritt lässt sich am besten anhand eines grafischen Verlaufs der Werte finden. Um diesen zu erhalten, gehe folgendermaßen vor:
   - Sende die Beschleunigungswerte an den seriellen Monitor.
   - Um die Messung zu beenden, ziehe das USB-Kabel vom Arduino heraus.
   - Kopiere die Werte aus dem seriellen Monitor in eine neue Textdatei, z. B. "schritte.csv".
   - Ggf. müssen aus den Punkten noch Kommata gemacht werden. Nutze dafür die Funktion "Suchen und Ersetzen". Unter Windows und Linux lässt sich dies mit der Tastenkombination Strg + F starten.
   - Öffne eine Tabellenkalkulation und darin den Reiter "Daten". Importiere die Textdatei.
   - Erzeuge aus den Daten ein Diagramm, z. B. ein Liniendiagramm.
</div>

### Analoger Hall-Sensor (Magnetfeldsensor)

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
<div markdown="1">![Hall-Sensor.](/images/hall-a3124-lua-t.jpg?resize=150&classes=caption "Hall-Sensor.")</div>
<div markdown="1">![Hall-Sensor auf Platine.](/images/hall-ky-035.jpg?resize=150&classes=caption "Hall-Sensor auf Platine.")</div>
</div>

Sensor und Modul verfügen über drei Pins, die beim Arduino an 5V, GND und einen analogen Eingang (A0 bis A5) angeschlossen werden, wie der Schaltplan unten zeigt.

<!-- Schaltplan -->
![Schaltplan zum Anschluss des Hall-Sensor-Moduls an den Arduino.](/circuits/hall-ky-035-an-arduino.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum Anschluss des Hall-Sensor-Moduls KY-035 an den Arduino. Falls der Hall-Sensor AH49E ohne das Modul angeschlossen werden soll, istzu beachten, dass die Reihenfolge von VCC und GND auf der Platine vertauscht wird. Beim AH49E ohne Platine ist der GND-Pin dementsprechend in der Mitte.")

Die Verbindung mit 5V (Pluspol) und GND (Minuspol) sorgt für den Stromfluss durch den Hall-Sensor. Wenn sich der Hall-Sensor in einem Magnetfeld befindet, dann entsteht in ihm eine sogenannte *Hall-Spannung*, die im Hall-Sensor noch weiter verstärkt und stabilisiert wird. Am Signalpin S kann man diese Spannung (gegenüber GND) messen, indem man ihn an einen analogen Eingang am Arduino anschließt.

<!-- Ersatzblockbild zur Spannung mit gemeinsamen Minuspol -->
![Vereinfachtes Blockdiagramm für den Aufbau des Hall-Sensors.](/circuits/hall-blockdiagramm-vereinfacht.png?lightbox=1024&resize=500&classes=caption "Vereinfachtes Blockdiagramm für den Aufbau des Hall-Sensors. Der Stromfluss durch das Hallplättchen geht von unten nach oben. Die Hall-Spannung, die links und rechts am Hall-Sensor anliegt, wird mit GND zusammengeführt, sodass die Spannung stets gegenüber GND als Nullniveau gemessen wird.")

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
![Blöcke für die Berechnung und Ausgabe der Spannung am analogen Eingang.](/images/spannung-einlesen-programmbloecke.png?lightbox=1024&resize=800&classes=caption "Blöcke für die Berechnung und Ausgabe der Spannung am analogen Eingang.")
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


### Digitaler Hall-Sensor (Magnetfeldsensor)

Bei einem digitalen Hall-Sensor wird das analoge Signal eines Hall-Sensors durch weitere Elektronik so weiterverarbeitet, dass bei der Ausgabe nur noch zwischen *Magnetfeld bzw. Magnet anwesend* und *Magnetfeld bzw. Magnet nicht anwesend* unterschieden wird. Dies ist in vielen Anwendungsfällen das Einzige, was wirklich interessiert: So lässt sich damit feststellen, ob der Gurt eines Autos angelegt wurde oder es lässt sich messen, wie oft sich ein Motor oder ein Reifen gedreht hat. Letzteres lässt sich bei Autos oder Fahrrädern nutzen, um aus der Drehzahlmessung die Geschwindigkeit errechnen.
<!-- Bild von Fahrrad -->

<div class="flex-box">
<div markdown="1">![Hall-Sensor am Fahrrad.](/images/hall-an-fahrrad.png?lightbox=1024&resize=300&classes=caption "Hall-Sensor am Fahrrad.")</div>
<div markdown="1">![Hall-Sensor A3144 auf Platine.](/images/hall-digital-ky-003.jpg?lightbox=1024&resize=300&classes=caption "Digitales Hall-Sensor-Modul KY-003 mit dem Hall-Sensor A3144.")</div>
</div>

Es gibt verschiedene Hall-Sensoren - in diesem Kurs verwenden wir das Hall-Sensor-Modul KY-003, auf dem der Hall-Sensor A3144 zusammen mit einer LED und einem zugehörigen Widerstand verbaut ist.

!! *Achtung:* Hall-Sensoren können leicht mit Transistoren verwechselt werden! Achte genau auf die Aufschrift auf dem schwarzen Kästchen und hole ggf. eine Lupe, um zu erkennen, ob es sich um einen Transistor, einen analogen Hall-Sensor oder einen digitalen Hall-Sensor handelt.

Unten ist der Schaltplan zum Anschließen an den Arduino abgebildet.
<!-- Bild von Modul und Bild von Schaltplan -->
![Schaltplan zum Anschluss des Hall-Sensor-Moduls KY-003 an den Arduino.](/circuits/hall-ky-003-an-arduino.png?lightbox=1024&resize=500&classes=caption "Anschluss des Hall-Sensor-Moduls KY-003 am Arduino. Falls der darauf verwendete Hall-Sensor A3144 ohne das Modul angeschlossen werden soll, ist darauf zu achten, dass VCC und GND auf der Platine vertauscht werden. Beim A3144 ist GND in der Mitte.")

Der Hall-Sensor ist nicht im Open Roberta Lab vorkonfiguriert. Er lässt sich aber einfach als *digitaler Sensor* in der Roboterkonfiguration angeben. Mit dem Befehl `gib <digitalen> Wert Sensor <S>` erhält man dann den Rückgabewert `0` (Spannung von 0V bzw. Potential `LOW`) oder den Rückgabewert `1` (Spannung von 5V bzw. Potential `HIGH`).

<div markdown="1" class="aufgabe">
#### Funktionstest des Hall-Sensor-Moduls

1. Schließe das Hall-Sensor-Modul wie beschrieben an den Arduino an, konfiguriere es als digitalen Sensor und lasse die Werte auf dem seriellen Monitor ausgeben.
2. Experimentiere mit verschiedenen Magneten, ab wann das Signal umschaltet. Welche Ausgabe erfolgt ohne und welche mit Anwesenheit eines Magnetfeldes?
</div>

<div markdown="1" class="aufgabe">
#### Hysterese

Laut [Datenblatt des Hall-Sensors A3144](https://pdf1.alldatasheet.com/datasheet-pdf/view/55092/ALLEGRO/A3144.html) verfügt dieser über eine sogenannte *Hysterese*. Das bedeutet, dass der Wechsel von `HIGH` zu `LOW` bei einer anderen Magnetfeldstärke passiert als der Wechsel von `LOW` zu `HIGH`. Unten wird dies graphisch dargestellt.

<!-- Graph von Geogebra -->
<figure class="image-caption">
   <img title="Graph zur Hysterese des Hall-Sensors." alt="Graph zur Hysterese des Hall-Sensors." class="caption" src="/user/pages/images/hall-digital-hysterese.png">
   <figcaption class="" markdown="1">Schematische Darstellung der Hysterese des A3144 am Arduino. Der rote Graph stellt den Wechsel von HIGH zu LOW dar, wenn die magnetische Flussdichte zunimmt. Der blaue Graph stellt den Wechsel von LOW zu HIGH dar, wenn die magnetische Flussdichte wieder kleiner wird. Die Werte für $B_{OP}, B_{RP}, B_{hys}$ und $U_{HIGH}, U_{LOW}$ im Diagramm wurden vom Autor beim Anschluss an einen Arduino mit $VCC = 5V$ mit einfachen Mitteln gemessen und schwanken. Sie stellen daher nur einen ungefähren Anhaltspunkt dar.</figcaption>
</figure>

Die Begriffe werden im Datenblatt auf S. 2 folgendermaßen erklärt:

| Größe | Erklärung |
|---|---|
| $B_{OP}$ | *operate point (ouput turns ON)* |
| $B_{RP}$ | *release point (ouput turns OFF)* |
| $B_{hys}$ | *hysteresis* ($B_{OP}-B_{RP}$) |

1. Erkläre anhand des Diagramms oben in eigenen Worten die Bedeutung der drei Größen und gib ihren jeweiligen Wert an.

2. Begründe anhand eines Signals für die magnetische Flussdichte $B$, das um den Wert $B \approx 9mT$ schwankt, warum es sinnvoll ist, dass der Hall-Sensor über eine Hysterese verfügt.
</div>

<div markdown="1" class="projekt">
#### Fahrradtacho

Mit dem digitalen Hall-Sensor kann man registrieren, wann der Reifen eines Fahrrads eine Umdrehung ausgeführt hat (siehe Bild am Anfang dieses Abschnitts). Nutze dies und baue damit einen einfachen Fahrradtacho, der die Geschwindigkeit berechnet und anzeigt!
</div>

