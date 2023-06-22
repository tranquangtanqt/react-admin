import { useParams } from 'react-router-dom';
import { mapContent } from '../data';

export const ProgramExcelContent = () => {
  const params = useParams();
  const content: string = params.content || '';
  return <>{mapContent.get(content)}</>;
};
