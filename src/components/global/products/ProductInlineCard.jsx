/* eslint-disable react/prop-types */
import { Badge, Button, Table } from "keep-react";
import { FiPlusCircle } from "react-icons/fi";

const ProductInlineCard = ({data}) => {
    const {title, sellingPrice, stock} = data;
    return (
        <Table.Row className="bg-white">
            <Table.Cell>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div>
                                <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Table.Cell>
            <Table.Cell>
                <Badge color="success" showIcon={true}>
                    {sellingPrice}
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <p>{stock}</p>
            </Table.Cell>
            <Table.Cell>
                <Button variant="outline" size="sm" shape="circle">
                    <FiPlusCircle size={24} />
                </Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default ProductInlineCard;