<template>
  <div class="about">
    <h2>Task description</h2>

    <div class="section">
      <h3>Develop SPA which should manage contacts. User can work with:</h3>

      <ul class="simple-list">
        <li>list of contacts (better with pagination)</li>
        <li>contact creating</li>
        <li>contact editing</li>
        <li>contact removing</li>
        <li>history of calls for each contact</li>
      </ul>
    </div>

    <div class="section">
      Front-end part should be developed as SPA with ES6,
    </div>
  </div>
</template>

<style lang="scss" scoped>

.simple-list li {
  font: 1rem verdana;
  line-height: 2em;
  padding: 0 0 0 8px;

  &:before {
    content: '';
    background: $color-accent-2;
    display: block;
    width: 8px;
    height: 8px;
    position: relative;
    left: -8px;
    top: 13px;
    float: left;

  }
}

</style>
