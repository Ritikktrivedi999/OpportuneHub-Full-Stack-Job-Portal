import { Badge } from '@/components/ui/badge';
import { Table, TableCaption, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table';
import { useSelector } from 'react-redux';

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector(store => store.job);

    // Loading state or when data is not yet available
    if (!allAppliedJobs) {
        return <span>Loading...</span>;
    }

    // Empty state
    if (allAppliedJobs.length === 0) {
        return <span>You haven’t applied to any jobs yet.</span>;
    }

    // Main table rendering
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
                    {allAppliedJobs.map(appliedJob => (
                        <TableRow key={appliedJob._id}>
                            <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                            <TableCell>{appliedJob.job?.title}</TableCell>
                            <TableCell>{appliedJob.job?.company?.name}</TableCell>
                            <TableCell className="text-right">
                                <Badge
                                    className={`${
                                        appliedJob?.status === "rejected" 
                                        ? 'bg-red-400' 
                                        : appliedJob?.status === 'pending' 
                                        ? 'bg-gray-400' 
                                        : 'bg-green-400'
                                    }`}
                                >
                                    {appliedJob.status.toUpperCase()}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default AppliedJobTable;
