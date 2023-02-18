---
title: 'Übungen und Ausblick'
---

# Bausteine von Algorithmen Teil 5: Vermischte Übungen und Ausblick

<style>
    body {
        --abk: 'BA-U';
    }
</style>

[TOC]

## Vermischte Übungen

<div markdown="1" class="aufgabe">
#### Konfigurierbares Blinken

Am Arduino ist ein Taster und eine LED angeschlossen. Die LED soll zunächst jeweils eine Sekunde lang an sein und eine Sekunde aus. Mit dem Taster lässt sich die Zeit jedoch mit jedem Drücken um 100ms verringern. Wenn die Zeit dabei auf 200ms gestellt wird, wird sie stattdessen wieder auf 2000ms hochgesetzt.

1.  Zeichne einen Schaltplan und benenne die Größe der jeweils notwendigen Widerstände.
2.  Entwickle ein Programm nach den beschriebenen Anforderungen und stelle es als Struktogramm dar.
</div>

<div markdown="1" class="aufgabe">
#### Hörbare Helligkeit

Am Arduino wird ein LDR und ein Piezo-Summer angebracht.

1.  Beschreibe mit einem Je-Desto-Satz das Verhalten des Widerstands des LDR, wenn es dunkel wird.
2.  Die Helligkeit wird mit einem Prozentwert zwischen 0 und 100 gemessen. Entwickle mit den unten abgebildeten Blöcken ein Programm, dass die Helligkeit in eine Tonhöhe zwischen 300Hz und 600Hz  übersetzt und diesen Ton ausgibt. Stelle das Programm als Struktogramm dar.

![Blöcke zum Programmieren der Aufgabe “Hörbare Helligkeit”. Es können alle Blöcke genutzt werden, allerdings ist es nicht notwendig alle Blöcke zu nutzen. *Mit dem Mathematik-Block zur Addition stehen auch alle weiteren Rechenoperationen zur Verfügung*.](/images/hoerbare-helligkeit.png?classes=caption "Blöcke zum Programmieren der Aufgabe “Hörbare Helligkeit”. Es können alle Blöcke genutzt werden, allerdings ist es nicht notwendig alle Blöcke zu nutzen. *Mit dem Mathematik-Block zur Addition stehen auch alle weiteren Rechenoperationen zur Verfügung*.")
</div>

<div markdown="1" class="aufgabe clearfix">
#### Juke-Box 2.0

![Vorlage zur JukeBox 2.0.](/images/jukebox2.png?classes=caption,figure-right "Vorlage zur Juke-Box 2.0.")
Logische Operationen lassen sich nutzen, um die Juke-Box vom Anfang des Kapitels zu erweitern, ohne Hardware nachrüsten zu müssen. Zur Erinnerung: Es wurden zwei Taster T1 und T2 und ein Piezo-Summer an den Arduino angeschlossen. Wenn Taster1 gedrückt wurde, gab der Befehl `Taste T1 gedrückt?` WAHR zurück und es wurde ein entsprechender Song gespielt.

Die Idee: Man kann auch beide Taster gleichzeitig oder gar keinen Taster drücken, sodass sich vier Fälle für vier Songs ergeben. Sinnvollerweise wird nur irgendeine Standardmusik gespielt, wenn gar kein Taster gedrückt wurde.

Formuliere für jeden der vier Fälle eine trennscharfe Bedingung!
</div>

<div markdown="1" class="aufgabe">
#### Gesetze von de Morgan

Die Gesetze von de Morgan sagen aus, wie sich die Kombination des NICHT-Operators und des UND-Operators bzw. des ODER-Operators umformen lässt. Für zwei Aussagen A und B, die jeweils wahr oder falsch sein können, gilt:
<center markdown="1">
(1) `NICHT( A ODER B ) = NICHT( A ) UND NICHT( B )`,
(2) `NICHT( A UND B ) = NICHT( A ) ODER NICHT( B )`.
</center>
Weise die Aussagen der Gesetze von de Morgan nach. Erstelle dazu für beide Seiten Wahrheitswerttabellen und zeige, dass für die gleiche Wahrheitswertkombination zu A und B immer auf beiden Seiten das gleiche Ergebnis herauskommt.

Zu (1):

links

  | `A`  |  `B`  | `A ODER B` | `NICHT( A ODER B )`|
  |----|-----|------------|-------------------------
  | 1  |  1  |     1      |           ...          |
  |... | ... |    ...     |           ...          |

rechts

  | `A`  |  `B`  | `NICHT( A )` | `NICHT( B )` | `NICHT( A ) UND NICHT( B )`|
  -----|-----|----------------|----------------|--------------------------------|
  | 1  |  1  |       0        |       0        |               ...              |
  |... | ... |      ...       |      ...       |               ...              |

</div>

<div markdown="1" class="aufgabe">
#### Variablen und Datentypen

1.  Nenne Vorteile, die für die Verwendung von Variablen sprechen.
2.  Nenne drei Datentypen, die in Variablen gespeichert werden können.
</div>

<div markdown="1" class="aufgabe">
#### Programme verstehen

Am Arduino wird an Pin 9 eine LED mit Vorwiderstand und an Pin 10 ein Piezo-Summer angebracht. Dann wird das folgende Programm ausgeführt.

![Programm zur Analyse](/images/Aufg-Programme-verstehen.png)

1.  Stelle das oben abgebildete Programm als Struktogramm dar.
2.  Beschreibe die Wirkung des oben abgebildeten Programms.
3.  Erkläre, wie man das Programm ändern müsste, damit die LED zwei Mal blinkt, bevor wieder der Piezo-Summer piept.
</div>

<div markdown="1" class="aufgabe">
#### Zählschleife analysieren

An allen Digitalpins des Arduino wird eine LED mit Vorwiderstand angeschlossen. Dann wird das abgebildete Programm ausgeführt.

![Zählschleife zur Analyse.](/images/zaehlschleife-analysieren.png?classes=caption "Zählschleife zur Analyse.")

1.  Erstelle eine Trace-Tabelle für einen Durchlauf der `wiederhole unendlich oft`-Schleife.
2.  Nenne die Pin-Nummern der LEDs, die nach einem Durchlauf dieses Programms geleuchtet haben.
3.  Stelle das Programm als Struktogramm dar.
</div>

<div markdown="1" class="aufgabe">
#### Zählschleifen für die Mathematik

Mit Hilfe der Zählschleifen im folgenden Programm sollen Eigenschaften von Zahlen untersucht werden.

![Zählschleifen für die Mathematik.](/images/zaehlschleifen-fuer-mathematik.png?classes=caption "Zwei Zählschleifen zur Untersuchung von Zahlen.")

1. Bestimme für `i=1` bis `i=5` welche Zahlen auf dem seriellen Monitor ausgegeben werden.
2. Erkläre allgemein, welche Zahlen auf dem seriellen Monitor ausgegeben werden.
</div>

<div markdown="1" class="aufgabe">
#### EVA am Smartphone

1. Nenne jeweils drei Bauteile im Smartphone, die für die Eingabe bzw. für die Ausgabe zuständig sind.
2. Anne schreibt Bernd mit ihrem Smartphone eine Textnachricht. Bernd empfängt diese auf seinem Smartphone. Kategorisiere den Prozess auf Annes und auf Bernds Smartphone jeweils nach dem EVA-Prinzip.

</div>

## Ausblick

**Offene Fragen:**

-   Was passiert, wenn ein Digitalpin angestellt oder ausgestellt wird?
-   Was passiert bei der Messung der Lichtstärke?
-   Wie werden weitere Bauteile angeschlossen und im Programm angesprochen?
-   Was sind Listen und wie verwendet man sie?
-   Wie werden die Daten codiert, um sie auf dem Arduino abzuspeichern oder zwischen Arduino und Computer auszutauschen?

! #### Motivationsquellen
! [Staubsaugerroboter](https://www.heise.de/make/meldung/Schueler-Projekt-Selbstbau-Staubsaugerroboter-aus-dem-3D-Drucker-3991208.html): Mithilfe eines Arduino haben zwei Schüler aus den Niederlanden ihren eigenen Staubsaugerroboter gebaut. Das Teile für das Gehäuse haben sie mit einem 3D-Drucker gedruckt.
!
![Levitation](https://www.heise.de/make/artikel/Einfacher-Ultraschall-Levitationsapparat-4022505.html): Durch Levitation lassen sich Gegenstände scheinbar von Geisterhand in der Luft schweben. Die nötige Elektronik dafür lässt sich mit einem Arduino realisieren.
!
! [Arduino-kontrollierter LED-Streifen zur Visualisierung von Musik](https://www.instructables.com/id/Party-Lights-1/): Der Arduino lässt sich zudem über ein Smartphone ansteuern.
!
![Spielekonsole von Makerbuino](https://www.heise.de/make/meldung/Makerbuino-Spielkonsole-fuer-den-Eigenbau-3681578.html): Mithilfe eines Bausatzes lässt sich eine kleine, Arduino-basierte Spielekonsole bauen.

