import projectobj from '../data/projects.js';

AOS.init();

const createProjectHtml = (projectobj) => {
    return `
    <div class="card" data-aos="flip-right">
      <img class="card-img" src="${projectobj.image}" alt="${projectobj.name}">
      <div class="card-body">
        <h5 class="card-title">${projectobj.name}</h5>
        <p class="card-text">${projectobj.cardText}</p>
      <div class="card-links">
        <a href="${projectobj.liveSiteUrl}" target="_blank"><i class="fab fa-chrome"></i></a>
        <a href="${projectobj.gitUrl}" target="_blank"><i class="fab fa-github"></i></a>
      </div>
      </div>
    </div>`;
    };
    
    
    const insertProjects = () => {
        const cardContainer = document.querySelector('.card-container');
    
        cardContainer.innerHTML = '';
    
        projectobj.forEach((project) => {
            const projectHtml = createProjectHtml(project);
            cardContainer.innerHTML += projectHtml;
          });
       
    };
    
    insertProjects();