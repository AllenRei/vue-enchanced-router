import {
    createHOC
} from 'vue-hoc';

import { Loader } from './components/Loader';
import { Error } from './components/Error';

export const LoaderFor = (
    component,
    promises,
    spinnerComponent, //=DefaultSpinner,
    errorComponent=Error
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
            errorComponent() {
                return errorComponent
            }
        },
    };
    return createHOC(Loader, options, renderWith);
}