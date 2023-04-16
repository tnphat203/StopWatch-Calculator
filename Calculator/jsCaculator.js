var ketQua = document.querySelector('.KetQua p');
var btn1 = document.querySelector('.btn-1');
var btn2 = document.querySelector('.btn-2');
var btn3 = document.querySelector('.btn-3');
var btn4 = document.querySelector('.btn-4');
var btn5 = document.querySelector('.btn-5');
var btn6 = document.querySelector('.btn-6');
var btn7 = document.querySelector('.btn-7');
var btn8 = document.querySelector('.btn-8'); 
var btn9 = document.querySelector('.btn-9');
var btn0 = document.querySelector('.btn-0');
var btnAC = document.querySelector('.btn-AC');
var btnDEL = document.querySelector('.btn-DEL');
var btnKQ = document.querySelector('.btn-kq');
var btnCong = document.querySelector('.btn-cong');
var btnTru = document.querySelector('.btn-tru');
var btnNhan = document.querySelector('.btn-nhan');
var btnChia = document.querySelector('.btn-chia');

var calculator = '';

function TinhToan(kq){
    ketQua.textContent = kq;
};

btn0.addEventListener('click',function(){
    calculator = calculator + '0';
    TinhToan(calculator);
});
btn1.addEventListener('click',function(){
    calculator = calculator + '1';
    TinhToan(calculator);
});
btn2.addEventListener('click',function(){
    calculator = calculator + '2';
    TinhToan(calculator);
});
btn3.addEventListener('click',function(){
    calculator = calculator + '3';
    TinhToan(calculator);
});
btn4.addEventListener('click',function(){
    calculator = calculator + '4';
    TinhToan(calculator);
});
btn5.addEventListener('click',function(){
    calculator = calculator + '5';
    TinhToan(calculator);
});
btn6.addEventListener('click',function(){
    calculator = calculator + '6';
    TinhToan(calculator);
});
btn7.addEventListener('click',function(){
    calculator = calculator + '7';
    TinhToan(calculator);
});
btn8.addEventListener('click',function(){
    calculator = calculator + '8';
    TinhToan(calculator);
});
btn9.addEventListener('click',function(){
    calculator = calculator + '9';
    TinhToan(calculator);
});
btnAC.addEventListener('click',function(){
    calculator = '';
    TinhToan('0');
});
btnDEL.addEventListener('click',function(){
    calculator = calculator.slice(0,-1);
    TinhToan(calculator);
});
btnCong.addEventListener('click',function(){
    calculator = calculator + '+';
    TinhToan(calculator);
});
btnTru.addEventListener('click',function(){
    calculator = calculator + '-';
    TinhToan(calculator);
});
btnNhan.addEventListener('click',function(){
    calculator = calculator + '*';
    TinhToan(calculator);
});
btnChia.addEventListener('click',function(){
    calculator = calculator + '/';
    TinhToan(calculator);
});
btnKQ.addEventListener('click',function(){
    calculator = eval(calculator);
    TinhToan(calculator);
});
