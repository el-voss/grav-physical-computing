document.addEventListener('DOMContentLoaded', function() {
    // Tabs und Inhalte auswählen
    const tabButtons = document.querySelectorAll('.tab-button');
    const contentBlocks = document.querySelectorAll('.content-block');

    // Auswahl aus Local Storage laden (Standard: 'makecode')
    const gespeicherteUmgebung = localStorage.getItem('programmierumgebung') || 'makecode';

    // Standardmäßig aktiven Tab und Inhalt setzen
    const aktiverTab = document.querySelector(`.tab-button[data-umgebung="${gespeicherteUmgebung}"]`);
    const aktiverInhalt = document.querySelector(`.${gespeicherteUmgebung}`);

    // Alle Inhalte ausblenden
    contentBlocks.forEach(block => block.style.display = 'none');

    // Aktiven Tab und Inhalt anzeigen
    if (aktiverTab) aktiverTab.classList.add('active');
    if (aktiverInhalt) aktiverInhalt.style.display = 'block';

    // Tab-Klick-Handler
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const umgebung = this.getAttribute('data-umgebung');

            // Aktiven Tab aktualisieren
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Alle Inhalte ausblenden
            contentBlocks.forEach(block => block.style.display = 'none');

            // Nur den ausgewählten Inhalt anzeigen
            document.querySelector(`.${umgebung}`).style.display = 'block';

            // Auswahl im Local Storage speichern
            localStorage.setItem('programmierumgebung', umgebung);
        });
    });
});
