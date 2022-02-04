var createDom = document.createElement("a")
createDom.href = "javascript:void(0)"
createDom.style = "width:1px;height:1px;overflow:hidden;position:absolute;top:0px;left:0px"
createDom.innerHTML = "\n\t\t读屏软件用户请使用shift+2快捷键打开读屏功能\n\t"
document.body.prepend(createDom)

function r() {
    var d = document,
    r = d.getElementById("cniil_assist");
    (r = d.createElement("script")).type = "text/javascript",
    r.id = "cniil_assist",
    r.defer = !0,
    r.async = !0;
    if (window.setupWzaPath) {
        t = "blind=1" + (void 0 === c("read") ? "&snd=1": "")
        n = -1 == window.setupWzaPath.indexOf("?") ? "?": "&"
        window.setupWzaPath = window.setupWzaPath.replace(/blind=\d{1,}/gi, "")
        window.setupWzaPath += n + t
    }
    r.src = window.setupWzaPath,
    d.body.appendChild(r)
}
function c(t) {
    for (var e = (t = "acc" + t) ? void 0 : {},
    n = document.cookie ? document.cookie.split("; ") : [], i = 0, o = n.length; i < o; i++) {
        var s = n[i].split("="),
        a = decodeURIComponent(s.shift()),
        s = s.join("=");
        if (t && t === a) {
            e = s;
            break
        }
    }
    return e = e && !/[^\d]/.test(e) ? parseInt(e) : e
}
function onload() {
    if (window.setupWzaPath !== undefined) {
        r()
    } else {
        setTimeout(function(){
            onload()
        },1500)
    }
}
onload()