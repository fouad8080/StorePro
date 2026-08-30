import { User , } from "lucide-react"
import { Link } from "react-router-dom"
function Sign_up(){
    return(
        <div className="flex w-full p-2 justify-center items-center min-h-screen bg-[rgb(226,249,226)] ">
            <div className="bg-white  rounded-2xl shadow-xl p-10 w-full max-w-md">
                <form className="w-full space-y-2">
                    <div className="text-center space-y-1">
                    <p className="text-green-700 font-semibold text-sm">Create Account</p>
                    <h1 className="text-2xl font-bold text-gray-900">Sign up for StockPro</h1>
                    <p className="text-sm text-gray-500">Create your account and start managing your Store</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700">First Name</label>
                            <div className="flex items-center mt-1 w-full border rounded-lg px-3 py-2 text-sm text-gray-500 hover:border-green-300 ">
                                <User className="w-5 h-5 text-gray-400  " />
                                <input type="text" placeholder="Enter your first name" className=" border-none focus:outline-none focus:ring-0" />
                            </div>
                            
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700">Last Name</label>
                            <div className="flex items-center mt-1 w-full border rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-0 ">
                                <User className="w-5 h-5 text-gray-400" />
                                <input type="text" placeholder="Enter your Last name" className=" border-none focus:outline-none focus:ring-0" />
                            </div>
                        </div>
                    </div>

                    <div>
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" placeholder="Enter your email" className="mt-1 w-full border rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600" />
                    </div>

                    <div>
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <input type="password" placeholder="Create a password" className="mt-1 w-full border rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600" />
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-500">Password strength: <span className="text-red-500 font-medium">Weak</span></span>
                        <div className="flex gap-1 flex-1">
                        <span className="h-1 flex-1 rounded bg-red-500"></span>
                        <span className="h-1 flex-1 rounded bg-gray-200"></span>
                        <span className="h-1 flex-1 rounded bg-gray-200"></span>
                        </div>
                    </div>
                    </div>

                    <div>
                    <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" className="mt-1 w-full border rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600" />
                    </div>

                    <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" defaultChecked className="accent-green-700" />
                    I agree to the <a href="#" className="text-green-700 font-medium">Terms of Service</a> and <a href="#" className="text-green-700 font-medium">Privacy Policy</a>
                    </label>

                    <button type="submit" className="w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-2.5 rounded-lg">Create Account</button>

                    <div className="relative text-center text-xs text-gray-400">
                    <span className="bg-white px-2 relative z-10">or sign up with</span>
                    <div className="absolute top-1/2 left-0 w-full border-t"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                    <button type="button" className="flex items-center justify-center gap-2 border rounded-lg py-2 text-sm font-medium text-gray-700">Google</button>
                    <button type="button" className="flex items-center justify-center gap-2 border rounded-lg py-2 text-sm font-medium text-gray-700">Apple</button>
                    </div>

                    <div className="flex justify-center items-center w-full text-center gap-1">
                        <p className=" text-gray-500">Already have an account?  </p> 
                        <Link to={"/loging/signin"}><button className=" text-green-500 "> Sign In</button></Link>
                    </div>
                </form>
            </div>
        </div>
        
    )
}
export default Sign_up