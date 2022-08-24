function add (a, b){
    let addTotal = 0
    addTotal += a
    addTotal += b
    return addTotal
  }
  
  console.log(add(3, 10)) // 13
  
  function multiply (a, b){
    totalMult = 0
    for (let i = 1; i <= b; i = add(i, 1)){
      totalMult = add(totalMult, a)
    }
    return totalMult
  }
  
  console.log(multiply(6, 8)) // 48
  
  function power (a, b){
    totalPower = 0
    powerA = a
    for (let i = 1; i < b; i = add(i, 1)){
      while (totalPower == 0){
        totalPower = powerA
      }
      totalPower = multiply(add(totalPower, 0), a)
    }
    return totalPower
  }
  
  console.log(power(4, 8)) //65,536
  
  function factorial (number){
    totalFac = 0
    result0Fac = 1
    for (let i = 1; i <= number; i = add(i, 1)){
      while (totalFac == 0){
        totalFac = result0Fac
      }
      totalFac = multiply(totalFac, i)
      }
    return totalFac
  }
  
  console.log(factorial(9)) // 362,880