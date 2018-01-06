var _0 = "https://ds.alipay.com/?from=mobilecodec&scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FsaId%3D10000007%26clientVersion%3D3.7.0.0718%26qrcode%3Dhttps%253A%252F%252Fqr.alipay.com%252Fc1x09096i5xwhsbvf380q57%253F_s%253Dweb-other";
var _1 = "https://ds.alipay.com/?from=mobilecodec&scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FsaId%3D10000007%26clientVersion%3D3.7.0.0718%26qrcode%3Dhttps%253A%252F%252Fqr.alipay.com%252Fc1x09096i5xwhsbvf380q57%253F_s%253Dweb-other";

function is_weixin() {
	if (/MicroMessenger/i.test(navigator.userAgent)) {
		return true
	} else {
		return false
	}
}

function is_android() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/(Android|SymbianOS)/i)) {
		return true
	} else {
		return false
	}
}

function is_ios() {
	var ua = navigator.userAgent.toLowerCase();
	if (/iphone|ipad|ipod/.test(ua)) {
		return true
	} else {
		return false
	}
}

function android_auto_jump() {
	WeixinJSBridge.invoke("jumpToInstallUrl", {}, function(e) {});
	window.close();
	WeixinJSBridge.call("closeWindow")
}

function ios_auto_jump() {
	if (_0 != "") {
		location.href = _0
	} else {
		window.close();
		WeixinJSBridge.call("closeWindow")
	}
}

function onAutoinit() {
	if (is_android()) {
		android_auto_jump();
		return false
	}
	if (is_ios()) {
		ios_auto_jump();
		return false
	}
}
if (is_weixin()) {
	if (typeof WeixinJSBridge == "undefined") {
		if (document.addEventListener) {
			document.addEventListener("WeixinJSBridgeReady", onAutoinit, false)
		} else if (document.attachEvent) {
			document.attachEvent("WeixinJSBridgeReady", onAutoinit);
			document.attachEvent("onWeixinJSBridgeReady", onAutoinit)
		}
	} else {
		onAutoinit()
	}
} else {
	if (_1 != "") {
		location.href = _1
	} else {
		window.close()
	}
}
