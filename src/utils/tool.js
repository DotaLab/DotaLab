export function formatSeconds(value) { 
    var theTime = parseInt(value);// 秒 
    var theTime1 = 0;// 分 
    var theTime2 = 0;// 小时 
    // alert(theTime); 
    if(theTime > 60) { 
    theTime1 = parseInt(theTime/60); 
    theTime = parseInt(theTime%60); 
    // alert(theTime1+"-"+theTime); 
    if(theTime1 > 60) { 
    theTime2 = parseInt(theTime1/60); 
    theTime1 = parseInt(theTime1%60); 
    } 
    } 
    var result = ""+parseInt(theTime)+"秒"; 
    if(theTime1 > 0) { 
    result = ""+parseInt(theTime1)+"分"+result; 
    } 
    if(theTime2 > 0) { 
    result = ""+parseInt(theTime2)+"小时"+result; 
    } 
    return result; 
} 

export function fromnowadays(value){
    var now = new Date().getTime() /1000;
    var timedis = now - value;
    var result = ""
    var theTime = parseInt(timedis);
    if(theTime < 3600)
        result = ""+parseInt(theTime/60) + "分钟前";
    else if(theTime < 86400)
        result = ""+parseInt(theTime/3600) + "小时前";
    else
    result = ""+parseInt(theTime/86400) + "天前";
    return result;
}