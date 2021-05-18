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

    let logo = document.createElement("h1");
    logo.setAttribute("id", "logo");
    logo.textContent = "Sushi Express"
    header.appendChild(logo);

    let tab1 = document.createElement("button");
    tab1.textContent = "HOME";
    tab1.className = "tabs";
    header.appendChild(tab1);

    let tab2 = document.createElement("button");
    tab2.textContent = "MENU";
    tab2.className = "tabs";
    header.appendChild(tab2);

    let tab3 = document.createElement("button");
    tab3.textContent = "CONTACT";
    tab3.className = "tabs";
    header.appendChild(tab3);

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
