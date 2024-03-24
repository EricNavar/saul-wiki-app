import React from 'react';

import { ArticleProps } from '../articleTypes';
import { client } from '../client';

import '../App.css';
import { Header } from '../kit-components/Header';
import { ArticleContainer, Container, PaginationButton, PaginationContainer, TextWrapper, } from '../styles';
import { ArticleCard } from '../kit-components/ArticleCard';
import { useHistory, useLocation } from 'react-router';

// i hate my life

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = React.useState<ArticleProps[]>([]);
  const [pageCount, setPageCount] = React.useState<number>(0);

  const location = useLocation();
  const history = useHistory();

  const PAGE_SIZE = 5;

  const searchParams = new URLSearchParams(location.search);
  const tag = searchParams.get('tag');
  const search = searchParams.get('search');
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0;

  React.useEffect(() => {
    client.getEntries({
      content_type: 'article',
      'metadata.tags.sys.id[in]': tag ? [tag] : undefined,
      query: search ? search : undefined,
      select: ['metadata', 'fields.title', 'fields.thumbnail', 'fields.description'],
      limit: PAGE_SIZE,
      skip: page * PAGE_SIZE
    })
      .then((response) => {
        const articlesFromContentful = response.items.map(item => {
          return {
            ...item.fields,
            id: item.sys.id,
            tag: item.metadata.tags[0].sys.id,
          } as ArticleProps
        });
        const sortedArticles = articlesFromContentful.sort((elem1, elem2) => elem1.tag.localeCompare(elem2.tag));
        setArticles(sortedArticles);
        setPageCount(Math.ceil(response.total / PAGE_SIZE))
      })
      .catch(console.error);
  }, [page, search, tag]);

  const onClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams();
    tag && newSearchParams.append('tag', tag);
    search && newSearchParams.append('search', search);
    newSearchParams.append('page', String(page));
    history.push({
      pathname: '/',
      search: newSearchParams.toString(),
    })
  };

  return (
    <div className="App">
      <Container>
        <Header />
        <ArticleContainer>
          {articles ?
            articles.map((article, index) =>
              <ArticleCard {...article} key={index} />
            )
            : <p>Loading...</p>
          }
        </ArticleContainer>
        <PaginationContainer>
          <TextWrapper>Pages</TextWrapper>
          {[...new Array(pageCount)].map((page, index) =>
            <PaginationButton key={index} id={`page-${index}`} onClick={() => onClickPage(index)}>{index}</PaginationButton>
            )}
          </PaginationContainer>
      </Container>
    </div>
  );
};

export { ArticlesPage };
