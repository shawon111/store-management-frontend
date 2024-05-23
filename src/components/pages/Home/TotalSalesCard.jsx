import axios from "axios";
import { Card } from "keep-react";
import { useEffect, useState } from "react";
import { LuArrowUpToLine } from "react-icons/lu";

const TotalSalesCard = () => {
    const [sales, setSales] = useState(0)
    const getSalesAmount = async() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/sell/month/selling`).then((response)=>{
            setSales(response.data)
        })
    }
    useEffect(()=>{
        getSalesAmount()
    }, [])
    return (
        <Card className="max-w-md rounded-lg">
            <Card.Content className='flex justify-between items-center'>
                <div className='w-[30%]'>
                    <div className={`bg-[#E5F8ED] w-[40px] h-[40px] flex items-center justify-center rounded-full`}>
                        <LuArrowUpToLine className="sales-card-icon" size={21}/>
                    </div>
                </div>
                <div className='w-[70%]'>
                    <Card.Title className='text-xl font-bold text-[18px] color-[#092c4c]'>
                        ${sales}
                    </Card.Title>
                    <Card.Description className='text-sm font-normal color-[#67748e]'>
                        Total Sale In This Month
                    </Card.Description>
                </div>
            </Card.Content>
        </Card>
    );
};

export default TotalSalesCard;