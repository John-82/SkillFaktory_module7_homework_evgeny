// Задание 2
let units = {
  alpha : 9,
  bravo : 4,
  delta : 6
}
function unitsArg(units){
  console.log('alpha' in units);
}

unitsArg(units, 'alpha')