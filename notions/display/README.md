# Guide sur les Propriétés Display en CSS

Ce guide vise à expliquer les différentes propriétés `display` en CSS, à l'exception de `flex` et `grid`, qui seront abordées dans un guide séparé.

## Propriétés Display Expliquées

### Display Block

- `display: block;`
- Les éléments block occupent toute la largeur disponible, formant un "bloc". Ils commencent sur une nouvelle ligne.
- Exemple: `<div class="bloc">Bloc</div>`

### Display Inline

- `display: inline;`
- Les éléments inline ne commencent pas sur une nouvelle ligne et n'occupent que l'espace nécessaire à leur contenu.
- Exemple: `<span class="inline">Inline 1</span>`

### Display Inline-Block

- `display: inline-block;`
- Combinant les caractéristiques de `inline` et `block`, les éléments inline-block se placent sur la même ligne mais permettent la spécification de la largeur et de la hauteur.
- Exemple: `<div class="inline-block">Inline-Block</div>`

### Display None

- `display: none;`
- Les éléments avec `display: none` ne sont pas affichés et n'occupent aucun espace dans la mise en page.
- Exemple: `<div class="none">None</div>`

### Display Flex

- `display: flex;`
- Les conteneurs flex permettent un alignement flexible des éléments enfants en ligne ou en colonne.
- Exemple: `<div class="flex-container">` avec des éléments enfants `<div class="flex-item">`.

### Display Grid

- `display: grid;`
- Les conteneurs grid offrent une méthode puissante pour créer des mises en page en deux dimensions avec des lignes et des colonnes.
- Exemple: `<div class="grid-container">` avec des éléments enfants `<div class="grid-item">`.

### Utilisation des Media Queries avec Grid

- Avec les media queries, nous pouvons changer la disposition de la grille en fonction de la taille de l'écran.
- Pour les écrans plus larges (`min-width: 600px`), la grille affiche 3 colonnes.
- Pour les écrans plus petits (`max-width: 599px`), la grille affiche 2 colonnes.

## Conclusion

Comprendre les différentes propriétés `display`, y compris `flex` et `grid`, est essentiel pour créer des mises en page efficaces et réactives en CSS.
