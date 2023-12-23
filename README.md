# Introduction

Ce composant est une implémentation d'une feuille inférieure (bottom sheet) en React. Une feuille inférieure est une interface utilisateur qui s'affiche en bas de la page et qui peut être utilisée pour afficher des informations supplémentaires ou des options. Cette implémentation permet également de faire glisser la feuille vers le haut ou vers le bas à l'aide d'une icône de glisser.

# \***\*\*\*\*\*** Fichier BottomSheet.js **\*\***\*\*\***\*\***

# Importations : import React, { useEffect, useState, useRef } from "react";

    - J'ai utilise React pour créer des composants et gérer leur état.
    - useEffect  pour effectuer des opérations après que le rendu du composant est terminé.
    -  useState  pour créer des variables d'état dans un composant fonctionnel.
    useRef  pour créer une référence à un élément du DOM.

# Composant BottomSheet : const BottomSheet = ({ open, setOpen,children }) => { ......}

Le composant BottomSheet est une fonction qui prend trois propriétés : open (pour déterminer si la feuille est ouverte), setOpen (pour mettre à jour l'état d'ouverture de la feuille), et children (pour rendre le contenu dynamique à l'intérieur de la feuille).

# Déclaration des variables d'état :

"
const [isDragging, setIsDragging] = useState(false);
const [startY, setStartY] = useState(0);
const [startHeight, setStartHeight] = useState(0);
"
J'ai utlisé :

- isDragging indique si l'utilisateur est en train de redimensionner la fenêtre modale.
- startY stocke la position Y de la souris au début du redimensionnement.
- startHeight stocke la hauteur initiale de la fenêtre modale au début du redimensionnement.

# Création d'une référence au contenu de la feuille :

    " const sheetContentRef = useRef(null);

    sheetContentRef est une référence au contenu de la feuille inférieure. Elle est utilisée pour accéder à l'élément DOM correspondant.

# Gestion des événements de souris :

"
const handleMouseDown = (e) => {
setIsDragging(true);
setStartY(e.pageY);
setStartHeight(parseInt(sheetContentRef.current.style.height) || 0);
};
"
handleMouseDown est appelée lorsque l'utilisateur commence à redimensionner la fenêtre modale. Elle enregistre la position Y de la souris et la hauteur actuelle de la fenêtre

# Effets secondaires avec useEffect : useEffect(() => {

....
}, [isDragging, startHeight, startY, setOpen]);

useEffect est utilisé pour ajouter des écouteurs d'événements de souris pendant le redimensionnement de la fenêtre modale.

# Gestion du mouvement de la souris :

"
const handleMouseMove = (e) => {
if (isDragging) {
const delta = startY - e.pageY;
const newHeight = startHeight + (delta / window.innerHeight) \* 100;
sheetContent.style.height = `${newHeight}vh`;
}
};

"
handleMouseMove est appelée pendant le redimensionnement. Elle calcule la nouvelle hauteur de la fenêtre en fonction du mouvement vertical de la souris.

# Gestion de la fin du redimensionnement :

"
const handleMouseUp = () => {
setIsDragging(false);
const sheetHeight = parseInt(sheetContent.style.height) || 0;

if (sheetHeight < 25) {
setOpen(false);
}
if (sheetHeight > 75) {
sheetContent.style.height = "100vh";
} else {
sheetContent.style.height = "50vh";
}
};
"

handleMouseUp est appelée lorsque l'utilisateur arrête de redimensionner. Elle ajuste la hauteur finale de la fenêtre en fonction des conditions spécifiées.

# Nettoyage des écouteurs d'événements :

"
return () => {
document.removeEventListener("mousemove", handleMouseMove);
document.removeEventListener("mouseup", handleMouseUp);
};

"

Le bloc return de useEffect est utilisé pour supprimer les écouteurs d'événements lorsque le composant est démonté.

# Rendu du composant :

"
return (

  <div className={`bottom-sheet ${open && "show"}`}>
    {/* ... */}
  </div>
);

"
Le composant est rendu avec une classe conditionnelle basée sur la propriété open. Cela permet de montrer ou de masquer la feuille inférieure.

# Contenu de la feuille :

"

<div className="sheet-overlay" onClick={() => setOpen(false)}></div>
<div className="content">
  {/* ... */}
</div>

"
Le contenu de la feuille inclut une superposition (overlay) qui, lorsqu'elle est cliquée, ferme la feuille. La section "content" contient l'en-tête avec l'icône de glisser et le corps avec le contenu dynamique (children).

# \***\*\*\*\*\***\*\***\*\*\*\*\*** Fichier App.js **\*\***\*\***\*\***

# État de la feuille (open) : const [open, setOpen] = useState(false);

Le hook useState est utilisé pour définir l'état initial de la feuille comme fermée (false). La variable open contient l'état actuel de la feuille, et setOpen est une fonction pour mettre à jour cet état.

# Utilisation du composant BottomSheet : <BottomSheet open={open} setOpen={setOpen} title={"Bottom Sheet"}>

{/_ ... _/}
</BottomSheet>

Le composant BottomSheet est utilisé avec les propriétés open, setOpen, et title. La propriété open détermine si la feuille est ouverte, setOpen permet de mettre à jour cet état, et title est passé comme une propriété, bien que le composant BottomSheet n'ait pas actuellement de prop nommée title.

# \***\*\*\*\*\*\*\*** Dossier scss et Fichier Index.js \*\*\***\*\*\*\***

J'ai utilisé un style scss pour personnaliser l'apparence des composants. ce dernier a été importé au niveau du fichier racine Index.js

# Commandes d'éxécution du code une fois cloné

    - npm install , yarn add or pnpm install   (Pour installer les packages)

    - npm start , yarn start or pnpm start (Pour demarrer le projet)

# visualisation du rendu

Une fois démarré le projet, aller dans un navigatueur et entrer l'URl : http://localhost:3000
