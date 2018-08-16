// # general syntax for all array methods covered in primer
arrayName.methodName((parameters) => {
    code to execute
  })

// # forEach
//normal function syntax
arrayName.forEach(function(item, index){
    code to execute
})

//arrow function syntax
arrayName.forEach((item, index) => {code to execute})

// # map
//normal function syntax
arrayName.map(function(item){
    return code to execute
})

//arrow function
arrayName.map((item) => code to execute);

// # reduce
//normal function syntax
arrayName.reduce(function(total, currentElement){
    return code to execute
})

//arrow function syntax
arrayName.reduce((total, currentElement) => code to execute)





// an iterator is something with index, iteratable means something can be accessed throughout
// a for loop is an iterable. Accessing all of the data.

// forEach --> does an action without returning
// .map --> returns a new array
// .reduce --> looks at all of the values in an array and tries to make them 1 value
