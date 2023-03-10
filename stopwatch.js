var startbtt=document.getElementById("Start");
var stopbtt=document.getElementById("Stop");
var resetbtt=document.getElementById("Reset");

var hour=0;
var min=0;
var sec=0;
var mili=0;
var hourid=0,minid=0,secid=0,miliid=0;
startbtt.addEventListener("click",function()
{
    miliid=setInterval(function()
    {
        mili++;
        document.getElementById("milisecond").innerHTML=mili;
        if(mili==100)
        mili=0;
    },1);
    secid=setInterval(function()
    {
        sec++;
        document.getElementById("second").innerHTML=sec;
        if(sec==59)
        sec=0;
    },1000);
    minid=setInterval(function()
    {
        min++;
        document.getElementById("minute").innerHTML=min;
        if(min==59)
        min=0;
    },60000);
    hourid=setInterval(function()
    {
        hour++;
        document.getElementById("hour").innerHTML=hour;
    },3600000);
});
stopbtt.addEventListener("click",function()
{
    clearInterval(miliid);
    clearInterval(secid);
    clearInterval(minid);
    clearInterval(hourid);
})
resetbtt.addEventListener("click",function()
{
    document.getElementById("milisecond").innerHTML="00";
    document.getElementById("second").innerHTML="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("hour").innerHTML="00";
    hour=0;
    min=0;
    sec=0;
    mili=0;
    hourid=0,minid=0,secid=0,miliid=0;  
})


// function stopwatch()
// {
//     if(timer)
//     {
//         mili++;
//         if(mili==100)
//         {
//             sec++;
//             mili=0;
//         }
//         if(sec==60)
//         {
//             min++;
//             sec=0;
//         }
//         if(min==60)
//         {
//             hour++;
//             min=0;
//             sec=0;
//         }

//         var hrstring=hour;
//         var minstring=min;
//         var secstring=sec;
//         var milistring=mili;

//         if(hour<10)
//         hrstring="0"+hrstring;
//         if(min<10)
//         minstring="0"+minstring;
//         if(sec<10)
//         secstring="0"+secstring;
//         if(mili<10)
//         milistring="0"+milistring;

//         document.getElementById("hour").innerHTML=hrstring;
//         document.getElementById("minute").innerHTML=minstring;
//         document.getElementById("second").innerHTML=secstring;
//         document.getElementById("milisecond").innerHTML=milistring;
//         setTimeout(stopwatch,10);
//     }
// }

// var startbtt=document.getElementById("Start");
// var stopbtt=document.getElementById("Stop");
// var resetbtt=document.getElementById("Reset");

// var hour=00;
// var min=00;
// var sec=00;
// var mili=00;

// startbtt.addEventListener("click",function()
// {
//     timer=true;
//     stopwatch();
// });
// stopbtt.addEventListener("click",function()
// {
//     timer=false;
// });
// resetbtt.addEventListener("click",function()
// {
//     timer=false;
//     hour=0;
//     min=0;
//     sec=0;
//     mili=0;
//     document.getElementById("hour").innerHTML="00";
//     document.getElementById("minute").innerHTML="00";
//     document.getElementById("second").innerHTML="00";
//     document.getElementById("milisecond").innerHTML="00";
// });