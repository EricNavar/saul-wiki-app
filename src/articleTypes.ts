export type ArticleProps = {
  id: string;
  description: string;
  content: any;
  title: string;
  thumbnail: {
    fields: {
      file: {
        url: string;
      }
    }
  },
  tag: string,
}
