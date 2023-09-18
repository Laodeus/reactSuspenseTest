type Wait = (ms: number) => Promise<void>

const wait: Wait = (ms)=> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default wait