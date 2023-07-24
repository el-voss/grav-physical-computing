---
title: 'Basisversion mit Motoren und Piezo-Summer'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: Anleitung17.jpg
taxonomy:
    Mindestvoraussetzungen:
        - 'Elektromotoren mit einem Motortreiber steuern'
        - 'Entscheidungen mit mehreren Kriterien'
        - Funktionen
        - Pulsweitenmodulation
    Inhalte:
        - Montage
        - Getriebemotoren
        - 'Motortreiber L298N'
        - Piezo-Summer
        - 'Funktionen zum Fahren'
        - Hebelsteuerung
    Niveau:
        - Fortgeschritten
---

**Ziel:** Es soll eine fahrbare Basisversion des Düvelbot gebaut und programmiert werden, sodass der Düvelbot vorwärts und rückwärts fahren, stoppen und lenken kann. Zudem soll er Töne abspielen können.
 
### Montage

<div class="aufgabe" markdown="1">
#### Montage und Verkabelung

Befolge die folgende Anleitung zur Montage und Verkabelung, um die Basisversion des Düvelbots aufzubauen.
</div>

<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung01](Anleitung01.jpg?lightbox=1024&resize=400 "Anleitung01")  </div>
<div markdown="1"> **Schritt 1:** Führe die Kabel eines Motors durch die Motorhalterung in das Gehäuse.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung02](Anleitung02.jpg?lightbox=1024&resize=400 "Anleitung02")  </div>
<div markdown="1"> **Schritt 2:** Drücke den Motor in seine Halterung. Die Lasche kann vorsichtig nach unten gedrückt werden, bis die äußere goldene Platte des Getriebes fest in der Lasche sitzt.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung03](Anleitung03.jpg?lightbox=1024&resize=400 "Anleitung03")  </div>
<div markdown="1"> **Schritt 3:** Verfahre mit dem Motor auf der anderen Seite genauso.  </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung04](Anleitung04.jpg?lightbox=1024&resize=400 "Anleitung04")  </div>
<div markdown="1"> **Schritt 4:** Stecke die Kabel des linken Motors in die linke Schraubklemme des Motortreibers L298N und schraube sie fest. Verfahre genauso auf der rechten Seite </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung05](Anleitung05.jpg?lightbox=1024&resize=400 "Anleitung05") </div>
<div markdown="1"> **Schritt 5:** Stecke die Kabel des Clips mit offenen Kontakten in der Schraubklemme für die Spannungsversorgung am Motortreiber L298N. In der mittleren Schraubklemme muss ein zweites schwarzes Kabel (male-male) ergänzt werden, mit dem ein gemeinsames GND-Potential mit dem Arduino hergestellt wird. Teste durch vorsichtiges Ziehen an den Kabeln, ob sie fest verschraubt sind.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung06](Anleitung06.jpg?lightbox=1024&resize=400 "Anleitung06")  </div>
<div markdown="1"> **Schritt 6:** Platziere den Motortreiber im Gehäuse, ohne die Kabel zu stark zu knicken.  </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung07](Anleitung07.jpg?lightbox=1024&resize=400 "Anleitung07")  </div>
<div markdown="1"> **Schritt 7:** Suche die Räder und den Slider heraus und schiebe sie an ihre Position. Beachte die Kerbe an der Radnabe, die genau auf die Kerbe am Motorschaft passt. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung08](Anleitung08.jpg?lightbox=1024&resize=400 "Anleitung08")  </div>
<div markdown="1"> **Schritt 8:** Achte darauf, dass beide Räder gleich weit auf dem Motorschaft sitzen, sodass sie genau symmetrisch sind. Die Räder dürfen nicht am Gehäuse schleifen.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung09a Jumper entfernen](Anleitung09a-jumper-entfernen.png?lightbox=1024&resize=400 "Anleitung09a Jumper entfernen") </div>
<div markdown="1"> **Schritt 9a:** Entferne die Jumper für die Enable-Pins auf dem Motortreiber und verstaue sie so, dass sie nicht verloren gehen.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung09](Anleitung09.jpg?lightbox=1024&resize=400 "Anleitung09") </div>
<div markdown="1"> **Schritt 9b:** Stecke danach sechs Kabel auf die Pins En1/2, In1, In2, In3, In4 und En3/4. Eine genaue Beschriftung und Erklärung der Pins folgt im nächsten Abschnitt zum Schaltplan. Verwende für jeden Pin eine andere Farbe. Notiere dir, welche Farbe zu welchem Pin gehört.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung10](Anleitung10.jpg?lightbox=1024&resize=400 "Anleitung10")  </div>
<div markdown="1"> **Schritt 10:** Führe die Kabel durch die dafür vorgesehenen Öffnungen an den Seiten. In der Regel passen zwei Kabel gut durch das gleiche Loch (nacheinander). </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung11](Anleitung11.jpg?lightbox=1024&resize=400 "Anleitung11")  </div>
<div markdown="1">**Schritt 11:** Bereite den Piezo-Summer vor, indem du zwei Jumper-Kabel anbringst. Beachte das Plus-Symbol auf der oberen Seite - der Pin unter dem Plus muss mit dem Digitalpin am Arduino verbunden werden. Der andere Pin wird mit GND am Arduino verbunden. Am besten verwendest du hier wieder ein schwarzes Kabel für alle GND-Kontakte. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung12](Anleitung12.jpg?lightbox=1024&resize=400 "Anleitung12")  </div>
<div markdown="1">**Schritt 12:** Platziere den Piezo-Summer zwischen den beiden Motoren und führe die Kabel durch die Öffnungen an der Seite. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung13](Anleitung13.jpg?lightbox=1024&resize=400 "Anleitung13")  </div>
<div markdown="1"> **Schritt 13:** Stecke das Expansion-Board auf den Arduino. Achte darauf, dass die Pinleisten genau übereinander liegen und nicht gegeneinander versetzt sind.</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung14](Anleitung14.jpg?lightbox=1024&resize=400 "Anleitung14")  </div>
<div markdown="1"> **Schritt 14:** Verkabele die Kabel der Bauteile entsprechend des Schaltplans mit dem Arduino (siehe [nächsten Abschnitt unten](#schaltplan)). Nutze die GND-Leiste auf dem Expansion-Board (schwarze Kabel im Bild).</div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung15](Anleitung15.jpg?lightbox=1024&resize=400 "Anleitung15")  </div>
<div markdown="1"> **Schritt 15:** Schiebe den Arduino vollständig in das Gehäuse. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung16](Anleitung16.jpg?lightbox=1024&resize=400 "Anleitung16")  </div>
<div markdown="1"> **Schritt 16:** Hake die Seitenhänger in die Öffnungen an der Seite und platziere die zwei 9V-Blöcke darin. Stecke den Clip mit Zylinderanschluss auf einen der 9V-Blöcke. </div>
</div>
<div class="flex-box" style="align-items: center;">
<div markdown="1"> ![Anleitung17](Anleitung17.jpg?lightbox=1024&resize=400 "Anleitung17")  </div>
<div markdown="1"> **Schritt 17:** Wenn der Roboter starten soll, werden beide 9V-Blöcke angeschlossen. Wenn der Roboter programmiert werden soll, werden die 9V-Blöcke abgeklemmt und stattdessen ein USB-Kabel an den Arduino angeschlossen.</div>
</div>

### Schaltplan

Die Verkabelung erfolgt nach dem folgendem Schaltplan.

![Schaltplan für die Motoren und den Piezo-Summer](2_duevelbot-motoren_und_piezo-summer.png?lightbox=1024&resize=800&classes=caption "Schaltplan für die Motoren und den Piezo-Summer.")

### Konfiguration und Programmierung

<div markdown="1" class="aufgabe">
#### Erster Test: Töne abspielen

Konfiguriere den Piezo-Summer im Open Roberta Lab und lass den Düvelbot ein paar erste Lebenszeichen spielen!
</div>

<div markdown="1" class="aufgabe">
#### Funktionsweise des Motortreibers

Der Motortreiber L298N enthält eine H-Brücke, um die Motoren zu steuern. Um dies im Programm nutzen zu können, muss man die Funktionsweise der H-Brücke verstehen. Bearbeite dazu die folgenden Aufgaben aus dem Abschnitt *Elektrische Grundlagen - Transistoren und Motoren*.

- **[Funktionsweise einer H-Brücke](/arduinoskript/elektrik/transistoren-motoren/elektromotoren-mit-einem-motortreiber-steuern#funktionsweise-einer-h-brücke):** Lies den Abschnitt und bearbeite die Aufgabe dazu.
- **[Steuerung mit dem L298N](/arduinoskript/elektrik/transistoren-motoren/elektromotoren-mit-einem-motortreiber-steuern#steuerung-mit-dem-l298n):** Lies den Abschnitt und bearbeite die erste Aufgabe *Betrieb des L298N*. Übertrage dies, um auch den zweiten Motor anzusteuern.

Ergänze damit die folgende Tabelle:

<div markdown="1" style="overflow:auto;">
| In1 | In 2 | En1,2 | In3 | In4 | En3,4 | Wirkung |
| :-: | :--: | :---: | :----:| :----: | :----: | :-----: |
|    |     |   |     |     |    |    vorwärts fahren   |
|    |     |   |     |     |    |    stoppen   |
|    |     |   |     |     |    |    rückwärts fahren   |
|    |     |   |     |     |    |    links vorwärts fahren, rechts stoppen   |
|    |     |   |     |     |    |    links stoppen, rechts vorwärts fahren   |
|    |     |   |     |     |    |    links vorwärts, rechts rückwärts fahren   |
|    |     |   |     |     |    |    links rückwärts, rechts vorwärts fahren   |
</div>
</div>

<div markdown="1" class="aufgabe">
#### Funktionen zum Steuern

In der Aufgabe [Einfachere Steuerung mit Funktionen](/arduinoskript/elektrik/transistoren-motoren/elektromotoren-mit-einem-motortreiber-steuern#einfachere-steuerung-mit-funktionen) siehst du, wie man die Steuerung von einem Motor in eine Funktion auslagern kann. Passe dies an, um die folgenden Funktionen zu implementieren.

<div class="flex-box">
<div markdown="1"> ![fkt-vorwaertsFahren](fkt-vorwaertsFahren.png?resize=300 "fkt-vorwaertsFahren") </div>
<div markdown="1">`vorwaertsFahren ( leistung )`: Lässt den Düvelbot mit der angegebenen Leistung zwischen 0 und 255 vorwärts fahren.</div>
</div>
<div class="flex-box">
<div markdown="1"> ![fkt-stoppe](fkt-stoppe.png?resize=300 "fkt-stoppe")</div>
<div markdown="1">`stoppe`: Lässt den Düvelbot stoppen.</div>
</div>
<div class="flex-box">
<div markdown="1"> ![fkt-rueckwaertsFahren](fkt-rueckwaertsFahren.png?resize=300 "fkt-rueckwaertsFahren")</div>
<div markdown="1"> `rueckwaertsFahren ( leistung )`: Lässt den Düvelbot mit der angegebenen Leistung zwischen 0 und 255 rückwärts fahren.</div>
</div>
<div class="flex-box">
<div markdown="1"> ![fkt-fahreVorwaertsKurve](fkt-fahreVorwaertsKurve.png?resize=300 "fkt-fahreVorwaertsKurve")</div>
<div markdown="1">`fahreVorwaertsKurve ( leistungLinks, leistungRechts )`: Lässt den Düvelbot eine Vorwärtskurve fahren, wobei der Motor links mit der Leistung `leistungLinks` und der Motor rechts mit der Leistung `leistungRechts` gedreht wird (Leistungswerte zwischen 0 und 255).</div>
</div>

*Für Experten:* Passe die Funktionen so an, dass die Leistung in Prozent angegeben wird. Wenn die Leistung also 100 beträgt, dreht sich der Motor mit voller Leistung, wenn die Leistung 0 beträgt, dreht sich der Motor nicht.
</div>

<div markdown="1" class="aufgabe">
#### Hebelsteuerung

![fkt-fahre](fkt-fahre.png?resize=300 "fkt-fahre")
![prog-fahre-start](prog-fahre-start.png?lightbox=1024&resize=700&classes=caption "Möglicher Beginn der fahre-Funktion. Es werden mehrere Fallunterscheidungen benötigt. Der grüne Block ist ein Kommentar aus der Kategorie Text, der nur der eigenen Übersicht dient.") 

1. Implementiere die Funktion `fahre ( leistungLinks, leistungRechts )`. Die Werte für `leistungLinks` und `leistungRechts` können jeweils zwischen -255 und 255 liegen, wobei "-255" eine Drehung des jeweiligen Motors mit voller Leistung nach hinten und "255" eine Drehung des jeweiligen Motors mit voller Leistung nach vorne bedeutet. Achtung: Die Werte für die Enable-Pins müssen immer zwischen 0 und 255 liegen!
2. Passe die Funktion so an, dass die Werte für `leistungLinks` und `leistungRechts` jeweils zwischen -100 und 100 liegen können, wobei "-100" eine Drehung des jeweiligen Motors mit 100%iger Leistung nach hinten und "100" eine Drehung des jeweiligen Motors mit 100%iger Leistung nach vorne bedeutet.
3. Erkläre, wie man mit dieser Funktion die Wirkung von jeder der vorher programmierten Funktionen erreichen kann.
4. Erkläre, wie man den Düvelbot mit dieser Funktion auf der Stelle drehen lassen kann.

</div>
