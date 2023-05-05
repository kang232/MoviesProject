import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import  './DefaultLayout.css';


function DefaultLayout({ children }) {
    return (
        <div className='wrapperv2'>
            <Header />
            <div className='container'>
                <Sidebar />
                <div className='contentv2'>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
