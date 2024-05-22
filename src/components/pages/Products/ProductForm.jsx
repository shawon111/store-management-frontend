import { Input, Label } from "keep-react";

const ProductForm = () => {
    return (
        <section className="py-[60px]">
            <form action="">
                <div className="grid grid-cols-2 gap-5">
                    <fieldset className="max-w-md space-y-1">
                        <Label className="text-lg font-bolder" htmlFor="title">Product Title</Label>
                        <Input className="text-lg font-bolder" id="title" type="text" />
                    </fieldset>
                    <fieldset className="max-w-md space-y-1">
                        <Label className="text-lg font-bolder" htmlFor="purchase">Purchase Price</Label>
                        <Input className="text-lg font-bolder" id="purchase" type="number" />
                    </fieldset>
                    <fieldset className="max-w-md space-y-1">
                        <Label className="text-lg font-bolder" htmlFor="sell">Sell Price</Label>
                        <Input className="text-lg font-bolder" id="sell" type="number" />
                    </fieldset>
                    <fieldset className="max-w-md space-y-1">
                        <Label className="text-lg font-bolder" htmlFor="stock">Stock</Label>
                        <Input className="text-lg font-bolder" id="stock" type="number" />
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