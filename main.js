var news_image = document.querySelector(".news_image");

var sideNav = document.querySelector(".sidenav");
var str;
console.log(news_image);
news_image.style.backgroundImage = "url('https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9iZmEyOWVmM2RlNWJiYjBmZDQ3Yjc4NGY1NTA1ZDYyYy5qcGc=.jpg')";
var request = new XMLHttpRequest();
var data;
request.open('GET', 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-13&sortBy=publishedAt&apiKey=e5c2d1ba225f4ef397ff71e86219785c');
request.onload = function() {
    data = JSON.parse(request.responseText).articles;
    console.log(data);
    addToNav(data);

    var showMore = document.querySelectorAll(".news p:nth-child(5)")
    showMore.forEach(item => {
        item.addEventListener('click', (event) => {
            var i = event.target.id;
            document.querySelector(".news_image").style.backgroundImage = `url('${data[i].urlToImage}')`;
            document.querySelector(".content h1").innerHTML = data[i].title;
            document.querySelector(".content p:nth-child(3)").innerHTML = data[i].content;
            document.querySelector(".content p:nth-child(4)").innerHTML = "Author: "+data[i].author;
            document.querySelector(".content p:nth-child(5)").innerHTML = "Published at: " + data[i].publishedAt;
            document.querySelector(".content p:nth-child(6)").innerHTML = "Visit here: " + data[i].url;
        });
    })
    
    
}
request.send();
function addToNav(data) {
    var i = 0;
    data.forEach(element => {
        str = `
        <div class="news">
            <h1><a href="${element.url}">${element.title} <span>${element.source.name}</span></a></h1>
            <p>${element.description}</p>
            <p>Author: ${element.author}</p>
            <p>Published at: ${element.publishedAt}</p>
            <p id="${i}">Show more</p>
            <p id="${++i}">Show more</p>
        </div>
        `;
        sideNav.innerHTML += str;
        
    });

}