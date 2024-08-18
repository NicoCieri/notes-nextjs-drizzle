const loadingAnimation = (message: string, interval = 300, maxDots = 3) => {
  let dots = 0;
  const loadingInterval = setInterval(() => {
    process.stdout.write(
      `\r${message}${".".repeat(dots)}${" ".repeat(maxDots - dots)}`
    );
    dots = (dots + 1) % (maxDots + 1);
  }, interval);

  return function stopLoadingAnimation(finalMessage?: string) {
    clearInterval(loadingInterval);
    if (finalMessage) {
      console.log(`\r${finalMessage}`);
    } else {
      console.log();
    }
  };
};

export default loadingAnimation;
