class Product {
    constructor(name, price, quantity, category, isUsed) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
        this.isUsed = isUsed;
    }
    
    toHTMLrow() {
        return `
            <tr>
                <td>${this.name}</td>
                <td>$ ${this.price}</td>
                <td>${this.quantity}</td>
                <td>${this.capitalizeFirstLetter(this.category)}</td>
                <td>${this.isUsed ? 'Yes' : 'No'}</td>
            </tr>`;}

    capitalizeFirstLetter(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}