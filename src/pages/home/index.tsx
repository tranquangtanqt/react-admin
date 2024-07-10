import { Fragment } from 'react';

//https://10015.io/tools/sha512-encrypt-decrypt

export const Home = () => {
  interface ILink {
    title: string;
    contents: {
      text: string;
      links: {
        href: string;
        title?: string;
        target?: string;
      };
    }[];
  }
  [];

  const data: ILink[] = [
    {
      title: 'Genaral',
      contents: [
        {
          text: `dev.to`,
          links: {
            href: 'https://dev.to/',
          },
        },
        {
          text: `infoworld.com`,
          links: {
            href: 'https://www.infoworld.com/',
          },
        },
        {
          text: `hackr.io`,
          links: {
            href: 'https://hackr.io/',
          },
        },
        {
          text: `10015.io`,
          links: {
            href: 'https://10015.io/',
          },
        },
      ],
    },
    {
      title: 'Algorithm',
      contents: [
        {
          text: `TheAlgorithms`,
          links: {
            href: 'https://github.com/TheAlgorithms',
          },
        },
        {
          text: `Project Euler`,
          links: {
            href: 'https://projecteuler.net/',
          },
        },
        {
          text: `Husc`,
          links: {
            href: 'http://oj.husc.edu.vn/',
          },
        },
        {
          text: `techiedelight`,
          links: {
            href: 'https://www.techiedelight.com/',
          },
        },
      ],
    },
    {
      title: 'Course',
      contents: [
        {
          text: `Tài liệu CNTT`,
          links: {
            href: 'https://sites.google.com/view/tailieucntt2020/free',
          },
        },
      ],
    },
    {
      title: 'Database',
      contents: [
        {
          text: `sqlshack.com`,
          links: {
            href: 'https://www.sqlshack.com/',
          },
        },
        {
          text: `dbfiddle`,
          links: {
            href: 'https://dbfiddle.uk/',
          },
        },
        {
          text: `mockaroo`,
          links: {
            href: 'https://www.mockaroo.com/',
          },
        },
        {
          text: `neon`,
          links: {
            title: 'login with parnet Hasura',
            href: 'https://console.neon.tech/sign_in',
          },
        },
        {
          text: `Hasura`,
          links: {
            href: 'https://cloud.hasura.io/',
            title: 'tranquangtanqt1990@gmail.com PEFEYAJvziLWmphrdbk2ag==',
          },
        },
      ],
    },
    {
      title: 'Image - Video',
      contents: [
        {
          text: `image to base64`,
          links: {
            href: 'https://www.base64-image.de/',
          },
        },
        {
          text: `base64 to image`,
          links: {
            href: 'https://base64.guru/converter/decode/image',
          },
        },
        {
          text: `usebubbles _ screen`,
          links: {
            href: 'https://www.usebubbles.com/',
          },
        },
      ],
    },
    {
      title: 'CSharp',
      contents: [
        {
          text: `c-sharpcorner.com`,
          links: {
            href: 'https://www.c-sharpcorner.com/',
          },
        },
        {
          text: `Awesome dotnet core`,
          links: {
            href: 'https://github.com/thangchung/awesome-dotnet-core',
          },
        },
        {
          text: `code4it.dev`,
          links: {
            href: 'https://www.code4it.dev/',
          },
        },
        {
          text: `mwaseemzakir.substack.com`,
          links: {
            href: 'https://mwaseemzakir.substack.com/',
          },
        },
        {
          text: `milanjovanovic.tech`,
          links: {
            href: 'https://www.milanjovanovic.tech/',
          },
        },
        {
          text: `Clean code`,
          links: {
            href: 'https://github.com/thangchung/clean-code-dotnet#naming',
          },
        },
        {
          text: `fullstack hero`,
          links: {
            href: 'https://github.com/fullstackhero',
          },
        },
        {
          text: `simplcommerce`,
          links: {
            href: 'https://github.com/simplcommerce/SimplCommerce',
          },
        },
        {
          text: `lib QuestPDF`,
          links: {
            href: 'https://github.com/QuestPDF/QuestPDF',
          },
        },
      ],
    },
    {
      title: 'Java',
      contents: [
        {
          text: `javatechonline`,
          links: {
            href: 'https://javatechonline.com/',
          },
        },
        {
          text: `yegor256`,
          links: {
            href: 'https://www.yegor256.com/',
          },
        },
        {
          text: `howtodoinjava`,
          links: {
            href: 'https://howtodoinjava.com//',
          },
        },
        {
          text: `geeksforgeeks`,
          links: {
            href: 'https://www.geeksforgeeks.org/',
          },
        },
        {
          text: `javacodegeeks`,
          links: {
            href: 'https://www.javacodegeeks.com/',
          },
        },
        {
          text: `Awesome java`,
          links: {
            href: 'https://github.com/akullpp/awesome-java',
          },
        },
        {
          text: `Awesome java leetcode`,
          links: {
            href: 'https://github.com/Blankj/awesome-java-leetcode',
          },
        },
      ],
    },
    {
      title: 'Javascript',
      contents: [
        {
          text: `Awesome javascript`,
          links: {
            href: 'https://github.com/sorrycc/awesome-javascript',
          },
        },
        {
          text: `Anonystick`,
          links: {
            href: 'https://github.com/anonystick/anonystick',
          },
        },
        {
          text: `Complete Javascript`,
          links: {
            href: 'https://completejavascript.com/',
          },
        },
      ],
    },
    {
      title: 'Book',
      contents: [
        {
          text: `goalkicker`,
          links: {
            href: 'https://books.goalkicker.com/',
          },
        },
      ],
    },
    {
      title: 'CSS',
      contents: [
        {
          text: `uiverse.io`,
          links: {
            href: 'https://uiverse.io/elements',
          },
        },
        {
          text: `getcssscan`,
          links: {
            href: 'https://getcssscan.com/',
          },
        },
        {
          text: `larsenwork.com`,
          links: {
            href: 'https://larsenwork.com/easing-gradients/',
          },
        },
        {
          text: `figma`,
          links: {
            href: 'https://www.figma.com/',
          },
        },
        {
          text: `cssbattle`,
          links: {
            href: 'https://cssbattle.dev/',
          },
        },
        {
          text: `cssbattle - result`,
          links: {
            href: 'https://github.com/ngekoding/cssbattle',
          },
        },
      ],
    },
    {
      title: 'Design Patterns',
      contents: [
        {
          text: `refactoring`,
          links: {
            href: 'https://refactoring.guru/design-patterns/',
          },
        },
      ],
    },
    {
      title: 'Deploy',
      contents: [
        {
          text: `Render`,
          links: {
            href: 'https://dashboard.render.com/',
            title: `tranquangtanqt1990@gmail.com 4tU3B3EJZvZfjWvMnp5K1A==`,
          },
        },
      ],
    },
    {
      title: 'Japan',
      contents: [
        {
          text: `tiengnhatcolam`,
          links: {
            href: 'https://tiengnhatcolam.vn/',
          },
        },
        {
          text: `vnjpclub`,
          links: {
            href: 'https://www.vnjpclub.com/',
          },
        },
        {
          text: `vnjpclub`,
          links: {
            href: 'https://jls.vnjpclub.com/index.php',
            title: 'tranquangtan1109 4tU3B3EJZvZfjWvMnp5K1A==',
          },
        },
        {
          text: `quizlet`,
          links: {
            href: 'https://quizlet.com/',
          },
        },
      ],
    },
    {
      title: 'Note',
      contents: [
        {
          text: `notion.so`,
          links: {
            href: 'https://www.notion.so/',
          },
        },
      ],
    },
    {
      title: 'Cheatsheet',
      contents: [
        {
          text: `Git`,
          links: {
            href: 'https://thachnguyenp.github.io/git-command/',
          },
        },
      ],
    },
    {
      title: 'Reference',
      contents: [
        {
          text: `codecanyon.net`,
          links: {
            href: 'https://codecanyon.net/',
          },
        },
        {
          text: `ophiuchi.dev`,
          links: {
            href: 'https://www.youtube.com/watch?v=frvGOxGlPlg',
          },
        },
        {
          text: `encryption-decryption`,
          links: {
            href: 'https://www.devglan.com/online-tools/text-encryption-decryption',
            title: 'key: tantq',
          },
        },
      ],
    },
    {
      title: 'Youtube',
      contents: [
        {
          text: `anonystick`,
          links: {
            href: 'https://www.youtube.com/@anonystick/playlists',
          },
        },
      ],
    },
    {
      title: 'TODO',
      contents: [
        {
          text: `nestjs-best-practices`,
          links: {
            href: 'https://github.com/topics/nestjs-best-practices',
          },
        },
        {
          text: `nestjs-realworld-example-app`,
          links: {
            href: 'https://github.com/lujakob/nestjs-realworld-example-app',
          },
        },
      ],
    },
  ];

  return (
    <>
      <div className="row">
        {data.map((value, key) => (
          <Fragment key={key}>
            <div className="col-12 col-sm-12 col-md-3 mt-2">
              <div className="card">
                <div className="card-header font-size-16">
                  <b>{value.title}</b>
                </div>
                <div className="card-body">
                  <ol>
                    {value.contents.map((content, contentKey) => (
                      <Fragment key={contentKey}>
                        <li>
                          <a
                            href={content.links.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={content.links.title}
                          >
                            {content.text}
                          </a>
                        </li>
                      </Fragment>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
