document.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button)
    button.className = 'button'
    let id = 1;

    button.addEventListener('click', function addElement() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.id = id;
        let divText = document.createTextNode(id);
        id++;
        let p = document.createElement('p');

        p.appendChild(divText);
        div.appendChild(p);
        document.body.appendChild(div);
        p.style.opacity = '0';

        div.onmouseenter = function () {
            p.style.opacity = "1";
        }
        div.onmouseleave = function () {
            p.style.opacity = "0";
        }
        div.onclick = function () {
            let num = Math.floor(Math.random() * 6);
            if (num === 0) {
                div.style.backgroundColor = 'red';
            }
            else if (num === 1) {
                div.style.backgroundColor = 'purple';
            }
            else if (num === 2) {
                div.style.backgroundColor = 'blue';
            }
            else if (num === 3) {
                div.style.backgroundColor = 'green';
            }
            else if (num === 4) {
                div.style.backgroundColor = 'yellow';
            }
            else {
                div.style.backgroundColor = 'orange';
            }
        }

        div.ondblclick = function () {
                if (div.id % 2 === 0) {
                let selectNext = document.getElementById(Number(div.id) + 1);
                
                
                if (selectNext == null) {
                    alert('No more squares next!')
                }
                else {
                    div.parentNode.removeChild(selectNext);
                }

            }

            else {
                let selectPrevious = document.getElementById(Number(div.id) - 1);
               
                
                if (selectPrevious == null) {
                    alert('No more squares previous!')
                }
                else {
                    div.parentNode.removeChild(selectPrevious);
                }
            }
        }
    })


})



