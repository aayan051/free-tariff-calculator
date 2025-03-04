document.getElementById('calculateBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const goodsType = document.getElementById('goodsType').value;
    
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    
    let tariffRate = goodsType === 'general' ? 0.25 : 0.10; // 25% or 10%
    let tariffAmount = amount * tariffRate;
    let totalCost = amount + tariffAmount;
    
    // Display results
    document.getElementById('original').textContent = amount.toFixed(2);
    document.getElementById('tariff').textContent = tariffAmount.toFixed(2);
    document.getElementById('total').textContent = totalCost.toFixed(2);
    document.getElementById('result').style.display = 'block';
    
    // Show ad
    document.getElementById('ad').innerHTML = `
        <p><strong>Struggling with tariffs?</strong> Boost your business with a custom website! Email us at 
        <a href="mailto:ultimatesitecare@gmail.com">ultimatesitecare@gmail.com</a> for a free quote—limited time offer!</p>
    `;
    document.getElementById('ad').style.display = 'block';
});