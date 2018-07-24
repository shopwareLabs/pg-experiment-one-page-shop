import template from './template.html'
import './style.css'

import paymentMethodBox from '../paymentMethodBox/'

export default {
    template,
    name: 'payment',
    components: {
        paymentMethodBox
    },
    methods: {
        inputChanged
    },
    props: ['paymentMethods', 'disabled']
}

function inputChanged(selected) {
    this.$emit('changed', selected);
}