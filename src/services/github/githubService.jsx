import { Octokit } from "@octokit/core";

export function getReadme() {
    return new Promise((resolve, reject) => {
      const octokit = new Octokit({
        //! Inser github Token
        auth: ''
      });
  
      octokit.request('GET /repos/{owner}/{repo}/readme', {
        owner: "ExTerros",
        repo: 'project.md',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }).then(response => {
        const downloadUrl = response.data.download_url;
        
        fetch(downloadUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.text();
          })
          .then(content => {
            try {
              // Parse the text content into JSON
              const jsonContent = JSON.parse(content);
              resolve(jsonContent);
            } catch (parseError) {
              reject(parseError);
            }
          })
          .catch(error => {
            reject(error);
          });
  
      }).catch(error => {
        reject(error);
      });
    });
  }
  