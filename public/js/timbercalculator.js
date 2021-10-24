function calculateTotalCubic(){
    
    console.log("test");
    var mutty = calculateCubicWood('muttyareaid');
    document.getElementById('muttytotalid').innerHTML = result;
    var kambily = calculateCubicWood('kambilyareaid');
    document.getElementById('kambilytotalid').innerHTML = kambily;
    var pala = calculateCubicWood('palaareaid');
    document.getElementById('palatotalid').innerHTML = pala;
    // console.log("result ",result);

}


function calculateTotalPrice(){
    var muttyTotalCubic  = parseInt(document.getElementById('muttytotalid').value);
    var kambilyTotalCubic  = parseInt(document.getElementById('muttytotalid').value);
    var palaTotalCubic  = parseInt(document.getElementById('palatotalid').value);

    var muttyPrice  = parseInt(document.getElementById('muttypriceid').value);
    var kambilyPrice  = parseInt(document.getElementById('kambilypriceid').value);
    var palaPrice  = parseInt(document.getElementById('palapriceid').value);


    var muttyTotaprice = muttyTotalCubic * muttyPrice;
    var kambilyTotaprice = kambilyTotalCubic * kambilyPrice;
    var palaTotaprice = palaTotalCubic * palaPrice;

    var totalPrice = muttyTotaprice +kambilyTotaprice + palaTotaprice; 

    document.getElementById('totalPriceId').innerHTML = totalPrice;
}

function calculateCubicWood(woodId){

var woodLines = document.getElementById(woodId).value.split('\n');
var result = 0;
var resultSingle = 0;

for(var elm in woodLines){
    if(woodLines[elm]!="" && woodLines[elm]!=null){
        var lenth_girth_list  = woodLines[elm].split("-");
        resultSingle = 0;
        resultSingle = calculateCubicFormula(lenth_girth_list[0],lenth_girth_list[1]);
        result = result + resultSingle;
    }
}

    return result;

console.log(woodLines);

}

function calculateCubicFormula(lengthstr,girthstr){
    // (c x c x l)/2304
    var length = parseFloat(lengthstr);
    var girth = parseFloat(girthstr);
    var divisor = 2304;

    var divident = girth *girth*length 
    var result = divident/divisor
    result = parseFloat(result.toFixed(1));

    return result;
}
