import React, {createContext} from 'react'
import { db } from '../config/Config'
import { collection, onSnapshot } from 'firebase/firestore'

export const ProductsContext = createContext()

export class ProductsContextProvider extends React.Component{

    state={
        products:[]
    }

    
    componentDidMount(){
        const prevProducts = this.state.products
        db.collection('Products').onSnapshot(snapshot=>{
            let changes = snapshot.docChanges()
            changes.forEach(change=>{
                if(change.type === 'added'){
                    prevProducts.push({
                        ProductID: change.doc.id,
                        ProductName: change.doc.data().ProductName,
                        ProductPrice: change.doc.data().ProductPrice,
                        ProductImg: change.doc.data().ProductImg,
                    })
                }
                this.setState({
                    products: prevProducts
                })
            })
        })
    }
    

    /*
    componentDidMount() {
        const prevProducts = this.state.products;
        const productsCollectionRef = collection(db, 'Products');
      
        const unsubscribe = onSnapshot(productsCollectionRef, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              const product = {
                ProductID: change.doc.id,
                ProductName: change.doc.data().ProductName,
                ProductPrice: change.doc.data().ProductPrice,
                ProductImg: change.doc.data().ProductImg,
              };
              prevProducts.push(product);
            }
          });
      
          this.setState({
            products: prevProducts,
          });
        });
      }
      */

    render(){
        return(
            <ProductsContext.Provider value={{products:[...this.state.products]}}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}