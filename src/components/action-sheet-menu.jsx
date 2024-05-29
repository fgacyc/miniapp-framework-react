import config from "../../package.json";
import {
    GoCommentDiscussion,
    GoGear,
    //GoHeart,
    GoInfo,
    GoPerson,
    GoShareAndroid, GoTools,
    GoTrash, GoXCircle,
} from "react-icons/go";
import {IoRefreshSharp} from "react-icons/io5";
import {useActionSheetMenuStore} from "@/store/action-sheet-menu-store.js";
import {capitalizeAllFirstLetters} from "./tools.js";
import {useUserStore} from "@/store/user-store.js";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function ActionSheetButton({title, icon,onClick}){

    return (
        <div className={"flex flex-col items-center "}>
            <button className={"flex flex-col items-center justify-center bg-gray-100 w-12 h-12 rounded-lg cursor-pointer"}
                    onClick={onClick}
            >
                {icon}
            </button>
            <div className={"text-xs mt-1 text-gray-500"}>{title}</div>
        </div>
    )

}

function  DevModal({visible,setDevModal}){
    const [url, setUrl] = useState('');
    const [UID,lang,token] = useUserStore(state => [state.UID,state.language,state.token]);
    const textAreaRow  = 4;

    useEffect(() => {
        setUrl(window.location.href)
    }, []);

    return (
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-[#ffffff] 
                        ${visible ? 'block' : 'hidden'}
                        shadow w-[calc(100vw*0.8)] h-[calc(100vh/2)] rounded text-xs`}>
            <div className={"flex justify-end p-2"}
                 onClick={() => setDevModal(false)}
            ><GoXCircle className={"w-[20px] h-[20px]"}/></div>
            <hr/>
            <div className={"h-full overflow-auto p-2"}>
                <div className={"my-1"}>
                    <span className={"font-bold"}>UID: </span>
                    <input defaultValue={UID ?? ""} className={"border border-black w-full"}/>
                </div>
                <div className={"my-1"}>
                    <span className={"font-bold"}>Language: </span>
                    <span>{lang}</span>
                </div>
                <div className={"my-1"}>
                    <h3 className={"font-bold"}>URL</h3>
                    <textarea defaultValue={url}
                              rows={textAreaRow}
                              className={`w-full border border-black`}/>
                </div>
                <div className={"my-1"}>
                    <h3 className={"font-bold"}>Local DEV URL</h3>
                    <textarea defaultValue={token ? "http://localhost:5173/?token=" + token + "&language=" + lang : ""}
                              rows={textAreaRow}
                              className={`w-full border border-black`}/>
                </div>
                <div>
                    <h3 className={"font-bold"}>Token</h3>
                    <textarea defaultValue={token ?? ""}
                              rows={textAreaRow}
                              className={`w-full border border-black`}/>
                </div>
            </div>
        </div>
    );
}

export default  function ActionSheetMenu(){
    const [showMenu,setShowMenu] = useActionSheetMenuStore(state => [state.showMenu,state.setShowMenu]);
    const [token,lang] = useUserStore(state => [state.token,state.language]);
    const buttonStyle = "w-[28px] h-[28px]";
    const {t} =  useTranslation();
    const [devModal, setDevModal] = useState(false);
    const navigate = useNavigate();


    const buttonsData = [
        // {
        //     title: t("Favorite"),
        //     icon: <GoHeart className={buttonStyle}/>
        // },
        {
            title: t("Feedback"),
            icon: <GoCommentDiscussion className={buttonStyle}/>,
            onClick: () => window.open(`https://miniapp-feedback.vercel.app/?app=${config.app_id}?token=${token}&&language=${lang}`, "_self")
        },
        {
            title: t("Re-enter"),
            icon: <IoRefreshSharp className={buttonStyle}/>,
            onClick: () => window.location.reload()
        },
        {
            title: t("Clean Cache"),
            icon: <GoTrash className={buttonStyle}/>,
            onClick: () => {
                localStorage.clear();
                window.location.reload();
            }
        },
        {
            title: t("Settings"),
            icon: <GoGear className={buttonStyle}/>,
            onClick: () => {
                setShowMenu(false);
                navigate('/settings');
            }
        },
        {
            title: t("Profile"),
            icon: <GoPerson className={buttonStyle}/>,
            onClick:()=>window.open(`https://fga-accounts-center.pages.dev/?token=${token}&&language=${lang}`,"_self")
        },
        {
            title: t("About"),
            icon: <GoInfo className={buttonStyle}/>,
            onClick: () => {
                setShowMenu(false);
                navigate('/about');
            }
        },
        {
            title: t("Share"),
            icon: config.shared ? <GoShareAndroid className={buttonStyle}/>
                :<GoShareAndroid className={`${buttonStyle} text-gray-300`}/>,
            onClick: !config.shared ? null : () => navigator.clipboard.writeText(window.location.href)
        },
        {
            title: t("DEV"),
            icon: <GoTools className={buttonStyle}/>,
            onClick: () => {
                setDevModal(true);
                setShowMenu(false);
            }
        }
    ]


    return (
        <div>
            <DevModal visible={devModal} setDevModal={setDevModal} />
            <div className={`absolute top-0 h-screen w-screen  transition duration-300 ease-in-out
            ${showMenu ? 'z-10 bg-[#00000030]': '-z-10 bg-[#00000000]' }`}
                    onClick={() => setShowMenu(false)}
            ></div>
            <div
                className={`absolute bottom-0 ease-in-out duration-300  w-full   z-20
            ${showMenu ? 'transition-transform translate-y-0' : 'transition-transform translate-y-full'}`}>
                <div className={`flex flex-col border shadow-lg rounded-t-3xl bg-white`}>
                    <div className={"text-center p-3 border-b "}>
                        {
                            lang === 'zh' && config.name_zh
                        }
                        {
                            lang === 'en' && capitalizeAllFirstLetters(config.name)
                        }
                    </div>
                    <div className={"grid grid-cols-4 gap-2 p-4 w-full"}>
                        {buttonsData.map((button, index) => (
                            <ActionSheetButton key={index} title={button.title} icon={button.icon}
                                               onClick={button.onClick}/>
                        ))}
                    </div>
                    <div className={"text-center p-5 border-t cursor-pointer"}
                         onClick={() => setShowMenu(false)}>
                        {t("Cancel")}
                    </div>
                </div>
            </div>
        </div>
    )
}