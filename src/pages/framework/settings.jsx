import Block from "@/components/block.jsx";
import {NavBar, Switch, Radio, Space, Input} from "antd-mobile";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSettingsStore} from "@/store/settings-store.js";
import {useTranslation} from "react-i18next";

export default function Settings(){
    const navigate = useNavigate();
    const [isDarkMode,toggleDarkMode] = useSettingsStore(state => [state.isDarkMode,state.toggleDarkMode])
    const [radioValue,setRadioValue] = useSettingsStore(state => [state.radioValue,state.setRadioValue])
    const [inputValue,setInputValue] = useSettingsStore(state => [state.inputValue,state.setInputValue])
    const {t } = useTranslation();

    return (
        <div>
            <NavBar onBack={() => navigate(-1)}
                    className={"bg-white"}
            >{t("Settings")}</NavBar>
            <Block>
                <div className={"py-2 flex flex-row justify-between items-center"}>
                    <div className={"text-base"}>Dark Mode</div>
                    <Switch checked={isDarkMode} onChange={toggleDarkMode}/>
                </div>
            </Block>

            <Block>
                <Radio.Group defaultValue={radioValue}
                                onChange={val => {
                                    setRadioValue(val)
                                }}
                >
                    <Space direction='vertical'>
                        <Radio value='1'>Item 1</Radio>
                        <Radio value='2'>Item 2</Radio>
                        <Radio value='3'>Item 3</Radio>
                    </Space>
                </Radio.Group>
            </Block>

            <Block title='Input'>
                <Input
                    placeholder='Please input something'
                    value={inputValue}
                    onChange={val => {
                        setInputValue(val)
                    }}
                />
            </Block>
        </div>
    )
}