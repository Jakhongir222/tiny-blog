import React, { useEffect, useState } from 'react'

export interface Articles  {
    id: number;
    title: string;
    body: string;
    tags: string;
};


  export default function Blog (){

    const [articles, setArticles] = useState<Articles[]>([]);

      useEffect(() => {
        const api = async () => {
          const data = await fetch("https://dummyjson.com/posts", {
            method: "GET"
          });
          const jsonData = await data.json();
          setArticles(jsonData.posts);
        };
        api();
      }, []);
    

      return (
        <div className="App">
           <div>{ articles && articles.length>0 && articles.map((value) => 
               <>
                    <div key={value.id}>{value.title}</div>
                    <div key={value.id}>{value.body}</div>
                    <div key={value.id}>{value.tags}</div>
               </>
               )}
           </div>
        </div>
      );


}
