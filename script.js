// Please play while contributing: https://www.youtube.com/watch?v=ZPhdpk5Rd6A

let blacklist = ['coronavirus', 'COVID-19', 'Omicron', 'booster', 'vaccine', 'N95', 'Quarantine', 'CDC', 'lockdown', 'covid', 'delta variant', 'pandemic'];
let blacklistStr = blacklist.join('|');
let reg = new RegExp(blacklistStr, 'gi');

replaceText(document.body)

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
