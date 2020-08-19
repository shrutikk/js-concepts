// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function throttle(func, delay) {
    let timeout;
    let call;
    return function handler(...args) {
        if (!call) {
          func(...args);
          call = true;
           timeout = setTimeout( () => {
            clearTimeout(timeout)
            call = null;
          }, delay)
        }
        
       
    }
}


function debounce(func, delay) {
    let timeout;
    let call;
    return function handler(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    }
}

function print(str) {
  console.log('**********************'+str);
}

const throt = throttle(print, 6000);
const deb = debounce(print, 6000);

// console.log(throt);
// for (let i=1;i < 10; i++) {
//   // throt(i)
//   setTimeout(throt, i*2000, 'throttled string' +i);
// }

for (let i=1;i < 10; i++) {
  // throt(i)
  setTimeout(deb, i*2000, 'debbed string' +i);
}