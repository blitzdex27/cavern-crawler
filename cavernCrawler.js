const fs = require("fs");

const heroSets = JSON.parse(fs.readFileSync("./heroSets.json"));

let heroList = [];

heroSets.map((heroes) => {
  heroes.forEach((hero) => {
    const heroListNames = heroList.map((inHeroList) => inHeroList.hero);
    if (!heroListNames.includes(hero)) {
      heroList.push({ hero, occurences: 1 });
    } else {
      const foundHero = heroList.find((inHeroList) => inHeroList.hero === hero);
      foundHero.occurences += 1;
    }
  });
});

console.log(heroList);
