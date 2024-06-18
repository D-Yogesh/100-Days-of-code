let progressBar = document.getElementById('progress')

const updateProgress = () => {
    progressBar.style.display = 'block';
    let scrollPosition = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolledHeight = (scrollPosition / height) * 100;

    progressBar.style.width = `${scrolledHeight}%`;

    console.log(scrolledHeight)

}

window.addEventListener('scroll', updateProgress)
