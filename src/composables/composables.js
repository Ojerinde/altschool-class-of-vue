import { ref } from "@vue/reactivity";

export const Composable = () => {
  const colors = ["green", "red", "blue", "purple"];
  let message = ref("Pick a color...");
  const matchColor = (value) => {
    // Generating a random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // Checking if the random number is equal to the value
    if (colors[randomNumber] === value) {
      // Editing the message value
      message.value = `You win... [answer: ${colors[randomNumber]}]`;
      return;
    }
    message.value = `You loose [answer: ${colors[randomNumber]}]`;
  };
  //   Exposed properties from the composable
  return { colors, message, matchColor };
};
