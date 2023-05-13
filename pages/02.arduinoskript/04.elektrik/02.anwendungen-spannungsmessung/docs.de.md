---
title: 'Anwendungen der Spannungsmessung'
menu: '[AS] Anwendungen der Spannungsmessung'
---

# Elektrische Grundlagen Teil 2: Anwendungen der Spannungsmessung

<style>
    body {
        --abk: 'EG.AS';
    }
</style>

[TOC]

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
<summary class="details__trigger details__title">Regression mit Geogebra Rechner Suite (einfache Variante mit Regressionsmenü)</summary>
<div class="details__content" markdown="1">
Auf dem Tablet empfiehlt sich der Einsatz der Geogebra Rechner Suite statt Geogebra Classic. Innerhalb der Rechner Suite sollte der **Grafikrechner** oder der **CAS-Rechner** verwendet werden.

**1.** Öffne die Tabellenansicht. Gib die Widerstandswerte als x-Werte in die $x$-Spalte ein. Die Helligkeitswerte werden in die $y_1$-Spalte eingegeben.

![Dateneingabe in der Tabellenansicht der Suite](/images/regression-geogebra-1.png?resize=750)

**2.** Öffne das Drei-Punkte-Menü neben $y_1$ und wähle die Option "Regression".

![Öffnen des Regressionsmenüs](/images/regression-geogebra-2.png?resize=750)

**3.** Wähle ein passendes Regressionsmodell. Die Gleichung und die Werte der Parameter werden dann angezeigt. Durch einen Klick auf Zeichnen erhält man den Graphen und die Funktionsgleichung wird in der Algebra-Ansicht eingefügt.
*Hinweis:* In der Algebra-Ansicht sieht man, dass automatisch der entsprechende Trend-Befehl von Geogebra genutzt wurde. Als Argument dient eine Liste von Punkten, die mit $(x_1, y_1)$ erzeugt wird. Dies kann man auch manuell eingeben - eine Anleitung dazu findet sich im nächsten ausklappbaren Abschnitt.

![Regressionsmenü in der Suite](/images/regression-geogebra-3.png?resize=750)
![Regressionsgleichung in der Algebra-Ansicht](/images/regression-geogebra-4.png)

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
<summary class="details__trigger details__title">Regression mit Geogebra Rechner Suite / Grafikrechner (fortgeschrittene Variante mit Befehlen)</summary>
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

