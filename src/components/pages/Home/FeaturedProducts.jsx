import { Button, Table } from "keep-react";
import { Cube } from "phosphor-react";
import ProductInlineCard from "../../global/products/ProductInlineCard";
import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedProducts = () => {
    const [recentProducts, setRecentProducts] = useState([])
    const getRecentProducts = async () => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/products/recent`).then((response) => {
            setRecentProducts(response.data)
        })
    }
    useEffect(() => {
        getRecentProducts()
    }, [])
    return (
        <Table showCheckbox={false}>
            <Table.Caption>
                <div className="my-5 flex items-center justify-between px-0">
                    <div className="flex items-center gap-5">
                        <p className="text-body-1 font-semibold text-metal-600">Recent Products</p>
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
                {
                    recentProducts.length ? recentProducts.map((product)=> <ProductInlineCard data={product} key={product._id} />): <Table.Row></Table.Row>
                }
            </Table.Body>
        </Table>
    );
};

export default FeaturedProducts;