import { User } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
function Signin(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    async function handleSubmit(e) {
        
        e.preventDefault();
        <Link to={"/dashboard"}></Link>

    }

    return(
        <div className="flex w-full p-2 justify-center items-center min-h-screen bg-[rgb(226,249,226)] ">
            <div className="bg-white  rounded-2xl shadow-xl p-10 w-full max-w-md">
                <form className="w-full space-y-2" onSubmit={handleSubmit}>
                    <div className="text-center space-y-1">
                    <p className="text-green-700 font-semibold text-sm">Welcome back !</p>
                    <h1 className="text-2xl font-bold text-gray-900">Sign in to your Account</h1>
                    <p className="text-sm text-gray-500">Enter your crentials to access your Account</p>
                    </div>

                    

                    <div>
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" className="mt-1 w-full border rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-0 " />
                    </div>

                    <div>
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Create a password" className="mt-1 w-full border rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-0" />
                    <button className=" text-green-500 text-sm ">
                        forgat password?
                    </button>
                    </div>

                    

                    <div className="flex gap-1.5 items-center ">
                        <input type="checkbox" className="focus:"/>
                        <p className="text-center text-gray-500 text-sm">Remeber me?</p>
                    </div>
                    <Link to={"/dashboard"}>
                        <button type="submit" className="w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-2.5 rounded-lg">Sign in</button>
                    </Link>
                    
                    <div className="relative text-center text-xs text-gray-400">
                    <span className="bg-white px-2 relative z-10">or sign up with</span>
                    <div className="absolute top-1/2 left-0 w-full border-t"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                    <button type="button" className="flex items-center justify-center gap-2 border rounded-lg py-2 text-sm font-medium text-gray-700">Google</button>
                    <button type="button" className="flex items-center justify-center gap-2 border rounded-lg py-2 text-sm font-medium text-gray-700">Apple</button>
                    </div>

                    <div className="flex justify-center items-center w-full text-center gap-1">
                        <p className=" text-gray-500">Don't have an account?</p> 
                        <Link to={"/loging/signup"}><button className=" text-green-500 ">Sign up</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signin
