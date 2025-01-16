import axios from "axios";
import {useEffect, useState} from "react";


function Image(){
const[images,setImages]=useState([{url:"gjhh",name:"kjnjk"}]); //{url:,name}


    const fetchImage= async ()=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
        if (response.status === 200){
            if (response.data!==null){
                for (let i = 0; i < 10; i++){
                    console.log(i);
                    setImages((prevImage)=>
                        [...prevImage,{url:response.data[i].thumbnailUrl,name:response.data[i].title}])
               }
            }
        }
 console.log(images);

    }
    useEffect(() => {
        fetchImage()
    },[])


    return(
        <div>
            <h1>Images</h1>
            {
                images.map((image,index)=>{
                    return(
                        <div key={index} >
                            <img src={image.url} alt={image.name}/>
                            <label>{image.name}</label>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Image;