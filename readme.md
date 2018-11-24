# Enchanced Router

#### This package adds loaders and guards functionality to the vue-router.

### Install
``` bash
npm i vue-enchanced-router
```

### Guards
You can chain multiple beforeEnter hooks, so you can have much more flexible security management code. You can use them simply by adding array brackets at the beforeEnter section.
> router.js
``` js
...
{
    path: '/sample',
    component: ImportantComponent,
    beforeEnter: [isAuthorized, hasRightsToAccess]
}
...
```
Syntax of the guards is usual beforeEnter function style
> guards/is-authorized.js
``` js
...
export const isAuthorized = (to, from, next) => {
    if ( hasToken() ) {
        next()
    } else  {
        next({ name: "LoginPage" })
    }
}
...
```

### Loaders
In order to use loaders, you need to add a loaderSpinner to the router initialization object
You can also pass a loaderError component, for custom error message if loader catches an error

> router.js
``` js
...
import Spinner from './Spinner.vue'
import ErrorMessage from './ErrorMessage.vue';
import SampleComponent from './SampleComponent.vue'

import {SampleDataLoader} from './loaders/sample-data'
import {AnotherDataLoader} from './loaders/another-data'

import EnchancedRouter from 'vue-enchanced-router'

const router = new EnchancedRouter({
    mode: 'history'
    loaderSpinner: Spinner,
    loaderError: ErrorMessage,
    routes: [
        {
            path: '/sample',
            component: SampleComponent,
            loaders: [SampleDataLoader, AnotherDataLoader],
        }
    ]
})
...
```

Loaders are promise based, so loader component will be displayed until all loaders promises are resolved
Syntax of loaders: 

> loaders/sample-data
```js
...
export const SampleDataLoader = () => {
    return store.dispatch('sample/fetchSomeData')
}
```