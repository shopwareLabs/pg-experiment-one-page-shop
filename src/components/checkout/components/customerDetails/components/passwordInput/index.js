import template from './template.html'
import './style.css'

export default {
    template,
    name: 'passwordInput',
    data: function () {
        return {
            password: "",
        };
    },
    methods: {
        inputChanged
    },
    props: ["disabled"]
}

function inputChanged() {
    this.$emit('changed', {
        password: this.password,
    })
}