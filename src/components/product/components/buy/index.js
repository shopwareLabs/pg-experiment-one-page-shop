import template from './template.html'
import './style.css'

export default {
    name: 'buy',
    template,
    data: function(){
        return {
            quantity: 1
        }
    },
    methods: {
        addToCart
    }
}

function addToCart(){
    this.$emit('submit', this.quantity)
}