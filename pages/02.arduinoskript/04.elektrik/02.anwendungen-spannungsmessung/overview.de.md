---
title: 'Anwendungen der Spannungsmessung'
menu: 'Anwendungen der Spannungsmessung'
media_order: 'trimmpotentiometer2.jpg,trimmpotentiometer1.jpg'
content:
    items:
        - '@self.children'
    limit: 5
    order:
        by: folder
        dir: asc
    pagination: false
    url_taxonomy_filters: false
---

<style>
    body {
        --abk: 'EG.AS';
    }
</style>

Jede Messung mit einem Mikrocontroller basiert darauf, dass eine Umweltgröße, die gemessen werden soll, auf eine messbare Spannung zurückgeführt wird, die dann vom Mikrocontroller verarbeitet wird. In diesem Abschnitt wird an drei Beispielen erkundet, wie man aus der Spannung, die an analogen Eingängen gemessen wird, wieder die Umweltgröße ermittelt. In einem zusätzlichen Abschnitt wird gezeigt, wie man eine Regression durchführt, um einen funktionalen Zusammenhang zu ermitteln.

