// OPEN CART LIST

document.querySelector(".cart-ico").addEventListener("click", () => {
    if (document.querySelector(".cart-list").classList.contains("shown")) {
        document.querySelector(".cart-list").classList.remove("shown")
    } else {
        document.querySelector(".cart-list").classList.add("shown")
    }
})

// OPEN AND HIDE SLIDER

document.querySelector(".big_img").addEventListener("click", () => {
    document.querySelector(".slider").style.display = "block";
    document.body.style.overflow = "hidden";
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

document.querySelector(".close_ico").addEventListener("click", () => {
    document.querySelector(".slider").style.display = "none";
    document.body.style.overflowY = "scroll";
})


// SLIDER OF IMAGES


let thumbnail_images = document.querySelectorAll("main .products ul li img");

for (let i = 0; i < thumbnail_images.length; i++) {
    thumbnail_images[i].id = i;
}

let imgs_arr = [`<img src="/img/product/f1.jpg" alt="">`, `<img src="/img/product/f2.jpg" alt="">`, `<img src="/img/product/f3.jpg" alt="">`, `<img src="/img/product/f4.jpg" alt="">`]

let img_index = 0;

let slider_list_imgs = document.querySelectorAll(".imgs_list li");

function set_img_list() {
    slider_list_imgs.forEach((ele) => {
        ele.querySelector(".overflow").style.opacity = "0";
        ele.querySelector("img").style.border = "none";
    })
    slider_list_imgs[img_index].querySelector(".overflow").style.opacity = "1";
    slider_list_imgs[img_index].querySelector("img").style.border = "4px solid hsl(26, 100%, 55%)";
    for (let i = 0; i < slider_list_imgs.length; i++) {
        slider_list_imgs[i].querySelector(".overflow").id = i;
    }
}

slider_list_imgs.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        img_index = e.target.getAttribute("id");
        document.querySelector(".main_img").innerHTML = imgs_arr[img_index];
        set_img_list()
    })
})

// SLIDE ON IMAGES IN THE MAIN PAGE

let main_list_imgs = document.querySelectorAll(".list li img");

for (let i = 0; i < main_list_imgs.length; i++) {
    main_list_imgs[i].id = i;
}

main_list_imgs[img_index].style.opacity = "0.6";

main_list_imgs.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        img_index = e.target.getAttribute("id");
        main_list_imgs.forEach((ele) => {
            ele.style.opacity = "1";
        })
        main_list_imgs[img_index].style.opacity = "0.6";
        document.querySelector(".big_img").innerHTML = imgs_arr[img_index]
        document.querySelector(".main_img").innerHTML = imgs_arr[img_index];
        set_img_list()
    })
})

set_img_list()

document.querySelector(".next").addEventListener("click", () => {
    if (img_index == slider_list_imgs.length - 1) {
        document.querySelector(".next").classList.add("disabeld")
    } else {
        img_index++;
        document.querySelector(".main_img").innerHTML = imgs_arr[img_index];
        set_img_list()
    }
    // CHECK IF THE IMG_INDEX IS MORE THAN THE NUMBER OF SLIDER IMAGES NUMBER TO DISABLE NEXT AND PREVIOUS BTN
    setInterval(() => {
        if (img_index == slider_list_imgs.length - 1) {
            document.querySelector(".next").classList.add("disabeld")
        } else {
            document.querySelector(".next").classList.remove("disabeld")
        }
        if (img_index == 0) {
            document.querySelector(".pre").classList.add("disabeld")
        } else {
            document.querySelector(".pre").classList.remove("disabeld")
        }
    }, 100)
})

if (img_index == 0) {
    document.querySelector(".pre").classList.add("disabeld")
}

document.querySelector(".pre").addEventListener("click", () => {
    if (img_index == 0) {
        document.querySelector(".pre").classList.add("disabeld")
    } else {
        img_index--;
        document.querySelector(".main_img").innerHTML = imgs_arr[img_index];
        set_img_list()
    }
})

// COUNTER OF PRODUCTS TO CART

let products_count = 0;

document.querySelector(".product_count").textContent = products_count;

if (window.localStorage.getItem("items")) {
    products_count = window.localStorage.getItem("items")
}

document.querySelector(".incr").addEventListener("click", () => {
    if (products_count == 5) {
        document.querySelector(".incr").classList.add("disabeld")
    } else {
        products_count++
        document.querySelector(".product_count").textContent = products_count;
    }
    setInterval(() => {
        if (products_count == 5) {
            document.querySelector(".incr").classList.add("disabeld")
        } else {
            document.querySelector(".incr").classList.remove("disabeld")
        }
        if (products_count == 0) {
            document.querySelector(".dec").classList.add("disabeld")
        } else {
            document.querySelector(".dec").classList.remove("disabeld")
        }
    }, 200)
})

document.querySelector(".dec").addEventListener("click", () => {
    if (products_count == 0) {
        document.querySelector(".dec").classList.add("disabeld")
    } else {
        products_count--;
        document.querySelector(".product_count").textContent = products_count;
    }
})

// add data items to local storage

function addToLocal() {
    if (window.localStorage.getItem("items")) {
        document.querySelector(".product_count").textContent = window.localStorage.getItem("items");
        document.querySelector(".product_count_").textContent = window.localStorage.getItem("items");
        document.querySelector(".product_count_").style.display = "block";
        document.querySelector(".cart-list").querySelector(".empty-msg").style.display = "none";
        if (window.matchMedia("(max-width: 760px)").matches){
            document.querySelector(".cart-list").style.bottom = `${-240}px`;
        }else{
            document.querySelector(".cart-list").style.bottom = `${-225}px`;
        }
        
        document.querySelector(".cart-list").innerHTML += `
    <div class="content">
            <ul>
              <li>
                <img class="main_img_" src="/img/product/f1.jpg" alt="">
                <div class="text">
                  <p>Fall Limited Edition Sneakers</p>
                  <p class="product_salary">$125.00 x ${window.localStorage.getItem("items")} <b>$${125.00 * Number(window.localStorage.getItem("items"))}.00</b></p>
                </div>
                <div class="ico">
                  <svg id="delete_trash" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 110.61 122.88"><title>trash</title><path d="M39.27,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Zm63.6-19.86L98,103a22.29,22.29,0,0,1-6.33,14.1,19.41,19.41,0,0,1-13.88,5.78h-45a19.4,19.4,0,0,1-13.86-5.78l0,0A22.31,22.31,0,0,1,12.59,103L7.74,38.78H0V25c0-3.32,1.63-4.58,4.84-4.58H27.58V10.79A10.82,10.82,0,0,1,38.37,0H72.24A10.82,10.82,0,0,1,83,10.79v9.62h23.35a6.19,6.19,0,0,1,1,.06A3.86,3.86,0,0,1,110.59,24c0,.2,0,.38,0,.57V38.78Zm-9.5.17H17.24L22,102.3a12.82,12.82,0,0,0,3.57,8.1l0,0a10,10,0,0,0,7.19,3h45a10.06,10.06,0,0,0,7.19-3,12.8,12.8,0,0,0,3.59-8.1L93.37,39ZM71,20.41V12.05H39.64v8.36ZM61.87,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Z"/></svg>
                </div>
              </li>
            </ul>
            <button onclick="window.location.href='Mpesa.html';"class="check_btn">Checkout</button>
    </div>
    `
        if (document.querySelectorAll(".cart-list .content").length == 2) {
            document.querySelectorAll(".cart-list .content")[0].remove();
        }

        // delete items from cart
        document.querySelectorAll("#delete_trash").forEach((ele) => {
            ele.addEventListener("click", () => {
                document.querySelector(".cart-list .content").remove();
                document.querySelector(".empty-msg").style.display = "block";
                if (window.matchMedia("(max-width: 760px)").matches){
                    document.querySelector(".cart-list").style.bottom = `${-212}px`;
                }else{
                    document.querySelector(".cart-list").style.bottom = `${-195}px`;
                }
                document.querySelector(".product_count_").textContent = 0;
                document.querySelector(".product_count_").style.display = "none";
                window.localStorage.removeItem("items")
            })
        })

        // open slider onclick on checkout btn
        document.querySelector(".check_btn").addEventListener("click", () => {
            document.querySelector(".slider").style.display = "block";
            document.body.style.overflow = "hidden";
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
            document.querySelector(".cart-list").classList.remove("shown")
        })
    } else {
        document.querySelector(".cart-list").querySelector(".empty-msg").style.display = "block";
    }
}

// add to cart actions

document.querySelector("#add_to_cart").addEventListener("click", () => {
    if (document.querySelector(".product_count").textContent == 0) {
        document.querySelector(".product_count").textContent = 1;
    }
    window.localStorage.setItem("items", document.querySelector(".product_count").textContent)
    addToLocal()
    document.querySelector(".add_to_cart_msg").style.animation = "show_add_to_cart_msg 0.5s 1 forwards";
    setTimeout(() => {
        document.querySelector(".add_to_cart_msg").style.animation = "hide_add_to_cart_msg 0.5s 1 forwards";
    }, 2000)
})

addToLocal()

// MOBILE SLIDER

let mobile_index = 0;

let mobile_imgs_srcs = [`/img/product/f1.jpg`, `/img/product/f2.jpg`, `/img/product/f3.jpg`, `/img/product/f4.jpg`];

document.querySelector(".mobile_next").addEventListener("click", ()=>{
    if (mobile_index == mobile_imgs_srcs.length - 1){
        document.querySelector(".mobile_next").classList.add("disabeld")
    }else{
        mobile_index++;
        document.querySelector(".big").setAttribute("src", mobile_imgs_srcs[mobile_index]);
    }
    setInterval(() => {
        if (mobile_index == mobile_imgs_srcs.length - 1) {
            document.querySelector(".mobile_next").classList.add("disabeld")
        } else {
            document.querySelector(".mobile_next").classList.remove("disabeld")
        }
        if (mobile_index == 0) {
            document.querySelector(".mobile_pre").classList.add("disabeld")
        } else {
            document.querySelector(".mobile_pre").classList.remove("disabeld")
        }
    }, 200)
})

if (mobile_index == 0){
    document.querySelector(".mobile_pre").classList.add("disabeld")
}

document.querySelector(".mobile_pre").addEventListener("click", ()=>{
    if (mobile_index == 0){
        document.querySelector(".mobile_pre").classList.add("disabeld")
    }else{
        mobile_index--;
        document.querySelector(".big").setAttribute("src", mobile_imgs_srcs[mobile_index]);
    }
})

// OPEN AND CLOSE MOBILE NAV

document.querySelector(".toggle").addEventListener("click", ()=>{
    document.querySelector(".nav").style.animation = "show_mobile_nav 1s 1 forwards"
})

document.querySelector(".close_nav").addEventListener("click", ()=>{
    document.querySelector(".nav").style.animation = "fade_mobile_nav 1s 1 forwards"
})
// SINGLE PRODUCT
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("smalli-img");
smallimg[0].onclick = function (){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function (){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function (){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function (){
    MainImg.src = smallimg[3].src;
}

