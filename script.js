const button = document.querySelector("button");

button.addEventListener("click", generateLorem);

function generateLorem(e) {
    e.preventDefault();
    const inputNumber = document.querySelector("#inputNumber input").value;
    const outputType = document.querySelector('input[name="radios"]:checked').value;
    const checkbox = document.querySelector(`input[type="checkbox"]`).checked;
    console.log([ inputNumber, outputType, checkbox ])
    return [ inputNumber, outputType, checkbox ]
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f082323548mshee1e723d815ebc2p1baa4ajsn00e9e87749e0',
		'X-RapidAPI-Host': 'montanaflynn-lorem-text-generator.p.rapidapi.com'
	}
};

const generateParagraph = (count, length, options) => fetch(`https://montanaflynn-lorem-text-generator.p.rapidapi.com/paragraph?count=${count}&length=${length}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    
    
const generateWord = (count, options) => fetch(`https://montanaflynn-lorem-text-generator.p.rapidapi.com/word?count=${count}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

const generateSentence = (length, count, options) => fetch(`https://montanaflynn-lorem-text-generator.p.rapidapi.com/sentence?length=${length}&count=${count}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));