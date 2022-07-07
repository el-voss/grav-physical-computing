---
title: Automaten
menu: Automaten
taxonomy:
    category:
        - docs
---

# Automaten

<style>
    h1 {
  		counter-set: h1 6 ;
	}
</style>

Mit den vielen Bauteilen, die nun zur Verfügung stehen, lassen sich bereits große und komplexe Projekte realisieren. Um dabei nicht den Überblick zu verlieren, hilft es, sich mit zustandsbasierten Modellierung und Automaten zu beschäftigen, die das Programm und die Vorgehensweise zur Erstellung des Programms besser strukturieren.

In diesem Kapitel lernst du...
  - …die Funktionsweise von Programmen mit einem Zustandsdiagramm zu planen und zu veranschaulichen,
  - …Programme durch eine zustandsbasierte Modellierung als endlicher Automat zu flexibilisieren.

[TOC]

## Automaten

Bisher wurden Algorithmen rezeptartig als feste Handlungsabfolgen beschrieben, die nacheinander durchlaufen werden und dabei ggf. einfache Fallunterscheidungen berücksichtigen. In der Automatentheorie steht weniger das Befolgen eines Rezeptes im Mittelpunkt als das Einnehmen verschiedener Zustände, zwischen denen unter festgelegten Bedingungen Übergänge stattfinden. Dies macht die Algorithmen flexibler im Umgang mit Eingaben aus der Umwelt, wodurch sie zudem leichter zu erweitern sind.

**Ziel:** Durch eine zustandsbasierte Modellierung sollen Algorithmen flexibler werden und einfacher zu erweitern.

<div markdown="1" class="aufgabe">
#### Zustände programmieren

Ein einfaches Beispiel für einen Automaten mit zwei Zuständen ist eine LED, die über einen Taster an- und wieder ausgeschaltet werden kann. Das folgende Diagramm stellt dies übersichtlich dar.

![Beispiel für einen einfachen Automaten mit zwei Zuständen: LED an und aus](/images/zustandsdiagramm-led-an-aus.png?lightbox=1024&resize=500)

1. Begründe, warum dieses Modell nicht (nur) über das übliche `wenn Taste T gedrückt` programmiert werden kann, sondern zusätzliche Strukturen benötigt.
2. Im Folgenden werden drei Varianten für die Programmierung des LED-Automaten abgebildet.
	a. Beschreibe, wie die Programme aufgebaut sind.
	b. Vergleiche die Programme bezüglich Gemeinsamkeiten und Unterschieden. Welche Vor- und Nachteile ergeben sich aus den Unterschieden?

<div class="flex-box">
<div markdown="1">![LED-Automat Version 1.](/images/automat-led-an-aus-boolean.png?lightbox=1024&resize=400&classes=caption "LED-Automat Version 1.") </div>
<div markdown="1">![LED-Automat Version 2.](/images/automat-led-an-aus-int.png?lightbox=1024&resize=400&classes=caption "LED-Automat Version 2.") </div>
<div markdown="1">![LED-Automat Version 3.](/images/automat-led-an-aus-int-const.png?lightbox=1024&resize=400&classes=caption "LED-Automat Version 3.") </div>
</div>
</div>

!!!! #### Variablen mit konstanten Werten
!!!! Per Konvention erhalten Variablen, deren Wert nicht mehr geändert werden soll, eine Bezeichnung, die nur aus Großbuchstaben besteht wie z. B. `AN` oder `AUS`.

<div markdown="1" class="aufgabe">
#### Ampelzustände

1.  Nenne die vier Zustände (*engl. states*) einer Ampel. Beschreibe die Bedingung(en), unter denen der Wechsel vom einen in den nächsten Zustand stattfindet.
2.  Unten ist ein sogenanntes Zustandsdiagramm einer Ampel zu sehen. Erläutere, wie es aufgebaut ist und ordne ihnen die vier Ampelzustände zu.
    
    *Hinweis: z: Zustand, t: time (engl. für Zeit)*
    ![zu ergänzender Ampel-Automat](/images/ampel-automat-v2.png?lightbox=1024&resize=500)
3.  Unten ist abgebildet, wie ein Programm aussehen könnte, das das Zustandsdiagramm modelliert. Vervollständige das Programm zur Modellierung einer einfachen Ampel und baue die Ampel auf.
    
    *Tipp:* Stelle zuerst den ersten Zustand wie abgebildet fertig. Mit einem Rechtsklick auf den `wenn`-Block kannst du dann alle Blöcke kopieren und musst nur noch die Werte anpassen.
    
    *Erweiterung:* Programmiere jeden Ampelzustand als eigene Funktion, sodass das Programm lesbarer wird.
    
    ![zu erweiternder Ampelautomat](/images/ampel-automat-start.png)

*Idee: Materialien zum Kerncurriculum Informatik im Sekundarbereich I, Niedersächsisches Kultusministerium*
</div>

Bei einer klassischen Programmierung mit `warte`-Blöcken wäre eine Erweiterung um eine Fußgängerampel, die zu jedem beliebigen Zeitpunkt aktiviert werden kann, unmöglich, da das Programm während des Wartens das Drücken der Fußgängerampel gar nicht mitbekommen würde. Durch die zustandsbasierte Modellierung mithilfe einer Stoppuhr lässt sich die Fußgängerampel jedoch integrieren.

<div markdown="1" class="projekt">
#### Erweiterung um eine Fußgängerampel

![Fußgängerampel](/images/fussgaengerampel.png?resize=700)

Eine Fußgängerampel ist zunächst aus oder deaktiviert. Sie kann jederzeit durch einen Taster aktiviert werden, das heißt, sie zeigt rot. Sie bleibt solange rot, bis die normale Ampel ebenfalls rot zeigt und eine gewisse Mindestdauer vergangen ist. Die normale Ampel bleibt nun rot, während die Fußgängerampel auf grün springt. Nach einer gewissen Zeit schaltet die Fußgängerampel wieder auf rot. Nach ein paar Sekunden Rotphase für die letzten Fußgänger, die ihren Weg über die Straße noch beenden müssen, ist die Fußgängerampel wieder aus und die normale Ampel springt in die Rot-Gelb-Phase, mit der sie ihren normalen Rhythmus fortsetzt.

1.  Entnimm der obigen Beschreibung die vier Zustände einer Fußgängerampel und die Bedingungen, unter denen vom einen Zustand in den nächsten gewechselt wird. Entwickle daraus ein Zustandsdiagramm für die Fußgängerampel. Ergänze die Übergänge von der Rotphase der normalen Ampel zur Rotphase der Fußgängerampel und von der (wieder) deaktivierten Fußgängerampel zur Rot-Gelb-Phase der normalen Ampel.
    
    *Achtung:* Hier liegen zwei Automaten vor, nämlich die normale Ampel und die Fußgängerampel, daher gibt es auch zwei Startzustände.

2.  Ergänze die Fußgängerampel inkl. Taster auf dem Steckbrett und ergänze das Programm der Ampel (siehe oben) um die Zustände der Fußgängerampel.
    
    *Tipp:* Da der Taster jederzeit gedrückt werden kann, benötigt man eine Wahrheitswert-Variable `tasterGedrueckt`, die auf `wahr` gesetzt wird, wenn der Taster gedrückt wurde, damit sich das Drücken speichern lässt, bis es relevant wird. Die Abfrage `wenn Taster gedrückt` kann in jedem Zustand einzeln integriert werden oder nur einmal in der `wiederhole fortlaufend`-Schleife.

Rücklink (öffnet in neuem Tab): <a href="https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#taster" target="_blank">Taster</a>

*Idee: Materialien zum Kerncurriculum Informatik im Sekundarbereich I, Niedersächsisches Kultusministerium*
</div>

!!!! #### Endlicher Automat und Zustandsdiagramm
!!!! Ein **Automat** (auch: abstrakte Maschine) ist in der Informatik ein Modell zur Beschreibung einer Datenverarbeitung. Er befindet sich anfangs in seinem Startzustand. Abhängig von der nächsten Eingabe (z. B. das Ablaufen einer Zeit oder das Drücken eines Tasters) und des aktuellen Zustands erfolgt der Übergang in einen Folgezustand. Auch zu diesem gibt es wiederum einen Folgezustand, der abhängig von der nächsten Eingabe und dem aktuellen Zustand erreicht wird. Es kann einen oder mehrere Endzustände geben, die keinen Folgezustand haben, wenn der Ablauf des Automaten vollständig ausgeführt wurde. Wenn der Automat endlich viele Zustände hat, spricht man von einem **endlichen Automaten** (auch: Zustandsmaschine, Zustandsautomat, *engl. finite state machine*).
!!!! 
!!!! Ein **Zustandsdiagramm** veranschaulicht das Verhalten eines endlichen Automaten. Die Zustände werden mit einem Kreis oder abgerundeten Rechteck dargestellt. Die Übergänge werden mit Pfeilen dargestellt, an denen die Bedingung für den Übergang steht. Der Startzustand wird mit einem zusätzlichen Pfeil markiert, an den manchmal zusätzlich `start` geschrieben wird. Der ggf. vorhandene Endzustand wird durch einen doppelten Rahmen markiert.
!!!! ![Ein Zustandsdiagramm.](/images/zustandsdiagramm-schema.png?lightbox=1024&resize=400)

<div markdown="1" class="projekt">
#### Stoppuhr / Timer

1. Eine Stoppuhr besteht aus zwei Tastern und einem Display. Mit dem einen Taster kann die Zeitmessung gestartet bzw. fortgeführt und gestoppt bzw. pausiert werden. Mit dem anderen Taster wird die Zeit wieder auf null zurückgesetzt.

    <figure class="image-caption">
    <img src="/user/pages/images/stoppuhr-digital.jpg" alt="Digitale Stoppuhr" class="caption">
    <figcaption><a href="https://commons.wikimedia.org/wiki/File:Stoppuhr_digital.jpg">J. Lesselich</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons</figcaption>
    </figure>

	Zeichne ein Zustandsdiagramm für die Stoppuhr. Implementiere dann dein Modell.
    
    *Tipp:* Lege eine Variable für die Zeit an. Nutze die Zeitgeber-Blöcke, um diese Variable um 1 hochzuzählen, wenn (mehr als) 1000 Millisekunden vergangen sind.
    
    Rücklinks (öffnen in neuem Tab): <a href="https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#taster" target="_blank">Taster</a>, <a href="https://doku.el-voss.de/de/arduinoskript/bauteilkunde#liquid-crystal-display-lcd">LC-Display</a>

2. Entwickle ein Automatenmodell für einen Timer. Gehe dazu von einer Startzeit von 15 Sekunden aus.
    
    Zusatz: Ergänze eine Möglichkeit, um die Startzeit vom Anwender festlegen zu lassen.
</div>

<div markdown="1" class="projekt">
#### Parkplatzschranke

Auf einen Parkplatz kommt man häufig erst, wenn man einen Parkschein gezogen hat. Danach öffnet sich die Schranke und man kann auf den Parkplatz fahren. Die Schranke schließt sich automatisch wieder, nachdem das Auto hindurchgefahren ist. Beim Verlassen des Parkplatzes muss man wiederum zuerst den bezahlten Parkschein einlesen lassen, bevor sich die Schranke öffnet und automatisch wieder schließt, nachdem ein Auto hindurchgefahren ist.

![Parkplatzschranke](/images/parkplatzschranke.png?lightbox=1024&resize=700)

Das Verhalten der Parkplatzschranke soll auf dem Steckbrett simuliert werden. Dazu wird aus Pappe ein “Auto” geschnitten, das durch die mittlere Spalte des Steckbretts “fährt”.

1.  Erläutere, wie man die Kartenleser und das Durchfahren der Schranke mithilfe von zwei Tastern und zwei Lichtschranken simulieren kann. Notiere alle benötigten Bauteile.
2.  Baue die Parkplatzschranke mit allen benötigten Teilen auf dem Steckbrett auf.
3.  Entwickle ein Automatenmodell für die Parkplatzschranke. Überlege dazu, in welchen Zuständen sich die einzelnen Elemente beim Einfahren und beim Ausfahren befinden.
4.  Implementiere das Automatenmodell.

Rücklinks (öffnen in neuem Tab): <a href="https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#taster" target="_blank">Taster</a>, <a href="https://doku.el-voss.de/de/arduinoskript/bausteine-algorithmen#fotowiderstand" target="_blank">LDR</a>, <a href="https://doku.el-voss.de/de/arduinoskript/bauteilkunde#servo" target="_blank">Servo</a>

*Idee: Materialien zum Kerncurriculum Informatik im Sekundarbereich I, Niedersächsisches Kultusministerium*
</div>

## Steuern und Regeln

!!! Hier soll ein Abschnitt zum Thema "Steuern und Regeln" entstehen.

## Vermischte Übungen

<div markdown="1" class="aufgabe">
#### Aufzug

Mit dem Arduino soll ein einfacher Aufzug simuliert werden. Dieser verfügt über vier Taster: Zum Hochfahren, zum Herunterfahren, einen Panikknopf zum Anhalten/Pausieren und einen Taster, um die Fahrt nach einer Pause fortzusetzen. Zusätzlich gibt es oben und unten jeweils einen Endschalter, über den registriert wird, ob der Aufzug oben bzw. unten angekommen ist (siehe Skizze unten).

![Skizze des Aufzugs und der Taster](/images/aufzug-skizze.png?lightbox=1024&classes=caption "Skizze des Aufzugs und der Taster.")

In der folgenden Abbildung ist eine mögliche Implementierung des Aufzug-Verhaltens mit Hilfe eines Automaten-Modells dargestellt.

![Zustandsbasierte Modellierung eines Aufzugs.](/images/automat-aufzug.png?lightbox=1024&classes=caption "Zustandsbasierte Modellierung eines Aufzugs.")

1. Erkläre, warum manche Variablen groß geschrieben werden.
2. Entwickle ein Zustandsdiagramm zu dem Programm.
3. Kann der Aufzug während der Fahrt seine Richtung wechseln? Begründe deine Antwort.
4. Erkläre, was passiert, wenn der Panikknopf während der Fahrt gedrückt wird. Erkläre, welchen Vorteil diese Art der Programmierung gegenüber einem neuen Zustand "PAUSE" hat.

*Idee: nach [inf-schule.de](https://www.inf-schule.de/automaten-sprachen/zustandsmodellierung/zustandsmodellierung/aufzug)*
</div>

<div markdown="1" class="aufgabe">
#### Juke-Box mit vier Liedern

Am Arduino werden vier Taster und ein Summer angeschlossen, um eine kleine Juke-Box zu bauen. Die Juke-Box soll vier Lieder abspielen können, für die bereits vier Funktionen angelegt wurden: `spiele Lied1`, `spiele Lied2`, `spiele Lied3`, `spiele Lied4`.

Die Taster haben folgende Funktionen:
- NT: Nächstes-Taste springt ein Lied vor und spielt es ab,
- ZT: Zurück-Taste springt ein Lied zurück und spielt es ab,
- ST: Stop-Taste stoppt das Abspielen eines Liedes und setzt die Juke-Box zurück in den Start-Zustand.

1. Entwickle ein Zustandsdiagramm für die Juke-Box. Erkläre, wie dein Automat mit dem Drücken der Taste NT umgeht, wenn Lied 4 abgespielt wird.
2. Entwickle ein Programm zur Implementierung des Juke-Box-Automaten. Stelle es als Struktogramm dar.
3. Für Profis: Es soll ein Taster PT (Play-Taste) ergänzt werden, die vom Start-Zustand zum zuletzt abgespielten Lied springt und dieses abspielt. Ergänze dieses Verhalten im Zustandsdiagramm und erkläre, wie es sich im Programm ergänzen lässt.
</div>

<div markdown="1" class="aufgabe">
#### Ein Verkaufsautomat

Auf Youtube gibt es zahlreiche Tutorials zum Bau eines Verkaufsautomaten (engl. *vending machine*) mit dem Arduino. Das folgende Video zeigt einen Automaten mit eingebauter Münzenerkennung.

<div class="video">
  <iframe
    class="video__iframe"
    data-src="https://www.youtube-nocookie.com/embed/DO3AciBz_-A?start=321"
    frameborder="0"
    allowfullscreen="allowfullscreen"
  ></iframe>
  <form class="video__notice">
    <p>
      An dieser Stelle ist ein Video von Youtube eingebettet. Mit deiner Erlaubnis willigst du ein, dass deine Daten an YouTube in den USA übermittelt werden. Weitere Informationen zur Datenverarbeitung von YouTube findest du in der <a href="https://policies.google.com/privacy?hl=de">Datenschutzerklärung von YouTube</a>.
    </p>
    <button>Erlaube Inhalte von YouTube</button>
  </form>
</div>

Im Folgenden sind bereits die Zustände ergänzt, die sich größtenteils direkt dem Video entnehmen lassen. Auf die Zustände für die Ausgabe der drei nicht lesbaren Süßigkeiten kann verzichtet werden.

Ergänze alle Zustandsübergänge und ihre jeweilige Bedingung.

![Vorlage für die Zustände eines Verkaufsautomaten.](/images/verkaufsautomat-zustandsdiagramm.png?classes=caption "Vorlage für das Zustandsdiagramm eines Verkaufsautomaten.")

*Hinweis:* Die Vorlage für das Zustandsdiagramm mit den oben abgebildeten Zuständen ist mit [Excalidraw](https://excalidraw.com) erstellt.
</div>

! #### Motivationsquellen
! [Cocktail Mixer](https://www.instructables.com/id/6-Shooter-Arduino-Drink-Mixing-Station/): Dieser Automat mixt automatisch einen aus sechs wählbaren Drinks!
! [Roboterhand](https://blog.arduino.cc/2014/07/17/a-low-cost-robotic-hand-tutorial-mirroring-your-own-fingers/): Mit diesem Aufbau wird die eigene Hand auf eine Roboterhand gespiegelt, wodurch sich der Roboter viel besser steuern lässt.
! [One | Aerospace](http://oneaerospace.com/index.html): Diese Gruppe von Studenten versucht u. a. mit Hilfe eines Arduino eine Rakete zu bauen!
! [Ziegen-Tracker](https://www.heise.de/make/meldung/Elektronikbasteleien-von-der-Farm-Ziegen-mit-GPS-auf-der-Spur-4340346.html): Mit dieser Kombination aus Arduino und GPS-Antenne wird es Ziegen unmöglich von ihrer Farm auszubrechen.

