document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Search Functionality
    const searchInput = document.getElementById("search");
    const posts = document.querySelectorAll(".post");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        posts.forEach(post => {
            const text = post.textContent.toLowerCase();
            post.style.display = text.includes(query) ? "block" : "none";
        });
    });

    // Post Editor - Adding Posts Dynamically
    const postForm = document.getElementById("post-form");
    const postContainer = document.getElementById("post-container");
    
    postForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("post-title").value;
        const content = document.getElementById("post-content").value;

        if (title.trim() === "" || content.trim() === "") {
            alert("Title and content cannot be empty!");
            return;
        }

        const newPost = document.createElement("div");
        newPost.classList.add("post");
        newPost.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
            <button class="delete-post">Delete</button>
        `;
        postContainer.prepend(newPost);

        // Reset form
        postForm.reset();

        // Delete functionality
        newPost.querySelector(".delete-post").addEventListener("click", () => {
            newPost.remove();
        });
    });
});
