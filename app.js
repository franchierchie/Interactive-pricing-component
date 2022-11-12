// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const pageviews = document.querySelector('.pageviews-number');
const price = document.querySelector('.price-number');
const rangeSlider = document.querySelector('.range-slider');
const switchInput = document.querySelector('.slider');

let price1 = 8;
let price2 = 12;
let price3 = 16;
let price4 = 24;
let price5 = 36;

let pageviews1 = 10;
let pageviews2 = 50;
let pageviews3 = 100;
let pageviews4 = 500;
let pageviews5 = 1;

let discount = 0.25; // 25%
let switchInputValue = 0;

pageviews.innerHTML = `${pageviews3}k`;
price.innerHTML = price3.toFixed(2);

const changeValues = () => {
    switch (rangeSlider.value) {
        case'1':
            pageviews.innerHTML = `${pageviews1}k`;
            if (switchInputValue === 0) {
                price.innerHTML = price1.toFixed(2);
            } else {
                price.innerHTML = (price1 * (1 - discount)).toFixed(2);
            }
            
            break;

        case'2':
            pageviews.innerHTML = `${pageviews2}k`;
            if (switchInputValue === 0) {
                price.innerHTML = price2.toFixed(2);
            } else {
                price.innerHTML = (price2 * (1 - discount)).toFixed(2);
            }
            
            break;

        case'3':
            pageviews.innerHTML = `${pageviews3}k`;
            if (switchInputValue === 0) {
                price.innerHTML = price3.toFixed(2);
            } else {
                price.innerHTML = (price3 * (1 - discount)).toFixed(2);
            }
            
            break;

        case'4':
            pageviews.innerHTML = `${pageviews4}k`;
            if (switchInputValue === 0) {
                price.innerHTML = price4.toFixed(2);
            } else {
                price.innerHTML = (price4 * (1 - discount)).toFixed(2);
            }
            
            break;


        case'5':
            pageviews.innerHTML = `${pageviews5}M`;
            if (switchInputValue === 0) {
                price.innerHTML = price5.toFixed(2);
            } else {
                price.innerHTML = (price5 * (1 - discount)).toFixed(2);
            }
            
            break;
    
        default:
            break;
    }
}



rangeSlider.addEventListener('input', changeValues);
switchInput.addEventListener('click', () => {
    if (switchInputValue === 0) {
        switchInputValue  = 1;
        changeValues();
    } else {
        switchInputValue = 0;
        changeValues();
    }
});