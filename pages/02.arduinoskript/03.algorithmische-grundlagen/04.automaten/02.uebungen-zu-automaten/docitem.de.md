---
title: 'Übungen zu Automaten'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: verkaufsautomat-zustandsdiagramm.png
---

<div markdown="1" class="aufgabe">
#### Aufzug

Mit dem Arduino soll ein einfacher Aufzug simuliert werden. Dieser verfügt über vier Taster: Zum Hochfahren, zum Herunterfahren, einen Panikknopf zum Anhalten/Pausieren und einen Taster, um die Fahrt nach einer Pause fortzusetzen. Zusätzlich gibt es oben und unten jeweils einen Endschalter, über den registriert wird, ob der Aufzug oben bzw. unten angekommen ist (siehe Skizze unten).

![Skizze des Aufzugs und der Taster](aufzug-skizze.png?lightbox=1024&classes=caption "Skizze des Aufzugs und der Taster.")

In der folgenden Abbildung ist eine mögliche Implementierung des Aufzug-Verhaltens mit Hilfe eines Automaten-Modells dargestellt.

![Zustandsbasierte Modellierung eines Aufzugs.](automat-aufzug.png?lightbox=1024&classes=caption "Zustandsbasierte Modellierung eines Aufzugs.")

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

![Vorlage für die Zustände eines Verkaufsautomaten.](verkaufsautomat-zustandsdiagramm.png?classes=caption "Vorlage für das Zustandsdiagramm eines Verkaufsautomaten.")

*Hinweis:* Die Vorlage für das Zustandsdiagramm mit den oben abgebildeten Zuständen ist mit [Excalidraw](https://excalidraw.com) erstellt.
</div>

! #### Motivationsquellen
! [Cocktail Mixer](https://www.instructables.com/id/6-Shooter-Arduino-Drink-Mixing-Station/): Dieser Automat mixt automatisch einen aus sechs wählbaren Drinks!
! [Roboterhand](https://blog.arduino.cc/2014/07/17/a-low-cost-robotic-hand-tutorial-mirroring-your-own-fingers/): Mit diesem Aufbau wird die eigene Hand auf eine Roboterhand gespiegelt, wodurch sich der Roboter viel besser steuern lässt.
! [One | Aerospace](http://oneaerospace.com/index.html): Diese Gruppe von Studenten versucht u. a. mit Hilfe eines Arduino eine Rakete zu bauen!
! [Ziegen-Tracker](https://www.heise.de/make/meldung/Elektronikbasteleien-von-der-Farm-Ziegen-mit-GPS-auf-der-Spur-4340346.html): Mit dieser Kombination aus Arduino und GPS-Antenne wird es Ziegen unmöglich von ihrer Farm auszubrechen.
