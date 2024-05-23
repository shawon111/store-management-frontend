/* eslint-disable react/prop-types */
import { FaPlusCircle } from "react-icons/fa";

const ProductSelectionCard = ({data, handleProductSelection}) => {
    const {title, stock} = data; 
    return (
        <div className="flex justify-between items-center p-[20px] bg-stone-200 rounded">
            <div>
                <FaPlusCircle onClick={()=>handleProductSelection(data)} size={20} color="#1B4DFF" className="cursor-pointer" />
            </div>
            <div>
                <p className="text-black font-bold text-body-3">{title}</p>
            </div>
            <div>
                <p className="text-[#1B4DFF] font-bold text-body-3">{stock} in stock</p>
            </div>
        </div>
    );
};

export default ProductSelectionCard;