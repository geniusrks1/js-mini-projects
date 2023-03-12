const updateProgress = delayInSeconds => {
    let atPercent = 0;
    const progressBar = document.querySelector(".progressBar");

    const interval = setInterval(() => {
        atPercent++;
        progressBar.style.width = `${atPercent}%`;
        progressBar.style.innerText = `${atPercent}%`;

        if (atPercent >= 100) {
            clearInterval(interval);
        }
    }, (delayInSeconds * 1000) / 100);
}