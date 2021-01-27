function addItem() {
    document.getElementById('newItemText').value;
    document.getElementById('newItemValue').value;
    const select = document.getElementById('menu');
    const option = document.createElement('option');
    option.textContent = document.getElementById('newItemText').value;
    option.value = document.getElementById('newItemValue').value;
    select.appendChild(option);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}