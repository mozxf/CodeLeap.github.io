import {useState, useEffect} from "react"
import { PostBox } from "../../Components/PostBox/PostBox"
import { GlobalContext } from "../../Context/GlobalContent";
import { useContext } from "react";
import { set } from "date-fns";

export const PostsGET = () => {
    const [data, setData] = useState([]);

    const {username, render} = useContext(GlobalContext)
    const localUser = username;

  

useEffect(() => {
    
    async function getData() {
    const response = await fetch('https://dev.codeleap.co.uk/careers/');

    const jsonData = await response.json();
    
    
    setData(jsonData.results)
}
getData()
console.log(data)

}, [render])


 
 
    if(data.length)  return data.map((item) => {
        return (
        <PostBox 
        key={Math.random()}
        title={item.title} 
        username={item.username}
        date={item.created_datetime} 
        content={item.content}
        id={item.id}
        tools={localUser === item.username}
         />)
    })

    else return null
}