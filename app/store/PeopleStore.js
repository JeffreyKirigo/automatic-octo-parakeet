Ext.define('SenchaLaravel.store.PeopleStore', {
    extend: 'Ext.data.Store',
    alias: 'store.people',
    model: 'SenchaLaravel.model.PeopleModel',


    proxy: {
        type: 'ajax',
        url: 'http://localhost/SenchaLaravel/SenchaLaravelController/',
    }
});