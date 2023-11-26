# Guide des Unités de Taille en CSS

Ce guide explique les différentes unités de taille utilisées en CSS, démontrées dans `unites.html` et `unites.css`.

## Pixels (`px`)

- Unité de mesure fixe.
- 1px est généralement équivalent à un point physique de l'écran.

## Pourcentage (`%`)

- Relatif à la taille du conteneur parent.
- Utile pour la conception responsive.

## Viewport Height (`vh`)

- 1vh = 1% de la hauteur de la fenêtre d'affichage.
- Indépendant de la taille du conteneur.

## Viewport Width (`vw`)

- 1vw = 1% de la largeur de la fenêtre d'affichage.
- Utile pour adapter les éléments à la largeur de la fenêtre.

## Em (`em`)

- Relatif à la taille de police du conteneur parent.
- Souvent utilisé pour les polices et l'espacement lié au texte.

## Rem (`rem`)

- Relatif à la taille de police de l'élément racine (`html`).
- Permet une cohérence dans l'espacement et la taille du texte.

## Fractions (`fr`)

- Utilisée exclusivement dans le contexte des grilles CSS (`grid`).
- Représente une fraction de l'espace disponible dans un conteneur de grille.
- Permet de créer des colonnes et des lignes flexibles, où l'espace est réparti proportionnellement en fonction du nombre de fractions assignées.
- Peut être combinée avec d'autres unités pour des mises en page complexes et réactives.
