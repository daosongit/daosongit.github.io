export const HEADERS = {
  // this token is read only
  'Authorization': `bearer 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`,
};

export const QUERY = {
  'query': `query {
        user(login: "daosongit") 
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
