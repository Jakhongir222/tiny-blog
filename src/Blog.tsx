import React, { useEffect, useState } from 'react'
import './Blog.css'

export interface Articles  {
    id: number;
    title: string;
    body: string;
    tags: string[];
    imageUrl: string;
};


const imageUrl =[
    {title:'His mother had always taught him', url:'https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title:'He was an expert but not in a discipline', url:'https://images.unsplash.com/photo-1560801619-01d71da0f70c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aWNlJTIwY3JlYW18ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title:'Dave watched as the forest burned up on the hill.', url:'https://images.unsplash.com/photo-1511027643875-5cbb0439c8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVybmluZyUyMGZvcmVzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'},
    {title: 'All he wanted was a candy bar.', url: 'https://images.unsplash.com/photo-1579895989448-9cc51e9a7060?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FuZHklMjBiYXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: 'Hopes and dreams were dashed that day.', url: 'https://images.unsplash.com/photo-1625449281218-cbb6183f0aec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y3JpbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "Dave wasn't exactly sure how he had ended up", url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmFrZWQlMjBpbiUyMHRoZSUyMHNub3d8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: 'This is important to remember.', url: 'https://images.unsplash.com/photo-1587248721852-ffc60bffc129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGllfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60'},
    {title: 'One can cook on and with an open fire.', url: 'https://images.unsplash.com/photo-1469292055053-a5ebd1bfc2a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmlyZSUyMG91dHNpZGUlMjBjb29rfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60'},
    {title: 'There are different types of secrets.', url: 'https://images.unsplash.com/photo-1469204691332-56e068855403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2xkJTIwd29tYW4lMjBzZWNyZXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: 'They rushed out the door.', url: 'https://images.unsplash.com/photo-1469401258206-4e0cc14e9358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cnVuYXdheSUyMGhvdXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "It wasn't quite yet time to panic.", url: 'https://images.unsplash.com/photo-1638955844853-963b7f735bdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhbmljfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60'},
    {title: 'She was aware that things could go wrong.', url: 'https://images.unsplash.com/uploads/14110635637836178f553/dcc2ccd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBzdHJlc3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: 'She wanted rainbow hair.', url: 'https://images.unsplash.com/photo-1602651617040-ca4ba6d885f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbmJvdyUyMCUyMHdvbWFuJTIwaGFpcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'},
    {title: "The paper was blank.", url: 'https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8VGhlJTIwcGFwZXIlMjB3YXMlMjBibGFuay58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "The trees, therefore, must be such old", url: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8VGhlJTIwdHJlZXMlMjAlMjBvbGR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "There was only one way to do things in the Statton house.", url: 'https://images.unsplash.com/photo-1498019559366-a1cbd07b5160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFnaWN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "She was in a hurry.", url: 'https://images.unsplash.com/photo-1502919280275-1bed9aca68ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnaWN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "She had a terrible habit o comparing her life to others", url: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGlzdG9yeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'},
    {title: "The rain and wind abruptly stopped.", url: 'https://images.unsplash.com/photo-1563486688110-3e8087cb4bb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3JpbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "He couldn't remember exactly where he had read it", url: 'https://images.unsplash.com/photo-1604595817512-b7a728795249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZW5jaCUyMGJvb2t8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "He wandered down the stairs and into the basement", url: 'https://images.unsplash.com/photo-1414124488080-0188dcbb8834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlbmNoJTIwYm9vayUyMGJhc2VtZW50fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "She has seen this scene before.", url: 'https://images.unsplash.com/photo-1489712310660-bbce44cc541d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bG92ZSUyMHN0b3J5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "It's an unfortunate reality that we don't teach people how to make money", url: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpbWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "The robot clicked disapprovingly.", url: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyaW1pbmFsJTIwcm9ib3R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "It went through such rapid contortions", url: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80'},
    {title: "She patiently waited for his number to be called.", url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpbWluYWwlMjB3b21hbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'},
    {title: "Ten more steps.", url: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG92ZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'},
    {title: "He had three simple rules by which he lived.", url: 'https://images.unsplash.com/photo-1564156280315-1d42b4651629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGxvdmV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "The chair sat in the corner where it had been", url: 'https://images.unsplash.com/photo-1521585183829-b3b26b1408e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXIlMjAlMjBjb3JuZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {title: "Things aren't going well at all", url: 'https://images.unsplash.com/photo-1532693208716-3a9383ae5629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2xlZXB5JTIwZ2lybHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'},
];


  export default function Blog (){

    const [articles, setArticles] = useState<Articles[]>([]);
    const [sections, setSections] = useState<string[]>([]);

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

      useEffect(() => {
        if (articles.length > 0) {
            const tags = articles.map(article => article.tags).flat();
            setSections(Array.from(new Set(tags)));
        }
    }, [articles]);
    

    return (
        <div className='section-container'>
              { sections.map(section => (
                <div className="section" key={section}>
                    <h2>{section.toUpperCase()}</h2>
                    <div className='cards-container'>
                      {articles.map(article => (
                            article.tags.includes(section) && (
                                <div key={article.id} className='card'>
                                    <img className='cart-image' src={imageUrl.find(img => img.title === article.title)?.url} width='250' height='150'/>
                                    <div className='card-title'>{article.title}</div>
                                    <div className='card-body'>{article.body}</div>
                                    <div className='card-tags'>{article.tags.map((tag) => (<span className='tag'>{tag.toUpperCase()}</span>))}</div>
                                </div>
                            )
                      ))}
                    </div>
                </div>
              ))}
        </div>
);




}
