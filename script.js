
    // Taxas de câmbio fixas (para demonstração)
    const exchangeRates = {
      'USD': { 'BRL': 5.28, 'EUR': 0.92, 'GBP': 0.79, 'JPY': 149.80, 'CNY': 7.24, 'USD': 1 },
      'BRL': { 'USD': 0.19, 'EUR': 0.17, 'GBP': 0.15, 'JPY': 28.37, 'CNY': 1.37, 'BRL': 1 },
      'EUR': { 'USD': 1.09, 'BRL': 5.75, 'GBP': 0.86, 'JPY': 163.20, 'CNY': 7.88, 'EUR': 1 },
      'GBP': { 'USD': 1.27, 'BRL': 6.69, 'EUR': 1.17, 'JPY': 190.00, 'CNY': 9.18, 'GBP': 1 },
      'JPY': { 'USD': 0.0067, 'BRL': 0.035, 'EUR': 0.0061, 'GBP': 0.0053, 'CNY': 0.048, 'JPY': 1 },
      'CNY': { 'USD': 0.14, 'BRL': 0.73, 'EUR': 0.13, 'GBP': 0.11, 'JPY': 20.70, 'CNY': 1 }
    };
    
    document.getElementById('convertBtn').addEventListener('click', function() {
      const amount = parseFloat(document.getElementById('amount').value);
      const fromCurrency = document.getElementById('fromCurrency').value;
      const toCurrency = document.getElementById('toCurrency').value;
      
      if (isNaN(amount)) {
        document.getElementById('result').textContent = 'Por favor, digite um valor válido';
        return;
      }
      
      const rate = exchangeRates[fromCurrency][toCurrency];
      const result = amount * rate;
      
      document.getElementById('result').textContent = 
        `${amount.toFixed(2)} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    });
  