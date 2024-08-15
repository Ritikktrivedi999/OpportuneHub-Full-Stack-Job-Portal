import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/shared/Navbar";
import { useSelector } from "react-redux";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import UpdateProfileDialog from "./UpdateProfileDialog";
import AppliedJobTables from "./AppliedJobTables";


 

const Profile = () => {
    const [open, setOpen] = useState(false);
    const {user} = useSelector(store => store.auth);
    const handleDialogOpen = () => {
        setOpen(true); 
    };

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                        <AvatarImage
                             src={user?.avatarUrl || "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"} alt="profile" 
                            />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname }</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={handleDialogOpen} className="text-right" variant="outline"><Pen /></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email }</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber }</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {user?.profile?.skills.length !== 0 ? user?.profile.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>}
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {user?.profile?.resume ? (
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href={user?.profile?.resume} 
                            className='text-blue-500 w-full hover:underline cursor-pointer'>
                            {user?.profile?.resumeOriginalName || "View Resume"}
                        </a>
                    ) : (
                        <span>NA</span>
                    )}
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <AppliedJobTables/>
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile;
