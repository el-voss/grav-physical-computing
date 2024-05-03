---
menu: 'Smart Home'
title: 'Smart Home: Hausautomatisierung'
content:
    items:
        - '@self.children'
    limit: 5
    order:
        by: folder
        dir: desc
    pagination: true
    url_taxonomy_filters: true
media_order: 'steckbrett-mit-power-module-klein.png,steckbrett-mit-power-module.jpg'
---

Unter dem Stichwort "Smart Home" werden Funktionen zusammengefasst und angeboten, die zur Automatisierung von Prozessen in Häusern und Gebäuden dienen. Das kann ein einfacher Bewegungsmelder für eine Lampe sein oder auch Jalousinen, die automatisch oder auf Knopfdruck hoch- und heruntergefahren werden. Zahlreiche weitere Funktionen können für einen einfacheren Alltag sorgen. Für manche sind sie aber auch einfach ein spannendes Bastelprojekt... und natürlich spielen Arduinos dabei immer wieder eine Rolle!

<div class="projekt" markdown="1">
#### Hausautomatisierung

Entwickle einen Prototypen für ein "Smart Home" mit möglichst vielen oder möglichst interessanten Funktionen!

Als Grundlage dient ein Karton, der als Haus gestaltet werden soll und Platz für die Technik bietet. Es dürfen alle Bauteile aus dem Arduino Kit verwenden werden. Recherchiere selbst im Kapitel "[Bauteilkunde](https://mintorials.de/de/arduinoskript/bauteilkunde)" nach Anleitungen.
</div>

**Material**
- Karton (etwas größer als ein Schuhkarton)
- Arduino Kit (vgl. Bauteilkunde)
- zusätzliche Kabel, male - female, 40cm
- Kreppband

!! Da bei diesem Projekt sehr viele Bauteile zusammenkommen können, die teilweise viel Strom benötigen, sollte die Stromversorgung nicht (allein) vom Arduino stammen. Nutze das Power Supply Module auf dem Steckbrett, um sowohl den Arduino als auch die Bauteile mit Strom zu versorgen.

!!!! ![Power Supply Module](steckbrett-mit-power-module-klein.png?resize=300&classes=caption,figure-right "Power Supply Module auf Steckbrett mit angeschlossener Batterie.")
!!!! #### Das “Power Supply Module”
!!!! 
!!!! Das Power Supply Module dient zur Spannungsversorgung auf einem Steckbrett. Dazu kann eine Batterie mit $ 6,5\, V$ bis $ 12\, V$ oder ein USB-Kabel angeschlossen werden. Die Spannung wird auf dem Modul je nach Einstellung der *Jumper* auf $ 5\, V$ oder $ 3,3\, V$ heruntergeregelt. Dazu verbindet man mithilfe der Jumper die Anschlüsse `5V` und `OFF` bzw. `3.3` und `OFF`.
!!!! Die Spannung kann entlang der langen äußeren Leisten abgegriffen werden, wenn der Taster neben der Hohlbuchse gedrückt ist. Die Zuordnung zu Pluspol und Minuspol ist auf dem Power Supply Module mit `+` bzw. `-` markiert.

Das folgende Bild zeigt, wie man die Stromversorgung für einen Servo über ein Power Supply Module herstellt, das mehr Strom liefern kann als der Arduino.

![steckbrett-mit-power-supply-und-servo-Markierung](steckbrett-mit-power-supply-und-servo-Markierung.png?lightbox=1024&resize=800&classes=caption "Steckbrett mit Power Supply Module, Arduino und Servo.")

Wichtig sind dabei folgende Punkte:
- Das Power Supply Module ist so eingesteckt, dass das `+` vom Modul auf der `+`-Leiste vom Steckbrett und das `-` vom Modul auf der `-` -Leiste des Steckbretts liegt (rote Markierung).
- Die Jumper auf dem Power Supply Module stehen auf 5V (gelbe Markierung).
- Der GND-Anschluss des Arduino ist mit dem Minus-Anschluss des Steckbretts bzw. Power Supply Module verbunden.
- Bei manchen Steckbrettern sind die Plus- und Minusleisten in der Mitte getrennt. Gegebenenfalls muss hier ein Kabel zur Überbrückung eingebaut werden.
- Am besten ist es, wenn sowohl der Arduino als auch das Power Supply Module von einer eigenen 9V-Batterie versorgt werden. Es werden also zwei Batterien benötigt.
- Alternativ kann nur eine 9V-Batterie am Power Supply Module angeschlossen werden. Dann wird zusätzlich ein Kabel von der `+`-Leiste des Steckbretts an den 5V-Anschluss des Arduino benötigt.

Auf diese Weise können auch mehrere Servos oder andere stromhungrige Bauteile genutzt werden, ohne den Arduino zu überlasten. Der maximale Stromfluss beträgt bei dem Power Supply Module $1\,A$.

