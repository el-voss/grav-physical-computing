---
title: Schrittmotor
featured_image: schrittmotor.jpg
show_pageimage: true
image_width: 300
image_height: 300
---

<div markdown="1" class="clearfix">
![Schrittmotor mit Motortreiber ULN2003.](schrittmotor.jpg?resize=250&classes=caption,figure-right "Schrittmotor mit Motortreiber ULN2003.")
Während ein Servo darauf ausgelegt ist, einen Winkel möglichst präzise anzusteuern, dient ein Schrittmotor dazu, möglichst präzise Drehungen zu realisieren. Damit können zum Beispiel 3D-Drucker oder Roboterarme, aber auch DVD-Laufwerke sehr genau gesteuert werden.

Herzstück des Motors sind zwei Spulen, die jeweils in der Mitte durch eine 5 V-Spannungsversorgung in zwei Teile geteilt werden. Weil der Pol mit dem positiven 5 V-Potential dadurch festgelegt ist und nicht flexibel an beiden Enden angelegt werden kann, nennt man den Motor auch *unipolaren* Schrittmotor.
</div>

<div class="flex-box">
<div markdown="1">![Innenansicht eines Schrittmotors.](schrittmotor-innen.jpg?lightbox=1024&resize=300&classes=caption "Innenansicht eines Schrittmotors.")</div>
<div markdown="1">![Sicht auf Permanentmagnet mit Zahnrad in den Spulen.](schrittmotor-innen-auseinander.jpg?lightbox=1024&resize=300&classes=caption "Sicht auf Permanentmagnet mit Zahnrad in den Spulen.")</div>
<div markdown="1">![Schaltplan zu den Spulen.](schaltplan-schrittmotor-innen.png?lightbox=1024&resize=300&classes=caption "Schaltplan zu den Spulen.")</div>
</div>

In der Mitte der Spulen befindet sich ein Permanentmagnet, an dessen Ende ein Zahnrad angebracht ist, das wiederum weitere Zahnräder in Bewegung versetzt. Die Spulen werden nun abwechselnd an und aus geschaltet und wirken dabei als Elektromagnet. Durch die wechselnde Anziehung und Abstoßung des Permanentmagneten in der Mitte beginnt dieser, sich zu drehen. Für das Ein- und Ausschalten der Spulen wird ein Motortreiber genutzt, der den Arduino vor zu hohen und rückläufigen Strömen schützt (vgl. den Abschnitt [Elektromotoren mit dem Motortreiber-IC L293D steuern](https://doku.el-voss.de/de/arduinoskript/elektrik/transistoren-motoren#elektromotoren-mit-dem...)). Aufgrund der Stromaufnahme von ca. $240 \, mA$ ist es empfehlenswert, eine externe Spannungsversorgung am Motortreiber anzuschließen (zum Beispiel mit Hilfe des [*Power Supply Module*](https://doku.el-voss.de/de/arduinoskript/elektrik/transistoren-motoren#das-power-supply-module) - denke an die gemeinsame Erdung mit dem Arduino!). Da die Spulen auch beim Halten der Position dauerhaft unter Strom stehen müssen, ist der Stromverbrauch konstant hoch.

![Anschluss des Schrittmotors an den Motortreiber ULN2003 und den Arduino mit externer Spannungsquelle.](schaltplan-schrittmotor-anschluss.png?lightbox=1024&resize=600&classes=caption "Anschluss des Schrittmotors an den Motortreiber ULN2003 und den Arduino mit externer Spannungsquelle.")

Die korrekte Reihenfolge des Ein- und Ausschaltens der Spulen ist bereits in Nepo implementiert, sodass die Steuerung sich einfach bewerkstelligen lässt. Es ist aber wichtig zu verstehen, dass jede Spuleneinstellung den Permanentmagneten in der Mitte dazu bringt, sich um einen kleinen Winkel zu drehen. Dieser Winkel wird auch Schritt genannt und dies gibt dem Schrittmotor seinen Namen. Dieser Schritt oder Winkel ist auch die kleinste Schrittweite, die der Motor ansteuern kann und gibt somit die Präzision des Motors an. Beim hier verwendeten Modell 28BYJ-48 beträgt der Schrittwinkel $5,625°$ (vgl. [Datenblatt](https://components101.com/motors/28byj-48-stepper-motor)), woraus sich ergibt, dass der Motor 64 Schritte für eine Umdrehung benötigt. Durch die eingebauten Zahnräder wird die Drehung des Schafts aber weiter verlangsamt, sodass ein Motorschritt nur einer Schaftdrehung von etwa $0,176°$ (1/32 der Motorschrittweite) entspricht. Dies bedeutet, dass der Motor 2048 Schritte für eine Umdrehung braucht. Wenn du in den textbasierten Quellcode von Nepo schaust, nachdem du einen Schrittmotor konfiguriert hast, wirst du diese Zahl wiederfinden!

![Steuerung eines Schrittmotors im Open Roberta Lab.](schrittmotor-steuerung.png?classes=caption "Steuerung eines Schrittmotors im Open Roberta Lab.")

In Nepo lässt sich einfach angeben, mit welcher Geschwindigkeit (in Umdrehungen pro Minute, engl. *revolutions per minute, rpm*) und um wie viele Umdrehungen sich der Schaft drehen soll. Alternativ kann angegeben werden, um wie viel Grad sich der Schaft drehen soll.

<div markdown="1" class="projekt">
#### Sekundenzeiger

Programmiere einen möglichst präzisen Sekundenzeiger. Überprüfe ihn mit der Stoppuhr deines Smartphones.

Tipp: Nutze Klebeband, um eine kleine Fahne als Zeiger zu basteln.
</div>

! *Für Interessierte: Die Funktionsweise eines Schrittmotors*
! <div class="video">
!  <iframe
!    class="video__iframe"
!    data-src="https://www.youtube-nocookie.com/embed/Vtbd80FksuM"
!    frameborder="0"
!    allowfullscreen="allowfullscreen"
!  ></iframe>
!  <form class="video__notice">
!    <p>
!      An dieser Stelle ist ein Video von Youtube eingebettet. Mit deiner Erlaubnis willigst du ein, dass 
!      deine Daten an YouTube in den USA übermittelt werden. Weitere Informationen zur Datenverarbeitung von YouTube findest
!      du in der <a href="https://policies.google.com/privacy?hl=de">Datenschutzerklärung von YouTube</a>.
!    </p>
!    <button>Erlaube Inhalte von YouTube</button>
!  </form>
!</div>