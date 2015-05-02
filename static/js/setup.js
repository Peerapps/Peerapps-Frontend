function config_automatic_setup() {
    jQuery.ajax({
        type: "POST",
        url: "/config_automatic_setup/",
        dataType: "json",
        data: {},
        success: function(data) {
            update_config_visually(data.config);
            alert("Update complete. If your config settings turned to green checkboxes, it was successful.\n\nYou need to close and re-open your wallet to cause the changes to take effect.");
        },
        error: function (e) {
            console.log("error", e);
        }
    });
}

function update_config_visually(config) {
    var any_invalid = false;
    if ("rpcuser" in config && config.rpcuser) {
        $("#rpcuser").html(config.rpcuser+' <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
        $("#rpcuser").css("color", "green");
    }
    else {
        any_invalid = true;
        $("#rpcuser").html('Missing! <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
        $("#rpcuser").css("color", "red");
    }

    if ("rpcpassword" in config && config.rpcpassword) {
        $("#rpcpassword").html(config.rpcpassword+' <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
        $("#rpcpassword").css("color", "green");
    }
    else {
        any_invalid = true;
        $("#rpcpassword").html('Missing! <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
        $("#rpcpassword").css("color", "red");
    }

    if ("txindex" in config && config.txindex && config.txindex != "0") {
        $("#txindex").html(config.txindex+' <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
        $("#txindex").css("color", "green");
    }
    else {
        //any_invalid = true;
        $("#txindex").html('Missing! <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
        $("#txindex").css("color", "red");
    }

    if ("server" in config && config.server && config.server != "0") {
        $("#server").html(config.server+' <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
        $("#server").css("color", "green");
    }
    else {
        any_invalid = true;
        $("#server").html('Missing! <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
        $("#server").css("color", "red");
    }

    if ("reindex" in config && config.reindex && config.reindex != "0") {
        $("#reindex").html('On <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
        $("#reindex").css("color", "red");
    }
    else {
        $("#reindex").html('Off <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
        $("#reindex").css("color", "green");
    }

    if ("gpg_suite_installed" in config && config.gpg_suite_installed == "bad") {
        $("#gpg_suite_installed").html('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span><br>');
        $("#gpg_suite_installed").css("color", "red");
    }
    else {
        $("#gpg_suite_installed").html('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
        $("#gpg_suite_installed").css("color", "green");
    }

    var wallet_running = false;
    if ("wallet_connected_status" in config && config.wallet_connected_status == "bad") {
        $("#wallet_connected_status").html('Disconnected <span class="glyphicon glyphicon-remove" aria-hidden="true"></span><br>(Ensure Peercoin Core / Peerunity is running.)');
        $("#wallet_connected_status").css("color", "red");
    }
    else {
        wallet_running = true;
        $("#wallet_connected_status").html('Good <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
        $("#wallet_connected_status").css("color", "green");
    }

    if (any_invalid) {
        $("#automatically_setup_button").show();
    }
    else {
        $("#automatically_setup_button").hide();
    }

    $("#file_loc_tooltip").attr('data-original-title', config.file_loc);
}

function check_conf() {
    jQuery.ajax({
        type: "POST",
        url: "/check_peercoin_conf/",
        dataType: "json",
        data: {},
        success: function(data) {
            update_config_visually(data.config);
            setTimeout("check_conf()", 10000);
        },
        error: function (e) {
            console.log("error", e);
        }
    });
}

$(document).ready(function() {
    check_conf();
    $(function () { $("[data-toggle='tooltip']").tooltip(); });

    if (navigator.appVersion.indexOf("Win")!=-1) {
        //Windows
        jQuery("#gpg_install_link").attr("href", "http://gpg4win.org/");
    }
    else if (navigator.appVersion.indexOf("Mac")!=-1) {
        //OS X
        jQuery("#gpg_install_link").attr("href", "https://gpgtools.org/gpgsuite.html");
    }
});