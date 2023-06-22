import { useParams } from 'react-router-dom';
import { mapContent } from '../data';

export const SoftwareContent = () => {
  const params = useParams();
  const content: string = params.content || '';
  return <>{mapContent.get(content)}</>;
};
