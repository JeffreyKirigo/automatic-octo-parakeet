/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('SenchaLaravel.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    // onItemSelected: function(sender, record) {
    //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },


    onCreate: function() {
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

    onDelete: function(btn) {
        var grid = btn.up('ingrid');
        var record = grid.getSelection()[0];
        if (!record) {
            alert('Please load data and make a selection');
            return;
        }
        Ext.Msg.confirm('Delete Changes', 'Do you want to delete' + " " + record.data.user_name, function(choice) {
            if (choice === 'yes') {
                var crud_store = grid.getStore(),
                    record_id = record.data.id
                crud_store.remove(record);
                //get record_id
                Ext.Ajax.request({
                    url: 'http://127.0.0.1:8000/delete/',
                    params: {
                        id: record_id

                    },
                    success: function(response) {
                        crud_store.removeAll();
                        crud_store.load();
                        alert('Success');
                    },
                    failure: function() {
                        alert('fail');
                    }
                });
            }
        });




    },
    onLoad: function(btn) {
        var grid = btn.up('ingrid');
        var crud_store = grid.getStore();
        crud_store.removeAll();
        crud_store.load();
    },

});