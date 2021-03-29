import CategoryApi from '../api/categoryAPI.js';
import { parseRequestUrl, $} from '../utils.js';
const CateEditPage = {
  async render(){ 
        const { id } = parseRequestUrl();
         const {data: category} = await CategoryApi.get(id);
        //  console.log(categories);
       return `
    
       <form id="form-update-cate">
         <div class="mb-3">
            <label for="cate-name" class="form-label">Category Name</label>
            <input type="text" class="form-control" id="cate-name" value="${category.name}" >
        
        </div>
      
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
       
       `
    },
  async  afterRender(){
    const { id } = parseRequestUrl();
    const {data: category} = await CategoryApi.get(id);
    $('#form-update-cate').addEventListener('submit', (e)=> {
      e.preventDefault();
      console.log('old',category);
      const newCate = {
          id:"",
          name: $('#cate-name').value
      };
      // // console.log('new', newProduct)
      CategoryApi.update(id , newCate);
      window.location.hash = '/list-category'
    })
  }
}
export default CateEditPage;