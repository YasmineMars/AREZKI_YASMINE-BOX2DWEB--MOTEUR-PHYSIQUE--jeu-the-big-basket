

1. Environnement de développement
**********************************************************************************************
Pour réaliser ce mini jeu, j’ai utilisé la libraire Box2DWeb, du langage JavaScript .
**********************************************************************************************

2. Descriptif du Big Basket (jeu à deux joueurs) 
**********************************************************************************************
2.1 But----------------------------------------------------------------------------------

Etre le premier à remplir son panier avec un maximum de carrés, et atteindre un
score de 20 points, qui est égal à la somme des collisions des carrés à l’intérieur du
panier.
-----------------------------------------------------------------------------------------

2.2 Mise en place --------------------------------------------------------------------------

-- Visualisation de la scène de jeu constituée de trois murs (deux grands latéraux et un
petit au milieu) et d’un sol avec deux trous, plus les deux paniers en dessous des deux
trous, un panier pour chaque joueur.
-- Génération périodique de 5 carrés, qui seront déposés un à un sur le mur
intermédiaire.
--------------------------------------------------------------------------------------------


2.3 Regles du jeu---------------------------------------------------------------------------

- Chaque joueur tire une balle à chaque tour
- Le premier joueur commence toujours la partie
- Un tir consiste à lancer une balle intelligemment de telle sorte qu’elle heurte avec les
carrés générés périodiquement, et faire rentrer un maximum d’eux au panier.
- Chaque collision du carré à l’intérieur du panier augmentera le score du joueur (+1)
- La collision des balles à l’intérieur du panier ne touche pas au score du joueur.
- Des qu’un joueur atteint 20 points, il gagne et le jeu se termine.
--------------------------------------------------------------------------------------------
**********************************************************************************************