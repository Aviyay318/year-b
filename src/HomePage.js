import {useEffect, useState} from "react";
import axios from "axios";


function HomePage(){
const[joke,setJoke]=useState("");
const [category,setCategory]=useState("any");
const [categories,setCategories]=useState(["any","Miscellaneous", "Dark", "Spooky", "Christmas","Programming"]);
   


const fetchJoke = async ()=>{
    console.log(category);
  const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}`);

  console.log(response.data);
  if (response.status === 200){
      if (response.data.type==="single"){
          setJoke(response.data.joke);
      }else if(response.data.type==="twopart"){
          let joke = response.data.setup + " ";
          joke+= response.data.delivery;
          setJoke(joke);
      }
  }
}

useEffect(()=>{
    fetchJoke();
},[category])




   return(
       <div>
        <h1>HomePage</h1>
           {category.length>0&&<h2>{category}</h2>}
           {joke.length>0&&<h3>{joke}</h3>}
           <select onChange={(event)=>{setCategory(event.target.value)}}>
               {
                   categories.map((category)=>{
                       return(
                           <option value={category} key={category}>{category}</option>
                       )
                   })
               }

           </select>
       </div>
   )
}
export default HomePage;