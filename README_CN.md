<div align="center">
    <H1 align="center">FGA Mobile Mini App Framework</H1>
    <a href="README.md">English</a>
    <span> | </span>
    <a href="README_CN.md">中文</a>
</div>

# 1. 简介

FGA Mobile Mini App Framework 是一个前端产品解决方案，基于React实现，使用了最新的技术栈，内置了 i18n 国际化解决方案，动态路由，UI框架，状态管理，分析工具等丰富的功能组件，可以快速帮你搭建 Mini App的产品原型。

在该框架中使用了下面的外部库：
* [Ant Design Mobile](https://mobile.ant.design/components): UI框架
* [React i18n](https://react.i18next.com/): 国际化
* [React Router](https://reactrouter.com/): 动态路由
* [Zustand](https://zustand-demo.pmnd.rs/): 状态管理
* [React Icons](https://react-icons.github.io/react-icons/): 图标库
* [Tailwind CSS](https://tailwindcss.com/): CSS框架


# 2. 功能

## Mini App 基础功能
* 悬浮按钮
* 弹出菜单
* 小程序反馈
* 小程序设置
* 小程序信息
* 刷新，清除缓存

## 用户登录
* 自动登录
* 获取用户信息（名称，头像，UID，Email）
* 获取用户token

## 国际化
* 支持多语言
* 与mobile语言保持一致

## UI框架
* 基于Ant Design Mobile
* 内置 react-icons
* 内置 Tailwind CSS

## 开发工具
* 使用 Vite 构建
* 内置 React 和 React Router
* 内置 Zustand 状态管理


# 3. 申请资源

在开始开发之前，请填写该表格来申请开发资源：https://forms.gle/YLqFg3hJepD34TFA8

申请成功之后会获得一个Mini App config json 文件，其中包含

- Github Repo
- Database
- Miniapp package信息

例子：

```json
{
    "github_repo": {
        "repo_url": "https://github.com/fgacyc/app1",
        "repo_invite": "https://github.com/fgacyc/app1/invitations"
    },
    "database": {
        "username": "fgacyc.official",
        "password": "Basdas32543oeAW",
        "host": "ep-raspy-sun-45651351.ap-southeast-1.aws.neon.tech",
        "port": "5432",
        "database": "test",
        "connect_string": "postgresql://fgacyc.official:Basdas32543oeAW@ep-raspy-sun-45651351.ap-southeast-1.aws.neon.tech:5432/test"
    },
    "package": {
        "name": "app1",
        "author": "FGACYC",
        "version": "0.0.1",
        "private": true,
        "app_id": "6d4a87d19be141c881ed",
        "shared": false,
        "instagram": "https://www.instagram.com/fgacyc/",
        "github": "https://github.com/fgacyc/",
        "type": "module"
    }
}
```

package 参数解释：

![](src/assets/README/about_ss.png)

![](src/assets/README/share_ss.png)
* package.name：项目名称 -> (1)
* package.version：作者 -> (2)
* package.author：版本号 -> (3)
* package.instagram：Author Instagram 地址 -> (4)
* package.github：Author Github 地址/ Project Repo 地址 -> (5)
* package.shared：是否可以copy应用地址用于分享 -> (6)


# 4. 开发
打开FGA Mobile Mini App Framework 项目： https://github.com/fgacyc/miniapp-framework-react
然后使用项目目标创建新的储存库，之后克隆新的储存库到本地。

1. 使用模板创建项目

![](src/assets/README/new-repo.png)

2. 创建新的储存库

<img src="src/assets/README/create-repo.png" WIDTH="500">
<img src="src/assets/README/new-framework-repo.png" WIDTH="500">
<img src="src/assets/README/new-framework-repo1.png" WIDTH="500">


3. 下载框架代码

```bash
$ git clone <your-repo-url>
```

安装依赖

```bash
$ yarn install
```

运行

```bash
$ yarn dev
```

如果你使用的是VSCode，推荐安装 [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)



# 5. 文件结构
```text
Src
├── assets 
├── components
├── locales
│   └── translation
├── pages
├── routes
└── store
```
* assets: 存放静态资源
* components: 存放共享组件
* locales: 用于国际化配置，translation中 存放翻译文件
* pages: 存放页面
* routes: 存放路由
* store: 存放状态管理

# 6. 路由
路由位于 src/routes/routes.tsx
```javascript
export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/:UID" element={<Index />} />
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}
```
6.1 获取URL参数
```text
https://example.com/room/123
```
```javascript
 <Route path="/room/:UID" element={<Room />} />
```

```javascript
import { useParams } from 'react-router-dom';
export default function Index(){
    let { UID } = useParams();
    return (
        <div>
            {UID}
        </div>
    )
}
```
6.2 获得查询参数
```text
https://example.com/room?name=fga
```
```javascript
 <Route path="/room" element={<Room />} />
```

```javascript
import { useLocation } from 'react-router-dom';
export default function Index(){
    const [searchParams] = useSearchParams();
    return (
        <div>
            {searchParams.get('name')}
        </div>
    )
}
```


# 7. 页面样式
页面样式可以参考mobile UI 设计： https://www.figma.com/design/4fWKR6XFtLrQbbdq1NSJmY/FGA-MobileApp


# 8. 图标
# 8.1 Mini App 图标
Mini App 图标位于 public/app_icon.png, 可以替换为自己的图标。

![](src/assets/README/mini-app-icon.png)

图标要求：1024x1024, PNG 格式，非透明背景，非白色背景。示例如下：

<img src="src/assets/README/app_icon.png" width=300 />

# 8.2 图标库
在该框架中，我们使用了 [React Icons](https://react-icons.github.io/react-icons/) 图标库
你可以在这里找到所有的图标，然后点击图标，复制图标的代码，然后粘贴到你的代码中使用。

<img src="src/assets/README/react-icons.png">

```javascript
import { RiCodeView } from "react-icons/ri";
export default function Index(){
    return (
        <div>
            <RiCodeView />
        </div>
    )
}
```






# 9. 状态管理
在Mini App 中，我们使用了 [Zustand](https://zustand-demo.pmnd.rs/) 来实现状态管理，可以通过简单的配置来实现状态的管理。
## 9.1 定义状态
```javascript
// store/index.js
import create from 'zustand';
export const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

## 9.2 使用状态
```javascript
// components/Counter.js
import { useStore } from './store';
export default function Counter() {
    const count = useStore((state) => state.count);
    const increment = useStore((state) => state.increment);
    const decrement = useStore((state) => state.decrement);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
```


# 10. 用户基础信息和 身份信息
## 10.1 基础信息
在打开Mini App 的时候，会通过Mobile传入的Token，自动获取用户信息，包括名称，头像，UID（sub），Email等。
可以通过下面的方式读取
```javascript
import { useUserStore } from './store';
export default function UserInfo() {
    const user = useUserStore((state) => state.user);
    return (
        <div>
            <h1>{user.name}</h1>
            <img src={user.picture} alt="avatar" />
            <p>{user.email}</p>
            <p>{user.sub}</p>
        </div>
    );
}
```
## 10.2 身份信息
在Mini App 中，我们会需要使用到用户的身份信息，例如用户处于哪个教堂，在哪个小组，小组角色、服侍岗位等。
这时候，我们可以通过调用API来获取用户的身份信息。

* API的地址是：https://identity.development.fgacyc.com
* API文档地址是：https://identity.development.fgacyc.com/docs

### 10.2.1 获取 Bearer Token
1. 在FGA Mobile App中，进入Mini App页面，点击 Webview Tools

<img src="src/assets/README/webview_tools.png" width=300 >

2. 在 Webview Tools 中，复制 Token 

<img src="src/assets/README/cb497f47.jpg" width=300 >


### 10.2.2 查看API 文档
1. 配置API文档中的 Bearer Token

<img src="src/assets/README/doc-token.png" >

2. 查看API文档中的接口

<img src="src/assets/README/apis.png">

3. 查看API文档中的返回结果

<img src="src/assets/README/try-api.png" >

### 10.2.3 使用API
API 的使用方式是通过Bearer Token来获取用户的信息，例如：
```javascript
const url = 'https://identity.development.fgacyc.com/connect-groups';
const token = 'YOUR_BEARER_TOKEN_HERE';  // Replace with your actual Bearer token

fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log('Data received:', data);
})
.catch(error => {
    console.error('Error fetching data:', error);
});
```




# 11. 多语言
在Mini App 中，我们使用了React i18n来实现国际化，可以通过简单的配置来实现多语言的切换。
Mini App 打开时，会自动根据Mobile的语言设置来切换语言，如果没有找到对应的语言，会默认使用英文。

## 11.1 国际化配置
在src/locales/translation中存放翻译的内容，可以在不同的语言文件中定义不同的翻译内容。
```json
// src/locales/translation/en.json
{
    "hello": "Hello",
    "world": "World"
}
```
```json
// src/locales/translation/zh.json
{
    "hello": "你好",
    "world": "世界"
}
```

## 11.2 使用国际化
```javascript
import { useTranslation } from 'react-i18next';
export default function Index(){
    const { t } = useTranslation();
    return (
        <div>
            {t('hello')} {t('world')}
        </div>
    )
}
```

## 11.3 切换语言
因为默认会根据Mobile的语言设置来设置语言，在Mini App 打开时，会自动切换语言，所以无需手动切换。
但是如果在特殊的情况下，需要手动切换语言，可以通过下面的方式来实现。
```javascript
import { useTranslation } from 'react-i18next';
export default function Index(){
    const { i18n,t } = useTranslation();
    return (
        <div>
            <div>
                {t('hello')} {t('world')}
            </div>
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
            <button onClick={() => i18n.changeLanguage('zh')}>中文</button>
        </div>
    )
}
```


# 12.数据库 
在FGA IT 系统中，我们统一使用了PostgreSQL 数据库，你可以通过提供的数据库信息来连接数据库，进行数据的读写操作。
在Mini App config json 文件中，提供了数据库的连接信息。

```json
{
  "database": {
    "username": "fgacyc.official",
    "password": "Basdas32543oeAW",
    "host": "ep-raspy-sun-45651351.ap-southeast-1.aws.neon.tech",
    "port": "5432",
    "database": "test",
    "connect_string": "postgresql://fgacyc.official:Basdas32543oeAW@ep-raspy-sun-45651351.ap-southeast-1.aws.neon.tech:5432/test"
  }
}
```
你可以通过如下的PostgreSQL GUI 工具来连接和操作数据库：
* [DBeaver](https://dbeaver.io/)
* [pgAdmin](https://www.pgadmin.org/)
* [DataGrip](https://www.jetbrains.com/datagrip/)

# 13. 底部菜单
底部菜单是Mini App的提供的一个功能，位于 `src/components/action-sheet-menu.jsx` 可以通过底部菜单来实现一些功能，
比如刷新，清除缓存，小程序信息等,可以通过配置来实现不同的功能。
```javascript
const buttonsData = [
    {
        text: 'Refresh',
        icon: <ReloadOutlined />,
        onClick: () => {
            window.location.reload();
        },
    },
    {
        text: 'Clear Cache',
        icon: <DeleteOutlined />,
        onClick: () => {
            localStorage.clear();
            window.location.reload();
        },
    },
    {
        text: 'Settings',
        icon: <SettingOutlined />,
        onClick: () => {
            navigate('/settings');
        },
    },
    // ...
];
```

可以通过注释掉不需要的按钮来关闭某个功能，尤其注意，在生产环境中，请不要开启开发工具按钮，因为这会暴露一些敏感信息。
```javascript
{
    // ...
    
    // title: "Dev",
    // icon: <GoTools className={buttonStyle}/>,
    // onClick: () => {
    //     setDevModal(true);
    //     setShowMenu(false);
    // }
}
```


# 14.开发工具
因为Mini App 所处的Webview环境中，导航栏和调试工具都是被隐藏的，所以我们需要一些工具来帮助我们开发。
我们可以点击底部菜单里的 DEV 按钮，来打开开发工具 

<img src=src/assets/README/113131311.jpg width=300 />

目前开发工具中可以查看当前用户的UID，当前的语言，当前Mini App的URL，以及在本地开发使用的Local URL

<img src=src/assets/README/564531611511.jpg width=300 />



# 15.部署
在开发完成之后, Mini App的 PM 会安排部署，部署的方式是通过Cloudflare来实现的，所以在提交代码之前，
1. 请确保代码是可以正常运行的。
2. 确保所有配置项(例如PI Host、Database config等)都使用环境变量，并且不包含敏感信息。
3. 确保代码遵循团队的编码规范： https://airbnb.io/javascript/react/


在部署之后，会获得一个URL，可以通过这个URL来访问Mini App，但不要分享这个URL。


所有的Mini App 运行在Mobile 的Webview中，所以 有一定的安全性, 而暴露在浏览器环境中，可能会导致一些安全问题，例如用户信息泄露，API暴露等。所以Mini app 的URL是私有的，
只有开发者和测试人员才能在浏览器环境中访问。



# 16.访问分析
在部署完成之后，你将获得一个如下的JS片段:
```text
<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "a3aa602564655049c2a6ed65f"}'></script><!-- End Cloudflare Web Analytics -->
```


请将这个片段添加到你的Mini App的 index.html 中，这样你就可以在Cloudflare的监控平台中查看你的Mini App的访问情况。
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/app_icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MiniApp + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    <!-- Cloudflare Web Analytics -->
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "a3aa602564655049c2a6ed65f"}'></script>
    <!-- End Cloudflare Web Analytics -->
  </body>
</html>
```

# 17. 问题
## 17.1 如何使用应用设置
在Mini App中，我们提供了一个设置页面 `src/pages/settings.jsx` ，可以通过设置页面来设置一些Mini App的配置.
并且有一个全局状态 `useSettingsStore` 来存储这些配置(位于`src/store/settings-store.js`)，可以通过这个状态来读取和修改配置。




