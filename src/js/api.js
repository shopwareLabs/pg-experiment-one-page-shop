import axios from 'axios'
import config from '../config'


let api = {
    url: config.shopUrl,
    access_key: config.access_key,
    client_id: config.client_id,
    client_secret: config.client_secret,
    callAfterAuth: [],

    //Storefront API
    getCart: function (contextToken, callback) {
        axios({
            method: 'get',
            url: api.url + '/storefront-api/v1/checkout/cart',
            crossDomain: true,
            crossOrigin: true,
            headers: {
                'x-sw-access-key': api.access_key,
                'x-sw-context-token': contextToken
            }
        }).then(function (response) {
            callback(response.data.data)
        })
    },

    newCustomer: function (data, callback) {
        axios({
            method: 'post',
            url: api.url + '/storefront-api/v1/customer',
            crossDomain: true,
            crossOrigin: true,
            data: {
                salutation: data.salutation,
                firstName: data.firstName,
                lastName: data.lastName,
                password: data.password,
                email: data.email,
                'billingAddress.country': data.country,
                'billingAddress.zipcode': data.zipCode,
                'billingAddress.city': data.city,
                'billingAddress.street': data.street,
                phone: data.phonenumber
            },
            headers: {
                'x-sw-access-key': api.access_key,
            }
        }).then(function (response) {
            callback(response.data, true)
        }).catch(function (error) {
            callback(error, false)
        })
    },

    loginCustomer: function (contextToken, data, callback) {
        axios({
            method: 'post',
            url: api.url + '/storefront-api/v1/customer/login',
            crossDomain: true,
            crossOrigin: true,
            headers: {
                'x-sw-access-key': api.access_key,
                'x-sw-context-token': contextToken
            },
            data: {
                username: data.email,
                password: data.password
            }
        }).then(function (response) {
            callback(response.data, true)
        }).catch(function (error) {
            callback(error, false)
        })
    },

    logoutCustomer: function (contextToken) {
        axios({
            method: 'post',
            url: api.url + '/storefront-api/v1/customer/logout',
            crossDomain: true,
            crossOrigin: true,
            headers: {
                'x-sw-access-key': api.access_key,
                'x-sw-context-token': contextToken
            }
        })
    },

    safeOrder: function (contextToken, callback) {
        axios({
            method: 'post',
            url: api.url + '/storefront-api/v1/checkout/order',
            crossDomain: true,
            crossOrigin: true,
            headers: {
                'x-sw-access-key': api.access_key,
                'x-sw-context-token': contextToken
            }
        }).then(function (response) {
            callback(response.data)
        })
    },

    getProduct: function (uuid, callback) {
        axios({
            method: 'get',
            url: api.url + '/storefront-api/v1/product/' + uuid,
            crossDomain: true,
            crossOrigin: true,
            headers: {
                'x-sw-access-key': api.access_key,
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            callback(response.data, true)
        }).catch(function (error) {
            callback(error, false)
        })
    },

    createCart: function (callback) {
        axios({
            method: 'post',
            url: api.url + '/storefront-api/v1/checkout/cart',
            crossDomain: true,
            crossOrigin: true,
            headers: {
                'x-sw-access-key': api.access_key,
            }
        }).then(function (response) {
            callback(response.data, true)
        }).catch(function (error) {
            callback(error, false)
        })
    },

    addLineItemToCart: function (contextToken, uuid, quantity, callback) {
        axios({
            method: 'post',
            url: api.url + '/storefront-api/v1/checkout/cart/line-item/' + uuid,
            crossDomain: true,
            crossOrigin: true,
            headers: {
                'x-sw-access-key': api.access_key,
                'x-sw-context-token': contextToken
            },
            data: {
                type: 'product',
                quantity: quantity,
                payload: {
                    id: uuid
                }
            }
        }).then(function (response) {
            callback(response.data, true)
        }).catch(function (error) {
            callback(error, false)
        })
    },

    getCountrys: function (callback) {
        axios({
            method: 'get',
            url: api.url + '/storefront-api/v1/country',
            crossDomain: true,
            crossOrigin: true,
            headers: {
                'x-sw-access-key': api.access_key
            },
        }).then(function (response) {
            callback(response.data)
        })
    },

    getPaymentMethods: function (callback) {
        axios({
            method: 'get',
            url: api.url + '/storefront-api/v1/payment-method',
            crossDomain: true,
            crossOrigin: true,
            headers: {
                'x-sw-access-key': api.access_key
            },
        }).then(function (response) {
            callback(response.data)
        })
    },

    setPaymentMethod: function (paymentMethodId, contextToken, callback) {
        axios({
            method: 'patch',
            url: api.url + '/storefront-api/v1/context',
            crossDomain: true,
            crossOrigin: true,
            headers: {
                'x-sw-access-key': api.access_key,
                'x-sw-context-token': contextToken
            },
            data: {
                paymentMethodId
            }
        }).then(function (response) {
            callback(response.data, true)
        }).catch(function (error) {
            callback(error, false)
        })
    },

    getShippingMethods: function (callback) {
        axios({
            method: 'get',
            url: api.url + '/storefront-api/v1/shipping-method',
            crossDomain: true,
            crossOrigin: true,
            headers: {
                'x-sw-access-key': api.access_key
            },
        }).then(function (response) {
            callback(response.data, true)
        }).catch(function (error) {
            callback(error, false)
        })
    },
    
    setShippingMethod: function (shippingMethodId, contextToken, callback) {
        axios({
            method: 'patch',
            url: api.url + '/storefront-api/v1/context',
            crossDomain: true,
            crossOrigin: true,
            headers: {
                'x-sw-access-key': api.access_key,
                'x-sw-context-token': contextToken
            },
            data: {
                shippingMethodId
            }
        }).then(function (response) {
            callback(response.data, true)
        }).catch(function (error) {
            callback(error, false)
        })
    }
    
};

export default {
    getCart: api.getCart,
    newCustomer: api.newCustomer,
    loginCustomer: api.loginCustomer,
    logoutCustomer: api.logoutCustomer,
    safeOrder: api.safeOrder,
    getCountrys: api.getCountrys,
    getPaymentMethods: api.getPaymentMethods,
    setPaymentMethod: api.setPaymentMethod,
    getProduct: api.getProduct,
    createCart: api.createCart,
    addLineItemToCart: api.addLineItemToCart,
    getShippingMethods: api.getShippingMethods,
    setShippingMethod: api.setShippingMethod
}
