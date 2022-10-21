let btnadd = document.querySelector('#add');
let btncal = document.querySelector('#calc');
let table = document.querySelector('table');

let ni = document.querySelector('#name');
let ci = document.querySelector('#code');
let qi = document.querySelector('#qua');
let pi = document.querySelector('#price');

btnadd.addEventListener('click', () => {
    let name = ni.value;
    let code = ci.value;
    let quantity = qi.value;
    let price = pi.value;
    let tp = quantity*price;
    let temp =
        `
    <tr>
    <td>${name}</td>
    <td>${code}</td>
    <td>${quantity}</td>
    <td>${price}</td>
    <td>${tp}</td>
    </tr>
    `;

    table.innerHTML+= temp;
});


btncal.addEventListener('click',()=>{

    var mytab=document.getElementById('mytab');
    var sum=0;
    for(i=1;i<mytab.rows.length;i++)
    {
        var obj =mytab.rows.item(i).cells;
        console.log(obj);
        sum +=parseInt(obj.item(4).innerHTML);
    }
    info.innerHTML= "Total sum is " + sum + `<br>`;
});