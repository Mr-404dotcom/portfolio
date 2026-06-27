function Projects(){
    const projects = [
        { id: 1, name: 'Student Management System', description: 'A full-stack web-based application using PHP for managing student records' },
        { id: 2, name: 'Grading Management System', description: 'A java application to manage student grades and transcripts' }
    ];

    return (
        <section id="projects">
        <div className="projects">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-lg mb-4">Here are some of the projects I've worked on:</p>
        <div className="bento-grid projects-grid">
            {projects.map(project => (
                <div key={project.id} className="bento-card">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
        </div>
        </section>
    );
}

export default Projects;