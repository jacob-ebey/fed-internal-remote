async function someKindOfDynamicLoading() {
  return {
    init: async () => {},
    get: async () => () => (name) => console.log(`Hello, ${name}`),
  };
}

module.exports = (async () => {
  return await someKindOfDynamicLoading();
})();
