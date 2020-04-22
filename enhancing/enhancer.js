module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed.
  console.log('Success Item:', item);
  if (item.enhancement < 20) {
    item.enhancement = item.enhancement + 1;
  }
  return { ...item };
}
;

function fail(item) {
  return { ...item };
}

function repair(item) {
  console.log('Repair Item:', item);
    if (item.durability > 0 || item.durability <= 100) {
      return { ...item, durability: 100 };
    } else {
  return { ...item };
  }
};

function get(item) {
  return { ...item };
}
