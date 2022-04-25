
function catYears (humanYears:number) :number{
  if(humanYears === 1) return 15
   if(humanYears === 2) return 9 + catYears(humanYears -1)
 
  return 4 + catYears(humanYears -1 )
 
  
}

function dogYears (humanYears:number):number {
  if(humanYears === 1) return 15
   if(humanYears === 2) return 9 + dogYears(humanYears -1)
 
  return 5 + dogYears(humanYears -1 )
 }
  

export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  // Your code here!
  return [humanYears,catYears(humanYears),dogYears(humanYears)];
}
//or
export function humanYearsCatYearsDogYears2(humanYears: number): [number, number, number] {
  return [ humanYears,
  humanYears === 1 ? 15 : 15 + 9 + (4 * (humanYears - 2 )),
  humanYears === 1 ? 15 : 15 + 9 + (5 * (humanYears - 2 ))]
}
humanYearsCatYearsDogYears(1)