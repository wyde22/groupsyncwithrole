(function($) {
    function disableSelectedOptions() {
        const selects = document.querySelectorAll('select');
        const selectedValues = [];

        // Récupérer toutes les valeurs sélectionnées
        selects.forEach(select => {
            const selectedOption = select.options[select.selectedIndex];
            if (selectedOption && selectedOption.value) {
                selectedValues.push(selectedOption.value);
            }
        });

        // Désactiver les options sélectionnées dans les autres select
        selects.forEach(select => {
            Array.from(select.options).forEach(option => {
                if (selectedValues.includes(option.value) && !option.selected) {
                    option.disabled = true;
                } else {
                    option.disabled = false;
                }
            });
        });
    }

    function enableAllOptions() {
        const selects = document.querySelectorAll('select');

        // Réactiver toutes les options
        selects.forEach(select => {
            Array.from(select.options).forEach(option => {
                option.disabled = false;
            });
        });
    }

    function enableOptionsForSelect(select) {
        Array.from(select.options).forEach(option => {
            option.disabled = false;
        });
    }

    function addEnableButtons() {
        const tr = document.querySelectorAll('tr');

        tr.forEach(tr => {
            const enableButton = document.createElement('button');
            enableButton.type = 'button';
            enableButton.textContent = 'Enable Options for ' + tr.id;
            enableButton.onclick = function() {
                enableOptionsForSelect(tr);
            };

            const row = document.createElement('td');
            row.appendChild(enableButton);
            tr.insertBefore(row, tr.firstChild);
        });
    }

    // Ajouter un écouteur d'événement pour chaque select pour mettre à jour les options désactivées à chaque changement
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', disableSelectedOptions);
    });

    // Ajouter les boutons de réactivation pour chaque select
    window.onload = function() {
        addEnableButtons();
    };




})(CRM.$ || cj);
