function getActivity() {
    const Url = "https://www.boredapi.com/api/activity";
    fetch(Url)
    .then(data=>{return data.json()})
    .then(
        res=>{
            const suggestion = document.getElementById('suggestion');
            suggestion.innerHTML = `<b> ${res['activity']}!</b>`;
            })
}

function refresh() {
    location.reload()
}

function addElement(parent, child, content, 
    attribute1=null, attibuteValue1=null, 
        attribute2=null, attributeValue2=null, 
            attribute3=null, attributeValue3=null) 
{
    var parent = document.querySelector(parent);
    var child = document.createElement(child);
    parent.appendChild(child);
    child.textContent = content;
                if (attribute1 !== null && attibuteValue1 !== null) {
                    child.setAttribute(attribute1, attibuteValue1);
                };
            if (attribute2 !== null && attributeValue2 !== null) {
            child.setAttribute(attribute2, attributeValue2);
            };
        if (attribute3 !== null && attributeValue3 !== null) {
        child.setAttribute(attribute3, attributeValue3);
        };
}

function buildPage() {
    addElement(
        'body','h1',`Hi. Are you bored?`
        );
    addElement(
        'body', 'h3', ''
        );
    addElement(
        'body', 'p', 'Maybe you can...',       
    )
    addElement(
        'body','div', '',
        'id', 'suggestion-container',
    )
    addElement(
        '#suggestion-container', 'p', '',
        'id', 'suggestion',
    )
    addElement(
        'body', 'button', 'Nope',
        'onclick', 'getActivity()',
        )
}

getActivity();