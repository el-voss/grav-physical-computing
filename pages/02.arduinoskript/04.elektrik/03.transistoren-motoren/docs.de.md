---
title: 'Transistoren und Motoren'
menu: '[TM] Transistoren und Motoren'
media_order: 'diode-sperrrichtung.png,l298n-steuerung-bsp.png,l298n-konfiguration.png,l298n-steuerung-funktion.png'
---

# Elektrische Grundlagen Teil 3: Transistoren und Motoren

<style>
    body {
        --abk: 'EG.TM';
    }
</style>

[TOC]

## Schaltungen mit Transistoren steuern

<div markdown="1" class="clearfix">
![Transistor](/images/transistor.jpg?resize=250&classes=caption,figure-right "Transistor mit flacher Seite nach oben.")
Manche Projekte wie die benötigt nur ein sehr simples Programm in der Form WENN - DANN - SONST. Für solche Fälle ist der Arduino eigentlich eine überdimensionierte Lösung - viel einfacher, jedenfalls in Bezug auf die Anzahl der Bauteile, ist die Umsetzung dieser Schaltung mithilfe eines Transistors. Dieser ist (unter anderem) ein elektronischer Schalter, mit dem sich das WENN - DANN - SONST - Verhalten ganz ohne Programm umsetzen lässt.

**Frage:** Wie verwendet man einen Transistor?

Ein Transistor hat drei Anschlüsse, die als Kollektor (**C** von engl. *collector*), Basis (**B**) und Emitter (**E**) bezeichnet werden. Wenn man auf die abgeflachte Seite des Transistors schaut, sind die drei Pins in der genannten Reihenfolge angeordnet. Im Folgenden geht es zunächst um deren Grundfunktionen.
</div>

<div markdown="1" class="aufgabe">
#### Digitalpins verstehen

Befolge die unten angegebenen Schritte und stelle Schlussfolgerungen über die Funktionsweise eines Transistors an. Erkennst du Gemeinsamkeiten zu digitalen Pins?

1.  Baue die unten abgebildeten Schaltungen nacheinander auf. Spiele für die zweite Schaltung ein einfaches Blink-Programm auf den Arduino.
    ![Schaltpläne mit Transistor](/circuits/Schaltplan-Transistor-verstehen.png?lightbox=1024?resize=800)
2.  Ersetze den $ 10\,  k\Omega$ Widerstand durch einen $ 100\,  k\Omega$ Widerstand.
</div>

<div markdown="1" class="aufgabe">
#### Vermessung

Um den Transistor zielgerichtet nutzen zu können, muss man die Spannung $U_{BE}$ zwischen Basis und Emitter kennen, bei der der Transistor anfängt, durchzuschalten. Dazu dient die rechts abgebildete Schaltung.

Das Potentiometer lässt sich wieder in zwei Teilwiderstände $R_1$ und $R_2$ zerlegen, an denen die Spannung $U_1$ bzw. $U_2$ abfällt. Erkläre, wie der Widerstand $R_2$ und die Spannung $U_{BE}$ zusammenhängen.

![Transistorschaltung zur Messerung der Spannung zwischen Basis und Emitter.](/circuits/Schaltplan-U-BE-Messung1.png?lightbox=1024&resize=400)

Baue die Schaltung nun auf. Um die Spannung $U_{BE}$ messen zu können, wird ein Arduino ergänzt, der die Spannung in A0 ausliest und auf dem seriellen Monitor ausgibt.

Bestimme so die Grenzspannung $U_{BE}$, ab der der Transistor anfängt zu schalten, sodass die LED leuchtet.
<div class="flex-box">
<div markdown="1">![Programm: Spannung an Transistor messen.](/images/spannung-an-transistor-messen.png?lightbox=1024&resize=500)</div>
<div markdown="1">![Schaltplan: Spannung an Transistor messen.](/circuits/Schaltplan-U-BE-Messung.png?lightbox=1024&resize=400)</div>
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

![Transistorschaltung für eine Straßenlampe.](/circuits/Schaltplan-Strassenlampe-ohne-mC.png?lightbox=1024&resize=500)
</div>

!!!! #### Der Transistor
!!!! 
!!!! Ein Transistor hat drei Anschlüsse, die als Kollektor (**C** von engl. *collector*), Basis (**B**) und Emitter (**E**) bezeichnet werden. Wenn man auf die abgeflachte Seite des Transistors schaut, sind die drei Pins in der genannten Reihenfolge angeordnet.
!!!! <div class="flex-box">
!!!! <div markdown="1">![Transistor als Bild.](/images/transistor.jpg?resize=200&classes=caption "Transistor als Bild.")</div>
!!!! <div markdown="1">![Schaltsymbol für Transistor.](/images/transistor-schaltsymbol.png?resize=200&classes=caption "Schaltsymbol für einen Transistor.")</div>
!!!! </div>
!!!! Transistoren dienen als elektronische Schalter oder Verstärker (letzteres wird im Abschnitt zu Motoren genutzt). Als Schalter lassen sie sich nutzen, weil die Strecke vom Kollektor zum Emitter ohne Weiteres nicht leitet. Erst wenn zwischen Basis und Emitter eine Spannung $U_{BE} \approx  0,6\, V$ anliegt, fließt *zwischen Basis und Emitter ein schwacher Strom*, der den Transistor mit Elektronen flutet und es dadurch ermöglicht, dass *zwischen Kollektor und Emitter ein starker Strom* fließen kann.
!!!! Die Möglichkeit, mit Transistoren automatisierte Schalter herzustellen und dadurch Programme physikalisch abzubilden, macht Transistoren zur Grundlage von Mikrocontrollern und Computern und damit zu einer der wichtigsten Erfindungen des 20. Jahrhunderts. Schon auf dem kleinen integrierten Schaltkreis des Arduino, dem ATMEGA328P, sind Millionen von Transistoren verbaut. Wenn ein Digitalpin des Arduino auf HIGH gestellt wird, dann wird intern ein Transistor geschaltet.
!!!! Es gibt verschiedene Bauarten für Transistoren. Im hier verwendeten Starter Kit sind zwei npn-Transistoren (Pn2222) vorhanden, was bedeutet, dass darin zwei n-dotierte und eine p-dotierte Schicht in der Mitte verbaut sind. npn-Transistoren müssen mit einer n-Schicht (normalerweise der Emitter) mit GND verbunden sein.

## Elektromotor und Diode

Bei vielen Projekten soll sich etwas bewegen - dies lässt sich mit Elektromotoren realisieren. Die Ansteuerung eines Elektromotors erfordert auf der Hardware-Seite ein wenig Vorbereitung, denn aufgrund der hohen Ströme, die Elektromotoren ziehen, sollte man sie nicht direkt an den Digitalpins des Arduino anschließen. Für die Steuerung greift man meistens auf einen Transistor zurück; eine brauchbare Alternative ist aber auch das Relais. Beide Steuerungsmöglichkeiten werden im Folgenden erarbeitet.

**Frage:** Wie betreibt man einen Elektromotor am Arduino?

<div markdown="1" class="aufgabe">
#### Motor und Diode - ein Paar, das zusammen gehört

1. Bei der Verwendung von Elektromotoren benötigt man stets eine Diode, die parallel zum Elektromotor geschaltet wird. Lies im unten folgenden Hintergrundwissen nach, warum dies so ist.
2. Zeichne den unten abgebildeten Schaltplan zwei Mal ab. Zeichne zuerst den Stomfluss ein, wenn der Arduino unter Spannung steht (z. B. weil er per USB-Kabel am Computer angeschlossen ist). Zeichne in der zweiten Schaltung den Stromfluss ein, wenn die Spannung vom Arduino getrennt wird.
3. Erkläre die Funktion der Diode parallel zum E-Motor in eigenen Worten.

!! Es ist sehr wichtig, dass die Diode richtig, also in Sperrrichtung, eingebaut wird, da sonst der Arduino zerstört werden könnte!

![Anschluss eines Gleichstrom-Elektromotors mit dem Arduino als Spannungsquelle.](/circuits/Schaltplan-Motoranschluss-einfach.png?lightbox=1024&resize=500&classes=caption "Anschluss eines Gleichstrom-Elektromotors mit dem Arduino als Spannungsquelle.")
</div>

*Hintergrundinformationen:*

!!!! #### Elektromotor
!!!! 
!!!! Ein **Elektromotor** besteht aus mehreren Spulen und Magneten. Wenn Strom durch die Spulen fließt, baut sich um die Spulen ein Magnetfeld auf, das mit dem Magnetfeld der eingebauten Magneten wechselwirkt (Anziehung/Abstoßung), sodass es zu einer Drehung des Motors kommt. Ein sogenannter Kommutator sorgt dafür, dass der Strom durch die Spulen ständig seine Richtung wechselt, sodass es immer wieder von Neuem zu Anziehung bzw. Abstoßung der Magnetfelder kommt und die Drehung nicht aufhört, solange eine Spannung anliegt.
!!!! <div class="flex-box">
!!!! <div markdown="1">![Gleichstrom-Elektromotor als Bild.](/images/dc-motor-klein.png?resize=200&classes=caption "Gleichstrom-Elektromotor als Bild.")</div>
!!!! <div markdown="1">![Gleichstrom-Elektromotor als Schaltsymbol.](/circuits/motor-schaltsym.png?resize=200&classes=caption "Gleichstrom-Elektromotor als Schaltsymbol.")</div>
!!!! </div>

Wenn keine Spannung mehr am Motor anliegt, wird sich der Motor aufgrund seiner Trägheit immer noch ein wenig weiterdrehen. Durch das Drehen der Spulen im Magnetfeld der eingebauten Permanentmagneten wird vom Motor eine Spannung induziert, die entgegengesetzt zur vorherigen Richtung ist. Dort, wo vorher der Minuspol gewesen ist, wird nun vom Motor ein Pluspol induziert und umgekehrt. Diese “falsch” gerichtete Spannung würde den Arduino zerstören. Aus diesem Grund schaltet man eine *Diode* parallel zum Motor.

!!!! #### Diode
!!!! 
!!!! Eine **Diode** ist wie ein elektrisches Ventil: Sie lässt den Strom nur in eine Richtung durch. Im Gegensatz zu Leuchtdioden wandeln “normale” Dioden die elektrische Energie in Wärme um. In *Durchlassrichtung* wird der negative Pol (bzw. GND) mit der Seite verbunden, an der der Ring angebracht ist, und der positive Pol mit der anderen Seite.
!!!! <div class="flex-box">
!!!! <div markdown="1">![Diode als Bild](/images/diode2.jpg?resize=250&rotate=180&classes=caption "Diode als Bild.")</div>
!!!! <div markdown="1">![Diode als Schaltsymbol in Durchlassrichtung](/circuits/diode-schaltsym.png?resize=250&classes=caption "Diode als Schaltsymbol in Durchlassrichtung.")</div>
!!!! <div markdown="1">![Diode als Schaltsymbol in Sperrrichtung](diode-sperrrichtung.png?resize=250&classes=caption "Diode als Schaltsymbol in Sperrrichtung.")</div>
!!!! </div>

Die Diode wird jedoch *Sperrrichtung* eingebaut, also so, dass der Ring mit 5V und die andere Seite mit GND verbunden ist. Dadurch fließt im Normalbetrieb kein Strom durch die Diode. Wenn jedoch die entgegengerichtete Induktionsspannung des Motors auftritt, kann der dadurch hervorgerufene Strom durch die Diode abfließen, bis die verbleibende elektrische Energie vollständig in Wärme umgewandelt wurde.

! **Recherche: Verpolungsschutz**
! LEDs leuchten nicht, wenn man sie falsch herum anschließt. Andere Bauteile wie Elektrolytkondensatoren explodieren sogar, wenn man sie falsch herum anschließt. Um zu vermeiden, dass solche Schäden entstehen, wenn man eine Batterie falsch herum anschließt, werden in einigen Fällen Dioden genutzt. Recherchiere im [Elektronik-Kompendium](https://www.elektronik-kompendium.de/sites/slt/1206251.htm), wie dies funktioniert.

! **Recherche: Aufbau von Gleichstrom-Elektromotoren**
! Oben wurde die Funktionsweise von Gleichstrom-Elektromotoren bereits angedeutet. Recherchiere im Internet den genauen Aufbau und Ablauf der Drehbewegung.

## Elektromotor mit Transistor steuern

Der 5 V-Pin des Arduino liefert zwar in vielen Fällen genügend Strom für den Motor, jedoch lässt er sich nicht programmieren. Dazu lässt sich ein Transistor einbauen.

**Frage:** Wie steuert man einen Elektromotor mit einem Transistor am Arduino?

Die unten abgebildete Schaltung zeigt, wie ein npn-Transistor eingebaut werden kann, um den Motor mithilfe von Digitalpin 9 zu schalten. Der Transistor lässt den Strom zwischen Emitter (E) und Kollektor (C) passieren, wenn die Spannung zwischen Basis (B) und Emitter (E) mehr als 0,7 V beträgt, anderenfalls sperrt er. Der Vorwiderstand mit $R= 330\,  \Omega$ sorgt dafür, dass der Basisstrom nicht zu groß wird.

Es ist ratsam, die Basis mit einem PWM-Pin (gekennzeichnet durch $\sim$) zu verbinden, da sich dadurch die Geschwindigkeit des Motors steuern lässt.

<div class="flex-box">
<div markdown="1" class="flexible">![Anschluss eines Gleichstrom-Elektromotors.](/circuits/motoranschluss-mit-steuerung.png?lightbox=1024&resize=500&classes=caption "Anschluss eines Gleichstrom-Elektromotors mit Hilfe eines Transistors.")</div>
<div markdown="1" class="flexible">![npn-Transistor; Blick auf die flache Seite](/images/transistor-schematisch.png?resize=250&classes=caption "npn-Transistor Pn2222; Blick auf die flache Seite.") </div>
</div>

<div markdown="1" class="aufgabe">
Baue die oben abgebildete Schaltung auf und probiere die Steuerung des Motors mittels Pulsweitenmodulation aus.

![analogen Wert schreiben](/images/pwm-motorsteuerung.png)

Simuliere mit dem Motor eine konstant beschleunigende Bewegung (*vgl. [Fading](https://doku.el-voss.de/de/arduinoskript/elektrik#pulsweitenmodulation-pwm)*), gefolgt von einer abrupten Bremsung.
</div>

<div markdown="1" class="projekt">
#### Automatischer Lüfter
Baue einen Lüfter, der anspringt, wenn die Temperatur größer als $ 30 °C$ wird. Probiere deine Schaltung durch Anfassen des NTC aus.

*Erweiterung:* Programmiere die Schaltung so, dass der Lüfter sich umso schneller dreht, je höher die Temperatur ist.
</div>

*Schaltung mit externer Spannungsquelle*

Wenn der verwendete Elektromotor größer ist und mehr Strom zieht bzw. größere Spannungen benötigt, muss für den Elektromotor eine eigene Spannungsquelle verwendet werden, die genügend Spannung und Strom bieten kann. Der unten abgebildete Schaltplan zeigt, wie der Aufbau dann vorzunehmen ist. Wichtig ist dabei, dass ein gemeinsames GND-Niveau hergestellt wird - vergleichbar einem “Normalnull” für die Höhenangaben, hier allerdings als “Normalnull” für das elektrische Potenzial.

Der Arduino kann über USB oder eine zweite Batterie mit Strom versorgt werden.

![Anschluss eines Gleichstrom-Elektromotors am Arduino mit Steuerung über einen Transistor und mit externer Spannungsquelle für den Motor.](/circuits/Schaltplan-Motoranschluss-ext-Spannung.png?lightbox=1024&resize=500&classes=caption "Anschluss eines Gleichstrom-Elektromotors am Arduino mit Steuerung über einen Transistor und mit externer Spannungsquelle für den Motor.")

## Elektromotor mit Relais steuern

Wie oben zu sehen, muss der Arbeitsstromkreis mit dem Motor und der Steuerstromkreis mit dem Arduino bei Verwendung eines Transistors immer miteinander verbunden bleiben - auch bei sehr großen Stromstärken. Damit verbleibt immer eine gewisse Gefahr, dass eine Spannungsspitze auf den Arduino durchschlägt und ihn zerstört. Mit einem Relais lässt sich dieses Risiko vermeiden. Ein weiterer Vorteil ist, dass der Arbeitsstromkreis auch mit Wechselstrom betrieben werden kann, wenn ein Relais als Schalter genutzt wird.

**Frage:** Wie verwendet man ein Relais am Arduino?

Ein Relais (siehe unten, grau unterlegt) besteht im Wesentlichen aus einer Spule mit Eisenkern und einem Wechselschalter, an dem eine Feder angebracht ist.

<div class="flex-box">
<div markdown="1">![Relais-Aufbau offen](/images/relais-aufbau-offen.png?lightbox=1024&classes=caption "Aufbau eines Relais (grau unterlegt) einschließlich der Stellung des Wechselschalters, wenn im Steuerstromkreis kein Strom fließt.") </div>
<div markdown="1">![Relais-Aufbau geschlossen](/images/relais-aufbau-geschlossen.png?lightbox=1024&classes=caption "Aufbau eines Relais (grau unterlegt) einschließlich der Stellung des Wechselschalters, wenn im Steuerstromkreis Strom fließt.") </div>
</div>

<div markdown="1" class="aufgabe">
#### Physikalischer Hintergrund zum Relais

Erkläre die Stellung des Wechselschalters in Abhängigkeit des Steuerstromkreises in den beiden abgebildeten Situationen. Welche Lampe leuchtet?

Die Kontakte am Wechselschalter werden mit *NO* (*normally open*), *NC* (*normally closed*) und *C* (*common ground*) bezeichnet. Ordne die Bezeichnungen den Kontakten in der Skizze zu.
</div>

<div markdown="1" class="aufgabe">
#### Anschluss eines Relais

**a)** Wie aus dem obigen Schaltplan ersichtlich wird, hat ein Relais fünf Anschlüsse, die jedoch nicht beschriftet sind. Suche im Internet nach “Datasheet 'Gerätebezeichnung des Relais'” (Bezeichnung vom Relais ablesen) und entnimm dem Datenblatt, welche Anschlüsse zum Steuer- bzw. Arbeitsstromkreis gehören.
![Relais](/images/relais-klein.png?resize=200&classes=caption "Ein Relais.")

!! **Achtung:** Auf dem Relais ist angegeben, dass damit bis zu $ 250\, V$ Wechselspannung und $ 10\,  A$ geschaltet werden können. Das sollte man mit solch billigen Bastelmodulen aber **niemals machen**\! Generell gilt: **Nur ausgebildete Fachleute sollten mit Spannungen von mehr als 24 V hantieren\!**

**b)** Baue die Schaltung entsprechend des unten abgebildeten Schaltplans auf. Nutze dazu das “Power Module” auf dem Steckbrett (Erklärung unten). Probiere die Schaltung des Relais aus, indem du die Stromzufuhr der Spule unterbrichst und wieder herstellst.

![Relais-Schaltung ohne Arduino](/circuits/relais-schaltung-ohne-arduino.png?lightbox=1024&resize=500&classes=caption "Relais-Schaltung ohne Arduino.")

**c)** Ordne in einer Skizze des Relais die Anschlüsse ihrer Bezeichnung (A1, A2, C, NO, NC) zu.
</div>

!!!! ![Power Supply Module](/images/steckbrett-mit-power-module-klein.png?resize=300&classes=caption,figure-right "Power Supply Module auf Steckbrett mit angeschlossener Batterie.")
!!!! #### Das “Power Supply Module”
!!!! 
!!!! Das Power Supply Module dient zur Spannungsversorgung auf einem Steckbrett. Dazu kann eine Batterie mit $ 6,5\, V$ bis $ 12\, V$ oder ein USB-Kabel angeschlossen werden. Die Spannung wird auf dem Modul je nach Einstellung der *Jumper* auf $ 5\, V$ oder $ 3,3\, V$ heruntergeregelt. Dazu verbindet man mithilfe der Jumper die Anschlüsse `5V` und `OFF` bzw. `3.3` und `OFF`.
!!!! Die Spannung kann entlang der langen äußeren Leisten abgegriffen werden, wenn der Taster neben der Hohlbuchse gedrückt ist. Die Zuordnung zu Pluspol und Minuspol ist auf dem Power Supply Module mit `+` bzw. `-` markiert.

<div markdown="1" class="aufgabe">
#### Anschluss eines Relais am Arduino

<div class="flex-box">
<div markdown="1" class="flexible">![Relais-Schaltung mit Arduino](/circuits/relais-schaltung-mit-arduino.png?lightbox=1024&resize=500&classes=caption "Relais-Schaltung am Arduino.")</div>
<div markdown="1" class="flexible">![npn-Transistor; Blick auf die flache Seite](/images/transistor-schematisch.png?resize=250&classes=caption "npn-Transistor Pn2222; Blick auf die flache Seite.") </div>
</div>

Der Schaltplan oben zeigt, wie man ein Relais mit dem Arduino steuert.
1.  Erkläre die Funktion der in Sperrrichtung geschalteten Diode parallel zur Spule des Relais.
2.  Erkläre die Funktion des Transistors.
    *Hinweis:* Der 5V-Pin und der GND-Pin vertragen bis zu $ 200\,  mA$. Die Digitalpins vertragen dagegen maximal $ 40\,  mA$; normalerweise sollten $ 20\,  mA$ nicht überschritten werden (s. [Pin Current Limitations](https://playground.arduino.cc/Main/ArduinoPinCurrentLimitations/)).
3.  Baue die Schaltung auf und teste sie mit einem Blink-Programm.
</div>

<div markdown="1" class="projekt">
#### Waschmaschinensteuerung

![Relais-Schaltung mit Motor](/circuits/relais-schaltung-mit-motor.png?lightbox=1024&resize=500&classes=caption "Relais-Schaltung am Arduino mit Motor.")

Baue die oben abgebildete Schaltung zur Steuerung eines Elektromotors mit einem Relais am Arduino auf. Achte auf die in Sperrrichtung geschaltete Diode parallel zum Motor.

Schließe dann drei Taster an (mit Widerstand! - vgl. den [Abschnitt zu Tastern](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#taster)).

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
!!!! <div markdown="1"> ![Relais als Bild.](/images/relais-klein.png?resize=250&classes=caption "Relais als Bild.")</div>
!!!! <div markdown="1"> ![Relais als Schaltsymbol.](/circuits/schaltsymbol-relais.png?resize=250&classes=caption "Relais als Schaltsymbol.") </div>
!!!! </div>
!!!! Die Anschlüsse der Spule werden in der Regel mit *A1* und *A2* bezeichnet; die Anschlüsse am Wechselschalter mit *NO* (*normally open*), *NC* (*normally closed*) und *C* (*common ground*) bezeichnet.


## Elektromotoren mit einem Motortreiber steuern (inkl. Drehrichtung)

Die Steuerung von Motoren erfordert in den oben beschriebenen Fällen stets mehrere Bauteile und einige Überlegungen zum Aufbau der Schaltung. Außerdem kann dabei nicht die Drehrichtung geändert werden. Integrierte Schaltkreise wie der L293D oder der L298N, auch Motortreiber genannt, vereinfachen den Aufbau der Schaltung für gleich zwei Motoren und ermöglichen zusätzlich die flexible Steuerung der Drehrichtung. Beide basieren auf der Schaltung mit einer *H-Brücke* bzw. einem *Vierquadrantensteller*.

**Frage:** Wie steuert man einen Motor inkl. Drehrichtung mit einem Motortreiber?

### Funktionsweise einer H-Brücke 

<div markdown="1" class="aufgabe">
#### Aufbau einer H-Brücke - der Vierquadrantensteller

Um die Drehrichtung des Motors kontrollieren zu können, braucht man eine spezielle Anordnung von Transistoren, die als *H-Brücke* oder *Vierquadrantensteller* bezeichnet wird. Dieser Aufbau befindet sich auch im L293D und im L298N.

![Vereinfachter Aufbau eines Vierquadrantenstellers mit Transistoren und zugehörigen Freilaufdioden (links) sowie die noch einmal vereinfachte Ersatzschaltung mit Schaltern.](/circuits/vierquadrantensteller.png?lightbox=1024&resize=800&classes=caption "Vereinfachter Aufbau eines Vierquadrantenstellers mit Transistoren und zugehörigen Freilaufdioden (links) sowie die noch einmal vereinfachte Ersatzschaltung mit Schaltern.")

1.  Die Drehrichtung des Motors hängt davon ab, in welcher Richtung der Strom durch den Motor fließt. Notiere, welche Transistoren / Schalter eingeschaltet und welche Transistoren / Schalter ausgeschaltet sein müssen, damit der Strom von links nach rechts durch den Motor fließt. Notiere danach die Kombination für die Stromrichtung von rechts nach links.
2.  Erkläre, wie sich der Motor mithilfe der vier Transistoren bzw. Schalter bremsen lässt.
3.  Welche Schaltkombinationen der Transistoren müssen unbedingt vermieden werden?

*Hinweis:* Die Freilaufdioden dienen dazu, die vom Motor induzierten Ströme abfließen zu lassen.
</div>

Da stets zwei Transistoren gemeinsam eingeschaltet werden müssen, könnten diese beim Anschluss an den Arduino über einen gemeinsamen Digitalpin gesteuert werden. Zudem ist es im Allgemeinen sinnvoll, für den Motor und den Arduino verschiedene Spannungsquellen zu verwenden, die über einen gemeinsamen GND-Anschluss geerdet werden, damit die möglicherweise hohen Ströme des Motors den Arduino nicht zerstören.

![Steuerung eines Motors mit einem Vierquadrantensteller am Arduino.](/circuits/vierquadrantensteller-an-arduino.png?lightbox=1024&resize=800&classes=caption "Steuerung eines Motors mit einem Vierquadrantensteller am Arduino.")

Bei der oben dargestellten Schaltung muss jedoch immer noch genau darauf geachtet werden, dass nicht versehentlich alle vier Transistoren leitend geschaltet werden. Daher ist die Steuerung mit dem L293D bzw. dem L298N noch ein wenig komplexer - die oben angestellten Überlegungen verdeutlichen aber gut den prinzipiellen Aufbau.

### Steuerung mit dem L293D

!!!! #### Der Motortreiber L293D
!!!! 
!!!! Der L293D ist ein integrierter Schaltkreis (*IC* von engl. *integrated circuit*), das heißt, in das schwarze Gehäuse sind Schaltkreise mit Transistoren, Widerständen, Dioden etc. integriert. Genauer gesagt, enthält der L293D zwei H-Brücken oder Vierquadrantensteller, die sich mit den Pins an beiden Seiten steuern lassen. Bei der Nummerierung der Pins ist darauf zu achten, dass die kleine Kerbe nach oben gehalten wird.
!!!! <div class="flex-box">
!!!! <div markdown="1">![L293D als Bild.](/images/l293d.jpg?resize=150&classes=caption "L293D als Bild")</div>
!!!! <div markdown="1">![L293D als Schaltsymbol.](/circuits/motortreiber-l293d.png?resize=200&classes=caption "L293D als Schaltsymbol.")</div>
!!!! </div>

!! *Achtung: Der L293D kann leicht mit anderen Bauteilen wie z. B. einem Shift-Register verwechselt werden, das dieselbe Bauart hat. Um sicher zu gehen, muss man die winzige Beschriftung des Bauteils lesen!*

Im Folgenden wird die Belegung der Pins für die linke Seite beschrieben (vgl. Abbildung unten). Die Belegung auf der rechten Seite verläuft analog.

Der Motor wird an Pin 3 und 6 (`Out1` und `Out2`) angeschlossen. Der jeweilige Zustand der `Out`-Pins kann über Pin 2 und 7 (`In1` und `In2`) geregelt werden. Wenn an `In1` der Zustand `HIGH` und an `In2` `LOW` anliegt, wird das auf `Out1` und `Out2` übertragen, sodass durch den Motor ein Strom fließen kann. Diese Übertragung wird jedoch durch Pin 1 (`En1,2` für *enable pin 1, 2*) gesteuert. Wenn an `En1,2` `HIGH` anliegt, wird die Input-Konfiguration übertragen, bei `LOW` nicht. Durch ein PWM-Signal an `En1,2` kann die Leistung des Motors entsprechend gedrosselt werden.

Die vier `GND`-Anschlüsse dienen zur Stromversorgung und zur Wärmeableitung, falls hohe Ströme auftreten. An `Vmotor` wird der Pluspol der Versorgungsspannung für den Motor angeschlossen; an `Vcc` der Logik-Pegel von 5V für die Schaltung des IC.

![Steuerung eines Motors mit dem L293D.](/circuits/l293d-an-arduino.png?lightbox=1024&resize=500&classes=caption "Steuerung eines Motors mit dem L293D.")

<div markdown="1" class="aufgabe">
#### Betrieb des L293D

1.  Baue die oben beschriebene Schaltung auf. Nutze dazu das *Power Supply Module* (siehe oben).
2.  Experimentiere mit verschiedenen Input-Konfigurationen und PWM-Werten für den `En1,2`-Pin.
3.  Halte die Wirkung auf den Motor tabellarisch fest. Hier genügt es, wenn für den `En1,2`-Pin nur zwischen *ein / 1* und *aus / 0* unterschieden wird.
    
    | In1 | In 2 | En1,2 | Wirkung |
    | :-: | :--: | :---: | :-----: |
    |  1  |  0   |   1   |    …    |
    
<div class="flex-box">
<div markdown="1">![L293D in der Roboterkonfiguration.](/images/prog-konfiguration-l293d.png?classes=caption "L293D in der Roboterkonfiguration.")</div>
<div markdown="1">![Steuerung des L293D.](/images/prog-motorsteuerung-l293d.png?classes=caption "Steuerung des L293D.")</div>
</div>
</div>

! **Recherche: Wie stark darf der L293D belastet werden?**
! Bei Motoren ist immer genau darauf zu achten, welche Stromstärken und Spannungen die verwendeten Bauteile aushalten. Suche nach dem Datenblatt (*data sheet*) des L293D und notiere die Maximalwerte zu Versorgungsspannung, Stromstärke und kurzfristige Spitzenstromstärke, die der IC aushält (*absolute maximum ratings*).

### Steuerung mit dem L298N

!!!! #### Der Motortreiber L298N
!!!! 
!!!! Das Motortreibermodul L298N ist ein beliebtes Bauteil, weil es den Anschluss von Motoren sehr einfach macht und weil es zudem über einen Spannungsregler verfügt, den man in einigen Fällen für die Stromversorgung von weiteren Bauteilen verwenden kann. Der Motortreiber-IC ist an ein Kühlelement geschraubt, um die entstehende Wärme abzuleiten. In dem schwarzen Kasten sind zwei [H-Brücken bzw. Vierquadrantensteller](https://doku.el-voss.de/de/arduinoskript/elektrik/transistoren-motoren#aufbau-des-l293d-der...) verbaut, sodass sich die Motoren in beide Richtungen drehen lassen.
!!!! 
!!!! ![l298n-erklaerung](l298n-erklaerung.png?lightbox=1024&resize=600&classes=caption "Übersicht der Pinbelegung des Motortreibermoduls L298N.")
 
*Zur Motorsteuerung*
Ein Motor wird an `Out1`und `Out2` angeschlossen. Der jeweilige Zustand der `Out`-Pins kann über die Pins `In1` und `In2` geregelt werden. Wenn an `In1` der Zustand `LOW` und an `In2` der Zustand `HIGH` anliegt, wird dies auf `Out1` bzw. `Out2` übertragen, sodass durch den Motor ein Strom fließen kann und er sich vorwärts dreht. Diese Übertragung wird jedoch durch den Pin `En1,2` (für *Enable 1, 2*) gesteuert. Wenn an `En1,2` `HIGH` anliegt, wird die Input-Konfiguration übertragen, bei `LOW` nicht. Durch ein PWM-Signal an `En1,2` kann die Leistung des Motors entsprechend gedrosselt werden.

![l298n-flussdiagramm-bsp](l298n-flussdiagramm-bsp.png?lightbox=1024&resize=500&classes=caption "Veranschaulichung der Funktionsweise des Motortreibers (siehe Text).")
 
Die Steuerung des Motors an `Out3` und `Out4` erfolgt analog über `In3` und `In4`, deren Konfiguration übertragen wird, wenn `En3,4` auf `HIGH` steht.
 
*Hinweis:* Durch den Jumper auf dem `En1,2`-Pin wird dieser mit dem 5V-Potential (`HIGH`) verbunden, sodass die Input-Konfiguration immer direkt übertragen wird. Dann ist aber kein PWM-Signal mehr möglich, weshalb die Jumper in der Anleitung oben entfernt werden. Stattdessen werden die `En1,2`-Pins mit einem PWM-Pin des Arduino verbunden.
 
*Zur Spannungsversorgung*
Am `Vin`-Pin muss der Pluspol einer Batterie mit 7V bis 12V angeschlossen werden. Der Minuspol muss mit `GND` verbunden werden. Diese Spannung wird vom Spannungsregler auf ein stabiles 5V-Potential heruntergeregelt, welches für die Schaltlogik benötigt wird. Über den `5V`-Pin (in Kombination mit dem `GND`-Pin) kann dieses Potential auch für weitere Bauteile genutzt werden. In dieser Anleitung geschieht dies jedoch nicht, weil die Stromstärke der Batterie dann nicht mehr ausreicht, um eine stabile Spannungsversorgung für alle Bauteile zu gewährleisten.

<div markdown="1" class="aufgabe">
#### Betrieb des L298N

1.  Baue die oben beschriebene Schaltung auf. Nutze als Spannungsquelle eine 9V-Batterie an `VIN` und `GND` des L298N.
2.  Experimentiere mit verschiedenen Input-Konfigurationen und PWM-Werten für den `En1,2`-Pin.
3.  Halte die Wirkung auf den Motor tabellarisch fest. Hier genügt es, wenn für den `En1,2`-Pin nur zwischen *ein / 1* und *aus / 0* unterschieden wird.
    
    | In1 | In 2 | En1,2 | Wirkung |
    | :-: | :--: | :---: | :-----: |
    |  1  |  0   |   1   |    …    |
    
<div class="flex-box">
<div markdown="1">![L298N in der Roboterkonfiguration.](l298n-konfiguration.png?classes=caption "L298N in der Roboterkonfiguration.")</div>
<div markdown="1">![Steuerung des L298N.](l298n-steuerung-bsp.png?classes=caption "Steuerung des L298N.")</div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Einfachere Steuerung mit Funktionen

In der folgenden Abbildung ist festgehalten, wie sich die Motorsteuerung in eine Funktion auslagern lässt, um das Programm aussagekräftiger und kürzer zu machen, wenn die gleichen Blöcke immer wieder genutzt werden.

![l298n-steuerung-funktion](l298n-steuerung-funktion.png?lightbox=1024&resize=800&classes=caption "Steuerung des L298N mit einer Funktion.")

1. Implementiere das abgebildete Programm selbst und erkläre den Ablauf. Gehe auch darauf ein, welche Werte für die Leistung übergeben werden dürfen.
2. Passe die Funktion ggf. an, sodass sich dein Motor ebenfalls vorwärts dreht, wenn die Funktion ausgeführt wird (je nach Verkabelung kann es sein, dass dies bereits der Fall ist).
3. Implementiere selbst die folgenden Funktionen:
    - `stoppe`: Hält den Motor an.
    - `dreheRueckwaertsMitLeistung (leistung )`: Dreht den Motor rückwärts mit der angegebenen Leistung.
    - `dreheVorwaertsMitLeistungInProzent ( leistung )`: Dreht den Motor vorwärts, wobei eine Leistung von 100 die höchstmögliche Geschwindigkeit bedeutet und eine Leistung von 0 einen Stopp bedeutet.

</div>


