import { Button, Table } from "keep-react";
import { Cube } from "phosphor-react";
import SitePagination from "../../global/layout/SitePagination";
import ProductInlineCardTwo from "../../global/products/ProductInlineCardTwo";

const ProductList = () => {
    return (
        <div>
            <Table showCheckbox={false}>
                <Table.Caption>
                    <div className="my-5 flex items-center justify-between px-0">
                        <div className="flex items-center gap-5">
                            <h4 className="text-2xl font-bold text-metal-600">Products</h4>
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
                    <Table.HeadCell>
                        <p className="text-body-4 font-medium text-metal-400">ID</p>
                    </Table.HeadCell>
                    <Table.HeadCell className="max-w-[180px]">
                        <p className="text-body-4 font-medium text-metal-400">Title</p>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <p className="text-body-4 font-medium text-metal-400">Price</p>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <p className="text-body-4 font-medium text-metal-400">Stock</p>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <p className="text-body-4 font-medium text-metal-400">Action</p>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-gray-25 divide-y">
                    <ProductInlineCardTwo />
                </Table.Body>
            </Table>
            <SitePagination />
        </div>
    );
};

export default ProductList;