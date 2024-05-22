import { Input } from "keep-react";
import Layout from "../../global/layout/Layout";
import { useState } from "react";
import SelectedProductsCard from "./SelectedProductsCard";

const AddNewSell = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    return (
        <div>
            <Layout>
                <section>
                    <h1 className="text-4xl font-bold">Create New Sell</h1>
                </section>
                <section className="py-[60px]">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-full lg:col-span-9">
                            <h3 className="text-2xl font-bold">Products</h3>
                            <form className="mt-[20px]">
                                <fieldset className="max-w-md space-y-1">
                                    <Input className="text-lg font-bolder" placeholder="Search Product" id="title" type="text" />
                                </fieldset>
                            </form>
                            <div className="mt-[20px]">
                                <SelectedProductsCard />
                            </div>
                        </div>
                        <div className="col-span-full lg:col-span-3">
                            <h3 className="text-2xl font-bold">Discount</h3>
                            <form className="mt-[20px]">
                                <fieldset className="max-w-md space-y-1">
                                    <Input className="text-lg font-bolder" placeholder="Discount Amount" defaultValue={0} id="title" type="number" /> 
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export default AddNewSell;