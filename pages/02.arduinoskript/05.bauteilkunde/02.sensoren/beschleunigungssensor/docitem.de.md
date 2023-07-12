---
title: 'Beschleunigungssensor oder Lagesensor'
show_pageimage: true
image_width: 300
image_height: 300
---

Beschleunigungssensoren oder Lagesensoren tauchen in zig verschiedenen Geräten auf:
- In Autos messen sie die Beschleunigung und regeln das Auslösen der AirBags, 
- in Digitalkameras dienen sie zur Bildstabilisierung, 
- in Tablets und Smartphones lösen sie das Drehen des Bildschirms aus, wenn das Gerät gedreht wurde, 
- oder sie dienen zum Steuern eines Spiels auf dem Smartphone. 

Auch mit dem Arduino lassen sich interessante Dinge mit Beschleunigungssensoren bauen. Verwendet wird hier das Modul GY-61, auf dem der Beschleunigungssensor ADXL335 verbaut ist. Da der ADXL335 mit einem Pegel von 3V arbeitet, befindet sich auf der kleinen Platine zusätzlich ein Spannungsregler, der die 5V vom Arduino auf 3V für den ADXL335 herunterregelt. Zusätzlich ist ein kleines Koordinatensystem auf der Platine gezeichnet, das angibt, in welchen Richtungen die Beschleunigung gemessen wird. Die z-Achse verläuft dabei senkrecht zur Platine nach unten, wenn man auf das Koordinatensystem schaut. Dies ist erkennbar an dem Kreis mit einem Kreuz darin - als Eselsbrücke kann man sich einen Dartpfeil vorstellen, dessen gekreuzte Federn man von hinten sieht, wenn er von einem weg zeigt.

<div class="flex-box">
<div markdown="1">![Modul GY61 mit dem Beschleunigungssensor ADXL335 von oben.](beschleunigungssensor-gy61-oben.jpg?resize=300&classes=caption "Modul GY61 mit dem Beschleunigungssensor ADXL335 von oben.")</div>
<div markdown="1">![Modul GY61 mit dem Beschleunigungssensor ADXL335 von unten.](beschleunigungssensor-gy61-unten.jpg?resize=300&classes=caption "Modul GY61 mit dem Beschleunigungssensor ADXL335 von unten.")</div>
</div>

Der ADXL335 gibt für die Beschleunigungen $a_x$ in x-Richtung, $a_y$ in y-Richtung und $a_z$ in z-Richtung jeweils eine Spannung aus, die [laut Datenblatt des ADXL335 (S. 10)](https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL335.pdf) proportional zur Beschleunigung ist. Am Arduino kann diese Spannung über die analogen Eingänge A0 bis A5 gemessen werden. Wenn die Schaltung wie im folgenden Schaltplan erfolgt, dann müssen im Open Roberta Lab drei analoge Sensoren für A0, A1 und A2 angelegt werden, deren Werte als Analogwerte ausgelesen werden.

<div class="flex-box">
<div markdown="1">![Schaltplan zum Beschleunigungsmodul GY-61 am Arduino.](beschleunigungssensor-am-arduino.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum Beschleunigungsmodul am Arduino.")</div>
<div markdown="1">![konfiguration-beschleunigungssensor](konfiguration-beschleunigungssensor.png?resize=300&classes=caption "Konfiguration des Beschleunigungssensor entsprechend des links abgebildeten Schaltplans.")</div>
</div>

<div markdown="1" class="aufgabe">
#### Erste Experimente mit dem Beschleunigungssensor

1. Schließe den Beschleunigungssensor wie oben beschrieben am Arduino an, konfiguriere drei analoge Sensoren im Open Roberta Lab für die drei Beschleunigungen und lasse deren analogen Werte auf dem seriellen Monitor ausgeben. Beobachte die Werte, während du die Platine auf unterschiedliche Arten beschleunigst (Anheben, Schütteln, Drehen, ...).
2. Die Abbildung unten zeigt die Analogwerte, während sich der Beschleunigungssensor in Ruhe befindet. Begründe, warum der Analogwert für die Beschleunigung in z-Richtung größer als die anderen beiden ist.

![Analogwerte für die Beschleunigung in x-, y- und z-Richtung bei ruhendem Beschleunigungssensor.](analogwerte-ruhend.png?lightbox=1024&resize=500&classes=caption "Analogwerte für die Beschleunigung in x-, y- und z-Richtung bei ruhendem Beschleunigungssensor.")

3. Die drei Spannungen und damit die Analogwerte, die in A0, A1 und A2 gemessen werden, sind proportional zur Beschleunigung. Ermittle mit Hilfe der Beobachtung aus Schritt 2 einen funktionalen Zusammenhang $a_z(w)$ für die Berechnung der Beschleunigung $a_z$ in Abhängigkeit vom Analogwert $w$. Ermittle auch eine Formel für $a_x$ und $a_y$. 
</div>

<div markdown="1" class="aufgabe">
#### Mathematischer Exkurs: Berechnung der Gesamtbeschleunigung

Nach Abzug der Analogwerte, die für die Beschleunigung 0 stehen, erhält man drei Analogwerte für die Beschleunigung in x-Richtung, y- Richtung und z-Richtung. Diese lassen sich mathematisch als dreidimensionaler Vektor auffassen, dessen Betrag bzw. Länge berechnet werden kann, um (einen Analogwert für) die Gesamtbeschleunigung zu erhalten.

1. Leite die Formel zur Berechnung der Länge eines dreidimensionalen Vektors anhand der folgenden Skizze her oder recherchiere sie. Ermittle damit eine Formel für einen Analogwert für die Gesamtbeschleunigung.
![Skizze für die Herleitung der Formel für die Länge des Beschleunigungsvektors.](beschleunigungsvektor.png?lightbox=1024&resize=800&classes=caption "Skizze für die Herleitung der Formel für die Länge des Beschleunigungsvektors. In blau sind die Komponenten ax, ay und az des Beschleunigungsvektors eingetragen. Die gesuchte Länge ist die rot markierte Diagonale. Die Bestimmung der Länge der orange markierten Diagonale wird hilfreich sein.")
2. Ermittle mit den Formeln für die Beschleunigungen $a_x$, $a_y$ und $a_z$ (aus Schritt 3 der vorherigen Aufgabe) eine Formel für die Gesamtbeschleunigung.  
</div>

<div markdown="1" class="projekt">
#### Musikbox für Kinder

Entwickle eine Musikbox für Kinder mit einem einfachen Bedienkonzept: Um das nächste Lied abspielen zu lassen, muss man sie schütteln.

*Vorlage:* Du kannst das folgende Programm herunterladen und im Open Roberta Lab importieren, um es als Vorlage zu nutzen: <a href="/p-templates/beschleunigungssensor-vorlage.xml" download><i class="fa fa-download" aria-hidden="true"></i> beschleunigungssensor-vorlage.xml</a>. Du findest darin eine Funktion "gibBeschleunigung", die die Gesamtbeschleunigung (vgl. mathematischen Exkurs oben) für dich berechnet.

*Mögliche große Erweiterung:* Nutze eine RFID-Karte als CD. Je nachdem, welche RFID-Karte erkannt wird, werden andere Lieder abgespielt. *Diese Idee wird auch beim [Tonuino-Projekt](https://www.voss.earth/tonuino/) genutzt!*
</div>

<div markdown="1" class="projekt">
#### Schrittzähler

Entwickle einen Schrittzähler!

*Hinweise und Tipps:*
- Wenn du an einem Laptop arbeitest, kannst du den Arduino und das Steckbrett auf dem Laptop platzieren, während du durch die Gegend läufst und auf dem seriellen Monitor Werte sammelst.
- Überlege, welche der drei Beschleunigungen $a_x$, $a_y$ und $a_z$ am aussagekräftigsten ist. Konzentriere dich auf diese Beschleunigung.
- Ein Kriterium für einen Schritt lässt sich am besten anhand eines grafischen Verlaufs der Werte finden. Um diesen zu erhalten, gehe folgendermaßen vor:
   - Sende die Beschleunigungswerte an den seriellen Monitor.
   - Um die Messung zu beenden, ziehe das USB-Kabel vom Arduino heraus.
   - Kopiere die Werte aus dem seriellen Monitor in eine neue Textdatei, z. B. "schritte.csv".
   - Ggf. müssen aus den Punkten noch Kommata gemacht werden. Nutze dafür die Funktion "Suchen und Ersetzen". Unter Windows und Linux lässt sich dies mit der Tastenkombination Strg + F starten.
   - Öffne eine Tabellenkalkulation und darin den Reiter "Daten". Importiere die Textdatei.
   - Erzeuge aus den Daten ein Diagramm, z. B. ein Liniendiagramm.
</div>
