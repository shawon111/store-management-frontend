import axios from 'axios';
import { Card } from 'keep-react';
import { useEffect, useState } from 'react';
import { LuArrowDownFromLine } from "react-icons/lu";

const TotalExpenseCard = () => {
    const [expenses, setExpenses] = useState(0)
    const getExpenseAmount = async () => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/sell/month/purchasing`).then((response)=>{
            setExpenses(response.data)
        })
    }
    useEffect(()=>{
        getExpenseAmount()
    }, [])
    return (
        <Card className="max-w-md rounded-lg">
            <Card.Content className='flex justify-between items-center'>
                <div className='w-[30%]'>
                    <div className={`bg-[#FEEDED] w-[40px] h-[40px] flex items-center justify-center rounded-full`}>
                        <LuArrowDownFromLine className="expense-card-icon" size={21}/>
                    </div>
                </div>
                <div className='w-[70%]'>
                    <Card.Title className='text-xl font-bold text-[18px] color-[#092c4c]'>
                        ${expenses}
                    </Card.Title>
                    <Card.Description className='text-sm font-normal color-[#67748e]'>
                        Total Expense In This Month
                    </Card.Description>
                </div>
            </Card.Content>
        </Card>
    );
};

export default TotalExpenseCard;