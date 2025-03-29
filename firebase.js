// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-7fme9Mo3isVChUn2k_LnI0cAyv_uZDE",
    authDomain: "photon-rush.firebaseapp.com",
    databaseURL: "https://photon-rush-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "photon-rush",
    storageBucket: "photon-rush.appspot.com",
    messagingSenderId: "579701775349",
    appId: "1:579701775349:web:6e124cc313304265381ebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to submit a post
window.submitPost = function () {
    const postText = document.getElementById("post-text").value;
    if (postText.trim() === "") return;

    // Save to Firebase
    push(ref(db, "posts"), { text: postText, timestamp: Date.now() });

    // Clear input
    document.getElementById("post-text").value = "";
};

// Function to load posts
function loadPosts() {
    const postsRef = ref(db, "posts");
    onValue(postsRef, (snapshot) => {
        const postList = document.getElementById("post-list");
        postList.innerHTML = ""; // Clear previous posts

        snapshot.forEach((childSnapshot) => {
            const post = childSnapshot.val();
            const postElement = document.createElement("div");
            postElement.className = "post";
            postElement.innerHTML = `<p>${post.text}</p>`;
            postList.prepend(postElement);
        });
    });
}

// Load posts when the page loads
loadPosts();
