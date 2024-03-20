export type ArticleProps = {
    id: string;
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
