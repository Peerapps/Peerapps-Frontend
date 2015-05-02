function calculateProbStake(days, coins, difficulty) {
    var prob = 0;
    if (days > 30) {
        var maxTarget = Math.pow(2, 224);
        var target = maxTarget / difficulty;
        var dayWeight = Math.min(days, 90) - 30;
        prob = (target * coins * dayWeight) / Math.pow(2, 256);
    }
    return prob;
}
var dtable;
function display_data() {
    dtable = $('#pminting_table').dataTable( {
        "order": [[ 4, "desc" ]],
        "destroy": true,
        "ajax": function (data, callback, settings) {
            jQuery.ajax({
                type: "GET",
                url: "/peercoin_minting/peercoin_minting_data/",
                dataType: "json",
                success: function(data) {
                    jQuery.each(data.data, function(k,v){
                        //this calculation is for the next block
                        var time_range = jQuery('#time_range').val();
                        if (time_range=="10min") {
                            v[5] = 1 - Math.pow(1 - calculateProbStake(v[2], v[3], data.difficulty), 60 * 10);
                        }
                        if (time_range=="24hours") {
                            v[5] = 1 - Math.pow(1 - calculateProbStake(v[2], v[3], data.difficulty), 60 * 10 * 6 * 24);
                        }
                        if (time_range=="30days") {
                            v[5] = 1 - Math.pow(1 - calculateProbStake(v[2], v[3], data.difficulty), 60 * 10 * 6 * 24 * 30);
                        }
                        if (time_range=="90days") {
                            v[5] = 1 - Math.pow(1 - calculateProbStake(v[2], v[3], data.difficulty), 60 * 10 * 6 * 24 * 90);
                        }
                        v[5] = String(parseFloat((v[5] * 100).toFixed(2)))+"%";
                        v[0] = v[0].substring(0,8)+"... [<a href='javascript:void(0)' onclick='prompt(\"Transaction ID\", \""+v[0]+"\")'>Show</a>]";

                    })
                    callback(data);
                },
                error: function (e) {
                    console.log("error", e);
                }
            });
        }

    } );
}

$(document).ready(function() {
    $(document).ready(function() {
        display_data();
    } );
});