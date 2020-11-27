const txtElement = ['Ahmad Zen Mustafa','iIkhlasul Amal','Muhammad Zeidar Rahman'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function tes(){
 
if(count == txtElement.length){
    count = 0;
}

currentTxt = txtElement[count];

words = currentTxt.slice(0, ++txtIndex);
document.querySelector('.efek-tes').textContent = words;

setTimeout(tes,500);

if(words.length == currentTxt.length){
    count++;
    txtIndex = 0;
}

})();
