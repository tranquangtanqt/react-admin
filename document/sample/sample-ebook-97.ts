import IContent from 'utils/interface';

export const thing1: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: ``,
      },
    ],
  },
  {
    title: '',
    no: false,
    contents: [
      {
        code: {
          src: ``,
          language: 'java',
        },
      },
      {
        p: `<h6><b></b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-1_1.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Tham khảo',
    contents: [
      {
        p: `Nguồn: https://github.com/97-things/97-things-every-programmer-should-know`,
      },
    ],
  },
];
