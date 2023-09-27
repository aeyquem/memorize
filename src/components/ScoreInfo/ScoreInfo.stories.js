import ScoreInfo from './ScoreInfo.vue';

export default {
  name: 'Components/ScoreInfo',
  component: ScoreInfo,
};

export const NoScore = {
  args: {
    score: {
      right: 0,
      wrong: 0,
    },
  },
};
