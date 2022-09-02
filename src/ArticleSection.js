import React from "react";
import {client} from './client';
import {Article} from './Article';

export function ArticleSection() {
    const [articles, setArticles] = React.useState([]);

    React.useEffect(() => {
        client.getEntries()
            .then((response) => {
                const articlesFromContentful = response.items.map(item => item.fields);
                setArticles(articlesFromContentful);
            })
            .catch(console.error);
    }, []);

    return (
        <div>
            {articles.map((article,index) =>
               <Article {...article} key={index} />
            )}
        </div>
    );
}