// Name:        HTMLEditor.Toolbar_buttons.FixedBackColor.debug.js
// Assembly:    AjaxControlToolkit
// Version:     3.5.7.1213
// FileVersion: 3.5.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedBackColor = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedBackColor.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedBackColor.prototype = {
    setColor : function(color) {
        this._designPanel._execCommand("backcolor", false, color);
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedBackColor.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedBackColor", Sys.Extended.UI.HTMLEditor.ToolbarButton.FixedColorButton);

