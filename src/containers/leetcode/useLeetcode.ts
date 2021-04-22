// 两数相加
const twoSum = function (nums: number[], target: number) {
  let arr: number[] = [];
  let finalArr = [];

  nums.forEach((num, index) => {
    const pairIdx = nums.findIndex((n, i) => n === target - num);
    if (pairIdx > -1 && index !== pairIdx) {
      arr.push(index);
      arr.push(pairIdx);
    }
    console.log(arr, "arr");
  });

  finalArr = arr.splice(0, 2);
  return finalArr;
};

// 只出现一次的数字
// 利用异或操作(相同为0，不相同为1)和Array.reduce累加
// reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。
const singleNumber = (nums: number[]) => {
  // [4,1,2,1,2]
  const reducer = (accumulator: number, curVal: number) => accumulator ^ curVal;
  return nums.reduce(reducer);
};

export { twoSum, singleNumber };
