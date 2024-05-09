import TotalDue from "./TotalDue";
import TotalExpenseCard from "./TotalExpenseCard";
import TotalProfitCard from "./TotalProfitCard";
import TotalSalesCard from "./TotalSalesCard";

const HomeHero = () => {
    return (
        <div className="home-hero">
            <div className="grid grid-cols-4 gap-3">
                <div className="col-span-4 sm:col-span-2 lg:col-span-1">
                    <TotalProfitCard />
                </div>
                <div className="col-span-4 sm:col-span-2 lg:col-span-1">
                    <TotalExpenseCard />
                </div>
                <div className="col-span-4 sm:col-span-2 lg:col-span-1">
                    <TotalSalesCard />
                </div>
                <div className="col-span-4 sm:col-span-2 lg:col-span-1">
                    <TotalDue />
                </div>
            </div>
        </div>
    );
};

export default HomeHero;