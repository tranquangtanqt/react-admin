import { Link } from "react-router-dom";

export const Home = () => {
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
                <li><Link to={"/utilities/textSpecial"}>{"Special"}</Link></li>
                <li><a href="http://172.30.5.100/pe4j" target="_blank" rel="noopener noreferrer">WT</a></li>
                <li><a href="http://pe/pe4j/" target="_blank" rel="noopener noreferrer">WR</a></li>
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
                <li><a href="https://dbfiddle.uk/" target="_blank" rel="noopener noreferrer">dbfiddle</a>
                </li>
                <li><a href="https://www.mockaroo.com/" target="_blank" rel="noopener noreferrer">mockaroo</a>
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
                <li><a href="https://www.usebubbles.com/" target="_blank" rel="noopener noreferrer">usebubbles _ screen</a></li>
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
                <li><a href="https://projecteuler.net/" target="_blank" rel="noopener noreferrer">Project Euler</a></li>
                <li><a href="http://oj.husc.edu.vn/" target="_blank" rel="noopener noreferrer">Husc</a></li>
                <li><a href="https://www.techiedelight.com/" target="_blank" rel="noopener noreferrer">techiedelight</a></li>
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
                <li><a href="https://github.com/thangchung/awesome-dotnet-core" target="_blank" rel="noopener noreferrer">Awesome dotnet core</a></li>
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
                <li><a href="https://github.com/akullpp/awesome-java" target="_blank" rel="noopener noreferrer">Awesome java</a></li>
                <li><a href="https://github.com/Blankj/awesome-java-leetcode" target="_blank" rel="noopener noreferrer">Awesome java leetcode</a></li>
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
                <li><a href="https://github.com/sorrycc/awesome-javascript" target="_blank" rel="noopener noreferrer">Awesome javascript</a></li>
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
                <li><a href="https://books.goalkicker.com/" target="_blank" rel="noopener noreferrer">goalkicker</a></li>
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
                <li><a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">figma</a></li>
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
                <li><a href="https://refactoring.guru/design-patterns/" target="_blank" rel="noopener noreferrer">refactoring</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};