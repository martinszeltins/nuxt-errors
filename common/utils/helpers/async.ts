/**
 * Watches a condition and waits until it is true
 * and then executes the callback function.
 */
const waitUntil = (watchSource: () => boolean): Promise<void> => {
    return new Promise((resolve, reject) => {
        let timePassed = 0
        let interval: number

        // eslint-disable-next-line prefer-const
        interval = window.setInterval(() => {
            if (watchSource() === true) {
                clearInterval(interval)
                resolve()
            }

            timePassed++

            // Give up after 6 seconds
            if (timePassed > 60) {
                clearInterval((interval))
                reject()
            }
        }, 100)
    })
}

export { waitUntil }
