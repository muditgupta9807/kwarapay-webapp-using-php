// Name:        HTMLEditor.Popups.LinkProperties.debug.js
// Assembly:    AjaxControlToolkit
// Version:     3.5.7.1213
// FileVersion: 3.5.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.Popups");

Sys.Extended.UI.HTMLEditor.Popups.LinkProperties = function(element) {
    Sys.Extended.UI.HTMLEditor.Popups.LinkProperties.initializeBase(this, [element]);
    
    this._defaultTarget = "_self";
    this._targetTextHolder = null;
    this._urlTextHolder = null;
}

Sys.Extended.UI.HTMLEditor.Popups.LinkProperties.prototype = {
    get_defaultTarget : function() {
        return this._defaultTarget;
    },
    set_defaultTarget : function(value) {
        this._defaultTarget = value;
    }
}

Sys.Extended.UI.HTMLEditor.Popups.LinkProperties.registerClass("Sys.Extended.UI.HTMLEditor.Popups.LinkProperties", Sys.Extended.UI.HTMLEditor.Popups.OkCancelAttachedTemplatePopup);
