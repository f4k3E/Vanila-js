import ListCategory from "../components/ListCategory.js";
import SidebarAdmin from "../components/SidebarAdmin.js";

const AdminCategoryPage = {
    async render (){
       return ` 
       <div class="wrapper2">
        <div class="container2">
            <div class="dashboard2">
                <div class="left">
                    <span class="left__icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div class="left__content">
                      ${SidebarAdmin.render()}
                    </div>
                </div>
                <div class="right">
                    <div class="right__content">
                        <div class="right__title">Bảng điều khiển</div>
                        <p class="right__desc">Category</p>
                        <div class="right__table" id="list-category">
                            ${await ListCategory.render()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
   `  
     },
     async afterRender(){
         return `${await ListCategory.afterRender()}`
     }
};
export default AdminCategoryPage;