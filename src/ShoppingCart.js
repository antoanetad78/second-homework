class ShoppingCart {
    constructor() {
        this.items = []
      }
    getItems() {
        return this.items
    }
    addItem(name, quantity, price) {
        this.items.push({
            name: name,
            quantity: quantity,
            pricePerUnit:price})
    }
    clear() {
        this.items.splice(0)
    }
    total() {
        return this.items.reduce((acc, current) => {
            return acc = acc + current.quantity*current.pricePerUnit
        },0)
    }
}
module.exports = ShoppingCart
