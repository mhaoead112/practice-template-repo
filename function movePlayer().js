function movePlayer(direction) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Player moved ${direction}`);
      resolve();
    }, 1000);
  });
}
movePlayer(up)
  .then(() => movePlayer(left))
  .then(() => movePlayer(down))
  .then(() => movePlayer(right))
  .catch((error) => console.error(error));
