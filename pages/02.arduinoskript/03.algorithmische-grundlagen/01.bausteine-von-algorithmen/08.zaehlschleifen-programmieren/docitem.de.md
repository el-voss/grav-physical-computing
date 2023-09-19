---
title: 'Zählschleifen programmieren'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: for-schleife.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Einfache Entscheidungen programmieren'
        - Variablen
    Zusatzvoraussetzungen:
        - 'Wiederholungen und zufällige Ereignisse'
        - 'Wiederholungen mit Bedingungen steuern'
    Inhalte:
        - Zählschleife
        - Trace-Tabelle
        - 'Lokale Variablen'
        - 'Globale Variablen'
    Niveau:
        - Fortgeschritten
---

Lauflichter findet man inzwischen überall in unserer Welt: An den Rändern von Landebahnen an Flughäfen, an Spieleautomaten, aufdringlichen Werbeschildern, als Blinker von modernen Autos und vieles mehr. Wenn man diese programmieren will, eignen sich dazu am besten Zählschleifen.

<div markdown="1" class="aufgabe"> 
#### Zählschleifen verstehen

![Beispiel einer Zählschleife](for-schleife-bsp.png?lightbox=1024&classes=caption "Beispiel einer Zählschleife.")

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
![Beispiel für 'break'.](break-bsp.png?Lightbox=1024&classes=caption "Schleife abbrechen.")
<center>
<video controls="1" width="70%" height="auto" playsinline>
<source src="/user/pages/images/demo-break.mp4" type="video/mp4"></source>
Ihr Browser kann dieses Video nicht wiedergeben.
</video>
<p>Programmdownload: <a href="/p-templates/schleife-abbrechen.xml" download><i class="fa fa-download" aria-hidden="true"></i> schleife-abbrechen.xml</a></p>
</center>
</div>
<div markdown="1">
![Beispiel für 'continue'.](continue-bsp.png?Lightbox=1024&classes=caption "Schleife fortfahren.")
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

!!!! #### Zusammenfassung: Schleifen
!!!! 
!!!! Bei der Programmierung werden häufig Schleifen genutzt, die die Anweisungen in ihrem Rumpf (oder Körper) solange wiederholen, bis eine gewisse Abbruchbedingung eintritt.
!!!! 
!!!! -   `wiederhole x mal`: Einfache *Zählschleife*, die die Anweisungen im Rumpf für eine festgelegte Anzahl wiederholt.
!!!! -   `wiederhole, bis`: Bedingungsgesteuerte Schleife, die die Anweisungen im Rumpf wiederholt, *bis* die Bedingung wahr ergibt.
!!!! -   `wiederhole, solange`: Bedingungsgesteuerte Schleife, die die Anweisungen im Rumpf wiederholt, *solange* die Bedingung wahr ergibt.
!!!! -   `zähle i von … solange Zähler … mit Schrittweite …`: Zählergesteuerte Schleife, die die Anweisungen im Rumpf wiederholt, solange der Zähler kleiner als eine vorgegebene Zahl ist und die    Zählervariable nach jedem Durchlauf um eine angegebene Zahl erhöht.
!!!! 
!!!! Die Überprüfung, ob die Bedingung wahr ist, erfolgt hier *vor* der Ausführung der Anweisungen im Rumpf. Daher nennt man die Schleifen auch *kopfgesteuert*.
