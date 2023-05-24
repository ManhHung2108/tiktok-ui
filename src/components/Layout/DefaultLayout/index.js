//Những layout khác chứa hết trong này
import Header from '~/components/Layout/components/Header';
import SlideBar from './SlideBar';

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SlideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
