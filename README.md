# Remix Development Tools

![GitHub Repo stars](https://img.shields.io/github/stars/Code-Forge-Net/Remix-Dev-Tools?style=social)
![npm](https://img.shields.io/npm/v/remix-development-tools?style=plastic)
![GitHub](https://img.shields.io/github/license/Code-Forge-Net/Remix-Dev-Tools?style=plastic)
![npm](https://img.shields.io/npm/dy/remix-development-tools?style=plastic) 
![npm](https://img.shields.io/npm/dw/remix-development-tools?style=plastic) 
![GitHub top language](https://img.shields.io/github/languages/top/Code-Forge-Net/Remix-Dev-Tools?style=plastic) 

Remix Development Tools is an open-source package designed to enhance your development workflow when working with Remix, a full-stack JavaScript framework for building web applications. This package provides a user-friendly interface consisting of three tabs, **Active Page**, **Terminal**, **Settings**, **Errors** and **Routes**, along with a side tab called **Timeline**. With Remix Development Tools, you can efficiently monitor and manage various aspects of your Remix projects, including page information, URL parameters, server responses, loader data, routes, and more. You can
also track down hydration issues with the **Errors** tab and view your routes in a tree/list view with the **Routes** tab.

# Documentation 

Detailed documentation can be found here:

https://remix-development-tools.fly.dev/


## Getting Started

1. Install the package via npm:

```bash
npm install remix-development-tools -D
```

```js
import { remixDevTools } from "remix-development-tools";

// Add it to your plugins array in vite.config.js
export default defineConfig({
  plugins: [remixDevTools(), remix(), tsconfigPaths()], 
});
```

That's it, you're done! 


## Support

If you like Remix Development Tools consider starring the repository. If you have any questions, comments, or suggestions, please feel free to reach out!

## License

Remix Development Tools is open-source software released under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

Remix Development Tools was inspired by the Remix framework and aims to enhance the development experience for Remix users.

Feel free to explore Remix Development Tools, and we hope it significantly improves your Remix development process. If you encounter any issues or have suggestions for enhancements, please don't hesitate to open an issue on our GitHub repository. Happy Remixing!

## Thanks

Thanks to all the contributors on this project and the support to the community. You guys are awesome!

---

Devoted to my loving wife.

In loving memory of my late Grandfather, who taught me to always be curious, never stop learning, and to always be kind to others. I miss you, Grandpa.

## Tools

- **TypeScript**: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- **Vitest**: A modern test runner built on top of Vite.
- **ESLint**: ESLint statically analyzes your code to quickly find problems.
- **Prettier**: Prettier is an opinionated code formatter.
- **GitHub Actions**: Automate your workflow from idea to production.
- **tsup** - Zero-config bundler for tiny TypeScript libraries.

## Features

- **ESM/CJS ready** - Write your code in TypeScript and publish it as ESM and CJS with 0 configuration.
- **Are The types wrong? ready** - Passes all the checks for typings on https://arethetypeswrong.github.io/ by default.
- **ESM/CJS test apps setup** - Test your package in both ESM and CJS environments already setup for you.
- **Test runner setup** - Test your open source package with Vitest already setup for you.
- **Linting setup** - Lint your code with ESLint and Prettier already setup for you.
- **GitHub Actions setup** - Automate deployments to npm by using GitHub Actions.

## Setup

1. Use this template to create a new repository.
2. Clone the repository.
3. Change the package name in `package.json`.
4. Change the `open-source-stack` dependency in your test-apps to your name
5. Install the dependencies with `npm install`.
6. Change the `repository`, `bugs`, and `homepage` fields in `package.json` to your github repo.
7. Change the license if required.
8. Add the NPM_TOKEN secret to your GitHub repository.
9. Start coding!

## Scripts

- `npm run build` - Build the package.
- `npm run test` - Run the tests.
- `npm run lint` - Lint the code.
- `npm run dev` - Start the package and ESM test app in watch mode for development.
- `npm run dev:cjs` - Start the package and CJS test app in watch mode for development.
