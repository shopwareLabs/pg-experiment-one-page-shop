import template from './template.html'
import './style.css'

import lineItemBox from '../lineItemBox/'
export default {
    template,
    name: 'submit',
    components: {
        lineItemBox
    },
    data: function(){
        return {
            agree: false
        };
    },
    methods: {
        safeOrder
    },
    props: ['cart', 'disabled']
}

function safeOrder(){
    if(this.agree){
        this.$emit('safe-order');
    }
}