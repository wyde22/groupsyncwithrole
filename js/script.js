(function($) {
    document.addEventListener('DOMContentLoaded', function () {
        // Fonction pour désactiver toutes les options sélectionnées sur la page
        function disableSelectedOptions() {
            // Obtenir tous les éléments <select> sur la page
            const selectElements = document.querySelectorAll('select');

            // Tableau pour stocker les valeurs des options sélectionnées
            const selectedValues = [];

            // Parcourir tous les éléments <select>
            selectElements.forEach(select => {
                // Obtenir l'option actuellement sélectionnée
                const selectedOption = select.options[select.selectedIndex];

                // Vérifier si une option est sélectionnée
                if (selectedOption && selectedOption.value !== "0") {
                    // Ajouter la valeur de l'option sélectionnée au tableau
                    selectedValues.push(selectedOption.value);
                }
            });

            // Désactiver les options ayant les valeurs sélectionnées
            selectElements.forEach(select => {
                const options = select.querySelectorAll('option');

                options.forEach(option => {
                    if (selectedValues.includes(option.value) && option.value !== "0") {
                        option.classList.add('disabled-option');
                        option.style.cursor = 'not-allowed';
                    } else {
                        option.classList.remove('disabled-option');
                    }
                });
            });
        }

        function removeItemArray(item) {
            let index = selectedValues.indexOf(item);
            if (index !== -1) {
                selectedValues.splice(index, 1);
                updateOptions();
            }
        }

        // Appeler la fonction pour désactiver les options sélectionnées au chargement de la page
        disableSelectedOptions();

        // Ajouter un écouteur d'événements de changement pour chaque <select> pour mettre à jour les options désactivées en temps réel
        const selectElements = document.querySelectorAll('select');
        selectElements.forEach(select => {
            select.addEventListener('change', disableSelectedOptions);
        });

        // Add buttons to even rows and set up event listeners
        const rows = document.querySelectorAll('.form-layout tr');
        rows.forEach((row, index) => {
            if ((index + 1) % 2 === 0) { // even rows (1-based index)
                const button = document.createElement('button');
                button.type = 'button';
                button.classList.add('default', 'crm-button');
                button.textContent = 'Break the mapping';

                button.addEventListener('click', function () {
                    const selectsInRow = row.querySelectorAll('select');

                    // retrieve class of select group on the same line of select role
                    const idSelect = selectsInRow[0].id;
                    const lastCharacter = idSelect.slice(-1);
                    let idSelectGroup = 'select_group_' + lastCharacter;

                    // select group civicrm
                    const selectGroupLine = document.getElementById(idSelectGroup);
                    if(selectGroupLine) {
                        const optionsGroupSelect = selectGroupLine.options;
                        for(let i = 0; i < optionsGroupSelect.length; i++) {
                            if(optionsGroupSelect[i].selected === true) {
                                optionsGroupSelect[i].selected = false;
                                removeItemArray(optionsGroupSelect[i].value);
                            }
                        }
                        selectGroupLine.value = "0";
                    }

                    // select WordPress role
                    selectsInRow.forEach(selectWPRole => {
                        const optionWPRole = selectWPRole.querySelectorAll('option');
                        optionWPRole.forEach(optionWPRole => {
                            if(optionWPRole.selected === true) {
                                optionWPRole.selected = false;
                                removeItemArray(optionWPRole.value);
                            }
                        });
                        selectWPRole.value = "0";
                    });
                });

                const td = document.createElement('td');
                td.appendChild(button);
                row.appendChild(td);
            }
        });
    });
})(CRM.$ || cj);
