function setinput(value) {
    document.getElementById('input').value +=value;
}
function calculate() {
    let input=document.getElementById('input').value;
    kq=eval(input);
    document.getElementById('input').value = kq;
}
function del() {
    let de=document.getElementById('input').value;
    de=' ';
    document.getElementById('input').value=  de;
}
function xoa(value) {
    kq= document.getElementById('input').value;
    kq= input.value.substr(0,input.value.length-1);
    document.getElementById('input').value= kq;
}