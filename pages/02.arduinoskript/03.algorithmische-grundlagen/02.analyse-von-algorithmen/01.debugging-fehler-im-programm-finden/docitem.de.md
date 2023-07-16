---
title: 'Debugging: Fehler im Programm finden'
show_pageimage: true
image_width: 300
image_height: 400
---

Fehler werden in der Informatik auch als “Bugs” bezeichnet. Fehler treten beim Programmieren ständig auf und sind völlig normal. Erst nach einigem Testen läuft ein Programm völlig stabil und fehlerfrei. Das Entfernen von Fehlern wird dann auch als “Debugging” bezeichnet.

Informatiker unterscheiden zwischen zwei Fehlerarten: Syntaxfehler und logische Fehler. Logische Fehler sind dir vielleicht schon passiert und manche wurden auch schon in diesem Skript behandelt, zum Beispiel zur [`sonst wenn`-Bedingung](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#verschachtelte-entscheidungen). Syntaxfehler entstehen, wenn man die Grammatik (Syntax) einer Programmiersprache nicht beachtet. In Nepo werden die meisten Syntaxfehler automatisch vermieden, weil die meisten Blöcke nur ineinander greifen, wenn sie syntaktisch zueinander passen.

<div markdown="1" class="aufgabe">
#### Systematisch Fehler finden

Unten ist ein Programm mit zwei Fehlern abgebildet. Es soll die folgende Summe berechnen:
<center markdown="1">
$1 + 1,5 + 2 + 2,5 + 3 + \dots + 98,5 + 99 + 99,5 + 100.$
</center>
![Beispielprogramm zum Debuggen.](/images/debugBsp.png?classes=caption "Beispielprogramm zum Debuggen.")
<center>Beispielprogramm zum Debuggen als Download: <a href="/p-templates/debugging-example.xml" download><i class="fa fa-download" aria-hidden="true"></i> debugging-example.xml</a></center>

![Variablenausgabe auf dem seriellen Monitor](/images/DEBUGON.png?classes=caption,figure-right "Implementierung eines Debugging-Modus")
Um Fehler zu finden, kann man sich die Werte von Variablen auf dem seriellen Monitor ausgeben lassen. Programmierer bauen dann häufig eine Variable `DEBUG_ON` ein und nutzen eine Konstruktion wie rechts abgebildet. Welchen Vorteil könnte das haben?

Öffne das oben abgebildete Programm in Nepo und nutze die Debug-Konstruktion, um die Fehler zu finden oder nachzuweisen. Korrigiere sie.

*Frage deinen Lehrer, wenn du den Fehler gefunden hast, aber nicht nachvollziehen kannst, wieso sich das Programm so verhält.*
</div>