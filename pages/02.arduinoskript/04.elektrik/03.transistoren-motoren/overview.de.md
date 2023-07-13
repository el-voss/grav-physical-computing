---
title: 'Transistoren und Motoren'
menu: '[TM] Transistoren und Motoren'
media_order: 'diode-sperrrichtung.png,l298n-steuerung-bsp.png,l298n-konfiguration.png,l298n-steuerung-funktion.png'
content:
    items:
        - '@self.children'
    limit: 30
    order:
        by: folder
        dir: desc
    pagination: true
    url_taxonomy_filters: true
---

<style>
    body {
        --abk: 'EG.TM';
    }
</style>

Immer wenn ein Projekt nicht nur passiv dasitzen und etwas beobachten und anzeigen soll, kommen Motoren ins Spiel. Motoren benötigen relativ hohe Stromstärken und können rückläufige Ströme erzeugen, die das Steuerbauteil zerstören können. Daher ist bei der Verwendung von Motoren Vorsicht angebracht. Im Folgenden werden schrittweise die nötigen Grundkenntnisse erarbeitet.

