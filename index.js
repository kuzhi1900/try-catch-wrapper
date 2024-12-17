export const tryCatch = (fn) => {
    try {
        return [null, fn()]
    } catch (err) {
        return [err, null]
    }
}

export const tryCatchAsync = async (fn) => {
    try {
        return [null, await fn()]
    } catch (err) {
        return [err, null]
    }
}
