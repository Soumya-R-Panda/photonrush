// script.js

// Dark Mode Toggle
const toggleDarkMode = document.getElementById("dark-mode-toggle");
const body = document.body;

toggleDarkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
});

// Load dark mode preference
if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
}

// Comment Section Functionality
function addComment(postId) {
    const commentInput = document.getElementById(`comment-input-${postId}`);
    const commentList = document.getElementById(`comment-list-${postId}`);
    
    if (commentInput.value.trim() !== "") {
        const newComment = document.createElement("li");
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = ""; // Clear input after submission
    }
}
