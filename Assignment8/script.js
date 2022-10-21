// let btnadd = document.querySelector('#add');
// let btncal = document.querySelector('#calc');
// let table = document.querySelector('table');

// let ni = document.querySelector('#name');
// let ai = document.querySelector('#age');
// let ci = document.querySelector('#country');

// btnadd.addEventListener('click', () => {
//     let name = ni.value;
//     let age = ai.value;
//     let country = ci.value;
//     let temp =
//         `
//     <tr>
//     <td>${name}</td>
//     <td>${age}</td>
//     <td>${country}</td>
//     </tr>
//     `;

//     table.innerHTML+= temp;
// });

// // info.innerHTML=' ';
// btncal.addEventListener('click',()=>{

//     var mytab=document.getElementById('mytab');
//     var sum=0;
//     for(i=1;i<mytab.rows.length;i++)
//     {
//         var obj =mytab.rows.item(i).cells;

//         // for(j=0;j<obj.length;j++)
//         // {
//         //     info.innerHTML= info.innerHTML + ' ' + obj.item(j).innerHTML;
//         // }

//         // info.innerHTML= info.innerHTML + '<br>';
//         sum +=parseInt(obj.item(1).innerHTML);
//     }
//     info.innerHTML= "Total sum is " + sum + `<br>`;
// });



let btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{


            const a = new Object();
            a.name = document.getElementById("a1").value;
            a.qua = document.getElementById("a2").value;
            a.code = document.getElementById("a3").value;
            a.price = document.getElementById("a4").value;

            const b = new Object();
            b.name = document.getElementById("b1").value;
            b.qua = document.getElementById("b2").value;
            b.code = document.getElementById("b3").value;
            b.price = document.getElementById("b4").value;

            const c = new Object();
            c.name = document.getElementById("c1").value;
            c.qua = document.getElementById("c2").value;
            c.code = document.getElementById("c3").value;
            c.price = document.getElementById("c4").value;

            // document.writeln(a.name);
            document.getElementById("i1").innerHTML = a.name;
            document.getElementById("i2").innerHTML = a.qua;
            document.getElementById("i3").innerHTML = a.code;
            document.getElementById("i4").innerHTML = a.price;
            document.getElementById("i5").innerHTML = a.price * a.qua;

            document.getElementById("j1").innerHTML = b.name;
            document.getElementById("j2").innerHTML = b.qua;
            document.getElementById("j3").innerHTML = b.code;
            document.getElementById("j4").innerHTML = b.price;
            document.getElementById("j5").innerHTML = b.price * b.qua;

            document.getElementById("k1").innerHTML = c.name;
            document.getElementById("k2").innerHTML = c.qua;
            document.getElementById("k3").innerHTML = c.code;
            document.getElementById("k4").innerHTML = c.price;
            document.getElementById("k5").innerHTML = c.price * c.qua;

            document.getElementById("price").innerHTML = "Total Price is " + ((a.price * a.qua) + (b.price * b.qua) + (c.price * c.qua));
        })
