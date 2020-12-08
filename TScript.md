
Install typescript:
```
npm install -g typescript
```

To compile in js:
```
tsc index.ts
```

Create the file tsconfig.json
```
yarn tsc --init
```

outDir on file tsconfig will make 
the compiled file on js on the unique folder

After you can run, and all files js compiled
will be in this path
```
yarn tsc
```

Video:
```
https://www.youtube.com/watch?v=0mYq5LrQN1s&ab_channel=Rocketseat
```

This lib compile TS files and start server
```
yarn add ts-node-dev --dev
```

add script command on package.json like:
```
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
  }
```

And you can run dev local with:
```
yarn dev
```
After any change server will be restarted

