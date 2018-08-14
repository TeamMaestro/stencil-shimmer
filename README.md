# Hive StencilJS Shimmer
Web component that allows you to render shimmer UI in your web (and Ionic native) applications.

## Installation
- `npm install @teammaestro/stencil-shimmer`

## Usage
- `<hive-shimmer width="100%/50px/50" shape="line/box/circle"></hive-shimmer>`

### Angular (6+) / Ionic (4+)
In your `angular.json` file add the following assets matcher in your `projects.app.architect.build.options.assets` collection:
```
{
    "glob": "**/*",
    "input": "node_modules/@teammaestro/stencil-shimmer/dist/shimmer",
    "output": "./shimmer"
}
```

In your main `AppModule` (i.e. `app.module.ts`) add the following import statement:

```
import '@teammaestro/stencil-shimmer/dist/shimmer';
```

### CSS Variables
|Variable|Default|
:---:|:---:
|`--box-height`|`104px`|
|`--box-width`|`100px`|
|`--line-height`|`10px`|
|`--line-width`|`100%`|
|`--line-margin-start`|`10px`|
|`--shimmer-start`|`-468px`|
|`--shimmer-end`|`-468px`|
|`--shimmer-duration`|`1s`|
|`--shimmer-timing-function`|`linear`|
|`--shimmer-iteration-count`|`infinite`|
|`--shimmer-direction`|`forwards`|
|`--background-width`|`800px`|
|`--background--height`|`--box-height`|
|`--shimmer-gradient-color-start`|`#f6f7f8`|
|`--shimmer-gradient-color-end`|`#edeef1`|

---

## Development

### Local Development

- `npm i`
- `npm run start`

### Building the Stencil Component

- `npm run build`
- `npm publish` or `npm pack` for local deployments

### Testing
- `npm run test`

## Contributors

[<img alt="Sean Perkins" src="https://avatars1.githubusercontent.com/u/13732623?v=4&s=117" width="117">](https://github.com/sean-perkins) |
:---:
|[Sean Perkins](https://github.com/sean-perkins)|
