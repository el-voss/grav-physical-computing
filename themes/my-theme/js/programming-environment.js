document.addEventListener('DOMContentLoaded', function() {
    // Auswahl aus Local Storage laden (Standard: 'makecode')
    const gespeicherteUmgebung = localStorage.getItem('programmierumgebung') || 'makecode';

    // Alle Tab-Gruppen auswählen
    const tabGroups = document.querySelectorAll('[data-group="programmierumgebung"]');

    // Funktion zum Aktualisieren aller Tab-Gruppen
    function updateAllTabs(selectedUmgebung) {
        tabGroups.forEach(group => {
            // Tabs aktualisieren
            const tabButtons = group.querySelectorAll('.tab-button');
            tabButtons.forEach(button => {
                button.classList.remove('active');
                if (button.getAttribute('data-umgebung') === selectedUmgebung) {
                    button.classList.add('active');
                }
            });

            // Inhalte aktualisieren
            const contentBlocks = group.querySelectorAll('.content-block');
            contentBlocks.forEach(block => {
                block.style.display = 'none';
                if (block.classList.contains(selectedUmgebung)) {
                    block.style.display = 'block';
                }
            });
        });
    }

    // Standardmäßig alle Tab-Gruppen aktualisieren
    updateAllTabs(gespeicherteUmgebung);

    // Tab-Klick-Handler für alle Tab-Gruppen
    tabGroups.forEach(group => {
        const tabButtons = group.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const umgebung = this.getAttribute('data-umgebung');
                updateAllTabs(umgebung);
                localStorage.setItem('programmierumgebung', umgebung);
            });
        });
    });
});
