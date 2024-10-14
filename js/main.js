document.addEventListener('DOMContentLoaded', function() {
    const projectsList = document.getElementById('projects-list');
    const projects = [
        { name: '專案 1', description: '這是專案 1 的描述。' },
        { name: '專案 2', description: '這是專案 2 的描述。' },
        { name: '專案 3', description: '這是專案 3 的描述。' }
    ];

    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectsList.appendChild(li);
    });
});
