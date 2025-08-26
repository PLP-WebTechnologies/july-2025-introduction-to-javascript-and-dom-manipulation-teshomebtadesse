
//Part 1: Variable declarations and conditionals

let userName = prompt("Enter your name:");
if (userName) {
  console.log(`Selam, ${userName}!`); //Selam means Hello in Amharic
} else {
  console.log("Selam, guest!");
}

//Part 2: At least 2 custom functions

function formatGreeting(name) {
  return `Welcome, ${name}!`;
}

function toggleGreeting() {
  const heading = document.getElementById("greeting");
  heading.textContent = heading.textContent.includes("Welcome")
    ? "Hello again!"
    : formatGreeting(userName || "guest");
}

// Part 3: At least 2 loop examples

const items = ["HTML", "CSS", "JavaScript", "DOM"];
for (let i = 0; i < items.length; i++) {
  console.log(`Item ${i + 1}: ${items[i]}`);
}

items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  document.getElementById("itemList").appendChild(li);
});

// Part 4: At least 3 DOM interactions
document.getElementById("greeting").textContent = formatGreeting(userName || "guest");
document.body.style.backgroundColor = "#f0f8ff"; //AliceBlue


document.getElementById("changeTextBtn").addEventListener("click", toggleGreeting);
document.getElementById("itemList").style.listStyleType = "circle";
document.getElementById("itemList").style.padding = "10px";
document.getElementById("itemList").style.border = "1px solid #ccc";

document.getElementById("itemList").style.width = "200px";
document.getElementById("itemList").style.marginTop = "20px";
document.getElementById("itemList").style.fontFamily = "Arial, sans-serif";
document.getElementById("itemList").style.backgroundColor = "#e6f7ff";


//End of the assignment
