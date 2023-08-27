/**
 * An asynchronous sleep function.
 * Can be useful to cause a fake delay when using async code.
 */
const sleep = (ms: number): Promise<any> => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export { sleep }
