import template from './template.html'
import './style.css'

import nameInput from './components/nameInput/';
import emailInput from './components/emailInput/';
import addressInput from './components/addressInput/';
import passwordInput from './components/passwordInput/';
import salutationInput from './components/salutationInput/';
import phonenumberInput from './components/phonenumberInput/';

export default {
    template,
    name: 'customerDetails',
    components: {
        nameInput,
        emailInput,
        addressInput,
        passwordInput,
        salutationInput,
        phonenumberInput,
    },
    data: function () {
        return {
            inputValues: {},
            newCustomer: true,
        }
    },
    methods: {
        inputChanged,
        signIn
    },
    props: ['countries', 'disabled', 'success']
}

function inputChanged(values) {
    Object.assign(this.inputValues, this.inputValues, values);
}

function signIn(){
    if(this.inputValues.password && this.inputValues.email && !this.inputValues.firstName){
        this.$emit('login', this.inputValues)
    }else {
        this.$emit('register', this.inputValues)
    }
}