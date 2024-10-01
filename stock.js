function fetchStockData() {
    const ticker = document.getElementById('ticker').value.toUpperCase();
    if (!ticker) {
        alert('Please enter a stock ticker symbol.');
        return;
    }

    fetch(`/api/stock/${ticker}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('stock-data').innerHTML = `<p>Error: ${data.error}</p>`;
            } else {
                document.getElementById('stock-data').innerHTML = `
                    <h3>Stock Data for ${ticker}</h3>
                    <p>Time: ${data.time}</p>
                    <p>Open: ${data.open.toFixed(2)}</p>
                    <p>High: ${data.high.toFixed(2)}</p>
                    <p>Low: ${data.low.toFixed(2)}</p>
                    <p>Close: ${data.close.toFixed(2)}</p>
                    <p>Volume: ${data.volume}</p>
                `;
            }
        })
        .catch(error => {
            document.getElementById('stock-data').innerHTML = `<p>Error fetching data: ${error}</p>`;
        });
}
