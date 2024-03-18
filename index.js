function transformArray(_array1){
    let newArray = []
    for (i of tt) {
        let _object1 = {};
        _object1[i] = i;
        newArray.push(_object1);
    }
    return newArray
}


function transformObject(_object){
    let temporaryArray = Object.entries(gg);
    let newArray = [];
    for (i = 0; i < temporaryArray.length; i++){
        let obj = {};
        obj[temporaryArray[i][0]] = temporaryArray[i][1]
        newArray.push(obj)
    }
    return newArray;
}

function createSelect(_array, _value = Object.values(_array[0])[1]) {
    let select = document.createElement("select");
    select.setAttribute("id", "select");
    let count = 0;
    for (el = 1; el < _array.length; el++){
        if (_value == Object.values(_array[el])[1]){
            count++;
        } 
    }
    for (i = count; i < _array.length; i++){
        let option = document.createElement("option");
        option.setAttribute("label", Object.values(_array[i])[0]);
        option.setAttribute("value", Object.values(_array[i])[1]);
        select.append(option);
    }
    document.body.append(select);
    return select;
}


let testArray = [{label: "Элемент 1", value: "Элемент 1"}, {label: "Элемент 2", value: "Элемент 2"}];

createSelect(testArray)