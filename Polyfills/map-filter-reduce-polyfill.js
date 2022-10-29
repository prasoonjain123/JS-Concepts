let arr = [1, 2, 3, 4];

Array.prototype.newMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    newArr.push(cb(item, i, this));
  }
  return newArr;
};

Array.prototype.newFilter = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

Array.prototype.newReduce = function (cb, acc) {
  let res = acc;
  for (let i = 0; i < this.length; i++) {
    res = res ? cb(res, this[i], i, this) : this[i];
  }
  return res;
};

const temp1 = arr.newMap((num, i, arr) => {
  return num * 2 + i;
});
const temp2 = arr.newFilter((num, i, arr) => {
  return num > 2 && i > 1;
});
const temp3 = arr.newReduce((acc, num, i, arr) => {
  return acc + num + i;
});

console.log({ arr, temp1, temp2, temp3 });
