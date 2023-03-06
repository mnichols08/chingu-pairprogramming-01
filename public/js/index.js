const button = document.querySelector("button");


button.addEventListener('click', generateLorem)

async function fetchIpsum() {
        const length = document.querySelector("#inputNumber input").value;
         const type = document.querySelector('input[name="radios"]:checked').value;
         const static = document.querySelector(`input[type="checkbox"]`).checked;
       return await fetch(`/${type}/${length}/${static}`).then(data => data.json()).then(obj => obj)
}

async function generateLorem(e) {

    e.preventDefault();
    const data = await fetchIpsum().then(data => data)
        updateUi(data)
    
}

const updateUi = (data) => {
        const { bytes, type, string } = data;
        let obj = {};
        const interfaceFrame = document.querySelector('#interface-frame');
        interfaceFrame.innerText = '';
        if (type == 'paragraphs') {
                
                string.split('\n').map(item => {
                        const p = document.createElement('p');
                        p.innerText = item
                        interfaceFrame.append(p)
                });
                
                
        }
        if (type == 'words') {
                const p = document.createElement('p');
                p.innerText = string
                interfaceFrame.append(p)                
        } 
        if (type == 'bytes') {
                console.log(bytes)
                const p = document.createElement('p');
                p.innerText = string.slice(0, document.querySelector('#inputNumber input').value);
                interfaceFrame.append(p)                
        }
        if (type == 'lists') {
                const list = document.createElement('ul');
                 
                string.split('. ').map(item => {
                        const li = document.createElement('li');
                        li.innerText = item
                        list.append(li)
                        interfaceFrame.append(list)  
                });
        }   
             
      
}
