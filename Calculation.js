function CartCheck(Cart) {
    let total = Cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    if (total > 100) {
        total *= 0.9;
    }
    return total;
}
    const cart1 = [
        {name: "Тофу", price: 12, quantity: 5},
        {name: "Фалафель", price: 13, quantity: 3},
        {name: "Мигдалеве молоко", price: 16, quantity: 2},
        {name: "Чорний шоколад", price: 14, quantity: 1},
        {name: "Вінегрет", price: 9, quantity: 1},
        {name: "Кокосове молоко", price: 15, quantity: 2},
       ]

    const cart2 = [
        {name: "Тофу", price: 12, quantity: 1},
        {name: "Фалафель", price: 13, quantity: 1},
        {name: "Мигдалеве молоко", price: 16, quantity: 1},
        {name: "Кокосове молоко", price: 15, quantity: 1},
       ]

console.log(CartCheck(cart1));
console.log(CartCheck(cart2));
