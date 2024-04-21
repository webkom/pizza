# root/public

Consist of mostly picture of the available pizzas

# src

## src/app

### [src/app/layout.tsx](src/app/layout.tsx)

A file made by next which is the root of all pages that are being rendered. In the future header, navbar and footer should be moved here.

### [src/app/types.ts](src/app/types.ts)

These are types that are used for mongodb fetch to set the types of the fetch. (Writers note: not 100% how this works and why we need it.)

### src/app/api

#### [src/app/api/pizza](src/app/api/pizza)

uses dbConnect (CXX MAke link XX) and pizza (xxx make link xxx)
This is a get function, but does really serve two purposes. The two purposes are differntiated on wheter a id in from of "pizzaId" was given or not. This correpsond to https://orgin.cc/pizza?pizzaId=sdksdkskdsk. If this is not given, the method returns all pizza found in the pizza database, else it returns the pizzza with the id that was given. Note: This method does not check if the id exist and will return a empty set if id is wrong. The second for, with id, works by trying to make the given param as a mongodb object id. If not possible it will use a already given pizza, that in the future should be a not found/error pizza

## src/components

### src/components/Footer.tsx

A placeholder for the planed footer on the bottom of all pages, but has not been started on yet.

### src/components/Header.tsx

Should really be named navbar, like the css file. This file inserts a navbar, at the top of all pages that makes navigation between files easy. It includes 3 static pages, main-page, calculator and statistics. In addition if the linklist does not include 4 links we add either a signout link, if user is logged in, else it shows the login page. The condition of 4 links is set so we dont make a infinite loop, because if we add a link to the list and thus calling the function again and we get a infinite loop.
There is also a plan show which user is logged in in the navbar.

### src/components/Modal.tsx

The modal displays the choosen pizza, with name, price, description and rating, the logged in user have rated the pizza. When model is called (mainly in the src/page.tsx) it includes a id_nummer of a pizza and a func to close to the modal. When the id_nummer is changed, findPizza is run, which fetches the pizza and the rating for the logged in user. If rating is number betweeen 0 and 5 rating is set to the rating, else it is set to 0, and then stars are returned based on rating. When a user makes a new rating the stars on the rating is updates as well as the database.

### src/components/UserVer.tsx

This is a small components that is used on the [`calculator page`](./src/app/calculator/page.tsx). The element is used to display whether if a user is found or not for calculating the number of pizzas. Most of the functionality is done on the calculator page and this is more of information element. It also includes the functionality to remove this user.

#Writing comment
What have I documented:
component OK!
root:
misses mongodb.ts
app
misses page.tsx
misses folder:
calc <br>
login<br>
signout <br>
signup <br>
stats <br>
app/api
misses mongoose.ts
misses folder:
addUser <br>
calc <br>
models <br>
~~pizza~~ <br>
rating <br>
ratingOne <br>
users <br>
