// Name:        HTMLEditor.Toolbar_buttons.FixedForeColor.debug.js
// Assembly:    AjaxControlToolkit
// Version:     3.5.7.1213
// FileVersion: 3.5.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedForeColor = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedForeColor.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedForeColor.prototype = {
    setColor : function(color) {
        this._designPanel._execCommand("forecolor", false, color);
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedForeColor.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedForeColor", Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedColorButton);

