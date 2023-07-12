---
title: 'Temperatur- und Luftfeuchtigkeitssensor DHT-11'
show_pageimage: true
image_width: 300
image_height: 300
featured_image: dht11.jpg
---

<div markdown="1" class="clearfix">
![DHT-11](dht11.jpg?resize=250&classes=caption,figure-right "DHT-11.")
Bei vielen Umweltmessungen interessiert nicht nur die Temperatur, sondern auch die Luftfeuchtigkeit. Der Sensor DHT-11 ist ein einfaches, kleines Bauteil, mit dem sich beides messen lässt.
</div>

Der DHT-11 verfügt über drei Pins - 5V und GND dienen der Stromversorgung, während das Signal zu den Messdaten über den Signalpin ausgegeben wird. Für die Temperaturmessung ist auf dem DHT-11 ein NTC verbaut.

![Schaltplan zum DHT-11 am Arduino.](Schaltplan-DHT11.png?lightbox=1024&resize=500&classes=caption "Schaltplan zum DHT-11 am Arduino.")

Das Auslesen des Signalpins ist einfach, weil der DHT-11 in der Konfiguration bereits implementiert wurde, sodass man nur noch den Signalpin angeben muss. Das Signal wird dann automatisch analysiert und decodiert, um anhand der entsprechenden Befehle auf die übermittelte Temperatur bzw. Luftfeuchtigkeit zuzugreifen. Die Größe kann über das Drop-Down-Menü ausgewählt werden.

![Temperatur auslesen](dht-gibTemperatur.png)
![Luftfeuchtigkeit auslesen](dht-gibLuftfeuchtigkeit.png)

<div markdown="1" class="projekt">
#### Wetterstation
Baue eine kleine Wetterstation, die alle zehn Minuten Temperatur und Luftfeuchtigkeit misst und auf dem seriellen Monitor ausgibt.
</div>

! **Recherche: Wie wird die Luftfeuchtigkeit gemessen?**
! Mit dem DHT-11 lässt sich die relative Luftfeuchtigkeit bestimmen. Recherchiere, was darunter zu verstehen ist, und wie diese durch ein elektrisches Bauteil gemessen wird.