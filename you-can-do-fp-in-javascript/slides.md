class: center, middle

# Vous pouvez faire la programmation fonctionnelle en JavaScript !

## ( et c'est pas si compliqué)

---
class: center, middle

# Vincent Billey  

### developeur chez [Synbioz](https://www.synbioz.com)

### @Fenntasy

#### http://vincent.billey.me

#### link_to_slides

---
class: center, middle

# C'est quoi la programmation fonctionnelle ?

---
class: center, middle

<img class="lambda" src="assets/lambda-cs.svg" />

---
class: center, middle

<img class="lambda" src="assets/lambda.png" />

---
class: center

--

## Paradigme ?

--

## Pattern ?

--

## Langage ?

--

## ⇓

## Façon de penser !

---
class: center, middle

# Il est plus facile de penser en fonction qu'en objet

---
class: center, middle

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
class: center, middle

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
class: center, middle

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
class: center, middle

```javascript
fetch("https://api.myblog.com/posts")
  .then( data => data.json() )
  .then( json => json.posts )
  .then( posts => posts.map( post => post.title ) )
  .then( doSomethingWithTitles )
```
---
class: center, middle

```javascript
fetch("https://api.myblog.com/posts")
  .then( data => data.json() )
  .then( json => json.posts )
  .then( posts => posts.map( post => post.title ) )
  .then( doSomethingWithTitles )
* .catch( error => handleErrors(errors) )
```

