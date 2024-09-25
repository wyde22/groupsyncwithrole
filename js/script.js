(function($, _, ts) {
    document.addEventListener('DOMContentLoaded', function () {
        // Array to store the values of the selected options
        const selectedValues = [];

        // Function to disable all selected options on the page
        function disableSelectedOptions() {
            // Get all <select> elements on the page
            const selectElements = document.querySelectorAll('select');

            // Cycle through all <select> elements
            selectElements.forEach(select => {
                // Get the currently selected option
                const selectedOption = select.options[select.selectedIndex];

                // Check if an option is selected
                if (selectedOption && selectedOption.value !== "0") {
                    // Add the value of the selected option to the array
                    selectedValues.push(selectedOption.value);
                }
            });

            // Disable options with selected values
            selectElements.forEach(select => {
                const options = select.querySelectorAll('option');

                options.forEach(option => {
                    if (selectedValues.includes(option.value) && option.value !== "0") {
                        option.classList.add('disabled-option');
                    } else {
                        option.classList.remove('disabled-option');
                    }
                });
            });
        }

        // Call the function to deactivate the selected options on page load
        disableSelectedOptions();

        function removeItemArray(item) {
            let index = selectedValues.indexOf(item);
            if (index !== -1) {
                selectedValues.splice(index, 1);
                disableSelectedOptions();
            }
        }

        // Add a change event listener for each <select> to update disabled options in real time
        const selectElements = document.querySelectorAll('select');
        selectElements.forEach(select => {
            select.addEventListener('change', disableSelectedOptions);
        });

        // Add buttons to even rows and set up event listeners
        const rows = document.querySelectorAll('#Generic .form-layout tr');
        rows.forEach((row, index) => {
            if ((index + 1) % 2 === 0) { // even rows (1-based index)
                const button = document.createElement('button');
                button.type = 'button';
                button.classList.add('default', 'crm-button');
                button.textContent = ts('Remove the sync');

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
})(CRM.$, CRM._, CRM.ts('groupsyncwithrole'));
