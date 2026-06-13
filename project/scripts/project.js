const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");
    });
}

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

const services = [
    {
        name: "General Construction",
        image: "images/service-general.jpg",
        description: "Complete construction services for residential and commercial projects from planning to turnover."
    },
    {
        name: "Architectural Works",
        image: "images/service-architectural.jpg",
        description: "Finishes, partitions, ceilings, painting, tiling, and other architectural scopes."
    },
    {
        name: "Civil Works",
        image: "images/service-civil.jpg",
        description: "Concrete works, masonry, site preparation, structural repairs, and related civil construction tasks."
    },
    {
        name: "Electrical Works",
        image: "images/service-electrical.jpg",
        description: "Electrical roughing-ins, wiring, lighting layouts, outlets, and basic power distribution works."
    },
    {
        name: "Plumbing Works",
        image: "images/service-plumbing.jpg",
        description: "Water lines, drainage lines, fixtures, testing, and plumbing installation works."
    },
    {
        name: "Mechanical Works",
        image: "images/service-mechanical.jpg",
        description: "Air conditioning support, ventilation, equipment coordination, and mechanical installation assistance."
    }
];

const projects = [
    {
        title: "Residential House Construction",
        category: "residential",
        image: "images/residential.jpg",
        description: "A complete residential project involving architectural, structural, and finishing works."
    },
    {
        title: "Commercial Fit-out",
        category: "commercial",
        image: "images/commercial.jpg",
        description: "A commercial interior project with partitions, ceilings, lighting, and finishing works."
    },
    {
        title: "Home Renovation",
        category: "renovation",
        image: "images/renovation.jpg",
        description: "A renovation project focused on improving layout, finishes, and overall space usability."
    },
    {
        title: "MEPF Coordination Work",
        category: "commercial",
        image: "images/mepf.jpg",
        description: "Coordination of mechanical, electrical, plumbing, and fire protection scopes."
    }
];

const servicesContainer = document.querySelector("#servicesContainer");

if (servicesContainer) {
    services.forEach(service => {
        const card = document.createElement("article");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${service.image}" alt="${service.name}" class="service-image" loading="lazy">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        `;

        servicesContainer.appendChild(card);
    });
}

const projectsContainer = document.querySelector("#projectsContainer");

function displayProjects(projectList) {
    if (!projectsContainer) {
        return;
    }

    projectsContainer.innerHTML = "";

    projectList.forEach(project => {
        const card = document.createElement("article");
        card.classList.add("project-card");

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        projectsContainer.appendChild(card);
    });
}

if (projectsContainer) {
    displayProjects(projects);

    const filterButtons = document.querySelectorAll(".filters button");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            if (filter === "all") {
                displayProjects(projects);
            } else {
                const filteredProjects = projects.filter(project => project.category === filter);
                displayProjects(filteredProjects);
            }
        });
    });
}

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.querySelector("#fullName").value;
        const projectType = document.querySelector("#projectType").value;

        const inquiry = {
            name: name,
            projectType: projectType,
            dateSubmitted: new Date().toLocaleDateString()
        };

        localStorage.setItem("latestInquiry", JSON.stringify(inquiry));

        formMessage.textContent = `Thank you, ${name}. Your ${projectType} inquiry has been saved.`;
        formMessage.classList.add("success");

        contactForm.reset();
    });
}

const visitMessage = document.querySelector("#visitMessage");

if (visitMessage) {
    let visits = Number(localStorage.getItem("siteVisits")) || 0;

    visits++;

    localStorage.setItem("siteVisits", visits);

    if (visits === 1) {
        visitMessage.textContent = "This is your first visit to the RG Built Corp website.";
    } else {
        visitMessage.textContent = `You have visited this website ${visits} times.`;
    }
}