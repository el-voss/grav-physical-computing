---
title: 'Elektromotor mit Relais steuern'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: relais-klein.png
---

Bei der Verwendung eines Transistors muss der Arbeitsstromkreis mit dem Motor und der Steuerstromkreis mit dem Arduino immer miteinander verbunden bleiben - auch bei sehr großen Stromstärken. Damit verbleibt immer eine gewisse Gefahr, dass eine Spannungsspitze auf den Arduino durchschlägt und ihn zerstört. Mit einem Relais lässt sich dieses Risiko vermeiden. Ein weiterer Vorteil ist, dass der Arbeitsstromkreis auch mit Wechselstrom betrieben werden kann, wenn ein Relais als Schalter genutzt wird.

**Frage:** Wie verwendet man ein Relais am Arduino?

Ein Relais (siehe unten, grau unterlegt) besteht im Wesentlichen aus einer Spule mit Eisenkern und einem Wechselschalter, an dem eine Feder angebracht ist.

<div class="flex-box">
<div markdown="1">![Relais-Aufbau offen](relais-aufbau-offen.png?lightbox=1024&classes=caption "Aufbau eines Relais (grau unterlegt) einschließlich der Stellung des Wechselschalters, wenn im Steuerstromkreis kein Strom fließt.") </div>
<div markdown="1">![Relais-Aufbau geschlossen](relais-aufbau-geschlossen.png?lightbox=1024&classes=caption "Aufbau eines Relais (grau unterlegt) einschließlich der Stellung des Wechselschalters, wenn im Steuerstromkreis Strom fließt.") </div>
</div>

<div markdown="1" class="aufgabe">
#### Physikalischer Hintergrund zum Relais

Erkläre die Stellung des Wechselschalters in Abhängigkeit des Steuerstromkreises in den beiden abgebildeten Situationen. Welche Lampe leuchtet?

Die Kontakte am Wechselschalter werden mit *NO* (*normally open*), *NC* (*normally closed*) und *C* (*common ground*) bezeichnet. Ordne die Bezeichnungen den Kontakten in der Skizze zu.
</div>

<div markdown="1" class="aufgabe">
#### Anschluss eines Relais

**a)** Wie aus dem obigen Schaltplan ersichtlich wird, hat ein Relais fünf Anschlüsse, die jedoch nicht beschriftet sind. Suche im Internet nach “Datasheet 'Gerätebezeichnung des Relais'” (Bezeichnung vom Relais ablesen) und entnimm dem Datenblatt, welche Anschlüsse zum Steuer- bzw. Arbeitsstromkreis gehören.
![Relais](relais-klein.png?resize=200&classes=caption "Ein Relais.")

!! **Achtung:** Auf dem Relais ist angegeben, dass damit bis zu $ 250\, V$ Wechselspannung und $ 10\,  A$ geschaltet werden können. Das sollte man mit solch billigen Bastelmodulen aber **niemals machen**\! Generell gilt: **Nur ausgebildete Fachleute sollten mit Spannungen von mehr als 24 V hantieren\!**

**b)** Baue die Schaltung entsprechend des unten abgebildeten Schaltplans auf. Nutze dazu das “Power Module” auf dem Steckbrett (Erklärung unten). Probiere die Schaltung des Relais aus, indem du die Stromzufuhr der Spule unterbrichst und wieder herstellst.

![Relais-Schaltung ohne Arduino](relais-schaltung-ohne-arduino.png?lightbox=1024&resize=500&classes=caption "Relais-Schaltung ohne Arduino.")

**c)** Ordne in einer Skizze des Relais die Anschlüsse ihrer Bezeichnung (A1, A2, C, NO, NC) zu.
</div>

!!!! ![Power Supply Module](steckbrett-mit-power-module-klein.png?resize=300&classes=caption,figure-right "Power Supply Module auf Steckbrett mit angeschlossener Batterie.")
!!!! #### Das “Power Supply Module”
!!!! 
!!!! Das Power Supply Module dient zur Spannungsversorgung auf einem Steckbrett. Dazu kann eine Batterie mit $ 6,5\, V$ bis $ 12\, V$ oder ein USB-Kabel angeschlossen werden. Die Spannung wird auf dem Modul je nach Einstellung der *Jumper* auf $ 5\, V$ oder $ 3,3\, V$ heruntergeregelt. Dazu verbindet man mithilfe der Jumper die Anschlüsse `5V` und `OFF` bzw. `3.3` und `OFF`.
!!!! Die Spannung kann entlang der langen äußeren Leisten abgegriffen werden, wenn der Taster neben der Hohlbuchse gedrückt ist. Die Zuordnung zu Pluspol und Minuspol ist auf dem Power Supply Module mit `+` bzw. `-` markiert.

<div markdown="1" class="aufgabe">
#### Anschluss eines Relais am Arduino

<div class="flex-box">
<div markdown="1" class="flexible">![Relais-Schaltung mit Arduino](relais-schaltung-mit-arduino.png?lightbox=1024&resize=500&classes=caption "Relais-Schaltung am Arduino.")</div>
<div markdown="1" class="flexible">![npn-Transistor; Blick auf die flache Seite](transistor-schematisch.png?resize=250&classes=caption "npn-Transistor Pn2222; Blick auf die flache Seite.") </div>
</div>

Der Schaltplan oben zeigt, wie man ein Relais mit dem Arduino steuert.
1.  Erkläre die Funktion der in Sperrrichtung geschalteten Diode parallel zur Spule des Relais.
2.  Erkläre die Funktion des Transistors.
    *Hinweis:* Der 5V-Pin und der GND-Pin vertragen bis zu $ 200\,  mA$. Die Digitalpins vertragen dagegen maximal $ 40\,  mA$; normalerweise sollten $ 20\,  mA$ nicht überschritten werden (s. [Pin Current Limitations](https://playground.arduino.cc/Main/ArduinoPinCurrentLimitations/)).
3.  Baue die Schaltung auf und teste sie mit einem Blink-Programm.
</div>

<div markdown="1" class="projekt">
#### Waschmaschinensteuerung

![Relais-Schaltung mit Motor](relais-schaltung-mit-motor.png?lightbox=1024&resize=500&classes=caption "Relais-Schaltung am Arduino mit Motor.")

Baue die oben abgebildete Schaltung zur Steuerung eines Elektromotors mit einem Relais am Arduino auf. Achte auf die in Sperrrichtung geschaltete Diode parallel zum Motor.

Schließe dann drei Taster an (mit Widerstand! - vgl. den [Abschnitt zu Tastern](https://mintorials.de/de/arduinoskript/bausteine-algorithmen#taster)).

*Programmiere nun einen einfachen steuerbaren Waschmaschinenprototypen!*

Dieser gibt solange auf dem seriellen Monitor die aktuell gesetzte Waschzeit aus, bis der mittlere Taster gedrückt wurde, was bedeutet, dass der Waschvorgang startet (der Motor dreht sich für die angegebene Zeit). Wenn der linke Taster gedrückt wird, wird die Waschzeit verringert (aber nicht niedriger als eine Sekunde). Wenn der rechte Taster gedrückt wird, wird die Waschzeit vergrößert (aber nicht größer als 30 Sekunden). Nach dem Waschen fragt der Waschmaschinenprototyp wieder nach der Waschzeit.
</div>

! **Recherche: Anwendungen von Relais**
! Recherchiere einige Anwendungen von Relais. Einen guten Startpunkt bietet die [Seite von Leifiphysik](https://www.leifiphysik.de/elektrizitaetslehre/elektromagnetismus/ausblick/relais).

<div markdown="1" class="aufgabe">
#### Vergleich von Transistor und Relais

Transistoren und Relais erfüllen im Wesentlichen die gleiche Funktion: Sie sind elektronisch steuerbare Schalter, bei denen die Stromstärke im Arbeitsstromkreis größer sein kann als die Stromstärke im Steuerstromkreis. Dennoch gibt es einige Unterschiede, weshalb sie für unterschiedliche Aufgaben geeignet sind.

Vergleiche die Steuerung mit einem Transistor und mit einem Relais hinsichtlich der Vor- und Nachteile.
</div>

!!!! #### Relais
!!!! 
!!!! Relais sind elektronisch steuerbare Wechselschalter, bei denen Steuerstromkreis und Arbeitsstromkreis komplett voneinander getrennt sind. Im Steuerstromkreis ist eine Spule, die ein Magnetfeld aufbaut, wenn der Strom eingeschaltet wird. Dadurch wird ein Wechselschalter im Arbeitsstromkreis angezogen, sodass er seine Position wechselt und einen anderen Teil des Arbeitsstromkreises anschaltet. Wenn der Strom durch die Spule im Steuerstromkreis abgeschaltet wird, baut sich das Magnetfeld ab und der Wechselschalter im Arbeitsstromkreis wird durch eine Feder zurück in die Standardstellung (NC) gezogen, sodass der erste Teil des Arbeitsstromkreises angeschaltet wird.
!!!! <div class="flex-box">
!!!! <div markdown="1"> ![Relais als Bild.](relais-klein.png?resize=250&classes=caption "Relais als Bild.")</div>
!!!! <div markdown="1"> ![Relais als Schaltsymbol.](schaltsymbol-relais.png?resize=250&classes=caption "Relais als Schaltsymbol.") </div>
!!!! </div>
!!!! Die Anschlüsse der Spule werden in der Regel mit *A1* und *A2* bezeichnet; die Anschlüsse am Wechselschalter mit *NO* (*normally open*), *NC* (*normally closed*) und *C* (*common ground*) bezeichnet.
