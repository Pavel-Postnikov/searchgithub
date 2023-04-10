export interface IItem {
  id: string;
  name: string;
  full_name: string;
  html_url: string;
  forks_count: number;
  stargazers_count: number;
  owner: {
    avatar_url: string;
  };
}

export interface IItemMoreInfo {
  id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
  created_at: string;
  homepage: string;
  language: string;
  owner: {
    avatar_url: string;
  };
}
