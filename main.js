var news_image = document.querySelector(".news_image");
var sideNav = document.querySelector(".sidenav");
console.log(news_image);
news_image.style.backgroundImage = "url('https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9iZmEyOWVmM2RlNWJiYjBmZDQ3Yjc4NGY1NTA1ZDYyYy5qcGc=.jpg')";
var request = new XMLHttpRequest();
var data;
request.open('GET', 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-13&sortBy=publishedAt&apiKey=e5c2d1ba225f4ef397ff71e86219785c', true);
request.onload = function() {
    data = JSON.parse(request.responseText).articles;
    console.log(data);
    addToNav(data);
}
request.send();
function addToNav(data) {
    data.forEach(element => {
        str = `
        <div class="news">
            <h1><a href="${element.url}">${element.title} <span>${element.source.name}</span></a></h1>
            <p>${element.description}</p>
            <p>Author: ${element.author}</p>
            <p>Published at: ${element.publishedAt}</p>
        </div>
        `;
        sideNav.innerHTML += str;
    });
}