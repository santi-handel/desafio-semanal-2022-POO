//import Loading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout(props) {
    const { children } = props;
    return (
        <>
            {/* <Loading> */}
                <Header></Header>
                {children}
                <Footer></Footer>
            {/* </Loading> */}
        </>
    )
}
