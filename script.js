
function calculate() {
    const revenueInput = document.getElementById('revenue');
    const avgOrderInput = document.getElementById('avgOrder');
    const revenue = revenueInput.valueAsNumber;
    const avgOrder = avgOrderInput.valueAsNumber;

    const revenueIsValid = Number.isFinite(revenue) && revenue >= 0;
    const avgOrderIsValid = Number.isFinite(avgOrder) && avgOrder > 0;
    revenueInput.setAttribute('aria-invalid', String(!revenueIsValid));
    avgOrderInput.setAttribute('aria-invalid', String(!avgOrderIsValid));

    if (!revenueIsValid || !avgOrderIsValid) {
        document.getElementById('customersResult').textContent = '—';
        document.getElementById('leadsResult').textContent = '—';
        document.getElementById('prospectsResult').textContent = '—';
        return;
    }

    // Формула 01
    const customers = revenue / avgOrder;
    document.getElementById('customersResult').textContent = customers.toFixed(0);

    // Приемаме примерни проценти за отговор (например 20% за leads и 40% за prospects от слайдера/полетата)
    const leadResponseRate = 20; 
    const prospectResponseRate = 40;

    // Формула 02
    const leads = (customers * 100) / leadResponseRate;
    document.getElementById('leadsResult').textContent = leads.toFixed(0);

    // Формула 03
    const prospects = (leads * 100) / prospectResponseRate;
    document.getElementById('prospectsResult').textContent = prospects.toFixed(0);
}

document.getElementById('revenue').addEventListener('input', calculate);
document.getElementById('avgOrder').addEventListener('input', calculate);
calculate();
