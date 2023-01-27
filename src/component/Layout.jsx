import React, { useState } from 'react'
import './style.css'
import {  Calen} from "./Calendar";
import { NavBar } from './Navbar'
import { Ava } from "./Avatar";
import {Carou} from "./Carousel";
import {SmileOutlined} from "@ant-design/icons";
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout

export const Layer = () => {
    return(<>
        <Layout>
            <Header>
                <NavBar />
                <Ava />
            </Header>
            <Content>
                <Layout>
                    <Content>
                        <Carou />
                        <Calen/>
                    </Content>
                </Layout>
            </Content>
            <Footer></Footer>
        </Layout>
    </>
    )
}
