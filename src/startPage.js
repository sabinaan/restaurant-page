const createStartPage = function(){
    let container = document.querySelector("#content");

    //Image
    let image = document.createElement("img");
    image.setAttribute("src", "css/img/pexels-jose-esquivel-5878433.jpg")
    container.appendChild(image);

    //Header
    let header = document.createElement("div");
    header.setAttribute("id", "header");
    container.appendChild(header);

    let headerH1 = document.createElement("h1");
    headerH1.setAttribute("id", "logo");
    headerH1.textContent = "Sushi Express"
    header.appendChild(headerH1);

    //Main
    let main = document.createElement("div");
    main.setAttribute("id", "main");
    container.appendChild(main);

    let mainContent = document.createElement("div");
    mainContent.setAttribute("id","main-content");
    main.appendChild(mainContent);

    let mainTitle = document.createElement("h2");
    mainTitle.textContent = "Great sushi, when you want it!";
    mainContent.appendChild(mainTitle);

    let mainP = document.createElement("p");
    mainP.textContent = "Come and taste our handmade sushi. Always made with fresh and high quality ingredients.";
    mainContent.appendChild(mainP);

    //Footer
    let footer = document.createElement("div");
    footer.setAttribute("id","footer");
    container.appendChild(footer);
}

export {createStartPage}
