import React, { useEffect, useState } from 'react'
import './Blog.css'
import { Articles } from './interface'
import { imageUrl } from './data'


  export default function Blog (){

    const [articles, setArticles] = useState<Articles[]>([]);
    const [sections, setSections] = useState<string[]>([]);
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
        sections.reduce((acc, section) => {
          acc[section] = true;
          return acc;
        }, {} as Record<string, boolean>)
      );

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
        <div className="section-container">
          {sections.map((section) => {
            const isExpanded = expandedSections[section];
            return (
              <div className="section" key={section}>
                <h2>{section.toUpperCase()}
                  <button onClick={() => setExpandedSections({ ...expandedSections, [section]: !isExpanded })}>{isExpanded ? "↓" : "→"}</button>
                </h2>
                {isExpanded && (
                  <div className="cards-container">
                    {articles
                      .filter((article) => article.tags.includes(section))
                      .map((article) => (
                        <div key={article.id} className="card">
                          <img className="card-image" src={imageUrl.find((img) => img.title === article.title)?.url} width="350" height="250"/>
                          <div className="card-title">{article.title}</div>
                          <div className="card-body">{article.body}</div>
                          <div className="card-tags">
                            {article.tags.map((tag) => (
                              <span className="tag">{tag.toUpperCase()}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    
}
