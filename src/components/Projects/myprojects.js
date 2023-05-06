const projects = [
  {
    id: 1,
    title: "SpringBoardJuniors.io",
    description: "SpringBoardJuniors.io is a social media app designed for junior developers to springboard themselves into the tech industry. It is a LinkedIn for juniors. Juniors that are fresh out of college or university can create an account and start applying to jobs that are truly for juniors.",
    stack: ['Django / Python', 'Angular', 'PostgreSQL', 'Bit.io', 'Railway', 'JWT', 'CSS', 'Bootstrap', 'Vanilla JavaScript'],
    image: "https://github.com/codewithmarty/springboard.io-production/raw/main/frontend/dist/assets/images/job-board.png",
    link: "https://github.com/codewithmarty/springboard.io-production",
    deployed: "https://springboardio.up.railway.app/"
  },
  {
    id: 2,
    title: "friend.ly",
    description: 'Friend.ly is a social media app designed for making friends. It has mechanics loosely based on Tinder. \n Users will "swipe right" or "swipe left" on other users by hitting a checkmark or "X", respectively. At that point a friend request will be sent. \n Once a friend request is accepted, the receiving user can choose to accept it. Once the friend request is accepted, users can then converse with each other.',
    stack: ['Express', 'React', 'Node', 'MongoDB', 'AWS S3', 'Railway', 'JWT', 'SocketIO'],
    image: "https://github.com/codewithmarty/production-friend.ly/blob/main/public/images/profile.png?raw=true",
    link: "https://github.com/codewithmarty/production-friend.ly",
    deployed: "https://friend-ly.up.railway.app/"
  },
  {
    id: 3,
    title: "MMA API",
    description: "Welcome to the MMA API documentation! \n This API provides access to data on mixed martial arts fighters. \nThis API in its current implementation does not require an API Key.",
    stack: ['Express', 'Node', 'MongoDB'],
    image: "images/mma.png",
    link: "https://github.com/codewithmarty/mma-api",
    deployed: "https://mma-api-production-1e44.up.railway.app/"
  },
  {
    id: 4,
    title: "Pokemon Adventures Game",
    description: "Pokemon Adventures (a.k.a. The Pokedex app) is a single-player adventure game in which players have access upon login to every single pokemon across all different regions. Users can catch and release pokemon as they please. \nThe Pokedex app is a popular mobile application that provides information about various Pokemon characters from the popular Pokemon franchise. \nThe app also includes a list of all the Pokemon characters along with their pictures and detailed descriptions. \nOverall, the Pokedex app is a useful tool for Pokemon enthusiasts who want to expand their knowledge about the Pokemon universe.",
    stack: ['Express', 'Node', 'MongoDB', 'Google Oauth', 'PokeAPI'],
    image: "images/pokemon.png",
    link: "https://github.com/codewithmarty/pokedex",
    deployed: "https://pokemon-adventures.up.railway.app/pokedex"
  },
  {
    id: 5,
    title: "Checkers",
    description: "Checkers is a game that either involves two players or one player and a CPU. Each player has 12 chips positioned in every other square on either side (see image below). The chips move diagonally across the board, one space at a time, unless two special conditions are met (explained below). The chips come in two colours: red and white. It is convention that red always goes first. Pieces can be eliminated if a player (or CPU) hops diagonally over a chip of the opposite colour into an adjacent empty space. The game concludes when all chips of one colour are eliminated from the game.",
    stack: ['HTML', 'CSS', 'Vanilla JS'],
    image: "images/checkers.png",
    link: "https://github.com/codewithmarty/checkers",
    deployed: "https://martinnicola.com/checkers"
  },
  {
    id: 6,
    title: "Connect Four",
    description: "Connect Four is a two-player strategy game in which players take turns dropping colored discs into a vertical grid. The first player to connect four discs of their color in a row, either horizontally, vertically, or diagonally, wins the game.",
    stack: ['HTML', 'CSS', 'Vanilla JS'],
    image: "images/connect4.png",
    link: "https://github.com/codewithmarty/connect-four",
    deployed: "https://martinnicola.com/connect-four"
  },
]

export default projects;
