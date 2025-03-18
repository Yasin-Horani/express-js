const getPostsBtn = document.querySelector('#getPostsBtn');
const allPosts = document.querySelector('#allPosts');

async function getPosts() {
    const res = await fetch('http://localhost:3000/api/posts/');
    const posts = await res.json();
    console.log(posts);
    allPosts.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
       postElement.textContent = post.title;
        allPosts.appendChild(postElement);
    });
}
getPostsBtn.addEventListener('click', getPosts);