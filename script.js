const $ = document
const wrapperElem = $.querySelector('.wrapper')
const toastElem = $.querySelector('.toast')
const titleElem = $.querySelector('span')
const subTitleElem = $.querySelector('p')
const icon = $.querySelector('.icon')
const closeIcon = $.querySelector('.close-icon')
const durationBarElem = $.querySelector('.duration-bar')

const ajaxReq = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url).then(res => {
        // console.log(res.status);
        if (res.status === 200 || res.status < 300) {
            titleElem.textContent = 'You\'r online now'
            durationBarElem.style.backgroundColor = "#2ecc71"
            subTitleElem.textContent = 'Internet is connected :)'
            toastElem.classList.remove('offline')
            setInterval(() => {
                closeWrapper()
            }, 5000);
            icon.innerHTML = '<i class="uil uil-wifi"></i>'
        } else {
            offline()
        }
    })
    .catch(err => {
        console.log(err);
        offline()
    })
}

const offline = () => {
    wrapperElem.classList.remove('hide')
    durationBarElem.style.backgroundColor = "#ccc"
    titleElem.textContent = 'You\'r offline now'
    subTitleElem.textContent = 'Internet is not connected :('
    toastElem.classList.add('offline')
    setInterval(() => {
        closeWrapper()
    }, 5000);
    icon.innerHTML = '<i class="uil uil-slash"></i>'
}
const closeWrapper = () => {
    wrapperElem.classList.add('hide')
}

closeIcon.addEventListener('click', closeWrapper)
window.addEventListener('load', () => {
    ajaxReq()

})