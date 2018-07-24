import template from './template.html'
import './style.css'

export default {
    template,
    name: 'nameInput',
    data: function () {
        return {
            firstName: "",
            lastName: "",
        };
    },
    methods: {
        inputChanged
    },
    props: ['disabled']
}

function inputChanged() {
    if (!this.firstName || !this.lastName) {
        return;
    }
    this.$emit('changed', {
        firstName: this.firstName,
        lastName: this.lastName
    })
}