// tady je místo pro náš program

// Obsah elipsy

const pi = Math.PI;

const ellipseArea = (width, height) => {
    return ((width/2)*(height/2)) * pi;
}

console.log(ellipseArea(1,2))


// Maximum ze dvou čísel

const max2 = (cislo1, cislo2) => {

    if (cislo1 > cislo2) {
        return cislo1;
    } else {
        return cislo2;
    }
}

console.log(max2(10,20))


// Kontrola DIČ

let button = document.querySelector('.button');
let dataElm = document.querySelector('.data');
let msgElm = document.querySelector('.msg');
let prefix, digits;

button.addEventListener('click',
  function() {
	let inputStr = prompt('DIČ:');

	if (inputStr === '') {
        alert('DIČ je povinný údaj');
    } else if (inputStr.length > 12) {
        alert('Špatný vstupní formát');
    } else {
        prefix = inputStr.slice(0,2);

        if (prefix !== 'CZ') {
            dataElm.innerHTML = 'Vstupní hodnota <strong>' + prefix + '</strong>';
            msgElm.innerHTML = 'Špatný prefix';
            msgElm.classList.add('msg--invalid');
        } else {
            digits = inputStr.slice(2,inputStr.length);

            if (validator.isInt(digits)) {
                dataElm.innerHTML = 'Vstupní hodnota <strong>' + inputStr + '</strong>';
                msgElm.innerHTML = 'Obsahuje pouze čísla';
                msgElm.classList.add('msg--valid');
            } else {
                dataElm.innerHTML = 'Vstupní hodnota <strong>' + digits + '</strong>';
                msgElm.innerHTML = 'Obsahuje nepovolené znaky';
                msgElm.classList.add('msg--invalid');
            }

            /*button.classList.add('hidden');*/
        }
		
	}
  }
);

/*let prefix, digits;
const isDIC = (inputStr) => {
    if (inputStr.length > 12) {
        return false;
    } else {
        prefix = inputStr.slice(0,2);

        if (prefix !== 'CZ') {
            return false;
        } else {
            digits = inputStr.slice(2,inputStr.length);

            if (validator.isInt(digits)) {
                return true;
            } else {
                return false;
            }
        }
    }
}*/