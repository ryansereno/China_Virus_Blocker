replaceText(document.body)

function replaceText(element){
    if (element.hasChildNodes()){       //loop through element hierarchy until text element/ non child element is found
        element.childNodes.forEach(replaceText) 
    }   else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/coronavirus/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
        if (element.textContent.match(/COVID-19/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
        if (element.textContent.match(/Omicron/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
        if (element.textContent.match(/booster/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
        if (element.textContent.match(/vaccine/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
        if (element.textContent.match(/N95/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
        if (element.textContent.match(/Quarantine/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
        if (element.textContent.match(/CDC/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
        if (element.textContent.match(/lockdown/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
    }
}