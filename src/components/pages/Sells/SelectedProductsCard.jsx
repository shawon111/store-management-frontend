import { NumberInput, Table } from "keep-react";
import { Minus, Plus } from "phosphor-react";

const SelectedProductsCard = () => {
    return (
        <div>
            <Table showCheckbox={true}>
                <Table.Head>
                    <Table.HeadCell>
                        <p className="text-body-3 font-bolder text-black">Product Name</p>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <p className="text-body-3 font-bolder text-black">Quantity</p>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <p className="text-body-3 font-bolder text-black">Price</p>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-gray-25 divide-y">
                    <Table.Row className="bg-white">
                        <Table.Cell>
                            <p className="text-body-3 font-medium text-metal-500">
                                Bombay Chips
                            </p>
                        </Table.Cell>
                        <Table.Cell>
                            <NumberInput className="max-w-52">
                                <NumberInput.Button>
                                    <Minus size={16} color="#455468" />
                                </NumberInput.Button>
                                <NumberInput.Input className="w-[60px]" defaultValue={0} />
                                <NumberInput.Button>
                                    <Plus size={16} color="#455468" />
                                </NumberInput.Button>
                            </NumberInput>
                        </Table.Cell>
                        <Table.Cell>
                            <NumberInput className="max-w-52">
                                <NumberInput.Button>
                                    <Minus size={16} color="#455468" />
                                </NumberInput.Button>
                                <NumberInput.Input className="w-[60px]" defaultValue={0} />
                                <NumberInput.Button>
                                    <Plus size={16} color="#455468" />
                                </NumberInput.Button>
                            </NumberInput>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
};

export default SelectedProductsCard;