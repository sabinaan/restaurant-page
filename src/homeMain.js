const fillMainHome = function(){
    let main = document.querySelector("#main");
    
    let image = document.createElement("img");
    image.setAttribute("src", "css/img/pexels-jose-esquivel-5878433.jpg")
    image.setAttribute("class", "background-img")
    main.appendChild(image);

    let mainContent = document.createElement("div");
    mainContent.setAttribute("id","main-content");
    main.appendChild(mainContent);

    let mainTitle = document.createElement("h2");
    mainTitle.textContent = "Great sushi, when you want it!";
    mainContent.appendChild(mainTitle);

    let mainP = document.createElement("p");
    mainP.textContent = "Come and taste our handmade sushi. Always made with fresh and high quality ingredients.";
    mainContent.appendChild(mainP);
}

export {fillMainHome}