export default interface IContent {
  title: string;
  no?: boolean;
  contents: {
    p?: string;
    i?: string;
    b?: string;
    code?: {
      src: string;
      language: string;
    };
    image?: {
      src: string;
      align?: string;
      width?: string;
    };
  }[];
}
