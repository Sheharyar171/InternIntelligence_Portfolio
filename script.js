const projects = 
[
  {
    image: "Pictures/TetrisProject.png",
    description: "Developed Tetris game by using C++ programming fundamentals\nconcepts. While writing code from scratch and rendering SFML grapahics,\n this game took place having required functionalities.\n "
  },
  {
    image: "Pictures/ZombieAppocolapseProject.png",
    description: "Developed Zombie game by using C++ Data Structures concepts.\nUsing binary,AVL trees, linked lists and related concepts,\nthis game came into being."
  },
  {
    image: "Pictures/spaceShooterGame.jpeg",
    description: "Developed space shooter game by using C++ OOP principles.\n By using built-in functions and libraries to ensure smooth flow,\nthe game executed as per expectations."
  }
];

let currentIndex = 0;

function showProject(index) 
{
  const image = document.getElementById("projectImage");
  const desc = document.getElementById("projectDescription");

  image.src = projects[index].image;
  desc.textContent = projects[index].description;
}

function nextSlide() 
{
  currentIndex = (currentIndex + 1) % projects.length;
  showProject(currentIndex);
}

function prevSlide() 
{
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  showProject(currentIndex);
}

// Initialize first slide
window.onload = () => showProject(currentIndex);