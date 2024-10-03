function toggleView(view) {
    document.getElementById('receipt-section').style.display = 'none';
    document.getElementById('invoice-section').style.display = 'none';
    document.getElementById('receipt-display').classList.remove('active');
    document.getElementById('invoice-display').classList.remove('active');
    if (view === 'receipt') {
        document.getElementById('receipt-section').style.display = 'block';
        document.getElementById('receipt-display').classList.add('active');
    } else if (view === 'invoice') {
        document.getElementById('invoice-section').style.display = 'block';
        document.getElementById('invoice-display').classList.add('active');
    }
}

function addRow(tableID) {
    let table = document.getElementById(tableID);
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = `<input type="text" placeholder="商品名">`;
    cell2.innerHTML = `<input type="number" placeholder="個数">`;
    cell3.innerHTML = `<input type="text" placeholder="値段">`;
}

function removeRow(tableID) {
    let table = document.getElementById(tableID);
    if (table.rows.length > 2) {
        table.deleteRow(-1);
    }
}

function createReceipt() {
    let date = document.getElementById('receiptDate').value;
    let total = document.getElementById('receiptTotal').value;
    document.getElementById('display-receiptDate').innerText = date;
    document.getElementById('display-receiptTotal').innerText = total;

    let receiptTable = document.getElementById('receiptTable');
    let displayReceiptTable = document.getElementById('display-receiptTable');
    displayReceiptTable.innerHTML = '';
    for (let i = 1; i < receiptTable.rows.length; i++) {
        let row = receiptTable.rows[i];
        let product = row.cells[0].querySelector('input').value;
        let quantity = row.cells[1].querySelector('input').value;
        let price = row.cells[2].querySelector('input').value;

        let newRow = document.createElement('div');
        newRow.className = 'receipt-row';
        newRow.innerHTML = `<span>${product}</span><span>${quantity}</span><span>${price}</span>`;
        displayReceiptTable.appendChild(newRow);
    }
}

function createInvoice() {
    let date = document.getElementById('invoiceDate').value;
    let recipient = document.getElementById('recipient').value;
    let total = document.getElementById('invoiceTotal').value;

    document.getElementById('display-invoiceDate').innerText = date;
    document.getElementById('display-recipient').innerText = recipient;
    document.getElementById('display-invoiceTotal').innerText = total;
}