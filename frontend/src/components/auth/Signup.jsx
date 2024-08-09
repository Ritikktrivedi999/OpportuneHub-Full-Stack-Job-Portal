import Navbar from "../ui/shared/Navbar"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { RadioGroup } from "../ui/radio-group"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { useState } from "react"



const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        password: "",
        phoneNumber: "",
        role: "",
        file: ""
    })

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input);
        // const formData = new FormData();
        // formData.append('fullname', input.fullname);
        // formData.append('email', input.email);
        // formData.append('password', input.password);
        // formData.append('phoneNumber', input.phoneNumber);
        // formData.append('role', input.role);
        // formData.append('file', input.file);
        // try {
        //     const response = await fetch('http://localhost:3001/api/signup', {
        //         method: 'POST',
        //         body: formData
        //         });
        //         const data = await response.json();
        //         console.log(data);
        //         alert("Signup Successfull");
        //         window.location.href = "/login";
        //         } catch (error) {
        //             console.error(error);
        //             }

    }
    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form className="w-1/2 border border-gray-200 rounded-md my-10 p-4" onSubmit={submitHandler}>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label>Fullname</Label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Enter your full name"
                        />
                    </div>
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
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="format +91 7049950018"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="Enter Password"
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
                        <div className="flex items-center">
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                className="cursor-pointer"
                                onChange={changeFileHandler}
                            />
                        </div>
                    </div>
                    <Button className="w-full my-4">Signup</Button>
                    <span className="text-sm">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></span>
                </form>
            </div>

        </>
    )
}

export default Signup