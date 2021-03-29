const SidebarAdmin = {
           render(){
                return `
                <div class="left__logo">LOGO</div>
                <div class="left__profile">
                    <div class="left__image"><img src="./images/profile.jpg" alt=""></div>
                    <p class="left__name">Hatsune Miku</p>
                </div>
                <ul class="left__menu">
                    <li class="left__menuItem">
                        <a href="/#/" class="left__title"><img src="assets/icon-dashboard.svg" alt="">Dashboard</a>
                    </li>
                    <li class="left__menuItem">
                        <div class="left__title"><img src="" alt=""><a href="/#/list-product">Sản Phẩm</a><img class="" src="" alt=""></div>
                    </li>
                    <li class="left__menuItem">
                        <div class="left__title"><img src="assets/icon-edit.svg" alt=""><a href="/#/list-category">Danh Mục</a><img class="" src="assets/arrow-down.svg" alt=""></div>     
                    </li>
                   

                </ul>
                
                
                `
            }


}
export default SidebarAdmin;