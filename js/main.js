
// 头部显示影藏
const topIcon = document.getElementsByClassName('top_icon')[0]
console.log(topIcon)
const Jevent = document.getElementsByClassName('J_event')[0]
topIcon.onclick = function () {
	Jevent.style.display = 'none'
}

// 二维码显示隐藏
const erweima = document.getElementsByClassName('erweima')[0]
const showErweima = document.getElementsByClassName('show-erweima')[0]
showErweima.onmouseenter = function () {
	erweima.style.display = 'block'
}
showErweima.onmouseleave = function () {
	erweima.style.display = 'none'
}