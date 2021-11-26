Ext.define('SenchaLaravel.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'SenchaLaravel.model.Personnel',



    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});