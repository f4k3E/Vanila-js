import ProductApi from '../api/productAPI.js';
import { $ } from '../utils.js';
import CategoryApi from '../api/categoryAPI.js';
import firebase from '../firebase';
const ProductAddPage = {
   async  render(){ const {data: categories} = await CategoryApi.getAll()
            return `
                <form id="form-add">
                <div class="form-group">
                    <label for="product">Tên sản phẩm:</label>
                    <input type="text" placeholder="" id="product-name" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="image">Ảnh:</label>
                    <input type="file"  id="product-image" class="form-control"/>
                </div>
                ${categories.map((category, index) =>{
                    return`
                <div class="">
                    <label for="cate">Danh mục:</label>
                    <select  class="form-select">
                    <option id="product-cate" value=>${category.name}</option>
                    
                    </select>
                </div>
                `
                 }).join("")};
                <div class="form-group">
                    <label for="price">Giá:</label>
                    <input type="number" placeholder="" id="product-price" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="status">Tình trạng:</label>
                    <select class="form-select">
                        <option id="product-status">Còn hàng</option>
                        <option>Hết hàng</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="content">Mô tả:</label>
                    <input type="text" placeholder="" id="product-desc" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="content">Số lượng hàng:</label>
                    <input type="text" placeholder="" id="product-count" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="content">Chất liệu:</label>
                    <input type="text" placeholder="" id="product-material" class="form-control"/>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Add"/>
                </div>
                </form>
            `
        },

      async afterRender(){ 
            $('#form-add').addEventListener('submit', (e) =>{
                e.preventDefault();
                console.log('ok');
                const productImage = $('#product-image').files[0];
                // // let file = productImage.files[0];
                let storageRef = firebase.storage().ref(`images/${productImage.name}`);
                storageRef.put(productImage).then(function (){
                    console.log('Upload thành công')
                    storageRef.getDownloadURL().then((url) =>{
                        console.log(url);
                        const product = {
                            id: "",
                            name : $('#product-name').value,
                            image: url,
                            price: $('#product-price').value,
                            status: $('#product-status').value,
                            description: $('#product-desc').value,
                            count: $('#product-count').value,
                            material: $('#product-material').value
                        } 
                        
                     ProductApi.add(product);
                     window.location.hash = '/list-product';
                    //  console.log(product);


                //     const form = document.getElementById('#form-add');
                //     const name = document.getElementById('#product-name');
                //    $('#form-add').addEventListener('submit', (e) =>{
                //        e.preventDefault();

                //        checkInput();

                //    });
                //    function checkInput(){
                //        const name = name.value.trim();

                //        if(name === ''){

                //         setErrorFor(name, 'not ok');

                //        }else{



                //        }
                //    }
                   
                   
                   
                    })

                })
                
              
                // ProductApi.add(product);
                // window.location.hash = '/list-product'
             
                // console.log(product);
            })
        }
    
    }
export default ProductAddPage;