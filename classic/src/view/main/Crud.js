Ext.define('SenchaLaravel.view.main.Crud', {
    extend: 'Ext.grid.Panel',
    xtype: 'ingrid',
    alias: 'widget.ingrid',

    title: 'Ingrid',
    store: {
        type: 'crud'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    columns: [
        { text: 'Serial_No', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'user_name', flex: 1 },
        { text: 'Age', dataIndex: 'age', flex: 1 },
        { text: 'Company', dataIndex: 'company', flex: 1 },
        { text: 'Gender', dataIndex: 'gender', flex: 1 },


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