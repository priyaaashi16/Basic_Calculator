window.addEventListener('load',bindEvent);
window.addEventListener('load',byDefault);
var isOperator=false;
var firstOperand=0;
var isPointPress=false;
var isResult=false;
var arr=[];
var i=0;
// var i=0;
function bindEvent(){
    //all numeric button
    document.querySelector('#b1').addEventListener('click',print);
    document.querySelector('#b2').addEventListener('click',print);
    document.querySelector('#b3').addEventListener('click',print);
    document.querySelector('#b4').addEventListener('click',print);
    document.querySelector('#b5').addEventListener('click',print);
    document.querySelector('#b6').addEventListener('click',print);
    document.querySelector('#b7').addEventListener('click',print);
    document.querySelector('#b8').addEventListener('click',print);
    document.querySelector('#b9').addEventListener('click',print);
    document.querySelector('#b0').addEventListener('click',print);
    document.querySelector('#b00').addEventListener('click',print);
    //cancel button
    document.querySelector('#C').addEventListener('click',byDefault);
    //operators button
    document.querySelector('#plus').addEventListener('click',operator);
    document.querySelector('#subtract').addEventListener('click',operator);
    document.querySelector('#multiply').addEventListener('click',operator);
    document.querySelector('#divide').addEventListener('click',operator);
    document.querySelector('#equalto').addEventListener('click',equalto);
    //ponit button
    document.querySelector('#point').addEventListener('click',point);
    //clear button
    document.querySelector('#clear').addEventListener('click',clear)
    //Check button
    document.querySelector('#Ch').addEventListener('click',previous)
}
//default function-----------------------------------------------------------------------------------------------
function byDefault(){
    document.getElementById('textarea').value='0';
    isOperator=false;
    firstOperand=0;
    isPointPress=false;
    isResult=false;
    i=0;
}
//print function--------------------------------------------------------------------------------------------------
function print(){
    if(isOperator===true)
    isOperator=false;
    if(isOperator===false)
    {
        var val=document.getElementById('textarea').value;
        if(val=='0')
        val='';
        // console.log(val);
       // var concat=this.textContent;
        document.getElementById('textarea').value=val+this.textContent;
        firstOperand=val+this.textContent;
        // console.log(firstOperand);
    }
}
// operator functions---------------------------------------------------------------------------------------------
function operator(){
    if(isOperator===false)
       { 
            if(document.getElementById('textarea').value=='0' && this.textContent=='-')
            document.getElementById('textarea').value='-';
            else
           document.getElementById('textarea').value=firstOperand+this.textContent;
            firstOperand=firstOperand+this.textContent;
            if(isPointPress===true)
            isPointPress=false;
             isOperator=true;
       }
}
function equalto(){
    // var final=document.getElementById('textarea').value;
    arr[i]=firstOperand;
    i++;
    var result=eval(document.getElementById('textarea').value);
    //result=result.toFixed(2);
    document.getElementById('textarea').value=result;
    firstOperand=result;
    isPointPress=true;
    isResult=true;
}
//clear---------------------------------------------------------------------------------------------------------- 
function clear(){
    isOperator=false;
    var lenOp=firstOperand.length;
    var c='';
    // console.log(firstOperand);
    if(lenOp=='1' || isResult===true){
        isResult=false;
        byDefault();
    }
    else
    {
        for(var i=0;i<lenOp-1;i++)
        {
            c=c+firstOperand[i];
        }
        firstOperand=c;
        // console.log(firstOperand);
        document.getElementById('textarea').value=firstOperand;
    }
}

// Check previous-----------------------------------------------------------------------------------------------
function previous(){
    if(i>0)
    {
        document.getElementById('textarea').value=arr[i-1];
        i--;
    }
    else
    byDefault();
}
//point----------------------------------------------------------------------------------------------------------
function point(){
    if(isPointPress===false)
    {
        document.getElementById('textarea').value=firstOperand+this.textContent;
        // firstOperand=firstOperand+this.textContent;
        isPointPress=true;
    }
}