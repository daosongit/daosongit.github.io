import { IRepo, ISortedRepo } from './types';

// organize fetched data
export const organizeRepos = (repos: IRepo[]) => {
  return repos.map((repo: IRepo) => {
    const languages = repo.languages.nodes.map((el, idx) => ({
      name: el.name,
      color: el.color,
      size: repo.languages.edges[idx].size,
    }));

    return { name: repo.name, languages: languages, totalSize: repo.languages.totalSize };
  });
};

/* 
  calculate languages usage in all repositiories by next formula:
  res: language usage in percents
  langSize = total size of one language (all repositorios)
  totalSize = total size of all languages (all repositorios)
  res = langSize / totalSize * 100
*/
export const getLanguagesUsage = (repos: ISortedRepo[]) => {
  const languages = new Map(); // {name, size}
  let reposSize = 0;
  // get all languages names
  repos.forEach((repo: ISortedRepo) => {
    reposSize += repo.totalSize; // total size of all repos
    repo.languages.forEach((el) => {
      languages.set(el.name, 0);
    });
  });
  // get total size for every language
  repos.forEach((repo: ISortedRepo) => {
    repo.languages.forEach(({ name, size }) => {
      languages.set(name, size + languages.get(name));
    });
  });
  // get language usage in percents
  const langUsageInPercent: { name: string; usage: number }[] = [];
  languages.forEach((value, key) => {
    const usage = (value / reposSize) * 100;
    langUsageInPercent.push({ name: key, usage });
  });

  return langUsageInPercent;
};
