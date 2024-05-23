import axios from "axios";
import { Input, Label } from "keep-react";
import { useState } from "react";

const ProductForm = () => {
    // states
    const [title, setTitle] = useState('');
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [sellPrice, setSellPrice] = useState(0);
    const [stock, setStock] = useState(0);

    // handle form
    const handleAddProduct = async(e)=> {
        e.preventDefault();
        try{
            axios.post(`${import.meta.env.VITE_BASE_URL}/products/add`,{
                title: title,
                purchasePrice: purchasePrice,
                sellingPrice: sellPrice,
                stock: stock
            }).then((response)=> {
                console.log("product_post_log",response.data)
            })
        }catch(err){
            console.log(err)
        }
    }

    return (
        <section className="py-[60px]">
            <form onSubmit={(e)=>handleAddProduct(e)}>
                <div className="grid grid-cols-2 gap-5">
                    <fieldset className="max-w-md space-y-1">
                        <Label className="text-lg font-bolder" htmlFor="title">Product Title</Label>
                        <Input className="text-lg font-bolder" defaultValue={title} id="title" type="text" onChange={(e)=> setTitle(e.target.value)} />
                    </fieldset>
                    <fieldset className="max-w-md space-y-1">
                        <Label className="text-lg font-bolder" htmlFor="purchase">Purchase Price</Label>
                        <Input className="text-lg font-bolder" defaultValue={purchasePrice} id="purchase" type="number" onChange={(e)=> setPurchasePrice(e.target.value)} />
                    </fieldset>
                    <fieldset className="max-w-md space-y-1">
                        <Label className="text-lg font-bolder" htmlFor="sell">Sell Price</Label>
                        <Input className="text-lg font-bolder" id="sell"defaultValue={sellPrice} type="number" onChange={(e)=> setSellPrice(e.target.value)} />
                    </fieldset>
                    <fieldset className="max-w-md space-y-1">
                        <Label className="text-lg font-bolder" htmlFor="stock">Stock</Label>
                        <Input className="text-lg font-bolder" defaultValue={stock} id="stock" type="number" onChange={(e)=> setStock(e.target.value)} />
                    </fieldset>
                    <div>
                        <Input className="w-[fit-content] bg-[#0F3CD9] text-white text-lg font-bolder px-[30px] cursor-pointer" id="submit" type="submit" value="Save Product" />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default ProductForm;