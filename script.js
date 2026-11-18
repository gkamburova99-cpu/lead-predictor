
function calculate() {
    const revenue = parseFloat(document.getElementById('revenue').value) || 0;
    const avgOrder = parseFloat(document.getElementById('avgOrder').value) || 1;

    // Формула 01
    const customers = revenue / avgOrder;
    document.getElementById('customersResult').innerText = customers.toFixed(0);

    // Приемаме примерни проценти за отговор (например 20% за leads и 40% за prospects от слайдера/полетата)
    const leadResponseRate = 20; 
    const prospectResponseRate = 40;

    // Формула 02
    const leads = (customers * 100) / leadResponseRate;
    document.getElementById('leadsResult').innerText = leads.toFixed(0);

    // Формула 03
    const prospects = (leads * 100) / prospectResponseRate;
    document.getElementById('prospectsResult').innerText = prospects.toFixed(0);
}

document.getElementById('revenue').addEventListener('input', calculate);
document.getElementById('avgOrder').addEventListener('input', calculate);
