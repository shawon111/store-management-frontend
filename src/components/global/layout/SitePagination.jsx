/* eslint-disable react/prop-types */
import { Pagination } from 'keep-react';
const SitePagination = ({page, handlePageChange, count, maxItem}) => {
    const pageCount = Math.ceil(count / maxItem);
    const pages = Array.from({ length: pageCount }, (_, index) => index);
    return (
        <div className='py-5'>
            <Pagination shape="rounded">
                <Pagination.List>
                    {
                        pages.length ? pages.map((item)=> <Pagination.Item key={item} className='border' active={item+1 ===page} onClick={()=> handlePageChange(item+1)}>{item+1}</Pagination.Item>): ""
                    }
                    
                </Pagination.List>
            </Pagination>
        </div>
    );
};

export default SitePagination;