<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1263 1130">
    <g id="Layer_2" data-name="Layer 2">
      <rect class="cls-1" x="0.5" y="138" width="420.7" height="259.33" />
      <rect class="cls-1" x="421.2" y="138" width="420.7" height="259.33" />
      <rect class="cls-1" x="841.8" y="138" width="420.7" height="259.33" />
      <rect class="cls-1" x="0.5" y="397.3" width="420.7" height="259.33" />
      <rect class="cls-1" x="421.2" y="397.3" width="420.7" height="259.33" />
      <rect class="cls-1" x="841.8" y="397.3" width="420.7" height="259.33" />
      <rect class="cls-1" x="0.5" y="656.7" width="420.7" height="259.33" />
      <rect class="cls-1" x="421.2" y="656.7" width="420.7" height="259.33" />
      <rect class="cls-1" x="841.8" y="656.7" width="420.7" height="259.33" />
      <rect class="cls-2" x="414.5" width="419" height="76" />
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
      <text class="cls-5" transform="translate(459.1 57.5)">
        Your Score!
      </text>
    </g>

    <g id="key">
      <rect class="cls-2" x="449" y="145.5" width="355" height="46" />
      <text class="cls-100" transform="translate(480 174.9)">
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
      <g>
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
      </g>
      <text class="cls-10" transform="translate(301.6 147.8)">
        Ingredient Purist, Structural Chaos
      </text>
      <ellipse class="cls-11" cx="632.7" cy="1036.3" rx="178.3" ry="89.7" />
      <ellipse class="cls-12" cx="631.6" cy="1017.7" rx="178.3" ry="89.7" />
      <text class="cls-13" transform="translate(527.3 1032.6)">Tweet it!</text>
    </g>
  </svg>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["finalPlayerPosition"]),
    medalPosition() {
      if (this.finalPlayerPosition.ingredient > 0) {
        let xaxis = 1260 / this.finalPlayerPosition.ingredient;
        let yaxis = 915 / this.finalPlayerPosition.structure - 138;
        return xaxis + " " + yaxis;
      } else {
        return `150 320`;
      }
    },
  },
};
</script>

<style>
html {
  background: url("/ingredients.png") #f9b7b9 center center no-repeat;
  background-size: cover !important;
  width: 99%;
  height: 99vh;
}
</style>

<style lang="scss" scoped>
svg {
  margin: 20px 250px;
}

.medal {
  font-size: 130px;
}

.cls-100 {
  font-size: 32px;
  fill: #af1872;
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
  font-size: 60px;
  font-family: Sen-ExtraBold, Sen;
  font-weight: 800;
}

.cls-6 {
  letter-spacing: -0.07em;
}

.cls-8 {
  fill: #dfa5ac;
}

.cls-12,
.cls-8,
.cls-9 {
  stroke: #eb008b;
}

.cls-9 {
  fill: #cd818e;
}

.cls-10 {
  font-size: 40px;
}

.cls-10,
.cls-11,
.cls-13 {
  fill: #7c1d59;
}

.cls-12 {
  fill: #f3cbce;
  stroke-width: 10px;
}

.cls-13 {
  font-size: 48px;
}
</style>
