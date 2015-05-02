function unsubscribe(address) {
    jQuery("#"+address+"_unsubscribe").hide();
    jQuery("#"+address+"_loading_unsubscribe").html('<img src="static/images/ajax-loader.gif">');
    jQuery.ajax({
        type: "POST",
        url: "/peerblog/unsubscribe/",
        dataType: "json",
        data: {
            "address": address
        },
        success: function(data) {
            if (data.status == "error") {
                alert(data.msg);
            }
            else {
                get_blogs();
            }
        },
        error: function (e) {
            console.log("error", e);
            alert("Error attempting to unsubscribe.");
            jQuery("#"+address+"_unsubscribe").show();
            jQuery("#"+address+"_loading_unsubscribe").html('');
        }
    });
}

function subscribe(address) {
    jQuery("#"+address+"_subscribe").hide();
    jQuery("#"+address+"_loading_subscribe").html('<img src="static/images/ajax-loader.gif">');
    jQuery.ajax({
        type: "POST",
        url: "/peerblog/subscribe/",
        dataType: "json",
        data: {
            "address": address
        },
        success: function(data) {
            if (data.status == "error") {
                alert(data.msg);
            }
            else {
                get_blogs();
            }
        },
        error: function (e) {
            console.log("error", e);
            alert("Error attempting to subscribe.");
            jQuery("#"+address+"_subscribe").show();
            jQuery("#"+address+"_loading_subscribe").html('');
        }
    });
}

function view_latest(address) {
    jQuery("#"+address+"_view_latest").hide();
    jQuery("#"+address+"_loading_latest").html('<img src="static/images/ajax-loader.gif">');
    jQuery.ajax({
        type: "POST",
        url: "/peerblog/view_latest_post/",
        dataType: "json",
        data: {
            "address": address
        },
        success: function(data) {
            if (data.status == "error") {
                alert(data.msg);
            }
            else {
                alert(data.data);
            }
            jQuery("#"+address+"_view_latest").show();
            jQuery("#"+address+"_loading_latest").html('');
        },
        error: function (e) {
            console.log("error", e);
            alert("Error attempting to view latest.");
            jQuery("#"+address+"_view_latest").show();
            jQuery("#"+address+"_loading_latest").html('');
        }
    });
}

function address_updated() {
    localStorage.setItem('active_address', $('#peercoin_address').val());
    get_blogs();
    update_balance_info();
}

function update_balance_info() {
    var v = address_to_balance[$('#peercoin_address').val()];
    $('#ppc_balance').html(v+" ppc");
    var message_balance = parseInt(parseFloat(v) / 0.02);
    $("#messages_balance").html("~"+message_balance+" blog posts");
}

function submit_new_blogpost(wallet_passphrase) {

    jQuery("#submit_blogpost_loading").html('<img src="static/images/ajax-loader.gif">');
    jQuery("#submit_blogpost_button").hide();

    var post_data = {
        "message": $('#new_message').val(),
        "from_address": $('#peercoin_address').val(),
        "to_address": $('#new_message_address').val()
    };
    if (wallet_passphrase) {
        post_data['wallet_passphrase'] = wallet_passphrase;
    }

    jQuery.ajax({
        type: "POST",
        url: "/peerblog/submit_blogpost/",
        dataType: "json",
        data: post_data,
        success: function(data) {
            if (data.status == "error") {
                if ("type" in data && data.type == "wallet_locked") {
                    var wallet_passphrase = window.prompt("Submitting a blog post on the blockchain will cost 0.02 PPC.\n\nTo proceed, please enter your wallet passphrase:");
                    submit_new_blogpost(wallet_passphrase);
                }
                else {
                    alert(data.msg);
                    jQuery("#submit_blogpost_loading").html('');
                    jQuery("#submit_blogpost_button").show();
                }
            }
            else {
                jQuery("#submit_blogpost_loading").html('');
                jQuery("#submit_blogpost_button").show();
                $('#new_message').val('');
                $('#new_message_address').val('');
                alert("Post successful!");
            }
        },
        error: function (e) {
            console.log("error", e);
            jQuery("#submit_blogpost_loading").html('');
            jQuery("#submit_blogpost_button").show();
            alert("Error transmitting blog post.");
        }
    });
}

function blockchain_scan_status() {
    jQuery.ajax({
        type: "POST",
        url: "/blockchain_scan_status/",
        dataType: "json",
        data: {},
        success: function(data) {
            if (data.latest_block) {
                jQuery('#blockchain_status').html('Up to date <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
                jQuery('#blockchain_status').css('color', 'green');
                setTimeout("blockchain_scan_status()", 10000);
            }
            else {
                jQuery('#blockchain_status').html('Scanning '+data.blocks_left+' blocks <span class="glyphicon glyphicon-search" aria-hidden="true"></span>');
                jQuery('#blockchain_status').css('color', 'red');
                setTimeout("blockchain_scan_status()", 3000);
            }
        },
        error: function (e) {
            console.log("error", e);
        }
    });
}

function scan_blogs() {
    jQuery.ajax({
        type: "POST",
        url: "/peerblog/scan_blogs/",
        dataType: "json",
        data: {},
        success: function(data) {
            setTimeout("scan_blogs()", 5000);
        },
        error: function (e) {
            console.log("error", e);
        }
    });
}

function get_blogs() {
    jQuery.ajax({
        type: "POST",
        url: "/peerblog/get_blogs/",
        dataType: "json",
        data: {
            "address": $('#peercoin_address').val()
        },
        success: function(data) {

            //My Blog
            var html = "";
            jQuery.each(data.data.mine, function(k,v){
                v.time = moment(v.time*1000).calendar();
                html += ich.myblog_template(v, true);
            });
            jQuery('#my_blog_posts').html(html);

            //Subscription Blogs
            html = "";
            jQuery.each(data.data.sub, function(k,v){
                v.time = moment(v.time*1000).calendar();
                html += ich.sub_template(v, true);
            });
            jQuery('#sub_blog_posts').html(html);


            //browse_blogs
            html = "";
            jQuery.each(data.data.browse, function(k,v){
                v.latest_post_time = moment(v.latest_post_time*1000).calendar();
                html += ich.browse_template(v, true);
            });
            jQuery('#browse_blogs').html(html);


            setTimeout("get_blogs()", 10000);
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
        url: "/get_addresses/",
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
            get_blogs();
            update_balance_info();
        },
        error: function (e) {
            console.log("error", e);
        }
    });
    blockchain_scan_status();
    scan_blogs();

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