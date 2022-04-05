import {useState, useEffect} from "react"
import { PostBox } from "../../Components/PostBox/PostBox"
import { GlobalContext } from "../../Context/GlobalContent";
import { useContext } from "react";

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

}, [render])


 
 
    if(data.length)  return data.map((item) => {
        return (
        <PostBox 
        key={Math.random()}
        title={item.title} 
        username={item.username}
        date={item.created_datetime} 
        content={item.content}
        tools={localUser === item.username}
        id={item.id}
         />)
    })

    else return null
}