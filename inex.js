async function saveToCrudCrud(event){

    try{

    event.preventDefault();

    const price = event.target.price.value;

    const productname = event.target.productname.value;

    const category = event.target.category.value;

    const obj = {

        price,

        productname,

        category

    }
   const response=await axios.post("https://crudcrud.com/api/10f558b4618e45368a42575eca13db6d/seller",obj)
   
       showNewUserScreen(response.data)
}
    
    catch(err){
        console.log(err);
    }

}


async function showNewUserScreen(obj){
    
try{
    const electronic = document.getElementById('list1');
    const food = document.getElementById('list2');
    const skin= document.getElementById('list3');

    const childElem = document.createElement('li');

    childElem.innerHTML = `${obj.price}-${obj.productname}-${obj.category}`;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML=`Delete`;
    const editButton = document.createElement('button');
    editButton.innerHTML=`Edit`;
    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);
    if(obj.category==='ElectronicsItems')
        electronic.appendChild(childElem);
        else if(obj.category==='FoodItems')
        food.appendChild(childElem);
        else 
        skin.appendChild(childElem);

    deleteButton.onclick = async () => {
      try{
        console.log(obj._id);
       const response= await axios.delete(`https://crudcrud.com/api/10f558b4618e45368a42575eca13db6d/seller/${obj._id}`)
       if(obj.category==='ElectronicsItems')
          electronic.removeChild(childElem);
          else if(obj.category==='FoodItems')
          food.removeChild(childElem);
          else 
          skin.removeChild(childElem);
      }
      catch(err){
        console.log(err);
      }
        
    }
    editButton.onclick = async () => {
        try{
         const  response= await axios.delete(`https://crudcrud.com/api/10f558b4618e45368a42575eca13db6d/seller/${obj._id}`)
          document.getElementById('price').value=obj.price;
          document.getElementById('productname').value=obj.productname;
          document.getElementById('category').value=obj.category;
          if(obj.category==='ElectronicsItems')
          electronic.removeChild(childElem);
          else if(obj.category==='FoodItems')
          food.removeChild(childElem);
          else 
          skin.removeChild(childElem);
        }
        catch(err){
          console.log(err);
        }
          
      }
    document.getElementById("price").value="";
    document.getElementById("productname").value="";
    document.getElementById("category").value="";
    }
    catch(err){
        console.log(err);
    }
}
window.addEventListener("DOMContentLoaded",async ()=>{
    try{
const response= await axios.get(`https://crudcrud.com/api/10f558b4618e45368a42575eca13db6d/seller`)
  for(let i=0;i<response.data.length;i++)
  {
    showNewUserScreen(response.data[i]);
  }
}
catch(err){
    console.log(err);
}
})