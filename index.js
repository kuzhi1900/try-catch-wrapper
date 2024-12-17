const tryCatch = (fn) => {
    try {
        return [null, fn()]
    } catch (err) {
        return [err, null]
    }
}

const tryCatchAsync = async (fn) => {
    try {
        return [null, await fn()]
    } catch (err) {
        return [err, null]
    }
}

export { tryCatch, tryCatchAsync }