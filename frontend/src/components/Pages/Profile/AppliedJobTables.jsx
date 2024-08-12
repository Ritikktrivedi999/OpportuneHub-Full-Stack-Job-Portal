import { Badge } from "@/components/ui/badge";
import { Table,TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow  } from "@/components/ui/table"


const AppliedJobTables = () => {
   
    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1,2,3,4,5,6].length <= 0 ? <span>You haven`t applied any job yet.</span> : [1,2,3,4,5.6].map(() => (
                            <TableRow key="">
                                <TableCell>12-08-2024</TableCell>
                                <TableCell>Full Stack Devloper</TableCell>
                                <TableCell>Google</TableCell>
                                <TableCell className="text-right"><Badge className={`${[1,2,3,4,5,6].status === "rejected" ? 'bg-red-400' : [1,2,3,4,5,6].status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTables;