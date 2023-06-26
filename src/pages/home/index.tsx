import { Link } from 'react-router-dom';

export const Home = () => {
  // const tableData = [
  //   {
  //     title: "Me",
  //     content: {
  //       text: `office365`,
  //       links: {
  //         href: "https://portal.office365.com",
  //         title: "office365(E3): tantq@mitani.com&#10;Email: tantq@mitani.co.jp",
  //       },
  //     },
  //   },
  // ];
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Me</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://portal.office365.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="office365(E3): tantq@mitani.com&#10;Email: tantq@mitani.co.jp"
                  >
                    office365
                  </a>
                </li>
                <li>
                  <Link to={'/utilities/textSpecial'}>{'Special'}</Link>
                </li>
                <li>
                  <a
                    href="http://172.30.5.100/pe4j"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WT
                  </a>
                </li>
                <li>
                  <a
                    href="http://pe/pe4j/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WR
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Algorithm</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://projecteuler.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Euler
                  </a>
                </li>
                <li>
                  <a
                    href="http://oj.husc.edu.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Husc
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.techiedelight.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    techiedelight
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Database</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://dbfiddle.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dbfiddle
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mockaroo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    mockaroo
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Image - Video</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://www.usebubbles.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    usebubbles _ screen
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>CSharp</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://github.com/thangchung/awesome-dotnet-core"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Awesome dotnet core
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/fullstackhero"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    fullstack hero
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Java</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    geeksforgeeks
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.javacodegeeks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    javacodegeeks
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/akullpp/awesome-java"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Awesome java
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Blankj/awesome-java-leetcode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Awesome java leetcode
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Javascript</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://github.com/sorrycc/awesome-javascript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Awesome javascript
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/anonystick/anonystick"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Anonystick
                  </a>
                </li>
                <li>
                  <a
                    href="https://completejavascript.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Complete Javascript
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Book</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://books.goalkicker.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    goalkicker
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>CSS</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://cssbattle.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    cssbattle
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ngekoding/cssbattle"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    cssbattle - result
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    figma
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Design Patterns</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://refactoring.guru/design-patterns/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    refactoring
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Deploy</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://www.heroku.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Heroku
                  </a>
                </li>
                <li>
                  <a
                    href="https://dashboard.render.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="tranquangtanqt1990@gmail.com&#10;beautiful@1190"
                  >
                    Render
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Japan</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://www.vnjpclub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title=""
                  >
                    vnjpclub
                  </a>
                </li>
                <li>
                  <a
                    href="https://jls.vnjpclub.com/index.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    title=""
                  >
                    vnjpclub
                  </a>
                </li>
                <li>
                  <a
                    href="https://quizlet.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="tranquangtan1109&#10;beautiful@1190"
                  >
                    quizlet
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>TODO</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://github.com/SiVi-Code/sell-source"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sell-source
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.nestjs.com/security/authentication"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    authentication
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/topics/nestjs-best-practices"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    nestjs-best-practices
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/lujakob/nestjs-realworld-example-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    nestjs-realworld-example-app
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Social Networking Site</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://slack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="tranquangtanqt1990@gmail.com&#10;"
                  >
                    slack
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.skype.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    skype
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Note</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://www.notion.so/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    notion.so
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Cheatsheet</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://thachnguyenp.github.io/git-command/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Reference</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://codecanyon.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    codecanyon.net
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-3">
          <div className="card">
            <div className="card-header font-size-16">
              <b>Youtube</b>
            </div>
            <div className="card-body">
              <ol>
                <li>
                  <a
                    href="https://www.youtube.com/@anonystick/playlists"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    anonystick
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
