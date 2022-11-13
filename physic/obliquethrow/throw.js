function submit() {
    const v = document.getElementById("v")
    var vvalue = v.value
    const high = document.getElementById("high")
    var hvalue = high.value
    const angle = document.getElementById("angle")
    var avalue = angle.value
    const distance = document.getElementById("distance")
    var dvalue = distance.value
    const time = document.getElementById("time")
    var tvalue = time.value

    if(avalue == 0){
        if(dvalue != 0 && vvalue != 0)
            avalue = ((Math.asin((dvalue*10)/(vvalue*vvalue)))/2)*180/3.14 
        else if(hvalue != 0 && vvalue != 0)
            avalue = (Math.asin(Math.sqrt((hvalue*20)/(vvalue*vvalue))))*180/3.14
        else if(tvalue != 0 && vvalue != 0)
            avalue = (Math.asin((tvalue*10)/vvalue))*180/3.14 
        else if(hvalue != 0 && dvalue != 0)
            avalue = (Math.atan((hvalue*4)/dvalue))*180/3.14
        else if(tvalue != 0 && dvalue != 0)
            avalue = (Math.atan((tvalue*tvalue*20)/dvalue))*180/3.14
        
    }
    reala = (avalue*3.14)/180
    if(vvalue == 0){
        if(avalue != 0 && tvalue != 0)
        vvalue = (10*tvalue)/Math.sin(reala)
        else if(hvalue != 0 && avalue != 0)
        vvalue = (Math.sqrt((hvalue*2*10)/(Math.sin(reala)*Math.sin(reala))))
        else if(dvalue != 0 && avalue != 0)
        vvalue = (Math.sqrt((dvalue*10)/Math.sin(2*reala)))
    }
    if(dvalue == 0){
        dvalue = (vvalue*vvalue*Math.sin(2*reala))/10
    }

    if(hvalue == 0){
        hvalue = (dvalue*(Math.tan(reala)))/4
    }

    if(tvalue == 0){
        tvalue = (vvalue*Math.sin(reala))/10
    }
    console.log(vvalue)
    console.log(avalue)
    console.log(hvalue)
    console.log(dvalue)
    console.log(tvalue)

    v.value = vvalue
    angle.value = avalue
    high.value = hvalue
    distance.value = dvalue
    time.value = tvalue
}

