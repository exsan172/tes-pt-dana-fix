import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Components from "../../components"

const Auth = () => {
    const navigate = useNavigate()
    const [number, setNumber] = useState("")

    const setAuth = () => {
        if(number !== "") {
            localStorage.setItem("phoneNumber", number)
            navigate("/dashboard")

        } else {
            alert("Please insert number phone !")
        }
    }

    return (
        <div className="flex flex-col">
            <Components.Header/>
            <div className="flex w-full justify-center mt-20">
                <div className="flex w-11/12 md:w-6/12 lg:w-4/12 flex-col">
                    <div className="flex my-10 justify-center">
                        <span className="text-2xl font-semibold">Personal account for bussines</span>
                    </div>
                    <div className="flex shadow-md rounded-xl px-10 py-16 w-full border border-gray-100">
                        <div className="flex w-full">
                            <input type="text" placeholder="Phone Number" maxLength={15} value={number} onChange={(e) => setNumber(e.target.value)} className="px-4 py-2 border border-gray-200 rounded-sm text-sm  w-full mr-2"/>
                        </div>
                        <div className="flex">
                            <button className="bg-blue-800 px-7 py-2 rounded-lg min-w-[50px] md:min-w-[60px] lg:min-w-[100px] xl:min-w-[150px]" onClick={() => setAuth()}>
                                <span className="text-white text-sm">
                                    Next
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex w-full justify-center mt-5 mb-2">
                            <span>
                                Don't have account yet ?
                            </span>
                            <span className="text-blue-500 underline ml-2">
                                Sign up
                            </span>
                        </div>
                        <div className="flex w-full justify-center text-sm">
                            <span>
                                I aggree with
                            </span>
                            <span className="text-blue-500 underline mx-2">
                                Term and condition
                            </span>
                            <span>
                                and
                            </span>
                            <span className="text-blue-500 underline mx-2">
                                Privacy policy
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth