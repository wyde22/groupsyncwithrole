(function($, _, ts) {
    document.addEventListener('DOMContentLoaded', function () {
        const tbody = document.querySelector('.crm-setting-block-groupsyncwithrole table.form-layout-compressed > tbody');
        if (tbody) {
            const activateRow = tbody.querySelector('tr.crm-setting-form-block-activate_desactivate_default_role_wp');
            const orderedRows = [];
            if (activateRow) orderedRows.push(activateRow);

            for (let i = 1; i <= 10; i++) {
                const groupRow = tbody.querySelector('tr.crm-setting-form-block-select_group_' + i);
                const roleRow = tbody.querySelector('tr.crm-setting-form-block-select_rolecms_' + i);
                if (groupRow) orderedRows.push(groupRow);
                if (roleRow) orderedRows.push(roleRow);
            }

            orderedRows.forEach(row => tbody.appendChild(row));
        }

        const selectedValues = [];

        function disableSelectedOptions() {
            selectedValues.length = 0;
            const selectElements = document.querySelectorAll('.crm-setting-block-groupsyncwithrole select');

            selectElements.forEach(select => {
                const selectedOption = select.options[select.selectedIndex];
                if (selectedOption && selectedOption.value !== "0") {
                    selectedValues.push(selectedOption.value);
                }
            });

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

        disableSelectedOptions();

        function removeItemArray(item) {
            let index = selectedValues.indexOf(item);
            if (index !== -1) {
                selectedValues.splice(index, 1);
                disableSelectedOptions();
            }
        }

        const selectElements = document.querySelectorAll('.crm-setting-block-groupsyncwithrole select');
        selectElements.forEach(select => {
            select.addEventListener('change', disableSelectedOptions);
        });

        const roleRows = document.querySelectorAll('.crm-setting-block-groupsyncwithrole tr[class*="select_rolecms_"]');
        roleRows.forEach(row => {
            const selectInRow = row.querySelector('select');
            if (!selectInRow) return;

            const num = selectInRow.id.replace('select_rolecms_', '');

            const button = document.createElement('button');
            button.type = 'button';
            button.classList.add('default', 'crm-button');
            button.textContent = ts('Remove the sync');

            button.addEventListener('click', function () {
                const selectGroup = document.getElementById('select_group_' + num);
                if (selectGroup) {
                    const prev = selectGroup.value;
                    selectGroup.value = "0";
                    if (prev !== "0") removeItemArray(prev);
                }

                const prevRole = selectInRow.value;
                selectInRow.value = "0";
                if (prevRole !== "0") removeItemArray(prevRole);
            });

            const td = document.createElement('td');
            td.appendChild(button);
            row.appendChild(td);
        });
    });
})(CRM.$, CRM._, CRM.ts('groupsyncwithrole'));
