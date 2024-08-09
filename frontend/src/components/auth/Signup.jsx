import Navbar from "../ui/shared/Navbar"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"



const Signup = () => {
    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form className="w-1/2 border border-gray-200 rounded-md my-10 p-4" action="">
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label>Fullname</Label>
                        <Input
                            type="text"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="flex item-center justify-between">
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="comfortable" id="r2" />
                                <Label htmlFor="r2">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="compact" id="r3" />
                                <Label htmlFor="r3">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className="flex items-center">
                        <Label>Profile</Label>
                        <Input
                        accept="image/"
                        type="file"
                        className="cursor-pointer"   
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