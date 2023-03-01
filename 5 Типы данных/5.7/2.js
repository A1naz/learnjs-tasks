const aclean = (arr) => {
  let map = new Map();
  for (let val of arr) {
    let sortedWords = val
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')
      .toLowerCase();
    map.set(sortedWords, val);
  }
  return Array.from(map.values());
};

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));
