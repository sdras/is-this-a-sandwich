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
    },
    {
      name: "empanada",
      img: "empanada.jpg",
      ingredient: 1,
      structure: 3,
    },
    {
      name: "soup dumpling",
      img: "soupdumpling.png",
      ingredient: 3,
      structure: 3,
    },
    {
      name: "folded pizza",
      img: "pizza.jpg",
      ingredient: 3,
      structure: 1,
    },
    {
      name: "burger",
      img: "burger.jpg",
      ingredient: 2,
      structure: 1,
    },
    {
      name: "fairy bread",
      img: "fairybread.jpg",
      ingredient: 3,
      structure: 1,
    },
    {
      name: "chicken n waffles",
      img: "chickenwaffles.jpeg",
      ingredient: 2,
      structure: 3,
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
    },
    {
      name: "crepes",
      img: "crepes.jpg",
      ingredient: 3,
      structure: 1,
    },
    {
      name: "crackers and cheese",
      img: "ritz.jpg",
      ingredient: 1,
      structure: 1,
    },
    {
      name: "sushiburrito",
      img: "sushiburrito.jpg",
      ingredient: 3,
      structure: 1,
    },
    {
      name: "fondue",
      img: "fondue.jpg",
      ingredient: 1,
      structure: 3,
    },
    {
      name: "ice cream sandwich",
      img: "icecreamsandwich.jpg",
      ingredient: 3,
      structure: 1,
    },
    {
      name: "twitter photo",
      img: "twit.jpg",
      ingredient: 1,
      structure: 1,
    },
    {
      name: "swedish cake",
      img: "swedishcake.jpg",
      ingredient: 1,
      structure: 3,
    },
    {
      name: "potpie",
      img: "potpie.jpeg",
      ingredient: 3,
      structure: 1,
    },
    {
      name: "hot dog",
      img: "hotdog.jpg",
      ingredient: 2,
      structure: 2,
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
    if (state.currentSandwichIndex === 2) {
      state.showWut = true;
    }

    state.currentSandwichIndex += 1;
  },
};

export const actions = {
  updateActionValue({ commit }) {
    commit("updateValue", payload);
  },
};
