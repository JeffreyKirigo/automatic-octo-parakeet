Ext.define('SenchaLaravel.store.CrudStore', {
    extend: 'Ext.data.Store',
    alias: 'store.crud',
    model: 'SenchaLaravel.model.Personnel',


    data: {
        items: [

            { id: 2, Name: "lucjean", Age: 55, Company: "SoftClans" },
            { id: 1, Name: "jeanluc", Age: 55, Company: "SoftClans" },
            { id: 3, Name: "Jeffrey", Age: 55, Company: "SoftClans" },
            { id: 4, Name: "Kirigo", Age: 55, Company: "SoftClans" },
            { id: 5, Name: "Potter", Age: 55, Company: "SoftClans" },

        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }

    // proxy: {
    //     type: 'ajax',
    //     url: 'http://localhost/SenchaLaravel/SenchaLaravelController/',
    // }
});