This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tech stack

- ⚛️ React con SSR en [NextJs](https://nextjs.org/docs).
- 🗂️ [Redux Toolkit](https://redux-toolkit.js.org/rtk-query/usage/queries)
- 💅 [Styled-components](https://www.styled-components.com/) for design development based on [Styled-system](https://styled-system.com/) for the control of the global styles of the Agora Design System
- 🛁 Code with Formatting with [ESlint](https://eslint.org/) && [Prettier](https://prettier.io/)
- 🛁 Commits Formatting with [CommitLint](https://commitlint.js.org/#/)



## First of all

1. Create a github access token for a project [here](https://github.com/settings/tokens).
2. Edit our bash config (e.g. ~/.bashrc or ~/.zshrc) and export our token adding: `export GH_NPM_TOKEN=<github_access_token>`
3. Restart bash/shell/terminal
4. And then, we can use to login with Token
   `npm login --scope=@jellybrains --registry=https://npm.pkg.github.com`
5. And then, we can install all dependencies for a project: `yarn install` or `yarn`.


## Getting Started

First, run the development server:

```bash
npm run develop
# or
yarn develop
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

OR

Run the development server [https]:

```bash
npm run server
# or
yarn server
```

## Deployment

```bash
npm run build
# or
yarn build
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Heroku

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
