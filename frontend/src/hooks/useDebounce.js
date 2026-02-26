export default function useDebounce({fn,delay}) {
    const timer = setTimeout(()=>{
        fn()
    },delay) 

    return () => clearTimeout(timer)
}