export const getMinuteSecond = (duration:string) => {
  const durations = {
    minute: 0,
    second: 0,
  };
  durations.minute = Math.floor(Number(duration) / 60);
  durations.second = Math.ceil(Number(duration) % 60);
  return durations;
};
