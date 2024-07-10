var num = Math.floor(Math.random()*101);
var count=0;
console.log(num);
function findnum()
{
    var guessed_num=parseInt(document.getElementById("n1").value);
    count+=1;
    if(guessed_num==num)
    {
        document.getElementById("result").textContent="Congratulation!!!";
    }
    else if(guessed_num>num)
    {
        document.getElementById("result").textContent="Try with smaller number";
    }
    else{
        document.getElementById("result").textContent="Try with greater number";
    }
    document.getElementById("count").textContent=count;
}