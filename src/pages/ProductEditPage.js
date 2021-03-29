import ProductApi from '../api/productAPI.js';
import { parseRequestUrl, $ } from '../utils.js';
import firebase from '../firebase'
const ProductEditPage = {
    async render(){
        const { id } = parseRequestUrl();
        const {data: product} = await ProductApi.get(id);
        console.log(product);
         return `
         <form id="form-update-product">
         <div class="mb-3">
            <label for="product-name" class="form-label">Product Name</label>
            <input type="text" class="form-control" id="product-name" value="${product.name}" >
        </div>
        <div class="form-group">
            <label for="image">Ảnh:</label>
            <input type="file" id="product-image" class="form-control" value="${product.image}"/>
         </div>
         <div class="">
            <label for="cate">Danh mục:</label>
            <select  class="form-select">
            <option id="product-cate"></option>
         </select>
        </div>
        <div class="form-group">
            <label for="price">Giá:</label>
            <input type="text" placeholder="" id="product-price" class="form-control" value="${product.price}"/>
        </div>
         <div class="form-group">
             <label for="status">Tình trạng:</label>
            <select class="form-select">
                 <option id="product-status value="${product.status}">Còn hàng</option>
            <option>Hết hàng</option>
        </select>
        </div>
        <div class="form-group">
            <label for="content">Mô tả:</label>
            <input type="text" placeholder="" id="product-desc" class="form-control" value="${product.description}"/>
        </div>
        <div class="form-group">
             <label for="content">Số lượng hàng:</label>
             <input type="text" placeholder="" id="product-count" class="form-control" value="${product.count}"/>
         </div>
        <div class="form-group">
            <label for="content">Chất liệu:</label>
            <input type="text" placeholder="" id="product-material" class="form-control" value="${product.material}"/>
        </div>
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
         
         `

    },
    async afterRender() {
        const { id } = parseRequestUrl();
        const {data: product} = await ProductApi.get(id);

        $('#form-update-product').addEventListener('submit', (e)=> {
            e.preventDefault();
            // console.log('old',product);
            const productImage = $('#product-image').files[0];
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);
            storageRef.put(productImage).then(function (){
                console.log('Upload thành công')
                storageRef.getDownloadURL().then((url) =>{
                    console.log(url);
                    const newProduct = {
                        id: "",
                        name : $('#product-name').value,
                        image: url,
                        price: $('#product-price').value,
                        status: $('#product-status').value,
                        description: $('#product-desc').value,
                        count: $('#product-count').value,
                        material: $('#product-material').value
                    } 
                    
                ProductApi.update(id , newProduct);
                window.location.hash = '/list-product'
                //  console.log(product);


               
               
               
                })

            })
})
    

    }
}
export default ProductEditPage;