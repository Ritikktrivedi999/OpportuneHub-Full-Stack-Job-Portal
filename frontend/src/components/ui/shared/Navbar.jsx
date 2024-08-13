import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../avatar";
import { Button } from "../button";
import { LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
   const {user} = useSelector(store => store.auth || {});
    const isAuthenticated = Boolean(user); 

    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold '>Opportune<span className='text-[#F83002]'>Hub</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/browse">Browse</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>

                    {
                        !isAuthenticated ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant="outline">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#7948ce] hover:bg-[#4d09c4] ">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.avatarUrl || "https://github.com/shadcn.png"} alt={user?.name || "User"} />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-83">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src={user?.avatarUrl || "https://github.com/shadcn.png"} alt={user?.fullname || "User"} />
                                        </Avatar>
                                        <div>
                                            <h4 className="font-medium">{user.fullname}</h4>
                                            <p className="text-sm text-muted-foreground">Welcome, {user.fullname}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col my-2 text-gray-600">
                                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                                            <User2 />
                                            <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                                        </div>
                                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                                            <LogOut />
                                            <Button variant="link">Logout</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>
        </div>
    );
}

export default Navbar;
