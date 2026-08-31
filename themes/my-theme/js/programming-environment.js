document.addEventListener('DOMContentLoaded', function() {

    // Zuordnung: Klasse der Programmierumgebung -> Editor-Link
    const editorLinks = {
        makecode: { url: 'https://makecode.calliope.cc', label: 'MakeCode öffnen' },
        roberta:  { url: 'https://lab.open-roberta.org', label: 'Open Roberta Lab öffnen' },
        python:   { url: 'https://python.calliope.cc',   label: 'Python-Editor öffnen' }
    };

    // Fügt am Anfang jedes Programmierbeispiels einen Link zum passenden Editor ein
    function addEditorLinks() {
        document.querySelectorAll('.content-block').forEach(block => {
            // Nicht doppelt einfügen, falls die Funktion erneut aufgerufen wird
            if (block.querySelector('.editor-link')) return;

            // Passende Umgebung anhand der vorhandenen Klassen ermitteln
            const umgebung = Object.keys(editorLinks).find(key => block.classList.contains(key));
            if (!umgebung) return;

            const { url, label } = editorLinks[umgebung];

            const linkWrapper = document.createElement('p');
            linkWrapper.className = 'editor-link';

            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = `➜ ${label}`;

            linkWrapper.appendChild(link);
            block.insertBefore(linkWrapper, block.firstChild);
        });
    }

    addEditorLinks();

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


/*
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
*/
