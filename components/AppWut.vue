<template>
  <div ref="wuts">
    <p>👎</p>
    <p>WUT</p>
    <p>👎</p>
    <p>WHY</p>
    <p>😮</p>
    <p>👎</p>
    <p>😮</p>
    <p>😳</p>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  enter(el, done) {
    const wuts = this.$refs.wuts.childNodes;

    gsap.fromTo(
      wuts,
      {
        duration: 1,
        autoAlpha: 0,
        rotation: "random(1, 360)",
        x: 0,
        y: 0,
      },
      {
        x: "random(-150, 150)",
        y: "random(-150, 150)",
        autoAlpha: 1,
        rotation: "random(1, 360)",
        stagger: {
          amount: 0.1,
          from: "center",
        },
      }
    );
    gsap.to(wuts, {
      duration: 0.2,
      autoAlpha: 0,
      delay: 1,
    });

    done();
  },
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
}

div p {
  display: block;
  position: absolute;
}
</style>
