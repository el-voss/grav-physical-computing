---
title: 'Über diese Seite'
---

[TOC]

<h1 id="autor">Autor</h1>

Mein Name ist Sebastian Voß und ich bin leidenschaftlicher Tüftler und Bastler mit allem, was mit Computern und Mikrocontrollern zu tun hat. Beruflich bin ich Lehrer für Mathematik und Physik an einem Gymnasium in Niedersachsen. Zusätzlich unterrichte ich inzwischen Informatik in der Sekundarstufe I.

![Bild des Autors](sebastian.png?resize=400)

## Zur Entstehung des Skriptes "Physical Computing"

Im Jahr 2016 bin ich das erste Mal in einem Youtube-Video auf den Arduino aufmerksam geworden. Darin wurde er für ein Heimwerker-Projekt genutzt und als einfache Möglichkeit vorgestellt, programmieren zu lernen und Projekte umzusetzen. Ich war schnell begeistert und schaffte mir selbst ein Arduino-Starter-Kit an. Ich arbeitete mich durch einige Tutorials und lernte schnell, immer komplexere Projekte aufzubauen und zu programmieren - dabei war mein Studium in Mathematik und Physik sicherlich hilfreich. Aber endlich war das ganze Wissen, das ich mir angeeignet hatte, nicht nur theoretisch wertvoll, sondern auch ganz praktisch anwendbar! Diese Mischung aus theoretischem Wissen, praktischem Aufbau, Verständnis für den technischen Alltag sowie insbesondere der Möglichkeit, eigene Projekte anzugehen und kreativ zu werden, war es, die mich tief begeisterte und die ich bald weitergeben wollte.

Der Bezug zur Schule ist offensichtlich. Nachdem man ein wenig in die Arduino-Welt eingetaucht ist, erscheint es fast fahrlässig, dass man im Physikunterricht Halbleiterbauelemente behandelt, ohne gleichzeitig zu thematisieren, wie man sie über ein Programm anspricht und ausliest, sodass sie zu etwas Praktischem beitragen können. Zudem werden sie in Plastikkästen versteckt, die zwar verhindern, dass etwas kaputt geht und für wenige Cent neu beschafft werden muss, aber auch dazu führt, dass die meisten Schülerinnen und Schüler kaum wissen, wie die elektrischen Bauteile, die sie im Bändermodell erklären sollen, aussehen. Auf diese Art und Weise kann die Elektronik nur furchtbar theoretisch und dementsprechend wenig motivierend werden. Und so versuchte ich mich schon bald an der Integration des Arduino in den Unterricht - zunächst ein kleines Projekt im Physikunterricht, dann eine Arduino-AG und schließlich ein Arduino-Wahlpflichtfach im MINT-Profil.

Was mir für den Unterricht noch fehlte, war ein Skript wie dieses, welches das theoretische Wissen, das sich rund um den Arduino vermitteln lässt, didaktisch aufbereitet und strukturiert, sodass es sich im Unterricht anwenden lässt. Im Gegensatz zu den vielen Internet-Tutorials sollte zum Einen eine graphische Programmiersprache im Vordergrund stehen, weil meine Erfahrungen im Unterricht zeigten, dass die Schüler bei ihrer ersten Begegnung mit dem Programmieren größere Probleme mit der komplexen Syntax von C++ bekamen. Zum Anderen sollte das Wissen mit den Schülern erarbeitet werden statt es einmal zu erklären und dann nachmachen zu lassen. So verwendete ich im Schuljahr 2018/19 sehr viel Zeit und Arbeit in dieses Skript. Mein Ziel ist, meine Begeisterung für die Arduino-Welt mit der beschriebenen Mischung aus theoretischem Wissen, praktischem Aufbau, Verständnis für den technischen Alltag sowie der Möglichkeit eigene Projekte umzusetzen an möglichst viele Schülerinnen und Schüler weiter zu geben. Aus diesem Grund veröffentliche ich dieses Skript auch unter einer CC-Lizenz (BY-SA 4.0), die es jedem erlaubt, dieses Skript zu vervielfältigen und anzupassen, solange mein Name genannt und mögliche Anpassungen unter der gleichen Lizenz weitergegeben werden.

Im Jahr 2020 hatte ich dann durch den Shutdown während der Corona-Pandemie noch einmal genug Zeit, um eine große Umstellung vorzunehmen. Statt wie bisher auf das Programm mBlock zu setzen, das eigentlich auf die Programmierung von firmeneigenen „mBots“ ausgelegt ist und in der neuesten Version über keinen seriellen Monitor mehr verfügte, probierte ich nun Nepo4Arduino von der Fraunhofer-Gesellschaft aus und merkte, dass sich damit noch viel mehr Projekte und Inhalte umsetzen lassen würden. Zudem ist der Aufbau an einigen Stellen intuitiver und macht die Anbindung von Bauteilen an den Arduino leichter. Die andere Vorgehensweise machte es aber auch notwendig, das Skript noch einmal komplett zu überarbeiten. So gut wie jede einzelne Seite wurde noch einmal angefasst und umgearbeitet, sodass eine ganz neue Struktur entstand.

Im Schuljahr 2021/22 habe ich dann das Vorhaben umgesetzt, aus dem bisherigen PDF-Dokument eine Webseite zu bauen, wofür ich wiederum einiges über HTML, CSS und ein wenig Javascript im Zusammenhang mit dem quelloffenen CMS Grav lernen durfte. Auf diese Weise sieht das Skript auf jedem Endgerät gut aus, bietet interaktive Elemente an und die Einbettung von Videos und Programmvorlagen ist wesentlich besser. Dem lag die Erkenntnis zu Grunde, dass ein PDF nur die analoge Welt digital nachbildet, wohingegen eine Webseite ein echt digitales Produkt ist und von all den Möglichkeiten der digitalen Welt Gebrauch macht. Es sollte sehr viel weniger PDF-Dokumente geben!

Dieses Projekt begleitet mich nun also schon einige Jahre und ich habe noch viele weitere Ideen, die ich hier umsetzen möchte. Also schaut mal wieder vorbei!

<h1 id="lizenz">Lizenz und rechtliche Hinweise</h1>

Dieses Skript ist unter der Lizenz [Creative Commons Namensnennung - Weitergabe unter gleichen Bedingungen 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) veröffentlicht.

Alle Bilder und Zeichnungen wurden vom Autor selbst erstellt, wenn kein Hinweis auf eine andere Quelle angegeben wird.

Alle Programme und Schaltungen in dieser Webseite wurden sorgfältig erstellt und geprüft. Der Autor kann nicht für Schäden verantwortlich gemacht werden, die bei der Verwendung dieser Webseite entstehen.

Internet-Links waren zum Zeitpunkt der Verlinkung auf dieser Webseite funktionsfähig und führten zu sinnvollen Inhalten. Es kann jedoch nicht ausgeschlossen werden, dass sie inzwischen zu ganz anderen Inhalten führen.

# Benutzte Programme

Die Programmierung erfolgt mit dem *Open Roberta Lab*. Zeichnungen wurden mit *TikZ* und *InkScape* angefertigt. Schaltpläne wurden mit *QElectroTech* erstellt. Die Webseite wird mit dem CMS *Grav* betrieben. Zudem kam eine Reihe von Standardprogrammen unter *Linux Mint* und *Zorin OS* zum Einsatz. Diese Webseite ist also praktisch ausschließlich mit quelloffener Software erstellt und ich bin den Entwicklern dankbar dafür, dass sie diese frei zur Verfügung stellen. Mit der Offenheit dieses Skriptes versuche ich auch einen Teil zurück zu geben.



