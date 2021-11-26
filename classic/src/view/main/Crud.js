Ext.define('SenchaLaravel.view.main.Crud', {
    extend: 'Ext.grid.Panel',
    xtype: 'ingrid',
    alias: 'widget.ingrid',

    title: 'Ingrid',
    store: {
        type: 'crud'
    },


    columns: [
        { text: 'Serial_No', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'Name', flex: 1 },
        { text: 'Age', dataIndex: 'Age', flex: 1 },
        { text: 'Company', dataIndex: 'Company', flex: 1 },
    ],

    tbar: [{
        text: 'Load Data',
        handler: 'onLoad'
    }],
    bbar: [{
            text: 'Create',
            handler: 'onCreate'
        }, {
            text: 'Read',
            handler: 'onRead'
        }, {
            text: 'Update',
            handler: 'onUpdate'
        }, {
            text: 'Delete',
            handler: 'onDelete'
        }

    ]




});