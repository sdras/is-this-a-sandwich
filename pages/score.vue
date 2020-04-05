<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1263 916.5">
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
      <text class="cls-10" transform="translate(466.6 174.9)">
        &lt; Ingredient Purist
      </text>
      <rect class="cls-2" x="7" y="366.5" width="39" height="329" />
      <text class="cls-10" transform="translate(14.6 381.7) rotate(90)">
        &lt; Structure Purist
      </text>
    </g>
    <g if="finalPlayerPosition">
      <text :transform="`translate(${medalPosition})`" class="medal">
        🏆
      </text>
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
  margin: 20px 140px;
}

.medal {
  font-size: 130px;
}

.cls-10 {
  font-size: 36px;
  fill: #d12f21;
}

.cls-1,
.cls-2 {
  fill: #f9b7b9;
}

.cls-1 {
  stroke: #000;
  stroke-miterlimit: 10;
  opacity: 0.9;
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
</style>
