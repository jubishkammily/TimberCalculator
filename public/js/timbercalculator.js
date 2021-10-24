function calculateTotalCubic() {

    // console.log("test");
    // var mutty = calculateCubicWood('muttyareaid');
    // document.getElementById('muttytotalid').innerHTML = mutty;
    // var kambily = calculateCubicWood('kambilyareaid');
    // document.getElementById('kambilytotalid').innerHTML = kambily;
    // var pala = calculateCubicWood('palaareaid');
    // document.getElementById('palatotalid').innerHTML = pala;
    // console.log("result ",result);

    var mutty = calculateCubicWoodMutty('muttyareaid');
    var kambily = calculateCubicWoodKambily('kambilyareaid');
    var pala = calculateCubicWoodPala('palaareaid');

    setUIWithCalculatedVolumFirstStep(mutty,kambily,pala);



}


function setUIWithCalculatedVolumFirstStep(mutty, kambily, pala) {

    setUIWithMuttyVOl(mutty);
    setUIWithKambilyVol(kambily);
    setUIWithPalaVol(pala);

}


function setUIWithMuttyVOl(mutty) {

    try {
        document.getElementById('muttytotalid36').innerHTML = mutty.thirtySix;
        document.getElementById('muttytotalid24').innerHTML = mutty.twentyFour;
        document.getElementById('muttytotalid15').innerHTML = mutty.fifteen;
        
    } catch (error) {
        
    }
      

}


function setUIWithKambilyVol(kambily) {

    try {
        document.getElementById('kambilytotalid30').innerHTML = kambily.thrity;
        document.getElementById('kambilytotalid24').innerHTML = kambily.twentyFour;
        document.getElementById('kambilytotalid18').innerHTML = kambily.eighteen;
        document.getElementById('kambilytotalid18Less').innerHTML = kambily.eighteenLess;
        
    } catch (error) {
        
    }
   
}



function setUIWithPalaVol(pala) {
    try {

    document.getElementById('palatotalid30').innerHTML = pala.thirty;
    document.getElementById('palatotalid24').innerHTML = pala.twentyFour;
    document.getElementById('palatotalid24Less').innerHTML = pala.twentyFourLess;
        
    } catch (error) {
        
    }
    

}

function calculateCubicWoodMutty(woodId) {

    var thritySix = 36;
    var twentyFour = 24;
    var fifteen = 15;

    var woodLines = document.getElementById(woodId).value.split('\n');
    var result = 0;
    var result36 = 0;
    var result24 = 0;
    var result15 = 0;

    for (var elm in woodLines) {
        if (woodLines[elm] != "" && woodLines[elm] != null) {
            var lenth_girth_list = woodLines[elm].split("-");
            resultSingle = 0;
            if (lenth_girth_list[1] >= thritySix) {
                result36 = result36 + calculateCubicFormula(lenth_girth_list[0], lenth_girth_list[1]);
            }

            if (lenth_girth_list[1] >= twentyFour && lenth_girth_list[1] < thritySix) {
                result24 = result24 + calculateCubicFormula(lenth_girth_list[0], lenth_girth_list[1]);
            }

            if (lenth_girth_list[1] >= fifteen && lenth_girth_list[1] < twentyFour) {
                result15 = result15 + calculateCubicFormula(lenth_girth_list[0], lenth_girth_list[1]);
            }
        }
    }

    result36 = Math.round(result36 * 10) / 10;
    result24 = Math.round(result24 * 10) / 10;
    result15 = Math.round(result15 * 10) / 10

    var resultObject = {
        "thirtySix": result36,
        "twentyFour": result24,
        "fifteen": result15,
    }
    resultObject.thirtySix = parseFloat(resultObject.thirtySix.toFixed(2));
    resultObject.twentyFour = parseFloat(resultObject.twentyFour.toFixed(2));
    resultObject.fifteen = parseFloat(resultObject.fifteen.toFixed(2));


    console.log("resultObject Mutty", resultObject);

    return resultObject;
}


function calculateCubicWoodKambily(woodId) {

    var topLimit = 30;
    var secondLimit = 24;
    var thirdLimit = 18;


    var woodLines = document.getElementById(woodId).value.split('\n');
    var result = 0;
    var result30 = 0;
    var result24 = 0;
    var result18 = 0;
    var result18Less = 0;

    for (var elm in woodLines) {
        if (woodLines[elm] != "" && woodLines[elm] != null) {
            var lenth_girth_list = woodLines[elm].split("-");
            resultSingle = 0;
            if (lenth_girth_list[1] >= topLimit) {
                var resultTemp = calculateCubicFormula(lenth_girth_list[0], lenth_girth_list[1]); 
                result30 = result30 + resultTemp;
            }

            if (lenth_girth_list[1] >= secondLimit && lenth_girth_list[1] < topLimit) {
                var resultTemp = calculateCubicFormula(lenth_girth_list[0], lenth_girth_list[1]); 
                result24 = result24 + resultTemp;
            }

            if (lenth_girth_list[1] >= thirdLimit && lenth_girth_list[1] < secondLimit) {
                result18 = result18 + calculateCubicFormula(lenth_girth_list[0], lenth_girth_list[1]);
            }

            if (lenth_girth_list[1] < thirdLimit) {
                var resultTemp = calculateCubicFormula(lenth_girth_list[0], lenth_girth_list[1]); 
                result18Less = result18Less + resultTemp;
            }
        }
    }
    var resultObject = {
        "thrity": result30,
        "twentyFour": result24,
        "eighteen": result18,
        "eighteenLess": result18Less,
    }
    resultObject.thrity = parseFloat(resultObject.thrity.toFixed(2));
    resultObject.twentyFour = parseFloat(resultObject.twentyFour.toFixed(2));
    resultObject.eighteen = parseFloat(resultObject.eighteen.toFixed(2));
    resultObject.eighteenLess = parseFloat(resultObject.eighteenLess.toFixed(2));


    console.log("resultObject Kambily", resultObject);

    return resultObject;
}


function calculateCubicWoodPala(woodId) {

    var thrity = 30;
    var twentyFour = 24;

    var woodLines = document.getElementById(woodId).value.split('\n');
    var result = 0;
    var result30 = 0;
    var result24 = 0;
    var result24Less = 0;

    for (var elm in woodLines) {
        if (woodLines[elm] != "" && woodLines[elm] != null) {
            var lenth_girth_list = woodLines[elm].split("-");
            resultSingle = 0;
            if (lenth_girth_list[1] >= thrity) {
                result30 = result30 + calculateCubicFormula(lenth_girth_list[0], lenth_girth_list[1]);
            }

            if (lenth_girth_list[1] >= twentyFour && lenth_girth_list[1] < thrity) {
                result24 = result24 + calculateCubicFormula(lenth_girth_list[0], lenth_girth_list[1]);
            }

            if (lenth_girth_list[1] <= twentyFour) {
                result24Less = result24Less + calculateCubicFormula(lenth_girth_list[0], lenth_girth_list[1]);
            }
        }
    }
    var resultObject = {
        "thirty": result30,
        "twentyFour": result24,
        "twentyFourLess": result24Less,
    }
    resultObject.thirty = parseFloat(resultObject.thirty.toFixed(2));
    resultObject.twentyFour = parseFloat(resultObject.twentyFour.toFixed(2));
    resultObject.twentyFourLess = parseFloat(resultObject.twentyFourLess.toFixed(2));


    console.log("resultObject Pala", resultObject);

    return resultObject;
}


function calculateTotalPrice() {
    var mutty36BasePrice = parseFloat(document.getElementById('muttypriceid36').value)
    var mutty36CubicPrice = parseFloat(document.getElementById('muttytotalid36').innerHTML) * mutty36BasePrice;

    var mutty24BasePrice = parseFloat(document.getElementById('muttypriceid24').value)
    var mutty24CubicPrice = parseFloat(document.getElementById('muttytotalid24').innerHTML) * mutty24BasePrice;
  

    var mutty15BasePrice = parseFloat(document.getElementById('muttypriceid15').value)
    var mutty15CubicPrice = parseFloat(document.getElementById('muttytotalid15').innerHTML) * mutty15BasePrice;
  

    // kambily
    var kambiy30BasePrice = parseFloat(document.getElementById('kambilypriceid30').value)
    var kambiy30CubicPrice = parseFloat(document.getElementById('kambilytotalid30').innerHTML) * kambiy30BasePrice;

    var kambiy24BasePrice = parseFloat(document.getElementById('kambilypriceid24').value)
    var kambiy24CubicPrice = parseFloat(document.getElementById('kambilytotalid24').innerHTML) * kambiy24BasePrice;
  

    var kambiy18BasePrice = parseFloat(document.getElementById('kambilypriceid18').value)
    var kambiy18CubicPrice = parseFloat(document.getElementById('kambilytotalid18').innerHTML) * kambiy18BasePrice;
  
    var kambiy18LessBasePrice = parseFloat(document.getElementById('kambilypriceid18Less').value)
    var kambiy18LessCubicPrice = parseFloat(document.getElementById('kambilytotalid18Less').innerHTML) * kambiy18LessBasePrice;
  
    // Pala
    var pala30BasePrice = parseFloat(document.getElementById('palapriceid30').value)
    var pala30CubicPrice = parseFloat(document.getElementById('palatotalid30').innerHTML) * pala30BasePrice;

    var pala24BasePrice = parseFloat(document.getElementById('kambilypriceid24').value)
    var pala24CubicPrice = parseFloat(document.getElementById('palatotalid24').innerHTML) * pala24BasePrice;
  

    var pala18BasePrice = parseFloat(document.getElementById('kambilypriceid18').value)
    var pala18CubicPrice = parseFloat(document.getElementById('palatotalid24Less').innerHTML) * pala18BasePrice;

    

    var totalPrice = mutty36CubicPrice + mutty24CubicPrice + mutty15CubicPrice + kambiy30CubicPrice + 
    kambiy24CubicPrice + kambiy18CubicPrice + pala30CubicPrice + pala24CubicPrice + pala18CubicPrice;


  

   
    document.getElementById('totalPriceId').innerHTML = totalPrice;
}



function calculateCubicFormula(lengthstr, girthstr) {
    // (c x c x l)/2304
    var length = parseFloat(lengthstr);
    var girth = parseFloat(girthstr);
    var divisor = 2304;

    var divident = girth * girth * length
    var result = divident / divisor
     result = parseFloat(result.toFixed(1));
    //result = Math.round(result * 10) / 10

    return result;
}
