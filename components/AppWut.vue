<template>
  <div class="wutcontain">
    <div class="bouncein">
      <h1>👎 WUT?! 👎</h1>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  methods: {
    updateWut() {
      console.log("did it!");
      this.$store.commit("updateWut");
    },
  },
  mounted() {
    const tl = gsap.timeline();
    tl.fromTo(
      ".bouncein",
      {
        duration: 2,
        scale: 0.5,
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        scale: 1,
        transformOrigin: "50% 50%",
        ease: "elastic.out(1, 0.5)",
      }
    );
    tl.to(".bouncein", {
      duration: 0.2,
      scale: 0.5,
      autoAlpha: 0,
      display: "none",
      transformOrigin: "50% 50%",
      ease: "sine.in",
    });
    tl.call(this.updateWut);
  },
};
</script>

<style lang="scss">
.wutcontain {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 70vw;
  text-align: center;
}

h1 {
  font-size: 8vw;
  color: #ffd546;
  padding: 20px;
  background: rgba(0, 0, 150, 0.5);
  text-shadow: 4px 10px 15px #000;
  display: block;
}

@media screen and (max-width: 600px) {
  .wutcontain {
    top: 30%;
  }

  h1 {
    font-size: 6vw;
  }
}
</style>
