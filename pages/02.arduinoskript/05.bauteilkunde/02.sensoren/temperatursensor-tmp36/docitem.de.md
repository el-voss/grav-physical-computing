---
title: 'Temperatursensor TMP36'
show_pageimage: true
image_width: 300
image_height: 300
featured_image: tmp36.jpg
---

Bei deinen Temperaturmessungen mit einem NTC oder dem DHT-11 (in dem auch ein NTC verbaut ist), hast du vielleicht festgestellt, dass die Bauteile nicht besonders genau arbeiten. Für professionellere Anwendungen benötigt man eine wesentlich höhere Genauigkeit. Hier kann der TMP36 helfen: Er hat eine Genauigkeit von $\pm 1 \, °C$ und kann Temperaturen in einem Bereich von $-40 \, °C$ bis $125 \, °C$ zuverlässig messen. Die Messung der Temperatur erfolgt über die Messung einer temperaturabhängigen Spannung. Bei $0 \, °C$ beträgt die Spannung $500 \, mV$ (ein sogenannter *Offset*).

<div class="flex-box">
<div markdown="1"> ![Temperatursensor TMP36.](tmp36.jpg?resize=200&classes=caption "Temperatursensor TMP36.")
</div>
<div markdown="1"> ![Pinbelegung des TMP35 (Blick auf die flache Seite).](tmp36-pinbelegung.png?resize=200&classes=caption "Pinbelegung des TMP36 (Blick auf die flache Seite).")</div>
</div>

!! **Achtung:** Es besteht Verwechslungsgefahr mit dem Transistor! Achte daher genau auf die Aufschrift!

Ein weiterer Vorteil des TMP36 ist, dass die Abhängigkeit von ausgegebener Spannung und Temperatur linear verläuft: Eine Temperaturänderung von $1 \, °C$ entspricht immer einer Spannungsänderung von $10 \, mV$.

<div markdown="1" class="aufgabe">
#### Vergleich von Kennlinien

Ein linearer Zusammenhang zwischen der gemessenen Größe (oft eine Spannung) und der gesuchten Größe (hier die Temperatur) gilt als vorteilhaft, ein exponentieller Zusammenhang dagegen als nachteilig. Begründe anhand der unten abgebildeten Skizzen von Kennlinien, warum ein linearer Zusammenhang besser ist.

*Beachte: Jede Messung ist mit einem Fehler versehen!*
<div class="flex-box">
<div markdown="1">![Lineare Kennlinie](u-t-lineare-kennlinie.png?classes=caption "Lineare Kennlinie.")</div>
<div markdown="1">![Exponentielle Kennlinie](u-t-exponentielle-kennlinie.png?classes=caption "Exponentielle Kennlinie.")</div>
</div>
</div>

<div markdown="1" class="projekt">
#### Präzises Thermometer

1.  Baue ein präzises Thermometer mit den vorkonfigurierten Nepo-Blöcken für den TMP36.
2.  Baue ein präzises Thermometer und konfiguriere den TMP36 als analogen Sensor.
    
    *Tipp:* Zur Berechnung der Temperatur musst du zuerst den eingelesenen Analogwert in eine Spannung umrechnen. Um aus der Spannung die Temperatur zu berechnen, musst du die oben angegebenen Informationen noch einmal genau lesen. Zur Kontrolle: Die maximal mögliche Spannung am Signalpin beträgt $2 \, V$, was einer Temperatur von $150 \, °C$ entspricht.
</div>