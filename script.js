function dice1()
{
    var gen = Math.floor(Math.random()*6);
    gen++;
    var arr = document.querySelectorAll("#dice1 .dicenumber");
    for(var i=0;i<arr.length;i++)
    {
        arr[i].classList.add('vi');
    }
    if(gen == 1)
    {
        arr[4].classList.toggle('vi');
    }
    else if(gen == 2)
    {
        arr[0].classList.toggle('vi');
        arr[8].classList.toggle('vi');
    }
    else if(gen == 3)
    {
        arr[0].classList.toggle('vi');
        arr[4].classList.toggle('vi');
        arr[8].classList.toggle('vi');
    }
    else if(gen ==4)
    {
        arr[0].classList.toggle('vi');
        arr[2].classList.toggle('vi');
        arr[6].classList.toggle('vi');
        arr[8].classList.toggle('vi');
    }
    else if(gen == 5)
    {
        arr[0].classList.toggle('vi');
        arr[2].classList.toggle('vi');
        arr[4].classList.toggle('vi');
        arr[6].classList.toggle('vi');
        arr[8].classList.toggle('vi');
    }
    else{
        arr[0].classList.toggle('vi');
        arr[2].classList.toggle('vi');
        arr[3].classList.toggle('vi');
        arr[5].classList.toggle('vi');
        arr[6].classList.toggle('vi');
        arr[8].classList.toggle('vi');
    }
    return gen;
}
function dice2()
{
    var gen = Math.floor(Math.random()*6);
    gen++;
    var arr = document.querySelectorAll("#dice2 .dicenumber");
    for(var i=0;i<arr.length;i++)
    {
        arr[i].classList.add('vi');
    }
    if(gen == 1)
    {
        arr[4].classList.toggle('vi');
    }
    else if(gen == 2)
    {
        arr[0].classList.toggle('vi');
        arr[8].classList.toggle('vi');
    }
    else if(gen == 3)
    {
        arr[0].classList.toggle('vi');
        arr[4].classList.toggle('vi');
        arr[8].classList.toggle('vi');
    }
    else if(gen ==4)
    {
        arr[0].classList.toggle('vi');
        arr[2].classList.toggle('vi');
        arr[6].classList.toggle('vi');
        arr[8].classList.toggle('vi');
    }
    else if(gen == 5)
    {
        arr[0].classList.toggle('vi');
        arr[2].classList.toggle('vi');
        arr[4].classList.toggle('vi');
        arr[6].classList.toggle('vi');
        arr[8].classList.toggle('vi');
    }
    else{
        arr[0].classList.toggle('vi');
        arr[2].classList.toggle('vi');
        arr[3].classList.toggle('vi');
        arr[5].classList.toggle('vi');
        arr[6].classList.toggle('vi');
        arr[8].classList.toggle('vi');
    }
    return gen;
}
var btn = document.querySelector("button");
btn.addEventListener('click', () => {
    var d1 = dice1();
    var d2 = dice2();
    msg(d1,d2);
});
function msg(d1,d2)
{
    var msg = document.querySelector("h3");
    if(d1>d2)
    {
        msg.innerHTML="WINNER IS PLAYER 1";
    }
    else if(d2>d1)
    {
        msg.innerHTML="WINNER IS PLAYER 2";
    }
    else
    {
        msg.innerHTML="IT'S DRAW";
    }
}
