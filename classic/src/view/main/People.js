Ext.define('SenchaLaravel.view.main.People', {
    extend: 'Ext.grid.Panel',
    xtype: 'peopleGrid',

    title: 'People',
    store: { type: 'peopleStore' },

    columuns: [
        { text: 'Serial_No', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Age', dataIndex: 'age', flex: 1 },
        { text: 'Company', dataIndex: 'company', flex: 1 },
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