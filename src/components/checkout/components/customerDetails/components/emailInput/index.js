import template from './template.html'
import './style.css'

export default {
    template,
    name: 'emailInput',
    data: function () {
        return {
            email: "",
        };
    },
    methods: {
        inputChanged
    },
    props: ['disabled']
}

function validate(email) {
    let emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

    if (emailFilter.test(email)) {
        return true;
    }
    return false;
}

function inputChanged() {
    if (!validate(this.email)) {
        alert("Please insert a valid email-Address!");
        return;
    }
    this.$emit('changed', {
        email: this.email,
    })
}