<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script>
import Composables from "../composables/composables.js";
export default {
  setup() {
    // Destructuring the object returned by the Composables function
    const { colors, message, matchColor } = Composables();

    // Returning the object to the template
    return { colors, message, matchColor };
  },
};
</script>

<style></style>
