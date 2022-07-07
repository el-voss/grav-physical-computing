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

