a = [
    {
        "name": "Den enkle",
        "price": 149,
        "img":"DenEnkle.jpg"
        
    },
    {
        "name": "Kvess",
        "price": 195,
        "img": "Kvess.jpg"
    },
    {
        "name": "Drømmen",
        "price": 195,
        "img":"Drømmen.jpg"
    },
    {
        "name": "Pizzabakeren Spesial",
        "price": 219,
        "img":"PizzabakerenSpesial.jpg"
    },
    {
        "name": "Snadder",
        "price": 209,
        "img":"Snadder.jpg"
    },
    {
        "name": "Mix",
        "price": 209,
        "img":"Mix.jpg"
    },
    {
        "name": "Meksikaneren",
        "price": 245,
        "img":"Meksikaneren.jpg"
    },
    {
        "name": "Biffen",
        "price": 245,
        "img":"Biffen.jpg"
    },
    {
        "name": "Den Marinerte",
        "price": 239,
        "img":"DenMarinerte.jpg"
    },
    {
        "name": "Peppersvennen",
        "price": 239,
        "img":"Peppersvennen.jpg"
    } 
]
import random as rd
import json
b = []
for ele in a:

    b.append( {
        "id": rd.randint(10**5, 10**6-1),
        "name": ele["name"],
        "price": ele["price"],
        "img": ele["img"],
    }
        

    )
print(json.dumps(b))