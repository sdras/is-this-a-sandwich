<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -100 1300 1145">
    <g id="Layer_2" data-name="Layer 2">
      <rect x="-7" y="130" width="1277" height="795" class="thickborder"></rect>
      <rect class="cls-1" x="0.5" y="138" width="420.7" height="259.33" />
      <rect class="cls-1" x="421.2" y="138" width="420.7" height="259.33" />
      <rect class="cls-1" x="841.8" y="138" width="420.7" height="259.33" />
      <rect class="cls-1" x="0.5" y="397.3" width="420.7" height="259.33" />
      <rect class="cls-1" x="421.2" y="397.3" width="420.7" height="259.33" />
      <rect class="cls-1" x="841.8" y="397.3" width="420.7" height="259.33" />
      <rect class="cls-1" x="0.5" y="656.7" width="420.7" height="259.33" />
      <rect class="cls-1" x="421.2" y="656.7" width="420.7" height="259.33" />
      <rect class="cls-1" x="841.8" y="656.7" width="420.7" height="259.33" />
    </g>
    <g id="Layer_3" data-name="Layer 3">
      <text class="cls-3" transform="translate(81.2 285.6)">Lawful Good</text>
      <text class="cls-3" transform="translate(493.6 285.2)">Neutral Good</text>
      <text class="cls-3" transform="translate(918.7 285.2)">Chaotic Good</text>
      <text class="cls-3" transform="translate(59.8 552.9)">
        Lawful Neutral
      </text>
      <text class="cls-3" transform="translate(502.4 552.9)">True Neutral</text>
      <text class="cls-3" transform="translate(897.2 552.9)">
        Chaotic Neutral
      </text>
      <text class="cls-3" transform="translate(98 804.4)">Lawful Evil</text>
      <text class="cls-3" transform="translate(510.3 804.4)">Neutral Evil</text>
      <text class="cls-3" transform="translate(935.4 804.4)">
        Cha
        <tspan class="cls-4" x="77.2" y="0">o</tspan>
        <tspan x="101.8" y="0">tic Evil</tspan>
      </text>
      <text class="cls-5" transform="translate(459.1 -30)">
        Your Score!
      </text>
    </g>

    <g id="key">
      <rect class="cls-2" x="449" y="145.5" width="355" height="46" />
      <text class="cls-100" transform="translate(480 900)">
        ⟵ Ingredient Purist
      </text>
      <rect class="cls-2" x="1" y="366.5" width="50" height="329" />
      <text class="cls-100" transform="translate(14.6 381.7) rotate(90)">
        ⟵ Structure Purist
      </text>
    </g>

    <g if="finalPlayerPosition">
      <text :transform="`translate(${medalPosition})`" class="medal">
        🏆
      </text>
    </g>

    <g id="score">
      <g class="ribbon">
        <polygon
          class="cls-8"
          points="1198 224.1 1039.9 224.1 1039.9 141.6 1198 141.6 1136.3 179.3 1198 224.1"
        />
        <polygon
          class="cls-9"
          points="1039.9 224.1 1089.4 178.5 1089.4 96 1039.9 141.6 1039.9 224.1"
        />
        <polygon
          class="cls-8"
          points="49.5 224.1 207.6 224.1 207.6 141.6 49.5 141.6 111.2 179.3 49.5 224.1"
        />
        <polygon
          class="cls-9"
          points="207.6 224.1 158 178.5 158 96 207.6 141.6 207.6 224.1"
        />
        <rect class="cls-8" x="158" y="96" width="931.4" height="82.54" />
        <text
          text-anchor="middle"
          class="cls-10"
          transform="translate(620 147.8)"
        >
          {{ finalScore }}
        </text>
      </g>
      <a :href="tweetit">
        <g target="_blank" class="tweetit">
          <ellipse
            cx="1100"
            cy="955"
            rx="165"
            ry="89.7"
            class="cls-11"
          ></ellipse>
          <ellipse
            cx="1100"
            cy="950"
            rx="165"
            ry="89.7"
            class="cls-12"
          ></ellipse>
          <text class="cls-13" transform="translate(1000 965)">Tweet it!</text>
        </g>
      </a>
    </g>
  </svg>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    awardAssignment(type) {
      let posType = this.finalPlayerPosition[type];
      console.log(`Type: ${type}, Amt: ${posType}`);
      if (parseInt(posType, 10) < 0.75) {
        return `${type} purist`;
      } else if (parseInt(posType, 10) > 1.25) {
        return `${type} anarchist`;
      } else {
        return `${type} neutral`;
      }
    },
  },
  computed: {
    ...mapGetters(["finalPlayerPosition"]),
    medalPosition() {
      if (this.finalPlayerPosition.ingredient > 0) {
        let xaxis = 420 * this.finalPlayerPosition.ingredient + 1;
        let yaxis = 305 * (this.finalPlayerPosition.structure + 1) - 138;
        return xaxis + " " + yaxis;
      } else {
        return `150 320`;
      }
    },
    tweetit() {
      return `https://twitter.com/intent/tweet?text=I+played+'Is+This+A+Sandwich'+on+@Netlify!+My+score+is+${this.finalScore}!+You+can+play+here:+https://isthisasandwich.netlify.com/&via=sarah_edo`;
    },
    finalScore() {
      let ingredient = this.awardAssignment("ingredient");
      let structure = this.awardAssignment("structure");
      return `${ingredient}, ${structure}`;
    },
  },
};
</script>

<style>
html {
  background: url("/ingredients.png") #f9b7b9 center center repeat;
  background-size: cover !important;
  width: 99%;
  height: 99vh;
}
</style>

<style lang="scss" scoped>
svg {
  margin: 10px 250px;
}

.ribbon {
  transform: translateY(-80px) scale(0.9);
  transform-origin: 50% 50%;
}

.medal {
  font-size: 130px;
}

.tweetit {
  cursor: pointer;
}

.thickborder {
  stroke: #3c2c1b;
  stroke-width: 6px;
}

.cls-100 {
  font-size: 32px;
  fill: #af1872;
  font-family: "Marck Script", cursive;
}

.cls-1,
.cls-2 {
  fill: #f9b7b9;
}

.cls-1 {
  stroke: #b16363;
  stroke-miterlimit: 10;
}

.cls-3 {
  font-size: 42px;
  font-family: Sen-Regular, Sen;
}

.cls-4 {
  letter-spacing: -0.02em;
}

.cls-5 {
  fill: #3c2c1b;
  font-size: 60px;
  font-family: Sen-ExtraBold, Sen;
  font-weight: 800;
}

.cls-6 {
  letter-spacing: -0.07em;
}

.cls-8 {
  fill: #3c2c1b;
}

.cls-12,
.cls-8,
.cls-9 {
  stroke: #1a0f00;
}

.cls-9 {
  fill: #1a0f00;
}

.cls-10,
.cls-13 {
  font-size: 40px;
  fill: #fff;
}

.cls-10 {
  font-family: "Marck Script", cursive;
}

.cls-11 {
  fill: #1a0f00;
}

.cls-12 {
  fill: #3c2c1b;
  stroke-width: 3px;
}

.cls-13 {
  font-size: 56px;
  font-family: "Marck Script", cursive;
}
</style>
