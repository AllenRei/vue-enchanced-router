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

const routeMapper = (spinnerComponent, errorComponent) => route => ({
    ...route,
    beforeEnter: Array.isArray(route.beforeEnter) ?
        RouteGuard(route.beforeEnter) :
        route.beforeEnter,
    component: route.loaders ?
        LoaderFor(
            route.component, 
            route.loaders, 
            spinnerComponent, 
            errorComponent
        ) :
        route.component,
    children: route.children ?
        route.children.map(routeMapper) :
        route.children
});

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