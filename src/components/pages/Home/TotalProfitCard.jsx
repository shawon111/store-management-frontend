import axios from "axios";
import { Card } from "keep-react";
import { useEffect, useState } from "react";
import { CiBadgeDollar } from "react-icons/ci";

const TotalProfitCard = () => {
    const [profit, setProfit] = useState(0)
    const getProfitAmount = async() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/sell/month/profit`).then((response)=>{
            setProfit(response.data)
        })
    }
    useEffect(()=>{
        getProfitAmount()
    }, [])
    return (
        <Card className="max-w-md rounded-lg">
            <Card.Content className='flex justify-between items-center'>
                <div className='w-[30%]'>
                    <div className={`bg-[#E0F9FC] w-[40px] h-[40px] flex items-center justify-center rounded-full`}>
                        <CiBadgeDollar className="profit-card-icon" size={21}/>
                    </div>
                </div>
                <div className='w-[70%]'>
                    <Card.Title className='text-xl font-bold text-[18px] color-[#092c4c]'>
                        ${profit}
                    </Card.Title>
                    <Card.Description className='text-sm font-normal color-[#67748e]'>
                        Total Profit In This Month
                    </Card.Description>
                </div>
            </Card.Content>
        </Card>
    );
};

export default TotalProfitCard;