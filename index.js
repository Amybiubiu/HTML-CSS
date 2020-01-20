if(window.DeviceOrientationEvent){
    var lastAcc;    // 用来存储上一次的deviceorientation事件
    $(window).on('deviceorientation', function(event) {
        var delA = Math.abs(event.alpha - lastAcc.alpha);    // alpha轴偏转角
        var delB = Math.abs(event.beta - lastAcc.beta);    // beta轴偏转角
        var delG = Math.abs(event.gamma - lastAcc.gamma);    // gamma轴偏转角
        if ( (delA > 15 && delB > 15) || (delA > 15 && delG > 15) || (delB > 15 || delG > 15)) {
            // 用户设备摇动了，触发响应操作
            // 此处的判断依据是任意两个轴篇转角度大于15度
            alert('摇了');
        }
        lastAcc = event;    // 存储上一次的event
    })}
    
    if(window.DeviceMotionEvent) {
        var speed = 25;    // 用来判定的加速度阈值，太大了则很难触发
        var x, y, z, lastX, lastY, lastZ;
        x = y = z = lastX = lastY = lastZ = 0;
    
        window.addEventListener('devicemotion', function(event){
            var acceleration = event.accelerationIncludingGravity;
            x = acceleration.x;
            y = acceleration.y;
            if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
                // 用户设备摇动了，触发响应操作
                // 此处的判断依据是用户设备的加速度大于我们设置的阈值
                alert('摇了');
            }
            lastX = x;
            lastY = y;
        }, false);
    };
console.log("abc");