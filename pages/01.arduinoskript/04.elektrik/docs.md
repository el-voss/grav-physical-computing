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
    <p markdown="1">[Digitale und analoge Pins](./digitale-analoge-pins/)</p>
    <ul>
        <li markdown="1">[Spannung, Stromstärke und Widerstand berechnen](./digitale-analoge-pins#spannung-stromstrke-und...)</li>
        <li markdown="1">[Das elektrische Potential](./digitale-analoge-pins#das-elektrische-potential)</li>
        <li markdown="1">[Pulsweitenmodulation](./digitale-analoge-pins#pulsweitenmodulation)</li>
        <li markdown="1">[Spannung messen](./digitale-analoge-pins#spannung-messen)</li>
    </ul>
    </div>
    <div class="overview-card">
    <p markdown="1">[Anwendungen der Spannungsmessung](./anwendungen-spannungsmessung)</p>
    <ul>
        <li markdown="1">[Drehregler verwenden](./anwendungen-spannungsmessung#drehregler-verwenden)</li>
        <li markdown="1">[Helligkeit messen](./anwendungen-spannungsmessung#helligkeit-messen)</li>
        <li markdown="1">[Temperatur messen](./anwendungen-spannungsmessung#temperatur-messen)</li>
    </ul>
    </div>
    <div class="overview-card">
    <p markdown="1">[Transistoren und Motoren](./transistoren-motoren/)</p>
        <li markdown="1">[Schaltungen mit Transistoren steuern](./transistoren-motoren#schaltungen-mit-transistoren...)</li>
        <li markdown="1">[Elektromotor und Diode](./transistoren-motoren#elektromotor-und-diode)</li>
        <li markdown="1">[Elektromotor mit Transistor steuern](./transistoren-motoren#elektromotor-mit-transistor...)</li>
        <li markdown="1">[Elektromotor mit Relais steuern](./transistoren-motoren#elektromotor-mit-relais-steuern)</li>
        <li markdown="1">[Elektromotor mit Motortreiber steuern](./transistoren-motoren#elektromotoren-mit-dem...)</li>
    </div>
</div>
