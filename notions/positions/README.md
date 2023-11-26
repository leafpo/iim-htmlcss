# Documentation sur le Positionnement CSS

Cette documentation explique les exemples de positionnement (`absolute`, `relative`) utilisés dans `position.html` et `position.css`.

## Position Relative

### HTML

```html
<div class="relative-container">
  <div class="relative-box">Box Relative</div>
</div>
```

### CSS

```css
.relative-box {
  position: relative;
  top: 20px;
  left: 20px;
  /* ... */
}
```

### Explication

`position: relative;` positionne un élément par rapport à sa position normale.

## Position Absolute

### HTML

```html
<div class="absolute-container">
  <div class="absolute-box">Box Absolute</div>
</div>
```

### CSS

```css
.absolute-box {
  position: absolute;
  top: 30px;
  right: 30px;
  /* ... */
}
```

### Explication

`position: absolute;` positionne un élément par rapport à son parent positionné le plus proche (non statique).

## Absolute dans un conteneur Relative

### HTML

```html
<div class="relative-container">
  <div class="relative-box">
    <div class="absolute-box">Box Absolute dans Relative</div>
  </div>
</div>
```

### Explication

Un élément en `position: absolute;` à l'intérieur d'un conteneur en position: relative; est positionné par rapport à ce conteneur.

## Position Fixed

### HTML

```html
<div class="fixed-box">Box Fixed</div>
```

### CSS

```css
.fixed-box {
  position: fixed;
  bottom: 10px;
  right: 10px;
  /* ... */
}
```

### Explication

`position: fixed;` fixe un élément par rapport à la fenêtre du navigateur. Il reste à la même position même lors du défilement.

## Position Sticky

### HTML

```html
<div class="sticky-container">
  <div class="sticky-box">Box Sticky</div>
  <!-- ... -->
</div>
```

### CSS

```css
.sticky-box {
  position: sticky;
  top: 0;
  /* ... */
}
```

### Explication

`position: sticky;` est un mélange entre relative et fixed. Un élément devient fixe par rapport à son parent le plus proche lorsqu'il atteint une position spécifique pendant le défilement.
