let screenId=document.getElementById("screen-id");

function isOperator(ch){
    if(ch=='+' || ch=='-' || ch=='*' || ch=='/')
    {
        return 1;
    }
    else
    {
        return 0;
    }
}




function number(num){
    if(screenId.textContent.length<=48){
        screenId.textContent+=num;
    }
}

function operator(op){
    var string=screenId.textContent;
    if(string.length==0 && op=="-")
    {
        screenId.textContent+=op;
    }

    if(string.length>0 && string.length<=48 && !isOperator(string.charAt(string.length-1)) )
    {
        screenId.textContent+=op;
    }
}



function ac(){
    screenId.textContent="";
}
function back(){
    screenId.textContent=screenId.textContent.slice(0,-1);
}


function num(i,j,string,arr) {
    n=string.slice(i,j);
    n=parseInt(n);
    arr.push(n);
    return [arr,j+1];
}


function makeArr()
{
    var string=document.getElementById("screen-id").textContent;
    var arr=[];


    var i=0;
    var j=0;
    while(j<string.length)
    {
        if (isOperator(string[0]) && j==0)
        {
            arr.push(string[0]);
            i+=1;
            j+=1;
            continue;
        }
        if(isOperator(string[j]))
        {
            [arr,i]=num(i,j,string,arr);
            arr.push(string[j]);
        }
        j+=1;
    }
    if(i!=j)
    {
        [arr,i]=num(i,j,string,arr);
    }

    if (isOperator(string.charAt(string.length-1)))
    {
        arr.pop();
    }

    if(arr[0]=='-')
    {
        arr[1]=-arr[1];
        arr.splice(0,1);
    }

return arr;
}


function calcn(operator,num,acc)
{
    if(operator=='+')
    {
        return acc+=num;
    }
    else if(operator=='-')
    {  
        return acc-=num;
    }
    else if(operator=='*')
    {
        return acc*=num;
    }
    else if(operator=='/')
    {
        return acc/=num;
    }
}

function equals()
{
    arr=makeArr();
    var acc=arr[0];

    for(i=0;i<arr.length;i++)
    {
        if(arr[i]=='/' && arr[i+1]==0)
        {
            screenId.textContent="INF";
            return;
        }
    }

    for(i=0;i<arr.length;i++)
    {
        if (isOperator(arr[i]))
        {
            acc=calcn(arr[i],arr[i+1],acc);
        }
    }
    screenId.textContent=acc;
}



















/*
function numeq(x,y,j){
    return x*j+y;

}


function conv(i){
    var numb=0;
    var j=0;
    for(;isOperator(string[i])!=1;j*=10,i++)
    {
        numb=numeq(numb,parseInt(string[i]),j);
    }
    console.log(numb);
    return [numb,i--];
}







function equals(){
    if (isOperator(string[0]) || isOperator(string[-1])){
        screenId.textContent="Invalid";
    }
    let i=0;
    if (string[0]=='-'){
        arr[0]=-arr[0];
        i++;
    }
    else if (string[0]=='+'){
        i++;
    }
    for(;string[i]!='\0';i++)
    {
        if(isOperator(string[i])){
            arr.append(string[i]);
        }
        else{
            var numX=conv(i);
            arr.append(numX[0])
            i=numX[1];
        }
    }
}
*/