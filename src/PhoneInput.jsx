import './PhoneInput.css';

function PhoneInput() {
    return (
        <div className="placeholder">
            <input type="tel" placeholder="Phone number" onInput={onPhoneInput}/>
        </div>
    );
}

// TODO добавить условие, что если нажат backspace, то вся функция не срабатывает, чтобы не было проблем со стиранием
// TODO запрет на ввод всего, кроме цифр

function onPhoneInput(e) {
    let input = e.target; // e.target -> object на котором сработала функция, т.е. <input type="tel">
    let inputNumbersValue = getInputNumbersValue(input);
    let country = getInputCountry(input);

    if (input.value.match(/^375$/)) input.value = "+375 (";
    if (input.value.match(/^7$/)) input.value = "+7 (";
    if (input.value.match(/^380$/)) input.value = "+380 (";
    if (input.value.match(/^48$/)) input.value = "+48 ";
    if (input.value.match(/^370$/)) input.value = "+370 (";
    if (input.value.match(/^371$/)) input.value = "+371 ";

    input.value = format(input, inputNumbersValue, country);
}

function getInputNumbersValue(input) { // возвращает только введенные числа
    return input.value.replace(/[\D]/g, "");
}

function getInputCountry(input) {   // определяет страну по первым цифрам
    if (input.value.match(/^\+375/)) return 'by'
    if (input.value.match(/^\+7/)) return 'ru'
    if (input.value.match(/^\+380/)) return 'ua'
    if (input.value.match(/^\+48/)) return 'pl'
    if (input.value.match(/^\+370/)) return 'lit'
    if (input.value.match(/^\+371/)) return 'lat'
}

function format(input, inputNumbersValue, country) {    // форматирует введенный номер
    switch (country) {
        case 'by':
        case 'ua':
        case 'lit':
            input.value = input.value.replace(/\(\d\d$/, "(" + inputNumbersValue.substring(3, 5) + ") ");
            input.value = input.value.replace(/\b\d\d\d\d\d\d\d$/, inputNumbersValue.substring(5, 8) + "-" +
                inputNumbersValue.substring(8, 10) + "-" + inputNumbersValue.substring(10, 12));
            if (input.value.length > 19) input.value = input.value.substring(0, input.value.length - 1);
            break;
        case 'ru':
            input.value = input.value.replace(/\(\d\d\d$/, "(" + inputNumbersValue.substring(1, 4) + ") ");
            input.value = input.value.replace(/\b\d\d\d\d\d\d\d$/, inputNumbersValue.substring(4, 7) + "-" +
                inputNumbersValue.substring(7, 9) + "-" + inputNumbersValue.substring(9, 11));
            if (input.value.length > 18) input.value = input.value.substring(0, input.value.length - 1);
            break;
        case 'pl':
            input.value = input.value.replace(/\b\d\d\d\d\d\d\d\d\d$/, inputNumbersValue.substring(2, 5) + "-" +
                inputNumbersValue.substring(5, 8) + "-" + inputNumbersValue.substring(8, 11));
            if (input.value.length > 15) input.value = input.value.substring(0, input.value.length - 1);
            break;
        case 'lat':
            input.value = input.value.replace(/\b\d\d\d\d\d\d\d\d$/, inputNumbersValue.substring(3, 7) + "-" +
                inputNumbersValue.substring(7, 11));
            if (input.value.length > 14) input.value = input.value.substring(0, input.value.length - 1);
            break;
        default: break;
    }
    return input.value;
}

export default PhoneInput;
