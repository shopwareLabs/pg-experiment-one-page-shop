import template from './template.html'
import './style.css'

export default {
    template,
    name: 'paymentMethodBox',
    data: function () {
        return {
            selected: null
        }
    },
    props: ['paymentMethod', 'disabled'],
    methods: {
        inputChanged
    }
}

function inputChanged() {
    this.$emit('input-changed', this.selected);
}