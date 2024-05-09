import { Pagination } from 'keep-react';
const SitePagination = () => {
    return (
        <div className='py-5'>
            <Pagination shape="rounded">
                <Pagination.List>
                    <Pagination.Item className='border' active>1</Pagination.Item>
                    <Pagination.Item className='border'>2</Pagination.Item>
                    <Pagination.Item className='border'>3</Pagination.Item>
                    <Pagination.Item className='border'>4</Pagination.Item>
                    <Pagination.Item className='border'>5</Pagination.Item>
                </Pagination.List>
            </Pagination>
        </div>
    );
};

export default SitePagination;