const projectsArray = [
    {name:"design potfolio",
    tags:["HTML","CSS"],
    img:"assets/images/thumbnail-project-1-small.webp"},
    {name:"e-learning landing page",
    tags:["HTML","CSS"],
    img:"assets/images/thumbnail-project-2-small.webp"},
    {name:"todo web app",
    tags:["HTML","CSS","JAVASCRIPT"],
    img:"assets/images/thumbnail-project-3-small.webp"},
    {name:"entertainment web app",
    tags:["HTML","CSS","JAVASCRIPT"],
    img:"assets/images/thumbnail-project-4-small.webp"},
    {name:"memory game",
    tags:["HTML","CSS", "Javascript"],
    img:"assets/images/thumbnail-project-5-small.webp"},
    {name:"art gallery showcase",
    tags:["HTML","CSS","javacript"],
    img:"assets/images/thumbnail-project-6-small.webp"},
]

const listOfProjects = document.querySelector(".projects__list")

projectsArray.forEach(e => {
    let newElement = document.createElement("li")
    newElement.classList.add("projects__list_item")

    newElement.innerHTML = `
    <figure>
    <img src=${e.img} alt="project picture">
    </figure>
    <p>${e.name}</p>
    <p>
        ${e.tags.map(j => `<span>${j}</span>`).join("")}
    </p>
    <div>
        <a href="#" class="green-color-hover">View project</a>
        <a href="#" class="green-color-hover">View Code</a>
    </div>
`
    listOfProjects.appendChild(newElement)
})