const obj = {
  name: "мечник",
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

function createObj(key, value) {
  this.key = key;
  this.value = value;
}
const result = [];

for (const item in obj) {
  const newObj = new createObj(item, obj[item]);
  result.push(newObj);
}
console.log(result);
