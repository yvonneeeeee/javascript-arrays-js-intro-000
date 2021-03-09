var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
  return [element, ...array];
}

functon destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array
}
