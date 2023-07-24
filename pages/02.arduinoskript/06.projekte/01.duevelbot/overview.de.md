---
title: Düvelbot
media_order: 'getriebemotor-n20.jpg,3_duevelbot-ultraschallsensor.png,clip-mit-offenen-kontakten.jpg,9v-block.jpg,clip-mit-zylinderstecker.jpg,kabel.jpg,display-ssd1306.jpg,infrarot-sensoren.jpg,seitenhaenger.jpg,ultraschallsensor.jpg,summer.jpg,raeder.jpg,l298n-front.jpg,arduino-uno.jpg,expansion-board.jpg,slider.jpg,anhaenger.jpg,chassis.jpg,duevelbot-batteriehaenger.zip,duevelbot-chassis.zip,duevelbot-seitenhaenger.zip,duevelbot-slider.zip,l298n-oben.jpg,Anleitung01.jpg,Anleitung02.jpg,Anleitung03.jpg,Anleitung04.jpg,Anleitung05.jpg,Anleitung06.jpg,Anleitung07.jpg,Anleitung08.jpg,Anleitung09.jpg,Anleitung10.jpg,Anleitung11.jpg,Anleitung12.jpg,Anleitung15.jpg,Anleitung16.jpg,Anleitung17.jpg,Anleitung18.jpg,Anleitung19.jpg,Anleitung13.jpg,Anleitung14.jpg,1_duevelbot.png,2_duevelbot-motoren_und_piezo-summer.png,4_duevelbot-ir-sensoren_und_oled-display.png,Anleitung09a-jumper-entfernen.png,l298n-erklaerung.png,l298n-flussdiagramm-bsp.png,fkt-vorwaertsFahren.png,fkt-stoppe.png,fkt-rueckwaertsFahren.png,fkt-fahreVorwaertsKurve.png,fkt-fahre.png,duevelbot-fertig.jpg,Anleitung25.jpg,Anleitung24-Anmerkung.png,Anleitung23-Anmerkung.png,Anleitung22.jpg,Anleitung21.jpg,Anleitung20.jpg,prog-fahre-start.png'
menu: '[D] Düvelbot'
content:
    items:
        - '@self.children'
    limit: 30
    order:
        by: folder
        dir: asc
    pagination: false
    url_taxonomy_filters: false
---

Der Düvelbot ist ein kleiner fahrender Roboter auf Arduino-Basis, der über einen Ultraschallsensor zur Entfernungsmessung und Hindernisvermeidung sowie zwei Infrarot-Sensoren zur Linienverfolgung verfügt. Zusätzlich wird ein Display angebracht, um wichtige Informationen darzustellen, und er kann Töne abgeben. Durch die offene Architektur und die Verwendung von Standard-Arduino-Bauteilen sind einige Erweiterungen denkbar. 

![duevelbot-fertig](duevelbot-fertig.jpg?lightbox=1024&resize=600&classes=caption "Fertig aufgebauter Düvelbot.")

! Der Düvelbot geht zurück auf eine Idee von Marco Düvelmeyer, der auf seinem [Youtube-Kanal Technikwerkstatt 4.0](https://www.youtube.com/@Technikwerkstatt4.0) Tutorials rund um Arduino, 3D-Druck, CAD-Software und mehr für seinen Profilunterricht anbietet. Die Entwicklungsarbeit hat das Unternehmen [Funduino](https://funduino.de/) übernommen, das den Düvelbot auch [zum Kauf anbietet](https://funduinoshop.com/projekte/arduino-und-3d-druck/duevelbot/funduino-duevelbot). Dort gibt es auch eine [Montageanleitung für den Düvelbot](https://funduino.de/funduino-duevelbot). Für dieses Skript wurde der Düvelbot jedoch in einigen Bestandteilen angepasst und erweitert, daher findet sich hier eine eigene Anleitung mit einigen Anpassungen.




