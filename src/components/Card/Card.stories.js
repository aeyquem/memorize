import Card from './Card.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Card',
  component: Card,
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Flipped = {
  args: {
    card: {
      src: 'https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
      slug: 'kitten',
    },
    isFlipped: true,
  },
};
export const Hidden = {
  args: {
    card: {
      src: 'https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
      slug: 'kitten',
    },
    isFlipped: false,
  },
};
