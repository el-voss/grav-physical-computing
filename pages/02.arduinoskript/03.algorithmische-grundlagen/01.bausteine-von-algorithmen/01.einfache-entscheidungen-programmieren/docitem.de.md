---
title: 'Einfache Entscheidungen programmieren'
show_pageimage: true
image_width: 300
image_height: 400
featured_image: fallunterscheidung-kartenbild.png
taxonomy:
    Mindestvoraussetzungen:
        - 'Kurze Einführung'
    Inhalte:
        - Fallunterscheidungen
        - Taster
        - Piezo-Summer
    Niveau:
        - Basis
---

Schaltungen und Programme werden erst dann richtig interessant, wenn sie auf ihre Umwelt reagieren. Im einfachsten Fall lässt sich dazu ein Taster einbauen, mit dem sich von außen entscheiden lässt, wie das Programm weiterlaufen soll. Dementsprechend müssen im Programm *Fallunterscheidungen* eingebaut werden.

**Ziel:** Der Arduino soll auf Eingaben aus seiner Umwelt reagieren.

<div markdown="1" class="projekt clearfix">
#### Fußgängerampel

![Fallunterscheidung](wenn-mache-sonst.png?classes=caption,figure-right "Fallunterscheidung.")

Baue und programmiere eine Fußgängerampel! Nutze dazu die Informationen aus dem Info-Kasten zum Taster.

*Erweiterung für Schnelle:* Ergänze einen Piezo-Summer, der während der Grünphase tickt, damit auch Sehbehinderte wissen, wann sie passieren dürfen. Nutze dazu dei Informationen zum Piezo-Summer weiter unten auf der Seite.
</div>

!!!! #### Taster
!!!!
!!!! Ein Taster ist wie ein Schalter, kann also geschlossen sein (Strom fließt) oder offen sein (Strom fließt nicht). Im Gegensatz zum Schalter springt ein Taster aber automatisch wieder in den offenen Zustand zurück, wenn er losgelassen wird.
!!!!
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1">![Taster.](taster.jpg?resize=200&classes=caption "Taster.")</div>
!!!! <div markdown="1">![Schaltsymbol eines Tasters.](taster-schaltsymbol.png?resize=200&classes=caption "Schaltsymbol eines Tasters.")</div>
!!!! </div>

Im folgenden Schaltplan ist dargestellt, wie man einen Taster am Arduino so anschließt, dass man seinen Zustand im digitalen Pin 3 auslesen kann. Dazu ist die zugehörige Taster-Konfiguration in Nepo (im Open Roberta Lab) abgebildet.

<div markdown="1" class="flex-box">
<div markdown="1">![Konfiguration in Nepo.](tasterkonfiguration.png?resize=200&classes=caption "Konfiguration in Nepo.")</div>
<div markdown="1">![Symbolischer Schaltplan: Taster am Arduino.](taster-an-arduino.png?lightbox=1024&resize=500&classes=caption "Symbolischer Schaltplan: Taster am Arduino.")</div>
<div markdown="1">![Ikonischer Schaltplan: Taster am Arduino.](taster-an-arduino-steckplatine.png?lightbox=1024&resize=500&classes=caption "Ikonischer Schaltplan: Taster am Arduino.")</div>
</div>


<div markdown="1" class="projekt">
#### Juke-Box

Baue und programmiere eine Juke-Box!

<div markdown="1" class="flex-box">
<div markdown="1"> ![Konfiguration des Piezo in Nepo](piezokonfiguration.png?classes=caption "Konfiguration des Piezo in Nepo") </div>
<div markdown="1"> ![Steuerung des Piezo](piezo-steuerung.png?classes=caption "Steuerung des Piezo.")</div>
</div>

Die Juke-Box soll zwei verschiedene, kurze Melodien *anspielen* können. Dazu werden zwei Taster auf die beschriebene Art an zwei digitale Pins des Arduino angeschlossen. Schließe zudem an einen Digitalpin einen Piezo-Summer an (siehe unten).

*Idee: Frick, Fritsch und Trick (2015): *Einführung in Mikrocontroller - Der Arduino als Steuerzentrale*, Schülerforschungszentrum Bad Saulgau*

*Hinweise:*

Zwei mögliche Beispiele von Melodien mit Link zu den Noten:

-   [“Alle meine Entchen”](https://www.lieder-archiv.de/alle_meine_entchen-notenblatt_100055.html),
-   [“Oh Tannenbaum”](https://www.lieder-archiv.de/o_tannenbaum-notenblatt_200078.html).

*Frequenzen in Hertz zu den Noten:*

<div markdown="1" style="overflow:auto;">
  | $c^1$ | $cis^1/des^1$ | $d^1$ | $dis^1/es^1$ | $e^1$ | $f^1$ | $fis^1/ges^1$ | $g^1$ | $gis^1/as^1$ | $a^1$ | $ais^1/b^1$ | $h^1$ |
  |-------|---------------|-------|--------------|-------|-------|---------------|-------|--------------|-------|-------------|-------|
  | 262   |     277       | 294   |    311       | 330   | 349   |     370       | 392   |    415       | 440   |   466       | 494   |
</div>
</div>


!!!! #### Piezo-Summer
!!!!
!!!! Mit einem Piezo-Summer lassen sich Töne erzeugen, wenn man eine Spannung anschließt. Das lange Bein muss dabei an den Pluspol (Pin) angeschlossen werden; das kurze an den Minuspol bzw. GND. Ein Vorwiderstand ist dabei nicht notwendig, hilft aber die Lautstärke zu reduzieren.
!!!! <div markdown="1" class="flex-box">
!!!! <div markdown="1"> ![Piezo-Summer.](piezo-summer.jpg?resize=200&classes=caption "Piezo-Summer")</div>
!!!! <div markdown="1"> ![Schaltsymbol eines Piezo.](piezo-schaltsymbol.png?resize=200&classes=caption "Schaltsymbol eines Piezo.") </div>
!!!! </div>
!!!!
!!!! *Funktionsweise:*
!!!! 
!!!! In einem Piezo-Summer befindet sich ein Kristall mit unterschiedlichen Ladungsschwerpunkten, der von einem Kondensator umgeben ist. Wenn von außen an den Kristall eine Spannung angelegt wird, dann verformt sich die Kristallstruktur durch die Anziehung zwischen den Ladungsschwerpunkten und den Kondensatorplatten (*[inverser piezo-elektrischer Effekt](https://de.wikipedia.org/wiki/Piezoelektrizit%C3%A4t)*). Wenn keine Spannung anliegt, verformt sich der Kristall zurück. Durch diese Verformungen entstehen Druckwellen in der Luft, die wir als Ton wahrnehmen können.
!!!! ![Funktionsprinzip eines Piezo-Summers.](inverser-piezo-effekt.png?classes=caption "Funktionsprinzip des Piezo-Summers: Der inverse piezo-elektrische Effekt.")
