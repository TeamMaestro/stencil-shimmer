import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'shimmer',
    outputTargets: [
        {
            type: 'dist'
        },
        {
            type: 'www',
            serviceWorker: null
        }
    ]
};
