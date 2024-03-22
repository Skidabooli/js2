function transformArray(_array1){
    let newArray = []
    for (i of _array1) {
        let _object1 = {};
        _object1.label = i;
        _object1.value = i;
        newArray.push(_object1);
    }
    return newArray
}

function transformObject(_object){
    let temporaryArray = Object.entries(_object);
    let newArray = [];
    for (i = 0; i < temporaryArray.length; i++){
        let obj = {};
        obj.label = temporaryArray[i][0];
        obj.value = temporaryArray[i][1];
        newArray.push(obj);
    }
    return newArray;
}

function createSelect(_array, _value) {
    if (Array.isArray(_array) && typeof(_array[0]) != "object"){
        _array = transformArray(_array)
    }
    else if(!Array.isArray(_array) && typeof(_array) == "object") {
        _array = transformObject(_array)
    }

    let select = document.createElement("select");
    select.setAttribute("id", "select");
    let count = 0;
    for (el = 0; el < _array.length; el++){
        if (_value == Object.values(_array[el])[1]){
            break;
        }
        else if (_value == null){
            count = 0;
            break;
        }
        count++;
    }
    if (count == _array.length){
        count = 0;
    }

    for (i = count; i < _array.length; i++){
        let option = document.createElement("option");
        option.setAttribute("label", Object.values(_array[i])[0]);
        option.setAttribute("value", Object.values(_array[i])[1]);
        select.append(option);
    }
    return select;
}


let testArray = [{label: "Элемент 1", value: "Элемент 1.0"}, {label: "Элемент 2", value: "Элемент 2.0"}];
let testArray1 = ["Пункт 1", "Пункт 2", "Пункт 3", "Пункт 4", "Пункт 5"];
let testArray2 = {
    "№ 1": 1,
    "№ 6": 6,
    "№ 2": 2,
    "№ 3": 3
};

document.body.append(createSelect(testArray2, 6));
document.body.append(createSelect(testArray1));
document.body.append(createSelect(testArray, "Элемент 6.0"));