// Script for navigation bar
/*
//cart working js

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}
//making function
function ready(){
    //remove item from cart
    var removecartbuttons = document.getElementsByClassName('fa-trash')
    console.log(removecartbuttons)
    for (var i = 0;i < removecartbuttons.length; i++){
        var button = removecartbuttons[i]
        button.addEventListener('click', removecartitem)
    }
    //quantity changes
    var quantityinputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0;i < quantityinputs.length; i++){
        var input = quantityinputs[i]
        input.addEventListener('change', quantitychanged);
    }
    //add to cart
    var addcart = document.getElementsByClassName('add-cart')
    for (var i = 0;i < addcart.length; i++){
        var button = addcart[i]
        button.addEventListener("click", addcartclicked);

    }
    //proceed to checkout
    document
    .getElementsByClassName('btn-buy')[0].addEventListener('click', buybuttonclicked);
}*/
// checkout
function buybuttonclicked(){
    alert('Your order is placed')
    var cartContent =document.getElementsByClassName('cart-content')[0]
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}/*

//remove item from cart
function removecartitem(event){
    var buttonclicked = event.target;
    buttonclicked.parentElement.remove();
    updatetotal();
}
//quantity changes
function quantitychanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1 ;
    }
    updatetotal();
}
//add cart
function addcartclicked(event){
    var button = event.target
    var shopproducts = button.parentElement
    var title = shopproducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopproducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopproducts.getElementsByClassName('product-img')[0].src;
    addproducttocart(title, price, productImg);
    updatetotal();
}
function addproducttocart(title, price, productImg){
    var cartshopbox = document.createElement('tr')
    cartshopbox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for (var i = 0;i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
        alert('You have already add this item to cart')
        return;
    }
    
}
var cartboxcontent = `<td><a href="#"><i class="fa-solid fa-trash"></i></a></td>
<td class="product-img"><img src="${productImg}" alt=""></td>
<td class="product-title">${title}</td>
<td class="price">${price}</td>
<td><input type="number"value="1" class="cart-quantity"></td>`;
cartshopbox.innerHTML = cartboxcontent
cartItems.append(cartshopbox)
cartshopbox.getElementsByClassName('fa-trash')[0].addEventListener('click', removecartitem)
cartshopbox.getElementsByClassName('cart-quantity')[0].addEventListener('click', quantitychanged)

}


//update total
function updatetotal(){
    var cartcontent = document.getElementBy('cart-content')[0];
    var cartboxes = cartcontent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0;i < cartboxes.length; i++){
        var cartbox = cartboxes[i];
        var priceElement = cartbox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartbox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("KSH", ""))
        var quantity = quantityElement.value
        total = total + price * quantity;
    }
        //if price contain cents
        total = Math.round(total *100)/100;

        document.getElementsByClassName('total-price')[0].innerText = "KSH" + total;

    
}*/
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
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