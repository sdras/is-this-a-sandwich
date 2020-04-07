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
        opacity: 0,
      },
      {
        opacity: 1,
        scale: 1,
        transformOrigin: "50% 50%",
        ease: "bounce",
      }
    );

    gsap.to(".bouncein", {
      duration: 1,
      delay: 1,
      scale: 0,
      opacity: 0,
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

h1 {
  font-size: 100px;
  color: #ffd546;
  padding: 20px;
  background: rgba(0, 0, 150, 0.5);
  text-shadow: 4px 10px 15px #000;
  display: block;
}
</style>
