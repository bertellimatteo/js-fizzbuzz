
const container = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
  let output = '';

  if (i % 3 === 0) {
    output += 'Fizz';
  }

  if (i % 5 === 0) {
    output += 'Buzz';
  }

  if (output === '') {
    output = i;
  }

  const element = document.createElement('div');
  element.textContent = output;
  container.appendChild(element);

  if (typeof output === 'number') {
    element.classList.add('number');
  } else {
    element.classList.add(output.toLowerCase());
  }
}



