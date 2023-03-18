const  inputANod = document.querySelector('.number-a')
const  inputBNod = document.querySelector('.number-b')
const  selector = document.querySelector('.operation')
const btn = document.querySelector('.btn-res').onclick = myRes
const out = document.querySelector('.out')


 function myRes (){
    const a = Number(inputANod.value);
    const b = Number(inputBNod.value);
    const op = selector.value

    const res = calculate({a, b, op} )
    out.innerHTML = res
 }
