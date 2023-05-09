
// Write a function named setAlarm that has two arguments.

// setAlarm

{
function setAlarm(employed, vacationing) {
    return employed && !vacationing;
}

console.log(setAlarm(true, true))
console.log(setAlarm(false, false))
console.log(setAlarm(false, true))
console.log(setAlarm(true, false))
}


// Count Odd Numbers

{
function oddNumberCount(number){
    let count = 0;
    for (let i = 1; i < number; i += 2) {
      count++;
    }
    return count;
  }
  console.log(oddNumberCount(7))
  console.log(oddNumberCount(16))
}


// Disemvowling Trolls

{
  function trollsBeGone(string) {
    const vowels = /[aeiou]/gi;
    return string.replace(vowels, "")
        }

console.log(trollsBeGone('Hello I am a troll'))
}


// Bank Account Summary

{
const bankInfo = {
        savings: 500,
        checking: 200,
        moneyMarket: -300,
        creditCard: -400
};

function bankAccountSummary(bankInfo) {
    let total = 0;
    for (let account in bankInfo) {
        total += bankInfo[account];
    }
   return total;
}
const bankTotal = bankAccountSummary(bankInfo);

function inTheRed(total) {
    return total < 0;
}

console.log(inTheRed(bankTotal))
}