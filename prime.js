
const primeLimit = document.querySelector('#primeLimit');
const primeButton = document.querySelector('#primeButton');
const primeResult = document.querySelector('#primeResult');

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

if (window.Worker) {
    let worker = new Worker('./prime.worker.js')
    primeButton.addEventListener('click', () => {
        const limit = primeLimit.valueAsNumber;
        console.log(limit, 'with worker');
      
        if (limit && limit > 0) {
          worker.postMessage(limit);
        }

        worker.onmessage = function(e) {
            primeResult.textContent = e.data;
        }
      });
} else {
    primeButton.addEventListener('click', () => {
        const limit = primeLimit.valueAsNumber;
        console.log(limit, 'without worker');
      
        if (limit && limit > 0) {
          const res = getPrimeNumbers(limit).join('; ');
          primeResult.textContent = res;
        }
      });
}


