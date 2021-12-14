Ext.define("SenchaLaravel.view.main.Crud", {
    extend: "Ext.grid.Panel",
    xtype: "ingrid",
    alias: "widget.ingrid",

    title: "Ingrid",
    collapsible: true,
    columnLines: true,
    height: 730,
    // autoLoad: true,

    store: {
        type: "crud",
    },

    selModel: {
        type: "checkboxmodel",
    },

    columns: [
        { text: "Serial_No", xtype: "rownumberer" },
        { text: "Name", dataIndex: "user_name", flex: 1 },
        { text: "Age", dataIndex: "age", flex: 1 },
        { text: "Company", dataIndex: "company", flex: 1 },
        { text: "Gender", dataIndex: "gender", flex: 1 },
    ],

    tbar: [{
        text: "Load Data",
        handler: "onLoad",
    }, ],
    bbar: [{
            text: "Create",
            handler: function() {
                var register = Ext.create("SenchaLaravel.view.main.Register");
                register.show();
            },
        },
        {
            text: "Read",
            handler: "onRead",
        },
        {
            text: "Update",
            handler: function(record) {
                var grid = this.up("ingrid"),
                    record = grid.getSelection()[0];
                if (!record) {
                    alert("Please select a record");
                    return;
                }
                var form = Ext.create("SenchaLaravel.view.main.FormPeople");

                form.loadRecord(record);
                form.show();
            },
        },
        {
            text: "Delete",
            handler: "onDelete",
        },
    ],
});