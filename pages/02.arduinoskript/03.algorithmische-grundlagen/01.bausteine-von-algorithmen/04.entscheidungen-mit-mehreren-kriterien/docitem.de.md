---
title: 'Entscheidungen mit mehreren Kriterien'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: wenn-sonstWenn-sonst-Bsp.png
---

Bisher waren die zu treffenden Entscheidungen immer nur von einem Kriterium abhängig. Das sind jedoch Ausnahmen. Nun geht es darum, wie man mehrere Kriterien miteinander kombinieren kann.

**Frage:** Wie lassen sich Entscheidungen mit mehreren Kriterien programmieren?

<div markdown="1" class="projekt"> 
#### Carport-Lampe

Baue und programmiere eine Carport-Lampe, die für einige Zeit leuchtet, wenn sie eine Bewegung registriert *und* es draußen gerade dunkel ist. In allen anderen Fällen bleibt die Lampe dunkel. Experimentiere mit den Drehreglern, um die Empfindlichkeit und Dauer des Signals richtig einzustellen.
</div>

*Information zu Bewegungsmeldern:* Bewegungsmelder verfügen über drei Pins, deren Beschriftung man lesen kann, wenn man die Kunststofflinse vorsichtig abzieht (*Vorsicht: Nach Abziehen der Linse nicht den Sensor berühren!*). `Vcc` und `GND` dienen der Stromversorgung der elektronischen Komponenten und müssen mit `5V` und `GND` am Arduino verbunden werden.

Der mittlere `OUT`-Pin ist der Signal-Pin: Wenn eine Bewegung registriert wurde, wird der Wert `wahr` zurückgegeben, ansonsten `falsch`. Zum Einlesen des Signals wird dieser Pin mit einem Digitalpin des Arduino verbunden.

Hinten befinden sich zwei Drehregler (“Potentiometer”), mit denen sich die Dauer des Bewegungssignals (links) und die Empfindlichkeit (rechts) einstellen lassen. Zusätzlich befindet sich auf der rechten Seite ein sogenannter Jumper, mit dem auf einfache Weise eine Steckverbindung zwischen benachbarten Pins hergestellt werden kann. Wenn sich der Jumper ganz außen befindet, dann bleibt das Bewegungssignal nach dem Erkennen einer Bewegung eine Weile aktiv und wird dann auf jeden Fall deaktiviert. Eine neue Bewegung kann erst nach einer gewissen Zeit wieder registriert werden. Wenn der Jumper hingegen leicht nach innen versetzt ist, bleibt das Bewegungssignal so lange erhalten, wie eine Bewegung erkannt wird (siehe [Funduino](https://funduino.de/nr-8-bewegungsmelder)).

<div markdown="1" class="flex-box">
<div markdown="1"> ![Bewegungsmelder mit Linse.](bewegungsmelder.jpg?resize=200&classes=caption "Bewegungsmelder mit Linse.")</div>
<div markdown="1"> ![Pinbelegung.](bewegungsmelder-ohne-linse.jpg?resize=200&classes=caption "Pinbelegung.")</div>
<div markdown="1"> ![Drehregler für Signaldauer (links) und Empfindlichkeit (rechts).](bewegungsmelder-hinten.jpg?resize=200&classes=caption "Drehregler für die Signaldauer (links) und Empfindlichkeit (rechts).")</div>
</div>

<div markdown="1" class="aufgabe"> 
#### Wahrheitswerttabellen

1.  Experimentiere mit der Carport-Lampe, um die folgende Wahrheitswert-Tabelle für die Operation UND auszufüllen.

    A: Bewegung registriert.

    B: Es ist dunkel.

      |**A** | **B** | **A UND B** |
      |------|-------|-------------|
      | wahr | wahr  |             |
      |falsch| wahr  |             |
      | ...  |  ...  |             | 

2.  Ändere das UND zu einem ODER und experimentiere wieder mit der Carport-Lampe, um die folgende Wahrheitswert-Tabelle für die Operation ODER auszufüllen.

    A: Bewegung registriert.

    B: Es ist dunkel.

      |**A** | **B** | **A ODER B** |
      |------|-------|--------------|
      | wahr | wahr  |              |
      | ...  | ...   |              |

3.  Ergänze die Wahrheitswerttabelle für die logische Operation NICHT.

      |**A**  | **NICHT A** |
      |-------|-------------|
      | wahr  |             |
      |falsch |             | 
</div>


!!!! #### Logische Operationen und Wahrheitswerttabellen
!!!!
!!!! Logische Operationen dienen zum Verknüpfen von Wahrheitswerten - ganz so wie Rechenoperationen zum Verknüpfen von Zahlen dienen. Wir betrachten die logischen Operationen UND (AND), ODER (OR) sowie NICHT (NOT). Das Ergebnis dieser Operationen lässt sich anhand von Wahrheitswerttabellen übersichtlich festhalten. Darin wird festgehalten, ob zwei Aussagen bzw. Bedingungen A und B wahr (w) oder falsch (f) sind. In der rechten Spalte steht dann, ob die logische Operation wahr (w) oder falsch (f) ergibt.
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1" style="padding:1em;">
!!!!  |**A** | **B** | **A UND B** |
!!!!  |------|-------|-------------|
!!!!  |  w   |   w   |      w      |
!!!!  |  w   |   f   |      f      |
!!!!  |  f   |   w   |      f      |
!!!!  |  f   |   f   |      f      |
!!!! </div>
!!!! 
!!!! <div markdown="1" style="padding:1em;">
!!!!  |**A** | **B** | **A ODER B** |
!!!!  |------|-------|--------------|
!!!!  |  w   |   w   |      w       |
!!!!  |  w   |   f   |      w       |
!!!!  |  f   |   w   |      w       |
!!!!  |  f   |   f   |      f       |
!!!! </div>
!!!! 
!!!! <div markdown="1" style="padding:1em;">
!!!!  |**A** | **NICHT A** |
!!!!  |------|-------------|
!!!!  |  w   |      f      |
!!!!  |  f   |      w      |
!!!! </div>
!!!! </div>
!!!! Achtung: Die ODER-Operation ergibt auch dann “wahr”, wenn beide Aussagen wahr sind. Das aus dem Alltag bekannte “ENTWEDER-ODER” (XOR) ist eine weitere logische Operation, die “falsch” ergibt, wenn beide Aussagen wahr sind. Diese Operation ist aber nicht in Nepo enthalten.


<div markdown="1" class="aufgabe"> 
#### Verschachtelte Entscheidungen?!

Leo und Lara möchten ihre Carport-Lampe so umprogrammieren, dass sie nachts immer leuchtet und tagsüber nicht. Zusätzlich soll ein Alarm ertönen, wenn es Nacht ist und eine Bewegung registriert wird.

Unten sind ihre Programme abgebildet. Entscheide jeweils (begründet!), ob das Programm für das geforderte Verhalten geeignet ist. Mache gegebenenfalls Verbesserungsvorschläge.

![Leos Programm.](wenn-sonstWenn-sonst-Bsp.png?lightbox=1024&classes=caption "Leos Programm.")
![Laras Programm.](wenn-sonstWenn-sonst-Bsp2.png?lightbox=1024&classes=caption "Laras Programm.")
</div>
