async function someKindOfDynamicLoading() {
  return {
    init: async () => {},
    get: async () => () => (name) => console.log(`Hello, ${name}`),
  };
}

const modProm = someKindOfDynamicLoading();
let mod;

module.exports = {
  init: async (...args) => {
    mod = await modProm;

    await mod.init(...args);
  },
  get: (...args) => {
    return mod.get(...args);
  },
};
