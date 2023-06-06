export default interface IContent {
  title: string;
  contents: [
    {
      p?: string;
      i?: string;
      b?: string;
      code?: string;
      language?: string;
      imageUrl?: string;
    },
  ];
}
