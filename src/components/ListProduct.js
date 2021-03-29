import ProductApi from "../api/productAPI";
import { reRender, $ } from "../utils";

const ListProduct = {
    async render(){ const {data: products} = await ProductApi.getAll()
        return `
        <table class="table table-striped table-sm" >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th><a href="/#/add-product" role="button" class="text-decoration-none">Add Product</a></th>
          </tr>
        </thead>
        <tbody>
        ${products.map((product, index) =>{
           return ` 
                <tr>
                     <td>${index}</td>
                     <td>${product.name}</td>
                     <td>${product.price}</td>
                    <td>
                        <a href="/#/edit-product/${product.id}" class="">Update</a>
                        <button class="btn btn-danger btn-remove" data-id="${product.id}">Delete</button>
                      
                    </td>
                   
                </tr>
         ` 
        }).join("")}
         
         
        </tbody>
      </table>
      `
    },
    async afterRender(){
        const bts = $('#list-products .btn');
        // console.log(bts);
        bts.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function(e){
                const question = confirm ('Bạn có muốn xoá không ?');
                if(question){
                    
                await ProductApi.remove(id);
                    reRender(ListProduct, "#list-products");
                }
             
            })
        }) 
    }
}
export default ListProduct;