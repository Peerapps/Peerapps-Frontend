var enable_mockjax = true; //set to false to disable mockjax and use the real server
if (enable_mockjax) {

    $.mockjax({
        url: "/get_blogs",
        response: function() {
            this.responseText = {
                "status":"success",
                "data":{
                    "browse":[
                        {
                            "total_posts":1,
                            "address_from":"mpTAKHnTGjMwLN5rYVb21vGCnNF96ZJaNB",
                            "latest_post_time":1425150881
                        }
                    ],
                    "sub":[
                        {
                            "address_from":"mpTAKHnTGjMwLN5rYVb21vGCnNF96ZJaNB",
                            "blockindex":136712,
                            "tx_id":"dc81240c1cf783d2ea6942da930f14ea2b2655b1b625c4a7eec9959f77fd0d4a",
                            "key":"9595a041e6a39747571697664",
                            "time":1425150881,
                            "msg":"Proof of steak! http://www.restaurantnews.com/wp-content/uploads/2014/02/Outback-Steakhouse-Valentines-2014.jpg"
                        }
                    ],
                    "mine":[
                        {
                            "address_from":"mpTAKHnTGjMwLN5rYVb21vGCnNF96ZJaNB",
                            "blockindex":136712,
                            "tx_id":"dc81240c1cf783d2ea6942da930f14ea2b2655b1b625c4a7eec9959f77fd0d4a",
                            "key":"9595a041e6a39747571697664",
                            "time":1425150881,
                            "msg":"Proof of steak! http://www.restaurantnews.com/wp-content/uploads/2014/02/Outback-Steakhouse-Valentines-2014.jpg"
                        }
                    ]
                }
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/scan_blogs",
        response: function() {
            this.responseText = {
                "status": "success"
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/submit_blogpost",
        response: function() {
            this.responseText = {
                "status": "success"
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/view_latest_post",
        response: function() {
            this.responseText = {
                "status":"success",
                "data":"Proof of steak!"
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/subscribe",
        response: function() {
            this.responseText = {
                "status": "success"
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/unsubscribe",
        response: function() {
            this.responseText = {
                "status": "success"
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/get_spamlist",
        response: function() {
            this.responseText = {
                "status":"success",
                "data":[
                    {
                        "time":1425158883,
                        "address":"mhZLveeLmk3uXyX2pFYBgA9VrVcrTu9zDS"
                    }
                ]
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });


    $.mockjax({
        url: "/mark_address_as_spam",
        response: function() {
            this.responseText = {
                "status": "success"
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/remove_from_spamlist",
        response: function() {
            this.responseText = {
                "status": "success"
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/get_addresses",
        response: function() {
            var on_latest_block = Math.round(Math.random()) ? true : false;
            this.responseText = {
                "status":"success",
                "data":[
                    {
                        "account": "peer4commit",
                        "vout":0,
                        "txid":"09f9e066494d711aefc0407f41f4f363a1285765dcf1b7c15dd43ec93029b737",
                        "amount":"7423.40000000",
                        "confirmations":0,
                        "address":"mrTR2r5cctgbctKH5DvGvp4amPkSHu5Zwm",
                        "scriptPubKey":"2103aa254107cedd1d7a4e7ff224977f3cb1f90b55dd8d90b61ad658de7515c14266ac"
                    },
                    {
                        "account":"peermessage",
                        "vout":0,
                        "txid":"5bc6b7b887b860950711d7bf7a94b75002832698772d1d7fce99bff312268ac2",
                        "amount":"999797.96000000",
                        "confirmations":0,
                        "address":"mpTAKHnTGjMwLN5rYVb21vGCnNF96ZJaNB",
                        "scriptPubKey":"2102e521981df4a7f617a3f1b00b3059c711452a1e627aa80ee029b3d6c6b8ea5ff2ac"
                    },
                    {
                        "vout":0,
                        "txid":"6b37bd26d05b7d8ed8a652e8df712fd893626a9782f7365f0d83e92ebc474532",
                        "amount":"743683.00000000",
                        "confirmations":0,
                        "address":"mu31VQ1J6pf57BnjwW9fbqhWPtFxgrn1Gv",
                        "scriptPubKey":"210339c0cbc702dc07c3cd08bb04388f5e2cf15eafd19c4deed8c7b9dd941f963fa0ac"
                    },
                    {
                        "account":"bank",
                        "vout":0,
                        "txid":"777edb417c4bc54c6fbe32f993943acbd50ba72d74f605057c0c507a7a4e7a19",
                        "amount":"20198.00000000",
                        "confirmations":0,
                        "address":"mhZLveeLmk3uXyX2pFYBgA9VrVcrTu9zDS",
                        "scriptPubKey":"2102781c0ac7564256db161a07057854d33873a02262893f406c1654ffa972cde513ac"
                    }
                ]
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/get_messages",
        response: function() {
            var on_latest_block = Math.round(Math.random()) ? true : false;
            this.responseText = {
                "status":"success",
                "data":[
                    {
                        "address_from":"mrHoasNQETW3mihPA3iC4vw7CzL3qyL4dn",
                        "blockindex":135545,
                        "address_to":"mpTAKHnTGjMwLN5rYVb21vGCnNF96ZJaNB",
                        "tx_id":"916ed531a94828f6e63f30c127f1263a6fbd6552c5c09234b26c8de3e36c363c",
                        "key":"fac8ef0f962707a6737647774",
                        "time":1424693971,
                        "msg":"Welcome to the Peercoin Community! \n\nHave fun,\nSK"
                    },
                    {
                        "address_from":"mhZLveeLmk3uXyX2pFYBgA9VrVcrTu9zDS",
                        "blockindex":136713,
                        "address_to":"mpTAKHnTGjMwLN5rYVb21vGCnNF96ZJaNB",
                        "tx_id":"777edb417c4bc54c6fbe32f993943acbd50ba72d74f605057c0c507a7a4e7a19",
                        "key":"f4aa986bd3924fd0e4c4e8399",
                        "time":1425151043,
                        "msg":"Hey Satoshi, long time no talk. Crazy that nobody has figured out who you are yet, eh? Bitcoin is proceeding along just as we expected. Indeed, the 20mb block fork proposal has pushed the timeline up even faster than Hari Seldon would have predicted (haha). A severe drop in price, resulting in miners stuck with hardware paid for in fiat, resulting in these miners being incentivized to attack the network to recoup their fiat losses, will still likely deal the killing blow. We'll see if your suspicion is correct, and it is possible for the network effect to be transferred and not destroyed. I have high hopes - this proof of stake solution you helped me on has proven quite resilient. Oh and btw, mom wanted to know if you'd be back in town for Dad's birthday next month. Let me know. \n\nYour little bro,\nSunny King"
                    }
                ]
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/blockchain_scan_status",
        response: function() {
            var on_latest_block = Math.round(Math.random()) ? true : false;
            this.responseText = {
                "status": "success",
                "latest_block": on_latest_block,
                "blocks_left": on_latest_block ? 0 : 13,
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/check_setup_status",
        response: function() {
            this.responseText = {
                "status": "success",
                "gpg_keys_setup": Math.round(Math.random()) ? true : false,
                "public_key_published": Math.round(Math.random()) ? true : false,
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/setup_gpg",
        response: function() {
            this.responseText = {
                "status": "success"
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/publish_pk",
        response: function() {
            this.responseText = {
                "status": "success"
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/transmit_message",
        response: function() {
            this.responseText = {
                "status": "success"
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/mark_address_as_spam",
        response: function() {
            this.responseText = {
                "status": "success"
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });
    
    $.mockjax({
        url: "/delete_message",
        response: function() {
            this.responseText = {
                "status": "success"
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/check_peercoin_conf",
        response: function() {
            this.responseText = {
                "status": "success",
                "config":{
                    "gpg_suite_installed": Math.round(Math.random()) ? "good" : "bad",
                    "rpcuser": Math.round(Math.random()) ? "sunnyking" : "",
                    "rpcpassword": Math.round(Math.random()) ? "*******" : "",
                    "server": Math.round(Math.random()) ? "1" : "0",
                    "file_loc":"/Users/supersunny/Library/Application Support/PPCoin/ppcoin.conf",
                    "wallet_connected_status": Math.round(Math.random()) ? "good" : "bad"
                }
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });

    $.mockjax({
        url: "/config_automatic_setup",
        response: function() {
            this.responseText = {
                "status": "success",
                "config":{
                    "wallet_connected_status":"bad",
                    "gpg_suite_installed":"good",
                    "rpcuser":"sunnyking",
                    "rpcpassword":"*******",
                    "file_loc":"/Users/supersunny/Library/Application Support/PPCoin/ppcoin.conf",
                    "server":"1"
                }
            }
            if (Math.floor(Math.random() * 50) == 3) {
                //one in 50 generates server error
                this.status = 500;
            }
        },
    });
}