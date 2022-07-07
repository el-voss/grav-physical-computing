---
title: 'Elektrische Grundlagen zu digitalen und analogen Pins'
menu: 'Elektrische Grundlagen'
taxonomy:
    category:
        - docs
---

# Elektrische Grundlagen zu digitalen und analogen Pins

<style>
    h1 {
  		counter-set: h1 4 ;
	}
</style>

In der Arduino-Welt kommt man bereits sehr weit, wenn man die vorkonfigurierten Bauteile nach Anleitung anschließt und dann mit dem Programmieren loslegt. Allerdings kann man manche Schaltungen auch effizienter aufbauen oder anders herum anschließen oder aus den Sensorwerten mehr als nur qualitative Prozentwerte ermitteln, deren genaue Bedeutung völlig unklar ist. Um dies zu erreichen, muss man die physikalischen Grundlagen der Arduino-Pins und einiger grundlegender Bausteine von elektrischen Schaltungen verstehen, die im Folgenden thematisiert werden.

!!! Hinweis: Falls dieses Skript für einen reinen Informatikunterricht genutzt werden soll, kann dieses Kapitel übersprungen werden.

In diesem Kapitel lernst du…

  - …Widerstand, Spannung und Stromstärke im Stromkreis zu berechnen,
  - …das elektrische Potential an einem digitalen Pin einzulesen,
  - …Pulsweitenmodulation zu benutzen,
  - …Spannungen zu messen und Spannungen an einem Spannungsteiler zu berechnen,
  - …ein Potentiometer, einen LDR sowie einen NTC auszulesen, um eine Drehung, die Umgebungshelligkeit bzw. die Temperatur zu messen,
  - …wie Transistoren verwendet werden,
  - …wie man einen Elektromotor steuert,

<div class="flex-box">
    <div class="overview-card">
    <p markdown="1">[Aktoren](./aktoren/)</p>
    <ul>
        <li markdown="1">[Servo](./aktoren/#servo)</li>
        <li markdown="1">[Schrittmotor](./aktoren/#schrittmotor)</li>
        <li markdown="1">[Liquid Crystal Display (LCD)](./aktoren/#liquid-crystal-display-lcd)</li>
        <li markdown="1">[Oled-Display SSD1306](./aktoren/#oled-display-ssd1306)</li>
    </ul>
    </div>
    <div class="overview-card">
    <p markdown="1">[Sensoren](./sensoren/)</p>
    <ul>
        <li markdown="1">[Neigungsschalter](./sensoren/#neigungsschalter)</li>
        <li markdown="1">[Bewegungsmelder](./sensoren/#bewegungsmelder)</li>
        <li markdown="1">[Joystick](./sensoren/#joystick)</li>
        <li markdown="1">[Infrarot-Sensor mit Fernbedienung](./sensoren/#infrarot-sensor-mit...)</li>
        <li markdown="1">[Temperatur- und Luftfeuchtigkeitssensor DHT-11](./sensoren/#temperatur-und...)</li>
        <li markdown="1">[Temperatursensor TMP36](./sensoren/#temperatursensor-tmp36)</li>
        <li markdown="1">[Tropfensensor und Feuchtigkeitssensor](./sensoren/#tropfensensor-und...)</li>
        <li markdown="1">[Pulssensor](./sensoren/#pulssensor)</li>
        <li markdown="1">[Ultraschallsensor](./sensoren/#ultraschallsensor)</li>
        <li markdown="1">[RFID](./sensoren/#rfid)</li>
        <li markdown="1">[Analoger Hall-Sensor (Magnetfeldsensor)](./sensoren/#analoger-hall-sensor...)</li>
        <li markdown="1">[Digitaler Hall-Sensor (Magnetfeldsensor)](./sensoren/#digitaler-hall-sensor...)</li>
    </ul>
    </div>
    <div class="overview-card">
    <p markdown="1">[Projektarbeit](./projektarbeit/)</p>
        <em>Werde kreativ und entwickle ein eigenes Projekt!</em>
    </div>
</div>
