const _renderProjects = (projects) => {
  const section = document.getElementById("projects");

  projects.map((project) => {
    const attributes = project.attributes
    const article = document.createElement("article");
    const container = document.createElement("div");
    const heading = document.createElement("h4");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const techsHeader = document.createElement("h4");

    techsHeader.textContent = "Technologies used include:";

    const ul = document.createElement("ul");
    attributes.technologie.map((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });

    const image = document.createElement("img");
    image.src = `http://localhost:1337${attributes.image.data.attributes.formats.small.url}`;
    image.alt = attributes.title;

    description.textContent = attributes.description;
    description.classList = "blackbox";

    container.classList = "text";
    title.textContent = attributes.title;

    heading.textContent = attributes.heading;

    container.appendChild(heading);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(techsHeader);
    container.appendChild(ul);

    article.appendChild(container);
    article.appendChild(image);
    
    section.appendChild(article);
  });
  section.lastChild.classList.add('reverse')
};


const getProjects = async () => {
  const res = await fetch("http://localhost:1337/api/project?populate=image");
  const data = await res.json();

  _renderProjects(data.data);
};

getProjects();
