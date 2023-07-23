---
title: 'Schaltungen mit Transistoren steuern'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: transistor.jpg
---

<div markdown="1" class="clearfix">
![Transistor](transistor.jpg?resize=250&classes=caption,figure-right "Transistor mit flacher Seite nach oben.")
Manche Projekte wie die [Straßenlampe](/arduinoskript/algorithmische-grundlagen/bausteine-von-algorithmen/der-serielle-monitor#straßenlampe) benötigen nur ein sehr simples Programm in der Form WENN - DANN - SONST. Für solche Fälle ist der Arduino eigentlich eine überdimensionierte Lösung - viel einfacher, jedenfalls in Bezug auf die Anzahl der Bauteile, ist die Umsetzung dieser Schaltung mithilfe eines Transistors. Dieser ist (unter anderem) ein elektronischer Schalter, mit dem sich das WENN - DANN - SONST - Verhalten ganz ohne Programm umsetzen lässt.

**Frage:** Wie verwendet man einen Transistor?

Ein Transistor hat drei Anschlüsse, die als Kollektor (**C** von engl. *collector*), Basis (**B**) und Emitter (**E**) bezeichnet werden. Wenn man auf die abgeflachte Seite des Transistors schaut, sind die drei Pins in der genannten Reihenfolge angeordnet. Im Folgenden geht es zunächst um deren Grundfunktionen.
</div>

<div markdown="1" class="aufgabe">
#### Digitalpins verstehen

Befolge die unten angegebenen Schritte und stelle Schlussfolgerungen über die Funktionsweise eines Transistors an. Erkennst du Gemeinsamkeiten zu digitalen Pins?

1.  Baue die unten abgebildeten Schaltungen nacheinander auf. Spiele für die zweite Schaltung ein einfaches Blink-Programm auf den Arduino.
    ![Schaltpläne mit Transistor](Schaltplan-Transistor-verstehen.png?lightbox=1024?resize=800)
2.  Ersetze den $ 10\,  k\Omega$ Widerstand durch einen $ 100\,  k\Omega$ Widerstand.
</div>

<div markdown="1" class="aufgabe">
#### Vermessung

Um den Transistor zielgerichtet nutzen zu können, muss man die Spannung $U_{BE}$ zwischen Basis und Emitter kennen, bei der der Transistor anfängt, durchzuschalten. Dazu dient die rechts abgebildete Schaltung.

Das Potentiometer lässt sich wieder in zwei Teilwiderstände $R_1$ und $R_2$ zerlegen, an denen die Spannung $U_1$ bzw. $U_2$ abfällt. Erkläre, wie der Widerstand $R_2$ und die Spannung $U_{BE}$ zusammenhängen.

![Transistorschaltung zur Messerung der Spannung zwischen Basis und Emitter.](Schaltplan-U-BE-Messung1.png?lightbox=1024&resize=400)

Baue die Schaltung nun auf. Um die Spannung $U_{BE}$ messen zu können, wird ein Arduino ergänzt, der die Spannung in A0 ausliest und auf dem seriellen Monitor ausgibt.

Bestimme so die Grenzspannung $U_{BE}$, ab der der Transistor anfängt zu schalten, sodass die LED leuchtet.
<div class="flex-box">
<div markdown="1">![Programm: Spannung an Transistor messen.](spannung-an-transistor-messen.png?lightbox=1024&resize=500)</div>
<div markdown="1">![Schaltplan: Spannung an Transistor messen.](Schaltplan-U-BE-Messung.png?lightbox=1024&resize=400)</div>
</div>
</div>

<div markdown="1" class="projekt">
#### Straßenlampe ohne Mikrocontroller

Nun kann die Straßenlampe auch ohne Arduino realisiert werden. Dazu wird statt des Potentiometers ein Spannungsteiler mit einem LDR und einem Festwiderstand aufgebaut (siehe Schaltplan unten).
Bestimme die Größe des Festwiderstands $R_F$ so, dass der Transistor schaltet, wenn die Größe des LDR $R_{LDR}= 7\,  k\Omega$ beträgt.
*Tipps:*
  - Nutze die Spannungsteilerformel.
  - Nutze $U_{LDR}=U_{BE}$. Ab welcher Spannung schaltet der Transistor?

Baue die Schaltung danach auf und teste sie.

![Transistorschaltung für eine Straßenlampe.](Schaltplan-Strassenlampe-ohne-mC.png?lightbox=1024&resize=500)
</div>

!!!! #### Der Transistor
!!!! 
!!!! Ein Transistor hat drei Anschlüsse, die als Kollektor (**C** von engl. *collector*), Basis (**B**) und Emitter (**E**) bezeichnet werden. Wenn man auf die abgeflachte Seite des Transistors schaut, sind die drei Pins in der genannten Reihenfolge angeordnet.
!!!! <div class="flex-box">
!!!! <div markdown="1">![Transistor als Bild.](transistor.jpg?resize=200&classes=caption "Transistor als Bild.")</div>
!!!! <div markdown="1">![Schaltsymbol für Transistor.](transistor-schaltsymbol.png?resize=200&classes=caption "Schaltsymbol für einen Transistor.")</div>
!!!! </div>
!!!! Transistoren dienen als elektronische Schalter oder Verstärker (letzteres wird im Abschnitt zu Motoren genutzt). Als Schalter lassen sie sich nutzen, weil die Strecke vom Kollektor zum Emitter ohne Weiteres nicht leitet. Erst wenn zwischen Basis und Emitter eine Spannung $U_{BE} \approx  0,6\, V$ anliegt, fließt *zwischen Basis und Emitter ein schwacher Strom*, der den Transistor mit Elektronen flutet und es dadurch ermöglicht, dass *zwischen Kollektor und Emitter ein starker Strom* fließen kann.
!!!! Die Möglichkeit, mit Transistoren automatisierte Schalter herzustellen und dadurch Programme physikalisch abzubilden, macht Transistoren zur Grundlage von Mikrocontrollern und Computern und damit zu einer der wichtigsten Erfindungen des 20. Jahrhunderts. Schon auf dem kleinen integrierten Schaltkreis des Arduino, dem ATMEGA328P, sind Millionen von Transistoren verbaut. Wenn ein Digitalpin des Arduino auf HIGH gestellt wird, dann wird intern ein Transistor geschaltet.
!!!! Es gibt verschiedene Bauarten für Transistoren. Im hier verwendeten Starter Kit sind zwei npn-Transistoren (Pn2222) vorhanden, was bedeutet, dass darin zwei n-dotierte und eine p-dotierte Schicht in der Mitte verbaut sind. npn-Transistoren müssen mit einer n-Schicht (normalerweise der Emitter) mit GND verbunden sein.
