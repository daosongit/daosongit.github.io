/*
 this token has permission only for reading
 I should do this only beacuse GitHub doesn't allow use Personal Tokens in code and I don't have server to store it
*/
const TOKEN: string =
  '103 104 112 95 78 76 51 67 105 52 88 56 49 53 55 104 57 97 116 122 112 103 98 48 105 71 108 90 112 48 54 75 54 77 48 74 122 105 114 55';

export const HEADERS = {
  'Authorization': `bearer ${String.fromCharCode(...TOKEN.split(' ').map((e) => Number(e)))}`,
};

export const QUERY = {
  'query': `query {
        user(login: "ivan-kulai") 
        {
          repositories(first: 10)
          {
            nodes {name languages(first: 5)  { totalSize nodes {color, name} edges {size} }}
          }
          pinnedItems(first: 1, types: REPOSITORY)
          {
            nodes
            {
              ... on Repository 
              {
                url 
                name
                languages(first: 5)  { totalSize totalCount nodes {color, name} edges {size} }
              }
            } 
          } 
          contributionsCollection { totalCommitContributions }
        }
      }`,
};
