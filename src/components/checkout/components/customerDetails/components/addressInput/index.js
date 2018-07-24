import template from './template.html'
import './style.css'

export default {
    template,
    name: 'addressInput',
    data: function () {
        return {
            street: "",
            streetNr: "",
            zipCode: "",
            city: "",
            country: "",
            defaultValue: true
        };
    },
    methods: {
        inputChanged
    },
    props: ['countries', 'disabled']
}

function inputChanged() {
    if(this.country){
        this.defaultValue = false;
    }
    if (!this.street || !this.streetNr || !this.zipCode || !this.city || !this.country) {
        return;
    }
    this.$emit('changed', {
        street: this.street,
        streetNr: this.streetNr,
        zipCode: this.zipCode,
        city: this.city,
        country: this.country
    })
}