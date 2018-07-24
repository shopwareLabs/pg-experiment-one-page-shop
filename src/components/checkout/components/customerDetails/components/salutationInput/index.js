import template from './template.html'
import './style.css'

export default {
    template,
    name: 'salutationInput',
    data: function () {
        return {
            salutation: ""
        };
    },
    methods: {
        inputChanged
    },
    props: ['disabled']
}

function inputChanged() {
    if (!this.salutation) {
        return;
    }
    this.$emit('changed', {
        salutation: this.salutation
    })
}