Ext.define('SenchaLaravel.store.CrudStore', {
    extend: 'Ext.data.Store',
    alias: 'store.crud',
    xtype: 'crud',
    storeId: 'crud',
    model: 'SenchaLaravel.model.Personnel',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/personnel',
        reader: {
            type: 'json',
            // rootProperty: 'items'
        }
    },


});