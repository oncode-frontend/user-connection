const $ = document
const wrapperElem = $.querySelector('.wrapper')
const toastElem = $.querySelector('.toast')
const titleElem = $.querySelector('span')
const subTitleElem = $.querySelector('p')
const icon = $.querySelector('icon')
const closeIcon = $.querySelector('.close-icon')

const ajaxReq = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url).then(res => {
        if (res.status === 200 || res.status < 300) {
            titleElem.textContent = 'You\'r online now'
            subTitleElem.textContent = 'Internet is connected.'
            toastElem.classList.remove('offline')
            setInterval(() => {
                closeWrapper()
            }, 5000);
        }
    })
    .catch(err => {
        console.error('=>' + err);
    })
}

const closeWrapper = () => {
    wrapperElem.classList.add('hide')
}

closeIcon.addEventListener('click', closeWrapper)
window.addEventListener('load', ajaxReq)