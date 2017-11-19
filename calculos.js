function calcular()
{   
    this.limpiar();
    
    var capital = document.getElementById("capital").value;
    var interes = document.getElementById("interes").value;
    var plazo = document.getElementById("plazo").value;

    document.getElementById("c_inicial").innerHTML = new Intl.NumberFormat().format(Math.round(capital,2));

    var op = capital;
    var cont = 0;

    var a_pago = [];
    var a_monto = [];

    for(var a = 1;a<=plazo;a++)
    {
           
            a_pago[cont] = cont+1;
            
            op = parseFloat(op) + (parseFloat(op)*parseFloat(interes/100));
            cont = cont +1;
            a_monto[cont-1] = Math.round(op,2);
            document.getElementById("tbody").innerHTML += "<tr><td>"+cont+"</td><td>"+new Intl.NumberFormat().format(Math.round(op,2))+"</td></tr>";
        
    }

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            
            labels: a_pago,
            datasets: [{
                label: 'Capital',
                data: a_monto,
                backgroundColor: 
                    'rgba(0,0,0,0)'
                ,
                borderColor: 
                    '#01579b'
                ,
                borderWidth: 3
            }]
        },
    });

    document.getElementById("generado").innerHTML = new Intl.NumberFormat().format(Math.round(op-capital,2));
    document.getElementById("total").innerHTML = new Intl.NumberFormat().format(Math.round(op,2));
}

function limpiar()
{   
    document.getElementById("tbody").innerHTML = "<tr><td></td><td></td></tr>";
    document.getElementById("myChart").innerHTML = "";
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            
            labels: [0],
            datasets: [{
                label: 'Capital',
                data: [0],
                backgroundColor: [
                    'rgba(0,0,0,0)'
                ],
                borderColor: [
                    '#01579b'
                ],
                borderWidth: 3
            }]
        },
    });
}