// App.js - Utilisation des opérations CRUD avec Knex

const knex = require("./db");
const categorieModel = require("./models/categorieModel");
const Produit = require("./models/produitModel");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function main() {
  const categories = [
    {
      name: "Aventure",
      description: "Partez à la découverte de mondes extraordinaires et de mystères captivants dans des jeux d'aventure. Résolvez des énigmes, combattez des ennemis et prenez des décisions cruciales qui influenceront le déroulement de l'histoire."
    },
    {
      name: "City Builder",
      description: "Laissez libre cours à votre créativité en construisant et en gérant votre propre ville prospère dans des jeux de type.Développez votre économie, répondez aux besoins de vos citoyens et faites face aux défis urbains pour créer une métropole dynamique."
    },
    {
      name: "Course",
      description: "Vivez l'adrénaline de la vitesse et de la compétition dans des jeux de course effrénés.Prenez le contrôle de bolides puissants, affrontez vos adversaires sur des circuits variés et franchissez la ligne d'arrivée en tête."
    },
    {
      name: "FPS",
      description: "Plongez au cœur de l'action dans des jeux de tir à la première personne palpitants.Affrontez des ennemis hostiles, accomplissez des missions périlleuses et survivez dans des environnements immersifs."
    },
    {
      name: "Narratif",
      description: "Laissez-vous emporter par des histoires captivantes et des personnages inoubliables dans des jeux narratifs.Faites des choix cruciaux qui influencent le déroulement de l'intrigue et vivez une expérience émotionnellement intense."
    },
    {
      name: "Simulation",
      description: "Vivez des expériences réalistes et immersives dans des jeux de simulation. Maîtrisez des machines complexes, pilotez des avions ou explorez des mondes virtuels avec une précision saisissante."
    },
    {
      name: "Stratégie",
      description: "Mettez vos talents de stratège à l'épreuve dans des jeux de stratégie captivants.Gérez vos ressources, commandez vos armées et élaborez des plans ingénieux pour vaincre vos ennemis."
    },
    {
      name: "Visual Novel",
      description: "Découvrez des histoires interactives captivantes présentées sous forme de roman visuel. Suivez les choix des personnages, influencez le déroulement du récit et vivez une expérience narrative unique."
    },
    {
      name: "Ludique",
      description: "Amusez-vous et défiez votre esprit dans des jeux ludiques et stimulants. Résolvez des puzzles, relevez des défis et profitez d'un gameplay addictif qui vous fera sourire."
    },
  ];

  for (let category of categories) {
    await categorieModel.create(category);
  }
  console.log("Toutes les categories ont été insérée")

  const produits = [
    {
      name: "NeuroNet",
      description:"NeuroNet est un jeu de gestion urbaine narratif où vous devez maintenir l'équilibre entre les besoins et les désirs de ses nombreux citoyens, afin de déterminer la destinée d'une ville post-cyberpunk à l'orée d'une nouvelle ère numérique.",
      categoriesId: ["1", "3"],
      nomPlateforme: "PC",
      taille: "12.4G",
      image: "backend/images/neuronet.png",
      priceConseille: 16.78,
    },
    {
      name: "Game Awards 2021",
      description: "Revivez les meilleurs moments de la cérémonie des Game Awards 2021 avec ce jeu vidéo interactif. Vous pourrez voter pour vos jeux préférés, explorer les coulisses de l'événement et même rencontrer certains des développeurs les plus talentueux de l'industrie.",
      categoriesId: ["2","4"],
      nomPlateforme: "PlayStation",
      taille: "12.4G",
      image: "backend/images/gameAwards.png",
      priceConseille: 16.99,
    },
    {
      name: "The Unliving",
      description: "Dans ce jeu de stratégie en temps réel, vous incarnez un seigneur des ténèbres qui cherche à conquérir le monde. Utilisez vos hordes de morts-vivants pour anéantir vos ennemis et étendre votre empire maléfique.",
      categoriesId: ["3","5"],
      nomPlateforme: "Xbox",
      taille: "12.4G",
      image: "backend/images/unliving.png",
      priceConseille: 15.99,
    },
    {
      name: "Chants of Sennaar",
      description: "Plongez dans un monde de magie et de mystère dans ce jeu d'aventure narratif. Explorez une terre ancienne, découvrez ses secrets et utilisez vos pouvoirs pour sauver le monde.",
      categoriesId: ["6","8"],
      nomPlateforme: "Nitendo",
      taille: "12.4G",
      image: "backend/images/chantsSennaar.png",
      priceConseille: 18.99,
    },
    {
      name: "Asobu Indie Showcase",
      description: "Découvrez une sélection des meilleurs jeux indépendants de l'année dans ce showcase interactif. Essayez différents jeux, rencontrez les développeurs et votez pour votre préféré.",
      categoriesId: ["7","9"],
      nomPlateforme: "PC",
      taille: "12.4G",
      image: "backend/images/asudoIndie.png",
      priceConseille: 19.99,
    },
    {
      name: "Indiemag",
      description: "Ce magazine numérique vous propose un regard approfondi sur le monde des jeux vidéo indépendants. Découvrez des interviews, des articles, des critiques et des bandes-annonces de jeux indépendants.",
      categoriesId: ["1", "3"],
      nomPlateforme: "PlayStation",
      taille: "12.4G",
      image: "backend/images/indieMag.png",
      priceConseille: 20.99
    },
    {
      name: "Street of Rage 4",
      description: "La franchise classique de beat'em all est de retour avec un nouveau jeu qui reprend la formule classique tout en ajoutant de nouvelles fonctionnalités. Combattez des hordes d'ennemis dans des rues animées et utilisez vos compétences de combat pour sauver la ville.",
      categoriesId: ["2","4"],
      nomPlateforme: "Xbox",
      taille: "12.4G",
      image: "backend/images/streetRage.png",
      priceConseille: 21.99,
    },
    {
      name: "Kill It With Fire 2",
      description: "Détruisez tout sur votre passage dans ce jeu d'action déjanté. Utilisez une variété d'armes et d'explosifs pour éliminer des insectes géants et sauver le monde.",
      categoriesId: ["3","5"],
      nomPlateforme: "Nitendo",
      taille: "12.4G",
      image: "backend/images/killItFire.png",
      priceConseille: 22.99
    },
    {
      name: "Outpost Infinity Siege",
      description: "Construisez et défendez votre base dans ce jeu de stratégie en temps réel. Affrontez des vagues d'ennemis et utilisez vos compétences tactiques pour remporter la victoire.",
      categoriesId: ["6","8"],
      nomPlateforme: "PC",
      taille: "12.4G",
      image: "backend/images/outpostInfinity.png",
      priceConseille: 23.99
    },
    {
      name: "Anger Foot",
      description: "Défoulez-vous en frappant des objets dans ce jeu de simulation physique. Utilisez vos pieds, vos poings ou même votre tête pour détruire tout ce qui se trouve sur votre passage.",
      categoriesId: ["7","9"],
      nomPlateforme: "PlayStation",
      taille: "12.4G",
      image: "backend/images/angerFoot.png",
      priceConseille: 17.99
    },
    {
      name: "Ripout",
      description: "Combattez des hordes d'ennemis extraterrestres dans ce jeu de tir à la première personne intense. Utilisez vos armes puissantes et vos compétences de mouvement pour survivre et sauver l'humanité.",
      categoriesId: ["1", "3"],
      nomPlateforme: "Xbox",
      taille: "12.4G",
      image: "backend/images/ripout.png",
      priceConseille: 18.99,
    },
    {
      name: "Killer Frequency",
      description: "Utilisez vos compétences de piratage pour résoudre des crimes dans ce jeu de puzzle cyberpunk. Explorez des réseaux informatiques, décryptez des codes et découvrez la vérité.",
      categoriesId: ["2","4"],
      nomPlateforme: "Nitendo",
      taille: "12.4G",
      image: "backend/images/killerFrequency.png",
      priceConseille: 19.99,
    },
    {
      name: "Orrstead",
      description: "Explorez un monde ouvert magnifique et découvrez ses secrets dans ce jeu d'aventure. Interagissez avec les personnages, résolvez des énigmes et découvrez l'histoire de ce monde mystérieux.",
      categoriesId: ["3","5"],
      nomPlateforme: "PC",
      taille: "12.4G",
      image: "backend/images/orrstead.png",
      priceConseille: 20.99,
    },
    {
      name: "Silicon City",
      description: "Construisez et gérez votre propre ville dans ce jeu de simulation urbaine. Prenez des décisions importantes, investissez dans des infrastructures et créez une ville prospère.",
      categoriesId: ["6","8"],
      nomPlateforme: "PlayStation",
      taille: "12.4G",
      image: "backend/images/silliconCity.png",
      priceConseille: 21.99,
    },
    {
      name: "Tinytopia",
      description: "Contrôlez une petite créature dans ce jeu de plateforme et d'aventure. Explorez un monde miniature rempli de dangers et de défis.",
      categoriesId: ["7","9"],
      nomPlateforme: "Xbox",
      taille: "12.4G",
      image: "backend/images/tinytopia.png",
      priceConseille: 22.99
    },
    {
      name: "Dwarfheim",
      description: "Dwarfheim est un jeu de stratégie en temps réel où vous incarnez un chef de clan nain et devez construire et gérer votre propre colonie souterraine. Vous devrez explorer des donjons, rassembler des ressources, forger des armes et des armures, et entraîner vos nains au combat pour survivre dans un monde hostile.",
      categoriesId: ["1", "3"],
      nomPlateforme: "Nintendo",
      taille: "12.4G",
      image: "backend/images/dwarfheim.png",
      priceConseille: 23.99
    },
    {
      name: "Unleaving",
      description: "Unleaving est un jeu d'aventure narratif où vous incarnez une intelligence artificielle qui doit aider un homme à faire ses derniers adieux à sa vie. Vous explorerez ses souvenirs, l'aiderez à affronter ses regrets et l'accompagnerez dans ses derniers moments.",
      categoriesId: ["2","4"],
      nomPlateforme: "PC",
      taille: "12.4G",
      image: "backend/images/unleaving.png",
      priceConseille: 17.99
    },
    {
      name: "A Void Hope",
      description: "A Void Hope est un jeu de tir à la première personne de type roguelike se déroulant dans un vaisseau spatial abandonné. Vous incarnez un survivant qui doit explorer le vaisseau, combattre des ennemis hostiles et découvrir les secrets de ce qui s'est passé.",
      categoriesId: ["3","5"],
      nomPlateforme: "PlayStation",
      taille: "12.4G",
      image: "backend/images/aVoidHope.png",
      priceConseille: 18.99
    },
    {
      name: "Murders On The Yangtze River",
      description: "Murders On The Yangtze River est un jeu d'enquête policière se déroulant dans la Chine des années 1930. Vous incarnez un détective qui doit résoudre une série de meurtres mystérieux qui ont lieu sur un bateau de croisière sur le fleuve Yangtze.",
      categoriesId: ["6","8"],
      nomPlateforme: "Xbox",
      taille: "12.4G",
      image: "backend/images/murders.png",
      priceConseille: 19.99
    },
    {
      name: "Hauma",
      description: "Hauma est un jeu d'exploration et de résolution d'énigmes se déroulant dans un monde onirique. Vous incarnez un explorateur qui doit naviguer dans ce monde étrange et découvrir ses secrets.",
      categoriesId: ["7","9"],
      nomPlateforme: "Nintendo",
      taille: "12.4G",
      image: "backend/images/hauma.png",
      priceConseille: 20.99
    }
  ];

  for (let produit of produits) {
    const {categoriesId, ...data} = produit;
    const newProduct = await Produit.create(data);
    for (let categId of categoriesId) {
      await Produit.addCategory(newProduct, categId)
    }
  }
  console.log('Tous les produits ont été insérés')

  // Read
  await knex.destroy();
}

main().catch((err) => console.error(err));
