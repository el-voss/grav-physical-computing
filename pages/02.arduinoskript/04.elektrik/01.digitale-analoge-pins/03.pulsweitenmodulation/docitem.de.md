---
title: Pulsweitenmodulation
show_pageimage: true
image_width: 300
image_height: 400
featured_image: pwm-info.png
---

**Ziel:** Mithilfe des Arduino soll eine funkelnde LED-Kerze gebaut werden.

Der Arduino verfügt über mehrere sogenannte PWM-Pins, die mit einer Tilde ($\sim$) gekennzeichnet sind. Du hast diese Pins schon bei den analogen Aktoren kennen gelernt, weil diese über Pulsweitenmodulation(PWM) angesprochen werden. Die PWM-Werte, die der Anweisung übergeben werden können, variieren von 0 bis 255.
<center markdown="1">![](analogwrite.png)</center>

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
!!!! ![t-U-Diagramm zur PWM](pwm-info.png?lightbox=1024&resize=500&classes=caption "Darstellung des zeitlichen Verlaufs einer Pulsweitenmodulation mit einem Tastverhältnis von 25%.")
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
