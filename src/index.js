import Router from 'vue-router';
import {
    RouteGuard
} from './guard';
import {
    LoaderFor
} from './loader'

//export const RouteGuard = RouteGuard;

function routeMapper(spinnerComponent, errorComponent) {
    return (route) => {
        if (Array.isArray(route.beforeEnter)) {
            route.beforeEnter = RouteGuard(route.beforeEnter);
        }
        if (route.loaders) {
            route.component = LoaderFor(
                route.component,
                route.loaders,
                spinnerComponent,
                errorComponent);
        }
        if (route.children) {
            route.children = route.children.map(
                routeMapper(spinnerComponent, errorComponent)
            );
        }
        return route;
    }
}

export class EnchancedRouter extends Router {
    constructor(data) {
        let args = Object.assign({}, data);
        args.routes = data.routes.map(
            routeMapper(data.loaderSpinner, data.loaderError)
        )
        super(args);
    }
}