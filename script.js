'use strict'

const request = new XMLHttpRequest();
let html = "";

request.open('GET', 'http://polls.apiblueprint.org/questions', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);

        for (let x = 0; x < data.length; x++) {
            html += `<div class='box'>
                        <h2>${data[x].question}</h2>`;
            for (let y = 0; y < data[x].choices.length; y++) {
                html += `<p><input type='radio' name='resp${x}'>${data[x].choices[y].choice}</p>`;
            }
            html += `</div>`;
        };
        document.getElementById("questions").innerHTML = html;
    } else {

    }
};

request.send();