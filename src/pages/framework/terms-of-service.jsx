import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useUserStore} from "@/store/user-store.js";
import NavBar from "@/components/nav-bar.jsx";


export default function TermsOfService() {
    const {t} = useTranslation();
    const language = useUserStore(state => state.language)

    return (
        <div>
            <NavBar ifShowBackArrow={true}>{t("Terms of Service")}</NavBar>
            {
                language === "zh"
                    ? <div className="bg-white rounded-lg shadow-md p-8 h-screen overflow-y-scroll">
                        <h1 className="text-2xl font-bold mb-4">服务条款</h1>

                        <h2 className="text-xl font-semibold mb-2">1. 介绍</h2>
                        <p className="mb-4">欢迎使用FGA科技团队（以下简称“我们”、“我们的”或“我们”）。这些服务条款（“条款”）规定了您使用我们的技术产品和服务（“服务”）的条件。访问或使用我们的服务即表示您同意受这些条款的约束。如果您不同意这些条款，请不要使用我们的服务。</p>

                        <h2 className="text-xl font-semibold mb-2">2. 资格</h2>
                        <p className="mb-4">您必须年满至少13岁才能使用我们的服务。通过使用我们的服务，您声明并保证您符合这一年龄要求。</p>

                        <h2 className="text-xl font-semibold mb-2">3. 服务使用</h2>
                        <p className="mb-4">您同意仅出于合法目的并符合这些条款的规定使用我们的服务。您对您对我们的服务的使用以及您提供的任何内容，包括遵守适用法律、规则和法规，负有责任。</p>

                        <h2 className="text-xl font-semibold mb-2">4. 用户账户</h2>
                        <p className="mb-4">要访问我们服务的某些功能，您可能需要创建一个账户。您同意在注册过程中提供准确、当前和完整的信息，并更新该信息以保持准确、当前和完整。您有责任保护您的账户凭证，并对发生在您的账户下的所有活动负责。</p>

                        <h2 className="text-xl font-semibold mb-2">5. 禁止行为</h2>
                        <p className="mb-4">您同意不得：</p>
                        <ul className="list-disc pl-8 mb-4">
                            <li>以任何违法目的使用我们的服务，或者邀请他人进行或参与任何违法行为。</li>
                            <li>违反任何国际、联邦、省级、或州级法规、规则、法律或地方法令。</li>
                            <li>侵犯我们或他人的知识产权或其他知识产权。</li>
                            <li>骚扰、滥用、侮辱、伤害、诽谤、诋毁、恐吓、或基于性别、性取向、宗教、种族、年龄、国籍或残疾进行歧视。</li>
                            <li>提交虚假或误导性信息。</li>
                            <li>上传或传输病毒或任何其他类型的恶意代码。</li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">6. 知识产权</h2>
                        <p className="mb-4">我们服务的内容、功能和功能是FGA科技团队及其许可方的专有财产，将始终保留。未经我们事先书面同意，不得使用我们的商标和商业形象与任何产品或服务相关联。</p>

                        <h2 className="text-xl font-semibold mb-2">7. 终止</h2>
                        <p className="mb-4">我们可能会立即终止或暂停您的账户，并禁止您访问我们的服务，无需事先通知或承担任何责任，无论出于何种原因，包括但不限于您违反条款。</p>

                        <h2 className="text-xl font-semibold mb-2">8. 责任限制</h2>
                        <p className="mb-4">在任何情况下，FGA科技团队、其董事、雇员、合作伙伴、代理商、供应商或关联公司均不对间接、偶发、特殊、后果性或惩罚性损害负责，包括但不限于利润损失、数据、使用、声誉或其他无形损失，由以下原因引起：(i)您使用或无法使用服务；(ii)未经授权访问或使用我们的服务器以及在其中存储的任何个人信息。</p>

                        <h2 className="text-xl font-semibold mb-2">9. 适用法律</h2>
                        <p className="mb-4">这些条款应依据马来西亚法律解释和构建，不考虑其法律冲突规定。</p>

                        <h2 className="text-xl font-semibold mb-2">10. 条款变更</h2>
                        <p className="mb-4">我们保留在我们自己的全权决定权下随时修改或替换这些条款的权利。如果修订是重大的，我们将在任何新条款生效之前至少提供30天的通知。什么构成重大变化将由我们自行决定。</p>

                        <h2 className="text-xl font-semibold mb-2">11. 联系我们</h2>
                        <p>如果您对这些条款有任何疑问，请联系我们：<a href="#"
                                                                    className="text-blue-500">fgacyc.technology@gmail.com</a>。
                        </p>
                        <div className={"h-10"}></div>
                    </div>
                    : <div className="bg-white rounded-lg shadow-md p-8 h-screen overflow-y-scroll">
                        <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>

                        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                        <p className="mb-4">Welcome to FGA Tech Team ("we," "our," or "us"). These Terms of Service
                            ("Terms")
                            govern your use of our technology products and services ("Services"). By accessing or using our
                            Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do
                            not
                            use our Services.</p>

                        <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
                        <p className="mb-4">You must be at least 13 years old to use our Services. By using our Services,
                            you
                            represent and warrant that you meet this age requirement.</p>

                        <h2 className="text-xl font-semibold mb-2">3. Use of Services</h2>
                        <p className="mb-4">You agree to use our Services only for lawful purposes and in accordance with
                            these
                            Terms. You are responsible for your use of our Services and for any content you provide,
                            including
                            compliance with applicable laws, rules, and regulations.</p>

                        <h2 className="text-xl font-semibold mb-2">4. User Accounts</h2>
                        <p className="mb-4">To access certain features of our Services, you may be required to create an
                            account. You agree to provide accurate, current, and complete information during the
                            registration
                            process and to update such information to keep it accurate, current, and complete. You are
                            responsible for safeguarding your account credentials and for all activities that occur under
                            your
                            account.</p>

                        <h2 className="text-xl font-semibold mb-2">5. Prohibited Activities</h2>
                        <p className="mb-4">You agree not to:</p>
                        <ul className="list-disc pl-8 mb-4">
                            <li>Use our Services for any unlawful purpose or to solicit others to perform or participate in
                                any
                                unlawful acts.
                            </li>
                            <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local
                                ordinances.
                            </li>
                            <li>Infringe upon or violate our intellectual property rights or the intellectual property
                                rights of
                                others.
                            </li>
                            <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based
                                on
                                gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.
                            </li>
                            <li>Submit false or misleading information.</li>
                            <li>Upload or transmit viruses or any other type of malicious code.</li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
                        <p className="mb-4">The content, features, and functionality of our Services are and will remain the
                            exclusive property of FGA Tech Team and its licensors. Our trademarks and trade dress may not be
                            used in connection with any product or service without our prior written consent.</p>

                        <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
                        <p className="mb-4">We may terminate or suspend your account and bar access to our Services
                            immediately,
                            without prior notice or liability, for any reason whatsoever, including without limitation if
                            you
                            breach the Terms.</p>

                        <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
                        <p className="mb-4">In no event shall FGA Tech Team, nor its directors, employees, partners, agents,
                            suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or
                            punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                            intangible losses, resulting from (i) your use or inability to use the Service; (ii) any
                            unauthorized access to or use of our servers and/or any personal information stored therein.</p>

                        <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
                        <p className="mb-4">These Terms shall be governed and construed in accordance with the laws of
                            Malaysia,
                            without regard to its conflict of law provisions.</p>

                        <h2 className="text-xl font-semibold mb-2">10. Changes to Terms</h2>
                        <p className="mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms
                            at
                            any time. If a revision is material, we will provide at least 30 days' notice prior to any new
                            terms
                            taking effect. What constitutes a material change will be determined at our sole discretion.</p>

                        <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us at <a
                            href="mailto:fgacyc.technology@gmail.com"
                            className="text-blue-500">fgacyc.technology@gmail.com</a>.
                        </p>
                        <div className={"h-10"}></div>
                    </div>
            }
        </div>
    )
}