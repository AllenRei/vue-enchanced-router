import Router from 'vue-router';
import {
    RouteGuard
} from './guard';
import {
    LoaderFor
} from './loader'

//export const RouteGuard = RouteGuard;

function routeMapper(spinnerComponent, errorComponent, transition) {
    return (route) => {
        if (Array.isArray(route.beforeEnter)) {
            route.beforeEnter = RouteGuard(route.beforeEnter);
        }
        if (route.loaders) {
            if (!spinnerComponent)
                return console.warn("No spinner component found for loader")
            route.component = LoaderFor(
                route.component,
                route.loaders,
                spinnerComponent,
                errorComponent,
                transition
            );
        }
        if (route.children) {
            route.children = route.children.map(
                routeMapper(spinnerComponent, errorComponent, transition)
            );
        }
        return route;
    }
}

export class EnchancedRouter extends Router {
    constructor(data) {
        const args = Object.assign({}, data);
        const loader = args.loader || {}
        args.routes = data.routes.map(
            routeMapper(loader.spinnerComponent, loader.errorComponent, loader.transition)
        )
        super(args);
    }
}