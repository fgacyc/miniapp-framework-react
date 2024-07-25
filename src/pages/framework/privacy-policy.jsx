import {useTranslation} from "react-i18next";
import {useUserStore} from "@/store/user-store.js";
import NavBar from "@/components/nav-bar.jsx";



export default function PrivacyPolicy() {
    const {t} = useTranslation();
    const language = useUserStore(state => state.language)

    return (
        <div>
            <NavBar ifShowBackArrow={true}>{t("Privacy Policy")}</NavBar>
            {
                language === "zh"
                    ? <div className="bg-white rounded-lg shadow-md p-8 overflow-y-scroll h-screen">
                        <h1 className="text-2xl font-bold mb-4">隐私政策</h1>

                        <h2 className="text-xl font-semibold mb-2">1. 介绍</h2>
                        <p className="mb-4">FGA科技团队（以下简称“我们”、“我们的”或“我们”）致力于保护您的隐私。本隐私政策解释了当您使用我们的技术产品和服务（“服务”）时，我们如何收集、使用、披露和保护您的信息。</p>

                        <h2 className="text-xl font-semibold mb-2">2. 我们收集的信息</h2>
                        <p className="mb-4">我们可以通过多种方式收集您的信息，包括：</p>
                        <ul className="list-disc pl-8 mb-4">
                            <li><strong>个人数据</strong>：当您注册服务或选择参与与服务相关的各种活动时，您自愿向我们提供的个人身份信息，例如您的姓名、邮寄地址、电子邮件地址和电话号码，以及您的年龄、性别、家乡和兴趣等人口统计信息。
                            </li>
                            <li><strong>衍生数据</strong>：当您访问服务时，我们的服务器自动收集的信息，例如您的IP地址、浏览器类型、操作系统、访问时间以及您在访问服务之前和之后直接查看的页面。
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">3. 信息使用</h2>
                        <p className="mb-4">我们可能会以以下方式使用我们从您那里收集的信息：</p>
                        <ul className="list-disc pl-8 mb-4">
                            <li>提供、运营和维护我们的服务。</li>
                            <li>改进、个性化和扩展我们的服务。</li>
                            <li>了解和分析您如何使用我们的服务。</li>
                            <li>开发新产品、服务、功能和功能。</li>
                            <li>与您沟通，包括客户服务，向您提供更新和其他与服务相关的信息。</li>
                            <li>向您发送电子邮件。</li>
                            <li>查找和防止欺诈行为。</li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">4. 分享您的信息</h2>
                        <p className="mb-4">我们不会将您的信息与第三方分享，用于托管服务、客户服务或营销工作。我们可能在以下情况下分享您的信息：</p>
                        <ul className="list-disc pl-8 mb-4">
                            <li>遵守法律义务，包括响应传票、法院命令和其他法律程序。</li>
                            <li>保护和捍卫我们的权利或财产。</li>
                            <li>在您的同意或根据您的指示。</li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">5. 您的信息安全</h2>
                        <p className="mb-4">我们采用行政、技术和物理安全措施来帮助保护您的个人信息。尽管我们已经采取了合理的措施来保护您提供给我们的个人信息，但请注意，尽管我们已经努力，但没有安全措施是完美的或无法渗透的，也没有数据传输方法可以保证不会被任何拦截或其他类型的滥用。</p>

                        <h2 className="text-xl font-semibold mb-2">6. 您的数据保护权利</h2>
                        <p className="mb-4">根据您的所在地，您可能具有以下关于您的个人信息的权利：</p>
                        <ul className="list-disc pl-8 mb-4">
                            <li>访问权 – 您有权要求获取您的个人信息的副本。</li>
                            <li>更正权 – 您有权要求我们更正您认为不准确的信息或补充您认为不完整的信息。</li>
                            <li>删除权 – 在一定条件下，您有权要求我们删除您的个人信息。</li>
                            <li>限制处理权 – 在一定条件下，您有权要求我们限制对您的个人信息的处理。</li>
                            <li>反对处理权 – 在一定条件下，您有权反对我们对您的个人信息的处理。</li>
                            <li>数据可移植性权 –
                                在一定条件下，您有权要求我们将我们收集的数据转移到另一个组织，或直接转移到您的组织。
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">7. 本隐私政策的变更</h2>
                        <p className="mb-4">我们可能会不时更新我们的隐私政策。我们将通过在此页面上发布新的隐私政策来通知您任何更改。建议您定期查看本隐私政策以获取任何更改。本隐私政策的更改在发布在此页面时生效。</p>

                        <h2 className="text-xl font-semibold mb-2">8. 联系我们</h2>
                        <p>如果您对本隐私政策有任何疑问，请通过<a href="mailto:fgacyc.technology@gmail.com"
                                                                 className="text-blue-500">fgacyc.technology@gmail.com</a>联系我们。
                        </p>
                        <div className={"h-10"}></div>
                    </div>

                    : <div className="bg-white rounded-lg shadow-md p-8 overflow-y-scroll h-screen">
                        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

                        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                        <p className="mb-4">FGA Tech Team ("we," "our," or "us") is committed to protecting your privacy.
                            This
                            Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                            use
                            our technology products and services ("Services").</p>

                        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
                        <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
                        <ul className="list-disc pl-8 mb-4">
                            <li><strong>Personal Data</strong>: Personally identifiable information, such as your name,
                                shipping
                                address, email address, and telephone number, and demographic information, such as your age,
                                gender, hometown, and interests, that you voluntarily give to us when you register with the
                                Services or when you choose to participate in various activities related to the Services.
                            </li>
                            <li><strong>Derivative Data</strong>: Information our servers automatically collect when you
                                access
                                the Services, such as your IP address, your browser type, your operating system, your access
                                times, and the pages you have viewed directly before and after accessing the Services.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">3. Use of Your Information</h2>
                        <p className="mb-4">We may use the information we collect from you in the following ways:</p>
                        <ul className="list-disc pl-8 mb-4">
                            <li>To provide, operate, and maintain our Services.</li>
                            <li>To improve, personalize, and expand our Services.</li>
                            <li>To understand and analyze how you use our Services.</li>
                            <li>To develop new products, services, features, and functionality.</li>
                            <li>To communicate with you, including for customer service, to provide you with updates and
                                other
                                information relating to the Services.
                            </li>
                            <li>To send you emails.</li>
                            <li>To find and prevent fraud.</li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
                        <p className="mb-4">We do not share your information with third parties for hosting services,
                            customer
                            service, or marketing efforts. We may share your information in the following situations:</p>
                        <ul className="list-disc pl-8 mb-4">
                            <li>To comply with legal obligations, including responding to subpoenas, court orders, and other
                                legal processes.
                            </li>
                            <li>To protect and defend our rights or property.</li>
                            <li>With your consent or at your direction.</li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">5. Security of Your Information</h2>
                        <p className="mb-4">We use administrative, technical, and physical security measures to help protect
                            your personal information. While we have taken reasonable steps to secure the personal
                            information
                            you provide to us, please be aware that despite our efforts, no security measures are perfect or
                            impenetrable, and no method of data transmission can be guaranteed against any interception or
                            other
                            type of misuse.</p>

                        <h2 className="text-xl font-semibold mb-2">6. Your Data Protection Rights</h2>
                        <p className="mb-4">Depending on your location, you may have the following rights regarding your
                            personal information:</p>
                        <ul className="list-disc pl-8 mb-4">
                            <li>The right to access – You have the right to request copies of your personal information.
                            </li>
                            <li>The right to rectification – You have the right to request that we correct any information
                                you
                                believe is inaccurate or complete information you believe is incomplete.
                            </li>
                            <li>The right to erasure – You have the right to request that we erase your personal
                                information,
                                under certain conditions.
                            </li>
                            <li>The right to restrict processing – You have the right to request that we restrict the
                                processing
                                of your personal information, under certain conditions.
                            </li>
                            <li>The right to object to processing – You have the right to object to our processing of your
                                personal information, under certain conditions.
                            </li>
                            <li>The right to data portability – You have the right to request that we transfer the data that
                                we
                                have collected to another organization, or directly to you, under certain conditions.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
                        <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any
                            changes by posting the new Privacy Policy on this page. You are advised to review this Privacy
                            Policy periodically for any changes. Changes to this Privacy Policy are effective when they are
                            posted on this page.</p>

                        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at <a
                            href="#"
                            className="text-blue-500">fgacyc.technology@gmail.com</a>.
                        </p>
                        <div className={"h-10"}></div>
                    </div>
            }
        </div>
    )
}