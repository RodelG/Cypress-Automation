# initial setup when creating this repo
```
npm init -y
npm install cypress --save-dev
npx cypress open
```

# setup after cloning this repo
```
npm install
```

# start the test runner 
```
npx cypress open
```

# run all tests
```
npx cypress run
```

# run all tests in a single spec file
```
npx cypress run --spec "cypress/integration/3-page-object-examples/todo-po-class.spec.js"
```

# run all the feature files
```
npx cypress run --spec "cypress/integration/**/*.feature"
```