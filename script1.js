function display(val)
{
    
    document.getElementById("result").value+=val;
    return val;
    
    /*const prevKey=document.getElementById('result').value.substring(document.getElementById('result').value.length-1);
    alert(prevKey);
    document.getElementById("result").value+=val;
    return val;*/
    /*const container=document.querySelector('.container');
    const keys=container.querySelector('.keys');
    keys.addEventListener('click', e => {
        if(e.target.matches('button'))
        {
            const key=e.target;
            const action=key.dataset.action;
            if(!action)//means a numeric key is pressed
            {
                document.getElementById("result").value+=val;
                return val;
            }
            else //means an operator has been pressed
            {
                const prevKey=document.getElementById('result').value.substring(document.getElementById('result').value.length-1);
                if(prevKey=="+"||prevKey=="-"||prevKey=="÷"||prevKey=="&times;")
                {
                    document.getElementById("result").value+="";
                    return val;
                }
            }
        }
    })*/
}
function solve()
{
    var x= document.getElementById('result').value;
    var y=eval(x);
    document.getElementById('result').value=y;
    return y;
}
function clearScreen()
{
    document.getElementById('result').value="";
}
function backspace()
{
    var s=document.getElementById("result").value;
    s=s.substring(0,s.length-1);
    document.getElementById('result').value=s;
}