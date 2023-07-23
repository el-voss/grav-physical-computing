---
title: 'Spannung messen'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: batteriespannung-messen.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Der serielle Monitor'
        - 'Entscheidungen mit mehreren Kriterien'
        - 'Spannung Stromstärke und Widerstand berechnen'
        - 'Digital vs Analog und Aktor vs Sensor'
        - 'Das elektrische Potential'
    Inhalte:
        - Spannung
        - 'Analog Digital Converter'
        - Spannungsteiler
    Niveau:
        - Fortgeschritten
---

Wenn Batterien kaum noch Ladung gespeichert haben, lässt die Spannung an ihren Polen nach und sinkt unter den Wert, der auf der Batterie vermerkt ist. Mithilfe der analogen Eingänge A0 bis A5 lässt sich die Spannung messen und so entscheiden, ob die Batterie noch brauchbar ist.

**Frage:** Wie kann man mit dem Arduino eine Spannung messen?

!!! Druckvorlage zum Download: <a href="/worksheets/batterietester-druck.pdf" download><i class="fa fa-download" aria-hidden="true"></i> Batterietester-Druck.pdf</a>

<div markdown="1" class="projekt">
#### Batterietester (Voltmeter für Spannungen bis 5V)
Für eine einfache Messung bei einer 1,5 V-Batterie wird der negative Pol der Batterie mit GND verbunden, sodass ein gemeinsames Nullpotential vorliegt. Der positive Pol der Batterie wird mit einem der analogen Eingänge A0 bis A5 verbunden. Über einen eingebauten Analog-Digital-Wandler (*engl. analog-to-digital converter, ADC*) wird der Spannungswert durch eine Zahl zwischen 0 und 1023 ausgedrückt.

![batteriespannung-messen](batteriespannung-messen.png?lightbox=1024&resize=400&classes=caption "Zur Messung der verbleibenden Spannung einer AA-Batterie wird der Minuspol mit GND und der Pluspol mit einem der analogen Eingänge A0 bis A5 verbunden.")

1.  Schließe eine mit 1,5 V beschriftete Batterie an den Arduino an und miss die Spannung. Berechne aus dem Analogwert die Spannung und lass sie auf dem seriellen Monitor ausgeben.

| **Analogwert** | **Spannung** |
| :------------: | :----------: |
|       0        |     0 V      |
|       1        |              |
|      100       |              |
|      1023      |     5 V      |

2.  Ergänze den Batterietester um eine Ampel, die anzeigt, ob die Batterie voll aufgeladen bzw. noch in Ordnung bzw. leer ist:
  - voll: U größer als 1,4V,
  - in Ordnung: U zwischen 1,2V und 1,4V,
  - leer: U kleiner als 1,2V.

</div>

<div markdown="1" class="projekt">
#### Batterietester (Voltmeter für Spannungen ab 5V)

Da der Arduino beim direkten Anschließen nur maximal 5 V “verträgt”, muss man zum Testen von z. B. 9 V-Blöcken weitere Bauteile verwenden. Mit zwei $ 10\, k\Omega$ Widerständen kann man einen einfachen *Spannungsteiler* aufbauen, der die Messung ermöglicht.

![Schaltplan für Voltmeter bis 10V.](schaltplan-batterietester.png?lightbox=1024&resize=400)

1.  Berechne die Stromstärke und die Spannung an den Widerständen. Warum sind große Widerstände hier sinnvoll?
2.  Markiere die Kabel in der Abbildung farbig, sodass die Kabel, die auf dem gleichen elektrischen Potential liegen, die gleiche Farbe haben. Notiere zudem den Wert des elektrischen Potentials.
3.  Gib an, wie man mit dem Arduino die Spannung am 9 V-Block berechnet. Baue den Batterietester dann auf und probiere ihn mit dem 9 V-Block aus der Box aus.
4.  *Zum Nachdenken:* Wie groß darf die Spannung beim oben verwendeten Spannungsteiler maximal sein, damit am Arduino nicht mehr als 5 V anliegen? Wie könnte man den Spannungsteiler bauen, sodass man Spannungen bis zu 15 V messen kann?
</div>

*Hinweis:* Ganz ähnlich funktioniert ein Multimeter, bei dem man mit einem Drehregler ein passendes Widerstandsverhältnis für den aufgedruckten Messbereich einstellen kann. Auch im Multimeter werden für die Spannungsmessung möglichst große Widerstände verwendet.
![Multimeter](multimeter.jpg?resize=300&classes=caption "Multimeter.")

!!!! #### (Quasi) Analoge Pins am Arduino
!!!! 
!!!! Die mit einer Tilde versehenen Digitalpins am Arduino verfügen über Pulsweitenmodulation, über die sich eine mittlere Spannung einstellen lässt, die quasi einem analogen Signal entspricht. Genau genommen sind 256 Stufen von 0 (0 V) bis 255 (5 V) möglich, woraus sich ergibt, dass die Stufen sich um 0,02 V unterscheiden.
!!!! 
!!!! Die Pins mit der Beschriftung A0 bis A5 werden als analoge Eingänge bezeichnet, weil sich mit ihnen Spannungen zwischen 0 V und 5 V messen lassen. Auch hier handelt es sich nur um eine quasi analoge Messung, denn der Messbereich ist in 1024 Stufen von 0 (0 V) bis 1023 (5 V) unterteilt, woraus sich ergibt, dass die Stufen sich um 0,005 V unterscheiden.