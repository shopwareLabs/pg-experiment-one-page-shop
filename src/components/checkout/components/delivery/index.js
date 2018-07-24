import template from './template.html'
import './style.css'

import shippingMethodBox from "../shippingMethodBox/";

export default {
    template,
    name: 'delivery',
    components: {
        shippingMethodBox
    },
    methods: {
        inputChanged
    },
    props: ['disabled', 'shippingMethods']
}

function inputChanged(shippingMethodId) {
    this.$emit('changed', shippingMethodId);
}