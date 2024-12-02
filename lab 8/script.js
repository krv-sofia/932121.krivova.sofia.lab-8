function add() {
    const parent = document.getElementById('elements');

    const element = document.createElement('div');
    element.className = 'field';
    element.appendChild(document.createElement('input'));
    element.appendChild(document.createElement('input'));

    const up = document.createElement('button');
    up.innerText = '↑';
    up.onclick = function () {
        const element = this.parentElement.previousElementSibling;
        if (element) {
            this.parentElement.after(element);
        }
    }
    element.appendChild(up);
    
    const down = document.createElement('button');
    down.innerText = '↓'
    down.onclick = function () {
        const element = this.parentElement.nextElementSibling;
        if (element) {
            this.parentElement.before(element);
        }
    }
    element.appendChild(down);

    const del = document.createElement('button');
    del.innerText = '⨯';
    del.onclick = function () {
        this.parentElement.remove();
    }
    element.appendChild(del);

    parent.appendChild(element);
}

function getObjectString() {
    const elements = document.getElementsByClassName('field'); 
    const array = Array.from(elements);

    let result = {};

    for (let element of array) {
        const children = element.children;
        const firstValue = children[0].value;
        const secondValue = children[1].value;

        result[firstValue] = secondValue;
    }

    return result;
}

function save() {
    const parent = document.getElementById('output');
    parent.innerHTML = '';

    const text = getObjectString();

    const child = document.createElement('p');
    child.innerText = JSON.stringify(text);

    parent.appendChild(child);
}

window.onload = add;