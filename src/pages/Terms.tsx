import { Navbar, Footer } from '../components/layout';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert max-w-none"
          >
            <h1 className="text-4xl font-bold text-white mb-8">服务条款</h1>
            
            <div className="text-gray-300 space-y-6">
              <p className="text-sm text-gray-500">更新时间：2024年1月1日</p>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">一、服务条款的确认和接纳</h2>
                <p>本服务条款（以下简称"本条款"）是您与北京词元汇智科技有限公司（以下简称"TokenAI"或"我们"）之间关于使用TokenAI网站、产品及服务的法律协议。您在访问或使用我们的服务时，即表示您已阅读、理解并同意受本条款的约束。</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">二、服务内容</h2>
                <p>TokenAI提供以下服务：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>TokenX平台：</strong>企业级智能体编排底座，支持Agent工作流构建</li>
                  <li><strong>DocPilot：</strong>面向具体业务场景的智能文档处理（IDP）产品</li>
                  <li><strong>三大底层能力引擎：</strong>多模态大模型文本智能、多模态知识引擎、数据智能引擎</li>
                  <li><strong>定制化解决方案：</strong>根据客户需求提供的行业专属AI解决方案</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">三、用户账户</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>您需要注册账户才能使用部分服务。注册时应提供真实、准确的信息。</li>
                  <li>您应妥善保管账户密码，对账户下所有活动负责。</li>
                  <li>如发现账户被盗用，请立即通知我们。</li>
                  <li>我们保留根据实际情况终止或暂停账户的权利。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">四、知识产权</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>我们的产品、技术、软件及内容（包括但不限于文字、图片、视频、代码）的知识产权归TokenAI所有。</li>
                  <li>未经书面授权，您不得复制、修改、传播、反编译或逆向工程我们的产品。</li>
                  <li>"TokenAI"、"TokenX"、"DocPilot"及相关标识是我们的注册商标。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">五、用户行为规范</h2>
                <p>您在使用我们的服务时，不得：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>违反法律法规或公序良俗</li>
                  <li>侵犯他人知识产权或其他合法权益</li>
                  <li>上传或传播病毒、木马等恶意程序</li>
                  <li>试图未经授权访问我们的系统</li>
                  <li>进行任何可能损害我们服务正常运行的行为</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">六、服务的变更和终止</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>我们可能随时修改、暂停或终止任何服务，恕不另行通知。</li>
                  <li>对于免费服务，我们有权随时终止且不承担任何责任。</li>
                  <li>如您违反本条款，我们有权终止您的服务而不退还已支付费用。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">七、免责声明</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>服务按"现状"提供，我们不保证服务无错误或中断。</li>
                  <li>对于因使用或无法使用服务造成的任何损失，我们不承担责任。</li>
                  <li>用户应对其使用服务产生的内容负责。</li>
                  <li>我们不保证服务满足您的特定需求。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">八、付费服务</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>部分服务为付费服务，具体价格以页面展示为准。</li>
                  <li>付费服务在您完成支付后生效。</li>
                  <li>退款政策根据具体产品和服务协议执行。</li>
                  <li>我们保留调整价格的权利，调整前30天通知用户。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">九、保密义务</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>双方应对在合作过程中知悉的对方商业秘密负有保密义务。</li>
                  <li>未经对方书面同意，不得向第三方披露。</li>
                  <li>保密义务在合作结束后仍然有效。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">十、违约责任</h2>
                <p>如一方违反本条款，另一方有权要求停止违约行为并赔偿损失。</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">十一、争议解决</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>本条款适用中华人民共和国法律。</li>
                  <li>因本条款产生的争议，双方应协商解决。</li>
                  <li>协商不成的，任一方可向甲方所在地人民法院提起诉讼。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">十二、其他</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>如本条款中的任何条款被认定为无效或不可执行，不影响其他条款的效力。</li>
                  <li>我们未能执行本条款中的任何权利，不代表放弃该权利。</li>
                  <li>本条款的最终解释权归TokenAI所有。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">十三、联系我们</h2>
                <p>如您对本服务条款有任何疑问，请联系我们：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>邮箱：linliang@token-ai.com.cn</li>
                  <li>电话：13795366587</li>
                  <li>地址：北京市海淀区成府路45号中关村智造大街C座105B</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
