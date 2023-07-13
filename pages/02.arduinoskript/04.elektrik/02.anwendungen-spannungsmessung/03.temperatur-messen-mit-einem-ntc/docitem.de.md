---
title: 'Temperatur messen mit einem NTC'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: ntc.jpg
---

<div markdown="1" class="clearfix">
![Ein NTC](ntc.jpg?resize=150&classes=caption,figure-right "Ein NTC.")
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

Führe dazu mithilfe des rechts abgebildeten Ausschnitts [aus einem Datenblatt](https://pdf1.alldatasheet.com/datasheet-pdf/view/509832/EPCOS/G1541.html) eine Regression durch (siehe die [Anleitung zur Regression](../werkzeug-regression-durchfuehren).

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
!!!! <div markdown="1">![Ein NTC](ntc.jpg?resize=150&classes=caption "Ein NTC als Bild.")</div>
!!!! <div markdown="1">![NTC Schaltsymbol](ntc-schaltsymbol.png?resize=200&classes=caption "Schaltsymbol für einen NTC.")</div>
!!!! </div>
!!!! 
!!!! *Anmerkung:*
!!!! 
!!!! Es gibt auch Kaltleiter, kurz: **PTC** (*engl. **p**ositive **t**emperature **c**oefficient*), die ihren Widerstand verringern, wenn es kälter wird, und erhöhen, wenn es wärmer wird. Zusammen genommen bezeichnet man NTC’s und PTC’s auch als **Thermistoren**, also als temperaturabhängige Widerstände (engl. **therm**ally sensitive res**istor**).
