const fillMainContact = function(){
    let main = document.querySelector("#main");

    let mainContent = document.createElement("div");
    mainContent.setAttribute("id","main-content");
    main.appendChild(mainContent);

    //Text content
    let mainTitle = document.createElement("h2");
    mainTitle.textContent = "Contact";
    mainContent.appendChild(mainTitle);

    let para1 = document.createElement("p");
    para1.textContent = "Phone: 123-456 78";
    mainContent.appendChild(para1);
    let para2 = document.createElement("p");
    para2.textContent = "Adress: Sushi street 42"
    mainContent.appendChild(para2);

    //Image
    let image = document.createElement("img");
    image.setAttribute("src", "css/img/pexels-jose-esquivel-5878433.jpg")
    image.setAttribute("class", "small-img")
    main.appendChild(image);
}

export {fillMainContact}