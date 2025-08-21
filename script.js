const ctx = document.getElementById('myChart');
new Chart(ctx,{
    type: 'bar',
    data:{
        labels:['Mon','Tue','Wed','Thu','Fri'],
        datasets:[{
            label:'Visitors',
            data:[120,190,300,500,200],
            backgroundColor: 'rgba(54,162,235,0.6)'
        }]
    }
});