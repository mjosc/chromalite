export interface Scheme {
  id: number,
  title: string,
  colors: string[]
}

export interface Project {
  id: number,
  title: string,
  schemes: Scheme[]
}

export interface Store {
  projects: Project[]
};
