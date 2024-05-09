import { Badge, Button, Table } from "keep-react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderInlineCardTwo = () => {
    return (
        <Table.Row className="bg-white">
            <Table.Cell>
                <p className="text-body-4 font-medium text-metal-500">DL19266755</p>
            </Table.Cell>
            <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                    09-05-2024
                </p>
            </Table.Cell>
            <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                    <Badge color="success" showIcon={true}>150</Badge>
                </p>
            </Table.Cell>
            <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">5</p>
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