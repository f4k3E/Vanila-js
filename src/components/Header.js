import CategoryApi from "../api/categoryAPI.js";

const Header = {
 async render(){
        const {data: categories} = await CategoryApi.getAll();
        return  `
        
      
        <nav class="navbar navbar-expand-lg navbar-white bg-white">
        <div class="container">
    
    <img class="" src="./images/logo.svg" width="120" height="50" style="margin-left:100px">
    
    <div class="collapse navbar-collapse" id="navbarScroll" style="margin-left:350px">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul class="dropdown-menu">
          <li>  
          <a class="dropdown-item" href="/#/products"> 
            ${
              categories.map(category =>{
                  return ` <a class="dropdown-item" href="/#/category/${category.id}">${category.name}</a>`
                 
              }).join("")
          }
          </a>
           <li>
          </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/#/blog">Blog</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="/#/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#/contact">Contact</a>
       </li>
      </ul>
      <form class="d-flex p-2 bd-highlight">
        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
        <a class="btn btn-sm btn-outline-content-end" href="/#/list-product">Sign up</a>
      </form>
    
      
    </div>
  </div>
</nav>
        `
    }
}
export default Header;