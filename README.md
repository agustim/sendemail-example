# Example send email 

## Install

```
npm install
```
or
```
yarn
```

## Prepare

```
cp env.example .env
```
Edit .env with correct infromation.

Change first parameter in main call with your destination mail account.
```js
27  
28  main("no@example.com", "Hello ✔", "Hello world?",  "<b>Hello world?</b>").catch((err) => {
29      console.log("error");
30      console.log(err);
31  });
```

## Execute

```
npm run start
```
or
```
yarn run start
```
