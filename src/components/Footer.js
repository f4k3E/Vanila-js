import CategoryApi from "../api/categoryAPI.js";
     const Footer = {
         async render(){
             const { data: categories } = await CategoryApi.getAll();
             return `
             <div class="row">
             <div class="col-12 col-md">
               <img class="mb-2" src="./images/logo.svg" alt="" width="60" height="60">
               <small class="d-block  text-muted">&copy; 2021 <br>thucnvph08400@fpt.edu.vn</small>
               <small class="d-block  text-muted"> <br>Mỹ Đình,Nam Từ Liêm, Hà Nội</small>
             </div>
             <div class="col-6 col-md">
               <h5>Danh mục</h5>
               <ul class="list-unstyled text-small">
                 <li><a class="link-secondary" href="/#/products">${
                    categories.map(category =>{
                        return ` <a class="dropdown-item" href="/#/category/${category.id}">${category.name}</a>`
                       
                    }).join("")
                }</a></li>
                
               </ul>
             </div>
             <div class="col-6 col-md">
               <h5>Chăm sóc khách hàng</h5>
               <ul class="list-unstyled text-small">
                 <li><a class="link-secondary" href="#">Trung tâm trợ giúp</a></li>
                 <li><a class="link-secondary" href="#">Blog</a></li>
                 <li><a class="link-secondary" href="#">Hướng dẫn mua hàng</a></li>
                 <li><a class="link-secondary" href="#">Vận chuyển</a></li>
               </ul>
             </div>
             <div class="col-6 col-md">
               <h5>Thanh toán</h5>
               <ul class="list-unstyled text-small">
                 <li><a class="link-secondary" href="#"><img src="./images/visa.png" width="30" height="30"></a></li>
                 
               </ul>
             </div>
           </div>
             
             `
         }
     }
export default Footer;