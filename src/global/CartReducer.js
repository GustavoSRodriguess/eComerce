export const CartReducer = (state, action) =>{

    const {shoppingCart, totalPrice, totalQty} = state

    let product
    //let index
    let updatePrice
    let updateQty

    switch (action.type) {
        case 'AD_TO_CART':
            const check = shoppingCart.find(product=>product.ProductID === action.id)
            if(check){
                console.log('produto ja esta no carrino')
                return state

            }else{
                product = action.product
                product['qty'] = 1
                product['TotalProductPrice'] = product.ProductPrice * product.qty
                updateQty = totalQty + 1
                updatePrice = totalPrice + product.ProductPrice

                return{
                    shoppingCart: [product, ...shoppingCart], totalPrice: updatePrice, totalQty: updateQty
                }
            }
            break;

    }
}