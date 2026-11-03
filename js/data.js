/*

```js
<script>

  
  
  */


async function loadProject(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const project = await response.json();

    return project;

  } catch (error) {
    console.error("No se pudo cargar el proyecto:", error);
    return null;
  }
}



  
/*

</script>

```js

*/

const project = await loadProject("data.json");

if (project) {
  document.querySelector("#cv").innerHTML = `
    <article class="card">
      <img src="${project.image}" alt="">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <a href="${project.repository}">Ver repositorio</a>
    </article>
  `;
}

/*

```
        ],
        "caveat": "Keep off the primary skills list unless current code demonstrates it."
      },
      {
        "name": "PowerShell",
        "level": "basic_practical",
        "evidence": [
          "Windows command-line workflows"
        ]
      },
      {
        "name": "Linux",
        "level": "exploratory",
        "evidence": [
          "Live systems and desktop Linux experimentation"
        ]
      }
    ],
    "currently_learning"


   "not_started_or_not_claimed": [
      {
        "name": "Docker",
        "status":
*/
*/
