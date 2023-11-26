# Documentation Flexbox

Cette documentation fournit des détails sur les exemples Flexbox utilisés dans les fichiers `flex.html` et `flex.css`.

## Exemple Basique

### HTML

```html
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

### CSS

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* ... */
}
.box {
  /* ... */
}
```

### Explication

La classe `.container` utilise `display: flex;` pour activer Flexbox. `justify-content: center;` et `align-items: center;` centrent les éléments à l'horizontale et à la verticale.

## Flex Direction

### HTML

```html
<div class="container direction">
  <div class="box">A</div>
  <div class="box">B</div>
  <div class="box">C</div>
</div>
```

### CSS

```css
.direction {
  flex-direction: column;
}
```

### Explication

La classe `.direction` change la direction des éléments flex de ligne (défaut) à colonne.

## Flex Wrap

### HTML

```html
<div class="container wrap">
  <!-- ... -->
</div>
```

### CSS

```css
.wrap {
  flex-wrap: wrap;
}
```

### Explication

`.wrap` permet aux éléments de se répartir sur plusieurs lignes si l'espace horizontal est insuffisant.

## Justify Content, Align Items, et Align Self

### HTML

```html
<!-- Exemples similaires pour justify-content et align-items -->
<div class="container justify">
  <!-- ... -->
</div>
<div class="container align">
  <!-- ... -->
</div>
<div class="container align-self">
  <!-- ... -->
</div>
```

### CSS

```css
.justify {
  justify-content: space-around;
}
.align {
  align-items: flex-start;
}
.align-self .special {
  align-self: flex-start;
}
```

### Explication

`justify-content` et `align-items` contrôlent l'alignement horizontal et vertical des éléments dans le conteneur. `align-self` permet l'alignement spécifique d'un élément.

## Gap

### HTML

```html
<!-- Exemples pour gap horizontal, vertical et combiné -->
<div class="container gap-horizontal">
  <!-- ... -->
</div>
<div class="container gap-vertical">
  <!-- ... -->
</div>
<div class="container gap-combine">
  <!-- ... -->
</div>
```

### CSS

```css
.gap-horizontal {
  gap: 10px;
}
.gap-vertical {
  flex-direction: column;
  gap: 20px;
}
.gap-combine {
  gap: 15px 30px;
}
```

### Explication

La propriété `gap` crée un espace entre les éléments flexibles. `gap-horizontal` et `gap-vertical` montrent son utilisation dans différentes orientations.

## Flex Grow

### HTML

```html
<div class="container flex-grow">
  <div class="box">1</div>
  <div class="box grow">2</div>
  <div class="box">3</div>
</div>
```

### CSS

```css
.flex-grow .grow {
  flex-grow: 2;
}
```

### Explication

`flex-grow` permet à un élément de grandir pour occuper l'espace disponible dans le conteneur. Ici, la classe `.grow` a une valeur `flex-grow` de 2, permettant à cet élément de grandir deux fois plus que les autres.

## Flex Shrink

### HTML

```html
<div class="container flex-shrink">
  <div class="box shrink">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

### CSS

```css
.flex-shrink .shrink {
  flex-shrink: 0;
}
```

### Explication

`flex-shrink` contrôle la capacité d'un élément à rétrécir en dessous de sa taille de contenu. Ici, `.shrink` ne rétrécira pas en dessous de sa taille initiale.

## Flex Basis

### HTML

```html
<div class="container flex-basis">
  <div class="box basis">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

### CSS

```css
.flex-basis .basis {
  flex-basis: 200px;
}
```

### Explication

`flex-basis` définit la taille initiale d'un élément avant la distribution de l'espace libre. Ici, `.basis` commence à 200px avant que le flex-grow ou flex-shrink ne soit appliqué.
