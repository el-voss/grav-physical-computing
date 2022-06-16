---
title: 'Bausteine von Algorithmen'
menu: 'Bausteine von Algorithmen'
taxonomy:
    category:
        - docs
---

# Bausteine von Algorithmen

<style>
    h1 {
  		counter-set: h1 3 ;
	}
</style>

Mit dem Arduino und einigen einfachen Bauteilen lassen sich bereits zahlreiche Projekte umsetzen. Allerdings wird die Programmierung schnell unübersichtlich oder unnötig aufwendig, wenn man sich nicht mit algorithmischen Strukturen auskennt. Daher geht es im folgenden Kapitel um die Einführung von grundlegenden algorithmischen Bausteinen.

In diesem Kapitel lernst du…
-   …Entscheidungen zu programmieren,
-   …den Arduino mit dem Computer kommunizieren zu lassen,
-   …zwischen unterschiedlichen Datentypen zu unterscheiden,
-   …Entscheidungen anhand mehrerer Kriterien zu treffen,
-   …wie man Programme zur Planung oder zum Vergleich auf Papier einfach darstellen kann,
-   …Variablen zu benutzen,
-   …zufällige Ereignisse zu programmieren,
-   …mit Schleifen effizient zu programmieren,
-   …systematisch nach Fehlern im Programm zu suchen.

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
<div markdown="1">![Konfiguration in Nepo.](/images/tasterkonfiguration.png?classes=caption "Konfiguration in Nepo.")</div>
<div markdown="1">![Schaltplan: Taster am Arduino.](/circuits/taster-an-arduino.png?lightbox=1024&resize=500&classes=caption "Schaltplan: Taster am Arduino.")</div>
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

Ein LDR ist ein Widerstand, dessen Größe von der Lichtstärke abhängt, die auf ihn trifft (siehe unten). Um ihn auslesen zu können, muss er in einem sogenannten Spannungsteiler mit einem Festwiderstand von $R_1=10 \, k\Omega$ an den Arduino angeschlossen werden (siehe rechts). Der zugehörige Konfigurationsblock ist unten abgebildet.

<div markdown="1" class="flex-box">
<div markdown="1">![Ein LDR.](/images/ldr2.jpg?resize=200&classes=caption "Ein LDR")</div>
<div markdown="1">![Konfiguration des LDR.](/images/ldr-konfiguration.png?classes=caption "Konfiguration des LDR")</div>
<div markdown="1">![Schaltplan: LDR am Arduino](/circuits/ldr-an-arduino2.png?lightbox=1024&resize=500&classes=caption "Schaltplan: LDR am Arduino")</div>
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

Baue und programmiere eine Carport-Lampe, die für einige Zeit leuchtet, wenn sie eine Bewegung registriert es draußen gerade dunkel ist. In allen anderen Fällen bleibt die Lampe dunkel. Experimentiere mit den Drehreglern, um die Empfindlichkeit und Dauer des Signals richtig einzustellen.
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

## Programme mit Variablen und Schleifen effizient steuern

<div markdown="1" class="aufgabe">
#### Programmvergleich

a) Jana und Jonas haben jeweils LEDs an den Arduino angeschlossen und steuern diese mit den unten abgebildeten Programmen. Vergleiche die beiden Programme im Hinblick auf ihre Wirkung und die Art der Programmierung. Welches gefällt dir besser?
b) Zusatzüberlegung: Wie viel muss man ändern, wenn man die Leuchtdauer ändern will?

<div markdown="1" class="flex-box">
<div markdown="1">![Janas Programm zum Steuern der LEDs.](/images/lauflicht-ohne-variable.png?Lightbox=1024&classes=caption "Janas Programm zum Steuern der LEDs.")</div>
<div markdown="1"> ![Jonas Programm zum Steuern der LEDs.](/images/lauflicht-mit-variable.png?Lightbox=1024&classes=caption "Jonas Programm zum Steuern der LEDs.")</div>
</div>
</div>

<div markdown="1" class="notices green clearfix">
![Variable als Zeiger auf einen Speicherplatz](/images/variable-speicher.png?resize=300&classes=caption,figure-right "Variable zeigt auf Speicherplatz mit Wert.")
#### Variablen
<p>Eine Variable kann man sich als Koffer vorstellen, der einen Namen bekommt und in dem man einen festgelegten Datentyp speichert. Jedes Mal, wenn der Name des Koffers aufgerufen wird, wird der abgespeicherte Wert hervorgeholt und an die Stelle des Namens gesetzt. Intern wird der Variablenname als Verweis auf einen bestimmten Speicherplatz genutzt, in dem der Wert der Variable abgelegt ist.</p>
<p>Für den Namen hat sich der <a href="https://de.wikipedia.org/wiki/Binnenmajuskel#Programmiersprachen">lowerCamelCase</a> etabliert: Der erste Buchstabe ist klein; wenn weitere Wörter folgen, fangen diese mit einem großen Buchstaben an. Leerzeichen sind nicht erlaubt.</p>
</div>

### Zufällige Ereignisse und Wiederholungen programmieren

Viele Dinge werden interessanter, wenn sie sich nicht immer auf die genau gleiche Art wiederholen. Für diese Fälle kann man im Programm den blauen Block für Zufallszahlen verwenden (Expertenblöcke aktivieren!), der jedes Mal eine neue Zufallszahl erzeugt, wenn er aufgerufen wird.
![Block für Zufallszahlen](/images/zufallszahl.png)
Ein einfaches Beispiel ist die “Bombe”, die man bei dem Spiel “Tick Tack Bumm” startet und die man so lange herum geben muss, bis sie explodiert. Dabei ist die Dauer des Tickens ein zufälliger Wert zwischen ca. 5s und 20s.

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/bombe.mp4" type="video/mp4"></source>
<source src="/user/pages/images/bombe.webm" type="video/webm"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>

<div markdown="1" class="projekt clearfix">
#### Bombe bauen

![Wiederholschleife](/images/wdh10mal.png?classes=figure-right,caption "Wiederholschleife.")

Baue und programmiere eine “Bombe”, die für eine zufällige Dauer zwischen 5s und 20s tickt und dann explodiert. Die Bombe wird über einen Taster aktiviert.

Zusatz: Welchen Unterschied macht es, wenn man die ausgewürfelte Zufallszahl in einer Variable speichert?
</div>

<div markdown="1" class="aufgabe">
#### Exkurs: Zufallszahlen von Mikrocontrollern/Mikroprozessoren

Übertrage das unten abgebildete Programm auf den Arduino und betrachte die so erzeugten Zufallszahlen. Drücke dann auf den Reset-Taster am Arduino und betrachte die nun erzeugten Zufallszahlen. Wiederhole den Vorgang einige Male und beschreibe Auffälligkeiten.

![Zufallszahlengenerator](/images/zufallszahlengenerator.png)
</div>

<div markdown="1" class="projekt">
#### Reaktionszeitmesser

Baue und programmiere einen Reaktionszeitmesser.

<div markdown="1" class="flex-box">
<div markdown="1">![Stoppuhr-Block 1](/images/stoppuhr2.png)</div>
<div markdown="1">![Stoppuhr-Block 2](/images/stoppuhr.png)</div>
</div>

Der Reaktionszeitmesser soll zunächst warten, bis ein Taster gedrückt wurde, der besagt, dass es losgehen kann. Dann wird eine LED angeschaltet (Vorwiderstand!) und nach einer zufälligen Zeit wieder ausgeschaltet. Nun beginnt die Zeitmessung. Die Stoppuhr läuft solange, bis der Taster gedrückt wurde. Die gemessene Zeit wird dann über den seriellen Monitor ausgegeben und es wird erneut gewartet, bis der Anwender bestätigt, dass es losgehen kann.

Miss mindestens zehn Mal deine Reaktionszeit und bestimme den Mittelwert. Bist du besser als dein Partner?

*Idee: Frick, Fritsch und Trick (2015): Einführung in Mikrocontroller - Der Arduino als Steuerzentrale, Bad Saulgau*
</div>


### Wiederholungen mit Bedingungen steuern

In vielen Fällen geht es bei Schleifen nicht um eine genau oder zufällig bestimmte Anzahl von Wiederholungen, sondern darum, einen Vorgang zu wiederholen, bis eine Bedingung wahr ergibt, bzw. solange, wie eine Bedingung wahr ergibt. Die Bedingung, die wahr oder falsch ergibt, kann auch Sensorwerte beinhalten. Dies wird auch im folgenden Spiel genutzt.

<div class="projekt clearfix" markdown="1">
#### Konfigurierbares Reaktionsspiel

Baue und programmiere ein konfigurierbares Reaktionsspiel!

![Ausgaben des Spiels auf dem seriellen Monitor](/images/reaktionsspiel-serial-monitor.png?resize=250&classes=caption,figure-right "Ausgaben auf dem seriellen Monitor.")
Dazu werden drei Taster (mit Widerstand!) am Arduino angeschlossen. Nach einer zufälligen Zeit wird auf dem seriellen Monitor angezeigt, welcher (zufällig ausgewürfelte) Taster gedrückt werden soll. Geschieht dies innerhalb einer vorgegebenen maximalen Reaktionszeit, hat man gewonnen, andernfalls verloren.

Am Anfang des Spiels soll diese maximale Reaktionszeit konfiguriert werden können. Das heißt, man kann die max. Reaktionszeit mit dem linken Taster verringern und mit dem rechten Taster vergrößern. Erst wenn der mittlere Taster gedrückt wird, startet das Spiel.

Für einen besseren Zugang zu diesem komplexen Spiel kannst du folgende Vorlage öffnen, mittels “Speichern unter” als `Reaktionsspiel.xml` auf dem Computer speichern und die Datei im Open Roberta Lab importieren: <a href="/p-templates/reaktionsspiel-start.xml" download><i class="fa fa-download" aria-hidden="true"></i> reaktionsspiel-start.xml</a>.
</div>

*Mögliche Erweiterungen:*
-   zusätzliche Ausgabe der Reaktionszeit,
-   Ober- und Untergrenze für die einstellbare maximale Reaktionszeit, damit das Spiel nicht unmöglich, aber auch nicht zu langweilig wird,
-   nach Spielstart folgen mehrere Spiele hintereinander und es wird mitgezählt, wie oft gewonnen wird,
-   je nach Reaktionszeit bekommt man mehr oder weniger Punkte,
-   ...

### Zählschleifen programmieren

Lauflichter findet man inzwischen überall in unserer Welt: An den Rändern von Landebahnen an Flughäfen, an Spieleautomaten, aufdringlichen Werbeschildern, als Blinker von modernen Autos und vieles mehr. Wenn man diese programmieren will, eignen sich dazu am besten Zählschleifen.

<div markdown="1" class="aufgabe"> 
#### Zählschleifen verstehen

![Beispiel einer Zählschleife](/images/for-schleife-bsp.png?lightbox=1024&classes=caption "Beispiel einer Zählschleife.")

Das oben abgebildete Programm enthält zwei selbst definierte Blöcke, mit denen sich eine LED an einem beliebigen Pin zwischen 2 und 13 anstellen bzw. ausschalten lässt. In der Endlosschleife wird dann eine Zählschleife genutzt.

Stelle eine Vermutung an, was die Zählschleife bewirkt.

Überprüfe deine Vermutung mit Hilfe einer *Trace-Tabelle* (siehe unten).
</div>

!!!! #### Trace-Tabellen
!!!!
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1"> Trace-Tabellen stellen den Wert von Variablen beim Durchlaufen des Programms dar. Auf diese Art und Weise kann man sich zum Beispiel genau veranschaulichen, wann Schleifen abgebrochen werden.</div>
!!!! <div markdown="1">
!!!!  |**Zeile** | **i** |
!!!!  |----------|-------|
!!!!  |   …      |   …   |
!!!!  |   5      |   2   |
!!!!  |   6      |   2   |
!!!!  |   5      |   3   |
!!!!  |   6      |   3   |
!!!! </div>
!!!! </div>

<div markdown="1" class="projekt">
#### Auto-Blinker

<div class="video">
  <iframe
    class="video__iframe"
    data-src="https://www.youtube-nocookie.com/embed/s317_5aFL6E"
    frameborder="0"
    allowfullscreen="allowfullscreen"
  ></iframe>
  <form class="video__notice">
    <p>
      An dieser Stelle ist ein Video von Youtube eingebettet. Mit deiner Erlaubnis willigst du ein, dass 
      deine Daten an YouTube in den USA übermittelt werden. Weitere Informationen zur Datenverarbeitung von YouTube findest
      du in der <a href="https://policies.google.com/privacy?hl=de">Datenschutzerklärung von YouTube</a>.
    </p>
    <button>Erlaube Inhalte von YouTube</button>
  </form>
</div>

Programmiere ein Lauflicht so, wie es auch als Blinker in modernen Autos genutzt wird. Nutze zunächst nur 5 LEDs (mit Vorwiderstand!).

*Hinweis:* Du kannst das folgende Programm als Vorlage nutzen, damit du auch über die selbst definierten Blöcke zum Anstellen bzw. Ausstellen einer LED an einem beliebigen Pin zwischen 2 und 13 verfügst. Speichere das Programm als `blinker.xml` und importiere es in Open Roberta Lab: <a href="/p-templates/lauflicht-start.xml" download><i class="fa fa-download" aria-hidden="true"></i> blinker-start.xml</a>.
</div>

<div class="aufgabe" markdown="1">
#### La - o - La

Programmiere ein Lauflicht, das hin- und zurückläuft.
</div>

<div markdown="1" class="aufgabe">
#### Steuerung von Schleifen

Unten siehst du zwei Programme, für die jeweils fünf LEDs mit Vorwiderstand an Pin 2 bis 6 angeschlossen wurden. Darunter siehst du die Wirkung der Programme in einem kurzen Video.

Beschreibe die Wirkung von `Die Schleife abbrechen` und `mit der nächsten Iteration der Schleife fortfahren`.

<div class="flex-box" markdown="1">
<div markdown="1">
![Beispiel für 'break'.](/images/break-bsp.png?Lightbox=1024&classes=caption "Schleife abbrechen.")
<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/demo-break.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
<p>Programmdownload: <a href="/p-templates/schleife-abbrechen.xml" download><i class="fa fa-download" aria-hidden="true"></i> schleife-abbrechen.xml</a></p>
</center>
</div>
<div markdown="1">
![Beispiel für 'continue'.](/images/continue-bsp.png?Lightbox=1024&classes=caption "Schleife fortfahren.")
<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/demo-continue.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>
<p><br>Programmdownload: <a href="/p-templates/schleife-fortfuehren.xml" download><i class="fa fa-download" aria-hidden="true"></i> schleife-fortfuehren.xml</a></p>
</div>
</div>

</div>

In Nepo wie in anderen Programmiersprachen gibt es verschiedene Arten von Schleifen. Bisher wurde in Nepo die einfache Zählschleife `wiederhole x mal`, die bedingungsgesteuerte Wiederholschleife `wiederhole bis / solange` und die Zählschleife mit Zählervariable genutzt. Tatsächlich lässt sich das gleiche Verhalten aber mit allen drei Schleifenvarianten erreichen.

<div markdown="1" class="aufgabe">
#### Vergleich von Schleifen

Betrachte noch einmal das Programm `schleife-abbrechen.xml` (siehe oben). Implementiere das gleiche Verhalten mit …

1.  …einer `wiederhole x mal` Schleife,
2.  …einer `wiederhole bis` Schleife,
3.  …einer `wiederhole solange` Schleife.

Erkläre, welche Schleifenvariante sich als “Grundschleife” eignet, die die anderen Varianten *immer* ersetzen kann.
</div>

!!!! #### Sichtbarkeit: Lokale und globale Variablen
!!!! Ein Unterschied zwischen den Schleifenimplementierungen bleibt bestehen: Die Zählvariable `i` wird bei einer Zählschleife als *lokale Variable* angelegt, das heißt, man kann die Zählvariable nur *innerhalb der Schleife* nutzen. Dafür benötigt sie auch nur innerhalb der Schleife Speicherplatz.
!!!! 
!!!! Im Gegensatz dazu sind die unter `Start` angelegten Variablen überall im Programm bzw. global verfügbar und heißen deshalb *globale Variablen*. Für diese Variablen muss während der ganzen Zeit Speicherplatz bereitgehalten werden, auch wenn sie vielleicht nur an einer Stelle wirklich benötigt werden.

!!!! #### Schleifen
!!!! 
!!!! Bei der Programmierung werden häufig Schleifen genutzt, die die Anweisungen in ihrem Rumpf (oder Körper) solange wiederholen, bis eine gewisse Abbruchbedingung eintritt.
!!!! 
!!!! -   `wiederhole x mal`: Einfache *Zählschleife*, die die Anweisungen im Rumpf für eine festgelegte Anzahl wiederholt.
!!!! -   `wiederhole, bis`: Bedingungsgesteuerte Schleife, die die Anweisungen im Rumpf wiederholt, *bis* die Bedingung wahr ergibt.
!!!! -   `wiederhole, solange`: Bedingungsgesteuerte Schleife, die die Anweisungen im Rumpf wiederholt, *solange* die Bedingung wahr ergibt.
!!!! -   `zähle i von … solange Zähler … mit Schrittweite …`: Zählergesteuerte Schleife, die die Anweisungen im Rumpf wiederholt, solange der Zähler kleiner als eine vorgegebene Zahl ist und die    Zählervariable nach jedem Durchlauf um eine angegebene Zahl erhöht.
!!!! 
!!!! Die Überprüfung, ob die Bedingung wahr ist, erfolgt hier *vor* der Ausführung der Anweisungen im Rumpf. Daher nennt man die Schleifen auch *kopfgesteuert*.

## Programme mit Struktogrammen dokumentieren

Wenn wir uns über Programme austauschen, dann haben wir nicht immer den Computer zur Hand. In solchen Momenten wäre es viel zu aufwendig, die bunten Blöcke von Nepo zu malen. Außerdem könnte es sein, dass jemand anderes das Programm nicht mit Blöcken, sondern mit Text in der Programmiersprache C++ aufschreiben will, also so wie der Quellcode aussieht.

**Frage:** Wie kann man Programme übersichtlich zu Papier bringen?

Man nutzt zur Darstellung des Ablaufs eines Computerprogramms sogenannte **Struktogramme** (vgl. Infobox unten), die in den 1970er Jahren von Isaac Nassi und Ben Shneidermann entwickelt wurden. Struktogramme sollen ein Computerprogramm möglichst einfach und ohne programmiersprachenspezifische Befehlssyntax abbilden. Auf diese Art und Weise lassen sich Programme auch einfach planen, bevor man sich damit beschäftigt, wie die Schritte im Einzelnen zu codieren sind.

<div markdown="1" class="aufgabe"> #### Struktogramme erstellen
Stelle die unten abgebildeten Programme jeweils mithilfe eines Struktogramms dar.

![Programm A.](/images/wenn-sonstWenn-sonst-Bsp2.png?Lightbox=1024&classes=caption "Programm A.")
![Programm B.](/images/break-bsp-schmal.png?Lightbox=1024&classes=caption "Programm B.")
</div>

!!!! #### Darstellung von Programmen in Struktogrammen
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">**Lineare Struktur**
!!!! 
!!!! Jede Anweisung wird in einen rechteckigen Block geschrieben.
!!!! ![Sequenz.](/images/Sequenz.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Zählergesteuerte Schleife**
!!!! 
!!!! Die Anzahl der Schleifendurchläufe wird durch eine Zählvariable festgelegt. Im Schleifenkopf werden der Startwert der Zählvariablen, der Endwert der Zählvariablen und die Veränderung der Zählvariablen, z.B. Schrittweite 1, angegeben.
!!!! ![Zählerschleife.](/images/Zaehlerschleife.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Kopfgesteuerte Schleife**
!!!! 
!!!! Wiederholungsschleife mit vorausgehender Prüfung der Bedingung. Der Schleifenkörper wird so lange wiederholt, *wie* oder *bis* die Bedingung wahr ist (bei uns nur der letzte Fall verfügbar).
!!!! ![Kopfgesteuerte Schleife](/images/kopfgesteuerteSchleife.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Fußgesteuerte Schleife**
!!!! 
!!!! Wiederholungsschleife mit nachfolgender Prüfung der Bedingung. Der Schleifenkörper wird so lange wiederholt, *wie* oder *bis* die Bedingung wahr ist (im RobertaLab nicht verfügbar).
!!!! ![Fußgesteuerte Schleife](/images/fussgesteuerteSchleife.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Einfache Verzweigung**
!!!! 
!!!! Die Anweisung 1 (und ggf. weitere) wird nur ausgeführt, falls die Bedingung wahr ist. Andernfalls wird nichts gemacht.
!!!! ![Einfache Verzweigung](/images/EinfacheVerzweigung.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Alternative Verzweigung**
!!!! 
!!!! Falls die Bedingung wahr ist, wird Anweisung 1 (und ggf. weitere) ausgeführt, sonst wird Anweisung 2 (und ggf. weitere) ausgeführt.
!!!! ![Alternative Verzweigung](/images/AlternativeVerzweigung.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Verschachtelte Verzweigung**
!!!! 
!!!! Falls Bedingung 1 wahr ist, folgt eine weitere Bedingung 2.
!!!! ![Verschachtelte Verzweigung](/images/VerschachtelteVerzweigung.png?Lightbox=512)
!!!! </div>
!!!! </div>

! In diesem Abschnitt werden Struktogramme zwar eingeführt, um Programm übersichtlich auf Papier darstellen zu können, aber auch digital kann es Sinn ergeben, ein Programm in dieser Struktur (und ohne Ballast) darzustellen. In diesen Fällen kann dir der [Structorizer](https://structorizer.fisch.lu/) helfen.

## Eigene Funktionen definieren

In den letzten Abschnitten ist bereits deutlich geworden, dass es manchmal praktisch sein kann, sich eigene Blöcke zu definieren. In der Programmiersprache C++, in der der Quellcode für den Arduino generiert wird, werden diese “Funktion” genannt.

**Frage:** Wie kann man in Nepo Funktionen implementieren?

<div markdown="1" class="aufgabe"> 
#### Bekannte Funktionen aufgeschlüsselt

In der Abbildung unten ist zu sehen, wie man Funktionen implementiert, mit denen sich LEDs an Pin 2 bis 4 über ihre Pin-Nummer anschalten und ausschalten lassen. Beschreibe, wie die Funktion zum Anschalten aufgebaut ist und genutzt wird.

In der Funktion zum Ausschalten kann die Variable `pin` nicht genutzt werden (sichtbar durch (x)). Was bedeutet dies für die Variablen, die in Funktionen angelegt werden?

![Demo der Funktionen "schalte LED an" und "schalte LED aus".](/images/eigene-funktion-demo.png?Lightbox=1024&classes=caption "Demo der Funktionen 'schalte LED an' und 'schalte LED aus'.")
</div>

<div markdown="1" class="aufgabe">
#### Block zum Blinken

Implementiere einen Block `blinke` mit den Argumenten `anzahl` und `pauseInMSek`, die die Board-LED für die angegebene Anzahl und mit der angegebenen Pause in Millisekunden zum Blinken bringt. Überprüfe deinen Block.

Was passiert, wenn eine Kommazahl übergeben wird?
</div>

<div markdown="1" class="aufgabe">
#### Mathematische Funktionen

Funktionen in der Informatik und Funktionen in der Mathematik sind sehr ähnlich: Funktionen in der Mathematik ordnen in der Regel einer oder mehreren Zahlen eine neue Zahl zu. Dies lässt sich über die Parameter und den Rückgabewert eines Funktionsblocks umsetzen.

![Mathematische Funktionen mit Blöcken implementiert](/images/funktion-mathe-beispiele.png?Lightbox=1024&resize=600&classes=caption "Mathematische Funktionen als informatische Funktionen implementiert.")

Implementiere ein Programm mit den oben abgebildeten Funktionen, sodass diese eine korrekte Ausgabe liefern.

</div>

<div markdown="1" class="aufgabe">
#### Lesbarkeit und Rückgabewerte

Die Logik für die [Straßenlaterne](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#straenlampe) lautete: Wenn es dunkel ist, schalte die Lampe an, sonst schalte die Lampe aus.

![Ansatz für die Funktion "istDunkel".](/images/istDunkel.png)
Mit einem eigenen Block lässt sich diese Logik direkt im Programm umsetzen, sodass es noch besser lesbar wird. Implementiere einen Block `istDunkel`, der basierend auf den Werten eines angeschlossenen LDR an A0 einen Wahrheitswert zurückgibt.

*Tipp:* Nutze ggf. die Hilfefunktion (?) auf der rechten Seite, um dich mit den abgebildeten Blöcken vertraut zu machen.
</div>

!!!! #### Funktionen
!!!!
!!!! ![Beispiel für eine Funktion](/images/istPositiv.png)
!!!! Funktionen fassen mehrere Anweisungen zusammen und können als eigene Anweisung im Algorithmus genutzt werden, um ihn lesbarer und modularer zu machen, wenn an einigen Stellen die gleichen Anweisungen immer wieder benötigt werden. Für den Namen der Funktion gilt wiederum die [lowerCamelCase](https://de.wikipedia.org/wiki/Binnenmajuskel#Programmiersprachen)-Konvention.
!!!! 
!!!! Funktionen können mehrere Argumente von unterschiedlichem Typ haben, die die Art der Ausführung variieren können. Die Variablen, in denen diese Argumente gespeichert werden, sind lokale Variablen und daher nur innerhalb der Funktion verfügbar.
!!!! 
!!!! Außerdem können Funktionen einen Wert zurückgeben, der für den “Hauptalgorithmus” genutzt werden kann. Die Rückgabe eines Wertes muss nicht am Ende der Funktion erfolgen. Wenn bereits vor dem Ende ein Wert zurückgegeben wird, wird der Rest der Funktion nicht mehr ausgeführt.

Die Bezeichnung “Computer”, zu deutsch: “Rechner”, besagt schon, dass man die Entwicklung von Mikrocontrollern und Mikroprozessoren immer auch dazu diente, Rechnungen zu automatisieren, die ein Rechner wesentlich schneller, präziser und fehlerfreier vornehmen kann als ein Mensch. Die Grundrechenarten sind schon als Blöcke in Nepo implementiert. Damit lassen sich auch auf schnelle Art weitere Berechnungen anstellen, für die ein Mensch mehrere Minuten oder sogar Stunden bräuchte.

<div markdown="1" class="aufgabe">
#### Teilbarkeit durch 2

Unten ist ein Programm abgebildet, mit dem die Teilbarkeit durch 2 überprüft wird. Erläutere seinen Ablauf.

![Programm zur Überprüfung der Teilbarkeit durch 2.](/images/istGerade-ohneKommatest.png?resize=600)
</div>

<div markdown="1" class="aufgabe">
#### Primzahlen

Primzahlen sind natürliche Zahlen, die nur durch 1 und sich selbst teilbar sind. Die kleinste mögliche Primzahl ist 2.

Primzahlen haben die Menschen seit jeher fasziniert, weil man bis heute keine Formel gefunden hat, um Primzahlen zu berechnen. Im Wesentlichen ist man darauf angewiesen, alle möglichen Teiler auszuprobieren und auf diese Art herauszufinden, ob eine Zahl eine Primzahl ist oder nicht. Unter anderem aufgrund dieser “Sperrigkeit” eignen sich Primzahlen gut zur Verschlüsselung.

![Funktion istPrimzahl.](/images/istPrimzahl-Block.png?classes=figure-right) Implementiere einen Block `istPrimzahl` mit einer Zahl `x` als Argument und einem Wahrheitswert als Rückgabewert. Sorge dafür, dass Kommazahlen sofort als falsch erkannt werden. Für den Primzahltest kannst du zunächst für alle Zahlen von 2 bis $x-1$ überprüfen, ob sie Teiler von $x$ sind. Der Mathe-Block `…ist Primzahl` darf nicht verwendet werden - es geht hier darum, ihn selbst zu implementieren.

Implementiere dann ein Programm, das alle Primzahlen zwischen 1 und 1000 ausgibt. Füge einen Primzahlzähler ein, der am Ende ausgibt, wie viele Primzahlen gefunden wurden. Recherchiere, ob dein Programm das korrekte Ergebnis liefert.

*Zusatz:* Bei größeren Zahlen braucht der Arduino schon relativ lange, um alle Rechenschritte durchzuführen. Dies führt zu einem typischen Problem der Informatik:

<center markdown="1">*Wie kann man ein Verfahren so optimieren, dass es auch bei begrenzter Rechenkapazität annehmbar schnell abgearbeitet wird?*</center>

Überlege dir Antworten zu folgenden Fragen und optimiere dein Programm entsprechend:

1.  Wie groß kann ein Teiler von x maximal sein?
2.  Zu einem Teiler $t_1$ gehört immer ein zweiter Teiler $t_2$ mit $t_1 \cdot t_2 = x$. Zum Beispiel ist $9$ ein Teiler von $18$ und ein zweiter zugehöriger Teiler ist $2$, denn $2\cdot 9 = 18$. Die     Überprüfung der Teiler von 18 muss aber nicht bis 9 gehen, weil die Überprüfung der 2 in diesem Fall schon ausreicht. Wie groß ist der größte Teiler, der nicht schon durch einen zugehörigen kleineren Teiler gefunden werden kann? Denke zum Beispiel an die Teiler von 36.
</div>

<div markdown="1" class="aufgabe">
#### Berechnungen zur Fibonacci-Folge

<figure class="image-caption">
    <img src="/user/pages/images/fibonacci-sonnenblume.jpg" alt="Fibonacci-Zahlen finden sich in den Blütenständen von vielen Blumen." class="caption" />
    <figcaption>Fibonacci-Zahlen finden sich in den Blütenständen von vielen Blumen ( <a href="https://de.wikipedia.org/wiki/Datei:Goldener_Schnitt_Bluetenstand_Sonnenblume.jpg" target=_blank>Bild: CC-BY-SA, Urheber Dr. Helmut Haß</a> ). </figcaption>
</figure>

Die [Fibonacci-Folge](https://de.wikipedia.org/wiki/Fibonacci-Folge) beginnt mit den Zahlen $f_1 = 1$ und $f_2 = 1$. Die darauf folgende Zahl ist die Summe der beiden vorhergehenden Zahlen:

<center markdown="1">
$\begin{aligned}
        f_3 = f_1 + f_2 = 2 \\
        f_4 = f_2 + f_3 = 3 \\
        \dots \\
        f_n = f_{n-1} + f_{n-2}
\end{aligned}$
</center>

1.  Berechne schriftlich die ersten 10 Glieder der Fibonacci-Folge.
2.  Implementiere einen Block `gibFibonaccizahl` mit einem Argument `n`, das angibt, die wie vielte Fibonacci-Zahl berechnet werden soll, und einem Argument `mitAusgabe`, das angibt, ob eine Ausgabe der    vorhergehenden Folgenglieder bei der Berechnung erfolgen soll oder nicht. Die n-te Fibonacci-Zahl wird zurückgegeben.
</div>

## Debugging: Fehler im Programm finden

Fehler werden in der Informatik auch als “Bugs” bezeichnet. Fehler treten beim Programmieren ständig auf und sind völlig normal. Erst nach einigem Testen läuft ein Programm völlig stabil und fehlerfrei. Das Entfernen von Fehlern wird dann auch als “Debugging” bezeichnet.

Informatiker unterscheiden zwischen zwei Fehlerarten: Syntaxfehler und logische Fehler. Logische Fehler sind dir vielleicht schon passiert und manche wurden auch schon in diesem Skript behandelt, zum Beispiel zur [`sonst wenn`-Bedingung](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#verschachtelte-entscheidungen). Syntaxfehler entstehen, wenn man die Grammatik (Syntax) einer Programmiersprache nicht beachtet. In Nepo werden die meisten Syntaxfehler automatisch vermieden, weil die meisten Blöcke nur ineinander greifen, wenn sie syntaktisch zueinander passen.

<div markdown="1" class="aufgabe">
#### Systematisch Fehler finden

Unten ist ein Programm mit zwei Fehlern abgebildet. Es soll die folgende Summe berechnen:
<center markdown="1">
$1 + 1,5 + 2 + 2,5 + 3 + \dots + 98,5 + 99 + 99,5 + 100.$
</center>
![Beispielprogramm zum Debuggen.](/images/debugBsp.png?classes=caption "Beispielprogramm zum Debuggen.")
<center>Beispielprogramm zum Debuggen als Download: <a href="/p-templates/debugging-example.xml" download><i class="fa fa-download" aria-hidden="true"></i> debugging-example.xml</a></center>

![Variablenausgabe auf dem seriellen Monitor](/images/DEBUGON.png?classes=caption,figure-right "Implementierung eines Debugging-Modus")
Um Fehler zu finden, kann man sich die Werte von Variablen auf dem seriellen Monitor ausgeben lassen. Programmierer bauen dann häufig eine Variable `DEBUG_ON` ein und nutzen eine Konstruktion wie rechts abgebildet. Welchen Vorteil könnte das haben?

Öffne das oben abgebildete Programm in Nepo und nutze die Debug-Konstruktion, um die Fehler zu finden oder nachzuweisen. Korrigiere sie.

*Frage deinen Lehrer, wenn du den Fehler gefunden hast, aber nicht nachvollziehen kannst, wieso sich das Programm so verhält.*
</div>

## Das EVA-Prinzip

In diesem Kapitel hast du bereits einige Bauteile kennengelernt, aber es gibt noch viele mehr. Um dabei nicht den Überblick zu verlieren, wären Kategorien praktisch, mit denen man Bauteile und informationsverarbeitende Systeme im Allgemeinen einordnen kann.

**Frage:** Wie lassen sich elektrische Bauteile und informationsverarbeitende Systeme kategorisieren?

<div markdown="1" class="aufgabe">
#### Informationsverarbeitung

Lies die beiden Beschreibungen zur Informationsverarbeitung bei der Straßenlampe und beim Menschen. Beschreibe Gemeinsamkeiten.

<div class="flex-box">
<div markdown="1">
**Beispiel Dämmerungsschaltung:**

Der Aufbau von Festwiderstand und LDR ermöglicht die Eingabe von Daten zur Helligkeit. Auf dem Arduino werden die elektrischen Signale entsprechend des laufenden Programms verarbeitet. Letztlich erfolgt die Ausgabe durch das Leuchten einer LED, wenn es dunkel ist, bzw. durch das Nicht-Leuchten der LED.
</div>
<div markdown="1">
**Beispiel Mensch:**

Unsere Sinne (Augen zum Sehen, Ohren zum Hören, …) ermöglichen die Eingabe von Informationen in das System Mensch. Im Gehirn und den weiteren Nervenbahnen im Körper werden die Signale verarbeitet. Schließlich kommt es zu einer Ausgabe - zum Beispiel zu einer Bewegung (Musik leiser drehen, Augen zukneifen, sprechen mit dem Mund …).
</div>
</div>
</div>

!!!! #### Das EVA-Prinzip
!!!! 
!!!! Informationsverarbeitende Systeme lassen sich nach ihrer Funktion in drei Einheiten zerlegen: Eingabeeinheit, Verarbeitungseinheit, Ausgabeeinheit.
!!!! 
!!!! ![Visualisierung des EVA-Prinzips](/images/eva-visualisierung.png)
!!!! 
!!!! Mit dem EVA-Prinzip wird die grundlegende Reihenfolge der Verarbeitung von Daten charakterisiert. Die Einheiten bestehen dabei nicht nur aus den Bauteilen, sondern beinhalten auch die Art der Verarbeitung, also zum Beispiel das Programm auf dem Arduino.

<div markdown="1" class="aufgabe">
#### Kleines Begriffstraining

1.  Kategorisiere die [Juke-Box](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#juke-box) nach dem EVA-Prinzip.
2.  Kategorisiere den [Reaktionszeitmesser](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#reaktionszeitmesser) nach dem EVA-Prinzip.
</div>

<div markdown="1" class="aufgabe">
#### Bauteilkunde

Du hast bisher (mindestens) folgende Bauteile verwendet:
![Bauteilsammlung](/images/bauteilsammlung.png)
Benenne Gemeinsamkeiten und Unterschiede. Welche Bauteile lassen sich zusammenfassen?
</div>

!!!! #### Sensoren und Aktoren mit digitalen und analogen Signalen
!!!! Für die Eingabe von Daten werden *Sensoren* benötigt; für die Ausgabe hingegen *Aktoren*:
!!!! 
!!!! -   **Sensoren** (auch Fühler genannt) sind elektrische Bauteile, die eine physikalische Größe aus der Umwelt (Temperatur, Helligkeit, Luftdruck oder auch ein mechanischer Druck mit dem Finger) in eine elektrische Größe (Widerstand, Spannung, elektrisches Potential, Stromstärke) umwandeln. Dadurch werden die physikalischen Größen aus der Umwelt einer elektronischen Verarbeitung zugänglich.
!!!! -   **Aktoren** (auch Aktuatoren genannt) sind elektrische Bauteile, die eine elektrische Größe in eine mechanische (Bewegung, Schallwellen) oder andere Größe (Temperatur, Licht, …) umwandeln. Sie ermöglichen, dass die elektronische Verarbeitung zu Handlungen bzw. Konsequenzen führen kann.
!!!! 
!!!! Die Signale von Sensoren und Aktoren können digital oder analog sein:
!!!! 
!!!! -   **Digitale Signale** haben nur zwei mögliche Zustände - z.B. an aus, gedrückt / nicht gedrückt oder 1 / 0.
!!!! -   **Analoge Signale** haben unendlich viele mögliche Werte, weil sie beliebig fein eingeteilt werden können. Digitale Geräte wie der Arduino können nur *quasi* analoge Signale einlesen. Bei den “analogen” Eingängen A0, A1, …A5 des Arduino sind 1024 verschiedene Stufen möglich; bei “analogen” Ausgängen (Pins mit einer Tilde: $\sim$) sind 256 verschiedene Stufen möglich. Diese Einteilung ist für die meisten Aufgaben fein genug.
!!!! 
!!!! ![Digitale und analoge Aktoren und Sensoren in Nepo.](/images/sensoren-und-aktoren.png?classes=caption "Digitale und analoge Aktoren und Sensoren in Nepo.")

<div markdown="1" class="projekt">
#### Alarmanlage mit Lichtschranke

![Lichtschranke mit LED und LDR.](/images/lichtschranke.png?resize=250&classes=caption,figure-right "Lichtschranke mit LED und LDR.")
Baue eine Alarmanlage, indem du mit einer LED (Vorwiderstand!) und einem LDR eine Lichtschranke baust . Wird diese unterbrochen, soll ein akustischer Alarm ertönen. Konfiguriere alle benötigten Bauteile als Aktoren und Sensoren.

*Erweiterung:* Über einen zusätzlichen Taster (mit Widerstand!) soll die Alarmanlage “scharf” gestellt bzw. wieder ausgestellt werden können. Erstelle dazu eine Wahrheitswert-Variable `aktiv`, deren Wert über den Taster verändert wird. Das Auslösen der Alarmanlage wird nur ausgeführt, wenn `aktiv = wahr` ist.

Rücklinks (öffnen in neuem Tab): <a href="https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#fugngerampel" target="_blank">Taster anschließen</a>, <a href="https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#erste-experimente-mit-dem-ldr" target="_blank">LDR anschließen</a>
<div class="flex-box">
<div markdown="1">![Befehl: Aktor ansteuern](/images/aktor-ansteuern.png)</div>
<div markdown="1">![Befehl: Sensor auslesen](/images/sensor-auslesen.png)</div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Analoge Aktoren

Analoge Aktoren kamen bisher nicht vor. Schließe eine LED mit Vorwiderstand an Pin 5 an und konfiguriere einen entsprechenden analogen Aktor.

1.  An Pin 5 können Werte von 0 bis 255 ausgegeben werden. Implementiere eine Zählschleife, die diese Werte systematisch durchläuft und beschreibe die Auswirkung auf die LED.
2.  Probiere Werte größer als 255 aus und beschreibe, welche Auswirkung diese haben.
</div>


## Vermischte Übungen

<div markdown="1" class="aufgabe">
#### Konfigurierbares Blinken

Am Arduino ist ein Taster und eine LED angeschlossen. Die LED soll zunächst jeweils eine Sekunde lang an sein und eine Sekunde aus. Mit dem Taster lässt sich die Zeit jedoch mit jedem Drücken um 100ms verringern. Wenn die Zeit dabei auf 200ms gestellt wird, wird sie stattdessen wieder auf 2000ms hochgesetzt.

1.  Zeichne einen Schaltplan und benenne die Größe der jeweils notwendigen Widerstände.
2.  Entwickle ein Programm nach den beschriebenen Anforderungen und stelle es als Struktogramm dar.
</div>

<div markdown="1" class="aufgabe">
#### Hörbare Helligkeit

Am Arduino wird ein LDR und ein Piezo-Summer angebracht.

1.  Beschreibe mit einem Je-Desto-Satz das Verhalten des Widerstands des LDR, wenn es dunkel wird.
2.  Die Helligkeit wird mit einem Prozentwert zwischen 0 und 100 gemessen. Entwickle mit den unten abgebildeten Blöcken ein Programm, dass die Helligkeit in eine Tonhöhe zwischen 300Hz und 600Hz  übersetzt und diesen Ton ausgibt. Stelle das Programm als Struktogramm dar.

![Blöcke zum Programmieren der Aufgabe “Hörbare Helligkeit”. Es können alle Blöcke genutzt werden, allerdings ist es nicht notwendig alle Blöcke zu nutzen. *Mit dem Mathematik-Block zur Addition stehen auch alle weiteren Rechenoperationen zur Verfügung*.](/images/hoerbare-helligkeit.png?classes=caption "Blöcke zum Programmieren der Aufgabe “Hörbare Helligkeit”. Es können alle Blöcke genutzt werden, allerdings ist es nicht notwendig alle Blöcke zu nutzen. *Mit dem Mathematik-Block zur Addition stehen auch alle weiteren Rechenoperationen zur Verfügung*.")
</div>

<div markdown="1" class="aufgabe clearfix">
#### Juke-Box 2.0

![Vorlage zur JukeBox 2.0.](/images/jukebox2.png?classes=caption,figure-right "Vorlage zur Juke-Box 2.0.")
Logische Operationen lassen sich nutzen, um die Juke-Box vom Anfang des Kapitels zu erweitern, ohne Hardware nachrüsten zu müssen. Zur Erinnerung: Es wurden zwei Taster T1 und T2 und ein Piezo-Summer an den Arduino angeschlossen. Wenn Taster1 gedrückt wurde, gab der Befehl `Taste T1 gedrückt?` WAHR zurück und es wurde ein entsprechender Song gespielt.

Die Idee: Man kann auch beide Taster gleichzeitig oder gar keinen Taster drücken, sodass sich vier Fälle für vier Songs ergeben. Sinnvollerweise wird nur irgendeine Standardmusik gespielt, wenn gar kein Taster gedrückt wurde.

Formuliere für jeden der vier Fälle eine trennscharfe Bedingung!
</div>

<div markdown="1" class="aufgabe">
#### Gesetze von de Morgan

Die Gesetze von de Morgan sagen aus, wie sich die Kombination des NICHT-Operators und des UND-Operators bzw. des ODER-Operators umformen lässt. Für zwei Aussagen A und B, die jeweils wahr oder falsch sein können, gilt:
<center markdown="1">
(1) `NICHT( A ODER B ) = NICHT( A ) UND NICHT( B )`,
(2) `NICHT( A UND B ) = NICHT( A ) ODER NICHT( B )`.
</center>
Weise die Aussagen der Gesetze von de Morgan nach. Erstelle dazu für beide Seiten Wahrheitswerttabellen und zeige, dass für die gleiche Wahrheitswertkombination zu A und B immer auf beiden Seiten das gleiche Ergebnis herauskommt.

Zu (1):

links

  | `A`  |  `B`  | `A ODER B` | `NICHT( A ODER B )`|
  |----|-----|------------|-------------------------
  | 1  |  1  |     1      |           ...          |
  |... | ... |    ...     |           ...          |

rechts

  | `A`  |  `B`  | `NICHT( A )` | `NICHT( B )` | `NICHT( A ) UND NICHT( B )`|
  -----|-----|----------------|----------------|--------------------------------|
  | 1  |  1  |       0        |       0        |               ...              |
  |... | ... |      ...       |      ...       |               ...              |

</div>

<div markdown="1" class="aufgabe">
#### Variablen und Datentypen

1.  Nenne Vorteile, die für die Verwendung von Variablen sprechen.
2.  Nenne drei Datentypen, die in Variablen gespeichert werden können.
</div>

<div markdown="1" class="aufgabe">
#### Programme verstehen

Am Arduino wird an Pin 9 eine LED mit Vorwiderstand und an Pin 10 ein Piezo-Summer angebracht. Dann wird das folgende Programm ausgeführt.

![Programm zur Analyse](/images/Aufg-Programme-verstehen.png)

1.  Stelle das oben abgebildete Programm als Struktogramm dar.
2.  Beschreibe die Wirkung des oben abgebildeten Programms.
3.  Erkläre, wie man das Programm ändern müsste, damit die LED zwei Mal blinkt, bevor wieder der Piezo-Summer piept.
</div>

<div markdown="1" class="aufgabe">
#### Zählschleife analysieren

An allen Digitalpins des Arduino wird eine LED mit Vorwiderstand angeschlossen. Dann wird das abgebildete Programm ausgeführt.

![Zählschleife zur Analyse.](/images/zaehlschleife-analysieren.png?classes=caption "Zählschleife zur Analyse.")

1.  Erstelle eine Trace-Tabelle für einen Durchlauf der `wiederhole unendlich oft`-Schleife.
2.  Nenne die Pin-Nummern der LEDs, die nach einem Durchlauf dieses Programms geleuchtet haben.
3.  Stelle das Programm als Struktogramm dar.
</div>

<div markdown="1" class="aufgabe">
#### Zählschleifen für die Mathematik

Mit Hilfe der Zählschleifen im folgenden Programm sollen Eigenschaften von Zahlen untersucht werden.

![Zählschleifen für die Mathematik.](/images/zaehlschleifen-fuer-mathematik.png?classes=caption "Zwei Zählschleifen zur Untersuchung von Zahlen.")

1. Bestimme für `i=1` bis `i=5` welche Zahlen auf dem seriellen Monitor ausgegeben werden.
2. Erkläre allgemein, welche Zahlen auf dem seriellen Monitor ausgegeben werden.
</div>

<div markdown="1" class="aufgabe">
#### EVA am Smartphone

1. Nenne jeweils drei Bauteile im Smartphone, die für die Eingabe bzw. für die Ausgabe zuständig sind.
2. Anne schreibt Bernd mit ihrem Smartphone eine Textnachricht. Bernd empfängt diese auf seinem Smartphone. Kategorisiere den Prozess auf Annes und auf Bernds Smartphone jeweils nach dem EVA-Prinzip.

</div>

## Ausblick

**Offene Fragen:**

-   Was passiert, wenn ein Digitalpin angestellt oder ausgestellt wird?
-   Was passiert bei der Messung der Lichtstärke?
-   Wie werden weitere Bauteile angeschlossen und im Programm angesprochen?
-   Was sind Listen und wie verwendet man sie?
-   Wie werden die Daten codiert, um sie auf dem Arduino abzuspeichern oder zwischen Arduino und Computer auszutauschen?

! #### Motivationsquellen
! [Staubsaugerroboter](https://www.heise.de/make/meldung/Schueler-Projekt-Selbstbau-Staubsaugerroboter-aus-dem-3D-Drucker-3991208.html): Mithilfe eines Arduino haben zwei Schüler aus den Niederlanden ihren eigenen Staubsaugerroboter gebaut. Das Teile für das Gehäuse haben sie mit einem 3D-Drucker gedruckt.
!
![Levitation](https://www.heise.de/make/artikel/Einfacher-Ultraschall-Levitationsapparat-4022505.html): Durch Levitation lassen sich Gegenstände scheinbar von Geisterhand in der Luft schweben. Die nötige Elektronik dafür lässt sich mit einem Arduino realisieren.
!
! [Arduino-kontrollierter LED-Streifen zur Visualisierung von Musik](https://www.instructables.com/id/Party-Lights-1/): Der Arduino lässt sich zudem über ein Smartphone ansteuern.
!
![Spielekonsole von Makerbuino](https://www.heise.de/make/meldung/Makerbuino-Spielkonsole-fuer-den-Eigenbau-3681578.html): Mithilfe eines Bausatzes lässt sich eine kleine, Arduino-basierte Spielekonsole bauen.

