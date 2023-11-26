# Guide d'Utilisation des Media Queries en CSS

## Qu'est-ce qu'une Media Query?

Une media query en CSS permet d'appliquer des styles spécifiques en fonction de certaines conditions, telles que la taille de l'écran, l'orientation de l'appareil ou d'autres caractéristiques de l'environnement d'affichage. C'est un outil essentiel pour créer des designs réactifs qui s'adaptent à différents appareils.

## Comment Fonctionnent les Media Queries?

Les media queries utilisent la syntaxe `@media` suivie de la condition. Les styles à l'intérieur du bloc `@media` sont appliqués seulement lorsque la condition est vraie.

### Exemple de Base

```css
@media screen and (max-width: 600px) {
  /* Vos styles ici s'appliqueront sur les écrans de moins de 600px de large */
}
```

Cette media query applique les styles qu'elle contient uniquement sur les écrans dont la largeur est inférieure à 600 pixels.

### Exemples du Projet

### 1. Changement de Couleur de Fond

```css
/* Pour les écrans de moins de 600px */
@media screen and (max-width: 600px) {
  .exemple {
    background-color: lightblue;
  }
}
```

Dans cet exemple, le fond de l'élément avec la classe .exemple devient bleu clair sur les écrans de moins de 600px de large.

### 2. Carrés Colorés

```css
/* Alignement des carrés en colonne pour les petits écrans */
@media screen and (max-width: 500px) {
  .carre {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
```

Dans cet exemple, des divs en forme de carré sont centrés et disposés en colonne sur les écrans de moins de 500px.

### Pourquoi utiliser les Media Queries ?

Les media queries sont essentielles pour créer des sites web qui s'adaptent et offrent une expérience utilisateur optimale sur une variété d'appareils, des téléphones mobiles aux grands écrans d'ordinateur.
