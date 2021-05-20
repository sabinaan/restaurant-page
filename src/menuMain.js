const fillMainMenu = function(){
    let main = document.querySelector("#main");

    //Making a function, using objects, or arrays

    let description = ["Sushi 10 pices", "Sushi 14 pices", "Maki rolls 12 pices"]
    let prices = ["10 euro", "15 euro", "15 euro"]

    for (let i = 0; i < description.length; i++){
        let mainContent1 = document.createElement("div");
        mainContent1.setAttribute("id", "main-menu-content-" + i)
        main.appendChild(mainContent1);

        let mainTitle = document.createElement("h2");
        mainTitle.textContent = description[i];
        mainContent1.appendChild(mainTitle);

        let mainP = document.createElement("p");
        mainP.textContent = prices[i];
        mainContent1.appendChild(mainP);
    }

    let image = document.createElement("img");
    image.setAttribute("src", "css/img/pexels-kim-cruz-4071389.jpg")
    image.setAttribute("class", "small-img")
    main.appendChild(image)

    

}

export {fillMainMenu}