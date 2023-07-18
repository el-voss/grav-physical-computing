---
title: 'Helligkeit messen mit einem LDR'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: ldr2.jpg
---

<div markdown="1" class="clearfix">
![Ein LDR.](ldr.jpg?resize=150&classes=caption,figure-right "Ein LDR.")
Die Helligkeit bestimmt unseren Tages- und Jahresrhythmus: Wenn es dunkel wird, schlafen wir (oder gehen feiern) und wenn es hell wird, stehen wir wieder auf und unternehmen etwas. Es ist daher nur logisch, dass es einige Anwendungen für elektrische Schaltungen gibt, die auf die Helligkeit reagieren.

In einfachen Fällen wird dabei auf einen Fotowiderstand, kurz: LDR (*engl. **l**ight **d**ependent **r**esistor*), zurückgegriffen. Diesen hast du bereits in einem [vorherigen Abschnitt](/arduinoskript/algorithmische-grundlagen/bausteine-von-algorithmen/der-serielle-monitor) kennen gelernt: Sein Widerstand wird umso kleiner, je heller es ist.

**Frage:** Wie bestimmt man mit Hilfe von Analogwerten die Helligkeit?
</div>

<div markdown="1" class="aufgabe">
#### LDR revisited

1.  Die Abbildung unten zeigt noch einmal, wie der [LDR am Arduino angeschlossen wurde](/arduinoskript/algorithmische-grundlagen/bausteine-von-algorithmen/der-serielle-monitor#erste-experimente-mit-dem-ldr). Erläutere, was im Spannungsteiler passiert, wenn die Helligkeit erhöht wird. Halte dich dabei an folgende Schritte:
    Widerstand des LDR $\rightarrow$ Spannung am LDR $\rightarrow$ Spannung am Festwiderstand $\rightarrow$ Analogwert in A0.
    ![LDR im Spannungsteiler](spannungsteiler-ldr-beschriftet-2.png?resize=300&classes=caption "Ein LDR zwischen 5V und A0 im Spannungsteiler am Arduino.")

2.  Unten ist abgebildet, wie die Anweisung `gib Licht % Lichtsensor LDR` intern umgesetzt wird. Begründe, dass diese Angabe als Angabe für die physikalische Größe Helligkeit ungeeignet ist.

    ![Die Anweisung `Gib Licht % Lichtsensor LDR` als selbst definierte Funktion.](gibLichtInProzent-Funktion.png?classes=caption "Die Anweisung `Gib Licht % Lichtsensor LDR` als selbst definierte Funktion.")
</div>

<div markdown="1" class="aufgabe">
#### Der LDR im Spannungsteiler

1.  Um nicht ständig umdenken zu müssen, soll der Spannungsteiler von LDR und Festwiderstand $R_F= 10\,  k\Omega$ nun wie unten abgebildet aufgebaut werden. Lasse dir die Spannung am LDR auf dem seriellen Monitor ausgeben.
2.  Erläutere wiederum, was im Spannungsteiler passiert, wenn die Helligkeit erhöht wird.

![LDR im Spannungsteiler 2](spannungsteiler-ldr-beschriftet.png?resize=300&classes=caption "Ein LDR zwischen A0 und GND im Spannungsteiler am Arduino.")
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
!!!! ![image](spannungsteiler.png?resize=250)
!!!! Der Spannungsteiler ist ein häufig verwendeter Teil einer Schaltung, in dem zwei Widerstände in Reihe geschaltet sind. Dadurch teilt sich die insgesamt anliegende Spannung auf die beiden Widerstände entsprechend ihrer jeweiligen Größe auf. Dabei gilt:
!!!! <center markdown="1">$\frac{U_1}{R_1} = \frac{U_2}{R_2} = \frac{U_{ges}}{R_{ges}}.$</center>

Um den funktionalen Zusammenhang zwischen Widerstand des LDR und Umgebungshelligkeit herauszufinden, gibt es drei Möglichkeiten:
  - Theoretische Herleitung: Die Herleitung des Zusammenhangs mit Hilfe von anderen physikalischen Gesetzen und Annahmen führt an dieser Stelle zu weit,
  - Experimentelle Ermittlung: Dazu müssten einige Widerstandswerte bei vorgegebener Helligkeit gemessen werden, jedoch ist es schwierig, eine vorgegebene Helligkeit genau herzustellen,
  - Blick ins Datenblatt: Zu jedem Bauteil gibt es ein Datenblatt, in dem die zugehörigen Kennzahlen und Zusammenhänge dargestellt sind - hier können die Ergebnisse von Laborexperimenten eingesehen werden.

<div markdown="1" class="aufgabe clearfix">
#### Datenblatt lesen

![Logarithmische Skalierung](logarithmischeSkalierung.png?resize=250&classes=caption,figure-right "Logarithmische Skalierung.")
Suche im [Datenblatt des LDR](https://components101.com/sites/default/files/component_datasheet/LDR%20Datasheet.pdf?target=_blank) den Graphen, der den Zusammenhang von Helligkeit in der Einheit Lux und Widerstand des LDR in der Einheit $ \,  k\Omega$ abbildet. Entnimm dem Graphen fünf zusammengehörige Werte von Helligkeit und Widerstand und halte diese tabellarisch fest.

*Achtung:* Die Achsen im Graphen sind logarithmisch skaliert. Das bedeutet, dass die Werte an den Achsen nicht gleichmäßig zunehmen, sondern exponentiell (von 0,1 zu 1 zu 10 zu 100 zu 1000). Diese Skalierung ermöglicht erst das Ablesen der Werte, aber es muss berücksichtigt werden, dass die Werte nur sehr ungenau abzulesen sind.

*Das verlinkte Datenblatt ist evtl. nicht das korrekte Datenblatt zu dem LDR. Da die Bauteilnummer bei dem verwendeten Starter Kit nicht angegeben wird, ist eine Zuordnung leider nicht mehr möglich.*
</div>

<div markdown="1" class="aufgabe">
#### Regression durchführen

Unabhängig davon, ob man die Daten aus einem Experiment oder dem Datenblatt gewonnen hat, lässt sich nun eine Regression durchführen, um den allgemeinen Zusammenhang zwischen Widerstand des LDR und Helligkeit herauszufinden.

Führe mit den ermittelten Werten eine Regression durch, indem du [die Anleitung befolgst](../werkzeug-regression-durchfuehren). Bestimme mit der erhaltenen Funktion die Umgebungshelligkeit im Raum sowie die Helligkeit deiner Smartphone-Taschenlampe auf niedrigster und höchster Stufe.
</div>

