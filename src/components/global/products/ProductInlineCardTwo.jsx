import { Badge, Button, Table } from "keep-react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductInlineCardTwo = () => {
    return (
        <Table.Row className="bg-white">
            <Table.Cell>
                <p className="-mb-0.5 text-body-4 font-medium text-metal-600">#IP555609</p>
            </Table.Cell>
            <Table.Cell>
                <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Clemon 250ml</p>
            </Table.Cell>
            <Table.Cell>
                <Badge color="success" showIcon={true}>
                    20
                </Badge>
            </Table.Cell>
            <Table.Cell>
                <p>23</p>
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