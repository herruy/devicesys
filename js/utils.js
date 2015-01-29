function Check() {
    MyTimer();
    CheckHighStorage();
    CheckLowStorage();
}

//判断cookie过期
function MyTimer() {
    var strUrl = "/Account/TimeOver";
    $.ajax({
        type: "POST",
        async: false,
        url: strUrl,
        success: function (data) {
            if (data == "1") {
                // window.clearInterval(timei);
                $.ligerDialog.confirm('登陆超时,请重新登陆', function (tip) {
                    if (tip == true) {
                        window.location.href = "/Account/Login";
                    }
                    else {
                        window.location.href = "/Account/Login";
                    }
                });
            }

        }
    });
}

function CheckHighStorage() {
    var strUrl = "/statistics/OverLoad";
    $.ajax({
        type: "POST",
        async: true,
        url: strUrl,
        success: function (data) {
            if (data.Total != 0) {
              $.ligerDialog.tip({ title: '积压警报', content: '点击这里查看详情，<a href="javascript:void(0)" onclick="DisplayHighStorage()">进入>></a>' });
             }
        }
    });
}

function CheckLowStorage() {
    var strUrl = "/statistics/LowLoad";
    $.ajax({
        type: "POST",
        async: true,
        url: strUrl,
        success: function (data) {
            if (data.Total != 0) {
                $.ligerDialog.tip({ title: '低储警报', content: '点击这里查看详情，<a href="javascript:void(0)" onclick="DisplayLowStorage()">进入>></a>' });
            }

        }
    });
}

function DisplayHighStorage() {
    $.ligerDialog.open({ height: 500, width: 800, url: '/statistics/HighWarnning' });
}

function DisplayLowStorage() {
    $.ligerDialog.open({ height: 500, width: 800, url: '/statistics/LowWarnning' });
}

