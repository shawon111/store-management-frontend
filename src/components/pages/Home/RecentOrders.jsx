import { Table } from "keep-react";
import OrderInlineCard from "../../global/orders/OrderInlineCard";
import axios from "axios";
import { useEffect, useState } from "react";

const RecentOrders = () => {
    const [recentSells, setRecentSells] = useState([])
    const getRecentSells = async() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/sell/recent`).then((response)=>{
            setRecentSells(response.data)
        })
    }
    useEffect(()=>{
        getRecentSells()
    }, [])
    return (
        <Table>
            <Table.Caption>
                <div className="my-5 flex items-center justify-between px-6">
                    <div className="flex items-center gap-5">
                        <p className="text-body-1 font-semibold text-metal-600">Recent Sells</p>
                    </div>
                </div>
            </Table.Caption>
            <Table.Head>
                <Table.HeadCell className="">
                    <p className="text-body-5 font-medium text-metal-400">Sells ID.</p>
                </Table.HeadCell>
                <Table.HeadCell>
                    Date
                </Table.HeadCell>
                <Table.HeadCell>
                    Total Price
                </Table.HeadCell>
                <Table.HeadCell>
                    Profit
                </Table.HeadCell>
                <Table.HeadCell>
                    Action
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-gray-25 divide-y">
                {
                    recentSells.length ? recentSells.map((sell)=> <OrderInlineCard data={sell} key={sell._id} />): <Table.Row></Table.Row>
                }
            </Table.Body>
        </Table>
    );
};

export default RecentOrders;