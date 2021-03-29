import CategoryApi from '../api/categoryAPI.js';
import {$, reRender} from '../utils.js';
const CateAddPage =  {
   async  render(){
          return `
            <form id="form-add">
            <div class="form-group">
            <input type="text" placeholder="Tên danh mục" id="cate-name" class="form-control"/>
            </div>
            <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add"/>
            </div>
            </form>
          
          `
      },
    async  afterRender(){
       
        $('#form-add').addEventListener('submit', (e) =>{
            e.preventDefault();
            // console.log('helo');
            const category = {
                id: "",
                name : $('#cate-name').value
            } 
           CategoryApi.add(category);
           window.location.hash = '/list-category'
            // reRender(ListCategory,"#list-category");
            // console.log(category);
        })
      }

}
export default CateAddPage;