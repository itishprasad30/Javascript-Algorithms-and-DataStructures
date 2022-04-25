export function solution(nums: number[]): number[] {
  return nums === null ? [] : nums.sort((a,b) => a - b)
}

solution([1, 2, 10, 50, 5]) //[1, 2, 5, 10, 50]