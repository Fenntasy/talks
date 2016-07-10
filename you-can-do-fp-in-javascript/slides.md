class: inverse, center, middle

# Vous pouvez faire la programmation fonctionnelle en JavaScript !

## ( et c'est pas si compliqué)

---
class: inverse, center, middle

# Vincent Billey  

### developeur chez [Synbioz](https://www.synbioz.com)

### @Fenntasy

#### http://vincent.billey.me

#### link_to_slides

---
class: inverse, center, middle

# C'est quoi la programmation fonctionnelle ?

---
class: inverse, center, middle

<img class="lambda" src="assets/lambda-cs.svg" />

---
class: inverse, center, middle

<div class="lambda">λ</div>

---
class: inverse, center

## Paradigme ?

--

## Pattern ?

--

## Langage ?

--

## ⇓

## Façon de penser !

---
class: inverse, center, middle

# Il est plus facile de penser en fonction qu'en objet

---
class: inverse, center, middle

# Par exemple

---
class: inverse, center, middle

```javascript
fetch("https://api.myblog.com/posts")
  .then( function(data) {
    data.json().then( function(json) {
      var posts = json.posts;
      var titles = [];
      for (var i = 0; i < posts.length; i++) {
        titles.push(posts[i].title);
      }
      doSomethingWithTitles(titles);
    })
  })
```
---
class: inverse, center, middle

```javascript
fetch("https://api.myblog.com/posts")
  .then( data => {
    data.json().then( json => {
      const posts = json.posts;
      const titles = [];
      for (let i = 0; i < posts.length; i++) {
        titles.push(posts[i].title);
      }
      doSomethingWithTitles(titles);
    })
  })
```

---
class: inverse, center, middle

```javascript
fetch("https://api.myblog.com/posts")
  .then( data => data.json() )
  .then( json => json.posts )
  .then( posts => {
    const titles = [];
    for (let i = 0; i < posts.length; i++) {
      titles.push(posts[i].title);
    }
    doSomethingWithTitles(titles);
  })
```
---
class: inverse, center, middle

```javascript
fetch("https://api.myblog.com/posts")
  .then( data => data.json() )
  .then( json => json.posts )
  .then( posts => posts.map( post => post.title ) )
  .then( doSomethingWithTitles )
```
---
class: inverse, center, middle

```javascript
fetch("https://api.myblog.com/posts")
  .then( data => data.json() )
  .then( json => json.posts )
  .then( posts => posts.map( post => post.title ) )
  .then( doSomethingWithTitles )
* .catch( error => handleErrors(errors) )
```

---
class: inverse, center, middle

# Un autre exemple


---
class: inverse, center, middle

```javascript
const user1 = {id: 1, interest_ids: [6, 8, 10, 12] }
const user2 = {id: 2, interest_ids: [8, 23, 30] }

let hasCommonInterests = false
for (let i = 0; i < user1.interest_ids.length; i++) {
  for (let j = 0; j < user2.interest_ids.length; j++) {
    if (user1.interest_ids[i] === user2.interest_ids[j]) {
      hasCommonInterests = true
      break;
    }
  }
}
```

---
class: inverse, center, middle

```javascript
const user1 = {id: 1, interest_ids: [6, 8, 10, 12] }
const user2 = {id: 2, interest_ids: [8, 23, 30] }
import _ from "lodash"

const commonInterests =  _(user1.interest_ids)
  .intersection(user2.interest_ids)

const hasCommonInterests = commonInterests.length > 0

```


---
class: inverse, center, middle

```javascript
const user1 = {id: 1, interest_ids: [6, 8, 10, 12] }
const user2 = {id: 2, interest_ids: [8, 23, 30] }
import _ from "lodash"

const not = bool => !bool

const hasCommonInterests = _.flow(
  _.intersection,
  _.isEmpty,
  not
)
hasCommonInterests(user1.interest_ids, user2.interest_ids) // true

```

---
class: background-cover

<img class="cover" src="assets/tree-falls.jpg" />

# Si un arbre tombe là où il n'y a personne pour l'entendre, est ce qu'il fait du bruit ?

--

<div class="dialog">
  <img src="assets/pragmatic.jpg" class="avatar"/>
  <div class="bubble">On s'en fout non ?</div>
</div>

--

<div class="dialog">
  <img src="assets/philosopher.jpg" class="avatar" />
  <div class="bubble">Bonne question !</div>
</div>

--

<div class="dialog">
  <img src="assets/troll.jpg" class="avatar" />
  <div class="bubble">C'est une fausse dichotomie et la question est trop vague pour y répondre.</div>
</div>

---
class: background-cover

<img class="cover" src="assets/tree-falls.jpg" />

# Si une fonction contient du code impératif, est ce que c'est toujours du fonctionnel ? 

--

<div class="dialog">
  <img src="assets/pragmatic.jpg" class="avatar"/>
  <div class="bubble">Ben ça dépend, elle est pure ?</div>
</div>

--

<div class="dialog">
  <img src="assets/philosopher.jpg" class="avatar" />
  <div class="bubble">On pourrait sans doute la rendre fonctionnelle et ne pas avoir besoin d'utiliser du code impératif. Qu'est ce que les performances après tout sinon une vue de l'esprit ?</div>
</div>

--

<div class="dialog">
  <img src="assets/troll.jpg" class="avatar" />
  <div class="bubble">Change de langage !</div>
</div>

---
class: inverse

# Pensez vos fonctions en terme d'entrée et de sortie

--

## lodash utilise des tableaux mutables, des `continue`, des `while` pour des raisons de performances

--

## Et ça n'empêche pas de faire du fonctionnel avec

---
class: inverse

# Pour autant, écrivez du code lisible et réutilisable plutôt que performant

--

## Laissez les bibliothèques être performantes

--

## Si vous avez besoin de performance, vous réécrirez plus tard

---
class: inverse

# Pour aller plus loin 

--

- [Lodash](https://www.lodash.com), [underscore](http://underscorejs.org/)

--

- [Lodash FP](https://github.com/lodash/lodash/wiki/FP-Guide), [Ramda](http://ramdajs.com/) 

--

- [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/content/)

--

- [Fantasy Land Specifications](https://github.com/fantasyland/fantasy-land)

--

- Les talks qui vont suivre et [Lille FP](http://www.meetup.com/fr-FR/Lille-FP/) :)

---
class: inverse, center, middle

# Merci, à vos questions

<img class="avatar" src="assets/pragmatic.jpg" />
&nbsp;
<img class="avatar" src="assets/philosopher.jpg" />
&nbsp;
<img class="avatar" src="assets/troll.jpg" />
