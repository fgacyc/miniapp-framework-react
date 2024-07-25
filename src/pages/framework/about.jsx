import config from "../../../package.json";
import {GoChevronRight} from "react-icons/go";
import {useNavigate} from "react-router-dom";
import Block from "@/components/block.jsx";
import githubLogo from '@/assets/github.png'
import instagramLogo from '@/assets/instagram.png'
import {capitalizeAllFirstLetters} from "@/components/tools.js";
import {useTranslation} from "react-i18next";
import {useUserStore} from "@/store/user-store.js";
import NavBar from "@/components/nav-bar.jsx";

export default function About() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const lang = useUserStore(state => state.language);

    return (
        <div>
            <NavBar ifShowBackArrow={true}>{t("About")}</NavBar>
            <div className={"flex flex-col items-center p-8 bg-white mb-2"}>
                <img src="/app_icon.png" alt="app logo" className={"w-16 rounded-full"}/>
                <h1 className={"text-black text-xl text-center mt-4"}>
                    {
                        lang === 'zh' && config.name_zh
                    }
                    {
                        lang === 'en' && capitalizeAllFirstLetters(config.name)
                    }
                </h1>
            </div>

            <Block>
                <div className={"flex justify-between items-center"}>
                    <div>{t("Version")}: V{config.version}</div>
                    <div className={"bg-gray-100 px-1 py-[1px] rounded text-gray-600"}>
                        {t("Latest Version")}
                    </div>
                </div>
            </Block>

            <Block>
                <div className={"flex justify-between items-center"}>
                    <div>{t("Developer")}: {config.author}</div>
                    <div className={"flex"}>
                        {
                            config.instagram && <a href={config.instagram} className={"px-2"}>
                                <img src={instagramLogo} alt="instagram" className={"w-6"}/>
                            </a>
                        }
                        {
                            config.github && <a href={config.github} target={"_blank"}>
                                <img src={githubLogo} alt="github" className={"w-6"}/>
                            </a>
                        }

                    </div>
                </div>
            </Block>

            <Block>
                <div className={"pb-2 flex flex-row justify-between  items-center"}
                    onClick={() => navigate('/terms-of-service')}
                >
                    <div>{t("Terms of Service")}</div>
                    <GoChevronRight className={"w-[18px] h-[18px]"}/>
                </div>
                <hr/>
                <div className={"pt-2 flex flex-row justify-between items-center"}
                    onClick={() => navigate('/privacy-policy')}
                >
                    <div>{t("Privacy Policy")}</div>
                    <GoChevronRight className={"w-[18px] h-[18px]"}/>
                </div>
            </Block>
        </div>
)
}