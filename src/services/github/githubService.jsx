// import { Octokit } from "@octokit/core";

// export function getReadme() {
//     return new Promise((resolve, reject) => {
//       const octokit = new Octokit({
//         auth: "Insert your GitHub Personal Access Token here"
//       });
  
//       octokit.request('GET /repos/{owner}/{repo}/readme', {
//         owner: "ExTerros",
//         repo: 'project.md',
//         headers: {
//           'X-GitHub-Api-Version': '2022-11-28'
//         }
//       }).then(response => {
//         const downloadUrl = response.data.download_url;
//         console.log(response)
        
//         fetch(downloadUrl)
//           .then(response => {
//             if (!response.ok) {
//               throw new Error('Network response was not ok');
//             }
//             return response.text();
//           })
//           .then(content => {
//             try {
//               // Parse the text content into JSON
//               const jsonContent = JSON.parse(content);
//               resolve(jsonContent);
//             } catch (parseError) {
//               reject(parseError);
//             }
//           })
//           .catch(error => {
//             reject(error);
//           });
  
//       }).catch(error => {
//         reject(error);
//       });
//     });
//   }
  
//   export function getProjectReadme(projectName) {
//     console.log("🚀 ~ getProjectReadme ~ projectName:", projectName)
//     return new Promise((resolve, reject) => {
//       const octokit = new Octokit({
//         auth: "Insert your GitHub Personal Access Token here"
//       });
  
//       octokit.request('GET /repos/{owner}/{repo}/contents/main/{path}', {
//         owner: "ExTerros",
//         repo: 'project.md',
//         path: projectName,
//         headers: {
//           'X-GitHub-Api-Version': '2022-11-28'
//         }
//       }).then(response => {
//         console.log(response)
//         const downloadUrl = response.data.download_url;
        
//         fetch(downloadUrl)
//           .then(response => {
//             if (!response.ok) {
//               throw new Error('Network response was not ok');
//             }
//             return response.text();
//           })
//           .then(content => {
//             try {
//               // Parse the text content into JSON
//               const jsonContent = JSON.parse(content);
//               resolve(jsonContent);
//             } catch (parseError) {
//               reject(parseError);
//             }
//           })
//           .catch(error => {
//             reject(error);
//           });
  
//       }).catch(error => {
//         console.log("🚀 ~ returnnewPromise ~ error:", error)
//         reject(error);
//       });
//     });
//   }
  
export function getProjectListFile() {
  return new Promise((resolve, reject) => {
    fetch('/projects-list.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getProjectFile(fileName){
  return new Promise((resolve, reject) => {
    fetch(`/projects/${fileName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}