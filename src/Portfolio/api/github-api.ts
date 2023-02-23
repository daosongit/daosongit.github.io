import { HEADERS, QUERY } from './constants';
import { getLanguagesUsage, organizeRepos } from './modules';

export default async function fetchGitHubUser() {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(QUERY),
    headers: HEADERS,
  });

  const data = await response.json().then((resp) => resp.data.user);
  const pinnedRepo = data.pinnedItems.nodes;
  const totalContribution = data.contributionsCollection.totalCommitContributions;
  const repos = data.repositories.nodes;

  return {
    pinned: {
      name: pinnedRepo[0].name,
      url: pinnedRepo[0].url,
      languages: getLanguagesUsage(organizeRepos(pinnedRepo)),
    },
    totalContribution,
    languagesUsage: getLanguagesUsage(organizeRepos(repos)),
  };
}
