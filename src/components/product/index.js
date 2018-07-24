import template from './template.html'
import './style.css'

import api from '../../js/api';

import productImage from './components/productImage/'
import productContent from './components/productContent/'

import Spinner from 'vue-simple-spinner';

export default {
    name: 'product',
    template,
    components: {
        productImage,
        productContent,
        Spinner
    },
    data: function () {
        return {
            uuid: this.$route.query.uuid,
            product: null,
            manufacturer: null,
        }
    },
    methods: {
        addToCart
    },
    created
}

function created() {
    let me = this;

    api.getProduct(me.uuid, function (data, success) {
        if (!success) {
            return;
        }

        me.product = data.data;
    });
}

function addToCart(quantity) {
    let me = this;

    api.createCart(function (data, success) {
        if (!success) {
            return;
        }

        let contextToken = data['x-sw-context-token'];
        api.addLineItemToCart(contextToken, me.uuid, quantity, function (data, success) {
            if (!success) {
                return
            }
            me.$router.push({
                path: '../checkout',
                query: {
                    t: contextToken
                }
            })
        })
    });
}