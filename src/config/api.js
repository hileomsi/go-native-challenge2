export class GithubApi {
  URL = 'https://api.github.com/repos';

  getRepository = async (name) => {
    const response = await fetch(`${this.URL}/${name}`);
    const { name: repoName, owner, id, full_name } = await response.json();

    return {
      id,
      name: repoName,
      image: owner.avatar_url,
      login: owner.login,
      payload: {
        name: repoName,
        fullname: full_name
      }
    };
  }

  getIssues = async (name) => {
    let response = await fetch(`${this.URL}/${name}/issues`);
    response = await response.json();

    return response.map(item => ({
      id: item.id,
      image: item.user.avatar_url,
      title: item.title,
      subtitle: item.user.login,
      state: item.state,
      payload: { url: item.html_url }
    }));
  }
}

export const Github = new GithubApi();
