document.addEventListener('DOMContentLoaded', function() {
    // Tabs und Inhalte auswählen
    const tabButtons = document.querySelectorAll('.tab-button');
    const contentBlocks = document.querySelectorAll('.tab-content-block');

    // Auswahl aus Local Storage laden
    const gespeicherteUmgebung = localStorage.getItem('programmierumgebung') || 'makecode';

    // Standardmäßig aktiven Tab und Inhalt setzen
    const aktiverTab = document.querySelector(`.tab-button[data-umgebung="${gespeicherteUmgebung}"]`);
    const aktiverInhalt = document.querySelector(`.${gespeicherteUmgebung}`);

    if (aktiverTab) aktiverTab.classList.add('active');
    if (aktiverInhalt) aktiverInhalt.style.display = 'block';

    // Tab-Klick-Handler
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const umgebung = this.getAttribute('data-umgebung');

            // Aktiven Tab aktualisieren
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Inhalte umschalten
            contentBlocks.forEach(block => block.style.display = 'none');
            document.querySelector(`.${umgebung}`).style.display = 'block';

            // Auswahl im Local Storage speichern
            localStorage.setItem('programmierumgebung', umgebung);
        });
    });
});
