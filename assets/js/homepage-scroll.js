window.onscroll = () => {
    scroll()
}

const header = document.getElementsByTagName("header")[0]

function scroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.remove("opacity-80")
    } else {
        header.classList.add("opacity-80")
    }
}