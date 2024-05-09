import { Button, Table } from "keep-react";
import OrderInlineCardTwo from "../../global/orders/OrderInlineCardTwo";
import { Cube } from "phosphor-react";
import SitePagination from "../../global/layout/SitePagination";

const SellsList = () => {
    return (
        <div>
            <Table>
                <Table.Caption>
                    <div className="my-5 flex items-center justify-between px-6">
                        <div className="flex items-center gap-5">
                            <h4 className="text-2xl font-semibold text-metal-600">Recent Sells</h4>
                        </div>
                        <div className="flex items-center gap-5">
                            <Button variant="outline" size="sm">
                                <span className="pr-2">
                                    <Cube size={24} />
                                </span>
                                New Sell
                            </Button>
                        </div>
                    </div>
                </Table.Caption>
                <Table.Head>
                    <Table.HeadCell className="">
                        <p className="text-body-5 font-medium text-metal-400">ID</p>
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
                    <OrderInlineCardTwo />
                </Table.Body>
            </Table>
            <SitePagination />
        </div>
    );
};

export default SellsList;