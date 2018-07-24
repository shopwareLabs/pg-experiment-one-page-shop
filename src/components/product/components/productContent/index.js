import template from './template.html'
import './style.css'

import buy from '../buy/'

export default {
    name: 'productContent',
    template,
    components: {
        buy
    },
    methods: {
        addToCart
    },
    props: ['product']
}

function addToCart(quantity){
    this.$emit('addToCart', quantity);
}