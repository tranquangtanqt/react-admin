import { IProjectDetail } from "./project-detail";
import { IProjectTask } from "./project-task";

export interface IProject {
  id: number;
  title: string;
  order: number;
  details: IProjectDetail[];
  tasks: IProjectTask[];
}
