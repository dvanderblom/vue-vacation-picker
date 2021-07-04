import Vue from 'vue';

Vue.filter('uppercase', function (value) {
    if (!value) return;
    return value.toUpperCase();
})