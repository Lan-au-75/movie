import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header></Header>
            <div className="contain">
                <div className="banner"></div>
                <div className="content">{children}</div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
