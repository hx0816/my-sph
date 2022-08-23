// 防抖
export function debounce(callback, delay) {
    let timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback.call(this,arguments[0])
        }, delay)
    }
}
//节流
export function throttle(callback,delay){
    let lastTime
    return function(){
        let nowTime = Date.now()
        if(!lastTime || nowTime-lastTime >= delay){
            callback.call(this,arguments[0])
            lastTime = nowTime
        }
    }
}