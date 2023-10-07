function isPrimeNumber(number) {
    if (number % 2 === 0) return false;
    let isPrime = true;
  
    for (let i = 3; i < number; i += 2) {
      if (number % i == 0) {
          isPrime = false;
          break;
      }
    }
    
    return isPrime;
}
  
function getPrimeNumbers(limit) {
    const result = [];
    for (let i = 0; i <= limit; i++) {
        if (isPrimeNumber(i)) {
        result.push(i);
        }
    }

    return result;
}

onmessage = function(e) {
    console.log('Worker: Message received from main script');
    const number = e.data;
    if (number && number > 0) {
        postMessage(getPrimeNumbers(number).join('; '))
    }
  }
