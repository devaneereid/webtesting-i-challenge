module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  console.log('Success Item:', item);
    if (item.enhancement <= 20) {
      item.enhancement = item.enhancement + 1;
    }
  return { ...item };
};

// function succeed(item) {
//   const newItem = {...item};
//   console.log('Success Item:', newItem);
//     if (newItem.enhancement <= 20) {
//       newItem.enhancement = newItem.enhancement + 1;
//     }
//   return newItem;
// };

function fail(item) {
  console.log('Fail Item:', item);
    if (item.enhancement < 15) {
      item.durability -= 5;
    }
    if (item.enhancement >= 15) {
      item.durability -= 10;
    }
    if (item.enhancement > 16) {
      item.enhancement -= 1;
    }
  return { ...item };
};

// function fail(item) {
//   const newItem = {...item};
//   console.log('Fail Item:', newItem);
//     if (newItem.enhancement < 15) {
//       newItem.durability -= 5;
//     }
//     if (newItem.enhancement >= 15) {
//       newItem.durability -= 10;
//     }
//     if (newItem.enhancement > 16) {
//       newItem.enhancement -= 1;
//     }
//   return newItem;
// };

function repair(item) {
  console.log('Repair Item:', item);
    if (item.durability > 0 || item.durability <= 100) {
      return { ...item, durability: 100 };
    } else {
  return { ...item };
  }
};

// function repair(item) {
//   const newItem = {...item};
//   console.log('Repair Item:', newItem);
//     if (newItem.durability > 0 || newItem.durability <= 100) {
//       return { ...newItem, durability: 100 };
//     } else {
//   return newItem;
//   }
// };

function get(item) {
  return { ...item };
}
