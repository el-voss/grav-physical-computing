---
title: 'Elektrische Grundlagen zu digitalen und analogen Pins'
menu: 'Elektrische Grundlagen'
taxonomy:
    category:
        - docs
---

# Elektrische Grundlagen zu digitalen und analogen Pins

<style>
    h1 {
  		counter-set: h1 4 ;
	}
</style>

In der Arduino-Welt kommt man bereits sehr weit, wenn man die vorkonfigurierten Bauteile nach Anleitung anschließt und dann mit dem Programmieren loslegt. Allerdings kann man manche Schaltungen auch effizienter aufbauen oder anders herum anschließen oder aus den Sensorwerten mehr als nur qualitative Prozentwerte ermitteln, deren genaue Bedeutung völlig unklar ist. Um dies zu erreichen, muss man die physikalischen Grundlagen der Arduino-Pins und einiger grundlegender Bausteine von elektrischen Schaltungen verstehen, die im Folgenden thematisiert werden.

*Hinweis: Falls dieses Skript für einen reinen Informatikunterricht genutzt werden soll, kann dieses Kapitel übersprungen werden.*

In diesem Kapitel lernst du…

  - …Widerstand, Spannung und Stromstärke im Stromkreis zu berechnen,
  - …das elektrische Potential an einem digitalen Pin einzulesen,
  - …Pulsweitenmodulation zu benutzen,
  - …Spannungen zu messen und Spannungen an einem Spannungsteiler zu berechnen,
  - …ein Potentiometer, einen LDR sowie einen NTC auszulesen, um eine Drehung, die Umgebungshelligkeit bzw. die Temperatur zu messen,
  - …wie Transistoren verwendet werden,
  - …wie man einen Elektromotor steuert,

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
$I_L =  20 \, mA =  0,02 \, A$ $\quad \Longrightarrow \quad$ $I_R =  0,06 \, mA$

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


## Drehregler verwenden

Die Messung einer variablen, (quasi-)analogen Spannung eröffnet neue Möglichkeiten, da die Eingabewerte nun viel differenzierter sind als bei einem Taster, bei dem die Eingabe nur aus “0” oder “1” bestand. Zum Beispiel kann man darüber angeben, wie hell eine Lampe leuchten soll bzw. wie stark sie gedimmt werden soll. Dazu werden Potentiometer verwendet.

**Frage:** Wie funktioniert ein Potentiometer?

<div markdown="1" class="aufgabe clearfix">
#### Bleistiftpotentiometer

![Bleistiftpotentiometer](/images/bleistiftpoti-klein.png?lightbox=1024&resize=300&classes=caption,figure-right "Bleistiftpotentiometer.")
Ein einfaches Potentiometer kannst du selbst bauen.

*Basteln:* Markiere dafür mit Bleistift einen dicken Strich auf einem Blatt Papier und klebe am einen Ende ein Kabel fest, das mit GND verbunden ist. Klebe ans andere Ende ein Kabel, das mit 5V verbunden ist. Mit einem dritten Kabel (“Sensorkabel”), das mit einem analogen Eingang verbunden ist, lässt sich nun messen, welches elektrische Potential an einer beliebigen Stelle des Bleistiftstreifens anliegt.

*Experimentieren:* Schreibe ein Programm, dass dir fortlaufend auf dem seriellen Monitor die Analogwerte und die umgerechneten Werte für das elektrische Potenzial bzw. die Spannung gegenüber GND anzeigt. Bewege dann das Sensorkabel über den Streifen und beobachte, wie sich die Spannungswerte verändern.

*Analysieren:* Der Bleistiftstreifen leitet den Strom bei einem bestimmten Gesamtwiderstand $R_{ges}$. Durch das Sensorkabel wird der Streifen in zwei Teile mit den Teilwiderständen $R_1$ und $R_2$ geteilt. Erläutere anhand deiner Beobachtungen, wie die drei Widerstände zusammenhängen.

*Idee: Frick, Fritsch und Trick (2015): *Einführung in Mikrocontroller - Der Arduino als Steuerzentrale*, Bad Saulgau*
</div>

!!!! #### Potentiometer
!!!! 
!!!! Ein **Potentiometer**, kurz: Poti, ist im Grunde nichts anderes als ein Spannungsteiler mit zwei Widerständen. Jedoch kann die Größe der Widerstände z. B. durch Drehen variiert werden. Der Gesamtwiderstand bleibt dabei immer gleich.
!!!! <div class="flex-box">
!!!! <div markdown="1">![Potentiometer](/images/poti.jpg?resize=200&classes=caption "Potentiometer.")</div>
!!!! <div markdown="1">![Schaltsymbol eines Potentiometers](/images/poti-schaltsymbol.png?resize=150&classes=caption "Schaltsymbol eines Potentiometers.")</div>
!!!! </div>
!!!! 
!!!! Beim Anschluss an den Arduino wird der mittlere Pin des Potentiometers an einen analogen Eingang angeschlossen. Die anderen beiden Pins werden mit GND und 5V verbunden.

<div markdown="1" class="projekt clearfix">
#### Dimmbare Lampe
![PWM-Analog-Diagramm](/images/pwm-analog-diagramm.png?resize=300&classes=caption,figure-right "Diagramm zur Ermittlung einer Funktion.")
Baue und programmiere eine Lampe, deren Helligkeit sich durch ein Potentiometer einstellen lässt.

*Hinweis:* Du musst dafür sorgen, dass der eingelesene Analogwert zwischen 0 und 1023 in einen PWM-Wert zwischen 0 und 255 umgerechnet wird. Ermittle dazu eine passende Funktion.
</div>

### Die Verwendung eines Potentiometers ohne Mikrocontroller

Für einige Projekte, wie das Dimmen einer Lampe, ist ein Mikrocontroller eigentlich überdimensioniert, weil sich die Funktion schon durch eine reine Hardwarelösung erreichen lässt.

![Potentiometer-Schaltung](/circuits/potentiometer-anwendung.png?lightbox=1024&resize=500&classes=caption "Auf der linken Seite ist die Anwendung eines Potentiometers ohne Mikrocontroller dargestellt. Auf der rechten Seite ist der zugehörige Ersatzschaltplan gezeichnet, der zeigt, dass das Potentiometer als Spannungsteiler mit zwei variablen Widerständen R2 und R3 aufgefasst werden kann.")

<div markdown="1" class="projekt">
#### Dimmbare Lampe ohne Mikrocontroller

1.  Erkläre, wie sich die LED verhält, wenn das Potentiometer so gedreht ist, dass gilt:
    1.  …$R_2= 0\,  \Omega, \quad R_3= 10\,  k\Omega$, 
    2.  …$R_2= 10\,  k\Omega, \quad R_3= 0\,  \Omega$.
2.  Bevor die Schaltung aufgebaut werden kann, muss die Größe des Vorwiderstands $R_1$ berechnet werden. Der Vorwiderstand muss den Strom auch dann noch klein genug halten, wenn das Potentiometer so gedreht ist, dass gilt: $R_3= 0\,  \Omega$ (und dementsprechend $R_2= 10\, k\Omega$).
    
    Berechne $R_1$ so, dass die Stromstärke durch die LED maximal $ 20\,  mA$ beträgt.
    
    *Hinweis:* Die Stromstärke durch $R_2$ kann vernachlässigt werden, sodass $I_{ges}\approx I_{LED} =  20\,  mA$ mit $U_{LED}= 2,3\, V$ gilt.
    
    *Begründung:* Wenn $R_1= 0\,  \Omega$ wäre, würde die komplette Spannung an $R_2$ abfallen. Dann gilt: $I_{R_2}=\frac{ 9\, V}{ 10\,  k\Omega}= 0,9\,  mA$. Die Stromstärke durch $R_2$ beträgt also nur etwa 1/20 der Stromstärke durch die LED und wenn $R_1$ größer wird, dann wird die Stromstärke durch $R_2$ sogar noch kleiner.
3.  Baue die Schaltung auf und beobachte das Leuchtverhalten der LED beim Drehen am Potentiometer.
</div>

Beim Experimentieren mit dem Potentiometer wirst du feststellen, dass man das Potentiometer nicht vollständig zur Seite drehen muss, damit die LED aufhört zu leuchten. Im Experiment zeigt sich, dass eine blaue LED schon bei $R_2= 2,5\,  k\Omega$ und $R_3= 7,5\,  k\Omega$ aufhört zu leuchten. Die Spannung an der LED beträgt dann $U_{L,blau}= 2,3\, V$.

<div markdown="1" class="aufgabe">
#### Kennlinien von Leuchtdioden

1.  Baue eine blaue LED in den oben dargestellten Schaltkreis und drehe das Potentiometer so, dass die blaue LED gerade nicht mehr leuchtet. Die Spannung an der blauen LED beträgt dann $U_{L,blau}= 2,3\, V$. Ersetze dann die blaue LED durch eine grüne/gelbe/rote LED. Notiere deine Beobachtungen.
2.  Ordne die Farben der LEDs den rechts abgebildeten Kennlinien von einer blauen, einer grünen, einer gelben und einer roten LED zu. Experimentiere dazu mit dem Potentiometer und den LEDs.
    *Hinweis:* Das menschliche Auge ist in der Lage, bereits bei einer Stromstärke von wenigen Mikroampere ein schwaches Leuchten zu erkennen. Im Diagramm ist so eine geringe Stromstärke kaum von $ 0\,  mA$ zu unterscheiden.

![U-I-Kennlinien einer roten, gelben, grünen und blauen Leuchtdiode.](/circuits/Diodenkennlinien.png?lightbox=1024&resize=700&classes=caption "U-I-Kennlinien einer roten, gelben, grünen und blauen Leuchtdiode.")
</div>

## Helligkeit messen

<div markdown="1" class="clearfix">
![Ein LDR.](/images/ldr.jpg?resize=150&classes=caption,figure-right "Ein LDR.")
Die Helligkeit bestimmt unseren Tages- und Jahresrhythmus: Wenn es dunkel wird, schlafen wir (oder gehen feiern) und wenn es hell wird, stehen wir wieder auf und unternehmen etwas. Es ist daher nur logisch, dass es einige Anwendungen für elektrische Schaltungen gibt, die auf die Helligkeit reagieren.

In einfachen Fällen wird dabei auf einen Fotowiderstand, kurz: LDR (*engl. **l**ight **d**ependent **r**esistor*), zurückgegriffen. Diesen hast du bereits in einem [vorherigen Abschnitt](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#erste-experimente-mit-dem-ldr) kennen gelernt: Sein Widerstand wird umso kleiner, je heller es ist.

**Frage:** Wie bestimmt man mit Hilfe von Analogwerten die Helligkeit?
</div>

<div markdown="1" class="aufgabe">
#### LDR revisited

1.  Die Abbildung unten zeigt noch einmal, wie der [LDR am Arduino angeschlossen wurde](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#erste-experimente-mit-dem-ldr). Erläutere, was im Spannungsteiler passiert, wenn die Helligkeit erhöht wird. Halte dich dabei an folgende Schritte:
    Widerstand des LDR $\rightarrow$ Spannung am LDR $\rightarrow$ Spannung am Festwiderstand $\rightarrow$ Analogwert in A0.
    ![LDR im Spannungsteiler](/circuits/spannungsteiler-ldr-beschriftet-2.png?resize=300&classes=caption "Ein LDR zwischen 5V und A0 im Spannungsteiler am Arduino.")

2.  Unten ist abgebildet, wie die Anweisung `gib Licht % Lichtsensor LDR` intern umgesetzt wird. Begründe, dass diese Angabe als Angabe für die physikalische Größe Helligkeit ungeeignet ist.

    ![Die Anweisung `Gib Licht % Lichtsensor LDR` als selbst definierte Funktion.](/images/gibLichtInProzent-Funktion.png?classes=caption "Die Anweisung `Gib Licht % Lichtsensor LDR` als selbst definierte Funktion.")
</div>

<div markdown="1" class="aufgabe">
#### Der LDR im Spannungsteiler

1.  Um nicht ständig umdenken zu müssen, soll der Spannungsteiler von LDR und Festwiderstand $R_F= 10\,  k\Omega$ nun wie unten abgebildet aufgebaut werden. Lasse dir die Spannung am LDR auf dem seriellen Monitor ausgeben.
2.  Erläutere wiederum, was im Spannungsteiler passiert, wenn die Helligkeit erhöht wird.

![LDR im Spannungsteiler 2](/circuits/spannungsteiler-ldr-beschriftet.png?resize=300&classes=caption "Ein LDR zwischen A0 und GND im Spannungsteiler am Arduino.")
</div>

Die Änderung der Spannung resultiert aus der Änderung des Widerstands des LDR. Um einen Eindruck vom Wertebereich des Widerstands eines LDR zu bekommen, soll dieser nun berechnet werden. Anschließend lässt sich aus dem Widerstand des LDR auch die Helligkeit berechnen.

<div markdown="1" class="aufgabe">
#### Genaue Analyse des Spannungsteilers

1.  Leite eine Formel für den Spannungsteiler her, mit der du den Widerstand $R_{LDR}$ des LDR mithilfe der Spannung $U_{LDR}$ am LDR, dem Festwiderstand $R_F$ und der Spannung $U_F$ am Festwiderstand berechnen kannst.
    Tipp: Betrachte zuerst die Stromstärken $I_F$ und $I_{LDR}$ durch den Festwiderstand und den LDR. Durch das Sensorkabel fließt (näherungsweise) kein Strom.
2.  Berechne, welchen Widerstand der LDR hat, wenn er komplett abgedunkelt ist und wenn er mit einer Smartphone-Taschenlampe bestrahlt wird.
</div>

!!!! #### Der Spannungsteiler
!!!! 
!!!! ![image](/circuits/spannungsteiler.png?resize=250)
!!!! Der Spannungsteiler ist ein häufig verwendeter Teil einer Schaltung, in dem zwei Widerstände in Reihe geschaltet sind. Dadurch teilt sich die insgesamt anliegende Spannung auf die beiden Widerstände entsprechend ihrer jeweiligen Größe auf. Dabei gilt:
!!!! <center markdown="1">$\frac{U_1}{R_1} = \frac{U_2}{R_2} = \frac{U_{ges}}{R_{ges}}.$</center>

Um den funktionalen Zusammenhang zwischen Widerstand des LDR und Umgebungshelligkeit herauszufinden, gibt es drei Möglichkeiten:
  - Theoretische Herleitung: Die Herleitung des Zusammenhangs mit Hilfe von anderen physikalischen Gesetzen und Annahmen führt an dieser Stelle zu weit,
  - Experimentelle Ermittlung: Dazu müssten einige Widerstandswerte bei vorgegebener Helligkeit gemessen werden, jedoch ist es schwierig, eine vorgegebene Helligkeit genau herzustellen,
  - Blick ins Datenblatt: Zu jedem Bauteil gibt es ein Datenblatt, in dem die zugehörigen Kennzahlen und Zusammenhänge dargestellt sind - hier können die Ergebnisse von Laborexperimenten eingesehen werden.

<div markdown="1" class="aufgabe clearfix">
#### Datenblatt lesen

![Logarithmische Skalierung](/images/logarithmischeSkalierung.png?resize=250&classes=caption,figure-right "Logarithmische Skalierung.")
Suche im [Datenblatt des LDR](https://components101.com/sites/default/files/component_datasheet/LDR%20Datasheet.pdf?target=_blank) den Graphen, der den Zusammenhang von Helligkeit in der Einheit Lux und Widerstand des LDR in der Einheit $ \,  k\Omega$ abbildet. Entnimm dem Graphen fünf zusammengehörige Werte von Helligkeit und Widerstand und halte diese tabellarisch fest.

*Achtung:* Die Achsen im Graphen sind logarithmisch skaliert. Das bedeutet, dass die Werte an den Achsen nicht gleichmäßig zunehmen, sondern exponentiell (von 0,1 zu 1 zu 10 zu 100 zu 1000). Diese Skalierung ermöglicht erst das Ablesen der Werte, aber es muss berücksichtigt werden, dass die Werte nur sehr ungenau abzulesen sind.

*Das verlinkte Datenblatt ist evtl. nicht das korrekte Datenblatt zu dem LDR. Da die Bauteilnummer bei dem verwendeten Starter Kit nicht angegeben wird, ist eine Zuordnung leider nicht mehr möglich.*
</div>

<div markdown="1" class="aufgabe">
#### Regression durchführen

Unabhängig davon, ob man die Daten aus einem Experiment oder dem Datenblatt gewonnen hat, lässt sich nun eine Regression durchführen, um den allgemeinen Zusammenhang zwischen Widerstand des LDR und Helligkeit herauszufinden.

Führe mit den ermittelten Werten eine Regression durch, indem du die unten abgebildete Anleitung befolgst. Bestimme mit der erhaltenen Funktion die Umgebungshelligkeit im Raum sowie die Helligkeit deiner Smartphone-Taschenlampe auf niedrigster und höchster Stufe.
</div>

!!!! #### Eine Regression durchführen
!!!! 
!!!! Beim Durchführen einer Regression wird diejenige Funktion(sgleichung) ermittelt, die am besten zu den gegebenen Daten passt. Die Art der Funktion muss jedoch vom Anwender sinnvoll festgelegt werden.

<details class="details">
<summary class="details__trigger details__title">Regression mit Geogebra Classic</summary>
<div class="details__content" markdown="1">
**1.** Starte Geogebra Classic und wähle als Perspektive die Tabellenkalkulation. Übertrage die Daten in die Tabellenkalkulation.

![Tabellenkalkulation in Geogebra Classic](/images/RegressionLDR-GGB-1.png)

**2.** Markiere alle Daten und wähle das Werkzeug `Analyse zweier Variablen`. Die Daten aus Spalte A werden automatisch als x-Koordinate gewählt, die aus Spalte B als y-Koordinate. Bei Bedarf kann dies mit $X \rightleftarrows Y$ vertauscht werden (oben rechts).

![Analyse zweier Variablen](/images/RegressionLDR-GGB-2.png)

**3.** Führe eine Regression durch, indem du unten links ein passendes Regressionsmodell wählst. Welche Funktionsklasse könnte zu der Verteilung der Werte passen? Falls die ausprobierte Funktionsklasse nicht zu den Werten passt, probiere eine andere Funktionsklasse.

*Hinweis:* Die Anzahl der Nachkommastellen lässt sich in den Einstellungen unter “Runden” ändern.

![Regressionsfunktion](/images/RegressionLDR-GGB-3.png)

**4.** Übersetze die Funktionsgleichung in den physikalischen Zusammenhang. Für den Widerstand ist das Formelzeichen $R$ festgelegt. Für die Helligkeit wählen wir an dieser Stelle $H$.

<center markdown="1">
$$
y = 66,78 \cdot x^{-0,66} \\
\downarrow \hspace{2.2cm} \downarrow \hspace{1cm} \\
H = 66,78 \cdot R^{-0,66} \\
R \text{ in }  \,  k\Omega, ~ H \text{ in Lux} 
$$
</center>
</div>
</details>

<details class="details">
<summary class="details__trigger details__title">Regression mit Geogebra Rechner Suite / Grafikrechner</summary>
<div class="details__content" markdown="1">
Auf dem Tablet empfiehlt sich der Einsatz der Geogebra Rechner Suite statt Geogebra Classic, allerdings verfügt diese noch nicht über das Statistik-Modul von Classic, weshalb man hier mit ein paar Befehlen arbeiten muss (Stand: Januar 2021). Innerhalb der Rechner Suite sollte der Grafikrechner verwendet werden.

**1.** Gib die Daten jeweils als Liste, also mit geschweiften Klammern, in die Eingabezeile ein. Benenne die Liste mit den Widerstandswerten als `R` und die Liste mit den Helligkeitswerten als `H`.

![Listen in der Suite](/images/GGB-Suite-Regression1.png)

**2.** Erzeuge aus beiden Listen eine Liste von Punkten mit den Widerstandswerten als x-Koordinate und den Helligkeitswerten als y-Koordinate. Dazu werden die Listen als Koordinaten eines Punktes verwendet (siehe Screenshot).

![Punkte aus Listen erzeugen](/images/GGB-Suite-Regression2.png)

**3.** Nutze einen der Trend-Befehle und übergib diesem die Liste mit den Punkten, um eine entsprechende Regressionsfunktion zu erhalten.

<div markdown="1" style="overflow:auto;">
| Regression | Befehl | Hilfe-Seite |
|:-----------------|:----------|:----------------|
| Linear         | `Trendlinie(<Liste von Punkten>)` | [Trendlinie-Hilfe](https://wiki.geogebra.org/de/Trendlinie_(Befehl)?target=_blank)|
| Polynom | `TrendPoly(<Liste von Punkten>, <Grad>)` | [TrendPoly-Hilfe](https://wiki.geogebra.org/de/TrendPoly_(Befehl)?target=_blank) |
| Sinus | `TrendSin(<Liste von Punkten>)` | [TrendSin-Hilfe](https://wiki.geogebra.org/de/TrendSin_(Befehl)?target=_blank) |
| Potenzfunktion | `TrendPot(<Liste von Punkten>)` | [TrendPot-Hilfe](https://wiki.geogebra.org/de/TrendPot_(Befehl)?target=_blank) |
| Exponentialfunktion mit beliebiger Basis | `TrendExp2(<Liste von Punkten>)` | [TrendExp2-Hilfe](https://wiki.geogebra.org/de/TrendExp2_(Befehl)?target=_blank) |
</div>

![Trend-Befehle](/images/GGB-Suite-Regression3.png)
![Regressionsergebnis](/images/GGB-Suite-Regression4.png)

**4.** In den Einstellungen (Zahnrad oben rechts) kann die Anzahl der Nachkommastellen angepasst werden, falls nötig. Übersetze dann die Funktionsgleichung in den physikalischen Zusammenhang. Für den Widerstand ist das Formelzeichen $R$ festgelegt. Für die Helligkeit wählen wir an dieser Stelle $H$.

<center markdown="1">
$$
y = 66,78 \cdot x^{-0,66} \\
\downarrow \hspace{2.2cm} \downarrow \hspace{1cm} \\
H = 66,78 \cdot R^{-0,66} \\
R \text{ in }  \,  k\Omega, ~ H \text{ in Lux} 
$$
</center>

</div>
</details>

<details class="details">
<summary class="details__trigger details__title">Regression mit TI-Nspire</summary>
<div class="details__content" markdown="1">
**1.** Erstelle ein neues Dokument mit einer Seite “Lists & Spreadsheet”. Benenne eine Spalte als `rw` (Werte für R, also der Widerstand) und eine Spalte als `hw` (Werte für die Helligkeit). Ergänze die Werte.

![Lists and Spreadsheet](/images/RegressionLDR-TI-1.jpg?resize=400)

**2.** Füge eine neue Seite “Data & Statistics” hinzu (mit `ctrl` $\rightarrow$ `+page`). Da wir die Helligkeit in Abhängigkeit vom Widerstand berechnen wollen, kommt der Widerstand auf die Rechtsachse und die Helligkeit auf die Hochachse.

![Data and Statistics](/images/RegressionLDR-TI-2.jpg?resize=400)

**3.** Führe eine Regression durch (`menu` $\rightarrow$ `4: Analysieren` $\rightarrow$ `6: Regression`). Welche Funktionsklasse könnte zu der Verteilung der Werte passen? Falls die ausprobierte Funktionsklasse nicht zu den Werten passt, mache die Regression rückgängig (`ctrl` $\rightarrow$ `esc`) und probiere eine andere Funktionsklasse.

*Achtung:* Durch die geringe Auflösung des Taschenrechners können auch passende Funktionen ggf. falsch aussehen.

![Regressionsfunktion](/images/RegressionLDR-TI-3.jpg?resize=400)

**4.** Übersetze die Funktionsgleichung in den physikalischen Zusammenhang. Für den Widerstand ist das Formelzeichen $R$ festgelegt. Für die Helligkeit wählen wir an dieser Stelle $H$.

<center markdown="1">
$$
y = 66,78 \cdot x^{-0,66} \\
\downarrow \hspace{2.2cm} \downarrow \hspace{1cm} \\
H = 66,78 \cdot R^{-0,66} \\
R \text{ in }  \,  k\Omega, ~ H \text{ in Lux} 
$$
</center>
</div>
</details>

## Temperatur messen

<div markdown="1" class="clearfix">
![Ein NTC](/images/ntc.jpg?resize=150&classes=caption,figure-right "Ein NTC.")
Nicht nur die Helligkeit beeinflusst unseren Alltag, sondern auch die Temperatur. Ganz allgemein ist die Temperatur eine wichtige Größe, die bei vielen Anwendungen eine Rolle spielt und daher erfasst und automatisiert in die Anwendung einfließen sollte: Thermostate regeln die Temperatur im Raum, Wetterstationen geben die Temperatur an und 3D-Drucker regeln die Temperatur der Düse auf eine festgelegte Temperatur, damit der Kunststoff flüssig wird, aber immer noch zäh genug bleibt, um die Figur zu bilden. Häufig wird dabei ein Heißleiter (kurz: NTC, von engl. *negative temperature coefficient*) verwendet - ein elektrischer Widerstand, der auf die Temperatur reagiert.

**Frage:** Wie verwendet man einen NTC am Arduino?
</div>
    
<div markdown="1" class="aufgabe">
#### Erste Experimente mit dem NTC

1.  Baue mithilfe eines Festwiderstands $R_F= 10\,  k\Omega$ und dem NTC einen Spannungsteiler und lies die Spannung am NTC in A0 aus (genau wie beim LDR).
    Erwärme den NTC, indem du ihn zwischen Daumen und Zeigerfinger hälst. Beschreibe, wie sich die Spannung am NTC ändert, wenn dieser wärmer wird.

2.  Begründe, dass auch hier gilt:
    <center markdown="1">$\frac{R_{NTC}}{R_{F}} = \frac{U_{NTC}}{U_{F}}.$</center>    
    Begründe anhand der Formel, wie sich der Widerstand am NTC ändert, wenn dieser wärmer wird.
</div>

*Hinweis:* Der NTC wird wieder als analoger Sensor konfiguriert. Es handelt sich *nicht* um den Temperatursensor TMP36, der nach einem anderen Prinzip arbeitet.

<div markdown="1" class="projekt">
#### Digitales Thermometer
<p></p>
<div class="flex-box">
<div markdown="1">
Baue ein digitales Thermometer, das die Lufttemperatur im Raum auf dem seriellen Monitor anzeigt\!

Führe dazu mithilfe des rechts abgebildeten Ausschnitts [aus einem Datenblatt](https://pdf1.alldatasheet.com/datasheet-pdf/view/509832/EPCOS/G1541.html) eine Regression durch.

*Das verlinkte Datenblatt ist evtl. nicht das korrekte Datenblatt zu dem NTC. Da die Bauteilnummer bei dem verwendeten Starter Kit nicht angegeben wird, ist eine Zuordnung leider nicht mehr möglich.*
</div>
<div>
<div markdown="1" style="width:80%; background: #eee; border: 3px solid #000; padding:1em; margin: 1em;">
R/T No. **7003**
Widerstand bei 25°:
$R_{25}= 10\,  k\Omega$.  

| T (C) | $R_T/R_{25}$ | (%/K) |
| :---- | :------------- | :---- |
| 5.0   | 2.3311         | 4.5   |
| 10.0  | 1.8684         | 4.4   |
| 15.0  | 1.5075         | 4.2   |
| 20.0  | 1.224          | 4.1   |
| 25.0  | 1.0000         | 4.0   |
| 30.0  | 0.82176        | 3.9   |
</div>
</div>
</div>
</div>

!!!! #### Heißleiter
!!!! 
!!!! Ein **Heißleiter**, kurz: **NTC** (*engl. **n**egative **t**emperature **c**oefficient*), ist ein temperaturabhängiger Widerstand. Wenn es wärmer wird, wird der elektrische Widerstand des NTC kleiner; wenn es kälter wird, wird der elektrische Widerstand des NTC größer.
!!!! <div class="flex-box">
!!!! <div markdown="1">![Ein NTC](/images/ntc.jpg?resize=150&classes=caption "Ein NTC als Bild.")</div>
!!!! <div markdown="1">![NTC Schaltsymbol](/images/ntc-schaltsymbol.png?resize=200&classes=caption "Schaltsymbol für einen NTC.")</div>
!!!! </div>
!!!! 
!!!! *Anmerkung:*
!!!! 
!!!! Es gibt auch Kaltleiter, kurz: **PTC** (*engl. **p**ositive **t**emperature **c**oefficient*), die ihren Widerstand verringern, wenn es kälter wird, und erhöhen, wenn es wärmer wird. Zusammen genommen bezeichnet man NTC’s und PTC’s auch als **Thermistoren**, also als temperaturabhängige Widerstände (engl. **therm**ally sensitive res**istor**).
    
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

Erkläre die Funktion der Diode parallel zum E-Motor in eigenen Worten. Lies dazu die Hintergrundinformationen zum Elektromotor und zur Diode.

Baue die unten abgebildete Schaltung zum Betrieb eines Gleichstrom-Elektromotors am Arduino auf.

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

Wenn keine Spannung mehr am Motor anliegt, wird sich der Motor aufgrund seiner Trägheit immer noch ein wenig weiterdrehen. Durch das Drehen der Spulen im Magnetfeld der eingebauten Permanentmagneten wird in den Spulen ein Strom induziert, dessen Richtung entgegengesetzt zur vorherigen Richtung ist. Dieser “falsch” gerichtete Strom würde den Arduino zerstören. Aus diesem Grund schaltet man eine *Diode* parallel zum Motor.

!!!! #### Diode
!!!! 
!!!! Eine **Diode** ist wie ein elektrisches Ventil: Sie lässt den Strom nur in eine Richtung durch. Im Gegensatz zu Leuchtdioden wandeln “normale” Dioden die elektrische Energie in Wärme um. In *Durchlassrichtung* wird der negative Pol (bzw. GND) mit der Seite verbunden, an der der Ring angebracht ist, und der positive Pol mit der anderen Seite.
!!!! <div class="flex-box">
!!!! <div markdown="1">![Diode als Bild](/images/diode2.jpg?resize=250&classes=caption "Diode als Bild.")</div>
!!!! <div markdown="1">![Diode als Schaltsymbol](/circuits/diode-schaltsym.png?resize=250&classes=caption "Diode als Schaltsymbol.")</div>
!!!! </div>

Die Diode wird jedoch *Sperrrichtung* eingebaut, also so, dass der Ring mit 5V und die andere Seite mit GND verbunden ist. Dadurch fließt im Normalbetrieb kein Strom durch die Diode. Wenn jedoch der entgegengerichtete Induktionsstrom des Motors auftritt, kann dieser durch die Diode abfließen, bis die verbleibende elektrische Energie vollständig in Wärme umgewandelt wurde.

! **Recherche: Verpolungsschutz**
! LEDs leuchten nicht, wenn man sie falsch herum anschließt. Andere Bauteile wie Elektrolytkondensatoren explodieren sogar, wenn man sie falsch herum anschließt. Um zu vermeiden, dass solche Schäden entstehen, wenn man eine Batterie falsch herum anschließt, werden in einigen Fällen Dioden genutzt. Recherchiere im [Elektronik-Kompendium](https://www.elektronik-kompendium.de/sites/slt/1206251.htm) wie dies funktioniert.

! **Recherche: Aufbau von Gleichstrom-Elektromotoren**
! Oben wurde die Funktionsweise von Gleichstrom-Elektromotoren bereits angedeutet. Recherchiere im Internet den genauen Aufbau und Ablauf der Drehbewegung.

### Elektromotor mit Transistor steuern

Der 5 V-Pin des Arduino liefert zwar in vielen Fällen genügend Strom für den Motor, jedoch lässt er sich nicht programmieren. Dazu lässt sich ein Transistor einbauen.

**Frage:** Wie steuert man einen Elektromotor mit einem Transistor am Arduino?

Die unten abgebildete Schaltung zeigt, wie ein npn-Transistor eingebaut werden kann, um den Motor mithilfe von Digitalpin 9 zu schalten. Der Transistor lässt den Strom zwischen Emitter (E) und Kollektor (C) passieren, wenn die Spannung zwischen Basis (B) und Emitter (E) mehr als 0,7 V beträgt, anderenfalls sperrt er. Der Vorwiderstand mit $R= 330\,  \Omega$ sorgt dafür, dass der Basisstrom nicht zu groß wird.

Es ist ratsam, die Basis mit einem PWM-Pin (gekennzeichnet durch $\sim$) zu verbinden, da sich dadurch die Geschwindigkeit des Motors steuern lässt.

![Anschluss eines Gleichstrom-Elektromotors am Arduino mit Steuerung über einen Transistor an Digitalpin 9.](/circuits/motoranschluss-mit-steuerung.png?lightbox=1024&resize=500&classes=caption "Anschluss eines Gleichstrom-Elektromotors am Arduino mit Steuerung über einen Transistor an Digitalpin 9.")

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

### Elektromotor mit Relais steuern

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
<div markdown="1" class="flexible">![npn-Transistor; Blick auf die flache Seite](/images/transistor-schematisch.png?resize=250&classes=caption "npn-Transistor; Blick auf die flache Seite.") </div>
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


### Elektromotoren mit dem Motortreiber-IC L293D steuern (inkl. Drehrichtung)

Die Steuerung von Motoren erfordert in den oben beschriebenen Fällen stets mehrere Bauteile und einige Überlegungen zum Aufbau der Schaltung. Außerdem kann dabei nicht die Drehrichtung geändert werden. Der integrierte Schaltkreis L293D vereinfacht den Aufbau der Schaltung für gleich zwei Motoren und ermöglicht zusätzlich die flexible Steuerung der Drehrichtung.

**Frage:** Wie steuert man einen Motor mit dem L293D?

<div markdown="1" class="aufgabe">
#### Aufbau des L293D - der Vierquadrantensteller

Um die Drehrichtung des Motors kontrollieren zu können, braucht man eine spezielle Anordnung von Transistoren, die als *H-Brücke* oder *Vierquadrantensteller* bezeichnet wird. Dieser Aufbau befindet sich auch im L293D.

![Vereinfachter Aufbau eines Vierquadrantenstellers mit Transistoren und zugehörigen Freilaufdioden (links) sowie die noch einmal vereinfachte Ersatzschaltung mit Schaltern.](/circuits/vierquadrantensteller.png?lightbox=1024&resize=800&classes=caption "Vereinfachter Aufbau eines Vierquadrantenstellers mit Transistoren und zugehörigen Freilaufdioden (links) sowie die noch einmal vereinfachte Ersatzschaltung mit Schaltern.")

1.  Die Drehrichtung des Motors hängt davon ab, in welcher Richtung der Strom durch den Motor fließt. Notiere, welche Transistoren / Schalter eingeschaltet und welche Transistoren / Schalter ausgeschaltet sein müssen, damit der Strom von links nach rechts durch den Motor fließt. Notiere danach die Kombination für die Stromrichtung von rechts nach links.
2.  Erkläre, wie sich der Motor mithilfe der vier Transistoren bzw. Schalter bremsen lässt.
3.  Welche Schaltkombinationen der Transistoren müssen unbedingt vermieden werden?

*Hinweis:* Die Freilaufdioden dienen dazu, die vom Motor induzierten Ströme abfließen zu lassen.
</div>

Da stets zwei Transistoren gemeinsam eingeschaltet werden müssen, könnten diese beim Anschluss an den Arduino über einen gemeinsamen Digitalpin gesteuert werden. Zudem ist es im Allgemeinen sinnvoll, für den Motor und den Arduino verschiedene Spannungsquellen zu verwenden, die über einen gemeinsamen GND-Anschluss geerdet werden, damit die möglicherweise hohen Ströme des Motors den Arduino nicht zerstören.

![Steuerung eines Motors mit einem Vierquadrantensteller am Arduino.](/circuits/vierquadrantensteller-an-arduino.png?lightbox=1024&resize=800&classes=caption "Steuerung eines Motors mit einem Vierquadrantensteller am Arduino.")

Bei der oben dargestellten Schaltung muss jedoch immer noch genau darauf geachtet werden, dass nicht versehentlich alle vier Transitoren leitend geschaltet werden. Daher ist die Steuerung mit dem L293D noch ein wenig komplexer - die oben angestellten Überlegungen verdeutlichen aber gut den prinzipiellen Aufbau.

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

## Vermischte Übungen

<div markdown="1" class="aufgabe">
#### Reihenschaltung

Eine rote LED soll an Pin 13 des Arduino betrieben werden. Durch die LED soll eine Stromstärke von $ 10\,  mA$ fließen, was bei einer Spannung von $ 2,1\, V$ an der LED der Fall ist.

1.  Zeichne den zugehörigen Schaltplan.
2.  Berechne, wie groß der Vorwiderstand gewählt werden muss, damit diese Werte erreicht werden.
</div>

<div markdown="1" class="aufgabe">
#### Parallelschaltung

Drei grüne LEDs sollen parallel geschaltet an Pin 13 des Arduino angeschlossen und mit einem gemeinsamen Vorwiderstand betrieben werden. Die LEDs halten eine Stromstärke von maximal $ 20\,  mA$
bei einer Spannung von $ 3,3\, V$ aus.

1.  Zeichne den zugehörigen Schaltplan.
2.  Ein Digitalpin am Arduino darf maximal mit einer Stromstärke von $ 40\,  mA$ belastet werden. Berechne, welche Stromstärke dann maximal durch die einzelnen LEDs fließen darf.
3.  Der Tabelle unten kannst du den zugehörigen Spannungswert an den LEDs entnehmen. Berechne, wie groß der gemeinsame Vorwiderstand der LEDs sein muss, damit die in b) berechnete Stromstärke eingehalten wird.
    
    <div markdown="1" style="overflow:auto;">
    |  **Spannung U**   | 3,03 V | 3,07 V | 3,1 V | 3,13 V | 3,16 V | 3,19 V |
    | :---------------: | :----: | :----: | :---: | :----: | :----: | :----: |
    | **Stromstärke I** | 10 mA  | 11 mA  | 12 mA | 13 mA  | 14 mA  | 15 mA  |
    </div>
</div>

<div markdown="1" class="aufgabe">
#### Schaltung einer RGB-LED

Eine RGB-LED besteht aus drei einzelnen LEDs (rot, grün, blau), die jeweils über einen eigenen Digitalpin angesteuert werden (vgl. Schaltplan unten).
![RGB-LED-Schaltplan](/images/rgb-led-schaltplan.png?resize=300&classes=caption "Verschaltung einer RGB-LED.")
Am gemeinsamen GND-Anschluss soll ein gemeinsamer Vorwiderstand für alle LEDs angebracht werden, um die Stromstärke auf maximal $ 15\,  mA$ zu begrenzen. Die Spannung an den LEDs sollte dann $ 2,25\, V$ nicht überschreiten.

1.  Erkläre, welche Unterschiede zur Parallelschaltung von drei LEDs an *einem* Digitalpin zu beachten sind.
2.  Berechne, wie groß der gemeinsame Vorwiderstand mindestens sein muss.
</div>

## Ausblick

**Offene Fragen:**

  - Wie werden weitere Bauteile angeschlossen und im Programm angesprochen?
  - Wie wird die Programmlogik physikalisch abgebildet?
  - Wie funktionieren solche Bauteile wie LDR, NTC, Dioden, Transistoren?

! #### Motivationsquellen
! - [Laser-Game](https://www.instructables.com/id/Arduino-UNO-Laser-Game/): Ein kleines Spiel, das sich auf einfache Weise nachbauen lässt.
! - [Arduino Garden Controller](https://www.youtube.com/watch?v=O_Q1WKCtWiA): Gartenarbeit muss heute nicht mehr aufwendig sein: Mit einem Arduino lassen sich die Pflanzen automatisch bewässern, wenn die Erde nicht mehr feucht genug ist. Die erhobenen Daten lassen sich außerdem schön visualisieren.
! - [Wetterstation von bitluni](https://www.youtube.com/watch?v=at7wmm9t8UE)
! - [Das Problem mit Wettervorhersagen (*Dr. Whatson*, Youtube)](https://www.youtube.com/watch?v=aHkec8bA8iI): Selbst gebaute Wetterstationen sind beliebte Anfängerprojekte, bei denen meist ein WLAN-fähiger Mikrocontroller auf Basis des ESP8266 zum Einsatz kommt. Dieser lässt sich ebenfalls über die Arduino IDE programmieren. Wer etwas mehr Hintergrundwissen dazu haben will, schaut sich das Video von *Dr. Whatson* an, der außerdem das Projekt [SenseBox](https://www.sensebox.de/) vorstellt.
! - [“Use the force or your brainwaves” (Youtube)](https://www.youtube.com/watch?v=KtSCo6hIlRQ), [“Use the force or your brainwaves” (Projektseite)](https://create.arduino.cc/projecthub/Imetomi/use-the-force-or-your-brainwaves-9e839b): Der Schüler Imets Tamás hat es mithilfe mehrerer Arduinos geschafft, seine Gehirnwellen einzulesen und zu nutzen, um einen Roboter zu steuern!
! - [Autonomes Auto](https://www.instructables.com/id/Self-Driving-Car-Using-Arduinoautonomous-Guided-Ve/): Der Bastler hinter diesem Projekt hat einen Arduino-basierten Prototypen für ein autonomes Auto entworfen.
! - [Pong-Bot](https://www.instructables.com/id/Arduino-Controlled-Game-Pong-Bot-Vs-Human/): Ein kleines witziges Spiel hat dieser Bastler mit einem Arduino automatisiert.
! - [Snack-Automat](https://www.instructables.com/id/Snack-Vending-Machine-Powered-by-Arduino/): Ein Arduino-basierter Snack-Automat!

