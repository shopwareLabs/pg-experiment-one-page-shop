import template from './template.html'
import './style.css'

export default {
    template,
    name: 'phonenumberInput',
    data: function () {
        return {
            phonenumber: ""
        };
    },
    methods: {
        inputChanged
    },
    props: ['disabled']
}

function inputChanged() {
    if (!this.phonenumber) {
        return;
    }
    this.$emit('changed', {
        phonenumber: this.phonenumber
    })
}