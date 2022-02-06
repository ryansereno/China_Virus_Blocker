// Please play while contributing: https://www.youtube.com/watch?v=ZPhdpk5Rd6A

let blacklist = ['coronavirus', 'COVID-19', 'Omicron', 'booster', 'vaccine', 'vaccinated', 'vaccination', 'N95', 'Quarantine', 'CDC', 'lockdown', 'covid', 'delta variant', 'pandemic', 'mask', 'masked', 'masking'];
let blacklistStr = blacklist.join('|');
let reg = new RegExp(blacklistStr, 'gi');

replaceContent(document.body);

// ***
function replaceContent(element){
    if (element.hasChildNodes()){       

        //loop through element hierarchy until text element/ non child element is found
        element.childNodes.forEach(replaceContent) 
    }   else if (element.nodeType === Text.TEXT_NODE && element.textContent.match(reg)) {
            element.parentElement.style.color = "white"
            element.parentElement.style.backgroundColor = "white"
    }   else if (element.nodeName == "IMG" && (element.src).match(reg)){  // || JSON.stringify(element.alt).match(reg)) {
        console.log(JSON.stringify(element.alt));
        element.style.visibility = "hidden";
    }
}
