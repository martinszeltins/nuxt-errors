/**
 * Removes a key from a nested object or array of objects.
 */
const omitDeep = (obj: Record<string, any>, key: string) => {
    const keys = Object.keys(obj)
    const newObj = <Record<string, any>>{}

    keys.forEach((i: string) => {
        if (i !== key) {
            const val = obj[i]

            if (val instanceof Date) {
                newObj[i] = val
            } else if (Array.isArray(val)) {
                newObj[i] = omitDeepArrayWalk(val, key)
            } else if (typeof val === 'object' && val !== null) {
                newObj[i] = omitDeep(val, key)
            } else {
                newObj[i] = val
            }
        }
    })

    return newObj
}

/**
 * Removes a key from a nested array of objects.
 */
const omitDeepArrayWalk = (arr: any[], key: string): any => {
    return arr.map((val: any) => {
        if (Array.isArray(val)) {
            return omitDeepArrayWalk(val, key)
        } else if (typeof val === 'object') {
            return omitDeep(val, key)
        }

        return val
    })
}

/**
 * Get object using a period separated path.
 * e.g. "person.address.city"
 */
const getObjectByPath = (objectOrArray: Record<string, any> | any[], path: string | string[]): any => {
    try {
        const parts = Array.isArray(path) ? path : path.split('.')
    
        return parts.reduce((part: any, prop: any) => {
            return part[prop]
        }, objectOrArray)  
    } catch (error) {
        return null
    }
}

export { omitDeep, omitDeepArrayWalk, getObjectByPath }
