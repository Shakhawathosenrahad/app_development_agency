// NavBar menu button

const MenuClose = document.querySelector("nav > span");
const link = document.querySelector("nav .links")

MenuClose.onclick = e => {
    link.style.top = "0";

    link.querySelector("span").onclick = () => {
        link.style.top = "-800px";
    }
}

// const nav = document.querySelector("nav")

// let isScrolling = 0;

// document.addEventListener("scroll", () => {
//     let scrolly = document.documentElement.scrollTop -100;

//     console.log(isScrolling, scrolly)

//     if(isScrolling >= scrolly) {
//         nav.classList.remove("scrolling");
//     }
//     else {
//         nav.classList.add("scrolling");
//     }
//     isScrolling = scrolly;
// })


// on Scrolling NavBar event

const section = document.querySelectorAll(".section")
const links = document.querySelectorAll(".links a")

document.onscroll = e => {
    
    section.forEach(section => {
        let scrollTop = document.documentElement.scrollTop;
        let offsetTop = section.offsetTop -150;
        let id = section.getAttribute("id")

        if(scrollTop > offsetTop) {
            links.forEach(link => {
                link.classList.remove("active")
                document.querySelector(".links a[href*=" + id + "]").classList.add("active")
            })
        }
    })
}

/**
 * import app features from data.js. then insert in html feature_1 element.
 * 
 * @param {feature_1} data_1 - first feature
 * 
 */

import {feature_1} from "./data.js"

let i = 0;
let list_1;

const data_1 = e => {
    list_1 = `<div class="column ${feature_1[i].class}">
                    <span class="material-symbols-outlined">${feature_1[i].icon}</span>
                    <div class="row-text">
                        <h5>${feature_1[i].heading}</h5>
                        <p>${feature_1[i].desc}</p>
                    </div>
                </div>`;
                
    document.querySelector(".feature-1").insertAdjacentHTML("beforeend", list_1);
    i++;
    if (i == feature_1.length) return;
    data_1()
}
data_1()

/**
 * feature_3 our offers
 * @param {offers} a
 */

import {feature_3} from './data.js'

let j = 0;
let list_2;

const data_3 = () => {
    list_2 = `<div class="col-sm">
                    <img src="${feature_3[j].logo}" alt="">
                    <h6>${feature_3[j].heading}</h6>
                    <p>${feature_3[j].desc}</p>
                </div>`
    document.querySelector(".feature-3 .row").insertAdjacentHTML("beforeend", list_2);

    j++;
    if (j == feature_3.length) return;
    data_3();
}
data_3()


// servises

import {services} from "./data.js"

let k = 0;
let list_3;

const data_4 = () => {
    list_3 = `<li>
                <img src="${services[k].logo}" alt="">
                <h4>${services[k].heading}</h4>
                <p>${services[k].desc}</p>
            </li>`;
    document.querySelector(".why-us .services").insertAdjacentHTML("beforeend", list_3)
    k++;
    if(k == services.length) return;
    data_4();
}
data_4()

import {ultimate_features} from "./data.js"

let l = 0;
let list_4;

const data_5 = () => {
    list_4 = `<li>
                    <img src="${ultimate_features[l].logo}" alt="">
                    <h4>${ultimate_features[l].heading}</h4>
                    <p>${ultimate_features[l].desc}</p>
                </li>`
    document.querySelector(".feature-5 .services").insertAdjacentHTML("beforeend", list_4);
    l++;
    if(l == ultimate_features.length) return;
    data_5();
}
data_5();

/**
 * 
 * @param {users} review 
 */

import {users} from './data.js'

let m = 0;
let users_list;
const rates = document.querySelector(".rate");
let user = document.querySelector(".user")

const data_6 = () => {
    users_list = `<img src="./img/user.png">
                    <h4>${users[m].name}</h4>
                    <p>${users[m].about}</p>
                    <span class="left material-symbols-outlined">arrow_circle_left</span>
                    <span class="right material-symbols-outlined">arrow_circle_right</span>`
    rates.innerHTML = "";
    for(let i = 0; i < users[m].star; i++) {
        let star = `<span class="material-symbols-outlined">grade</span>`;
        rates.insertAdjacentHTML("afterbegin", star)
    }

    rates.nextElementSibling.innerText = users[m].title;
    user.previousElementSibling.innerText = users[m].exprience;
    user.innerHTML = users_list;
    
    m++;
    if(m > users.length -1) m = 0;
    else if (m < 0) m = users.length -1;
    
    document.querySelector(".left").onclick = () => {
        data_6();
    }

    document.querySelector(".right").onclick = () => {
        data_6();
    }
}
data_6();