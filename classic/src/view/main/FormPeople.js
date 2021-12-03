Ext.define('SenchaLaravel.view.main.FormPeople', {
    extend: 'Ext.form.Panel',

    frame: 'true',
    title: 'Add Person',
    floating: true,
    closable: true,
    modal: true,
    height: 300,
    scrollable: true,


    defaults: {
        xtype: 'textfield',
        bodypadding: 20,
        padding: 20
    },


    bbar: [{
            text: 'Submit',
            handler: function() {}

        }, {
            text: 'Cancel'
        }

    ],

    items: [{

            fieldLabel: 'Name',
            emptyText: 'Name',
            name: 'user_name'
        }, {

            fieldLabel: 'Age',
            emptyText: '20',
            name: 'age'
        }, {

            fieldLabel: 'Company',
            emptyText: 'Softclans',
            name: 'company'
        },
        {

            fieldLabel: 'Gender',
            emptyText: 'Gender',
            name: 'gender'
        },

    ]


});