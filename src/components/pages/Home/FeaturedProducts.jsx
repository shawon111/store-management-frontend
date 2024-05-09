import { Button, Table } from "keep-react";
import { Cube } from "phosphor-react";
import SellInlineCard from "../../global/sells/SellInlineCard";

const FeaturedProducts = () => {
    return (
        <Table showCheckbox={false}>
            <Table.Caption>
                <div className="my-5 flex items-center justify-between px-0">
                    <div className="flex items-center gap-5">
                        <p className="text-body-1 font-semibold text-metal-600">Featured Products</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <Button variant="outline" size="sm">
                            <span className="pr-2">
                                <Cube size={24} />
                            </span>
                            New Product
                        </Button>
                        <Button variant="outline" size="sm">
                            <span className="pr-2">
                                <Cube size={24} />
                            </span>
                            Search
                        </Button>
                    </div>
                </div>
            </Table.Caption>
            <Table.Head>
                <Table.HeadCell className="max-w-[180px]">
                    <p className="text-body-5 font-medium text-metal-400">Title</p>
                </Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Stock</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-gray-25 divide-y">
                <SellInlineCard />
            </Table.Body>
        </Table>
    );
};

export default FeaturedProducts;