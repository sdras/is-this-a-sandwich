export const state = () => ({
  playerScore: {
    ingredient: 0,
    structure: 0,
  },
  currentSandwichIndex: 0,
  showWut: false,
  sandwichData: [
    {
      name: "sandwich",
      img: "sandwich.jpg",
      ingredient: 1,
      structure: 1,
      wut: false,
    },
    {
      name: "empanada",
      img: "empanada.jpg",
      ingredient: 1,
      structure: 3,
      wut: false,
    },
    {
      name: "soup dumpling",
      img: "soupdumpling.png",
      ingredient: 3,
      structure: 3,
      wut: true,
    },
    {
      name: "folded pizza",
      img: "pizza.jpg",
      ingredient: 3,
      structure: 1,
      wut: false,
    },
    {
      name: "burger",
      img: "burger.jpg",
      ingredient: 2,
      structure: 1,
      wut: false,
    },
    {
      name: "fairy bread",
      img: "fairybread.jpg",
      ingredient: 3,
      structure: 1,
      wut: false,
    },
    {
      name: "chicken n waffles",
      img: "chickenwaffles.jpeg",
      ingredient: 2,
      structure: 3,
      wut: false,
    },
    {
      name: "lasagna",
      img: "lasagna.jpg",
      ingredient: 3,
      structure: 2,
    },
    {
      name: "samosa",
      img: "samosa.jpg",
      ingredient: 3,
      structure: 1,
      wut: false,
    },
    {
      name: "crepes",
      img: "crepes.jpg",
      ingredient: 3,
      structure: 1,
      wut: false,
    },
    {
      name: "crackers and cheese",
      img: "ritz.jpg",
      ingredient: 1,
      structure: 1,
      wut: false,
    },
    {
      name: "sushiburrito",
      img: "sushiburrito.jpg",
      ingredient: 3,
      structure: 1,
      wut: false,
    },
    {
      name: "fondue",
      img: "fondue.jpg",
      ingredient: 1,
      structure: 3,
      wut: true,
    },
    {
      name: "ice cream sandwich",
      img: "icecreamsandwich.jpg",
      ingredient: 3,
      structure: 1,
      wut: false,
    },
    {
      name: "twitter photo",
      img: "twit.jpg",
      ingredient: 1,
      structure: 1,
      wut: false,
    },
    {
      name: "swedish cake",
      img: "swedishcake.jpg",
      ingredient: 1,
      structure: 3,
      wut: false,
    },
    {
      name: "potpie",
      img: "potpie.jpeg",
      ingredient: 3,
      structure: 1,
      wut: true,
    },
    {
      name: "hot dog",
      img: "hotdog.jpg",
      ingredient: 2,
      structure: 2,
      wut: false,
    },
  ],
});

export const getters = {
  finalPlayerPosition: (state) => {
    return {
      ingredient: (
        state.playerScore.ingredient / state.sandwichData.length
      ).toFixed(2),
      structure: (
        state.playerScore.structure / state.sandwichData.length
      ).toFixed(2),
    };
  },
};

export const mutations = {
  updatePlayerScore: (state, score) => {
    state.playerScore.ingredient += score.ingredient;
    state.playerScore.structure += score.structure;
  },
  updateCurrentSandwichIndex: (state) => {
    state.currentSandwichIndex += 1;
  },
  updateWut: (state) => {
    state.showWut = !state.showWut;
  },
};
