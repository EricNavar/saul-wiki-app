export type ArticleViewProps = {
    subText: string;
    headerText: string;
    image: {
      fields: {
          file: {
              url: string;
          }
      }
    }
}

export type ArticleSectionProps = {
    articles: ArticleViewProps[];
}