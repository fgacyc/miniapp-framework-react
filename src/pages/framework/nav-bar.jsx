import { BsChevronLeft } from 'react-icons/bs';
import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';

NavBar.propTypes = {
    children: PropTypes.node,
    ifShowBackArrow: PropTypes.bool,
    url : PropTypes.string
};

export default function NavBar({ children, ifShowBackArrow = true,url="" }) {
    const navigate = useNavigate();

    return (
        <>
            <div className={"h-[45px] px-3 flex items-center justify-between bg-white"}>

                <div onClick={() => url? navigate(url):navigate(-1) } className={"cursor-pointer"}>
                    {ifShowBackArrow && <BsChevronLeft className={"h-6 w-6"}/>}
                </div>
                <div className={"text-lg"}>{children}</div>
                <div className={"h-6 w-6"}></div>
            </div>
        </>
    );
}