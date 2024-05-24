/* eslint-disable react/prop-types */
import { Badge, Button, Table } from "keep-react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderInlineCardTwo = ({data}) => {
    const {usi,timeOfSell,total,profit} = data;
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB');
    }
    return (
        <Table.Row className="bg-white">
            <Table.Cell>
                <p className="text-body-4 font-medium text-metal-500">{usi}</p>
            </Table.Cell>
            <Table.Cell>
                <p className="text-body-4 font-medium text-metal-500">
                    {formatDate(timeOfSell)}
                </p>
            </Table.Cell>
            <Table.Cell>
                    <Badge className="text-body-4 font-medium text-metal-500" color="success" showIcon={true}>{total}</Badge>
            </Table.Cell>
            <Table.Cell>
                <p className="text-body-4 font-medium text-metal-500">{profit}</p>
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

export default OrderInlineCardTwo;