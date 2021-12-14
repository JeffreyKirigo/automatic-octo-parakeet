Ext.define('SenchaLaravel.view.main.Register', {
    extend: 'Ext.form.Panel',
    alias: 'widget.register',

    controller: 'main',

    frame: 'true',
    title: 'Add Person',
    floating: true,
    closable: true,
    modal: true,
    height: 300,
    scrollable: true,
    jsonSubmit: true,


    defaults: {
        xtype: 'textfield',
        bodypadding: 20,
        padding: 20
    },

    items: [{
            fieldLabel: 'ID',
            emptyText: 'id',
            name: 'id',
            hidden: true
        }, {

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
        }, {

            fieldLabel: 'Gender',
            emptyText: 'Gender',
            name: 'gender'
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            items: ['->', {
                xtype: 'button',
                text: 'Submit',
                iconCls: 'x-fa fa-check',
                handler: 'onCreate'
            }, {
                xtype: 'button',
                text: 'Cancel',
                iconCls: 'x-fa fa-close',
                handler: function() {
                    this.up('register').destroy();
                }
            }]
        }

    ]


});