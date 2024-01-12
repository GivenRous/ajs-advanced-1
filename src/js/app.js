const obj = {
  name: "мечник",
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function orderBy(obj, order) {
  const result = [];

  order.forEach((el) => {
    if (el in obj) {
      result.push({ key: el, value: obj[el] });
    }
  });

  Object.keys(obj)
    .sort()
    .forEach((el) => {
      if (!order.includes(el)) {
        result.push({ key: el, value: obj[el] });
      }
    });

  return result;
}
