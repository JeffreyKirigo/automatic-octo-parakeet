/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SenchaLaravel.Application',

    name: 'SenchaLaravel',

    requires: [
        // This will automatically load all classes in the SenchaLaravel namespace
        // so that application classes do not need to require each other.
        'SenchaLaravel.*'
    ],

    // The name of the initial view to create.
    mainView: 'SenchaLaravel.view.main.Main'
});
