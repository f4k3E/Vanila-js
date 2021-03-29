import CategoryApi from "../api/categoryAPI.js";
import { reRender, $ } from "../utils.js";


const ListCategory = {
    async render() { const {data: categories} = await CategoryApi.getAll()
        return `
        <table class = "table table-striped table-sm"> 
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th><a href="/#/add-cate" role="button" class="text-decoration-none">Add Cate</a></th>
                </tr>
            </thead>
            <tbody>
            ${categories.map((category, index) =>{
                return `
                <tr>
                    <td>${index}</td>
                    <td>${category.name}</td>
                    <td>
                    <a href="/#/edit-cate/${category.id}" class="">Update</a>
                    <button class="btn btn-danger btn-remove" data-id="${category.id}">Delete</button>
                    </td>

                </tr>
                `
            }).join("")}
            </tbody>

        </table>
        `
     },
     async afterRender(){
        const bts = $('#list-category .btn');
        // console.log(bts);
        bts.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function(){
                const question = confirm ('Bạn có muốn xoá không ?');
                if(question){
                    
                await CategoryApi.remove(id);
                    reRender(ListCategory, "#list-category");
                }
             
            })
        }) 
    }
}
export default ListCategory;