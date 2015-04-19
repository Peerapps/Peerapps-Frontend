function remove_from_spamlist(address) {
    if(confirm("Are you sure?")) {
        jQuery.ajax({
            type: "POST",
            url: "/remove_from_spamlist",
            dataType: "json",
            data: {
                "address": address
            },
            success: function(data) {
                get_spamlist();
            },
            error: function (e) {
                console.log("error", e);
                alert("Error marking address as spammer.");
            }
        });

    }
}

function submit_add_spam(address) {
    if(confirm("Are you sure? All your messages from this address will be deleted.")) {
        jQuery("#add_spam_loading").html('<img src="=static/images/ajax-loader.gif">');
        jQuery("#submit_add_spam").hide();
        jQuery.ajax({
            type: "POST",
            url: "/mark_address_as_spam",
            dataType: "json",
            data: {
                "address": $("#spamlist_new_address").val()
            },
            success: function(data) {
                get_spamlist();
                jQuery("#add_spam_loading").html('');
                jQuery("#submit_add_spam").show();
            },
            error: function (e) {
                console.log("error", e);
                alert("Error marking address as spammer.");
            }
        });

    }
}

function get_spamlist() {
    jQuery.ajax({
        type: "POST",
        url: "/get_spamlist",
        dataType: "json",
        data: { },
        success: function(data) {
            var html = "";
            if (data.data.length == 0) {
                html += "None.";
            }
            else {
                jQuery.each(data.data, function(k,v){
                    v['time'] = moment(v['time']*1000).calendar();
                    html += ich.spamlist_template(v, true);
                });
            }
            jQuery('#spam_list').html(html);
            setTimeout("get_spamlist()", 10000);
        },
        error: function (e) {
            console.log("error", e);
        }
    });
}

var address_to_balance = {};
$(document).ready(function(){
    jQuery.ajax({
        type: "POST",
        url: "/get_addresses",
        dataType: "json",
        data: {},
        success: function(data) {
            var html = "";
            jQuery.each(data.data, function(k,v) {
                address_to_balance[v.address] = v.amount;
                var name = v.address;
                if (v.account) {
                    name = v.account + ": " + name
                }

                var last_active = localStorage.getItem('active_address') || null;
                var selected = "";
                if (v.address == last_active) {
                    selected = " selected";
                }
                html += '<option value="'+v.address+'"'+selected+'>'+name+'</option>';
            })
            jQuery("#peercoin_address").html(html);
            get_spamlist();
        },
        error: function (e) {
            console.log("error", e);
        }
    });

    $( "#new_message_address" ).autocomplete({
        source: "autocomplete_address/",
        minLength: 0,
        select: function( event, ui ) {
            console.log( ui.item ?
              "Selected: " + ui.item.value + " aka " + ui.item.id :
              "Nothing selected, input was " + this.value );
        }
    }).focus(function() {
        $(this).autocomplete("search", $(this).val());
    });
    $("[data-toggle='tooltip']").tooltip();
});