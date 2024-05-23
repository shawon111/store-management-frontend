/* eslint-disable react/prop-types */
import { NumberInput, Table } from "keep-react";

const SelectedProductsCard = ({ data,updateQty,updatePrice }) => {
    const { title, sellingPrice, _id } = data
    return (
        <Table.Row className="bg-white">
            <Table.Cell>
                <p className="text-body-3 font-medium text-metal-500">
                    {title}
                </p>
            </Table.Cell>
            <Table.Cell>
                <NumberInput className="max-w-52">
                    <NumberInput.Input className="w-[60px]" defaultValue={1} onChange={(e)=> updateQty(_id, parseInt(e.target.value))} />
                </NumberInput>
            </Table.Cell>
            <Table.Cell>
                <NumberInput className="max-w-52">
                    <NumberInput.Input className="w-[60px]" defaultValue={sellingPrice} onChange={(e)=>updatePrice(_id, parseFloat(e.target.value))} />
                </NumberInput>
            </Table.Cell>
        </Table.Row>
    );
};

export default SelectedProductsCard;