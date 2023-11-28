# Guide des transitions et animations

## Pseudoclasses

- `:hover`

**Utilisation** : Appliquer un style quand la souris survole un élément.

**Exemple** : Changer la couleur de fond d'une div lorsque la souris la survole.
Code CSS:

```css
.hover-example:hover {
  background-color: #009688;
  color: white;
}
```

- `:active`

**Utilisation** : Appliquer un style lorsqu'un élément est activé, par exemple, lors d'un clic.

**Exemple** : Changer la couleur de fond d'un bouton lorsqu'il est cliqué.

```css
.active-example:active {
  background-color: #ff5722;
  color: white;
}
```

- `:focus`

**Utilisation** : Appliquer un style lorsqu'un élément, comme un champ de texte, est en focus.

**Exemple** : Changer la couleur de la bordure d'un champ de texte lorsqu'il est sélectionné.

```css
.focus-example:focus {
  border-color: #4caf50;
}
```

- `:checked`

**Utilisation** : Appliquer un style à un élément coché, comme une case à cocher.

**Exemple** : Modifier la couleur de la case à cocher lorsqu'elle est sélectionnée.

```css
.checked-example:checked {
  accent-color: #4caf50;
}
```

## Animations CSS

Transition sur `:hover`

**Utilisation** : Créer un effet de transition douce sur un élément lorsqu'il est survolé.

**Exemple** : Agrandir une div lors du survol.

```css
.hover-scale-example:hover {
  transform: scale(1.1);
}
```

Animation avec `@keyframes`

**Utilisation** : Créer des animations complexes en définissant plusieurs états et comportements.

**Exemple** : Faire tourner une image de Pokémon sur elle-même.

```css
@keyframes pokemon-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.pokemon-animation img {
  animation: pokemon-spin 2s infinite linear;
}
```
