const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

// Get the section element where we'll render the posts
const postSection = document.querySelector(".main-content");

// Loop over the posts array and create HTML elements for each post
for (let post of posts) {
    // Create the elements for the post
    const postElem = document.createElement("section");
    postElem.classList.add("post");
    postElem.innerHTML = `
      <div class="post-user">
        <div class="pic-container">
          <img src="${post.avatar}" class="profile-pic">
        </div>
        <div class='user-info'>
          <h3 class='pname bold'>${post.name}</h3>
          <h4 class='location regular'>${post.location}</h4>
        </div>        
      </div>
      <div class="post-cont">
        <img src="${post.post}" class='post-img'>
      </div>
      <div class="post-info">
        <div class="post-interactions">
          <img src="images/icon-heart.png" id="heart-icon">
          <img src="images/icon-comment.png" id="comment-icon">
          <img src="images/icon-dm.png" id="dm-icon">
        </div>
        <p class="likes bold">${post.likes} likes</p>
        <p class="caption regular"><span class='user-id bold'>${post.username}</span> ${post.comment}</p>
      </div>
      <div class="spacer"></div>
    `;

    // Add the post element to the post section
    postSection.appendChild(postElem);
}


// Get all heart-icon elements
const likeIcons = document.querySelectorAll('#heart-icon')

// Add event listener to each heart-icon
likeIcons.forEach((likeIcon, index) => {
  likeIcon.addEventListener('click', function() {
    // Get the corresponding post object from the posts array
    const post = posts[index]

    // Update the likes property of the post object
    if(post.liked==true && post.likes>0){
        post.liked=false
        post.likes -=1
        console.log(post.likes)
        likeIcon.src = "images/icon-heart.png"    
    }
    else if(post.liked==false && post.likes>=0){
        post.liked=true
        post.likes += 1
        console.log(post.likes)
        likeIcon.src = "images/icon-heart-liked.png"        
    }
    // Update the likes text element to show the new number of likes
    const likesTexts = document.querySelectorAll('.likes')
    likesTexts[index].textContent = `${post.likes} likes`
  })
})
