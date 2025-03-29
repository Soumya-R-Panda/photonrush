document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Load saved theme preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Navigation
    document.getElementById("home-link").addEventListener("click", () => showSection("home-section"));
    document.getElementById("blog-link").addEventListener("click", () => showSection("blog-section"));
    document.getElementById("notes-link").addEventListener("click", () => showSection("notes-section"));
    document.getElementById("media-link").addEventListener("click", () => showSection("media-section"));

    function showSection(sectionId) {
        document.querySelectorAll("main section").forEach(section => section.classList.add("hidden"));
        document.getElementById(sectionId).classList.remove("hidden");
    }

    // Blog Posting
    document.getElementById("post-blog").addEventListener("click", function () {
        const content = document.getElementById("blog-content").value;
        if (content) {
            const postDiv = document.createElement("div");
            postDiv.innerHTML = `<p>${content}</p><hr>`;
            document.getElementById("blog-posts").prepend(postDiv);
            document.getElementById("blog-content").value = "";
        }
    });

    // Notes Posting
    document.getElementById("post-note").addEventListener("click", function () {
        const content = document.getElementById("notes-content").value;
        if (content) {
            const noteDiv = document.createElement("div");
            noteDiv.innerHTML = `<pre>${content}</pre><hr>`;
            document.getElementById("notes-posts").prepend(noteDiv);
            document.getElementById("notes-content").value = "";
        }
    });

    // Media Upload
    document.getElementById("upload-media").addEventListener("click", function () {
        const fileInput = document.getElementById("media-upload");
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const mediaDiv = document.createElement("div");
                if (file.type.startsWith("image")) {
                    mediaDiv.innerHTML = `<img src="${e.target.result}" width="200"><hr>`;
                } else if (file.type.startsWith("video")) {
                    mediaDiv.innerHTML = `<video src="${e.target.result}" controls width="200"></video><hr>`;
                }
                document.getElementById("media-gallery").prepend(mediaDiv);
            };
            reader.readAsDataURL(file);
        }
    });
});
