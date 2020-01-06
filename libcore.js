//---------------------Global Vars-------------------------
//需要拦截检查视频
var NeedInterceptCheckVideo = false;
var REGREX_IQY = [ 
    new RegExp(".*t7z.cupid.iqiyi.com.*?","i")
];
var REGREX_VQQ = [
    new RegExp(".*livew.l.qq.com/livemsg.*?","i"),
    new RegExp(".*btrace.video.qq.com.*?","i")
]
//---------------------------------------------------------

//脚本被加载
function OnLoad() {
    app.log("加载完成");
}

//是否允许打开一个新的网址
function OnLoadUrl(webView,request) {
    var schema = request.getUrl().getScheme();
    //非HTTP类型的都禁止打开
    if(!schema.startsWith("http")){
        return true;
    }
    //允许打开URL
    return false;
}

//低版本的API处理
function OnLoadUrl2(webView,androidUrl) {
    var schema =  androidUrl.getScheme();
    //非HTTP类型的都禁止打开
    if(!schema.startsWith("http")){
        return true;
    }
    //允许打开URL
    return false;
}

//Block爱奇艺广告
function BlockAD_IQY(text) {
    try{
        var reg_val = /(.*\()(\{.*\})/i;
        if( (result = reg_val.exec(text)) != null ) {
            var oldHeader = result[1];
            var jsonValue = result[2];
            //错误的格式
            if(!oldHeader || !jsonValue) return false;
            //转换为JSON
            jsonValue = JSON.parse(jsonValue);
            if(!jsonValue) return false;    
            //开始处理，先判断一下版本，目前只支持最新的3.0
            var haveAd = false;
            var version = jsonValue.v;
            if( version == "3.0") {
                var s = jsonValue.s;
                for(var i = 0; i < s.length; i++){
                    var vItem = s[i];
                    var adList = vItem.a;
                    if( adList && adList.length > 0 ){
                        s.splice(i,1);
                        haveAd = true;
                    }
                }
            }
            if( haveAd ){
                var dv = JSON.stringify(jsonValue);
                return oldHeader + dv + ")";
            }
        }
        return text;
    } catch(e) {
        return "";
    }
}

//Block腾讯视频广告
function Block_VQQ(text){
    try{
        var reg_val = /(.*\()(\{.*\})/i;
        if( (result = reg_val.exec(text)) != null ) {
            var oldHeader = result[1];
            var jsonValue = result[2];
            //错误的格式
            if(!oldHeader || !jsonValue) return false;
            
            //转换为JSON
            jsonValue = JSON.parse(jsonValue);
            if(!jsonValue) return false; 

            var haveAd = false;
            var adlist = jsonValue.adList;
            if( adlist ) {
                var s = adlist.item;
                if( s ) {
                    s.splice(0,s.length);
                    haveAd = true;       
                }
            }
            var adLoc = jsonValue.adLoc;
            if( adLoc ){
                adLoc.iCheckLogin = 0,
                adLoc.iCheckUser = 0,
                adLoc.iVipInfoRsp = 1,
                adLoc.isvip = 1;
                haveAd = true;
            }
            if( haveAd ){
                var dv = JSON.stringify(jsonValue);
                return oldHeader + dv + ")";
            }
        }
        return text;
    } catch(e) {
        return "";
    }
}

//参数1:webView是不靠谱的。可能会为空在ServiceWorkder线程中
//拦截一个请求、JS文件等。支持拦截ServiceWorker中的请求
function OnInterceptRequest(webView,request,webUrl,isFromMainFrame,isGet,scheme) {
    //是视频网站要检查
    if(NeedInterceptCheckVideo){
        //爱奇艺广告BLOCK
        if(REGREX_IQY[0].test(webUrl)) {
            var client = new Http(webUrl,"get").run();
            if(client){
                return ["application/json","utf-8",BlockAD_IQY(client)];
            }
        } else if(REGREX_VQQ[0].test(webUrl)) {
            var client = new Http(webUrl,"get").run();
            if(client){
                return ["text/json","utf-8",Block_VQQ(client)];
            }
        } else if(REGREX_VQQ[1].test(webUrl)) {
            return ["","",""];
        }
        else{
            if (webUrl.lastIndexOf("chunk-vendors.") > 0 ){
                return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.001/iqy/chunk-vendors.min.js"];
            } else if (webUrl.lastIndexOf("chunk-video") > 0 ){
                return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.001/iqy/chunk-video.min.js"];
            } else if (webUrl.lastIndexOf("appPl.") > 0 ){
                return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.001/iqy/appPl.min.js"];
            } else if (webUrl.lastIndexOf("main.") > 0 ){
                return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.001/iqy/main.min.js"];
            } else if (webUrl.lastIndexOf("chunk-common.") > 0 ){
                return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.001/iqy/chunk-common.min.js"];
            } else if (webUrl.lastIndexOf("appPs.") > 0 ){
                return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.001/iqy/appPs.min.js"];
            } else if (webUrl.lastIndexOf("appP.") > 0 ){
                return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.001/iqy/appP.min.js"];
            } else if (webUrl.lastIndexOf("chunk-play.") > 0 ){
                return [request,"https://cdn.jsdelivr.net/gh/qgsoft/QGScripts@0.001/iqy/chunk-play.min.js"];
            }
        }
    }
    return false;
}

//进入一个新的网站
function OnUrlChange(url){
    NeedInterceptCheckVideo = false;
    //进入爱奇艺
    if(url.indexOf("iqiyi")>=0){
        app.SetCookies(".iqiyi.com",["P00003=1;","P00002=1;"]);
        NeedInterceptCheckVideo = true;
        app.SetInterceptResource(false);
    } else if (url.indexOf("v.qq.com")>=0){
        NeedInterceptCheckVideo = true;
        app.SetInterceptResource(false);
    }
    else {
        app.SetInterceptResource(true);
    }
}

//页面开始加载
function OnPageStart(webView,url) {

}

//一个页面加载完成
function OnPageLoadComplete() {

}