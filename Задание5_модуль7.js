// Задание 5
class ElectricalAppliances{
  constructor(name){
  this.voltage = '220v';
  this.name = name;
  }
  
turnedOnDevice(powerconsumption, on){
  let switchOn = on;
  if (on == 1){
  switchOn = "Вкл";
  } else {
  switchOn = "Выкл";
};
console.log(`Потребляемая мощьность включенным прибором ${this.name} за 1 час,
  равна ${powerconsumption}Вт. ${this.name} : ${switchOn}`);
  
  }
  
}
  
class Characteristics extends ElectricalAppliances {
  constructor (name, voltage){
  super(name);
  this.voltage = voltage;
  }
  }
  
  const microwave = new Characteristics('microwave', 220);
  const personalComputer = new Characteristics('personalComputer', 220);
  const toaster = new Characteristics('toaster', 220);
  const tvSet = new Characteristics('tvSet', 220);
  
  console.log(microwave, personalComputer, toaster, tvSet)
  microwave.turnedOnDevice(550, 1);
  personalComputer.turnedOnDevice(240, 1);
  toaster.turnedOnDevice(300, 0);
  tvSet.turnedOnDevice(200, 1)
  
  