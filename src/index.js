import Router from 'vue-router';
import {
    LoaderFor
} from '@/components/hoc/loader';
import {
    RouteGuard
} from './guard';
import {
    LoaderFor
} from './loader'

export const RouteGuard = RouteGuard;

function routeMapper(spinnerComponent, errorComponent) {
    return (route) => {
        if (Array.isArray(route.beforeEnter)) {
            newRoute.beforeEnter = RouteGuard(route.beforeEnter);
        }
        if (route.loaders) {
            newRoute.component = LoaderFor(
                route.component,
                route.loaders,
                spinnerComponent,
                errorComponent);
        }
        if (route.children) {
            newRoute.children = route.children.map(routeMapper);
        }
        return route;
    }
}

// const routeMapper = => (route) => ({
//     ...route,
//     beforeEnter: Array.isArray(route.beforeEnter) ?
//         RouteGuard(route.beforeEnter) :
//         route.beforeEnter,
//     component: route.loaders ?
//         LoaderFor(
//             route.component, 
//             route.loaders, 
//             spinnerComponent, 
//             errorComponent
//         ) :
//         route.component,
//     children: route.children ?
//         route.children.map(routeMapper) :
//         route.children
// });

export class EnchancedRouter extends Router {
    constructor(data) {
        super({
            ...data,
            routes: data.routes.map(
                routeMapper(data.loaderSpinner, data.loaderError)
            )
        })
    }
}