---
title: 'Infrarot-Sensor mit Fernbedienung'
show_pageimage: true
image_width: 300
image_height: 300
featured_image: ir-sensor-led-modul-gross.jpg
---

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
<div markdown="1">![Infrarotsensor.](ir-sensor.jpg?resize=300&classes=caption "Infrarotsensor.")</div>
<div markdown="1">![Infrarotsensor-Modul.](ir-sensor-led-modul.png?resize=300&classes=caption "Infrarotsensor-Modul.")</div>
</div>
Häufig wird der Infrarotsensor zusammen mit einer LED und einem zugehörigen Vorwiderstand auf einer kleinen Platine ausgeliefert, damit das Empfangen eines Signals durch die LED angezeigt werden kann. Es sind aber auch Infrarotsensoren ohne weitere Anzeige im Umlauf.

<div class="flex-box">
<div markdown="1">![Schaltplan zum Anschluss eines Infrarotsensors am Arduino.](schaltplan-ir-sensor.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum Anschluss eines Infrarotsensors am Arduino.")</div>
<div markdown="1">![Schaltplan zum Anschluss eines Infrarotsensormoduls mit LED-Anzeige am Arduino.](schaltplan-ir-sensor-modul.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum Anschluss eines Infrarotsensormoduls mit LED-Anzeige am Arduino.")</div>
</div>

Der Anschluss an den Arduino ist einfach: GND und 5V dienen wie üblich der Stromversorgung. Der Signal-Pin S muss mit einem beliebigen PWM-Pin (mit $\sim$) verbunden werden. Die Pin-Belegung ist aber leider unterschiedlich; je nach dem, ob man ein Modul mit LED-Anzeige oder nur den Infrarotsensor anschließt.

Nachdem der IR-Sensor mit dem Arduino verbunden und in Nepo konfiguriert wurde, können die empfangenen Werte in Nepo abgefragt werden. Die Abbildung unten zeigt ein einfaches Beispiel, wie mit den Tasten 0 und 1 auf einer Infrarot-Fernbedienung die Board-LED des Arduino an- und ausgestellt werden kann. Wenn die Taste mehrere Aktionen auslösen soll (wie die Ausgabe des Codes auf dem seriellen Monitor und das Anschalten der LED), dann muss der Wert in einer Variable gespeichert werden.

![Einfaches Beispielprogramm zur Verwendung einer IR-Fernbedienung.](ir-fernbedienung-auslesen.png?classes=caption "Einfaches Beispielprogramm zur Verwendung einer IR-Fernbedienung.")

<div markdown="1" class="aufgabe">
#### Codes kennen lernen

1.  Übertrage das oben abgebildete Programm auf den Arduino und probiere es aus.
2.  Erstelle eine Tabelle, in der du den Zahlencode für jede Taste festhälst. Probiere auch aus, was passiert, wenn du die Tasten länger gedrückt hälst.
</div>

<div markdown="1" class="projekt">
#### Fernsteuerung eines LED-Streifens

In vielen Bereichen werden LED-Streifen genutzt, um einen Raum mit passendem, indirektem Licht auszustatten. Die meisten LED-Streifen lassen sich über eine kleine Infrarot-Fernbedienung steuern, wodurch sich die Farbe, aber auch der Modus einstellen lässt - zum Beispiel eine einzelne Farbe, [Fading](/arduinoskript/elektrik/digitale-analoge-pins/pulsweitenmodulation#fading), Strobe, …

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
