import { Plus, Trash2, Tag, FileText, Settings, Folder } from "lucide-react";
import { useEffect, useState } from "react";

function AdminCategories() {

    const BASE_URL="http://localhost:8000/tutor"

    const [categorydata,setCategorydata]=useState([])
    const [categoryname,setCategoryname]=useState("")
    const [description,setDescription]=useState("")
    const token=localStorage.getItem('token')

    const getCategory=async ()=>{

       try {
                const response = await fetch(`${BASE_URL}/getAllCategories`,{
                  method:"GET",
                  headers:{
                    'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                  }
    
                });
                
                const responsedata = await response.json();
          
                if (response.ok) {
    
                  setCategorydata(responsedata.categories);  // Store the fetched data in state

                }
                else{
                    alert(responsedata.message)
                }
    
              } catch (error) {
                console.error('Error:', error);
              }
            
          }


    useEffect(()=>{
      getCategory()
    },[])

    {/* Add Category API Call */}
    const postCategory = async (e) => {
    e.preventDefault();

       const categoryData={
      name:categoryname,
      description:description
    }

    try {
      const response = await fetch(`${BASE_URL}/addCategory`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
      },
        body: JSON.stringify(categoryData),
      });

      const data = await response.json();
      
      if(response.ok){
        alert("Category Added successfully")
        console.log(data);
      }
      else{
        alert(data.error)
      }
     
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  {/* Delete Category API  */}
  const deleteCategory = async (categoryId) => {
  try {
    const response = await fetch(`${BASE_URL}/deleteCategory/${categoryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    const responseData = await response.json();

    if (response.ok) {
      alert("Category deleted successfully");
      getCategory(); // Re-fetch the student list after deletion
    } else {
      alert(responseData.message);
    }
  } catch (error) {
    console.error("Delete error:", error);
  }
};



  return (
    <div className="w-full flex flex-col justify-center items-center gap-7 py-5">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold">Category Management</h1>
              <h1>Organize and manage your tutoring categories</h1>
            </div>
            <div className="w-[500px] flex flex-col">
                <div className="w-full flex rounded-tl-lg rounded-tr-lg px-3 py-3 text-lg text-white font-bold bg-gradient-to-r from-purple-600 to-pink-600">Add New Category</div>
                <form onSubmit={postCategory} className="w-full flex flex-col justify-center py-7 px-3 gap-5 border border-gray-300 shadow-sm" action="">
                  
                  <div className="w-full flex flex-col gap-2">
                    <h1 className="font-semibold">Category Name</h1>
                    <div className="w-full flex justify-between">
                      <input className="w-full px-2 py-2 outline-0 border border-black rounded-lg" type="text" placeholder="Enter a descriptive category name" onChange={(e)=>{setCategoryname(e.target.value)}}/>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h1 className="font-semibold">Description</h1>
                    <div className="w-full flex justify-between">
                      <textarea className="w-full px-2 py-2 outline-0 border border-black rounded-lg" rows={5} name="" id="" placeholder="Provide a detailed Description of this Category ..." onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                    </div>
                  </div>
                  <button className="w-full text-white font-semibold px-2 py-2 outline-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">Add Category</button>

                </form>
                
            </div>
            
            <div className="flex justify-center items-center gap-2">
              <h1>folder icon</h1>
              <h1 className="text-2xl font-bold">Existing Categories</h1>
              <h1>Categories Length</h1>
            </div>
           
           <div className="w-full flex flex-col gap-4 px-20">
           {
            categorydata.length===0 ? <div>No Category</div> :
             categorydata.map((category,index)=>{
              return  <div key={index} className="w-full px-5 py-3 flex justify-between items-center rounded-lg border border-gray-300 shadow-sm">
                    <div className="flex flex-col">
                    <h1 className="font-bold">{category.name}</h1>
                    <h1>{category.description}</h1>
                    </div>
                    <Trash2 className="w-5 h-5 cursor-pointer hover:scale-[115%]" color="red" onClick={()=>{deleteCategory(category._id)}}/>
                </div>
             })  
           }
           
            
           </div>

    </div>
  )
}

export default AdminCategories
