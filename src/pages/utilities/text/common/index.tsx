import StringUtils from '../../../../utils/string-utils';
import { PageTitle } from '../../../../components/modules/page-title';
import { useState } from 'react';

export const UtilitiesTextCommon = () => {
  const [input, setInput] = useState('');
  const [upper, setUpper] = useState('');
  const [lower, setLower] = useState('');
  const [upperUnderscore, setUpperUnderscore] = useState('');
  const [lowerUnderscore, setLowerUnderscore] = useState('');
  const [camel, setCamel] = useState('');
  const [numberVNToJP, setNumberVNToJP] = useState('');

  const renderText = (e: any) => {
    const inputVal = e.target.value;
    setInput(inputVal);
    setUpper(inputVal.toUpperCase());
    setLower(inputVal.toLowerCase());
    setUpperUnderscore(inputVal.toUpperCase().trim().replace(/ /g, '_'));
    setLowerUnderscore(inputVal.toLowerCase().trim().replace(/ /g, '_'));
    setCamel(StringUtils.camelize(inputVal));
    setNumberVNToJP(StringUtils.numberVNToJP(inputVal));
  };

  return (
    <>
      <PageTitle title="Common"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <label htmlFor="input" className="form-label">
            Input
          </label>
          <textarea
            id="input"
            className="form-control"
            value={input}
            onChange={(e) => renderText(e)}
            placeholder={'Enter input'}
            style={{ height: 100, width: '100%' }}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-6 col-md-6">
          <label htmlFor="uppercase" className="form-label">
            Uppercase
          </label>
          <textarea
            id="uppercase"
            className="form-control"
            value={upper}
            onChange={(e) => setUpper(e.target.value)}
            style={{ height: 100, width: '100%' }}
            placeholder={'uppercase'}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-6">
          <label htmlFor="lowercase" className="form-label">
            Lowercase
          </label>
          <textarea
            id="lowercase"
            className="form-control"
            value={lower}
            onChange={(e) => setLower(e.target.value)}
            style={{ height: 100, width: '100%' }}
            placeholder={'lowercase'}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-6 col-md-6">
          <label htmlFor="uppercase-underscore" className="form-label">
            Uppercase Underscore
          </label>
          <textarea
            id="uppercase-underscore"
            className="form-control"
            value={upperUnderscore}
            onChange={(e) => setUpperUnderscore(e.target.value)}
            style={{ height: 100, width: '100%' }}
            placeholder={'uppercase Underscore'}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-6">
          <label htmlFor="lowercase-underscore" className="form-label">
            Lowercase Underscore
          </label>
          <textarea
            id="lowercase-underscore"
            className="form-control"
            value={lowerUnderscore}
            onChange={(e) => setLowerUnderscore(e.target.value)}
            style={{ height: 100, width: '100%' }}
            placeholder={'lowercase Underscore'}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-6 col-md-6">
          <label htmlFor="camel" className="form-label">
            Camel
          </label>
          <textarea
            id="camel"
            className="form-control"
            value={camel}
            onChange={(e) => setCamel(e.target.value)}
            style={{ height: 100, width: '100%' }}
            placeholder={'camel'}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-6">
          <label htmlFor="number-vn-jp" className="form-label">
            Number VN To JP
          </label>
          <textarea
            id="number-vn-jp"
            className="form-control"
            value={numberVNToJP}
            onChange={(e) => setNumberVNToJP(e.target.value)}
            style={{ height: 100, width: '100%' }}
            placeholder={'number VN To JP'}
          />
        </div>
      </div>
    </>
  );
};
