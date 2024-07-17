import { useEffect, useState } from "react";

const useOnlineStatus=()=>{

    const[InternetStatus, setInternetStatus]=useState(true);

    useEffect(()=>{
   OnlineStatus();
},[])

const OnlineStatus=(()=>{
    window.addEventListener('offline',()=>
        {setInternetStatus(false)});

    window.addEventListener("online",()=>{
        setInternetStatus(true)
    })
}
)

return InternetStatus;
}

export default useOnlineStatus;