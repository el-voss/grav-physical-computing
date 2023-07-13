---
title: 'Elektromotor und Diode'
show_pageimage: true
image_width: 300
image_height: 400
---

Bei vielen Projekten soll sich etwas bewegen - dies lässt sich mit Elektromotoren realisieren. Die Ansteuerung eines Elektromotors erfordert auf der Hardware-Seite ein wenig Vorbereitung, denn aufgrund der hohen Ströme, die Elektromotoren ziehen, sollte man sie nicht direkt an den Digitalpins des Arduino anschließen. Für die Steuerung greift man meistens auf einen Transistor zurück; eine brauchbare Alternative ist aber auch das Relais. Beide Steuerungsmöglichkeiten werden im Folgenden erarbeitet.

**Frage:** Wie betreibt man einen Elektromotor am Arduino?

<div markdown="1" class="aufgabe">
#### Motor und Diode - ein Paar, das zusammen gehört

1. Bei der Verwendung von Elektromotoren benötigt man stets eine Diode, die parallel zum Elektromotor geschaltet wird. Lies im unten folgenden Hintergrundwissen nach, warum dies so ist.
2. Zeichne den unten abgebildeten Schaltplan zwei Mal ab. Zeichne zuerst den Stomfluss ein, wenn der Arduino unter Spannung steht (z. B. weil er per USB-Kabel am Computer angeschlossen ist). Zeichne in der zweiten Schaltung den Stromfluss ein, wenn die Spannung vom Arduino getrennt wird.
3. Erkläre die Funktion der Diode parallel zum E-Motor in eigenen Worten.

!! Es ist sehr wichtig, dass die Diode richtig, also in Sperrrichtung, eingebaut wird, da sonst der Arduino zerstört werden könnte!

![Anschluss eines Gleichstrom-Elektromotors mit dem Arduino als Spannungsquelle.](Schaltplan-Motoranschluss-einfach.png?lightbox=1024&resize=500&classes=caption "Anschluss eines Gleichstrom-Elektromotors mit dem Arduino als Spannungsquelle.")
</div>

*Hintergrundinformationen:*

!!!! #### Elektromotor
!!!! 
!!!! Ein **Elektromotor** besteht aus mehreren Spulen und Magneten. Wenn Strom durch die Spulen fließt, baut sich um die Spulen ein Magnetfeld auf, das mit dem Magnetfeld der eingebauten Magneten wechselwirkt (Anziehung/Abstoßung), sodass es zu einer Drehung des Motors kommt. Ein sogenannter Kommutator sorgt dafür, dass der Strom durch die Spulen ständig seine Richtung wechselt, sodass es immer wieder von Neuem zu Anziehung bzw. Abstoßung der Magnetfelder kommt und die Drehung nicht aufhört, solange eine Spannung anliegt.
!!!! <div class="flex-box">
!!!! <div markdown="1">![Gleichstrom-Elektromotor als Bild.](dc-motor-klein.png?resize=200&classes=caption "Gleichstrom-Elektromotor als Bild.")</div>
!!!! <div markdown="1">![Gleichstrom-Elektromotor als Schaltsymbol.](motor-schaltsym.png?resize=200&classes=caption "Gleichstrom-Elektromotor als Schaltsymbol.")</div>
!!!! </div>

Wenn keine Spannung mehr am Motor anliegt, wird sich der Motor aufgrund seiner Trägheit immer noch ein wenig weiterdrehen. Durch das Drehen der Spulen im Magnetfeld der eingebauten Permanentmagneten wird vom Motor eine Spannung induziert, die entgegengesetzt zur vorherigen Richtung ist. Dort, wo vorher der Minuspol gewesen ist, wird nun vom Motor ein Pluspol induziert und umgekehrt. Diese “falsch” gerichtete Spannung würde den Arduino zerstören. Aus diesem Grund schaltet man eine *Diode* parallel zum Motor.

!!!! #### Diode
!!!! 
!!!! Eine **Diode** ist wie ein elektrisches Ventil: Sie lässt den Strom nur in eine Richtung durch. Im Gegensatz zu Leuchtdioden wandeln “normale” Dioden die elektrische Energie in Wärme um. In *Durchlassrichtung* wird der negative Pol (bzw. GND) mit der Seite verbunden, an der der Ring angebracht ist, und der positive Pol mit der anderen Seite.
!!!! <div class="flex-box">
!!!! <div markdown="1">![Diode als Bild](diode2.jpg?resize=250&rotate=180&classes=caption "Diode als Bild.")</div>
!!!! <div markdown="1">![Diode als Schaltsymbol in Durchlassrichtung](diode-schaltsym.png?resize=250&classes=caption "Diode als Schaltsymbol in Durchlassrichtung.")</div>
!!!! <div markdown="1">![Diode als Schaltsymbol in Sperrrichtung](diode-sperrrichtung.png?resize=250&classes=caption "Diode als Schaltsymbol in Sperrrichtung.")</div>
!!!! </div>

Die Diode wird jedoch *Sperrrichtung* eingebaut, also so, dass der Ring mit 5V und die andere Seite mit GND verbunden ist. Dadurch fließt im Normalbetrieb kein Strom durch die Diode. Wenn jedoch die entgegengerichtete Induktionsspannung des Motors auftritt, kann der dadurch hervorgerufene Strom durch die Diode abfließen, bis die verbleibende elektrische Energie vollständig in Wärme umgewandelt wurde.

! **Recherche: Verpolungsschutz**
! LEDs leuchten nicht, wenn man sie falsch herum anschließt. Andere Bauteile wie Elektrolytkondensatoren explodieren sogar, wenn man sie falsch herum anschließt. Um zu vermeiden, dass solche Schäden entstehen, wenn man eine Batterie falsch herum anschließt, werden in einigen Fällen Dioden genutzt. Recherchiere im [Elektronik-Kompendium](https://www.elektronik-kompendium.de/sites/slt/1206251.htm), wie dies funktioniert.

! **Recherche: Aufbau von Gleichstrom-Elektromotoren**
! Oben wurde die Funktionsweise von Gleichstrom-Elektromotoren bereits angedeutet. Recherchiere im Internet den genauen Aufbau und Ablauf der Drehbewegung.
