console.log("hello world!")

import {createStartPage} from './startPage'
import {clearMain} from './startPage'
import {fillMainHome} from './homeMain'
import {fillMainMenu} from './menuMain'
import {fillMainContact} from './contactMain'


createStartPage()
fillMainHome()

let homeTab = document.querySelector("#home-tab");
let menuTab = document.querySelector("#menu-tab");
let contactTab = document.querySelector("#contact-tab");

homeTab.addEventListener("click", (e) => {
    clearMain()
    fillMainHome()
})
menuTab.addEventListener("click", () =>{
    clearMain()
    fillMainMenu()
})

contactTab.addEventListener("click", () =>{
    clearMain()
    fillMainContact()
})



