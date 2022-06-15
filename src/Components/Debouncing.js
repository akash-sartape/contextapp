import { useEffect } from "react"


export const useDebouncing = (effect,Arrdep,delay)=>{
    useEffect(()=>{
        const Timeclear = setTimeout(()=>{
             effect();
        },delay)
        return ()=>clearTimeout(Timeclear);
    },[...Arrdep || [],delay])

}