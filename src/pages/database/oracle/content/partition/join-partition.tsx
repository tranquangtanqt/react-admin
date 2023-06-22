import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const DatabaseOracleJoinPartition = () => {
  return (
    <>
      <PageTitle title="Join table use partition"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <Code
              code={` FROM
MAM_ITM M1 
LEFT JOIN (
        SELECT 
            ROW_NUMBER() OVER (PARTITION BY S1.ITM_CD, S1.ITM_SUB1,S1.ITM_SUB2, S1.ITM_SUB3, S1.SLS_UPRI_GRP_CD, S1.UNIT_CD
                                    ORDER BY S1.WG_CD DESC
                                ) AS ROW_NUMBER
            , S1.SLS_UPRI_GRP_CD
            , S1.ITM_CD
            , S1.ITM_SUB1
            , S1.ITM_SUB2
            , S1.ITM_SUB3
            , S1.UNIT_CD
            , S1.UPRI
        FROM MAM_ITM_SLS_UPRI_ALL S1
        WHERE 0 = 0
            AND S1.SLS_UPRI_RANK_CD = 'X'
            AND S1.LOT_QTY = 0
            AND S1.CUR_CD = 'JPY'
            AND S1.WG_CD IN ('AWG-S001', '*')
            AND S1.ST_DT <= SYSDATE
            AND S1.END_DT >= SYSDATE
            AND S1.CO_CD = 'J0001'
            AND S1.DEL_FLG = 0
) X1
    
    ON X1.ROW_NUMBER = 1
    AND NVL(X1.SLS_UPRI_GRP_CD,'NULL') = NVL(M1.SLS_UPRI_GRP_CD,'NULL')
    AND X1.ITM_CD = M1.ITM_CD
    AND X1.ITM_SUB1 = M1.ITM_SUB1
    AND X1.ITM_SUB2 = M1.ITM_SUB2
    AND X1.ITM_SUB3 = M1.ITM_SUB3
    AND X1.UNIT_CD = M1.UNIT_CD`}
              language="sql"
            />
          </div>
        </div>
      </div>
    </>
  );
};
