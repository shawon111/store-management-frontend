import FeaturedProducts from "./FeaturedProducts";
import RecentOrders from "./RecentOrders";

const RecentInfo = () => {
    return (
        <section className="py-5">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-full lg:col-span-6 border border-metal-100 rounded-lg p-2">
                    <FeaturedProducts />
                </div>
                <div className="col-span-full lg:col-span-6 border border-metal-100 rounded-lg p-2">
                    <RecentOrders />
                </div>
            </div>
        </section>
    );
};

export default RecentInfo;