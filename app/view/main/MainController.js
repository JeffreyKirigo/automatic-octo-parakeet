/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('SenchaLaravel.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function(sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
        }
    },
    onCreate: function() {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        var formPeople = Ext.create('SenchaLaravel.view.main.FormPeople');
        formPeople.show();

    },
    onRead: function() {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);

    },

    onUpdate: function() {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);

    },

    onDelete: function() {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);

    },

});