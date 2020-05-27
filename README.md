# Health App Prototype

## Check out the prototype/ draft
https://adamilyas.github.io/health-story/

Pardon the lame design and bad code. I did this when I first started the coding and I'm lazy to do anything about it.

## Running
```
npm i
npm start
```

## Publishing to github pages
Install gh-pages as dev dependencies
```
npm install gh-pages --save-dev
```

set package.json -> homepage to be your github page url and add the necessary `predeploy` and `deploy` steps. Finally, run the following:
```
npm run predeploy; npm run deploy;
```

## Description

Simple Health Tracking App Mockup, built using React

View [here](https://adamilyas.github.io/esa-documents/Cover%20Page/index.html) for more information on the project

## Screens

### Login 
![login](./img/login.png)

### Register
![Register](./img/register.png)

### Home
![login](./img/home.png)

### Eat
![Eat](./img/eat.png)
To track calories

Todo: Search input food from database to obtain calories, add to daily calories

### Physical
![Exercise](./img/physical.png)

Todo: Search exercise type from database to obtain calories, subtract from daily calories

### Sleep
![Sleep](./img/sleep.png)

### Water
![Water](./img/water.png)

### Discount
![Discount](./img/discount.png)
