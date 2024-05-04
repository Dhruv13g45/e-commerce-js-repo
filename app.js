// cart popup declarations



const nav_cart = document.querySelector("#cart-logo");
const cart_msg_box = document.querySelector(".cart-section");
let cart_click_count = 1;
const checkoutbtn = document.querySelector(".checkoutBtn");
const deleteBtn = document.querySelector("#delete");
const bill_section = document.querySelector(".bill");
const empty_msg = document.querySelector("#emptymsg");
let final_price = document.querySelector(".quantity-price");


// counter declarations


const count_display = document.querySelectorAll(".quantity");
const plus = document.querySelector("#plus-count");
const minus = document.querySelector("#minus-count");
let cart_quantity_count = 0;
const addToCart = document.querySelector(".cart-btn");


// hamburger declarations


const hambtn = document.querySelector(".hamBtn");
let side_nav = document.querySelector(".nav-items-section");
let closeBtn = document.querySelector(".close");


// image section declarations


const currentimg = document.querySelector(".currentproduct");
const images = [
    {
        img_src: "./images/image-product-1.jpg"
    },
    {
        img_src: "./images/image-product-2.jpg"
    },
    {
        img_src: "./images/image-product-3.jpg"
    },
    {
        img_src: "./images/image-product-4.jpg"
    },
]
const prevBtn = document.querySelector("#leftarrow");
const nextBtn = document.querySelector("#rightarrow");



// cart popup code



nav_cart.addEventListener("click", () => {
    if (cart_click_count % 2 === 0) {
        cart_msg_box.classList.add("hide");
    }
    else {
        cart_msg_box.classList.remove("hide");
    }
    cart_click_count++;
})
checkoutbtn.addEventListener("click", () => {
    cart_msg_box.classList.add("hide");
    cart_quantity_count = 0;
    bill_section.classList.add("hide");
    checkoutbtn.classList.add("hide");
    empty_msg.classList.remove("hide");
    counterdisplay();
})

deleteBtn.addEventListener("click", () => {
    checkoutbtn.classList.add("hide");
    bill_section.classList.add("hide");
    empty_msg.classList.remove("hide");
    cart_quantity_count = 0;
    counterdisplay();
})



// counter code

function counterdisplay() {
    count_display.forEach((count_display) => {
        count_display.textContent = cart_quantity_count;
    })
}


plus.addEventListener("click", () => {
    cart_quantity_count++;
    counterdisplay();
})
minus.addEventListener("click", () => {
    cart_quantity_count--;
    if (cart_quantity_count < 0) {
        cart_quantity_count = 0;
    }
    counterdisplay();
})

addToCart.addEventListener("click", () => {
    checkoutbtn.classList.remove("hide");
    bill_section.classList.remove("hide");
    empty_msg.classList.add("hide");
    if (cart_quantity_count === 0 || cart_quantity_count < 0) {
        final_price.textContent = 0;
    } else {
        final_price.textContent = 125 * cart_quantity_count;
    }
})


// hamburger button



hambtn.addEventListener("click", () => {
    closeBtn.style.display = "block";
    side_nav.style.display = "block";
})
closeBtn.addEventListener("click", () => {
    side_nav.style.display = "none";
    closeBtn.style.display = "none";
})




// image section code



let i = 1;


nextBtn.addEventListener("click", () => {
    if (i === 4) {
        currentimg.setAttribute("src", images[0].img_src);
        i=1;
    } else {
        currentimg.setAttribute("src", images[i].img_src);
        i++;
    }
})


prevBtn.addEventListener("click" , ()=> {
   if(i===4) {
    i--;
    currentimg.setAttribute("src" , images[i].img_src);
    i--;
   }
   else if(i === 0) {
    currentimg.setAttribute("src" , images[i].img_src);
    i=4;
   }
   else {
    currentimg.setAttribute("src" , images[i].img_src);
    i--;
   }
})
