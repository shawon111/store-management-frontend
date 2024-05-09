import Layout from "../../global/layout/Layout";
import HomeHero from "./HomeHero";
import RecentInfo from "./RecentInfo";

const Home = () => {
    return (
        <div>
            <Layout>
                <HomeHero />
                <RecentInfo />
            </Layout>
        </div>
    );
};

export default Home;