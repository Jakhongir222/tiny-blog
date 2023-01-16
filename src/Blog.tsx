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
          setArticles(jsonData.results);
        };
        api();
      }, []);
    

      return (
        <div className="App">
          <h1>
            { articles && articles.length>0 && articles.map((value) => <p>{value.title}</p>
            )}
          </h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      );


}
