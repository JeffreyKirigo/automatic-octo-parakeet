Ext.define('SenchaLaravel.view.main.FormPeople', {
    extend: 'Ext.form.Panel',

    frame: 'true',
    title: 'Add Person',
    floating: true,
    closable: true,
    modal: true,
    height: 300,


    defaults: {
        xtype: 'textfield',
        bodypadding: 20,
        padding: 20
    },


    bbar: [{
            text: 'Submit'

        }, {
            text: 'Cancel'
        }

    ],

    items: [{

            fieldLabel: 'Name',
            emptyText: 'Name',
        }, {

            fieldLabel: 'Age',
            emptyText: '20'
        }, {

            fieldLabel: 'Company',
            emptyText: 'Softclans'
        },

    ]


});