import ProductsPage from "./ProductsPage";
const HomePage = {
   async render (){
       
        return `
        <title>Home</title>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="./images/slide-01.jpg" class="d-block w-100" alt="...">
         </div>
        <div class="carousel-item">
        <img src="./images/slide-03.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="./images/slide-04.jpg" class="d-block w-100" alt="...">
        </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
     </a>
     <div class="row row-cols-1 row-cols-md-3 g-4">
     <div class="col">
     <div class="card">
      <img src="./images/banner-01.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Áo</h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./images/banner-02.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Quần</h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./images/banner-03.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Phụ kiện</h5>
      </div>
    </div>
  </div>
  
</div>
</div>
    <div class="container">
        <h1 class="p-2 ">Product hot</h1>
     ${await ProductsPage.render()}

    </div>      
        
        `
    }
}
export default HomePage;