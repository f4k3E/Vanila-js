
import ProductApi from '../api/productAPI';
const ProductsPage = {
   async render (){
      
            const {data : products} = await ProductApi.getAll();
           
            const result = products.map( product => {
                return `
                <div class="col-4">
                <div class="card" style="width:400px;">
                <div class="card text-center">
                    <img src="${product.image}" class="card-img-top" alt="" width="">
                <div class="card-body">
                    <a href="/#/products/${product.id}" class="text-decoration-none"><h5 class="card-title">${product.name}</h5></a>
                    <p class="card-text">${product.price}</p>
                    </div>
               </div>
               </div>
               </div>
                `
    
            }).join("")
            // console.log(products);
            return `
                    
                    <div class="row">
                    ${result}
                    </div>
                `
      
        
        // const {products} = data;
        // const result = products.map( product => {
        //     return `
        //     <div class="col-4">
        //     <div class="card" >
        //         <img src="${product.image}" class="card-img-top" alt="${product.name}">
        //         <div class="card-body">
        //         <h5 class="card-title">${product.name}</h5>
        //         <p class="card-text">${product.description}</p>
        //         <a href="/#/products/${product.id}" class="btn btn-primary">Go somewhere</a>
        //         </div>
        //    </div>
        //    </div>
        //     `

        // }).join("")
    
       
    }
}
export default ProductsPage;