import Layout from "../../global/layout/Layout";
import ProductForm from "./ProductForm";

const AddNewProduct = () => {
    return (
        <div>
            <Layout>
                <section>
                    <h1 className="text-3xl font-bold">Add New Product</h1>
                </section>
                <ProductForm/>
            </Layout>
        </div>
    );
};

export default AddNewProduct;