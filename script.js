// script.js

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('stockChart').getContext('2d');
  
    const stockChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Stock Price',
          backgroundColor: 'rgba(255, 204, 0, 0.5)',
          borderColor: '#ffcc00',
          borderWidth: 2,
          lineTension: 0,
          fill: true,
          data: [] // Initialize with empty data
        }]
      },
      options: {
        scales: {
          x: {
            type: 'realtime', // Enable real-time charts
            realtime: {
              duration: 20000, // Data shows for last 20 seconds
              refresh: 1000, // Refresh every 1 second
              delay: 2000, // Delay of 2 seconds
              pause: false, // Keep chart updating
              ttl: undefined, // Data will be shown for unlimited time
            }
          },
          y: {
            title: {
              display: true,
              text: 'Stock Price ($)'
            },
            min: 0 // Y axes start with zero minimum value
          }
        },
        plugins: {
          legend: {
            display: true
          }
        }
      }
    });
  
    // Function to simulate fetching a random stock price
    function getRandomStockPrice() {
      return (Math.random() * 100).toFixed(2);
    }
  
    // Simulate updating data
    setInterval(function() {
      const now = Date.now();
      const newData = {
        x: now,
        y: getRandomStockPrice()
      };
      stockChart.data.datasets[0].data.push(newData);
      stockChart.update();
    }, 1000); // Update every second (1000 ms)
  });
  