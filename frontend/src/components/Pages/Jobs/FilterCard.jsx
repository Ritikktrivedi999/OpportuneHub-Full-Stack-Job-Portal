import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { setSearchedQuery } from "@/redux/jobSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const filterData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Indore"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer", "Software Developer", "Data Science", "Technical Support"]
    },
    {
        fitlerType: "Salary",
        array: ["0-10 LPA", "10-20 LPA", "20-50 LPA"]
    },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] =useState('');
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [dispatch,selectedValue]);

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup  value={selectedValue} onValueChange={changeHandler}>
                {
                    filterData.map((data, index) => (
                        <div key={index}>
                            <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
                            {
                                data.array.map((item, index) => {
                                    const itemId = `id${index}-${index}`

                                    return (
                                        <div key={index} className='flex items-center space-x-2 my-2'>
                                            <RadioGroupItem value={item} id={itemId}/>
                                                <Label htmlFor={itemId}>{item}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    ))
                }
           </RadioGroup>
        </div>


    )
}

export default FilterCard