import { IContent } from 'components/content-google-sheet/dto/content.dto';

export interface IProjectDetail {
  id: number;
  project_id: number;
  name: string;
  collapse: boolean;
  order: number;
  contents: IContent[];
}
