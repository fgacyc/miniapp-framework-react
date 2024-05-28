import Block from "@/components/block.jsx";
import {NavBar, Switch, Radio, Space, Input} from "antd-mobile";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Settings(){
    const navigate = useNavigate();
    const [value,setValue] = useState('');

    return (
        <div>
            <NavBar onBack={() => navigate(-1)}
                    className={"bg-white"}
            >Settings</NavBar>
            <Block>
                <div className={"py-2 flex flex-row justify-between items-center"}>
                    <div className={"text-base"}>Dark Mode</div>
                    <Switch/>
                </div>
            </Block>

            <Block>
                <Radio.Group defaultValue='1'>
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
                    //value={value}
                    onChange={val => {
                        setValue(val)
                    }}
                />
            </Block>
        </div>
    )
}