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
  mounted() {
    gsap.fromTo(
      ".bouncein",
      {
        duration: 5,
        scale: 0,
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        scale: 1,
        transformOrigin: "50% 50%",
        ease: "bounce",
      }
    );

    gsap.to(".bouncein", {
      duration: 1,
      delay: 1,
      scale: 0,
      autoAlpha: 0,
      display: "none",
      transformOrigin: "50% 50%",
      ease: "bounce.in",
    });
  },
};
</script>

<style lang="scss">
.wutcontain {
  position: absolute;
  left: 30%;
  top: 40%;
}

@media screen and (max-width: 600px) {
  .wutcontain {
    left: 20%;
    top: 30%;
  }
}

h1 {
  font-size: 10vw;
  color: #ffd546;
  padding: 20px;
  background: rgba(0, 0, 150, 0.5);
  text-shadow: 4px 10px 15px #000;
  display: block;
}
</style>
