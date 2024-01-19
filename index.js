// declaration of an empty array that will serve as the cart
const cart = [];

// declaration of a function to add an item to the cart
const addItemToCart = (item) => {
    if (cart.includes(item) === false) {
        cart.push(item);
        console.log(`You have just added ${item} to your cart.`);
    } else {
        console.log("Sorry, this item is already in your cart.")
    }
};

// declaration of function to remove an item from the cart
const removeItemFromCart = (item) => {
    if (cart.length > 0) {
        if (cart.includes(item) === true) {
            const index = cart.indexOf(item);
            cart.splice(index, 1);
            console.log(`You have just removed ${item} from your cart.`);
        } else {
            console.log(`Sorry, ${item} is not in your cart.`);
        }
    } else {
        console.log("Sorry, no items in your cart");
    }
};

// declaration of function that displays all the items in the cart
const displayCartItems = () => {
    if (cart.length > 0) {
        console.log(`This is your cart: ${cart}.`);
    } else {
        console.log("Sorry, it seems your cart is empty. Please add items to your cart.");
    }
};

// declaration of function to checkout from the store
const checkout = () => {
    if (cart.length > 0) {
        console.log("Thank you for shopping with us here at Shop.com!");
        console.log(`These are the items you are purchasing: ${cart}.`);
    } else {
        console.log("Sorry, it seems your cart is empty. Please add items to your cart in order to checkout from the store.");
    }
};


console.log("Hello, you are welcome to Shop.com!");
console.log("Feel free to add items to you cart.");

// Calling the functions

// adding items to the cart
addItemToCart("MacBook Pro M3 Max");
addItemToCart("Airpods 3rd Generation");
addItemToCart("iPhone 15 Pro Max");
addItemToCart("Apple Homepod");
addItemToCart("iPad Pro");

// displaying the cart
displayCartItems();

// removing items from the cart
removeItemFromCart("Dell Inspiron");
removeItemFromCart("Apple Homepod");

// displaying the cart again to reflect the new changes
displayCartItems();

// checking out from the store
checkout();