/* eslint-disable react/prop-types */
import { Badge, Button, Table } from "keep-react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductInlineCardTwo = ({data}) => {
    const {_id, title, sellingPrice, stock} = data;
    return (
        <Table.Row className="bg-white">
            <Table.Cell>
                <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{_id}</p>
            </Table.Cell>
            <Table.Cell>
                <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{title}</p>
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
                <Link to="/">
                    <Button variant="link" size="sm" shape="circle">
                        <FaEdit size={24} />
                    </Button>
                </Link>
            </Table.Cell>
        </Table.Row>
    );
};

export default ProductInlineCardTwo;