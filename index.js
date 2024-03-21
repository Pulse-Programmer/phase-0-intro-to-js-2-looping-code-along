function writeCards(arr, eventName) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let message = `Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`;
    newArr.push(message);
  }
  return newArr;
}

function countDown(j) {
  j = Math.floor(j);
  if (j > 0) {
    while (j !== -1) {
      console.log(j--);
    }
  } else console.error("Error: Enter positive integer!");
}
