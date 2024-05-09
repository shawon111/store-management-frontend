import { Table } from "keep-react";
import OrderInlineCard from "../../global/orders/OrderInlineCard";

const RecentOrders = () => {
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
                    <p className="text-body-5 font-medium text-metal-400">Sells no.</p>
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
                <OrderInlineCard />
            </Table.Body>
        </Table>
    );
};

export default RecentOrders;