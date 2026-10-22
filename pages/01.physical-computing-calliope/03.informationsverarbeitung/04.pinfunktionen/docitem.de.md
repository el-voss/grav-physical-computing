---
title: 'Pinfunktionen im Überblick'
show_pageimage: true
image_width: 300
image_height: 400
media_order: 'pinfunktionen-analog-read-mc.png,pinfunktionen-analog-read-orl-konf.png,pinfunktionen-analog-read-orl.png,pinfunktionen-analog-read.png,pinfunktionen-analog-write-mc.png,pinfunktionen-analog-write-orl-konf.png,pinfunktionen-analog-write-orl.png,pinfunktionen-digital-read-mc.png,pinfunktionen-digital-read-orl-konf.png,pinfunktionen-digital-read-orl.png,pinfunktionen-digital-read.png,pinfunktionen-digital-write-mc.png,pinfunktionen-digital-write-orl-konf.png,pinfunktionen-digital-write-orl.png,pinfunktionen-digital-write.png'
---

Über die Pinleiste des Calliope können viele Sensoren und Aktoren angeschlossen, die auf die vier Funktionen eines GPIO-Pins zurückgreifen. *GPIO* steht für *general purpose input/output*, was schon verdeutlicht, dass diese Pins sowohl als Eingang bzw. Sensor (zum Messen von Signalen) als auch als Ausgang bzw. Aktor (zum Schalten von Signalen) genutzt werden können.Für beide Nutzungsarten gibt es eine digitale und eine (quasi) analoge Variante, die im Folgenden kurz vorgestellt und beschrieben werden.

Für die folgenden Beispiele wird dabei stets der Pin P0 gewählt. Aber auch die weiteren Pins verfügen in der Regel über die gleichen Funktionen. Zu beachten ist, dass einige Pins doppelt genutzt werden und daher vielleicht schon an anderer Stelle belegt sind. Eine Übersicht über alle Pins und deren Funktionen findet sich in der [Dokumentation zu den Pins des Calliope v3](https://docs.calliope.cc/tech/hardware/pins/?target="_blank").

# Der Pin als Digitaler Aktor

