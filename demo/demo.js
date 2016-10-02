$("#simpleConfirm").confirm();
$("#complexConfirm").confirm({
    title:"Delete confirmation",
    text: "This is very dangerous, you shouldn't do it! Are you really really sure?",
    confirm: function(button) {
        button.fadeOut(2000).fadeIn(2000);
        alert("You just confirmed.");
    },
    cancel: function(button) {
        button.fadeOut(2000).fadeIn(2000);
        alert("You aborted the operation.");
    },
    confirmButton: "Yes I am",
    cancelButton: "No"
});
$("#dataConfirm").confirm();
$("#manualTrigger").click(function() {
    $.confirm({
        text: "This is a confirmation dialog manually triggered! Please confirm:",
        confirm: function() {
            alert("You just confirmed.");
        },
        cancel: function() {
            alert("You cancelled.");
        }
    });
});
