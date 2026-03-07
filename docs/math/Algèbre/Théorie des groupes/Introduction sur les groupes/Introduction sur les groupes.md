---
title: Introduction sur les groupes
sidebar_position: 1
---

Une des plus grandes force du mathématicien est son pouvoir d'abstraction. Nous allons dans ce chapitre abstraire les notions déjà bien connue des ensembles $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ et $\mathbb{C}$ munis de leurs opération $+$ et $\times$. Cette section se consacre uniquement a une théorie particulière nommé théorie des groupes dont les première traces remontent aux traveaux d'Evariste Galois de 1832 qui développera de nombreuses propriétés sur ce qu'on appel aujourd'hui le groupe symétrique. Ce dernier sera étudié plus en détail dans le prochain chapitre.  

Avant de s'occuper de la notion de groupe nous devons nous interessé a un outil permettant d'abstraire la notion d'opération. 

## I Lois de composition interne

### Definition

:::info Définition 1
On appelle loi de composition sur un ensemble $E$, toute application de $E \times E$ dans $E$.
:::

Soit $*$ une loi de composition interne sur un ensemble $E$. On se donneras le luxe de noter $x * y$ l'image du couple $(x,y) \in E^2$ par la loi $*$ plutôt que la notation $*(x,y)$.

:::note Exemple 1
L'addition et la mustiplication sur les ensembles $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ et $\mathbb{C}$,

La soustraction sur les ensembles $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ et $\mathbb{C}$,

La division sur les ensembles $\mathbb{Q}^*$, $\mathbb{R}^*$ et $\mathbb{C}^*$

Sont des lois de compositions internes
:::

:::note Exemple 2
l'application $x*y = \frac{x+y}{x \times y}$ est une loi de composition interne sur $\mathbb{Q}^*$.
:::

Soit $*$ une loi de composition interne sur $E$.

:::info Definition 2
On dit que $*$ est :

- assoiciative si $\forall (x,y,z) \in E^3$  $(x*y)*z = x*(y*z)$

- commutative si $\forall (x,y) \in E^2$  $x*y = y*x$
:::

Si $*$ est associative ou pourra omettre les parenthèses alors : $\forall (x,y,z) \in E^3$  $(x*y)*z = x*(y*z) = x*y*z$