import IProjectDetail from "./project-detail";

export default interface IProject {
    id: number;
    title: string;
    order: number;
    details: IProjectDetail[]
  }