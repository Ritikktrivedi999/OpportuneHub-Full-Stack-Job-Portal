import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { USER_API_END_POINT } from "@/components/utils/constant"
import { setUser } from "@/redux/authSlice"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth || {});
    const [input, setInput] = useState({
        fullname: user?.fullname || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.join(", ") || "",
        // skills: user?.profile?.skills?.map(skill => skill) || "",
        file: user?.resume || ""
    });


    const dispatch = useDispatch();
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleFileChange = (e) => {
        setInput({ ...input, file: e.target.files?.[0] })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', input.fullname);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('bio', input.bio);
        formData.append('skills', input.skills);
        if (input.file) {
            formData.append('file', input.file);
        }
        try {
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
        setOpen(false);

        console.log(input);
    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-[425pc]" onInteractOutside={() => setOpen(false)}>
                <DialogHeader>
                    <DialogTitle>Update Profile</DialogTitle>
                </DialogHeader>
                <form onSubmit={submitHandler}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-3">
                            <Label htmlFor="fullname" className="text-right">Name</Label>
                            <Input
                                id="fullname"
                                name="fullname"
                                className="col-span-3"
                                type="text"
                                value={input.fullname}
                                onChange={changeEventHandler}
                            />

                        </div>
                        <div className="grid grid-cols-4 items-center gap-3">
                            <Label htmlFor="name" className="text-right">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                className="col-span-3"
                                type="email"
                                value={input.email}
                                onChange={changeEventHandler}
                            />

                        </div>
                        <div className="grid grid-cols-4 items-center gap-3">
                            <Label htmlFor="name" className="text-right">Phone No.</Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                className="col-span-3"
                                value={input.phoneNumber}
                                onChange={changeEventHandler}
                            />

                        </div>
                        <div className="grid grid-cols-4 items-center gap-3">
                            <Label htmlFor="name" className="text-right">Bio</Label>
                            <Input
                                id="bio"
                                name="bio"
                                className="col-span-3"
                                type="text"
                                value={input.bio}
                                onChange={changeEventHandler}
                            />

                        </div>
                        <div className="grid grid-cols-4 items-center gap-3">
                            <Label htmlFor="name" className="text-right">Skills</Label>
                            <Input
                                id="skills"
                                name="skills"
                                className="col-span-3"
                                value={input.skills}
                                onChange={changeEventHandler}
                            />

                        </div>
                        <div className="grid grid-cols-4 items-center gap-3">
                            <Label htmlFor="name" className="text-right">Resume</Label>
                            <Input
                                id="file"
                                name="file"
                                type="file"
                                accept="application/pdf"
                                className="col-span-3"
                                value={input.file}
                                onChange={handleFileChange}
                            />

                        </div>
                    </div>
                    <DialogFooter>
                        {
                            loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button> : <Button type="submit" className="w-full my-4">Update</Button>

                        }
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateProfileDialog;
