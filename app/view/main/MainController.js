/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("SenchaLaravel.view.main.MainController", {
    extend: "Ext.app.ViewController",
    alias: "controller.main",


    //create new record
    onCreate: function(btn) {
        var form = btn.up("register");
        form.submit({
            method: "POST",
            url: "http://127.0.0.1:8000/create/",
            success: function(frm, action) {
                //alert('Updated Succesifully');
                Ext.Msg.alert("Status", "Record added successfully.");
                var store = Ext.StoreManager.lookup("crud");
                store.removeAll();
                store.reload();
                form.destroy();
            },
            failure: function() {
                // alert('Failure');
                Ext.Msg.alert("Status", "Registration Failed.");
                var store = Ext.StoreManager.lookup("crud");
                store.removeAll();
                store.reload();
                form.destroy();
            },
        });
    },

    //read record`
    onRead: function(btn) {
        var grid = btn.up("ingrid");
        var record = grid.getSelection()[0];
        if (!record) {
            alert("Please select a record");
            return;
        }
        var form = Ext.create("SenchaLaravel.view.main.FormPeople");
        form.loadRecord(record);
        form.show();
    },

    //Upadate record in grid
    onUpdate: function(btn) {
        var form = btn.up("formPeople");
        form.submit({
            method: "POST",
            url: "http://127.0.0.1:8000/update/",
            success: function(frm, action) {
                //alert('Updated Succesifully');
                Ext.Msg.alert("Status", "Changes Updated successfully.");
                var store = Ext.StoreManager.lookup("crud");
                store.removeAll();
                store.reload();
                form.destroy();
            },
            failure: function() {
                // alert('Failure');
                Ext.Msg.alert("Status", "Changes Update Failed.");
                var store = Ext.StoreManager.lookup("crud");
                store.removeAll();
                store.reload();
                form.destroy();
            },
        });
    },

    //Delete record from grid
    onDelete: function(btn) {
        var grid = btn.up("ingrid");
        var record = grid.getSelection()[0];
        if (!record) {
            alert("Please load data and make a selection");
            return;
        }
        Ext.Msg.confirm(
            "Delete Changes",
            "Do you want to delete" + " " + record.data.user_name,
            function(choice) {
                if (choice === "yes") {
                    var crud_store = grid.getStore(),
                        record_id = record.data.id;
                    crud_store.remove(record);
                    //get record_id
                    Ext.Ajax.request({
                        url: "http://127.0.0.1:8000/delete/",
                        params: {
                            id: record_id,
                        },
                        success: function(response) {
                            crud_store.removeAll();
                            crud_store.load();
                            alert("Success");
                        },
                        failure: function() {
                            alert("fail");
                        },
                    });
                }
            }
        );
    },

    //load grid
    onLoad: function(btn) {
        var grid = btn.up("ingrid");
        var crud_store = grid.getStore();
        crud_store.removeAll();
        crud_store.load();
    },
});