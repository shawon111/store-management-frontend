/* eslint-disable no-unused-vars */
import { Button, Input, Table } from "keep-react";
import Layout from "../../global/layout/Layout";
import { useEffect, useState } from "react";
import SelectedProductsCard from "./SelectedProductsCard";
import axios from "axios";
import ProductSelectionCard from "./ProductSelectionCard";
import { generateSellID } from "../../../lib/generateSellID";
import { toast } from "react-toastify";

const AddNewSell = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(false);

    // handle search
    const handleProductSearch = async (text) => {
        try {
            axios.get(`${import.meta.env.VITE_BASE_URL}/products/all/search?s=${text}`).then((response) => {
                setSearchResult(response.data)
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    // handle product selection
    const handleProductSelection = (product) => {
        const newProduct = product;
        newProduct.quantity = 1;
        const previouslySelected = selectedProducts;
        const updatedSelectedProducts = [...previouslySelected, newProduct];
        setSelectedProducts(updatedSelectedProducts)
        setSearchResult([])
    }

    // update single product quantity
    const updateSingleProductQty = (id, qty) => {
        const selectedProductsList = selectedProducts;
        for (const product of selectedProductsList) {
            if (product._id === id) {
                product.quantity = qty;
            }
        }
        setSelectedProducts(selectedProductsList);
        handleGrandTotal()
    }

    // update single product price
    const updateSingleProductPrice = (id, price) => {
        const selectedProductsList = selectedProducts;
        for (const product of selectedProductsList) {
            if (product._id === id) {
                product.sellingPrice = price;
            }
        }
        setSelectedProducts(selectedProductsList);
        handleGrandTotal();
    }

    // calculate grand total
    useEffect(() => {
        handleGrandTotal();
        console.log("rendered")
    }, [selectedProducts, discount])

    const handleGrandTotal = () => {
        if (selectedProducts.length < 1) {
            setGrandTotal(0)
        }
        else {
            let newTotal = 0;
            for (const product of selectedProducts) {
                newTotal = newTotal + (product.quantity * product.sellingPrice)
            }
            const newTotalAfterDiscount = newTotal - discount;
            if (newTotalAfterDiscount <= 0) {
                setGrandTotal(0)
            } else {
                setGrandTotal(newTotalAfterDiscount)
            }
        }
    }

    // create sell
    const handleCreateSell = async () => {
        // set loading state
        setIsLoading(true)
        // add required key in product objects and calculate total selling and purchase pricing
        const allProducts = selectedProducts;
        let totalSellingPrice = 0;
        let totalPurchasePrice = 0;
        for (const product of allProducts) {
            product.productId = product._id;
            product.total = (product.quantity * product.sellingPrice);
            totalSellingPrice = totalSellingPrice + (product.sellingPrice * product.quantity);
            totalPurchasePrice = totalPurchasePrice + (product.purchasePrice * product.quantity);
        }

        // calculate profit
        const totalProfit = grandTotal - totalPurchasePrice;
        // generate unique sell id
        const getUSI = generateSellID()
        // prepare sell data
        const sellData = {
            products: allProducts,
            discount: discount,
            totalPurchasePrice: totalPurchasePrice,
            totalSellingPrice: totalSellingPrice,
            total: grandTotal,
            profit: totalProfit,
            currency: "BDT",
            usi: getUSI
        }
        // save the sell
        try {
            axios.post(`${import.meta.env.VITE_BASE_URL}/sell/add`, sellData).then((response) => {
                // set loading state
                setIsLoading(false)
                setDiscount(0)
                setSelectedProducts([])
                // show toast message
                toast.success('Sell added successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
        } catch (err) {
            // set loading state
            setIsLoading(false)
            toast.success('something is wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div>
            <Layout>
                <section>
                    <h1 className="text-4xl font-bold">Create New Sell</h1>
                </section>
                <section className="py-[60px]">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-full lg:col-span-9 relative">
                            <h3 className="text-2xl font-bold">Find Products</h3>
                            <form className="mt-[20px]">
                                <fieldset className="max-w-md space-y-1">
                                    <Input className="text-lg font-bolder" placeholder="Search Product" id="title" type="text" onChange={(e) => handleProductSearch(e.target.value)} />
                                </fieldset>
                            </form>
                            <div className="absolute top-[105px] left-0 w-full z-10">
                                {
                                    searchResult.length ? searchResult.map((product) => <ProductSelectionCard key={product._id} data={product} handleProductSelection={handleProductSelection} />) : ""
                                }
                            </div>
                            <div className="mt-[20px]">

                                <Table showCheckbox={false}>
                                    <Table.Head>
                                        <Table.HeadCell>
                                            <p className="text-body-3 font-bolder text-black">Product Name</p>
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            <p className="text-body-3 font-bolder text-black">Quantity</p>
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            <p className="text-body-3 font-bolder text-black">Price</p>
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-gray-25 divide-y">
                                        {
                                            selectedProducts.length ? selectedProducts.map((product) => <SelectedProductsCard key={product._id} data={product} updateQty={updateSingleProductQty} updatePrice={updateSingleProductPrice} />) : <Table.Row></Table.Row>
                                        }
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        <div className="col-span-full lg:col-span-3">
                            <h3 className="text-2xl font-bold">Discount</h3>
                            <form className="mt-[20px]">
                                <fieldset className="max-w-md space-y-1">
                                    <Input className="text-lg font-bolder" placeholder="Discount Amount" defaultValue={discount} onChange={(e) => setDiscount(e.target.value < 0 || !e.target.value ? 0 : parseFloat(e.target.value))} id="title" type="number" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="py-6">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-full lg:col-span-6">
                            <h2 className="text-[2rem] text-black font-bold">Total: {grandTotal}</h2>
                        </div>
                        <div className="col-span-full lg:col-span-6">
                            <div className="flex justify-end">
                                <Button disabled={isLoading} color="primary" onClick={() => handleCreateSell()}>
                                    {
                                        isLoading ? "Creating sell..." : "Create Sell"
                                    }
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export default AddNewSell;