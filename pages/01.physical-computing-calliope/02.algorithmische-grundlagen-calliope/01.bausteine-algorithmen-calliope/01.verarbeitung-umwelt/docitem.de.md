---
title: 'Verarbeitung von Umwelteingaben'
menu: 'Verarbeitung von Umwelteingaben'
media_order: 'erste-entscheidung1.png,erste-entscheidung2.png,verzweigungen.png,bedingung-mit-schwellwert.png,bedingung-taste-A.png,nachtlicht-flackert.png,knopfprobleme1.png,knopfprobleme2.png,verzweigungsproblem.png,struktogramm-verzweigung.png,mc-erste-entscheidung1.png,mc-erste-entscheidung2.png,mc-erste-entscheidung3.png,mc-bedingung-mit-schwellwert.png,mc-bedingung-taste-A.png,mc-verzweigungen.png,mc-ereignis.png,mc-knopfprobleme1.png,mc-knopfprobleme2.png'
featured_image: struktogramm-verzweigung.png
show_pageimage: true
image_width: 300
image_height: 400
taxonomy:
    Voraussetzungen:
        - 'Kurze Einführung'
    Entwicklungsumgebung:
        - OpenRoberta
    Inhalte:
        - Fallunterscheidungen
        - Sensor
        - Wahrheitswert
    Niveau:
        - Basis
---

<div markdown="1" class="aufgabe">
#### Programmvergleich

Beschreibe, was die folgenden Programme bewirken und vergleiche sie. Probiere es ggf. mit deinem Calliope aus.

<!-- Tabs für die Auswahl -->
<div class="tab-group" data-group="programmierumgebung">
<div class="tabs">
  <button class="tab-button" data-umgebung="makecode">Makecode</button>
  <button class="tab-button" data-umgebung="roberta">Open Roberta Lab</button>
  <button class="tab-button" data-umgebung="python">Python</button>
</div>

<!-- Inhalte für jede Programmierumgebung -->
<div class="tab-content">
  <div class="makecode content-block" markdown="1">
<div markdown="1" class="flex-box">
<div markdown="1"> ![mc-erste-entscheidung1](mc-erste-entscheidung1.png?Lightbox=1024&classes=caption "Programm A.") </div>
<div markdown="1"> ![mc-erste-entscheidung2](mc-erste-entscheidung2.png?Lightbox=1024&classes=caption "Programm B.") </div>
<div markdown="1"> ![mc-erste-entscheidung3](mc-erste-entscheidung3.png?Lightbox=1024&classes=caption "Programm C.") </div>
</div>
  </div>
  <div class="roberta content-block" markdown="1">
<div markdown="1" class="flex-box">
<div markdown="1">![Programm A](erste-entscheidung1.png?Lightbox=1024&classes=caption "Programm A.")</div>
<div markdown="1"> ![Programm B](erste-entscheidung2.png?Lightbox=1024&classes=caption "Programm B.")</div>
</div>
  </div>
  <div class="python content-block" markdown="1">
<div markdown="1" class="flex-box">
<div markdown="1"> 
```python
# Imports go at the top
from calliopemini import *

if button_a.is_pressed():
    display.show(Image.HEART)
else:
    display.clear()    
```
Programm A.
</div>
<div markdown="1"> 
```python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    if button_a.is_pressed():
        display.show(Image.HEART)
    else:
        display.clear()
```
Programm B.
</div>
</div>



  </div>
</div>
</div>



</div>

<details class="details">
<summary class="details__trigger details__title">Zusammenfassung: Verzweigungen</summary>
<div class="details__content" markdown="1">
<div class="notices green" markdown="1">
#### Verzweigungen

Mit Verzweigungen kann man den Calliope je nach Situation anders reagieren lassen. Dazu wird die Ausführung der Anweisungen an eine oder mehrere Bedingungen gekoppelt. Diese Bedingung muss entweder "wahr" oder "falsch" ergeben, um eindeutig zu entscheiden, ob die Anweisungen ausgeführt werden sollen oder nicht.

<!-- Tabs für die Auswahl -->
<div class="tab-group" data-group="programmierumgebung">
<div class="tabs">
  <button class="tab-button" data-umgebung="makecode">Makecode</button>
  <button class="tab-button" data-umgebung="roberta">Open Roberta Lab</button>
  <button class="tab-button" data-umgebung="python">Python</button>
</div>

<!-- Inhalte für jede Programmierumgebung -->
<div class="tab-content">
  <div class="makecode content-block" markdown="1">
![mc-verzweigungen](mc-verzweigungen.png?Lightbox=1024&resize=800&classes=caption "Verschiedene Verzweigungen.")

Als Bedingung eignen sich sechseckige Blöcke. Manche Sensoreingaben, wie zum Beispiel das Drücken einer Taste, kann man direkt als Bedingung verwenden (erkennbar an der sechseckigen Form). Bei anderen Sensorblöcken, die z. B. eine Zahl bereitstellen, erhält man die Bedingung erst durch den Vergleich mit einer anderen Zahl, sodass aus dem Vergleich ein Wahrheitswert (wahr/falsch) entsteht. Die Zahl, die zum Vergleich herangezogen wird, nennt man auch "Schwellwert".

<div markdown="1" class="flex-box">
<div markdown="1">![mc-bedingung-taste-A](mc-bedingung-taste-A.png?classes=caption "Der Sensorblock <Knopf A ist geklickt?> liefert <wahr> oder <falsch> (sechseckige Form) und kann als Bedingung für Verzweigungen verwendet werden.")</div>
<div markdown="1">![mc-bedingung-mit-schwellwert](mc-bedingung-mit-schwellwert.png?classes=caption "Der Vergleich der Lautstärke mit einem Schwellwert liefert <wahr> oder <falsch> und kann als Bedingung für Verzweigungen genutzt werden." )</div>
</div>

**Wichtig:** Die folgenden Blöcke sind keine Verzweigungen, sondern sogenannte **Ereignisse**. 
![mc-ereignis](mc-ereignis.png?resize=700 "mc-ereignis")
Ereignisse unterbrechen das eigentlich ablaufende Programm in der Endlosschleife, wenn das angegebene Ereignis eintritt. Diese Unterbrechung sollte immer *möglichst kurz* sein, weil das Programm sonst bei mehreren Ereignissen zu viel hin- und herspringt und man den Überblick verliert. Insbesondere sind (Endlos-)Schleifen innerhalb eines Ereignisses ein *No-Go*.
  </div>
  <div class="roberta content-block" markdown="1">

![verzweigungen](verzweigungen.png?Lightbox=1024&resize=500&classes=caption "Verschiedene Verzweigungen.")

Als Bedingung eignen sich hellblaue Blöcke. Manche Sensoreingaben, wie zum Beispiel das Drücken einer Taste, kann man auch direkt als Bedingung verwenden (erkennbar an der hellblauen Nase). Bei anderen Sensorblöcken erhält man erst durch den Vergleich mit einer Zahl einen Wahrheitswert (wahr oder falsch). Die Zahl, die zum Vergleich herangezogen wird, nennt man auch *Schwellwert*.

<div markdown="1" class="flex-box">
<div markdown="1">![bedingung-taste-A](bedingung-taste-A.png?classes=caption "Der Sensorblock <Taste A gedrueckt?> liefert <wahr> oder <falsch> (hellblaue Nase) und kann als Bedingung für Verzweigungen verwendet werden.")</div>
<div markdown="1">![bedingung-mit-schwellwert](bedingung-mit-schwellwert.png?classes=caption "Der Vergleich der Lautstärke mit einem Schwellwert liefert <wahr> oder <falsch> und kann als Bedingung für Verzweigungen genutzt werden.")</div>
</div>
  </div>
  <div class="python content-block" markdown="1">

```python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    if button_a.is_pressed():      # die Funktion "is_pressed()" liefert einen Wahrheitswert (wahr/falsch)
        display.scroll('Fall 1')   # wird ausgeführt, falls Knopf A gedrückt wurde
```
Programm A: Einfache Verzweigung

```python
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    if button_a.is_pressed():      # die Funktion "is_pressed()" liefert einen Wahrheitswert (wahr/falsch)
        display.scroll('Fall 1')   # wird ausgeführt, falls Knopf A gedrückt wurde
    else:
        display.clear()            # wird ausgeführt, falls Kopf A *nicht* gedrückt wurde

```
Programm B: Verzweigung mit sonst-Fall

<pre><code class="language-python">
# Imports go at the top
from calliopemini import *

# Code in a 'while True:' loop repeats forever
while True:
    if button_a.is_pressed():      # die Funktion "is_pressed()" liefert einen Wahrheitswert (wahr/falsch)
        display.scroll('Fall 1')   # wird ausgeführt, falls Knopf A gedrückt wurde
    elif (microphone.sound_level() &gt; 125):  # die Funktion "sound_level()" liefert eine Zahl von 0 bis 255
                                            # erst durch den Vergleich dieser Zahl mit 125 wird daraus ein Wahrheitswert (wahr/falsch)
        display.scroll('Fall 2')            # wird ausgeführt, falls Knopf A NICHT gedrückt wurde, aber Knopf B gedrückt wurde
    else:                          
        display.clear()            # wird ausgeführt, falls Knopf A NICHT gedrückt wurde und Knopf B NICHT gedrückt wurde

</code></pre>
Programm C: Verschachtelte Verzweigung

Die Bedingung muss immer wahr oder falsch ergeben. Manche Sensoreingaben, wie zum Beispiel das Drücken einer Taste, kann man über eine Funktion direkt als Bedingung verwenden (z. B. `is_pressed()`). Bei anderen Sensoreingaben, die z. B. eine Zahl bereitstellen (z. B. `sound_level()`), erhält man die Bedingung erst durch den Vergleich mit einer anderen Zahl, sodass aus dem Vergleich ein Wahrheitswert (wahr/falsch) entsteht. Die Zahl, die zum Vergleich herangezogen wird, nennt man auch "Schwellwert".

</div>
</div>




</div>
</div>
</details>

<div markdown="1" class="projekt">
#### Simulation von Informatiksystemen im Alltag

1. Simuliere mit dem Calliope verschiedene Informatiksysteme aus deinem Alltag. Wähle selbst.
2. Notiere jeweils, welche Bauteile auf dem Calliope benötigt werden und sichere das Programm als Screenshot und ggf. als Datei.
3. Diskutiere die Grenzen deiner Programme: Wo bzw. wann treten Probleme auf? Wo ist die Simulation unvollständig oder stößt an Grenzen?


<div class="flex-box">
<div markdown="1" class="example-card">
**Fußgängerampel**

Eine Fußgängerampel wechselt auf Knopfdruck von rot auf grün und nach einiger Zeit zurück auf rot.
</div>
<div markdown="1" class="example-card">
**Straßenlaterne**

Eine Straßenlaterne geht automatisch an, wenn es dunkel ist, und aus, wenn es hell ist.
</div>
<div markdown="1" class="example-card">
**Alarmanlage für das Etui**

Die Alarmanlage gibt ein lautes Piepsen von sich, wenn das Etui geöffnet oder angehoben wird.
</div>
<div markdown="1" class="example-card">
**Temperaturampel**

Die Temperaturampel zeigt an, ob die Temperatur zu kalt, angenehm oder zu warm ist.
</div>
<div markdown="1" class="example-card">
**Lärmampel**

Die Lärmampel zeigt an, ob die Lautstärke angenehm, noch erträglich oder zu laut ist.
</div>
</div>

</div>

<div markdown="1" class="aufgabe">
#### Tasterprobleme

Die folgenden Programme funktionieren nicht richtig, obwohl sie auf den ersten Blick richtig aussehen.

1. Beschreibe das tatsächliche Verhalten des Calliope. Erkläre, wieso er sich so verhält.
2. Mache einen Vorschlag zur Verbesserung des Programms.

<!-- Tabs für die Auswahl -->
<div class="tab-group" data-group="programmierumgebung">
<div class="tabs">
  <button class="tab-button" data-umgebung="makecode">Makecode</button>
  <button class="tab-button" data-umgebung="roberta">Open Roberta Lab</button>
  <button class="tab-button" data-umgebung="python">Python</button>
</div>

<!-- Inhalte für jede Programmierumgebung -->
<div class="tab-content">
  <div class="makecode content-block" markdown="1">
<div markdown="1" class="flex-box">
<div markdown="1">![mc-knopfprobleme1](mc-knopfprobleme1.png?Lightbox=1024&resize=500&classes=caption "Die RGB-LED soll im Normalfall rot anzeigen, aber wenn Taste A gedrückt wird, soll sie grün anzeigen.")</div>
<div markdown="1">![mc-knopfprobleme2](mc-knopfprobleme2.png?Lightbox=1024&resize=500&classes=caption "Die RGB-LED soll im Normalfall rot anzeigen, aber wenn Taste A gedrückt wird, soll sie grün anzeigen.")</div>
</div>
  </div>
  <div class="roberta content-block" markdown="1">
<div markdown="1" class="flex-box">
<div markdown="1">![knopfprobleme1](knopfprobleme1.png?Lightbox=1024&resize=500&classes=caption "Die RGB-LED soll im Normalfall rot anzeigen, aber wenn Taste A gedrückt wird, soll sie grün anzeigen.")</div>
<div markdown="1">![knopfprobleme2](knopfprobleme2.png?Lightbox=1024&resize=500&classes=caption "Die RGB-LED soll zunächst rot anzeigen. Wenn Taste A gedrückt wird, soll sie grün anzeigen. Wenn Taste A noch mal gedrückt wird, soll sie wieder rot anzeigen.")</div>
</div>
  </div>
  <div class="python content-block" markdown="1">
<div markdown="1" class="flex-box">
<div markdown="1">
```python
# Imports go at the top
from calliopemini import *
import neopixel

n = 3
np = neopixel.NeoPixel(pin_RGB, n)

# Code in a 'while True:' loop repeats forever
while True:
    if button_a.is_pressed():      
        np.fill((255,0,0)) # füllt alle Pixel mit der Farbe rot
        np.show()
    np.fill((0,255,0)) # füllt alle Pixel mit der Farbe grün
    np.show()

```
Programm A: Die RGB-LED soll im Normalfall rot anzeigen, aber wenn Taste A gedrückt wird, soll sie grün anzeigen.
</div>
<div markdown="1">
```python
# Imports go at the top
from calliopemini import *
import neopixel

n = 3
np = neopixel.NeoPixel(pin_RGB, n)

np.fill((255,0,0)) # füllt alle Pixel mit der Farbe rot
np.show()

# Code in a 'while True:' loop repeats forever
while True:
    if button_a.is_pressed():      
        np.fill((255,0,0)) # füllt alle Pixel mit der Farbe rot
        np.show()
        
        while button_a.is_pressed() == False:  # solange Knopf A nicht noch mal gedrückt wurde
            pass           # mache nichts

        # Knopf A wurde gedrückt, sonst landet man nicht hier
        np.fill((0,255,0)) # füllt alle Pixel mit der Farbe grün
        np.show()

```
Programm B: Die RGB-LED soll zunächst rot anzeigen. Wenn Taste A gedrückt wird, soll sie grün anzeigen. Wenn Taste A noch mal gedrückt wird, soll sie wieder rot anzeigen.
</div>
</div>


</div>
</div>
</div>

</div>

<div markdown="1" class="aufgabe">
#### Probleme mit der Ampel

Max hat eine Lautstärkeampel gebaut und beschwert sich: "Meine Ampel wird nie rot! Der Mikrofon-Sensor funktioniert nicht!"
Erkläre, worin das Problem wiklich liegt und wie es sich beheben lässt.

<!-- Tabs für die Auswahl -->
<div class="tab-group" data-group="programmierumgebung">
<div class="tabs">
  <button class="tab-button" data-umgebung="makecode">Makecode</button>
  <button class="tab-button" data-umgebung="roberta">Open Roberta Lab</button>
  <button class="tab-button" data-umgebung="python">Python</button>
</div>

<!-- Inhalte für jede Programmierumgebung -->
<div class="tab-content">
  <div class="makecode content-block" markdown="1">

  </div>
  <div class="roberta content-block" markdown="1">
![verzweigungsproblem](verzweigungsproblem.png?Lightbox=1024&resize=500&classes=caption "Programm von Max.")
  </div>
  <div class="python content-block" markdown="1">
<pre><code class="language-python">
# Imports go at the top
from calliopemini import *
import neopixel
n = 3
np = neopixel.NeoPixel(pin_RGB, n)

# Code in a 'while True:' loop repeats forever
while True:
    if microphone.sound_level() &lt; 50:
        np.fill((0,255,0)) # füllt alle Pixel mit der Farbe grün
        np.show()
    elif microphone.sound_level() &gt; 50:
        np.fill((255,255,0)) # füllt alle Pixel mit der Farbe gelb
        np.show()
    elif microphone.sound_level() &gt; 100:
        np.fill((255,0,0)) # füllt alle Pixel mit der Farbe rot
        np.show()
</code></pre>
</div>
</div>

</div>

<div markdown="1" class="aufgabe">
#### Probleme mit dem Nachtlicht

Das folgende Programm soll ein Nachtlicht im Flur dazu bringen, im Dunkeln zu leuchten, während es tagsüber aus ist.

<!-- Tabs für die Auswahl -->
<div class="tab-group" data-group="programmierumgebung">
<div class="tabs">
  <button class="tab-button" data-umgebung="makecode">Makecode</button>
  <button class="tab-button" data-umgebung="roberta">Open Roberta Lab</button>
  <button class="tab-button" data-umgebung="python">Python</button>
</div>

<!-- Inhalte für jede Programmierumgebung -->
<div class="tab-content">
  <div class="makecode content-block" markdown="1">

  </div>
  <div class="roberta content-block" markdown="1">
![nachtlicht-flackert](nachtlicht-flackert.png?Lightbox=1024&resize=500&classes=caption "Programm für ein flackerndes Nachtlicht.")
  </div>
  <div class="python content-block" markdown="1">
<pre><code class="language-python">
# Imports go at the top
from calliopemini import *
import neopixel
n = 3
np = neopixel.NeoPixel(pin_RGB, n)

# Code in a 'while True:' loop repeats forever
while True:
    if microphone.sound_level() &lt; 77:
        np.fill((200,200,0)) # füllt alle Pixel mit der Farbe gelb
        np.show()
    else:
        np.clear()
</code></pre>
</div>
</div>

Leo beobachtet, dass das Nachtlicht in der Dämmerung, wenn es noch nicht richtig dunkel, aber auch nicht mehr hell ist, immer anfängt zu flackern. Es geht also ständig an und wieder aus (siehe Video).

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/Flackerndes-Nachtlicht.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>

1. Erkläre das Flackern des Nachtlichts.
2. Mache einen Vorschlag zur Verbesserung des Programms.

</div>

