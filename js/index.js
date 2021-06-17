'use strict';

function changeText() {
    let change = document.getElementById("includ");
    if (change.innerHTML === "on") {
      
        change.innerHTML = "off";
    } else {
        change.innerHTML = "on";
    }
   
}
nature.onmouseout = function () {

    this.src = "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg";
    this.alt = this.title = 'nature';
}
nature.onmouseover = function () {
    this.src = "http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg";
    this.alt = this.title = "nature";
}


const h1 =  document.createElement('H1');
h1.innerHTML = 'Header1';
document.body.append(h1);
const article = document.createElement('article');
const h2 = document.createElement('H2');
h2.innerHTML = 'Header2';
article.append(h2);
const div = document.createElement('div');
article.append(div);
const img = document.createElement('img');
img.src ="https://klike.net/uploads/posts/2019-01/1547366815_1.jpg" 
div.append(img);
const paragraph = document.createElement('p');
paragraph.innerHTML = 'It is paragraph';
div.append(paragraph);

document.body.append(article);





