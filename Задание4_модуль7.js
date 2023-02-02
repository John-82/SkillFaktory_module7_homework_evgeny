// Задание 4
function ElectricalAppliances(name){
  this.voltage = '220v',
  this.name = name
  }
  
  ElectricalAppliances.prototype.turnedOnDevice = function (powerconsumption, on){
  let switchOn = on;
  if (on === 1){
  switchOn = 'Вкл';
  } else {
  switchOn = 'Выкл';
  }
  console.log(`Потребляемая мощьность включенным прибром ${this.name} за 1 час,
  равна ${powerconsumption}Вт. ${this.name}: ${switchOn}`);
  
  
  };
  
  function Characteristics(name, voltage) {
  this.name = name,
  this.voltage = voltage
  }
  
  Characteristics.prototype = new ElectricalAppliances();
  
  const microwave = new Characteristics('microwave', 220);
  const personalComputer = new Characteristics('personalComputer', 220);
  const toaster = new Characteristics('toaster', 220);
  const tvSet = new Characteristics('tvSet', 220);
  
  microwave.turnedOnDevice(550, 1);
  personalComputer.turnedOnDevice(240, 1);
  toaster.turnedOnDevice(300, 0);
  tvSet.turnedOnDevice(200, 1);
  
  console.log(microwave, personalComputer, toaster, tvSet);