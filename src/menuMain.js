const fillMainMenu = function(){
    let main = document.querySelector("#main");

    //Making a function, using objects, or arrays

    
    
    function menyItem(name, price){
        this.name = name;
        this.price = price;
    }
    
    //Making an array with all the meny items as objects
    const meny = new Array();
    const menyItem1 = new menyItem("Sushi 10 pieces", "10 euro")
    meny.push(menyItem1);
    const menyItem2 = new menyItem("Sushi 14 pieces", "15 euro")
    meny.push(menyItem2);
    const menyItem3 = new menyItem("Maki rolls 12 pieces", "15 euro")
    meny.push(menyItem3);

    for (let i = 0; i < meny.length; i++){
        let mainContent1 = document.createElement("div");
        mainContent1.setAttribute("id", "main-menu-content-" + i)
        main.appendChild(mainContent1);

        let mainTitle = document.createElement("h2");
        mainTitle.textContent = meny[i].name;
        mainContent1.appendChild(mainTitle);

        let mainP = document.createElement("p");
        mainP.textContent = meny[i].price;
        mainContent1.appendChild(mainP);
    }

    let image = document.createElement("img");
    image.setAttribute("src", "css/img/pexels-kim-cruz-4071389.jpg")
    image.setAttribute("class", "small-img")
    main.appendChild(image)

    

}

export {fillMainMenu}