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
    category: "Games & Fun",
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
    category: "Games & Fun",
    route: "/no-guess-game",
  },
  {
    name: "Image Slider",
    preview: images.imagesliderurl,
    description:
      "A simple slider that smoothly transitions between multiple images.",
    category: "UI Components",
    route: "/image-slider-url",
  },
  {
    name: "Rating",
    preview: images.rating,
    description:
      "A  rating component with star, emoji, and text-based feedback options.",
    category: "UI Components",
    route: "/rating",
  },
  {
    name: "Rock Paper Scissor",
    preview: images.rockpaperscissor,
    description:
      "A classic hand game where you play against the computer to win rounds.",
    category: "Games & Fun",
    route: "/rock-paper-scissor",
  },
  {
    name: "Tree View",
    preview: images.treeview,
    description:
      "An expandable list component for visualizing hierarchical data structures",
    category: "UI Components",
    route: "/tree-view",
  },
  {
    name: "Custom Tabs",
    preview: images.customtabs,
    description:
      "A tabbed interface that displays different content based on the selected tab",
    category: "UI Components",
    route: "/custom-tabs",
  },
  {
    name: "Drum Kit",
    preview: images.drumkit,
    description:
      "A fun virtual drum kit that plays sounds when you click or press keys.",
    category: "Games & Fun",
    route: "/drum-kit",
  },
  {
    name: "Temperature Convertor",
    preview: images.temperatureconvertor,
    description:
      "Converts temperature between Celsius, Fahrenheit, and Kelvin instantly.",
    category: "Utlity Tools",
    route: "/temperature-convertor",
  },
  {
    name: "Flex Planes",
    preview: images.flexplanes,
    description: "Clickable Flexbox panels that expand to show text and images",
    category: "UI Components",
    route: "/flex-planes",
  },
  {
    name: "Type Ahead",
    preview: images.typeahead,
    description:
      "Auto-suggest dropdown that filters US cities and states in real-time with input highlighting.",
    category: "API Based",
    route: "/type-ahead",
  },
  {
    name: "Word Frequency Counter",
    preview: images.wordcounter,
    description:
      "Counts how often each word appears in your text, helping you analyze content easily.",
    category: "Utlity Tools",
    route: "/word-counter",
  },
  {
    name: "Back to Top",
    preview: images.backtotop,
    description:
      "Displays a button that lets users quickly scroll back to the top of the page.",
    category: "Utlity Tools",
    route: "/back-to-top",
  },
];

let sortArray = projects.sort((a, b) => a.name.localeCompare(b.name));

export default projects;
