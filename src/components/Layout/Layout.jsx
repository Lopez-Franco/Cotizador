import  Form  from "../Form/Form";
import { Link } from 'react-router-dom';
function Layout(){
    return (
        <>
        <Link to="/history">History</Link>
        <Form/>
        </>
    )
}
export default Layout;