const HackerEffect = (id: any, delay: any) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const hackerElements = document.querySelectorAll(`[id=${id}]`);

    hackerElements.forEach((element: any) => {
        element.onmouseover = (event: any) => {
            let iterations = 0;

            const interval = setInterval(() => {
                event.target.innerText =
                    event.target.innerText.split("")
                         .map(( letter: any, index: any ) => {
                             if (index < iterations) return event.target.dataset.value[index];
                                else return letters[Math.floor(Math.random() * 26)];
                        })
                         .join("");

                if (iterations >= event.target.dataset.value.length) clearInterval(interval);
                iterations += 1 / delay;

            }, 30)
        }
    })
}

export default HackerEffect
