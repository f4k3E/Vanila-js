import ProductApi from "../api/productAPI";
import { parseRequestUrl } from "../utils";

const CategoryPage = {
async render(){
        const { id } = parseRequestUrl();
        console.log(id);
        const { data: products } = await ProductApi.getAll();
        // console.log(products);
        const result = products.filter(product => 
                                            product.categoryId == id).map(product => {
                                            return `
                                            <div class="col-4">
                                            <div class="card mb-2">
                                            <div class="card text-center">
                                                <img src="${product.image}" class="card-img-top" alt="">
                                            <div class="card-body">
                                                <a href="/#/products/${product.id}" class="text-decoration-none"><h5 class="card-title">${product.name}</h5></a>
                                                <p class="card-text">${product.price}</p>
                                                </div>
                                           </div>
                                           </div>
                                           </div>
                                            
                                           `
                                            }).join("");
           
        return `
        <h1>Products</h1>
        <div class="row">
        ${result}
        </div>
        
        `
    }
}
export default CategoryPage;