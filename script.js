// Please play while contributing: https://www.youtube.com/watch?v=ZPhdpk5Rd6A

let blacklist = ['coronavirus', 'COVID-19', 'Omicron', 'booster', 'vaccine', 'vaccinated', 'vaccination', 'N95', 'Quarantine', 'CDC', 'lockdown', 'covid', 'delta variant', 'pandemic', 'mask', 'masked'];
let blacklistStr = blacklist.join('|');
let reg = new RegExp(blacklistStr, 'gi');

replaceText(document.body);
replaceImage(document.body);

// ***
function replaceText(element){
    if (element.hasChildNodes()){       

        //loop through element hierarchy until text element/ non child element is found
        element.childNodes.forEach(replaceText) 
    }   else if (element.nodeType === Text.TEXT_NODE && element.textContent.match(reg)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
    }
}

function replaceImage(element) {
        console.log(element.nodeName)
    if (element.hasChildNodes()){
        element.childNodes.forEach(replaceImage)
    }   else if (element.nodeName == "IMG" && (element.src).match(reg)){  // || JSON.stringify(element.alt).match(reg)) {
            console.log(JSON.stringify(element.alt));
            element.style.visibility = "hidden";
    }
}
