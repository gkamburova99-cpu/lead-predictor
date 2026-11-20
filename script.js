function calculate() {
    const revenueInput = document.getElementById('revenue');
    const avgOrderInput = document.getElementById('avgOrder');
    const leadRateInput = document.getElementById('leadRate');
    const prospectRateInput = document.getElementById('prospectRate');
    const revenue = revenueInput.valueAsNumber;
    const avgOrder = avgOrderInput.valueAsNumber;
    const leadResponseRate = leadRateInput.valueAsNumber;
    const prospectResponseRate = prospectRateInput.valueAsNumber;

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

    document.getElementById('leadRateValue').textContent = `${leadResponseRate}%`;
    document.getElementById('prospectRateValue').textContent = `${prospectResponseRate}%`;

    // Формула 01
    const customers = revenue / avgOrder;
    document.getElementById('customersResult').textContent = customers.toFixed(0);

    // Формула 02
    const leads = (customers * 100) / leadResponseRate;
    document.getElementById('leadsResult').textContent = leads.toFixed(0);

    // Формула 03
    const prospects = (leads * 100) / prospectResponseRate;
    document.getElementById('prospectsResult').textContent = prospects.toFixed(0);
}

document.getElementById('revenue').addEventListener('input', calculate);
document.getElementById('avgOrder').addEventListener('input', calculate);
document.getElementById('leadRate').addEventListener('input', calculate);
document.getElementById('prospectRate').addEventListener('input', calculate);

document.getElementById('currency').addEventListener('change', function () {
    document.querySelector('label[for="revenue"]').textContent = `Total Revenue (${this.value})`;
    document.querySelector('label[for="avgOrder"]').textContent = `Avg. Order Value (${this.value})`;
});

calculate();
