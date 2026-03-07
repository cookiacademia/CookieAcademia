---
title: Introduction sur les groupes
sidebar_position: 1
---

Une des plus grandes force du mathématicien est son pouvoir d'abstraction. Nous allons dans ce chapitre abstraire les notions déjà bien connue des ensembles $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ et $\mathbb{C}$ munis de leurs opération $+$ et $\times$. Cette section se consacre uniquement a une théorie particulière nommé théorie des groupes dont les première traces remontent aux traveaux d'Evariste Galois de 1832 qui développera de nombreuses propriétés sur ce qu'on appel aujourd'hui le groupe symétrique. Ce dernier sera étudié plus en détail dans le prochain chapitre.  

Avant de s'occuper de la notion de groupe nous devons nous interessé a un outil permettant d'abstraire la notion d'opération. 

---
## I Lois de composition interne

### Definition

Pensez au opération bien connue, l'addition, la multiplication, la soustraction et la division sur les réels $\mathbb{R}$. Nous connaissons déjà plusieurs propriété sur ces quatres opération opérations, comme la commutativité $x \times y = y \times x$. Mais nous remarquons que la commutativité ne marche pas sur la soustraction ni la division mais marche sur l'addiction et la multiplication. Dans cette section nous allons voir pourquoi.

:::note Définition 1
On appelle loi de composition sur un ensemble $E$, toute application $\Phi$ de $E^2$ dans $E$.
:::

Soit $\Phi$ une loi de composition interne sur un ensemble $E$. On notera la loi de composition interne par un symbole comme $*$. On se donneras le luxe de noter $x * y$ l'image du couple $(x,y) \in E^2$ par la loi $*$ plutôt que la notation $*(x,y)$ ou $\Phi(x,y)$.


>**Exemple 1 :**
>
>L'addition et la mustiplication sur les ensembles $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ et $\mathbb{C}$,
>
>La soustraction sur les ensembles $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ et $\mathbb{C}$,
>
>La division sur les ensembles $\mathbb{Q}^*$, $\mathbb{R}^*$ et $\mathbb{C}^*$
>
>Sont des lois de compositions internes

>**Exemple 2 :**
>
>l'application $x*y = \frac{x+y}{x \times y}$ est une loi de composition interne sur $\mathbb{Q}^*$.

>**Exemple 3 :**
>
>L'intersection $\cap$ et l'union $\cup$ ensembliste sur $P(E)$ sont des loi de compositions internes

Soit $*$ une loi de composition interne sur $E$.

:::note Définition 2
On dit que $*$ est :

- assoiciative si $\forall (x,y,z) \in E^3$  $(x*y)*z = x*(y*z)$

- commutative si $\forall (x,y) \in E^2$  $x*y = y*x$
:::

Si $*$ est associative ou pourra omettre les parenthèses alors : $\forall (x,y,z) \in E^3$  $(x*y)*z = x*(y*z) = x*y*z$

>**Exemple 4**
>
>L'addition et la multiplication sur $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ et $\mathbb{C}$ sont associatives et commutatives.

>**Exemple 5**
>
>La soustraction sur $\mathbb{Z}$ n'est pas commutative. En effet $2-3 = -1 \neq 1 = 3-2$

>**Exemple 6**
>
>La composition sur l'ensemble des applications de $A$ dans $A$ noté $A^A$ est associative mais pas commutative. En effet si $(f,g,h) \in (A^A)^3$ alors soit $x \in A$ :
>
>$$(f \circ g) \circ h = ((f \circ g) \circ h)(x) = (f \circ g)(h(x)) = f(g(h(x))) = f((g\circ h)(x)) = (f \circ (g \circ h))(x) = f \circ (g \circ h)$$
>
>Mais en générale on a :
>
>$$ f\circ g \neq g \circ f $$

:::note Définition 3
Soit $\oplus$ et $\otimes$ deux lois de composition interne sur $E$. On dit que $\otimes$ est distribuitive par rapport à $\oplus$ si pour tout $(x,y,z) \in E^3$ on a :

$$x \otimes (y \oplus z) = (x \otimes y) \oplus (x \otimes z)$$

et 

$$(x \oplus y) \otimes z = (x \otimes z) \oplus (y \otimes z)$$
:::

>**Exemple 7**
>
>La multiplication usuelle sur $\mathbb{R}$ est distributive par rapport l'addition.

### Elements remarquables

Certains éléments d'un ensemble munie d'une loi de composition interne ont des propriété particulière. Dans $\mathbb{R}$ vous pourriez penser a $0$ ou $1$ qui sont appelé élément neutre respectivement pour la loi $+$ et la loi $\times$. Nous allons abstraire cette notion. Soit $*$ une loi de composition interne sur un ensemble $E$

:::note Definition 4
On dit que $e \in E$ est l'élément neutre pour $*$ si :

$$\forall x \in E, x * e = e * x = x$$
:::

:::info Proposition 1
Si $e \in E$ est élément neutre pour $*$ alors il est unique.
:::
>**Preuve**
>
>Soit $e$ et $e'$ deux éléments neutres pour $*$. Comme $e$ est élément neutre alors $e * e' = e'$. De même comme $e'$ est élément neutre on a $e * e' = e$ alors :
> 
>$$e = e * e' = e'$$

>**Exemple 8**
>
>$0$ et $1$ sont respectivement les éléments neutre pour l'addiction et la multiplication sur $\mathbb{R}$ et $\mathbb{C}$. 

>**Exemple 9**
>
>L'identité est le neutre pour la composition des applications.