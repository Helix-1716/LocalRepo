
const ctx = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Safari', 'Chrome', 'Firefox', 'CriOs', 'Opera', 'Others'],
        datasets: [{
            label: 'Pageview by Browsers',
            data: [12, 19, 13, 15, 22, 33],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
    }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });