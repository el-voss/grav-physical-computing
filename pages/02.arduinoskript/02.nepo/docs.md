---
title: 'Kurze Einführung zum Arduino und zum Open Roberta Lab'
menu: '[KE] Kurze Einführung'
page-toc:
    active: true
taxonomy:
    category:
        - docs
---

<style>
    body {
        --abk: 'KE';
    }
</style>

Der Arduino ist ein Mikrocontroller, der vom italienischen Professor Massimo Banzi entwickelt wurde, damit seine Studenten im Bereich *Design* eine einfach zugängliche Möglichkeit fanden, Elektronik für künstlerische Projekte zu nutzen. Die vorgenommenen Vereinfachungen in der Handhabung von Mikrocontrollern gefielen jedoch nicht nur den Studenten von Massimo Banzi, sondern auch zahlreichen Studenten anderer Fachrichtungen, Schülern, Hobby-Elektronikern und sogar Fachleuten in der Industrie, sodass der Arduino rasch eine weltweite Verbreitung fand.

In diesem Kapitel lernst du…

- …wie der Arduino aufgebaut ist,
- …wie man den Arduino mit dem PC verbindet und mit Nepo im Open Roberta Lab programmiert,
- …die digitalen Pins als Ausgänge zu benutzen, um eine LED zu steuern,
- …Schaltungen auf dem Steckbrett aufzubauen.

[TOC]

## Der Aufbau des Arduino UNO

Mit der Zeit entwickelten sich zahlreiche andere Modelle des Arduino, die kleiner oder größer waren, über mehr oder weniger Anschlüsse verfügten, schneller oder langsamer waren usw. Das Standardmodell ist heute der Arduino Uno, den auch wir verwenden.

![Die wichtigsten Komponenten eines Arduino Uno.](arduino-beschriftet.png?lightbox=1024&classes=caption "Die wichtigsten Komponenten eines Arduino Uno.")

Die Abbildung oben zeigt die wichtigsten Komponenten des Arduino Uno. Wichtig sind an dieser Stelle vor allem folgende Punkte:

<!-- TODO: Link zum Anhang ergänzen -->
-   Über den USB-Anschluss und das mitgelieferte Kabel lässt sich der Arduino mit dem PC verbinden und programmieren.
-   Das Programm läuft nach dem Übertragen auf dem eigentlichen Mikrocontroller, dem langen schwarzen Ding in der Mitte. Der ganze Rest auf dieser kleinen Platine dient der einfacheren Handhabung des    Mikrocontrollers.
-   An den Seiten befinden sich die Pin-Leisten, an die sich zum Beispiel LEDs anschließen lassen. Die Pins sind durchnummeriert, sodass sie im Programm angesprochen werden können. *GND* steht für     “Ground” oder den Minus-Kontakt. *5V* steht für den Plus-Kontakt und gibt an, dass dort stets eine Spannung von 5V anliegt, wenn der Arduino über USB oder Batterie mit Strom versorgt wird. Die  durchnummerierten Digitalpins können durch das Programm ebenfalls auf 5V gesetzt werden (`HIGH`), aber auch auf 0V, sodass kein Strom fließt (`LOW`).

## Das Open Roberta Lab und Nepo4Arduino

Nepo4Arduino ist eine graphische Programmiersprache, die vom Fraunhofer Institut für Intelligente Analyse- und Informationssysteme im Rahmen des Open Roberta Labs für verschiedene Robotersysteme entwickelt wird. Durch die bereit gestellten Blöcke wird der Einstieg in die Programmierung des Arduino sehr einfach gemacht. Gleichzeitig lassen sich aber auch sehr komplexe Programme entwickeln und man kann jederzeit das textbasierte Programm in der Sprache C++ einsehen.

Um den Arduino zu programmieren, ruft man die Adresse <https://lab.open-roberta.org/> auf und wählt dann *Nepo4Arduino* und im nächsten Schritt den Arduino Uno aus. Damit das dort erstellte Programm aus dem Browser auf den Arduino übertragen werden kann, muss außerdem der *Open Roberta Connector* installiert werden. Auf der [Wiki-Seite](https://jira.iais.fraunhofer.de/wiki/display/ORInfo/Open+Roberta+Wiki) gibt es eine [Installations-Anleitung](https://jira.iais.fraunhofer.de/wiki/display/ORInfo/Open+Roberta+Connector) und eine [Anleitung zum Verbinden des Arduino mit dem Open Roberta Lab](https://jira.iais.fraunhofer.de/wiki/display/ORInfo/Vorbereitung+Nepo4Arduino).

Die folgende Abbildung zeigt eine Übersicht über die Oberfläche des Open Roberta Lab, jedoch lernt man sie am besten kennen, indem man einfach drauf loslegt und ausprobiert, was sich damit anstellen lässt.

![Übersicht über die Funktionen von Open Roberta Lab.](openrobertalab.png?lightbox=1024&classes=caption "Übersicht über die Funktionen von Open Roberta Lab.")

## Digitale Ausgänge steuern

**Ziel:** Es soll das erste Testprogramm auf den Arduino übertragen werden, mit dem man üblicherweise überprüft, ob der Arduino (oder ein anderer Mikrocontroller) richtig funktioniert.

<div markdown="1" class="aufgabe"> 
####Test der Funktionsweise

Zum Testen der Funktionsweise soll die bordeigene LED zum Blinken gebracht werden:

-   Stelle LED an.
-   Warte eine Sekunde.
-   Stelle LED aus.
-   Warte eine Sekunde.

1.  Verbinde den Arduino mit dem Open Roberta Lab nach der [Anleitung zum Verbinden des Arduino](https://jira.iais.fraunhofer.de/wiki/display/ORInfo/Vorbereitung+Nepo4Arduino).
2.  Überprüfe zunächst in der Roboterkonfiguration, ob der Block für die Board-LED bereits eingestellt ist. Benenne die LED als “BoardLED”.
3.  Erstelle das oben formulierte Programm mit Nepo4Arduino und übertrage es auf den Arduino.
4.  Zum Speichern des Programms wähle im  *Menü* die Funktion *exportiere Programm*. Finde das Programm im Download-Ordner deines Computers und benenne es als `Blink.xml`. Speichere es dann an einem    sinnvollen Ort ab.
*Hinweis:* Du kannst das Programm im gleichen Menü wieder importieren, um es zu einem späteren Zeitpunkt wieder aufzurufen.
</div>

!!!! #### Algorithmus, Anweisung und Argument
!!!!
!!!! ![Anweisungen und Argumente in einem Algorithmus.](anweisungen-bsp.png?classes=caption,figure-right "Anweisungen und Argumente in einem Algorithmus.")
!!!!
!!!! Ein Programm besteht aus einer Folge von Anweisungen. Man spricht auch von Algorithmen: Ein Algorithmus ist eine eindeutige Handlungsvorschrift zur Lösung eines Problems, die aus endlich vielen Anweisungen besteht (s. [Wikipedia](https://de.wikipedia.org/wiki/Algorithmus)).
!!!!
!!!! Eine Anweisung *kann* ein oder mehrere *Argumente* haben, die zum Beispiel festlegen, welche LED geschaltet oder wie lange gewartet werden soll.

<div markdown="1" class="aufgabe">
#### LEDs im Alltag

Wir nutzen in den ersten Kapiteln sehr häufig LEDs, weil sich die Grundlagen mit ihnen einfach erarbeiten lassen, aber auch weil sie eine enorme Bedeutung in der heutigen Welt haben. Notiere dir zur Verdeutlichung eine Woche lang alle Geräte, die dir begegnen oder die dir einfallen, in denen LEDs verbaut sind.
</div>

## Aufbau von Schaltungen auf der Steckplatine

In der Regel braucht man für interessante Geräte zusätzliche *Hardware* (Sensoren, Motoren, …), die am Arduino angeschlossen wird. Bevor diese fest verlötet werden, nutzt man normalerweise Steckverbindungen bzw. baut die Schaltung auf einem kleinen Steckbrett auf, auf dem man die Verbindungen schnell wieder lösen kann, falls nötig. Steckbretter sind aus dem Physikunterricht bekannt. Die folgende Abbildung zeigt, welche Kontakte auf dem Steckbrett miteinander verbunden sind.

![Die Steckverbindungen sind außen in Längsrichtung und innen in Querrichtung miteinander verbunden.](steckbrett.png?lightbox=1024&classes=caption "Die Steckverbindungen sind außen in Längsrichtung und innen in Querrichtung miteinander verbunden.")

**Ziel:** Eine externe LED an Pin 13 soll zum Leuchten gebracht werden. Diese kann genutzt werden, um das Blinken einer Alarmanlagen-LED zu simulieren.
<div markdown="1" class="clearfix">
<div markdown="1" class="flex-box">
<div markdown="1">![Symbolischer Schaltplan zum Anschließen einer LED mit Vorwiderstand an Pin 13.](Schaltplan-LED.png?lightbox=1024&resize=500&classes=caption "Symbolischer Schaltplan zum Anschließen einer LED mit Vorwiderstand an Pin 13.")</div>
<div markdown="1">![Ikonischer Schaltplan zum Anschließen einer LED mit Vorwiderstand an Pin 13.](schaltplan-blink.png?lightbox=1024&resize=500&classes=caption "Ikonischer Schaltplan zum Anschließen einer LED mit Vorwiderstand an Pin 13.")</div>
</div>

*Hinweise:*

Es kann das Programm aus dem vorherigen Abschnitt wieder verwendet werden, da die Board-LED ebenfalls mit Pin 13 verbunden ist. Allerdings gibt es noch etwas zu beachten: Wenn die LED an Pin 13 angeschaltet wird, bedeutet das, dass der Arduino an Pin 13 eine Spannung von 5V (Pluspol) gegenüber GND (Minuspol) ausgibt. Die LED verträgt jedoch nur (je nach Farbe) gut 2V. Daher ist die LED mit einem Vorwiderstand von $330 \, \Omega$ verbunden.

Die LED ist ein sogenanntes gepoltes Bauteil. Das heißt, dass der lange Kontaktstift der LED an den Pluspol angeschlossen werden *muss* und der kurze an den Minuspol (GND) angeschlossen werden *muss*.
</div>

<div markdown="1" class="projekt"> 
#### Ampel
Baue und programmiere eine Ampelschaltung! Verwende für die LEDs aussagekräftige Namen. Denke daran, dein Programm abzuspeichern!

*Für Schnelle:* Erweitere die Ampel um einen Nachtmodus.
</div>

<div markdown="1" class="projekt">
#### Augentestgerät 
Moderne Fernseher nutzen meist eine Bildwiederholungsrate von 144 Hertz; das bedeutet, es werden 144 Bilder pro Sekunde eingespielt. Finde mithilfe des Blink-Programms heraus, ab welchem Blinkintervall du kein Flackern mehr wahrnimmst und berechne, wie viele “Bilder” pro Sekunde sich daraus ergeben. Vergleiche diesen Wert mit der Bildwiederholungsrate im Fernsehen.

*Idee: Frick, Fritsch und Trick (2015): *Einführung in Mikrocontroller - Der Arduino als Steuerzentrale*, Bad Saulgau*
</div>

!!!! #### LED
!!!!
!!!! Die Bezeichnung “LED” steht für *Licht emittierende Diode* (kurz: Leuchtdiode). Sie ist ein Halbleiterbauelement, das elektrische Energie sehr effizient in Lichtenergie umwandelt und daher heute weite Verbreitung in allen Bereichen gefunden hat, in denen Licht benötigt wird. Sie ist ein gepoltes Bauteil. Das heißt, dass der lange Kontaktstift der LED mit dem Pluspol und der kurze Kontaktstift mit dem Minuspol verbunden werden muss, damit sie leuchten kann. Damit die LED nicht durchbrennt, muss in der Regel ein Vorwiderstand angebracht werden, um sie zu betreiben.
!!!! 
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">![Mehrere LEDs.](led-sammlung.jpg?resize=200&classes=caption "Mehrere LEDs.")</div>
!!!! <div markdown="1">![Schaltsymbol einer LED.](led-schaltsymbol.png?resize=200&classes=caption "Schaltsymbol einer LED.")</div>
!!!! </div>

<br>

## Widerstandsringe ablesen

Leider sind die Widerstände zu klein, um ihren Wert darauf gut lesbar zu drucken. Daher werden die Widerstände mit Ringen versehen, aus deren Farbe sich die Größe des Widerstands ablesen lässt. Um im Folgenden jeweils den passenden Widerstand aus dem Bausatz auswählen zu können, müssen wir diesen Farbcode lesen können.

Bei den blauen Kohleschichtwiderständen, die wir verwenden, gibt es fünf Ringe und jede Ringfarbe steht für eine Zahl. Die ersten drei Ringe bilden die ersten drei Ziffern des Widerstandswertes ab. Die darauf folgende Ringfarbe steht für die Zehnerpotenz, die mit den drei Ziffern multipliziert werden muss. Dies dient dazu, auch größere Widerstandswerte codieren zu können. Der letzte Ring wiederum soll einen etwas größeren Abstand haben und steht für die Fehlertoleranz des Widerstandswertes. In der Praxis lässt sich allerdings nicht immer gut erkennen, welcher Ring der letzte und welcher der erste ist…

![](widerstand-schema.png?resize=400)

Ein Beispiel: Die Ringfarben lauten orange - grün - schwarz - schwarz - braun. Anhand der folgenden Tabelle lässt sich daraus der Wert konstruieren: $3 - 5 - 0 - \cdot 1 (=10^0) - \pm 1\% $, kurz: $350 \Omega \, \pm 3,5 \, \Omega$.

![Tabelle zur Codierung der Widerstandswerte durch Farbringe.](widerstandsfarben-tabelle.png?lightbox=1024&classes=caption "Tabelle zur Codierung der Widerstandswerte durch Farbringe")

<div markdown="1" class="aufgabe">
#### Erste Übung

Gib die Farbcodierung für einen Widerstand mit den folgenden Werten an:

1.  $435 \, \Omega \, (\pm 2\%)$,
2.  $570 \, k\Omega \, (\pm 5\%)$.
</div>

<div markdown="1" class="aufgabe">
#### Praxistest

1.  Die Abbildung im Infokasten unten zeigt die vier wichtigsten Widerstände, mit denen wir zu tun haben werden. Bestimme die jeweilige Größe der Widerstände.
2.  Thorsten hat die Ringe eines Widerstands abgelesen: Silber - rot - lila - lila - grün. Bestimme die Größe des Widerstands.

*Zur Kontrolle:* https://www.elektronik-kompendium.de/sites/bau/1109051.htm
</div>

!!!! #### Ohmsche Widerstände
!!!!
!!!! Ohmsche Widerstände dienen dazu, die Stromstärke zu begrenzen. Je größer ihr Widerstand ist, desto geringer wird die Stromstärke, wenn die Spannung gleich bleibt. Die Größe eines Widerstands lässt sich an seinen Ringen ablesen. Sie bleibt immer gleich groß.
!!!!
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">![Widerstände.](Widerstaende.jpg?resize=200&rotate=90&classes=caption "Widerstände.")</div>
!!!! <div markdown="1">![Schaltsymbol eines Widerstandes.](widerstand-schaltsymbol.png?resize=200&classes=caption "Schaltsymbol eines Widerstandes.")</div>
!!!! </div>

<br>

## Vermischte Übungen

<div markdown="1" class="aufgabe">
#### Blaulicht

Das Blaulicht soll über zwei blaue LEDs verfügen, die abwechselnd blinken. Es ist immer genau eine der beiden LEDs am Leuchten.

1.  Zeichne einen zugehörigen Schaltplan.
2.  Skizziere ein zugehöriges Programm.
</div>

<div markdown="1" class="aufgabe">
#### Farbcodierung von Widerständen

1.  Gib die Farbcodierung der folgenden Widerstandsgrößen an:
    a)  $330 \, \Omega \, \pm 1\%$,
    b)  $10 \, k\Omega \, \pm 2\%$,
    c)  $4,7 \, k\Omega \, \pm 10\%$.
2.  Gib die Größe der folgenden Widerstände an:
    1. ![](widerstand-bsp1.png?resize=400)
    2. ![](widerstand-bsp2.png?resize=400)

*Hinweis:* Als Hilfsmittel ist die Widerstandskarte aus den Boxen zugelassen.
</div>

! #### Motivationsquellen
!
! [FUTUREMAG](https://www.youtube.com/watch?v=EbVmfGNwn0g): Kurze Dokumentation des FUTUREMAG zur Arduino-Welt
!
! [Arduino-Wecker](https://www.heise.de/make/meldung/Mehr-Komfort-der-Arduino-Ueberkopfwecker-4046184.html): Mit einem selbst gebauten Wecker, der Uhrzeit und Alarmzeit getrennt voneinander anzeigt, erfüllte ein Bastler seinen Wunsch nach mehr Komfort.
! 
! [Aquarium-Licht](https://www.instructables.com/id/Aquarium-LED-Controller/): Der Bastler hinter diesem Projekt wollte seinen Fischen im Aquarium ein natürliches Licht einschließlich Sonnenaufgang, Sonnenuntergang und Nacht gönnen. Auf die gleiche Art und Weise kann man natürlich auch sein Terrarium beleuchten.
!
! [VR-Brille](https://www.heise.de/make/meldung/Kein-Geld-fuer-eine-Oculus-Rift-VR-Brille-selbstgebaut-3949507.html): Drei Schüler aus Frankreich hatten kein Geld für eine Virtual Reality Brille – aber dafür das Know How, um sich mit einem Arduino und einem Gehäuse aus dem 3D-Drucker selbst eine VR-Brille zu basteln.
