document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("mouseover", function() {
            this.classList.add("transform", "scale-105", "transition", "duration-300");
        });
        project.addEventListener("mouseout", function() {
            this.classList.remove("transform", "scale-105", "transition", "duration-300");
        });
    });
});
