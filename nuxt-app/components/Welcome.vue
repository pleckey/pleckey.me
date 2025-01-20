<template>
  <div class="container">
    <div class="logos">
      <div class="logos__blur"></div>
      <img class="logos__face" src="/pleckey-face.png" alt="Patrick Leckey" />
      <!-- <img class="logos__entry" src="/nuxt.svg" alt="Nuxt Logo" />
      <span class="logos__plus">+</span>
      <img class="logos__entry" src="/sanity.svg" alt="Sanity Logo" /> -->
    </div>
    <div class="steps">
      <!-- <h2 class="steps__title">About Me</h2> -->

      <p class="steps__text">
        Hi there! I’m a senior technical leader with a love for solving tough problems and building meaningful solutions. 
        I’ve been fortunate to work on exciting projects that bring technology to life in ways that truly make a difference.
      </p>

      <p class="steps__text">
        When I’m not in front of a screen, I’m a dad first—spending time with my family is one of my greatest joys. 
        And when it’s time to unplug and clear my head, I take to the skies in my Cessna 150. 
        There’s nothing quite like the perspective and freedom that flying brings—it’s my happy place away from the keyboard.
      </p>

      <p class="steps__text">
        If any of this resonates with you — whether you share a passion for AI, aviation, or just good conversation — I’d love to connect.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-2) var(--space-2);
}

.logos {
  display: none;
}

.steps {
  flex-direction: column;
  width: 100%;
  min-width: 300px;

  & .steps__list {
    list-style-type: none;
    padding: 0;
    width: 100%;
  }

  & .steps__entry {
    margin-bottom: var(--space-4);
  }

  & .steps__title {
    font-size: var(--font-size-5);
    line-height: var(--line-height-2);
  }

  & .steps__subtitle {
    font-size: var(--font-size-3);
    line-height: var(--line-height-2);
  }

  & .steps__text {
    font-family: var(--font-family-serif);
    line-height: var(--line-height-2);

    & a {
      color: var(--highlight);
      text-decoration: none;
    }
  }
}

@media (min-width: 575px) {
  .container {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .steps {
    min-width: 400px;
    max-width: var(--max-width-0);
    display: flex;
    padding: 0;
    order: 1;
    flex: 1;
    margin-right: var(--space-4);

    & .steps__subtitle {
      margin-top: var(--space-4);
    }

    & .steps__list {
      margin-top: 0;
    }
  }

  .logos {
    display: flex;
    align-items: center;
    margin: var(--space-6) 0 var(--space-5) 0;
    order: 2;

    & .logos__blur {
      display: flex;
      position: absolute;
      width: 375px;
      height: 115px;
      background: var(--magenta-100);
      filter: blur(82px);
      transform: rotate(-19deg);
      z-index: -1;
    }

    & .logos__plus {
      display: flex;
      font-family: var(--font-family-sans);
      font-weight: 800;
      font-size: var(--font-size-7);
      line-height: var(--line-height-6);
      margin: 0 var(--space-4);
    }

    & .logos__entry {
      display: flex;
    }

    & .logos__face {
      display: flex;
      width: 100%;
      margin-left: var(--space-4);
    }
  }
}
</style>
