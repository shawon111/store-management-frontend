import { Button, Table } from "keep-react";
import OrderInlineCardTwo from "../../global/orders/OrderInlineCardTwo";
import { Cube } from "phosphor-react";
import SitePagination from "../../global/layout/SitePagination";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SellsList = () => {
    const [sells, setSells] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1)
    const getSells = async () => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/sell/${page}`).then((response) => {
            setSells(response.data)
        })
    }
    const getPageCount = async () => {
        try {
            axios.get(`${import.meta.env.VITE_BASE_URL}/sell/count`).then((response) => {
                setPageCount(response.data)
            })
        } catch (err) {
            console.log("something went wrong")
        }
    }
    useEffect(() => {
        getSells();
        getPageCount();
    }, [page])
    // handle page change
    const handlePageChange = (pageNo) => {
        setPage(pageNo);
    }
    // pagination showing condition
    const showPagination = Math.ceil(pageCount / 30);
    return (
        <div>
            <Table>
                <Table.Caption>
                    <div className="my-5 flex items-center justify-between px-6">
                        <div className="flex items-center gap-5">
                            <h4 className="text-2xl font-semibold text-metal-600">My Sells</h4>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link to="new">
                                <Button variant="outline" size="sm">
                                    <span className="pr-2">
                                        <Cube size={24} />
                                    </span>
                                    New Sell
                                </Button>
                            </Link>
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
                    {
                        sells.length ? sells.map((sell) => <OrderInlineCardTwo key={sell._id} data={sell} />) : <Table.Row></Table.Row>
                    }
                </Table.Body>
            </Table>
            <>
                {
                    showPagination > 1 ? <SitePagination page={page} handlePageChange={handlePageChange} count={pageCount} maxItem={30} /> : <div></div>
                }
            </>
        </div>
    );
};

export default SellsList;