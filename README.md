# What makes us happy?

In 2017 Mechanical Turk users shared [100,000 happy moments](https://megagon.ai/happydb-a-happiness-database-of-100000-happy-moments/) for a research project that tried to classify and understand what makes people happy in their daily lives. This application visualizes these moments on a globe. You can also read about how to make such a map in [this blog post](https://community.esri.com/t5/applications-prototype-lab-blog/create-an-interactive-watercolor-globe/ba-p/1272046).


The web application is based on [Arno Fiva's template](https://github.com/arnofiva/arcgis-core-template). 

## Prerequisites

* Node.js 16.0+

## Run project locally

To start:

```
npm install
npm run dev
```

Then open your browser at http://localhost:3000/

## Linting / formatting

```
npm run lint
```

Or install the the [ESLint VSCode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to format on save.

## Create productive build

```
npm run build
```

The `dist` folder then contains all the files for the web app which can either be copied to a web server or pushed to the `gh-pages` branch to be served at `https://arnofiva.github.io/arcgis-core-template`.

In order to use the `gh-pages` approach, see the following instructions. Make sure you remove an existing `dist` folder if it has been created from a previous build.

## Deploy to [GitHub Pages](https://pages.github.com/)

### Create `gh-pages` branch

You can skip this part if you used the template by copying all branches, which includs the `gh-pages` branch that is part of this project.

If you only copied the `main` branch, follow these steps to create an orphan `gh-pages` branch (meaning it does not share any history with `main`):

```
rm -rf dist
git checkout --orphan gh-pages
git rm -rf .
git commit --allow-empty -m "Init empty branch"
git push origin gh-pages
```

Return to `main` branch:

```
git checkout main
```

### Checkout `gh-pages` branch in `dist/` folder

The following will create a `dist` folder (fails if it already exists) and make it point to the root of the `gh-pages` branch:

```
git worktree add dist gh-pages
```

### Deploy new version on `gh-pages` branch

Once the previous steps have been completed, you can repeat the following every time you want to deploy a new version of your local code:

```
npm run build
cd dist/
git add .
git commit -am '🎉'
git push origin gh-pages
cd ../
```
