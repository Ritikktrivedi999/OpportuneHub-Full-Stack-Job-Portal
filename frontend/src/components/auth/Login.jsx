import Navbar from "../ui/shared/Navbar"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { RadioGroup } from "../ui/radio-group"
import { Button } from "../ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import axios from "axios"
import { USER_API_END_POINT } from "../utils/constant"
import { setLoading, setUser } from "@/redux/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { Loader2 } from "lucide-react"




const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading, user } = useSelector(store => store.auth || {});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }


    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            })
            if (res.data.success) {
                dispatch(setUser(res.data.user))
                navigate("/")
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            const errorMessage = error.response?.data?.message || "An unexpected error occurred. Please try again later.";
            toast.error(errorMessage);
        } finally {
            dispatch(setLoading(false));
        }

    }
    useEffect(()=>{
 if(user){
    navigate("/")
 }
    },[])

    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form className="w-1/2 border border-gray-200 rounded-md my-10 p-4" onSubmit={submitHandler}>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>

                    </div>
                    {
                        loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button> : <Button type="submit" className="w-full my-4">Login</Button>
                    }

                    <span className="text-sm">Dont`t have an account? <Link to="/signup" className="text-blue-600">Signup</Link></span><hr/>
                    <span className="text-sm text-red-600">
  To login as Admin/Recruiter: Use Email: <strong>ritiktest@gmail.com</strong> and password: <strong>Ritik@123</strong>
  <br />
  As a student: Use Email: <strong>user2test@gmail.com</strong> and password: <strong>User2@123</strong>
</span>

</form>
              
            </div>

        </>
    )
}

export default Login