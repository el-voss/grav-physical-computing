---
title: 'Drehregler verwenden'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: poti.jpg
taxonomy:
    Mindestvoraussetzungen:
        - 'Der serielle Monitor'
        - 'Spannung Stromstärke und Widerstand berechnen'
        - 'Spannung messen'
        - Pulsweitenmodulation
    Inhalte:
        - Spannungsteiler
        - Potentiometer
        - 'Potentiometer ohne Mikrocontroller'
        - 'Kennlinien von Leuchtdioden'
    Niveau:
        - Fortgeschritten
        - Experte
---

Die Messung einer variablen, (quasi-)analogen Spannung eröffnet neue Möglichkeiten, da die Eingabewerte nun viel differenzierter sind als bei einem Taster, bei dem die Eingabe nur aus “0” oder “1” bestand. Zum Beispiel kann man darüber angeben, wie hell eine Lampe leuchten soll bzw. wie stark sie gedimmt werden soll. Dazu werden Potentiometer verwendet.

**Frage:** Wie funktioniert ein Potentiometer?

<div markdown="1" class="aufgabe clearfix">
#### Bleistiftpotentiometer

![Bleistiftpotentiometer](bleistiftpoti-klein.png?lightbox=1024&resize=300&classes=caption,figure-right "Bleistiftpotentiometer.")
Ein einfaches Potentiometer kannst du selbst bauen.

*Basteln:* Markiere dafür mit Bleistift einen dicken Strich auf einem Blatt Papier und klebe am einen Ende ein Kabel fest, das mit GND verbunden ist. Klebe ans andere Ende ein Kabel, das mit 5V verbunden ist. Mit einem dritten Kabel (“Sensorkabel”), das mit einem analogen Eingang verbunden ist, lässt sich nun messen, welches elektrische Potential an einer beliebigen Stelle des Bleistiftstreifens anliegt.

*Experimentieren:* Schreibe ein Programm, dass dir fortlaufend auf dem seriellen Monitor die Analogwerte und die umgerechneten Werte für das elektrische Potenzial bzw. die Spannung gegenüber GND anzeigt. Bewege dann das Sensorkabel über den Streifen und beobachte, wie sich die Spannungswerte verändern.

*Analysieren:* Der Bleistiftstreifen leitet den Strom bei einem bestimmten Gesamtwiderstand $R_{ges}$. Durch das Sensorkabel wird der Streifen in zwei Teile mit den Teilwiderständen $R_1$ und $R_2$ geteilt. Erläutere anhand deiner Beobachtungen, wie die drei Widerstände und die in A0 gemessene Spannung zusammenhängen.

*Idee: Frick, Fritsch und Trick (2015): *Einführung in Mikrocontroller - Der Arduino als Steuerzentrale*, Bad Saulgau*
</div>

!!!! #### Potentiometer
!!!! 
!!!! Ein **Potentiometer**, kurz: Poti, ist im Grunde nichts anderes als ein Spannungsteiler mit zwei Widerständen. Jedoch kann die Größe der Widerstände z. B. durch Drehen variiert werden. Der Gesamtwiderstand bleibt dabei immer gleich.
!!!! <div class="flex-box">
!!!! <div markdown="1">![Drehpotentiometer](poti.jpg?resize=200&classes=caption "Drehpotentiometer.")</div>
!!!! <div markdown="1">![Trimmpotentiometer1](trimmpotentiometer1.jpg?resize=200&classes=caption "Trimmpotentiometer auf einem Infrarotsensor.")</div>
!!!! <div markdown="1">![Trimmpotentiometer2](trimmpotentiometer2.jpg?resize=200&classes=caption "Trimmpotentiometer an einem Bewegungsmelder.")</div>
!!!! <div markdown="1">![Schaltsymbol eines Potentiometers](poti-schaltsymbol.png?resize=150&classes=caption "Schaltsymbol eines Potentiometers.")</div>
!!!! </div>
!!!! 
!!!! Beim Anschluss an den Arduino wird der mittlere Pin des Potentiometers an einen analogen Eingang angeschlossen. Die anderen beiden Pins werden mit GND und 5V verbunden.

<div markdown="1" class="projekt clearfix">
#### Dimmbare Lampe
![PWM-Analog-Diagramm](pwm-analog-diagramm.png?resize=300&classes=caption,figure-right "Diagramm zur Ermittlung einer Funktion.")
Baue und programmiere eine Lampe, deren Helligkeit sich durch ein Potentiometer einstellen lässt.

*Hinweis:* Du musst dafür sorgen, dass der eingelesene Analogwert zwischen 0 und 1023 in einen PWM-Wert zwischen 0 und 255 umgerechnet wird. Ermittle dazu eine passende Funktion.
</div>

### Die Verwendung eines Potentiometers ohne Mikrocontroller

Für einige Projekte, wie das Dimmen einer Lampe, ist ein Mikrocontroller eigentlich überdimensioniert, weil sich die Funktion schon durch eine reine Hardwarelösung erreichen lässt.

![Potentiometer-Schaltung](potentiometer-anwendung.png?lightbox=1024&resize=500&classes=caption "Auf der linken Seite ist die Anwendung eines Potentiometers ohne Mikrocontroller dargestellt. Auf der rechten Seite ist der zugehörige Ersatzschaltplan gezeichnet, der zeigt, dass das Potentiometer als Spannungsteiler mit zwei variablen Widerständen R2 und R3 aufgefasst werden kann.")

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

![U-I-Kennlinien einer roten, gelben, grünen und blauen Leuchtdiode.](Diodenkennlinien.png?lightbox=1024&resize=700&classes=caption "U-I-Kennlinien einer roten, gelben, grünen und blauen Leuchtdiode.")
</div>

### Theoretische Analyse des Potentiometers


<div markdown="1" class="aufgabe">
#### Genaue Analyse des Spannungsteilers

Kann man die Spannung, die in A0 gemessen wird, auch schon im Voraus berechnen?
1. In einfachen Fällen gelingt dir das sicherlich schnell ($R_1$ ist jeweils der Widerstand zwischen GND und A0, $R_2$ ist der Widerstand zwischen A0 und 5V --> erübrigt sich durch BILD!!):
	a. Gib die Spannung an, falls $R_1=5k\Omega$ und $R_2=5k\Omega$.
	b. Gib die Spannung an, falls $R_1=2,5k\Omega$ und $R_2=7,5k\Omega$.
	c. Gib die Spannung an, falls $R_1=8k\Omega$ und $R_2=2k\Omega$.
2. Für kompliziertere Fälle braucht man eine Formel. Leite eine Formel zur Berechnung der Spannung in A0 her.
Tipp: Betrachte zuerst die Stromstärken $I_1$ und $I_2$ durch die beiden Widerstände. Durch das Sensorkabel fließt (näherungsweise) kein Strom.
</div>


!!!! #### Der Spannungsteiler
!!!! 
!!!! ![image](spannungsteiler.png?resize=250)
!!!! Der Spannungsteiler ist ein häufig verwendeter Teil einer Schaltung, in dem zwei Widerstände in Reihe geschaltet sind. Dadurch teilt sich die insgesamt anliegende Spannung auf die beiden Widerstände entsprechend ihrer jeweiligen Größe auf. Dabei gilt:
!!!! <center markdown="1">$\frac{U_1}{R_1} = \frac{U_2}{R_2} = \frac{U_{ges}}{R_{ges}}.$</center>