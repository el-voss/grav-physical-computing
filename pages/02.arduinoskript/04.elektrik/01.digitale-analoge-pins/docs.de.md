---
title: 'Digitale und analoge Pins'
menu: '[DAP] Digitale und analoge Pins'
---

# Elektrische Grundlagen Teil 1: Digitale und analoge Pins

<style>
    body {
        --abk: 'EG-DAP';
    }
</style>

[TOC]

## Spannung, Stromstärke und Widerstand berechnen

<div markdown="1" class="clearfix">
![Widerstände](/images/Widerstaende.jpg?resize=200&classes=caption,figure-right "Widerstände.")
Bisher war die Größe des Vorwiderstands von LEDs mit $330\,\Omega$ vorgegeben. In unserem Bausatz finden sich jedoch viele weitere Widerstände, die teilweise größer und teilweise kleiner sind.

**Frage:** Welche Auswirkung haben Widerstände auf den Stromkreis? Wie kann man dies berechnen?
</div>

<div markdown="1" class="aufgabe">
#### Zusammenhang von Widerstand, Stromstärke und Spannung

Unten ist eine einfache Reihenschaltung mit einer Spannungsquelle, einer LED und einem Vorwiderstand abgebildet. Stelle eine Vermutung an, ob die LED heller oder dunkler leuchten wird, wenn man den Vorwiderstand verkleinert. Begründe deine Vermutung.

![Reihenschaltung von LED und Vorwiderstand an einer Spannungsquelle.](/circuits/ReiheLEDWiderstand.png?resize=400&classes=caption "Reihenschaltung von LED und Vorwiderstand an einer Spannungsquelle.")
</div>

<div markdown="1" class="aufgabe">
#### Mindestgröße des Vorwiderstands

Berechne, wie groß der Vorwiderstand einer LED mindestens sein muss, damit sie nicht durchbrennt.

*Hinweise:*
  - Wenn ein Digitalpin angeschaltet wird (zum Beispiel durch die Anweisung `schalte LED an` oder `schreibe digitalen Wert ... 1`), dann gibt er eine Spannung von 5V gegenüber GND aus.
  - Durch eine LED darf höchstens ein Strom von $20\,mA$ fließen.
  - Je nach Farbe halten LEDs eine andere maximale Spannung aus:
  
    | Farbe       | rot           | gelb/grün     | blau/weiß     |
    | :---------- | :------------ | :------------ | :------------ |
    | $U_{LED}$ | 1,6 V - 2,2 V | 1,9 V - 2,5 V | 2,7 V - 3,5 V |
</div>

!!!! <div markdown="1" class="clearfix">
!!!! ![Formeldreieck für Spannung, Stromstärke und Widerstand](/images/uri-dreieck.png?classes=caption,figure-right "Formeldreieck.")
!!!! #### Widerstand, Spannung und Stromstärke
!!!! 
!!!! Der Widerstand \(R\) ist definiert als das Verhältnis von Spannung $U$ zu Stromstärke $I$: 
!!!! <center markdown="1">$R=\frac{U}{I}.$</center>
!!!! Ein Widerstand heißt *ohmscher Widerstand*, wenn das Verhältnis $\frac{U}{I}$ stets gleich groß ist (also wenn $R$ unabhängig von Stromstärke und Spannung konstant ist).
!!!! </div>

!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">
!!!! #### Gesetze der Reihenschaltung
!!!! ![Reihenschaltung](/circuits/reihenschaltung.png?lightbox=1024&resize=400)
!!!! 
!!!!   - In einer Reihenschaltung ist die Stromstärke an jeder Stelle gleich groß: $I_{ges}=I_1=I_2= I_3=\dots$
!!!!   - In einer Reihenschaltung teilt sich die Gesamtspannung auf die einzelnen Bauteile auf: $U_{ges}=U_1 + U_2 + U_3+\dots$
!!!!   - In einer Reihenschaltung addieren sich die Einzelwiderstände zum Gesamtwiderstand: $R_{ges}=R_1+R_2+R_3+\dots$
!!!! </div>
!!!! <div markdown="1">
!!!! #### Gesetze der Parallelschaltung
!!!! ![Parallelschaltung](/circuits/parallelschaltung.png?lightbox=1024&resize=400)
!!!! 
!!!!   - In einer Parallelschaltung teilt sich die Gesamtstromstärke auf die einzelnen Zweige auf: $I_{ges}=I_1+I_2+ I_3+\dots$
!!!!   - In einer Parallelschaltung ist die Spannung in jedem Zweig gleich groß: $U_{ges}=U_1=U_2=U_3=\dots$
!!!!   - In einer Parallelschaltung ist der Kehrwert des Gesamtwiderstands gleich der Summe der Kehrwerte der einzelnen Widerstände:
!!!!     $\frac{1}{R_{ges}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \dots$
!!!! </div>
!!!! </div>

<div markdown="1" class="aufgabe">
#### Vorwiderstand am 9V-Akku
Unter den Bauteilen im Arduino-Kasten befindet sich auch ein 9V Akku. Berechne den mindestens notwendigen Vorwiderstand, wenn eine rote LED an den 9V Block angeschlossen wird.
</div>

<div markdown="1" class="aufgabe">
#### Vorwiderstand in Reihen- und Parallelschaltung
1.  An einem 9V Block sollen drei rote LEDs in Reihe geschaltet betrieben werden. Zeichne einen Schaltplan und berechne den passenden Vorwiderstand.
2.  An einem 9V Block sollen drei rote LEDs parallel geschaltet betrieben werden. Zeichne einen Schaltplan und berechne den passenden Vorwiderstand.
</div>
    
<div markdown="1" class="aufgabe">
#### Ampelschaltung

Max überlegt sich, dass er für eine Ampelschaltung am Arduino denselben Vorwiderstand für drei parallel geschaltete LEDs verwenden kann, sodass er nur einen Widerstand heraussuchen muss. Die Berechnung der Mindestgröße nimmt er folgendermaßen vor.

<div markdown="1" class="clearfix" style="background:#eef; padding:1em;">

![Schaltplan für Ampelschaltung](/circuits/schaltplan-rgb-led-berechnung.png?lightbox=1024&resize=300&classes=caption,figure-right "Schaltplan für Ampelschaltung.")
$I_L =  20 \, mA =  0,02 \, A$ $\quad \Longrightarrow \quad$ $I_R =  0,06 \, A$

$U_L =  2,2 \, V$ (max. Spannung, die rote LEDs aushalten)

$U_R =  5 \, V -  2,2 \, V =  2,8\, V$

$R = \frac{U_R}{I_R} = \frac{ 2,8\, V}{ 0,06\, A} \approx  46,67 \, \Omega$

Der Vorwiderstand sollte eine Größe von mindestens $ 50 \, \Omega$ haben.
</div>

Begründe, warum der oben berechnete Vorwiderstand zu niedrig ist. Erkläre, wie man stattdessen vorgehen müsste und gib den korrekten Wert für einen möglichen gemeinsamen Vorwiderstand an.

*Tipp: Wie viele LEDs leuchten gleichzeitig?*
</div>

<div markdown="1" class="aufgabe">
#### Vorbereitungen zur 7-Segment-Anzeige

1.  Zeichne einen vereinfachten Schaltplan einer 7-Segment-Anzeige, in dem die LEDs einzeln eingezeichnet sind (siehe Infokasten unten).
2.  Es wäre sehr umständlich, für jede LED einen eigenen Vorwiderstand anzuschließen; praktischer ist es, einen einzigen Vorwiderstand zwischen GND-Anschluss der 7-Segment-Anzeige und GND-Anschluss des Arduino anzubringen. Die Größe des gemeinsamen Vorwiderstands der acht LEDs (Anzeige & Punkt) soll $ 330\, \Omega$ betragen. Berechne die Gesamtstromstärke und die Stromstärke in jeder LED bei Darstellung einer 1 und einer 8 (jeweils ohne Punkt).
3.  Deute die unterschiedlichen Stromstärken in den LEDs.
</div>

!!!! #### 7-Segment-Anzeige
!!!! 
!!!! Eine 7-Segment-Anzeige besteht aus sieben roten LEDs, die so angeordnet sind, dass sich mit ihnen eine Zahl darstellen lässt. Zusätzlich gibt es zur leichteren Unterscheidung von 6 und 9 eine LED für den Punkt. *Jede LED lässt sich einzeln über einen der Pins ansteuern, wobei sich alle LEDs einen gemeinsamen GND-Anschluss teilen.* Der zweite GND-Anschluss soll hier nicht genutzt werden, um die Schaltung so einfach wie möglich zu halten.
!!!! 
!!!! <div class="flex-box">
!!!! <div markdown="1">![7-Segment-Anzeige.](/images/7segmentanzeige-bild2.jpg?resize=350)</div>
!!!! <div markdown="1">![Schema einer 7-Segment-Anzeige](/images/7segmentanzeige-schema.png?resize=350)</div>
!!!! </div>

<div markdown="1" class="projekt">
#### Raketencountdown

Suche dir nun den passenden Widerstand für die 7-Segment-Anzeige heraus und verbinde beide mit dem Arduino. Programmiere dann einen Raketencountdown, der von 9 rückwärts bis 0 zählt.

*Tipp:* Erstelle dir zuerst eine Tabelle, in der du übersichtlich festhälst, welche LEDs für welche Zahl an sein müssen und mit welchen Pins am Arduino diese verbunden sind.
Rücklink (öffnet in neuem Tab): <a href="https://doku.el-voss.de/de/arduinoskript/nepo#widerstandsringe-ablesen" target="_blank">Widerstandsringe ablesen</a>
*Für Schnelle:* Man kann mit einer 7-Segment-Anzeige auch Buchstaben darstellen und nacheinander durchlaufen lassen!
*Idee: Frick, Fritsch und Trick (2015): *Einführung in Mikrocontroller - Der Arduino als Steuerzentrale*, Bad Saulgau*
</div>

## Das elektrische Potential

Die Ausgabe von 5 V gegenüber GND an einem digitalen Ausgang des Arduino ist vergleichbar mit einer Batterie oder einem Spannungsgerät. Um zu verstehen, wie der Arduino digitale Signale einliest und dadurch auf seine Umwelt reagieren kann, muss jedoch zuerst geklärt werden, was sich hinter dem *elektrischen Potential* verbirgt.

**Frage:** Wie werden digitale Signale am Arduino eingelesen?

<div markdown="1" class="aufgabe">
#### Eine Analogie für das elektrische Potential

1.  Anna und Bert schauen auf dasselbe Fenster. Anna meint, das Fenster befinde sich in 1 Meter Höhe. Bert hingegen meint, das Fenster befinde sich in 4 Meter Höhe. Beide haben jeweils für sich betrachtet Recht. Wie kann das sein?
2.  Die Vase fällt einen Meter tief. Gib an, … 
      - …mit welcher Höhe Anna die Höhenenergie nach dem Fallen berechnet und mit welcher Höhendifferenz sie die Höhenenergie berechnet, die in Bewegungsenergie umgewandelt wurde.
      - …mit welcher Höhe Bert die Höhenenergie nach dem Fallen berechnet und mit welcher Höhendifferenz er die Höhenenergie berechnet, die in Bewegungsenergie umgewandelt wurde.
    
    Hinweis: $E_H=m\cdot g\cdot h$
</div>

<div markdown="1" class="aufgabe">
#### Übersicht

1. Übertrage und vervollständige die folgende Tabelle von Analogien.
2. Erkläre, welche der genannten Größen in der Mechanik bzw. der Elektrik abhängig von der Festlegung eines Nullniveaus sind.

|  **Mechanik**  |      **Elektrik**      |
| :------------: | :--------------------: |
|  Höhenenergie  |                        |
|                | Elektrisches Potential |
| Höhendifferenz |                        |
|   Grundhöhe    |                        |
</div>

!!!! <div markdown="1" class="clearfix">
!!!! ![Elektrisches Potential](/images/el-potential.png?lightbox=1024&resize=400&classes=caption,figure-right "El. Potential bei einem einfachen Schaltkreis.")
!!!! #### Elektrisches Potential
!!!! So wie die Höhendifferenz ein Maß für die Höhenenergie ist, die umgewandelt wird (z. B. in Bewegungsenergie), ist die Spannung ein Maß für die elektrische Energie, die an einer LED, einem Widerstand etc. umgewandelt wird.
!!!! 
!!!! Das elektrische Potential hingegen ist wie die Höhe ein Maß für die elektrische Energie der Elektronen im Stromkreislauf. Es kann nur in Bezug auf ein Nullniveau (“Ground”/GND) angegeben werden. Die Einheit des elektrischen Potentials ist Volt.
!!!! 
!!!! Elektrisches Potential am GND-Pin: 0V
!!!! Elektrisches Potential am 5V-Pin: 5V
!!!! </div>

!!! Druckvorlage zum Download: <a href="/worksheets/pulldown-pullup-druck.pdf" download><i class="fa fa-download" aria-hidden="true"></i> Pulldown-Pullup-Druck.pdf</a>

<div markdown="1" class="aufgabe">
#### Pulldown-Widerstand

In dem unten abgebildeten Schaltplan ist dargestellt, wie man einen Taster am Arduino so anschließt, dass man seinen Zustand im digitalen Pin 3 auslesen kann. Der Widerstand wird auch als *Pulldown-Widerstand* bezeichnet und sollte relativ groß sein. $ 10 \, k\Omega$ sind üblich.

Markiere die Kabel farbig, sodass die Kabel, die auf dem gleichen elektrischen Potential liegen, die gleiche Farbe haben. Notiere zudem den Wert des elektrischen Potentials.

<div class="flex-box">
<div markdown="1">![Taster geschlossen (Stromfluss).](/circuits/taster-an-arduino.png?lightbox=1024&resize=400)</div>
<div markdown="1">![Taster geschlossen (Stromfluss).](/circuits/taster-an-arduino-geschlossen.png?lightbox=1024&resize=400)</div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Pullup-Widerstand

Eine Alternative zu der bekannten oberen Schaltung ist die Schaltung mit einem sogenannten Pullup-Widerstand. In der Abbildung ist die Schaltung mit einem Taster und einem Pullup-Widerstand dargestellt.

![](/circuits/schaltplan-pullup.png?lightbox=1024&resize=800)

1.  Markiere die Kabel jeweils farbig, sodass die Kabel, die auf dem gleichen elektrischen Potential liegen, die gleiche Farbe haben. Notiere zudem den Wert des elektrischen Potentials.
2.  Erläutere die Bedeutung der beiden Begriffe *Pulldown* und *Pullup*.
    *Hinweis: to pull - engl. für “ziehen”*
</div>

<div markdown="1" class="projekt">
#### Fußgängerampel reloaded
Baue und programmiere eine Fußgängerampel mit einer Pullup-Schaltung für den Taster!
</div>

!!!! #### Digitale Pins des Arduino
!!!! 
!!!! <div class="flex-box">
!!!! <div markdown="1">
!!!! Die digitalen Pins des Arduino von 0 bis 13 kennen nur zwei Zustände, für die es unterschiedliche Bezeichnungen gibt (siehe rechts/unten). Sie können als digitaler Ausgang oder als digitaler Eingang konfiguriert werden. Bei einem digitalen Ausgang kann eine Spannung von 5 V oder 0 V gegenüber GND ausgegeben werden. Ein digitaler Eingang kann Spannungen zwischen 0 V und 5 V einlesen; dabei werden Spannungen von 0 V bis 1,4 V als `LOW` oder `0` interpretiert, größere Spannungen als `HIGH` oder `1`.
!!!! </div>
!!!! <div markdown="1">
!!!! Bezeichnungen für Zustände von digitalen Pins
!!!! 
!!!! |     An     |    Aus    |
!!!! | :--------: | :-------: |
!!!! | HIGH (5 V) | LOW (0 V) |
!!!! |     1      |     0     |
!!!! 
!!!! *Hinweis: Bei vielen anderen Mikrocontrollern entspricht das HIGH-Potential 3,3 V.*
!!!! </div>
!!!! </div>


## Pulsweitenmodulation

**Ziel:** Mithilfe des Arduino soll eine funkelnde LED-Kerze gebaut werden.

Der Arduino verfügt über mehrere sogenannte PWM-Pins, die mit einer Tilde ($\sim$) gekennzeichnet sind. Du hast diese Pins schon bei den analogen Aktoren kennen gelernt, weil diese über Pulsweitenmodulation(PWM) angesprochen werden. Die PWM-Werte, die der Anweisung übergeben werden können, variieren von 0 bis 255.
<center markdown="1">![](/images/analogwrite.png)</center>

<div markdown="1" class="aufgabe">
#### Fading

1.  Schließe eine LED mit Vorwiderstand an einen PWM-Pin an und konfiguriere einen analogen Aktor an diesem Pin. Implementiere dann eine Zählschleife, die systematisch alle PWM-Werte von 0 bis 255 durchläuft. Beschreibe die Auswirkung auf die LED.
2.  Sorge dafür, dass die PWM-Werte nach Erreichen der 255 genauso rückwärts von 255 bis 0 durchlaufen werden.
3.  *Zum Experimentieren:* Was passiert, wenn PWM-Werte größer als 255 übergeben werden?
</div>

<div markdown="1" class="aufgabe">
#### Pulsweitenmodulation

Erkläre mithilfe der Zusammenfassung zur Pulsweitenmodulation, was bei der Nutzung des Befehls `Schreibe analogen Wert Aktor A 158` passiert. Berechne auch die mittlere Spannung, die am PWM-Pin ausgegeben wird.

*Für Physik-Profis:* Eine blaue LED hält bis zu 3,5 V aus, ohne durchzubrennen. Trotzdem darf man sie bei Verwendung dieses Befehls nicht ohne Vorwiderstand an den Pin anschließen. Begründe.
</div>

!!!! #### Pulsweitenmodulation (PWM)
!!!! 
!!!! Bei der Pulsweitenmodulation wechselt der ausgewählte digitale Pin sehr schnell (mit einer Frequenz von 50 Hz) zwischen den elektrischen Potentialen 5 V und 0 V hin und her - es ergibt sich also ein gepulstes Signal, dessen Weite (Dauer) moduliert werden kann. Aus dem Verhältnis der Zeit, in der der Pin auf einem 5 V-Potential liegt, zu der Zeit, in der der Pin auf einem 0 V-Potential liegt, ergibt sich eine mittlere Spannung (gegenüber Ground), die scheinbar am Pin anliegt. Wenn der Pin in der Hälfte der Zeit auf 5 V und in der anderen Hälfte auf 0 V liegt, dann ergibt sich eine mittlere Spannung von $\overline{U}=2,5\,V$. Wenn der Pin nur in einem Viertel der Zeit auf 5 V liegt, dann ergibt sich eine mittlere Spannung von $\overline{U}=1,25\,V$ ($=5\,V\cdot 0,25$).
!!!! 
!!!! ![t-U-Diagramm zur PWM](/images/pwm-info.png?lightbox=1024&resize=500&classes=caption "Darstellung des zeitlichen Verlaufs einer Pulsweitenmodulation mit einem Tastverhältnis von 25%.")
!!!! 
!!!! Das Verhältnis der Zeit mit 5 V zu der Gesamtdauer einer Periode mit 5 V und 0 V wird als *Tastverhältnis* bezeichnet. Im Programm wird das Tastverhältnis durch einen Wert zwischen 0 und 255 angegeben. Eine 0 bedeutet, dass die Zeit mit 5 V 0% ausmacht, also liegt der Pin durchgängig auf einem 0 V-Potential. Eine 255 bedeutet, dass die Zeit mit 5 V 100% ausmacht, also liegt der Pin durchgängig auf einem 5 V-Potential. Diese beiden Werte entsprechen dem, was bei den bekannten Befehlen zur Steuerung von digitalen Pins passiert.
!!!! 
!!!! Ein Wert von 100 bedeutet einen Anteil von $\frac{100}{255}\approx 0,39$ der Periodendauer. Daraus ergibt sich eine mittlere Spannung von $\overline{U}=5\,V\cdot 0,39\approx 1,96\,V$.

<div markdown="1" class="projekt">
#### Kerzenfunkeln

<p></p>
<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/led-kerze.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
<br>Beispiel für eine einfache LED-Kerze.
</center>

Modelliere mithilfe von drei LEDs das Funkeln von Kerzen.

Tipp: Die Verwendung des Blocks für Zufallszahlen wird dir helfen, das Funkeln natürlicher aussehen zu lassen.
</div>

## Spannung messen

Wenn Batterien kaum noch Ladung gespeichert haben, lässt die Spannung an ihren Polen nach und sinkt unter den Wert, der auf der Batterie vermerkt ist. Mithilfe der analogen Eingänge A0 bis A5 lässt sich die Spannung messen und so entscheiden, ob die Batterie noch brauchbar ist.

**Frage:** Wie kann man mit dem Arduino eine Spannung messen?

!!! Druckvorlage zum Download: <a href="/worksheets/batterietester-druck.pdf" download><i class="fa fa-download" aria-hidden="true"></i> Batterietester-Druck.pdf</a>

<div markdown="1" class="projekt">
#### Batterietester (Voltmeter für Spannungen bis 5V)
Für eine einfache Messung bei einer 1,5 V-Batterie wird der negative Pol der Batterie mit GND verbunden, sodass ein gemeinsames Nullpotential vorliegt. Der positive Pol der Batterie wird mit einem der analogen Eingänge A0 bis A5 verbunden. Über einen eingebauten Analog-Digital-Wandler (*engl. analog-to-digital converter, ADC*) wird der Spannungswert durch eine Zahl zwischen 0 und 1023 ausgedrückt.
<div class="flex-box">
<div markdown="1">
1.  Schließe eine mit 1,5 V beschriftete Batterie an den Arduino an und miss die Spannung. Berechne aus dem Analogwert die Spannung und lass sie auf dem seriellen Monitor ausgeben.
2.  Ergänze den Batterietester um eine Ampel, die anzeigt, ob die Batterie voll aufgeladen bzw. noch in Ordnung bzw. leer ist.
</div>
<div markdown="1">
| **Analogwert** | **Spannung** |
| :------------: | :----------: |
|       0        |     0 V      |
|       1        |              |
|      100       |              |
|      1023      |     5 V      |
</div>
</div>
</div>

<div markdown="1" class="projekt">
#### Batterietester (Voltmeter für Spannungen ab 5V)

Da der Arduino beim direkten Anschließen nur maximal 5 V “verträgt”, muss man zum Testen von z. B. 9 V-Blöcken weitere Bauteile verwenden. Mit zwei $ 10\, k\Omega$ Widerständen kann man einen einfachen *Spannungsteiler* aufbauen, der die Messung ermöglicht.

![Schaltplan für Voltmeter bis 10V.](/circuits/schaltplan-batterietester.png?lightbox=1024&resize=400)

1.  Berechne die Stromstärke und die Spannung an den Widerständen. Warum sind große Widerstände hier sinnvoll?
2.  Markiere die Kabel in der Abbildung farbig, sodass die Kabel, die auf dem gleichen elektrischen Potential liegen, die gleiche Farbe haben. Notiere zudem den Wert des elektrischen Potentials.
3.  Gib an, wie man mit dem Arduino die Spannung am 9 V-Block berechnet. Baue den Batterietester dann auf und probiere ihn mit dem 9 V-Block aus der Box aus.
4.  *Zum Nachdenken:* Wie groß darf die Spannung beim oben verwendeten Spannungsteiler maximal sein, damit am Arduino nicht mehr als 5 V anliegen? Wie könnte man den Spannungsteiler bauen, sodass man Spannungen bis zu 15 V messen kann?
</div>

*Hinweis:* Ganz ähnlich funktioniert ein Multimeter, bei dem man mit einem Drehregler ein passendes Widerstandsverhältnis für den aufgedruckten Messbereich einstellen kann. Auch im Multimeter werden für die Spannungsmessung möglichst große Widerstände verwendet.
![Multimeter](/images/multimeter.jpg?resize=300&classes=caption "Multimeter.")

!!!! #### (Quasi) Analoge Pins am Arduino
!!!! 
!!!! Die mit einer Tilde versehenen Digitalpins am Arduino verfügen über Pulsweitenmodulation, über die sich eine mittlere Spannung einstellen lässt, die quasi einem analogen Signal entspricht. Genau genommen sind 256 Stufen von 0 (0 V) bis 255 (5 V) möglich, woraus sich ergibt, dass die Stufen sich um 0,02 V unterscheiden.
!!!! 
!!!! Die Pins mit der Beschriftung A0 bis A5 werden als analoge Eingänge bezeichnet, weil sich mit ihnen Spannungen zwischen 0 V und 5 V messen lassen. Auch hier handelt es sich nur um eine quasi analoge Messung, denn der Messbereich ist in 1024 Stufen von 0 (0 V) bis 1023 (5 V) unterteilt, woraus sich ergibt, dass die Stufen sich um 0,005 V unterscheiden.
