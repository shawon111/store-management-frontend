import { Badge, Button, Table } from "keep-react";
import { AiOutlineEye } from "react-icons/ai";

const OrderInlineCard = () => {
    return (
        <Table.Row className="bg-white">
            <Table.Cell>
                <p className="text-body-4 font-medium text-metal-500">DL - 19266755</p>
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
                <Button variant="outline" size="sm" shape="circle">
                    <AiOutlineEye size={24} />
                </Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default OrderInlineCard;