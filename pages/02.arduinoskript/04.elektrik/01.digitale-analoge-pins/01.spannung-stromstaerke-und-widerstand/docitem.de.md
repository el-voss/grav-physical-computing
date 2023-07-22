---
title: 'Spannung, Stromstärke und Widerstand berechnen'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: uri-dreieck.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Kurze Einführung'
    Inhalte:
        - Spannung
        - Stromstärke
        - Widerstand
        - Reihenschaltung
        - Parallelschaltung
        - 7-Segment-Anzeige
    Niveau:
        - Basis
        - Fortgeschritten
---

<div markdown="1" class="clearfix">
![Widerstände](Widerstaende.jpg?resize=200&classes=caption,figure-right "Widerstände.")
Bisher war die Größe des Vorwiderstands von LEDs mit $330\,\Omega$ vorgegeben. In unserem Bausatz finden sich jedoch viele weitere Widerstände, die teilweise größer und teilweise kleiner sind.

**Frage:** Welche Auswirkung haben Widerstände auf den Stromkreis? Wie kann man dies berechnen?
</div>

<div markdown="1" class="aufgabe">
#### Zusammenhang von Widerstand, Stromstärke und Spannung

Unten ist eine einfache Reihenschaltung mit einer Spannungsquelle, einer LED und einem Vorwiderstand abgebildet. Stelle eine Vermutung an, ob die LED heller oder dunkler leuchten wird, wenn man den Vorwiderstand verkleinert. Begründe deine Vermutung.

![Reihenschaltung von LED und Vorwiderstand an einer Spannungsquelle.](ReiheLEDWiderstand.png?resize=400&classes=caption "Reihenschaltung von LED und Vorwiderstand an einer Spannungsquelle.")
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
!!!! ![Formeldreieck für Spannung, Stromstärke und Widerstand](uri-dreieck.png?classes=caption,figure-right "Formeldreieck.")
!!!! #### Widerstand, Spannung und Stromstärke
!!!! 
!!!! Der Widerstand \(R\) ist definiert als das Verhältnis von Spannung $U$ zu Stromstärke $I$: 
!!!! <center markdown="1">$R=\frac{U}{I}.$</center>
!!!! Ein Widerstand heißt *ohmscher Widerstand*, wenn das Verhältnis $\frac{U}{I}$ stets gleich groß ist (also wenn $R$ unabhängig von Stromstärke und Spannung konstant ist).
!!!! </div>

!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">
!!!! #### Gesetze der Reihenschaltung
!!!! ![Reihenschaltung](reihenschaltung.png?lightbox=1024&resize=400)
!!!! 
!!!!   - In einer Reihenschaltung ist die Stromstärke an jeder Stelle gleich groß: $I_{ges}=I_1=I_2= I_3=\dots$
!!!!   - In einer Reihenschaltung teilt sich die Gesamtspannung auf die einzelnen Bauteile auf: $U_{ges}=U_1 + U_2 + U_3+\dots$
!!!!   - In einer Reihenschaltung addieren sich die Einzelwiderstände zum Gesamtwiderstand: $R_{ges}=R_1+R_2+R_3+\dots$
!!!! </div>
!!!! <div markdown="1">
!!!! #### Gesetze der Parallelschaltung
!!!! ![Parallelschaltung](parallelschaltung.png?lightbox=1024&resize=400)
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

![Schaltplan für Ampelschaltung](schaltplan-rgb-led-berechnung.png?lightbox=1024&resize=300&classes=caption,figure-right "Schaltplan für Ampelschaltung.")
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
!!!! <div markdown="1">![7-Segment-Anzeige.](7segmentanzeige-bild2.jpg?resize=350)</div>
!!!! <div markdown="1">![Schema einer 7-Segment-Anzeige](7segmentanzeige-schema.png?resize=350)</div>
!!!! </div>

<div markdown="1" class="projekt">
#### Raketencountdown

Suche dir nun den passenden Widerstand für die 7-Segment-Anzeige heraus und verbinde beide mit dem Arduino. Programmiere dann einen Raketencountdown, der von 9 rückwärts bis 0 zählt.

*Tipp:* Erstelle dir zuerst eine Tabelle, in der du übersichtlich festhälst, welche LEDs für welche Zahl an sein müssen und mit welchen Pins am Arduino diese verbunden sind.
Rücklink (öffnet in neuem Tab): <a href="https://mintorials.de/de/arduinoskript/nepo#widerstandsringe-ablesen" target="_blank">Widerstandsringe ablesen</a>
*Für Schnelle:* Man kann mit einer 7-Segment-Anzeige auch Buchstaben darstellen und nacheinander durchlaufen lassen!
*Idee: Frick, Fritsch und Trick (2015): *Einführung in Mikrocontroller - Der Arduino als Steuerzentrale*, Bad Saulgau*
</div>