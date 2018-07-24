import template from './template.html'
import './style.css'

import api from '../../js/api';
import productContainer from './components/productContainer/'
import customerDetails from './components/customerDetails/'
import submit from './components/submit/'
import payment from './components/payment/'
import delivery from './components/delivery/'

import {SweetModal} from 'sweet-modal-vue'
import Spinner from 'vue-simple-spinner'

export default {
    template,
    name: 'checkout',
    components: {
        productContainer,
        customerDetails,
        submit,
        payment,
        delivery,
        SweetModal,
        Spinner
    },
    data: function () {
        return {
            show: false,
            contextToken: this.$route.query.t,
            cart: null,
            countries: [],
            paymentMethods: [],
            shippingMethods: [],
            paymentMethod: null,
            customerDetailsDisabled: false,
            paymentDisabled: true,
            deliveryDisabled: true,
            submitDisabled: true,
            loginSuccess: false
        }
    },
    methods: {
        safeOrder,
        goBack,
        login,
        register,
        paymentChanged,
        deliveryChanged
    },
    created
}

function created() {
    let me = this;

    api.getCart(me.contextToken, function (data) {
        if (!data.lineItems.length) {
            me.$refs.noCartFound.open();
            return;
        }
        me.cart = data;
        me.show = true;
    });
    api.getCountrys(function (data) {
        me.countries = data.data;
    });
    api.getPaymentMethods(function (data) {
        me.paymentMethods = data.data;
    });
    api.getShippingMethods(function (data) {
        me.shippingMethods = data.data;
    })
}

function safeOrder() {
    let me = this;

    if (!me.paymentMethod) {
        this.$refs.invalidInput.open();
        return
    }
    api.safeOrder(me.contextToken, function () {
        me.$refs.success.open();
        api.logoutCustomer(me.contextToken);
    });
}

function login(input) {
    let me = this;
    api.loginCustomer(me.contextToken, input, function (data, success) {
        if (!success) {
            if (data.response.status === 401) {
                me.$refs.loginFailed.open();
                return;
            }
            me.$refs.invalidInput.open();
            return;
        }
        me.customerDetailsDisabled = true;
        me.paymentDisabled = false;
        me.loginSuccess = true;
    })
}

function register(input) {
    let me = this;

    api.newCustomer(input, function (data, success) {
        if (!success) {
            me.$refs.invalidInput.open();
            return;
        }
        me.login(input)
    });
}

function paymentChanged(paymentMethod) {
    let me = this;

    api.setPaymentMethod(paymentMethod, function () {
        me.paymentMethod = paymentMethod;
        me.paymentDisabled = true;
        me.deliveryDisabled = false;
    });
}

function deliveryChanged(shippingMethodId) {
    let me = this;

    api.setShippingMethod(shippingMethodId, function () {
        me.deliveryDisabled = true;
        me.submitDisabled = false;
    });
}

function goBack() {
    window.history.back();
}