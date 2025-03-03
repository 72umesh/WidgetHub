import images from "./data";
const projects = [
  {
    name: "Accordian",
    preview: images.accordian,
    description:
      "An interactive UI component that expands to reveal hidden content when clicked.",
    category: "UI Components",
    route: "/accordian",
  },
  {
    name: "Password Generator",
    preview: images.passwordgenerator,
    description:
      "Generates secure random passwords with customizable length and character options.",
    category: "Utlity Tools",
    route: "/password-generator",
  },
  {
    name: "Dice Roller",
    preview: images.diceroller,
    description:
      "A fun tool that rolls a virtual dice and displays a random outcome.",
    category: "Games",
    route: "/dice-roller",
  },
  {
    name: "Load More Data",
    preview: images.loadmoredata,
    description:
      "Displays more content gradually as the user clicks the 'Load More' button.",
    category: "Utlity Tools",
    route: "/load-more-data",
  },
  {
    name: "Counter",
    preview: images.counter,
    description: "A simple counter that increments and decrements numbers.",
    category: "Utlity Tools",
    route: "/counter",
  },
  {
    name: "Number Guessing Game",
    preview: images.noguessgame,
    description: "Challenge yourself to guess a number between 1 and 100.",
    category: "Games",
    route: "/no-guess-game",
  },
];

export default projects;
