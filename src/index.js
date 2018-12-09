function min (values){
    var minValue;
    if (values && values.length) {
        values.forEach(function(value){
            if (
                typeof value === 'number'
                && (value < minValue
                    || minValue === undefined)
            ) {
                minValue = value;
            }
        });
    }
    return minValue;
}

function max (values){
    var maxValue;
    if (values && values.length) {
        values.forEach(function(value){
            if (
                typeof value === 'number'
                && (value > maxValue
                    || maxValue === undefined)
            ) {
                maxValue = value;
            }
        });
    }
    return maxValue;
}

function sum (){
    var sum = 0,
        length = arguments.length,
        value;
    while(length--) {
        value = arguments[length];
        if (typeof value === 'number') {
            sum += value;
        }
    }
    return sum;
}