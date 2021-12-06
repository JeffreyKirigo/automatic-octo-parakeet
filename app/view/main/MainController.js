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
    onRead: function(btn) {
        var grid = btn.up('ingrid');
        var record = grid.getSelection()[0];
        if (!record) {
            alert('Please select a record');
            return;
        }
        var form = Ext.create('SenchaLaravel.view.main.FormPeople');
        form.loadRecord(record);
        form.show();


    },

    onUpdate: function(btn) {
        var grid = btn.up('ingrid');
        var record = grid.getSelection()[0];
        if (!record) {
            alert('Please select a record');
            return;
        }
        var form = Ext.create('SenchaLaravel.view.main.FormPeople');
        form.loadRecord(record);
        form.updateRecord();
        form.show();

    },

    onDelete: function() {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);

    },

});