---
title: 'Dokumentation, Fehlersuche und das EVA-Prinzip'
---

# Bausteine von Algorithmen Teil 4: Dokumentation, Fehlersuche und das EVA-Prinzip

<style>
    h1 {
  		counter-set: h1 3 ;
	}
</style>

[TOC]

## Programme mit Struktogrammen dokumentieren

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

## Debugging: Fehler im Programm finden

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

## Das EVA-Prinzip

In diesem Kapitel hast du bereits einige Bauteile kennengelernt, aber es gibt noch viele mehr. Um dabei nicht den Überblick zu verlieren, wären Kategorien praktisch, mit denen man Bauteile und informationsverarbeitende Systeme im Allgemeinen einordnen kann.

**Frage:** Wie lassen sich elektrische Bauteile und informationsverarbeitende Systeme kategorisieren?

<div markdown="1" class="aufgabe">
#### Informationsverarbeitung

Lies die beiden Beschreibungen zur Informationsverarbeitung bei der Straßenlampe und beim Menschen. Beschreibe Gemeinsamkeiten.

<div class="flex-box">
<div markdown="1">
**Beispiel Dämmerungsschaltung:**

Der Aufbau von Festwiderstand und LDR ermöglicht die Eingabe von Daten zur Helligkeit. Auf dem Arduino werden die elektrischen Signale entsprechend des laufenden Programms verarbeitet. Letztlich erfolgt die Ausgabe durch das Leuchten einer LED, wenn es dunkel ist, bzw. durch das Nicht-Leuchten der LED.
</div>
<div markdown="1">
**Beispiel Mensch:**

Unsere Sinne (Augen zum Sehen, Ohren zum Hören, …) ermöglichen die Eingabe von Informationen in das System Mensch. Im Gehirn und den weiteren Nervenbahnen im Körper werden die Signale verarbeitet. Schließlich kommt es zu einer Ausgabe - zum Beispiel zu einer Bewegung (Musik leiser drehen, Augen zukneifen, sprechen mit dem Mund …).
</div>
</div>
</div>

!!!! #### Das EVA-Prinzip
!!!! 
!!!! Informationsverarbeitende Systeme lassen sich nach ihrer Funktion in drei Einheiten zerlegen: Eingabeeinheit, Verarbeitungseinheit, Ausgabeeinheit.
!!!! 
!!!! ![Visualisierung des EVA-Prinzips](/images/eva-visualisierung.png)
!!!! 
!!!! Mit dem EVA-Prinzip wird die grundlegende Reihenfolge der Verarbeitung von Daten charakterisiert. Dies kann sowohl auf Hardwareebene (Bauteile) als auch auf Softwareebene (Programm) geschehen.
!!!!
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">![Bsp. Dämmerungsschaltung: EVA-Prinzip auf Hardwareebene.](/images/daemmerungsschaltung-eva.png?Lightbox=1024&resize=500&classes=caption "Bsp. Dämmerungsschaltung: EVA-Prinzip auf Hardwareebene.")</div>
!!!! <div markdown="1">![Bsp. Dämmerungsschaltung: EVA-Prinzip auf Softwareebene.](/images/daemmerungsprogramm-eva.png?Lightbox=1024&resize=500&classes=caption "Bsp. Dämmerungsschaltung: EVA-Prinzip auf Softwareebene.")</div>
!!!! </div>

<div markdown="1" class="aufgabe">
#### Kleines Begriffstraining

1.  Kategorisiere die [Juke-Box](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#juke-box) nach dem EVA-Prinzip.
2.  Kategorisiere den [Reaktionszeitmesser](https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#reaktionszeitmesser) nach dem EVA-Prinzip.
</div>

<div markdown="1" class="aufgabe">
#### Bauteilkunde

Du hast bisher (mindestens) folgende Bauteile verwendet:
![Bauteilsammlung](/images/bauteilsammlung.png)
Benenne Gemeinsamkeiten und Unterschiede. Welche Bauteile lassen sich zusammenfassen?
</div>

!!!! #### Sensoren und Aktoren mit digitalen und analogen Signalen
!!!! Für die Eingabe von Daten werden *Sensoren* benötigt; für die Ausgabe hingegen *Aktoren*:
!!!! 
!!!! -   **Sensoren** (auch Fühler genannt) sind elektrische Bauteile, die eine physikalische Größe aus der Umwelt (Temperatur, Helligkeit, Luftdruck oder auch ein mechanischer Druck mit dem Finger) in eine elektrische Größe (Widerstand, Spannung, elektrisches Potential, Stromstärke) umwandeln. Dadurch werden die physikalischen Größen aus der Umwelt einer elektronischen Verarbeitung zugänglich.
!!!! -   **Aktoren** (auch Aktuatoren genannt) sind elektrische Bauteile, die eine elektrische Größe in eine mechanische (Bewegung, Schallwellen) oder andere Größe (Temperatur, Licht, …) umwandeln. Sie ermöglichen, dass die elektronische Verarbeitung zu Handlungen bzw. Konsequenzen führen kann.
!!!! 
!!!! Die Signale von Sensoren und Aktoren können digital oder analog sein:
!!!! 
!!!! -   **Digitale Signale** haben nur zwei mögliche Zustände - z.B. an aus, gedrückt / nicht gedrückt oder 1 / 0.
!!!! -   **Analoge Signale** haben unendlich viele mögliche Werte, weil sie beliebig fein eingeteilt werden können. Digitale Geräte wie der Arduino können nur *quasi* analoge Signale einlesen. Bei den “analogen” Eingängen A0, A1, …A5 des Arduino sind 1024 verschiedene Stufen möglich; bei “analogen” Ausgängen (Pins mit einer Tilde: $\sim$) sind 256 verschiedene Stufen möglich. Diese Einteilung ist für die meisten Aufgaben fein genug.
!!!! 
!!!! ![Digitale und analoge Aktoren und Sensoren in Nepo.](/images/sensoren-und-aktoren.png?classes=caption "Digitale und analoge Aktoren und Sensoren in Nepo.")

<div markdown="1" class="projekt">
#### Alarmanlage mit Lichtschranke

![Lichtschranke mit LED und LDR.](/images/lichtschranke.png?resize=250&classes=caption,figure-right "Lichtschranke mit LED und LDR.")
Baue eine Alarmanlage, indem du mit einer LED (Vorwiderstand!) und einem LDR eine Lichtschranke baust . Wird diese unterbrochen, soll ein akustischer Alarm ertönen. Konfiguriere alle benötigten Bauteile als Aktoren und Sensoren.

*Erweiterung:* Über einen zusätzlichen Taster (mit Widerstand!) soll die Alarmanlage “scharf” gestellt bzw. wieder ausgestellt werden können. Erstelle dazu eine Wahrheitswert-Variable `aktiv`, deren Wert über den Taster verändert wird. Das Auslösen der Alarmanlage wird nur ausgeführt, wenn `aktiv = wahr` ist.

Rücklinks (öffnen in neuem Tab): <a href="https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#fugngerampel" target="_blank">Taster anschließen</a>, <a href="https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#erste-experimente-mit-dem-ldr" target="_blank">LDR anschließen</a>
<div class="flex-box">
<div markdown="1">![Befehl: Aktor ansteuern](/images/aktor-ansteuern.png)</div>
<div markdown="1">![Befehl: Sensor auslesen](/images/sensor-auslesen.png)</div>
</div>
</div>

<div markdown="1" class="aufgabe">
#### Analoge Aktoren

Analoge Aktoren kamen bisher nicht vor. Schließe eine LED mit Vorwiderstand an Pin 5 an und konfiguriere einen entsprechenden analogen Aktor.

1.  An Pin 5 können Werte von 0 bis 255 ausgegeben werden. Implementiere eine Zählschleife, die diese Werte systematisch durchläuft und beschreibe die Auswirkung auf die LED.
2.  Probiere Werte größer als 255 aus und beschreibe, welche Auswirkung diese haben.
</div>

