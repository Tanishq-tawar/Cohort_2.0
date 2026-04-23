const users = [
  {
    username: "demo1",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    profile: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "Sample video 1",
    likeCount: 100,
    shareCount: 20,
    commentCount: 10,
    isFollow: true,
    isLike: true
  },
  {
    username: "demo2",
    video: "https://www.w3schools.com/html/movie.mp4",
    profile: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "Sample video 2",
    likeCount: 200,
    shareCount: 40,
    commentCount: 25,
    isFollow: false,
    isLike: true
  },
  {
    username: "demo3",
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    profile: "https://randomuser.me/api/portraits/men/3.jpg",
    description: "Short clip",
    likeCount: 300,
    shareCount: 50,
    commentCount: 30,
    isFollow: true,
    isLike: false
  },
  {
    username: "demo4",
    video: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    profile: "https://randomuser.me/api/portraits/women/4.jpg",
    description: "Another clip",
    likeCount: 400,
    shareCount: 60,
    commentCount: 40,
    isFollow: false,
    isLike: true
  },
  {
    username: "demo5",
    video: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    profile: "https://randomuser.me/api/portraits/men/5.jpg",
    description: "Demo reel",
    likeCount: 500,
    shareCount: 70,
    commentCount: 50,
    isFollow: true,
    isLike: true
  },
  {
    username: "demo6",
    video: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
    profile: "https://randomuser.me/api/portraits/women/6.jpg",
    description: "Clip 6",
    likeCount: 600,
    shareCount: 80,
    commentCount: 60,
    isFollow: false,
    isLike: false
  },
  {
    username: "demo7",
    video: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    profile: "https://randomuser.me/api/portraits/men/7.jpg",
    description: "Clip 7",
    likeCount: 700,
    shareCount: 90,
    commentCount: 70,
    isFollow: true,
    isLike: true
  },
  {
    username: "demo8",
    video: "https://samplelib.com/lib/preview/mp4/sample-3s.mp4",
    profile: "https://randomuser.me/api/portraits/women/8.jpg",
    description: "Quick clip",
    likeCount: 150,
    shareCount: 25,
    commentCount: 15,
    isFollow: false,
    isLike: true
  },
  {
    username: "demo9",
    video: "https://samplelib.com/lib/preview/mp4/sample-12s.mp4",
    profile: "https://randomuser.me/api/portraits/men/9.jpg",
    description: "Clip 9",
    likeCount: 250,
    shareCount: 35,
    commentCount: 20,
    isFollow: true,
    isLike: false
  },
  {
    username: "demo10",
    video: "https://samplelib.com/lib/preview/mp4/sample-7s.mp4",
    profile: "https://randomuser.me/api/portraits/women/10.jpg",
    description: "Last clip",
    likeCount: 350,
    shareCount: 45,
    commentCount: 30,
    isFollow: false,
    isLike: true
  }
];


let reel = document.querySelector(".all-reels");

let sum ="";

users.forEach(function(elem){
    sum =sum +`<div class="reel">
                <video autoplay muted loop src="${elem.video}"></video>
                
                <div class="account">
                    <div class="user">
                    <img src="${elem.profile}">
                    <h1>${elem.username}</h1>
                    <button>Follow</button>
                </div>
                    <p>${elem.description}</p>
                </div>
                    <div class="stats">
                        <div class="like">
                            <i class="ri-heart-line"></i>
                            <h2>${elem.likeCount}</h2>
                        </div>
                        <div class="share">
                            <i class="ri-share-forward-line"></i>
                            <h2>${elem.shareCount}</h2>
                        </div>
                        <div class="comment">
                            <i class="ri-chat-1-line"></i>
                            <h2>${elem.commentCount}</h2> 
                        </div>
                        <div class="menu">
                            <i class="ri-more-2-fill"></i>
                        </div>
                     
                    </div>
                </div>`;
});

reel.innerHTML=sum;