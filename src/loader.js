import {
    createHOC
} from 'vue-hoc';

import Loader from './Loader.vue';
import DefaultSpinner from './DefaultSpinner';
import DefaultError from './DefaultError';

export const LoaderFor = (
    component,
    promises,
    spinnerComponent=DefaultSpinner,
    errorComponent=DefaultError
) => {
    const options = {
        name: 'LoaderComponent',
    }
    const renderWith = {
        props: {
            target() {
                return component;
            },
            promises() {
                return promises;
            },
            spinner() {
                return spinnerComponent
            },
            error() {
                return errorComponent
            }
        },
    };
    return createHOC(Loader, options, renderWith);
}