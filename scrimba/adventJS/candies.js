function candies(children, candy) {
  //  write code here.
  const totalCandies = Math.floor(candy / children);
  return totalCandies * children;
}

console.log(candies(3, 10));
