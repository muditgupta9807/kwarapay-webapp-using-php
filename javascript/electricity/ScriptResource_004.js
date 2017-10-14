// Name:        HTMLEditor.Toolbar_buttons.BulletedList.debug.js
// Assembly:    AjaxControlToolkit
// Version:     3.5.7.1213
// FileVersion: 3.5.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.BulletedList = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.BulletedList.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.BulletedList.prototype = {
    callMethod : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.BulletedList.callBaseMethod(this, "callMethod")) return false;
        this._designPanel._execCommand("InsertUnorderedList");
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.BulletedList.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.BulletedList", Sys.Extended.UI.HTMLEditor.ToolbarButton.MethodButton);

