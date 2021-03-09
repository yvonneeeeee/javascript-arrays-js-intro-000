var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(elememt)
  return array
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}