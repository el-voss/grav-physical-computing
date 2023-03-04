---
title: 'Entscheidungen und der serielle Monitor'
menu: '[E] Entscheidungen und der serielle Monitor'
---

# Bausteine von Algorithmen Teil 1: Entscheidungen und der serielle Monitor

<style>
    body {
        --abk: 'BA-E';
    }
</style>

[TOC]

## Entscheidungen programmieren

Schaltungen und Programme werden erst dann richtig interessant, wenn sie auf ihre Umwelt reagieren. Im einfachsten Fall lässt sich dazu ein Taster einbauen, mit dem sich von außen entscheiden lässt, wie das Programm weiterlaufen soll. Dementsprechend müssen im Programm *Fallunterscheidungen* eingebaut werden.

**Ziel:** Der Arduino soll auf Eingaben aus seiner Umwelt reagieren.

<div markdown="1" class="projekt clearfix">
#### Fußgängerampel

![Fallunterscheidung](/images/wenn-mache-sonst.png?classes=caption,figure-right "Fallunterscheidung.")

Baue und programmiere eine Fußgängerampel! Nutze dazu die Informationen aus dem Info-Kasten zum Taster.
</div>

!!!! #### Taster
!!!!
!!!! Ein Taster ist wie ein Schalter, kann also geschlossen sein (Strom fließt) oder offen sein (Strom fließt nicht). Im Gegensatz zum Schalter springt ein Taster aber automatisch wieder in den offenen Zustand zurück, wenn er losgelassen wird.
!!!!
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">![Taster.](/images/taster.jpg?resize=200&classes=caption "Taster.")</div>
!!!! <div markdown="1">![Schaltsymbol eines Tasters.](/circuits/taster-schaltsymbol.png?resize=200&classes=caption "Schaltsymbol eines Tasters.")</div>
!!!! </div>

Im folgenden Schaltplan ist dargestellt, wie man einen Taster am Arduino so anschließt, dass man seinen Zustand im digitalen Pin 3 auslesen kann. Dazu ist die zugehörige Taster-Konfiguration in Nepo (im Open Roberta Lab) abgebildet.

<div markdown="1" class="flex-box">
<div markdown="1">![Konfiguration in Nepo.](/images/tasterkonfiguration.png?resize=200&classes=caption "Konfiguration in Nepo.")</div>
<div markdown="1">![Symbolischer Schaltplan: Taster am Arduino.](/circuits/taster-an-arduino.png?lightbox=1024&resize=500&classes=caption "Symbolischer Schaltplan: Taster am Arduino.")</div>
<div markdown="1">![Ikonischer Schaltplan: Taster am Arduino.](/images/taster-an-arduino-steckplatine.png?lightbox=1024&resize=500&classes=caption "Ikonischer Schaltplan: Taster am Arduino.")</div>
</div>


<div markdown="1" class="projekt">
#### Juke-Box

Baue und programmiere eine Juke-Box!

<div markdown="1" class="flex-box">
<div markdown="1"> ![Konfiguration des Piezo in Nepo](/images/piezokonfiguration.png?classes=caption "Konfiguration des Piezo in Nepo") </div>
<div markdown="1"> ![Steuerung des Piezo](/images/piezo-steuerung.png?classes=caption "Steuerung des Piezo.")</div>
</div>

Die Juke-Box soll zwei verschiedene, kurze Melodien *anspielen* können. Dazu werden zwei Taster auf die beschriebene Art an zwei digitale Pins des Arduino angeschlossen. Schließe zudem an einen Digitalpin einen Piezo-Summer an (siehe unten).

*Idee: Frick, Fritsch und Trick (2015): *Einführung in Mikrocontroller - Der Arduino als Steuerzentrale*, Schülerforschungszentrum Bad Saulgau*

*Hinweise:*

Zwei mögliche Beispiele von Melodien mit Link zu den Noten:

-   [“Alle meine Entchen”](https://www.lieder-archiv.de/alle_meine_entchen-notenblatt_100055.html),
-   [“Oh Tannenbaum”](https://www.lieder-archiv.de/o_tannenbaum-notenblatt_200078.html).

*Frequenzen in Hertz zu den Noten:*

<div markdown="1" style="overflow:auto;">
  | $c^1$ | $cis^1/des^1$ | $d^1$ | $dis^1/es^1$ | $e^1$ | $f^1$ | $fis^1/ges^1$ | $g^1$ | $gis^1/as^1$ | $a^1$ | $ais^1/b^1$ | $h^1$ |
  |-------|---------------|-------|--------------|-------|-------|---------------|-------|--------------|-------|-------------|-------|
  | 262   |     277       | 294   |    311       | 330   | 349   |     370       | 392   |    415       | 440   |   466       | 494   |
</div>
</div>


!!!! #### Piezo-Summer
!!!!
!!!! Mit einem Piezo-Summer lassen sich Töne erzeugen, wenn man eine Spannung anschließt. Das lange Bein muss dabei an den Pluspol (Pin) angeschlossen werden; das kurze an den Minuspol bzw. GND. Ein Vorwiderstand ist dabei nicht notwendig, hilft aber die Lautstärke zu reduzieren.
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1"> ![Piezo-Summer.](/images/piezo-summer.jpg?resize=200&classes=caption "Piezo-Summer")</div>
!!!! <div markdown="1"> ![Schaltsymbol eines Piezo.](/images/piezo-schaltsymbol.png?resize=200&classes=caption "Schaltsymbol eines Piezo.") </div>
!!!! </div>
!!!!
!!!! *Funktionsweise:*
!!!! 
!!!! In einem Piezo-Summer befindet sich ein Kristall mit unterschiedlichen Ladungsschwerpunkten, der von einem Kondensator umgeben ist. Wenn von außen an den Kristall eine Spannung angelegt wird, dann verformt sich die Kristallstruktur durch die Anziehung zwischen den Ladungsschwerpunkten und den Kondensatorplatten (*[inverser piezo-elektrischer Effekt](https://de.wikipedia.org/wiki/Piezoelektrizit%C3%A4t)*). Wenn keine Spannung anliegt, verformt sich der Kristall zurück. Durch diese Verformungen entstehen Druckwellen in der Luft, die wir als Ton wahrnehmen können.
!!!! ![Funktionsprinzip eines Piezo-Summers.](/images/inverser-piezo-effekt.png?classes=caption "Funktionsprinzip des Piezo-Summers: Der inverse piezo-elektrische Effekt.")


## Kommunikation mit dem Arduino: Der serielle Monitor

Bisher hatte die Kommunikation mit dem Arduino stets nur eine Richtung: Vom Computer zum Arduino. Das reicht nicht mehr, wenn eine Messung vorgenommen und deren Ergebnis zurück gemeldet werden soll. Die einfachste Möglichkeit, um dies zu realisieren, ist der serielle Monitor. Dieser soll im Folgenden genutzt werden, um eine Straßenlampe zu konfigurieren, die leuchtet, wenn es dunkel wird.

**Frage:** Wie kann der Arduino mit dem Computer kommunizieren?

<div markdown="1" class="aufgabe">
#### Test des seriellen Monitors

![](/images/serialprint.png?classes=figure-right)
1.  Implementiere ein Programm, das in jeder Sekunde “Moin!” an den seriellen Monitor sendet und übertrage es auf den Arduino.
2.  [Öffne den seriellen Monitor](https://jira.iais.fraunhofer.de/wiki/display/ORInfo/Vorbereitung+Nepo4Arduino#VorbereitungNepo4Arduino-SerialMonitor) im Open Roberta Connector mit einer Baudrate von 9600 und kontrolliere dein Programm.
</div>

Ein LDR ist ein Widerstand, dessen Größe von der Lichtstärke abhängt, die auf ihn trifft (siehe unten). Um ihn auslesen zu können, muss er in einem sogenannten Spannungsteiler mit einem Festwiderstand von $R_F=10 \, k\Omega$ an den Arduino angeschlossen werden (siehe rechts). Der zugehörige Konfigurationsblock ist unten abgebildet.

<div markdown="1" class="flex-box">
<div markdown="1">![Ein LDR.](/images/ldr2.jpg?lightbox=1024&resize=200&classes=caption "Ein LDR")</div>
<div markdown="1">![Konfiguration des LDR.](/images/ldr-konfiguration.png?resize=200&classes=caption "Konfiguration des LDR")</div>
<div markdown="1">![Symbolischer Schaltplan: LDR am Arduino](/circuits/ldr-an-arduino2.png?lightbox=1024&resize=500&classes=caption "Symbolischer Schaltplan: LDR am Arduino")</div>
<div markdown="1">![Ikonischer Schaltplan: LDR am Arduino](/images/ldr-an-arduino-steckplatine.png?lightbox=1024&resize=500&classes=caption "Ikonischer Schaltplan: LDR am Arduino")</div>
</div>

<div markdown="1" class="aufgabe">
#### Erste Experimente mit dem LDR

1.  Baue die oben abgebildete Schaltung zum Auslesen eines LDR am Arduino auf und lasse dir die Lichtstärke in % auf dem seriellen Monitor ausgeben.
2.  Die Veränderung der Lichtstärke in % verläuft genau umgekehrt zur Veränderung des Widerstands des LDR. Beschreibe, wie sich der Widerstand des LDR verhält, wenn es dunkel bzw. wenn es hell wird.
</div>

<div markdown="1" class="projekt">
#### Straßenlampe

Baue eine Straßenlampe, deren Licht (Vorwiderstand!) angeht, wenn es dunkel wird, und ausgeht, wenn es hell wird.
</div>

!!!! #### Fotowiderstand
!!!! 
!!!! Ein **Fotowiderstand**, kurz: **LDR** (*engl. **l**ight **d**ependent **r**esistor*), ist ein lichtabhängiger Widerstand. Wenn es dunkel wird, wird der elektrische Widerstand des LDR größer; wenn es hell wird, wird der elektrische Widerstand des LDR kleiner.
!!!! 
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">![Ein LDR](/images/ldr.jpg?resize=200&classes=caption "Ein LDR")</div>
!!!! <div markdown="1">![Schaltsymbol des LDR](/images/ldr-schaltsymbol.png?resize=200&classes=caption "Schaltsymbol des LDR")</div>
!!!! </div>

### Reflexion: Datentypen

<div markdown="1" class="aufgabe"> 
#### Datentypen

1.  In den bisherigen Anweisungen tauchten verschiedene Typen von Argumenten auf. Die Argumente sind unten noch einmal abgebildet. Gruppiere und charakterisiere sie.
    <div markdown="1" class="flex-box">
    <div markdown="1">![Zahlargument](/images/zahlargument1.png)</div>
    <div markdown="1">![Wahrheitswertargument](/images/wahrheitswertargument1.png)</div>
    <div markdown="1">![Zahlargument](/images/zahlargument2.png)</div>
    <div markdown="1">![Wahrheitswertargument](/images/wahrheitswertargument2.png)</div>
    <div markdown="1">![Textargument](/images/textargument.png)</div>
    </div>
2.  Begründe: Das Argument des `wenn`-Blocks muss hellblau sein.
</div>

!!!! #### Datentypen
!!!!
!!!! Alle Programmiersprachen unterscheiden verschiedene Datentypen, die unterschiedlich codiert sind. Die wichtigsten Datentypen in Nepo sind die Folgenden:
!!!!
!!!! <div class="flex-box">
!!!! <div markdown="1"> ![Wahrheitswert](/images/wahrheitswertargument2.png?resize=200) <br> logische Werte / Wahrheitswerte: <br> Nur zwei Werte möglich, nämlich `wahr` oder `falsch`.</div>
!!!! <div markdown="1"> ![Zahl](/images/zahlargument1.png?resize=200) <br> Zahlenwerte: <br> Sowohl ganze Zahlen als auch Dezimalzahlen (mit Punkt als Komma). </div>
!!!! <div markdown="1"> ![Zeichenketten](/images/textargument.png?resize=200) <br> Zeichenketten: <br> Aneinanderreihung von Zeichen.</div>
!!!! </div>

<br>
## Entscheidungen mit mehreren Kriterien treffen

Bisher waren die zu treffenden Entscheidungen immer nur von einem Kriterium abhängig. Das sind jedoch Ausnahmen. Nun geht es darum, wie man mehrere Kriterien miteinander kombinieren kann.

**Frage:** Wie lassen sich Entscheidungen mit mehreren Kriterien programmieren?

<div markdown="1" class="projekt"> 
#### Carport-Lampe

Baue und programmiere eine Carport-Lampe, die für einige Zeit leuchtet, wenn sie eine Bewegung registriert *und* es draußen gerade dunkel ist. In allen anderen Fällen bleibt die Lampe dunkel. Experimentiere mit den Drehreglern, um die Empfindlichkeit und Dauer des Signals richtig einzustellen.
</div>

*Information zu Bewegungsmeldern:* Bewegungsmelder verfügen über drei Pins, deren Beschriftung man lesen kann, wenn man die Kunststofflinse vorsichtig abzieht (*Vorsicht: Nach Abziehen der Linse nicht den Sensor berühren!*). `Vcc` und `GND` dienen der Stromversorgung der elektronischen Komponenten und müssen mit `5V` und `GND` am Arduino verbunden werden.

Der mittlere `OUT`-Pin ist der Signal-Pin: Wenn eine Bewegung registriert wurde, wird der Wert `wahr` zurückgegeben, ansonsten `falsch`. Zum Einlesen des Signals wird dieser Pin mit einem Digitalpin des Arduino verbunden.

Hinten befinden sich zwei Drehregler (“Potentiometer”), mit denen sich die Dauer des Bewegungssignals (links) und die Empfindlichkeit (rechts) einstellen lassen. Zusätzlich befindet sich auf der rechten Seite ein sogenannter Jumper, mit dem auf einfache Weise eine Steckverbindung zwischen benachbarten Pins hergestellt werden kann. Wenn sich der Jumper ganz außen befindet, dann bleibt das Bewegungssignal nach dem Erkennen einer Bewegung eine Weile aktiv und wird dann auf jeden Fall deaktiviert. Eine neue Bewegung kann erst nach einer gewissen Zeit wieder registriert werden. Wenn der Jumper hingegen leicht nach innen versetzt ist, bleibt das Bewegungssignal so lange erhalten, wie eine Bewegung erkannt wird (siehe [Funduino](https://funduino.de/nr-8-bewegungsmelder)).

<div markdown="1" class="flex-box">
<div markdown="1"> ![Bewegungsmelder mit Linse.](/images/bewegungsmelder.jpg?resize=200&classes=caption "Bewegungsmelder mit Linse.")</div>
<div markdown="1"> ![Pinbelegung.](/images/bewegungsmelder-ohne-linse.jpg?resize=200&classes=caption "Pinbelegung.")</div>
<div markdown="1"> ![Drehregler für Signaldauer (links) und Empfindlichkeit (rechts).](/images/bewegungsmelder-hinten.jpg?resize=200&classes=caption "Drehregler für die Signaldauer (links) und Empfindlichkeit (rechts).")</div>
</div>

<div markdown="1" class="aufgabe"> 
#### Wahrheitswerttabellen

1.  Experimentiere mit der Carport-Lampe, um die folgende Wahrheitswert-Tabelle für die Operation UND auszufüllen.

    A: Bewegung registriert.

    B: Es ist dunkel.

      |**A** | **B** | **A UND B** |
      |------|-------|-------------|
      | wahr | wahr  |             |
      |falsch| wahr  |             |
      | ...  |  ...  |             | 

2.  Ändere das UND zu einem ODER und experimentiere wieder mit der Carport-Lampe, um die folgende Wahrheitswert-Tabelle für die Operation ODER auszufüllen.

    A: Bewegung registriert.

    B: Es ist dunkel.

      |**A** | **B** | **A ODER B** |
      |------|-------|--------------|
      | wahr | wahr  |              |
      | ...  | ...   |              |

3.  Ergänze die Wahrheitswerttabelle für die logische Operation NICHT.

      |**A**  | **NICHT A** |
      |-------|-------------|
      | wahr  |             |
      |falsch |             | 
</div>


!!!! #### Logische Operationen und Wahrheitswerttabellen
!!!!
!!!! Logische Operationen dienen zum Verknüpfen von Wahrheitswerten - ganz so wie Rechenoperationen zum Verknüpfen von Zahlen dienen. Wir betrachten die logischen Operationen UND (AND), ODER (OR) sowie NICHT (NOT). Das Ergebnis dieser Operationen lässt sich anhand von Wahrheitswerttabellen übersichtlich festhalten. Darin wird festgehalten, ob zwei Aussagen bzw. Bedingungen A und B wahr (w) oder falsch (f) sind. In der rechten Spalte steht dann, ob die logische Operation wahr (w) oder falsch (f) ergibt.
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1" style="padding:1em;">
!!!!  |**A** | **B** | **A UND B** |
!!!!  |------|-------|-------------|
!!!!  |  w   |   w   |      w      |
!!!!  |  w   |   f   |      f      |
!!!!  |  f   |   w   |      f      |
!!!!  |  f   |   f   |      f      |
!!!! </div>
!!!! 
!!!! <div markdown="1" style="padding:1em;">
!!!!  |**A** | **B** | **A ODER B** |
!!!!  |------|-------|--------------|
!!!!  |  w   |   w   |      w       |
!!!!  |  w   |   f   |      w       |
!!!!  |  f   |   w   |      w       |
!!!!  |  f   |   f   |      f       |
!!!! </div>
!!!! 
!!!! <div markdown="1" style="padding:1em;">
!!!!  |**A** | **NICHT A** |
!!!!  |------|-------------|
!!!!  |  w   |      f      |
!!!!  |  f   |      w      |
!!!! </div>
!!!! </div>
!!!! Achtung: Die ODER-Operation ergibt auch dann “wahr”, wenn beide Aussagen wahr sind. Das aus dem Alltag bekannte “ENTWEDER-ODER” (XOR) ist eine weitere logische Operation, die “falsch” ergibt, wenn beide Aussagen wahr sind. Diese Operation ist aber nicht in Nepo enthalten.


<div markdown="1" class="aufgabe"> 
#### Verschachtelte Entscheidungen?!

Leo und Lara möchten ihre Carport-Lampe so umprogrammieren, dass sie nachts immer leuchtet und tagsüber nicht. Zusätzlich soll ein Alarm ertönen, wenn es Nacht ist und eine Bewegung registriert wird.

Unten sind ihre Programme abgebildet. Entscheide jeweils (begründet!), ob das Programm für das geforderte Verhalten geeignet ist. Mache gegebenenfalls Verbesserungsvorschläge.

![Leos Programm.](/images/wenn-sonstWenn-sonst-Bsp.png?lightbox=1024&classes=caption "Leos Programm.")
![Laras Programm.](/images/wenn-sonstWenn-sonst-Bsp2.png?lightbox=1024&classes=caption "Laras Programm.")
</div>
