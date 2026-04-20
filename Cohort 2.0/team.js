const employees = [
  {
    name: "Aman Sharma",
    role: "Frontend Developer",
    bio: "Passionate about building responsive and user-friendly web interfaces.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Priya Verma",
    role: "Backend Developer",
    bio: "Expert in server-side logic, databases, and API development.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Rahul Singh",
    role: "UI/UX Designer",
    bio: "Designs clean and intuitive user experiences with a creative touch.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sneha Gupta",
    role: "Data Analyst",
    bio: "Loves turning raw data into meaningful insights and visualizations.",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Arjun Patel",
    role: "DevOps Engineer",
    bio: "Ensures smooth deployment, scaling, and system reliability.",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  }
];

let card = document.querySelector(".card");
let main = document.querySelector(".main");
let sum =" " ;

card.addEventListener('click',function(){
    console.log("I am running ");
    employees.forEach(function(employee) {
    sum = sum +`<div class="card">
            <img src=${employee.image} alt="">
            <h2>${employee.name}</h2>
            <p><b>Role:</b> ${employee.role}</p>
            <p><b>Bio:</b> ${employee.bio}</p>
        </div>`;
});
main.innerHTML=(sum);
});
