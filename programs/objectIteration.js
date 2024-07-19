const obj = {
  name: "chand",
  age: 16,
  address: "pune",
  isActive: true,
};

for (let key in obj) {
  console.log(key, obj[key]);
}

for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
