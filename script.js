const $ = document
const wrapperElem = $.querySelector('.wrapper')
const toastElem = $.querySelector('.toast')
const titleElem = $.querySelector('span')
const subTitleElem = $.querySelector('p')
const icon = $.querySelector('icon')
const closeIcon = $.querySelector('.close-icon')

window.addEventListener('load', () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const ajaxReq = () => {
        fetch(url).then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error('=>' + err);
        })
    }

    ajaxReq()
})