export const report=(message)=>{
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        // dev code
        console.log(message)
    } else {
        // production code
    }
}