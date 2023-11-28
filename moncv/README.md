# Consigne de l'Exercice : Création d'un CV en HTML et CSS

## Introduction

Vous allez créer un CV en utilisant HTML et CSS, en vous inspirant de l'image de référence fournie. Cet exercice vous permettra de mettre en pratique vos compétences en développement web tout en étant créatif avec le contenu.

La largeur du CV devra être comprise entre 800 et 1200 pixels et avoir une hauteur minimale de 700 pixels, qui pourra s'ajuster automatiquement en fonction du contenu. Cependant, pour rendre le projet plus ou moins responsive, nous allons définir une largeur maximale égale à celle de votre navigateur.

# Étape 1 : Préparation du Projet

## Création de la Branche Git via GitHub Desktop :

- Ouvrez GitHub Desktop et sélectionnez le dépôt du projet.

- Cliquez sur la branche actuelle en haut de l'application pour ouvrir le menu déroulant des branches (normalement la branche que vous voyez est "main").

- Choisissez "New Branch" ou "Nouvelle branche".

- Nommez la branche avec votre nom et cliquez sur "Create Branch" ou "Créer la branche".

- Assurez-vous de basculer sur votre nouvelle branche créée pour commencer à travailler.

# Étape 2 : Structure HTML

## Création de la Structure HTML :

Construisez la structure de base de votre CV en HTML.

Vous pouvez utiliser des <div>, <header>, <section>, <footer>, <img>, <a> etc., pour organiser le contenu.

N'oubliez pas d'inclure les espaces pour votre photo de profil, les informations personnelles, l'expérience professionnelle, les compétences, etc.

# Étape 3 : Style CSS et Librairies

## Mise en Forme avec CSS :

- Utilisez CSS pour styliser votre CV. Vous êtes libre de choisir les couleurs, polices et autres éléments de style.

Pour changer la police voici une liste de polices disponibles sur Google Fonts : `https://fonts.google.com/`

- Display Flex : Utilisez `display: flex;` pour organiser les sections de votre CV. Cela inclut l'alignement des éléments et la création d'une mise en page responsive.

- Utilisez les bonnes unités de mesure. Pour du responsive, nous pouvons utilisé les `%`, `vw` / `vh` ou alors si c'est une taille fixe les pixels, mais pour du responsive ce n'est pas toujours conseillé sauf en cas d'utilisation des Media Queries.

- Position Absolute : Expérimentez avec `position: absolute;`, `position: relative;` pour placer certains éléments, comme des icônes ou des badges, à des positions spécifiques.

## Utilisation de FontAwesome :

- Intégrez la librairie FontAwesome pour ajouter des icônes à votre CV. Cela peut inclure des icônes pour les médias sociaux, contacts, ou intérêts.

Assurez-vous d'inclure le lien vers FontAwesome dans votre en-tête HTML.

Pour rappel, la balise pour inclure du css est

Voici le lien à inclure : `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css`

# Étape 4 : Personnalisation

Contenu Personnalisé :

Remplissez votre CV avec vos propres informations, telles que votre nom, expérience, compétences, etc. Vous êtes également libre de changer les images, les icônes et les drapeaux de pays selon vos préférences.

Vous pouvez prendre des informations fictives sans aucun soucis.

# Étape 5 : Références et Ressources

## Documentation :

En cas de besoin, référez-vous à la documentation disponible dans le dossier "notions" du projet. Cela peut inclure des guides sur HTML, CSS, Flexbox, Positionnement CSS...

# Bonus : Expérimentation avancée du CSS

Pour ceux qui souhaitent aller plus loin, vous êtes encouragés à explorer des aspects avancés de CSS :

- Effets Interactifs : Utilisez les pseudo-classes comme `:hover`, `:active`, `:focus` pour ajouter des effets interactifs aux éléments de votre CV.

- Sélecteurs Avancés : Expérimentez avec des sélecteurs avancés tels que `nth-child`, `nth-of-type`, `:not`, etc., pour cibler des éléments spécifiques de manière créative et précise.

- Animations et Transitions : Si vous le souhaitez, ajoutez des animations ou des transitions pour enrichir l'expérience utilisateur de votre CV.

Ces techniques supplémentaires peuvent ajouter une touche d'interactivité et de sophistication à votre projet. Amusez-vous bien et soyez créatif ! 🥳
