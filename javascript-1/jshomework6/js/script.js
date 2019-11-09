let newArray= new  Array();
const    filterBay = (dataType,...arr) => {

    for(let i=0 ; i < arr.length ; i++) {
        if(typeof(arr[i])!==dataType){
            newArray.push(arr[i]);
        }
    }
    return newArray;

}

console.log(filterBay('string', 1, "23", "isi", null,56, 'Qasimov',78));
