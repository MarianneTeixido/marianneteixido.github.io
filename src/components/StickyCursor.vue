<template>
  <div ref="cursor" class="cursor"></div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

export default {
  name: 'StickyCursor',
  props: {
    stickeyEl: {
      type: String,
      default: '.sticky'
    }
  },
  setup(props) {
    const cursor = null;
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    onMounted(() => {
      const cursor = document.querySelector('.cursor');
      const sticker = document.querySelectorAll(props.stickeyEl);

      gsap.to({}, 0.01, {
        repeat: -1,
        onRepeat: () => {
          posX += (mouseX - posX) / 5;
          posY += (mouseY - posY) / 5;
          gsap.set(cursor, {
            css: {
              left: posX - 5,
              top: posY - 5,
            },
          });
        },
      });

      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      window.addEventListener('touchmove', (e) => {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      });

      sticker.forEach((el) => {
        el.addEventListener('mouseover', () => {
          gsap.to(cursor, {
            css: {
              transform: 'scale(4.5)',
            },
            duration: 0.2,
          });
        });
        el.addEventListener('mouseout', () => {
          gsap.to(cursor, {
            css: {
              transform: 'scale(1)',
            },
            duration: 0.2,
          });
        });
      });
    });

    return {
      cursor
    };
  }
};
</script>

<style>
.cursor {
  position: fixed;
  left: 0;
  top: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
}

@media (max-width: 768px) {
  .cursor {
    display: none;
  }
}
</style>
