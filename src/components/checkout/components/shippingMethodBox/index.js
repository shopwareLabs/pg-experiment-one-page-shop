import template from './template.html'
import './style.css'

export default {
    template,
    name: 'shippingMethodBox',
    data: function () {
        return {
            selected: null
        }
    },
    props: ['shippingMethod', 'disabled'],
    methods: {
        inputChanged
    }
}

function inputChanged() {
    this.$emit('input-changed', this.selected);
}