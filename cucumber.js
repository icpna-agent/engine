module.exports = {
  default: {
    requireModule: ["ts-node/register", "tsconfig-paths/register"],
    require: ["test/bdd/support/**/*.ts", "test/bdd/**/steps/**/*.ts"],
    paths: ["test/bdd/**/*.feature"],
    format: ["progress", "allure-cucumberjs/reporter"],
    publishQuiet: true,
  },
};
