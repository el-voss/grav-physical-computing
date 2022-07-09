---
title: Aktoren
---

# Baulteilkunde Teil 1: Aktoren

<style>
    h1 {
  		counter-set: h1 5 ;
	}
</style>


Die folgende Seite bietet jeweils eine Einführung in neue Bauteile aus der Kategorie Aktoren, für die unterschiedliche Grundlagen aus dem Kapitel “Bausteine von Algorithmen” benötigt werden. Das Kapitel “Elektrische Grundlagen” ist zum tieferen Verständnis sicherlich hilfreich, aber für diese vorkonfigurierten Bauteile nicht unbedingt notwendig. Mit den hier vorgestellten Bauteilen lässt sich bereits eine Vielzahl an größeren Projekten umsetzen. Vielleicht hast du eine tolle Idee?

[TOC]

## Aktoren

Im Folgenden werden Bauteile erklärt, die eine Ausgabe machen, also z. B. sich bewegen, etwas anzeigen, Licht aussenden oder Töne erzeugen. In der Roboterkonfiguration handelt es sich um die orangen Blöcke.

### RGB-LED

<div markdown="1" class="clearfix">
![RGB-LED](/images/rgb-led.jpg?resize=250&classes=caption,figure-right "RGB-LED.")
Mit einer RGB-LED können die verschiedensten Farben erzeugt werden, die zum Beispiel in Smartphones als Status-LED genutzt werden. Auch in Tastaturen im Gaming-Bereich werden gerne RGB-Farben zur Beleuchtung verwendet.

RGB steht für Rot, Grün und Blau. In einer RGB-LED sind also drei LEDs gleichzeitig verbaut, die sich in unserem Fall eine gemeinsame Anode (Kontakt mit GND) teilen. Die Anode gehört zum längsten Beinchen. Die anderen Kontakte sollten an einen PWM-Pin (gekennzeichet durch eine Tilde: ~) angeschlossen werden.
</div>

![Verschaltung einer RGB-LED am Arduino.](/circuits/schaltplan-rgb-led-am-arduino.png?lightbox=1024&resize=500&classes=caption "Verschaltung einer RGB-LED am Arduino.")


<div markdown="1" class="aufgabe">
#### Farbenexperimente

Schließe die RGB-LED wie beschrieben an und experimentiere mit den Befehlen für die Farben. Vervollständige mit Hilfe deiner Experimente die unten stehende Tabelle.

*Hinweis: Die Werte für die Farbanteile von rot, grün und blau reichen von 0 bis 255.*

| Farbe | Farbanteile |
|---|---|
| ![RGB rot](/images/rgb-rot.png)  | ![RGB rot Code](/images/rgb-rot-code.png)  |
| ![RGB grün](/images/rgb-gruen.png)  |   |
| ![RGB lila](/images/rgb-lila.png)  |   |
| ![RGB orange](/images/rgb-orange.png)  |   |
| ![RGB blau](/images/rgb-blau.png)  |   |
| ![RGB türkis](/images/rgb-weiss.png)  |   |
</div>


<div markdown="1" class="aufgabe">
#### Colour-Fading

Wenn man die Farbanteile mit einer Zählschleife durchlaufen lässt, ergeben sich besonders schöne Farbeffekte. Probiere dies in verschiedenen Varianten aus!

<! Farbrad anaylsieren lassen -->
</div>

!!!! #### Hintergrund: Das RGB-Farbmodell
!!!! 
!!!! Im RGB-Farbmodell werden alle Farben mit Hilfe von verschiedenen Anteilen von **R**ot, **G**rün und **B**lau zusammengesetzt. Dabei handelt es sich um ein [additives Farbmodell](https://de.wikipedia.org/wiki/Additive_Farbmischung), bei dem die Farbe umso heller wird, je größer der Anteil jeder Farbe ist. Werden rot, grün und blau in voller Stärke vermischt, ergibt sich weiß. Wenn ihr Anteil jeweils null beträgt, ergibt sich schwarz.
!!!! Die Anteile werden durch eine Zahl zwischen 0 und 255 angegeben, welches sich jeweils durch acht Bit bzw. ein Byte speichern lassen. Statt der Dezimalzahlen von 0 bis 255 wird der Anteil auch häufig mit *Hexadezimalzahlen* von $00_{hex}$ bis $ff_{hex}$ angegeben. Der Code sieht dann zum Beispiel so aus: $\#72b9fa$, wobei $72$ der Rotanteil, $b9$ der Grünanteil und $fa$ der Blauanteil ist.


<div markdown="1" class="aufgabe">
#### Konfiguration mit analogen bzw. PWM-Pins

Wie oben beschrieben handelt es sich bei der RGB-LED eigentlich um drei einzelne LEDs, die jeweils mit einem PWM-Pin verbunden werden müssen, damit die Farbanteile eingestellt werden können.

Überprüfe dies, indem du jede LED einzeln als analogen Aktor konfigurierst und die Farben aus der ersten Aufgabe mit dem Befehl `schalte analogen Wert Aktor <LED Name> <Zahl von 0 bis 255>` erzeugst.
</div>

### Servo

<div markdown="1" class="clearfix">
![Servo-Motor](/images/servo.png?resize=250&classes=caption,figure-right "Servo.")
Ein Servo ist in der Regel ein kleiner Elektromotor zusammen mit einer elektronischen Steuereinheit, die dazu dient, den Motor auf einen bestimmten Winkel einzustellen. Häufig wird beides zusammen als Servomotor bezeichnet. Angewendet werden Servos in vielen Bereichen - zum Beispiel im Modellbau.
</div>

![Verschaltung eines Servo am Arduino.](/circuits/schaltplan-servo.png?lightbox=1024&resize=500&classes=caption "Verschaltung eines Servo am Arduino.")

Der Servo wird mit drei Anschlüssen an den Arduino angeschlossen:

  - VCC (rot): Die Stromversorgung des Servo wird mit dem 5 V-Pin des Arduino verbunden. Dabei ist zu beachten, dass ein Servomotor relativ große Stromstärken “ziehen” kann. Der 5 V-Pin des Arduino kann bis zu $200 \, mA$ ausgeben, bevor er durchbrennt. Das ist für den Servo genug. Ein normaler Digitalpin verträgt dagegen nur $40 \, mA$, was deutlich zu wenig für den Servo ist. Die Stromversorgung des Servo kann also nicht über einen normalen Digitalpin sichergestellt werden.
  - GND (schwarz/braun): Die Stromversorgung ist nur komplett, wenn auch das GND-Niveau auf das GND-Niveau des Arduino festgelegt wird.
  - Signalleitung (gelb): Die Einstellung des Winkels erfolgt über ein Pulsweitenmodulation, allerdings wird diese von einer zusätzlichen Bibliothek bereitgestellt, sodass das gelbe Kabel mit jedem Digitalpin am Arduino verbunden werden kann.

<div markdown="1" class="projekt">
#### Schranke

Baue mit einem Servo eine Schranke, die auf Knopfdruck geöffnet und wieder geschlossen werden kann.

![Die Servo-Steuerung erfolgt über Angabe eines Winkels zwischen 0° und 180°.](/images/servo-steuerung.png?classes=caption "Die Servo-Steuerung erfolgt über Angabe eines Winkels zwischen 0° und 180°.")
</div>

! **Recherche: Wie funktioniert die Steuerung eines Servos?**
! Der Winkel, auf den sich die Ausgangswelle des Servo drehen soll, wird über ein PWM-Signal geregelt. Recherchiere im Internet, wie dies realisiert wird und fasse es zusammen.

### Schrittmotor

<div markdown="1" class="clearfix">
![Schrittmotor mit Motortreiber ULN2003.](/images/schrittmotor.jpg?resize=250&classes=caption,figure-right "Schrittmotor mit Motortreiber ULN2003.")
Während ein Servo darauf ausgelegt ist, einen Winkel möglichst präzise anzusteuern, dient ein Schrittmotor dazu, möglichst präzise Drehungen zu realisieren. Damit können zum Beispiel 3D-Drucker oder Roboterarme, aber auch DVD-Laufwerke sehr genau gesteuert werden.

Herzstück des Motors sind zwei Spulen, die jeweils in der Mitte durch eine 5 V-Spannungsversorgung in zwei Teile geteilt werden. Weil der Pol mit dem positiven 5 V-Potential dadurch festgelegt ist und nicht flexibel an beiden Enden angelegt werden kann, nennt man den Motor auch *unipolaren* Schrittmotor.
</div>

<div class="flex-box">
<div markdown="1">![Innenansicht eines Schrittmotors.](/images/schrittmotor-innen.jpg?lightbox=1024&resize=300&classes=caption "Innenansicht eines Schrittmotors.")</div>
<div markdown="1">![Sicht auf Permanentmagnet mit Zahnrad in den Spulen.](/images/schrittmotor-innen-auseinander.jpg?lightbox=1024&resize=300&classes=caption "Sicht auf Permanentmagnet mit Zahnrad in den Spulen.")</div>
<div markdown="1">![Schaltplan zu den Spulen.](/circuits/schaltplan-schrittmotor-innen.png?lightbox=1024&resize=300&classes=caption "Schaltplan zu den Spulen.")</div>
</div>

In der Mitte der Spulen befindet sich ein Permanentmagnet, an dessen Ende ein Zahnrad angebracht ist, das wiederum weitere Zahnräder in Bewegung versetzt. Die Spulen werden nun abwechselnd an und aus geschaltet und wirken dabei als Elektromagnet. Durch die wechselnde Anziehung und Abstoßung des Permanentmagneten in der Mitte beginnt dieser, sich zu drehen. Für das Ein- und Ausschalten der Spulen wird ein Motortreiber genutzt, der den Arduino vor zu hohen und rückläufigen Strömen schützt (vgl. den Abschnitt [Elektromotoren mit dem Motortreiber-IC L293D steuern](https://doku.el-voss.de/de/arduinoskript/elektrik#elektromotoren-mit-dem...)). Aufgrund der Stromaufnahme von ca. $240 \, mA$ ist es empfehlenswert, eine externe Spannungsversorgung am Motortreiber anzuschließen (zum Beispiel mit Hilfe des [*Power Supply Module*](https://doku.el-voss.de/de/arduinoskript/elektrik#das-power-supply-module) - denke an die gemeinsame Erdung mit dem Arduino!). Da die Spulen auch beim Halten der Position dauerhaft unter Strom stehen müssen, ist der Stromverbrauch konstant hoch.

![Anschluss des Schrittmotors an den Motortreiber ULN2003 und den Arduino mit externer Spannungsquelle.](/circuits/schaltplan-schrittmotor-anschluss.png?lightbox=1024&resize=600&classes=caption "Anschluss des Schrittmotors an den Motortreiber ULN2003 und den Arduino mit externer Spannungsquelle.")

Die korrekte Reihenfolge des Ein- und Ausschaltens der Spulen ist bereits in Nepo implementiert, sodass die Steuerung sich einfach bewerkstelligen lässt. Es ist aber wichtig zu verstehen, dass jede Spuleneinstellung den Permanentmagneten in der Mitte dazu bringt, sich um einen kleinen Winkel zu drehen. Dieser Winkel wird auch Schritt genannt und dies gibt dem Schrittmotor seinen Namen. Dieser Schritt oder Winkel ist auch die kleinste Schrittweite, die der Motor ansteuern kann und gibt somit die Präzision des Motors an. Beim hier verwendeten Modell 28BYJ-48 beträgt der Schrittwinkel $5,625°$ (vgl. [Datenblatt](https://components101.com/motors/28byj-48-stepper-motor)), woraus sich ergibt, dass der Motor 64 Schritte für eine Umdrehung benötigt. Durch die eingebauten Zahnräder wird die Drehung des Schafts aber weiter verlangsamt, sodass ein Motorschritt nur einer Schaftdrehung von etwa $0,176°$ (1/32 der Motorschrittweite) entspricht. Dies bedeutet, dass der Motor 2048 Schritte für eine Umdrehung braucht. Wenn du in den textbasierten Quellcode von Nepo schaust, nachdem du einen Schrittmotor konfiguriert hast, wirst du diese Zahl wiederfinden!

![Steuerung eines Schrittmotors im Open Roberta Lab.](/images/schrittmotor-steuerung.png?classes=caption "Steuerung eines Schrittmotors im Open Roberta Lab.")

In Nepo lässt sich einfach angeben, mit welcher Geschwindigkeit (in Umdrehungen pro Minute, engl. *revolutions per minute, rpm*) und um wie viele Umdrehungen sich der Schaft drehen soll. Alternativ kann angegeben werden, um wie viel Grad sich der Schaft drehen soll.

<div markdown="1" class="projekt">
#### Sekundenzeiger

Programmiere einen möglichst präzisen Sekundenzeiger. Überprüfe ihn mit der Stoppuhr deines Smartphones.

Tipp: Nutze Klebeband, um eine kleine Fahne als Zeiger zu basteln.
</div>

! *Für Interessierte: Die Funktionsweise eines Schrittmotors*
! <div class="video">
!  <iframe
!    class="video__iframe"
!    data-src="https://www.youtube-nocookie.com/embed/Vtbd80FksuM"
!    frameborder="0"
!    allowfullscreen="allowfullscreen"
!  ></iframe>
!  <form class="video__notice">
!    <p>
!      An dieser Stelle ist ein Video von Youtube eingebettet. Mit deiner Erlaubnis willigst du ein, dass 
!      deine Daten an YouTube in den USA übermittelt werden. Weitere Informationen zur Datenverarbeitung von YouTube findest
!      du in der <a href="https://policies.google.com/privacy?hl=de">Datenschutzerklärung von YouTube</a>.
!    </p>
!    <button>Erlaube Inhalte von YouTube</button>
!  </form>
!</div>

### Liquid Crystal Display (LCD)

<div markdown="1" class="clearfix">
![LC-Display an einem Parkhaus-Automaten.](/images/lcd-im-parkhaus-v2.png?resize=250&classes=caption,figure-right "LC-Display an einem Parkhaus-Automaten.")
In vielen Projekten genügt es nicht, Messwerte, Statusanzeigen oder Menüs über den seriellen Monitor am Computer anzeigen zu lassen - man benötigt stattdessen ein Display, das sich direkt an den Arduino anschließen und mit ihm verbauen lässt. Ein günstige Möglichkeit dafür bieten sogenannte **L**iquid **C**rystal **D**isplays (LCD), die man zum Beispiel in Kaffeemaschinen oder Parkautomaten finden kann. Modernere LCD werden in Laptops, Fernsehern und Tablets verbaut.

Um ein LC-Display anzusteuern, werden ziemlich viele Kabel benötigt. Daher gibt es neben den normalen LC-Displays häufig auch eine Variante, bei der ein I2C-Modul am LC-Display angebracht ist, was die benötigten Kabel deutlich reduziert. Im Folgenden werden beide Varianten beschrieben.
</div>

*LC-Display ohne I2C-Modul*

Im Schaltplan sind die Kabel so mit dem Arduino verbunden, wie es die Standardkonfiguration für das LCD 1602 in Nepo angibt. Es empfiehlt sich, die zahlreichen 5V- und GND-Anschlüsse auf den Längsseiten des Steckbretts zu sammeln.

<div class="flex-box">
<div markdown="1" class="flexible">![Schaltplan zum LC-Display ohne I2C-Modul.](/circuits/schaltplan-lcd-ohne-i2c.png?lightbox=1024&resize=600&classes=caption "Schaltplan zum LC-Display ohne I2C-Modul.")</div>
<div markdown="1" class="flexible">
| **LCD** |    **Arduino**     |
| :-----: | :----------------: |
|   VSS   |        GND         |
|   VDD   |         5V         |
|   V0    | Drehregler (Mitte) |
|   RS    |         12         |
|   RW    |        GND         |
|    E    |         11         |
| D0 - D3 |         –          |
|   D4    |         5          |
|   D5    |         4          |
|   D6    |         3          |
|   D7    |         2          |
|    A    |         5V         |
|    K    |        GND         |
</div>
</div>
Die Anschlüsse A und K stehen für die Anode und Kathode der LEDs, die die Hintergrundbeleuchtung ausmachen. Mit dem Drehregler wird der Kontrast des Bildschirms eingestellt.

*LCD mit I2C-Modul*

Die I2C-Schnittstelle erlaubt es, ein LC-Display mit nur vier Kabel anzusteuern. Der Anschluss an den Arduino erfolgt wie in der Abbildung dargestellt.

![Verschaltung des LC-Displays mit I2C-Modul.](/images/i2c-modul-beschriftet.png?resize=500&classes=caption "Verschaltung des LC-Displays mit I2C-Modul.")

!!!! #### I2C oder IIC: Inter-Integrated Circuit
!!!! I2C steht für *[Inter-Intergrated-Circuit](https://de.wikipedia.org/wiki/I%C2%B2C)*. Dies ist ein sogenannter Datenbus, also ein System zur Übertragung von Daten zwischen mehreren Teilnehmern. Die Datenübertragung funktioniert über ein getaktetes An- und Ausstellen der Datenleitung, um die Daten in Binärform (1 und 0) zu übertragen. Neben der Spannungsversorgung (GND und VCC) wird dazu ein Kabel für die serielle Datenübertragung (SDA - Serial Data) und ein Kabel für die Abstimmung des Taktes (SCL - Serial Clock) benötigt.
!!!! Da auch mehrere I2C-kompatible Geräte an denselben Datenbus angeschlossen werden können, bekommt jedes Gerät eine Adresse, damit klar ist, welches Gerät die Daten bekommen soll. Die Adresse wird bei der Konfiguration als Hexadezimalzahl angegeben und kann prinzipiell zwischen 0 und 127 liegen. Typischerweise ist die voreingestellte Adresse `0x27`. Dabei bedeutet `0x`, dass die folgenden beiden Ziffern als Hexadezimalzahl zu interpretieren sind. Falls bereits ein anderes Gerät auf dem gleichen Datenbus dieselbe Adresse hat, kann die Adresse über die Lötbrücken verändert werden (siehe [bastelgarage.ch](https://www.bastelgarage.ch/i2c-schnittstelle-pcf8574-fur-lcd-display)).
!!!! <figure class="image-caption">
!!!!     <img title="I2C-Bus mit einem Master- und drei Slave-Geräten" alt="I2C-Bus mit einem Master- und drei Slave-Geräten" class="caption" src="/user/pages/images/i2c-info.png">
!!!!     <figcaption class="">I2C-Bus mit einem Master- und drei Slave-Geräten (Quelle: <a href="https://de.wikipedia.org/wiki/Datei:I2C.svg" target="_blank">Wikpedia</a>), <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.de" target="_blank">CC-BY-SA 3.0</a>, Urheber: <a href="https://en.wikipedia.org/wiki/User:Cburnett" target="_blank">Colin Burnett</a>.</figcaption>
!!!! </figure>

<div markdown="1" class="aufgabe">
#### Funktionstest des LCD

Schließe das LC-Display wie beschrieben an den Arduino an und erstelle ein Programm, das “Hello World!” auf dem LC-Display anzeigt.

*Hinweis:* Falls alle Pixel weiß oder blau bleiben, kann es sein, dass der Drehregler falsch eingestellt ist. Drehe in diesem Fall an dem Drehregler, um den Kontrast zu verbessern. Für den Drehregler auf dem I2C-Modul (blauer Kasten) brauchst du einen Schraubendreher o. ä.
</div>

<div markdown="1" class="aufgabe">
#### Messwertanzeige auf dem LCD

In vielen Anwendungen soll auf dem LC-Display ein Messwert o. ä. angezeigt werden, der sich mit der Zeit ändern kann. Diese Anzeige soll aber schön formatiert sein.

Erstelle ein Programm, das alle drei Sekunden eine Zufallszahl `z` zwischen 0 und 200 erzeugt und auf dem Display folgende Anzeige ausgibt:

<center markdown="1">`Messwert: z E`</center>

*Hinweise:*
  - `E` soll für eine beliebige Einheit stehen.
  - Achte darauf, dass der vorherige Wert von `z` gelöscht wird (`Lösche LCD1602 (I2C)`).
  - Die Ausgabe der Zahl `z` soll immer rechtsbündig erfolgen, sodass zwischen den Einern von `z` und der Einheit genau ein Leerzeichen steht.
  - Du benötigst den Befehl `LCD 1602 (I2C) zeige Text "..." in Spalte <_> in Zeile <_>`. Die Zeile ist entweder $0$ (oben) oder $1$ (unten). Die Spalte kann sich von $0$ bis $15$ erstrecken. (In der Informatik beginnt das Zählen stets mit der Null!)
</div>

! **Codierung von Zeichen auf dem LCD**
!
! Für die Darstellung von Zeichen auf dem LCD muss im Hintergrund geklärt werden, welche Pixel an- und ausgestellt werden müssen. Dazu lohnt ein genauer Blick auf die Zellen des LCD.
! Jede Zelle besteht aus $5 \times 8$ Pixeln, von denen manche weiß und manche blau sind. Wenn man für jedes Pixel eine `1` (weiß) oder eine `0` (blau) notiert, dann erhält man Bitfolgen (gekennzeichnet durch das vorstehende `0b`), die sich in einer Reihung notieren lassen.
! ![Codierung des Buchstabens A auf einem LC-Display.](/images/lcd-zeichen-codierung.png?lightbox=1024&resize=800&classes=caption "Codierung des Buchstabens A auf einem LC-Display.")
! Man könnte die Reihung von Bitfolgen auch als Reihung von Dezimalzahlen notieren und käme auf das gleiche Ergebnis. Das macht den Code zwar kürzer, jedoch leidet die Lesbarkeit des Codes deutlich.
! *Entwerfe einen Smiley und ein eigenes Symbol auf  $5 \times 8$ Pixeln und notiere die zugehörige Reihung von Bitfolgen, die dieses Zeichen codiert.*
! *Hinweis:* Mit der textbasierten Arduino-IDE lassen sich nach dem oben beschriebenen Prinzip auch eigene Zeichen für das LC-Display codieren. Ein Beispiel findet sich unter `Datei` $\rightarrow$ `Beispiele` $\rightarrow$ `LiquidCrystal` $\rightarrow$ `CustomCharacter`.


### OLED-Display SSD1306

<div markdown="1" class="clearfix">
![Das OLED-Display SSD1306.](/images/ssd1306-oled.jpg?resize=250&classes=caption,figure-right "Das OLED-Display SSD1306 (Büroklammer zum Vergleich).")
OLED-Displays basieren auf LEDs, die im Gegensatz zu herkömmlichen LEDs aus organischen Materialien hergestellt werden (*OLED* steht für [*organische Leuchtdiode*](https://de.wikipedia.org/wiki/Organische_Leuchtdiode), engl. *organic light-emitting diode*). Bekannt sind OLED-Displays vor allem von Samsung Smartphones mit AMOLED-Display (*active matrix organic light-emitting diode*), aber OLEDs werden auch in Tablets, Fernsehern oder bei der Raumbeleuchtung eingesetzt.

Das SSD1306 ist ein kostengünstiges, kleines Display in *zwei Versionen*: Eine mit 128 x 64 OLEDs und somit 128 x 64 Pixeln und eine mit 128 x 32 OLEDs / Pixeln. *Achtung:* In Onlineshops werden häufig 64 Pixel Höhe angegeben, obwohl nur 32 Pixel Höhe vorhanden sind! Die Bildschirmdiagonale beträgt 0,96", also ca. 2,44cm. Die OLEDs haben in der Regel eine weiße Farbe, es gibt aber auch Versionen mit einer integrierten Farbfolie, sodass blaue und gelbe Farbtöne möglich sind (aber immer nur ein Farbton pro LED). Es verfügt über vier Pins, von denen VCC und GND wie üblich die Stromversorgung sicherstellen, während die Datenübertragung über den [I2C-Datenbus](#i2c-oder-iic-inter-integrated...) realisiert wird. Dazu wird der SCL-Pin mit A5 und der SDA-Pin mit A4 verbunden (siehe Schaltplan / Roboterkonfiguration).
</div>

<div class="flex-box">
<div markdown="1" class="flexible">![Schaltplan zum SSD1306.](/circuits/schaltplan-ssd1306-oled-display.png?lightbox=1024&resize=600&classes=caption "Schaltplan zum SSD1306.")</div>
<div markdown="1" class="flexible">![SSD1306 in der Roboterkonfiguration](/images/ssd1306-konfiguration.png?classes=caption "Das SSD1306 in der Roboterkonfiguration.")</div>
</div>

!! Die **Adresse**, unter der das Display über den I2C-Datenbus erreichbar ist, ist in der Regel `0x3D` (Standard bei 128 x 64 Pixeln) oder `0x3C` (Standard bei 128 x 32 Pixeln). Bei manchen Displays kann man die Adresse auch auf der Rückseite ablesen und ggf. abändern, indem man eine Lötstelle überbrückt.

<div markdown="1" class="aufgabe">
#### Funktionstest des OLED-Displays

1. Schließe das Display wie beschrieben an und gib darauf ein blinkendes "Hello World!" aus. Falls auf dem Display keine Ausgabe erscheint, probiere eine andere Adresse in der Roboterkonfiguration des Displays aus.
2. Die Spaltenangabe bezieht sich auf die 128 Pixel bzw. OLEDs in horizontaler Richtung, während die Zeilenangabe sich auf die 64 Pixel bzw. 32 Pixel in vertikaler Richtung bezieht.
Entnimm der Abbildung des Displays die Pixelhöhe und Pixelbreite der Buchstaben auf dem Display. Begründe damit die Maximalwerte für die Spalte und die Zeile des Text-Befehls für das Display.

<div class="flex-box">
<div markdown="1" class="flexible">![Nahaufnahme eines Textes auf dem SSD1306.](/images/oled-hallowelt.png?lightbox=1024&resize=500&classes=caption "Nahaufnahme eines Textes auf dem SSD1306.")</div>
<div markdown="1" class="flexible">
![Befehl zur Ausgabe von Text auf dem SSD1306](/images/ssd1306-zeige-text.png "Befehl zur Ausgabe von Text auf dem SSD1306.")

|  | min. | max. |
|--|----------|-------|
| Spalte | 0 | 122 |
| Zeile | 0 | 56 bzw. 24 |

<br>
*Hinweis zur maximalen Zeile:*

56px bei 64 px Höhe und 24px bei 32px Höhe.
</div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Messwertanzeige auf dem SSD1306

In vielen Anwendungen soll auf dem Display ein Messwert o. ä. angezeigt werden, der sich mit der Zeit ändern kann. Diese Anzeige soll aber schön formatiert sein.

Erstelle ein Programm, das alle drei Sekunden eine Zufallszahl `z` zwischen 0 und 200 erzeugt und auf dem Display folgende Anzeige ausgibt:

<center markdown="1">`Messwert: z E`</center>

*Hinweise:*
  - `E` soll für eine beliebige Einheit stehen.
  - Achte darauf, dass der vorherige Wert von `z` gelöscht wird (`Lösche OLED SSD1306 I²C`).
  - Die Ausgabe der Zahl `z` soll immer rechtsbündig erfolgen, sodass zwischen den Einern von `z` und der Einheit genau ein Leerzeichen steht.
</div>

! **Recherche: Vor- und Nachteile der OLED-Technologie**
!
! Auf dem Markt für Displays gibt es immer noch eine harte Konkurrenz und längst nicht alle Hersteller setzen auf OLEDs. Recherchiere, welche Vor- und Nachteile diese Technologie für die Verwendung in Bildschirmen hat.