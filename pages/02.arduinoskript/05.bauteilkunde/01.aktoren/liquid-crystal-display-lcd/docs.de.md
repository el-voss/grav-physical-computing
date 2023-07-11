---
title: 'Liquid Crystal Display (LCD)'
---

### Liquid Crystal Display (LCD)

<div markdown="1" class="clearfix">
![LC-Display an einem Parkhaus-Automaten.](lcd-im-parkhaus-v2.png?resize=250&classes=caption,figure-right "LC-Display an einem Parkhaus-Automaten.")
In vielen Projekten genügt es nicht, Messwerte, Statusanzeigen oder Menüs über den seriellen Monitor am Computer anzeigen zu lassen - man benötigt stattdessen ein Display, das sich direkt an den Arduino anschließen und mit ihm verbauen lässt. Ein günstige Möglichkeit dafür bieten sogenannte **L**iquid **C**rystal **D**isplays (LCD), die man zum Beispiel in Kaffeemaschinen oder Parkautomaten finden kann. Modernere LCD werden in Laptops, Fernsehern und Tablets verbaut.

Um ein LC-Display anzusteuern, werden ziemlich viele Kabel benötigt. Daher gibt es neben den normalen LC-Displays häufig auch eine Variante, bei der ein I2C-Modul am LC-Display angebracht ist, was die benötigten Kabel deutlich reduziert. Im Folgenden werden beide Varianten beschrieben.
</div>

*LC-Display ohne I2C-Modul*

Im Schaltplan sind die Kabel so mit dem Arduino verbunden, wie es die Standardkonfiguration für das LCD 1602 in Nepo angibt. Es empfiehlt sich, die zahlreichen 5V- und GND-Anschlüsse auf den Längsseiten des Steckbretts zu sammeln.

<div class="flex-box">
<div markdown="1" class="flexible">![Schaltplan zum LC-Display ohne I2C-Modul.](schaltplan-lcd-ohne-i2c.png?lightbox=1024&resize=600&classes=caption "Schaltplan zum LC-Display ohne I2C-Modul.")</div>
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

![Verschaltung des LC-Displays mit I2C-Modul.](i2c-modul-beschriftet.png?resize=500&classes=caption "Verschaltung des LC-Displays mit I2C-Modul.")

!!!! #### I2C oder IIC: Inter-Integrated Circuit
!!!! I2C steht für *[Inter-Intergrated-Circuit](https://de.wikipedia.org/wiki/I%C2%B2C)*. Dies ist ein sogenannter Datenbus, also ein System zur Übertragung von Daten zwischen mehreren Teilnehmern. Die Datenübertragung funktioniert über ein getaktetes An- und Ausstellen der Datenleitung, um die Daten in Binärform (1 und 0) zu übertragen. Neben der Spannungsversorgung (GND und VCC) wird dazu ein Kabel für die serielle Datenübertragung (SDA - Serial Data) und ein Kabel für die Abstimmung des Taktes (SCL - Serial Clock) benötigt.
!!!! Da auch mehrere I2C-kompatible Geräte an denselben Datenbus angeschlossen werden können, bekommt jedes Gerät eine Adresse, damit klar ist, welches Gerät die Daten bekommen soll. Die Adresse wird bei der Konfiguration als Hexadezimalzahl angegeben und kann prinzipiell zwischen 0 und 127 liegen. Typischerweise ist die voreingestellte Adresse `0x27`. Dabei bedeutet `0x`, dass die folgenden beiden Ziffern als Hexadezimalzahl zu interpretieren sind. Falls bereits ein anderes Gerät auf dem gleichen Datenbus dieselbe Adresse hat, kann die Adresse über die Lötbrücken verändert werden (siehe [bastelgarage.ch](https://www.bastelgarage.ch/i2c-schnittstelle-pcf8574-fur-lcd-display)).
!!!! <figure class="image-caption">
!!!!     <img title="I2C-Bus mit einem Master- und drei Slave-Geräten" alt="I2C-Bus mit einem Master- und drei Slave-Geräten" class="caption" src="i2c-info.png">
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
! ![Codierung des Buchstabens A auf einem LC-Display.](lcd-zeichen-codierung.png?lightbox=1024&resize=800&classes=caption "Codierung des Buchstabens A auf einem LC-Display.")
! Man könnte die Reihung von Bitfolgen auch als Reihung von Dezimalzahlen notieren und käme auf das gleiche Ergebnis. Das macht den Code zwar kürzer, jedoch leidet die Lesbarkeit des Codes deutlich.
! *Entwerfe einen Smiley und ein eigenes Symbol auf  $5 \times 8$ Pixeln und notiere die zugehörige Reihung von Bitfolgen, die dieses Zeichen codiert.*
! *Hinweis:* Mit der textbasierten Arduino-IDE lassen sich nach dem oben beschriebenen Prinzip auch eigene Zeichen für das LC-Display codieren. Ein Beispiel findet sich unter `Datei` $\rightarrow$ `Beispiele` $\rightarrow$ `LiquidCrystal` $\rightarrow$ `CustomCharacter`.
