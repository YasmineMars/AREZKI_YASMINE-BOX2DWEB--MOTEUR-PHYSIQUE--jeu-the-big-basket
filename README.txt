

1. Environnement de d�veloppement
**********************************************************************************************
Pour r�aliser ce mini jeu, j�ai utilis� la libraire Box2DWeb, du langage JavaScript .
**********************************************************************************************

2. Descriptif du Big Basket (jeu � deux joueurs) 
**********************************************************************************************
2.1 But----------------------------------------------------------------------------------

Etre le premier � remplir son panier avec un maximum de carr�s, et atteindre un
score de 20 points, qui est �gal � la somme des collisions des carr�s � l�int�rieur du
panier.
-----------------------------------------------------------------------------------------

2.2 Mise en place --------------------------------------------------------------------------

-- Visualisation de la sc�ne de jeu constitu�e de trois murs (deux grands lat�raux et un
petit au milieu) et d�un sol avec deux trous, plus les deux paniers en dessous des deux
trous, un panier pour chaque joueur.
-- G�n�ration p�riodique de 5 carr�s, qui seront d�pos�s un � un sur le mur
interm�diaire.
--------------------------------------------------------------------------------------------


2.3 Regles du jeu---------------------------------------------------------------------------

- Chaque joueur tire une balle � chaque tour
- Le premier joueur commence toujours la partie
- Un tir consiste � lancer une balle intelligemment de telle sorte qu�elle heurte avec les
carr�s g�n�r�s p�riodiquement, et faire rentrer un maximum d�eux au panier.
- Chaque collision du carr� � l�int�rieur du panier augmentera le score du joueur (+1)
- La collision des balles � l�int�rieur du panier ne touche pas au score du joueur.
- Des qu�un joueur atteint 20 points, il gagne et le jeu se termine.
--------------------------------------------------------------------------------------------
**********************************************************************************************