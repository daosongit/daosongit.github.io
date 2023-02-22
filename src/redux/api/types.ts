export interface ILanguages {
  totalSize: number;
  totalCount: number;
  nodes: { color: string; name: string }[];
  edges: { size: number }[];
}

export interface IRepo {
  name: string;
  languages: ILanguages;
}

export interface ISortedRepo {
  name: string;
  languages: { name: string; color: string; size: number }[];
  totalSize: number;
}

export interface ILanguagesUsage {
  name: string;
  usage: number;
}

export interface IPinned {
  name: string;
  url: string;
  languages: ILanguagesUsage[];
}

export interface IFetchGitHubUserResponce {
  pinned: IPinned;
  totalContribution: number;
  languagesUsage: ILanguagesUsage[];
}
