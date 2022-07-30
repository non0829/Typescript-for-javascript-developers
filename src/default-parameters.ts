export {};

const nextTearSalary = (currentSalary: number, rate: number = 1.1): number => {
  return currentSalary * rate
};

console.log(nextTearSalary(1000));