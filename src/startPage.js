const createStartPage = function(){
    let container = document.querySelector("#content");

    //Header
    let header = document.createElement("div");
    header.setAttribute("id", "header");
    container.appendChild(header);

    let logo = document.createElement("h1");
    logo.setAttribute("id", "logo");
    logo.textContent = "Sushi Express"
    header.appendChild(logo);

    let tab1 = document.createElement("button");
    tab1.setAttribute("id","home-tab");
    tab1.textContent = "HOME";
    tab1.className = "tabs";
    header.appendChild(tab1);

    let tab2 = document.createElement("button");
    tab2.setAttribute("id","menu-tab");
    tab2.textContent = "MENU";
    tab2.className = "tabs";
    header.appendChild(tab2);

    let tab3 = document.createElement("button");
    tab3.setAttribute("id","contact-tab");
    tab3.textContent = "CONTACT";
    tab3.className = "tabs";
    header.appendChild(tab3);

    //Main
    let main = document.createElement("div");
    main.setAttribute("id", "main");
    container.appendChild(main);

    //Footer
    let footer = document.createElement("div");
    footer.setAttribute("id","footer");
    container.appendChild(footer);
}

const clearMain = function(){
    let main = document.querySelector("#main");
    while(main.hasChildNodes()){
        main.removeChild(main.firstChild)
    }
}

export {createStartPage, clearMain}
