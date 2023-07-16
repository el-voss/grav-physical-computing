---
title: 'Dokumentation von Algorithmen'
show_pageimage: true
image_width: 300
image_height: 400
---

Wenn wir uns über Programme austauschen, dann haben wir nicht immer den Computer zur Hand. In solchen Momenten wäre es viel zu aufwendig, die bunten Blöcke von Nepo zu malen. Außerdem könnte es sein, dass jemand anderes das Programm nicht mit Blöcken, sondern mit Text in der Programmiersprache C++ aufschreiben will, also so wie der Quellcode aussieht.

**Frage:** Wie kann man Programme übersichtlich zu Papier bringen?

Man nutzt zur Darstellung des Ablaufs eines Computerprogramms sogenannte **Struktogramme** (vgl. Infobox unten), die in den 1970er Jahren von Isaac Nassi und Ben Shneidermann entwickelt wurden. Struktogramme sollen ein Computerprogramm möglichst einfach und ohne programmiersprachenspezifische Befehlssyntax abbilden. Auf diese Art und Weise lassen sich Programme auch einfach planen, bevor man sich damit beschäftigt, wie die Schritte im Einzelnen zu codieren sind.

<div markdown="1" class="aufgabe"> #### Struktogramme erstellen
Stelle die unten abgebildeten Programme jeweils mithilfe eines Struktogramms dar.

![Programm A.](/images/wenn-sonstWenn-sonst-Bsp2.png?Lightbox=1024&classes=caption "Programm A.")
![Programm B.](/images/break-bsp-schmal.png?Lightbox=1024&classes=caption "Programm B.")
</div>

!!!! #### Darstellung von Programmen in Struktogrammen
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">**Lineare Struktur**
!!!! 
!!!! Jede Anweisung wird in einen rechteckigen Block geschrieben.
!!!! ![Sequenz.](/images/Sequenz.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Zählergesteuerte Schleife**
!!!! 
!!!! Die Anzahl der Schleifendurchläufe wird durch eine Zählvariable festgelegt. Im Schleifenkopf werden der Startwert der Zählvariablen, der Endwert der Zählvariablen und die Veränderung der Zählvariablen, z.B. Schrittweite 1, angegeben.
!!!! ![Zählerschleife.](/images/Zaehlerschleife.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Kopfgesteuerte Schleife**
!!!! 
!!!! Wiederholungsschleife mit vorausgehender Prüfung der Bedingung. Der Schleifenkörper wird so lange wiederholt, *wie* oder *bis* die Bedingung wahr ist (bei uns nur der letzte Fall verfügbar).
!!!! ![Kopfgesteuerte Schleife](/images/kopfgesteuerteSchleife.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Fußgesteuerte Schleife**
!!!! 
!!!! Wiederholungsschleife mit nachfolgender Prüfung der Bedingung. Der Schleifenkörper wird so lange wiederholt, *wie* oder *bis* die Bedingung wahr ist (im RobertaLab nicht verfügbar).
!!!! ![Fußgesteuerte Schleife](/images/fussgesteuerteSchleife.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Einfache Verzweigung**
!!!! 
!!!! Die Anweisung 1 (und ggf. weitere) wird nur ausgeführt, falls die Bedingung wahr ist. Andernfalls wird nichts gemacht.
!!!! ![Einfache Verzweigung](/images/EinfacheVerzweigung.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Alternative Verzweigung**
!!!! 
!!!! Falls die Bedingung wahr ist, wird Anweisung 1 (und ggf. weitere) ausgeführt, sonst wird Anweisung 2 (und ggf. weitere) ausgeführt.
!!!! ![Alternative Verzweigung](/images/AlternativeVerzweigung.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Verschachtelte Verzweigung**
!!!! 
!!!! Falls Bedingung 1 wahr ist, folgt eine weitere Bedingung 2.
!!!! ![Verschachtelte Verzweigung](/images/VerschachtelteVerzweigung.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Deklaration und Verwendung einer Variablen**
!!!! 
!!!! Variable x wird als Zahl deklariert und bekommt den Wert 4 zugewiesen. Danach wird sie um 1 erhöht.
!!!! ![Variablenverwendung](/images/Struktogramm-Variablenverwendung.png?Lightbox=512)
!!!! </div>
!!!! <div markdown="1">**Aufruf einer Funktion**
!!!! 
!!!! Eine Funktion namens "meineFunktion()" mit zwei Argumenten a und b wird aufgerufen, wobei a=1 und b=2 sein soll.
!!!! ![Aufruf einer Funktion](/images/StruktogrammFunktion.png?Lightbox=512)
!!!! </div>
!!!! </div>

! In diesem Abschnitt werden Struktogramme zwar eingeführt, um Programm übersichtlich auf Papier darstellen zu können, aber auch digital kann es Sinn ergeben, ein Programm in dieser Struktur (und ohne Ballast) darzustellen. In diesen Fällen kann dir der [Structorizer](https://structorizer.fisch.lu/) helfen.
