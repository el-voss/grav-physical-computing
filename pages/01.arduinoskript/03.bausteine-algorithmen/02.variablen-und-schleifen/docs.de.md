---
title: 'Variablen und Schleifen'
---

# Bauteilkunde Teil 2: Variablen und Schleifen

<style>
    body {
        --abk: 'BA-V';
    }
</style>

[TOC]

## Programme mit Variablen und Schleifen effizient steuern

<div markdown="1" class="aufgabe">
#### Programmvergleich

a) Jana und Jonas haben jeweils LEDs an den Arduino angeschlossen und steuern diese mit den unten abgebildeten Programmen. Vergleiche die beiden Programme im Hinblick auf ihre Wirkung und die Art der Programmierung. Welches gefällt dir besser?
b) Zusatzüberlegung: Wie viel muss man ändern, wenn man die Leuchtdauer ändern will?

<div markdown="1" class="flex-box">
<div markdown="1">![Janas Programm zum Steuern der LEDs.](/images/lauflicht-ohne-variable.png?Lightbox=1024&classes=caption "Janas Programm zum Steuern der LEDs.")</div>
<div markdown="1"> ![Jonas Programm zum Steuern der LEDs.](/images/lauflicht-mit-variable.png?Lightbox=1024&classes=caption "Jonas Programm zum Steuern der LEDs.")</div>
</div>
</div>

<div markdown="1" class="notices green clearfix">
![Variable als Zeiger auf einen Speicherplatz](/images/variable-speicher.png?resize=300&classes=caption,figure-right "Variable zeigt auf Speicherplatz mit Wert.")
#### Variablen
<p>Eine Variable kann man sich als Koffer vorstellen, der einen Namen bekommt und in dem man einen festgelegten Datentyp speichert. Jedes Mal, wenn der Name des Koffers aufgerufen wird, wird der abgespeicherte Wert hervorgeholt und an die Stelle des Namens gesetzt. Intern wird der Variablenname als Verweis auf einen bestimmten Speicherplatz genutzt, in dem der Wert der Variable abgelegt ist.</p>
<p>Für den Namen hat sich der <a href="https://de.wikipedia.org/wiki/Binnenmajuskel#Programmiersprachen">lowerCamelCase</a> etabliert: Der erste Buchstabe ist klein; wenn weitere Wörter folgen, fangen diese mit einem großen Buchstaben an. Leerzeichen sind nicht erlaubt.</p>
</div>

### Zufällige Ereignisse und Wiederholungen programmieren

Viele Dinge werden interessanter, wenn sie sich nicht immer auf die genau gleiche Art wiederholen. Für diese Fälle kann man im Programm den blauen Block für Zufallszahlen verwenden (Expertenblöcke aktivieren!), der jedes Mal eine neue Zufallszahl erzeugt, wenn er aufgerufen wird.
![Block für Zufallszahlen](/images/zufallszahl.png)
Ein einfaches Beispiel ist die “Bombe”, die man bei dem Spiel “Tick Tack Bumm” startet und die man so lange herum geben muss, bis sie explodiert. Dabei ist die Dauer des Tickens ein zufälliger Wert zwischen ca. 5s und 20s.

<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/bombe.mp4" type="video/mp4"></source>
<source src="/user/pages/images/bombe.webm" type="video/webm"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>

<div markdown="1" class="projekt clearfix">
#### Bombe bauen

![Wiederholschleife](/images/wdh10mal.png?classes=figure-right,caption "Wiederholschleife.")

Baue und programmiere eine “Bombe”, die für eine zufällige Dauer zwischen 5s und 20s tickt und dann explodiert. Die Bombe wird über einen Taster aktiviert.

Zusatz: Welchen Unterschied macht es, wenn man die ausgewürfelte Zufallszahl in einer Variable speichert?
</div>

<div markdown="1" class="aufgabe">
#### Exkurs: Zufallszahlen von Mikrocontrollern/Mikroprozessoren

Übertrage das unten abgebildete Programm auf den Arduino und betrachte die so erzeugten Zufallszahlen. Drücke dann auf den Reset-Taster am Arduino und betrachte die nun erzeugten Zufallszahlen. Wiederhole den Vorgang einige Male und beschreibe Auffälligkeiten.

![Zufallszahlengenerator](/images/zufallszahlengenerator.png)
</div>

<div markdown="1" class="projekt">
#### Reaktionszeitmesser

Baue und programmiere einen Reaktionszeitmesser.

<div markdown="1" class="flex-box">
<div markdown="1">![Stoppuhr-Block 1](/images/stoppuhr2.png)</div>
<div markdown="1">![Stoppuhr-Block 2](/images/stoppuhr.png)</div>
</div>

Der Reaktionszeitmesser soll zunächst warten, bis ein Taster gedrückt wurde, der besagt, dass es losgehen kann. Dann wird eine LED angeschaltet (Vorwiderstand!) und nach einer zufälligen Zeit wieder ausgeschaltet. Nun beginnt die Zeitmessung. Die Stoppuhr läuft solange, bis der Taster gedrückt wurde. Die gemessene Zeit wird dann über den seriellen Monitor ausgegeben und es wird erneut gewartet, bis der Anwender bestätigt, dass es losgehen kann.

Miss mindestens zehn Mal deine Reaktionszeit und bestimme den Mittelwert. Bist du besser als dein Partner?

*Idee: Frick, Fritsch und Trick (2015): Einführung in Mikrocontroller - Der Arduino als Steuerzentrale, Bad Saulgau*
</div>


### Wiederholungen mit Bedingungen steuern

In vielen Fällen geht es bei Schleifen nicht um eine genau oder zufällig bestimmte Anzahl von Wiederholungen, sondern darum, einen Vorgang zu wiederholen, bis eine Bedingung wahr ergibt, bzw. solange, wie eine Bedingung wahr ergibt. Die Bedingung, die wahr oder falsch ergibt, kann auch Sensorwerte beinhalten.

<div class="projekt" markdown="1">
#### Alarmanlage

Baue und programiere eine Alarmanlage, die wie folgt funktioniert: Wenn über einen Bewegungsmelder eine Bewegung registriert wird, dann geht die Alarmanlage los (Blinken und / oder Piepsen). Die Alarmanlage bleibt so lange aktiv, bis ein Taster gedrückt wurde, um sie wieder auszustellen.
</div>

<div class="projekt clearfix" markdown="1">
#### Konfigurierbares Reaktionsspiel

Baue und programmiere ein konfigurierbares Reaktionsspiel!

![Ausgaben des Spiels auf dem seriellen Monitor](/images/reaktionsspiel-serial-monitor.png?resize=250&classes=caption,figure-right "Ausgaben auf dem seriellen Monitor.")
Dazu werden drei Taster (mit Widerstand!) am Arduino angeschlossen. Nach einer zufälligen Zeit wird auf dem seriellen Monitor angezeigt, welcher (zufällig ausgewürfelte) Taster gedrückt werden soll. Geschieht dies innerhalb einer vorgegebenen maximalen Reaktionszeit, hat man gewonnen, andernfalls verloren.

Am Anfang des Spiels soll diese maximale Reaktionszeit konfiguriert werden können. Das heißt, man kann die max. Reaktionszeit mit dem linken Taster verringern und mit dem rechten Taster vergrößern. Erst wenn der mittlere Taster gedrückt wird, startet das Spiel.

Für einen besseren Zugang zu diesem komplexen Spiel kannst du folgende Vorlage öffnen, mittels “Speichern unter” als `Reaktionsspiel.xml` auf dem Computer speichern und die Datei im Open Roberta Lab importieren: <a href="/p-templates/reaktionsspiel-start.xml" download><i class="fa fa-download" aria-hidden="true"></i> reaktionsspiel-start.xml</a>.
</div>

*Mögliche Erweiterungen:*
-   zusätzliche Ausgabe der Reaktionszeit,
-   Ober- und Untergrenze für die einstellbare maximale Reaktionszeit, damit das Spiel nicht unmöglich, aber auch nicht zu langweilig wird,
-   nach Spielstart folgen mehrere Spiele hintereinander und es wird mitgezählt, wie oft gewonnen wird,
-   je nach Reaktionszeit bekommt man mehr oder weniger Punkte,
-   ...

### Zählschleifen programmieren

Lauflichter findet man inzwischen überall in unserer Welt: An den Rändern von Landebahnen an Flughäfen, an Spieleautomaten, aufdringlichen Werbeschildern, als Blinker von modernen Autos und vieles mehr. Wenn man diese programmieren will, eignen sich dazu am besten Zählschleifen.

<div markdown="1" class="aufgabe"> 
#### Zählschleifen verstehen

![Beispiel einer Zählschleife](/images/for-schleife-bsp.png?lightbox=1024&classes=caption "Beispiel einer Zählschleife.")

Das oben abgebildete Programm enthält zwei selbst definierte Blöcke, mit denen sich eine LED an einem beliebigen Pin zwischen 2 und 13 anstellen bzw. ausschalten lässt. In der Endlosschleife wird dann eine Zählschleife genutzt.

Stelle eine Vermutung an, was die Zählschleife bewirkt.

Überprüfe deine Vermutung mit Hilfe einer *Trace-Tabelle* (siehe unten).
</div>

!!!! #### Trace-Tabellen
!!!!
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1"> Trace-Tabellen stellen den Wert von Variablen beim Durchlaufen des Programms dar. Auf diese Art und Weise kann man sich zum Beispiel genau veranschaulichen, wann Schleifen abgebrochen werden.</div>
!!!! <div markdown="1">
!!!!  |**Zeile** | **i** |
!!!!  |----------|-------|
!!!!  |   …      |   …   |
!!!!  |   5      |   2   |
!!!!  |   6      |   2   |
!!!!  |   5      |   3   |
!!!!  |   6      |   3   |
!!!! </div>
!!!! </div>

<div markdown="1" class="projekt">
#### Auto-Blinker

<div class="video">
  <iframe
    class="video__iframe"
    data-src="https://www.youtube-nocookie.com/embed/s317_5aFL6E"
    frameborder="0"
    allowfullscreen="allowfullscreen"
  ></iframe>
  <form class="video__notice">
    <p>
      An dieser Stelle ist ein Video von Youtube eingebettet. Mit deiner Erlaubnis willigst du ein, dass 
      deine Daten an YouTube in den USA übermittelt werden. Weitere Informationen zur Datenverarbeitung von YouTube findest
      du in der <a href="https://policies.google.com/privacy?hl=de">Datenschutzerklärung von YouTube</a>.
    </p>
    <button>Erlaube Inhalte von YouTube</button>
  </form>
</div>

Programmiere ein Lauflicht so, wie es auch als Blinker in modernen Autos genutzt wird. Nutze zunächst nur 5 LEDs (mit Vorwiderstand!).

*Hinweis:* Du kannst das folgende Programm als Vorlage nutzen, damit du auch über die selbst definierten Blöcke zum Anstellen bzw. Ausstellen einer LED an einem beliebigen Pin zwischen 2 und 13 verfügst. Speichere das Programm als `blinker.xml` und importiere es in Open Roberta Lab: <a href="/p-templates/lauflicht-start.xml" download><i class="fa fa-download" aria-hidden="true"></i> blinker-start.xml</a>.
</div>

<div class="aufgabe" markdown="1">
#### La - o - La

Programmiere ein Lauflicht, das hin- und zurückläuft.
</div>

<div markdown="1" class="aufgabe">
#### Steuerung von Schleifen

Unten siehst du zwei Programme, für die jeweils fünf LEDs mit Vorwiderstand an Pin 2 bis 6 angeschlossen wurden. Darunter siehst du die Wirkung der Programme in einem kurzen Video.

Beschreibe die Wirkung von `Die Schleife abbrechen` und `mit der nächsten Iteration der Schleife fortfahren`.

<div class="flex-box" markdown="1">
<div markdown="1">
![Beispiel für 'break'.](/images/break-bsp.png?Lightbox=1024&classes=caption "Schleife abbrechen.")
<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/demo-break.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
<p>Programmdownload: <a href="/p-templates/schleife-abbrechen.xml" download><i class="fa fa-download" aria-hidden="true"></i> schleife-abbrechen.xml</a></p>
</center>
</div>
<div markdown="1">
![Beispiel für 'continue'.](/images/continue-bsp.png?Lightbox=1024&classes=caption "Schleife fortfahren.")
<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/demo-continue.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
</center>
<p><br>Programmdownload: <a href="/p-templates/schleife-fortfuehren.xml" download><i class="fa fa-download" aria-hidden="true"></i> schleife-fortfuehren.xml</a></p>
</div>
</div>

</div>

In Nepo wie in anderen Programmiersprachen gibt es verschiedene Arten von Schleifen. Bisher wurde in Nepo die einfache Zählschleife `wiederhole x mal`, die bedingungsgesteuerte Wiederholschleife `wiederhole bis / solange` und die Zählschleife mit Zählervariable genutzt. Tatsächlich lässt sich das gleiche Verhalten aber mit allen drei Schleifenvarianten erreichen.

<div markdown="1" class="aufgabe">
#### Vergleich von Schleifen

Betrachte noch einmal das Programm `schleife-abbrechen.xml` (siehe oben). Implementiere das gleiche Verhalten mit …

1.  …einer `wiederhole x mal` Schleife,
2.  …einer `wiederhole bis` Schleife,
3.  …einer `wiederhole solange` Schleife.

Erkläre, welche Schleifenvariante sich als “Grundschleife” eignet, die die anderen Varianten *immer* ersetzen kann.
</div>

!!!! #### Sichtbarkeit: Lokale und globale Variablen
!!!! Ein Unterschied zwischen den Schleifenimplementierungen bleibt bestehen: Die Zählvariable `i` wird bei einer Zählschleife als *lokale Variable* angelegt, das heißt, man kann die Zählvariable nur *innerhalb der Schleife* nutzen. Dafür benötigt sie auch nur innerhalb der Schleife Speicherplatz.
!!!! 
!!!! Im Gegensatz dazu sind die unter `Start` angelegten Variablen überall im Programm bzw. global verfügbar und heißen deshalb *globale Variablen*. Für diese Variablen muss während der ganzen Zeit Speicherplatz bereitgehalten werden, auch wenn sie vielleicht nur an einer Stelle wirklich benötigt werden.

!!!! #### Schleifen
!!!! 
!!!! Bei der Programmierung werden häufig Schleifen genutzt, die die Anweisungen in ihrem Rumpf (oder Körper) solange wiederholen, bis eine gewisse Abbruchbedingung eintritt.
!!!! 
!!!! -   `wiederhole x mal`: Einfache *Zählschleife*, die die Anweisungen im Rumpf für eine festgelegte Anzahl wiederholt.
!!!! -   `wiederhole, bis`: Bedingungsgesteuerte Schleife, die die Anweisungen im Rumpf wiederholt, *bis* die Bedingung wahr ergibt.
!!!! -   `wiederhole, solange`: Bedingungsgesteuerte Schleife, die die Anweisungen im Rumpf wiederholt, *solange* die Bedingung wahr ergibt.
!!!! -   `zähle i von … solange Zähler … mit Schrittweite …`: Zählergesteuerte Schleife, die die Anweisungen im Rumpf wiederholt, solange der Zähler kleiner als eine vorgegebene Zahl ist und die    Zählervariable nach jedem Durchlauf um eine angegebene Zahl erhöht.
!!!! 
!!!! Die Überprüfung, ob die Bedingung wahr ist, erfolgt hier *vor* der Ausführung der Anweisungen im Rumpf. Daher nennt man die Schleifen auch *kopfgesteuert*.