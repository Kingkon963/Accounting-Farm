import { useState } from "react"

export const Log = () => {
    const [mesaage, setMessage] = useState("")
    console.log("start logging...")
    console.log(mesaage)

    return setMessage;
}