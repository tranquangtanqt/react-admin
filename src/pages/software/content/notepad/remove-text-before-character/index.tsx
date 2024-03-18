import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const SoftwareNotepadRemoveTextBeforeCharacter = () => {
  return (
    <>
      <PageTitle title="Replace From Character To End"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <Code
              code={`.+(\\character)  
Example: .+(\\(\\")`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>
              Example: getTooltip("mark_business_card_information_mismatch")); =
              {'>'} mark_business_card_information_mismatch"));
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
