export const Error = {
    template: `
        <p>Something bad happened! Try again in a few minutes. Error message: {{ error }}</p>
    `,
    name: 'loader-error-message',
    props: ['error']
}