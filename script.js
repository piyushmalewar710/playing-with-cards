//saare users show karaana
// filter karana har baar input karne pe 
// show karna filtered users
const users = [
  {
    name: "Aarav Sharma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "🚀 dreaming big, working bigger 💯",
  },
  {
    name: "Kiara Mehta",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "☕ coffee first, feelings later ✨",
  },
  {
    name: "Rohan Verma",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "🌃 finding peace in late-night drives 🚗",
  },
  {
    name: "Ananya Gupta",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    bio: "🌅 sunsets, 📚 books & good vibes 💫",
  },
  {
    name: "Vivaan Kapoor",
    pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
    bio: "🎧 lost in thoughts, found in music 🎶",
  },
  {
    name: "Ishita Jain",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    bio: "🌸 soft heart, sharp mind 🧠",
  },
  {
    name: "Kabir Singh",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "📸 creating memories, not excuses ✌️",
  },
  {
    name: "Mehak Arora",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "💖 romanticizing every little thing ✨",
  },
  {
    name: "Aditya Roy",
    pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
    bio: "🔥 hustle quietly, shine loudly 🌟",
  },
  {
    name: "Sara Khan",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    bio: "🎵 just a girl with endless playlists 💜",
  },
  {
    name: "Yash Malhotra",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "🏆 building my future one step at a time 🚶",
  },
  {
    name: "Priya Nair",
    pic: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263",
    bio: "🤍 kindness never goes out of style 🌼",
  },
  {
    name: "Arjun Patel",
    pic: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128",
    bio: "✨ living for moments that matter ❤️",
  },
  {
    name: "Sneha Deshmukh",
    pic: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c",
    bio: "🎨 art, chaos & everything in between 🌈",
  },
  {
    name: "Reyansh Soni",
    pic: "https://images.unsplash.com/photo-1502767089025-6572583495b0",
    bio: "😌 less perfection, more authenticity 🌿",
  },
  {
    name: "Tanya Bhatia",
    pic: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    bio: "🌍 collecting memories, not things 📷",
  },
  {
    name: "Dhruv Agrawal",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "🔍 always curious, rarely satisfied 💡",
  },
  {
    name: "Naina Kapoor",
    pic: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    bio: "✨ made of stardust and sarcasm 😏",
  },
  {
    name: "Harsh Vyas",
    pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    bio: "🎯 turning dreams into plans 🚀",
  },
  {
    name: "Aditi Choudhary",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "🌺 a little wild, a little wise 🦋",
  },
];

function showUsers(arr){
    main = document.querySelector(".main");
    arr.forEach((user)=>{
      //creating card
      let card = document.createElement("div");
      card.classList.add("card");

      //adding image to card
      let img = document.createElement("img");
      img.src=user.pic;
      img.classList.add("bg-img");
      card.appendChild(img);

      //adding blur effect
      let blurDiv = document.createElement("div");
      blurDiv.style.backgroundImage = `url(${user.pic})`;
      blurDiv.classList.add("blurred-layer");
      card.appendChild(blurDiv);

      // creating content
      let content = document.createElement("div");
      content.classList.add("content");
      card.appendChild(content);

      // add name
      let h3 = document.createElement("h3");
      h3.textContent=user.name;
      content.appendChild(h3);

      let bio = document.createElement("p");
      bio.textContent=user.bio;
      content.appendChild(bio);

      main.appendChild(card);
    });

}

showUsers(users);

let inp = document.querySelector("input");
inp.addEventListener("input",()=>{
  let newUsers = users.filter((user)=>{
    return user.name.startsWith(inp.value);
  });
  
  document.querySelector(".main").innerHTML = " ";
  if(newUsers.length===0){
    document.querySelector(".main").textContent="*User Not Found";
  }
  else showUsers(newUsers);
});
