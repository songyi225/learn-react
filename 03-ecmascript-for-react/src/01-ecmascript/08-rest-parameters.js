// --------------------------------------------------------------------------
// rest parameters

function _sum() {
  console.log(Array.isArray(arguments), arguments.length); // 배열로 오인할 수 있지만 배열은 아니다

  // Array.prototype.slice.call(arguments) 요걸 더 쉽게 이해할 수 있도록 Array.from으로 확인할 수 있다!
  const numbers = Array.from(arguments); // array? like array object? 유사배열임!

  console.log(Array.isArray(numbers), numbers.length);

  return numbers.reduce(
    /* reducer function */ (result, number) => result + number,
    0
  );
}

// 🔶 나머지 매개변수를 사용해 sum 함수 코드 로직을 다시 작성합니다.
// 참고: https://mzl.la/43Ro9yp
const sum = (...numbers) => numbers.reduce((total, number) => total + number);
// console.log(Array.isArray(numbers));
// console.log(arguments);
// return undefined
// console.log(numbers);

let result1_1 = _sum(2, 3, 9, 12, 105); // arguments가 전달
let result1_2 = sum(2, 3, 9, 12, 105);
console.log(Object.is(result1_1, result1_2));

let result2_1 = _sum(90, 418, -7);
let result2_2 = sum(90, 418, -7);
console.log(Object.is(result2_1, result2_2));
