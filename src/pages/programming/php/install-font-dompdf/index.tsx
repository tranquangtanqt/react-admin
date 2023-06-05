import { PageTitle } from 'components/modules/page-title';

export const PHPLaravelInstallFontDompdf = () => {
  return (
    <>
      <PageTitle title="Cài đặt font cho dompdf"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>1. download load_font.php and place in ur project root</p>
          </div>
          <div className="tab-1">
            <p>2. edit load_font.php</p>
          </div>
          <div className="tab-2">
            <p>change the line require_once "autoload.inc.php";</p>
            <p>to require_once "vendor/autoload.php"</p>
            <p>add $fontDir = "storage/fonts";</p>
          </div>
          <div className="tab-1">
            <p>
              3. download your chinese supported font at eg:
              Fonts-Unicode-Chinese and place at your project root
            </p>
          </div>
          <div className="tab-1">
            <p>4. run in commandline php load_font.php xxxfont xxxfont.ttf</p>
          </div>
          <div className="tab-2">
            <p>
              eg: you have download simsun.ttf you will do php load_font.php
              simsun simsun.ttf then you font will be installed to storage/fonts
              directory
            </p>
          </div>
          <div className="tab-1">
            <p>
              5. use the font in ur template font-family: simsun and your good
              to go
            </p>
          </div>
          <b>Tham khảo</b>
          <div className="tab-1">
            <p>
              https://github.com/dompdf/dompdf/wiki/UnicodeHowTo#load-a-font-supporting-your-characters-into-dompdf
            </p>
          </div>
          <div className="tab-1">
            <p>https://bloglaptrinh.info/laravel-dompdf-font-issue/</p>
          </div>
        </div>
      </div>
    </>
  );
};
