import { Navbar, Footer } from '../components/layout';
import { motion } from 'framer-motion';

export default function Privacy() {
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
            <h1 className="text-4xl font-bold text-white mb-8">隐私政策</h1>
            
            <div className="text-gray-300 space-y-6">
              <p className="text-sm text-gray-500">更新时间：2024年1月1日</p>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">一、适用范围</h2>
                <p>本隐私政策适用于北京词元汇智科技有限公司（以下简称"TokenAI"或"我们"）提供的所有产品和服务。您在使用我们的网站、移动应用、产品及服务时，我们将收集、使用、存储和保护您的个人信息。</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">二、信息收集</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>个人信息：</strong>包括但不限于姓名、电话号码、电子邮箱、公司名称、职位等您在填写表单或联系我们时主动提供的信息。</li>
                  <li><strong>使用数据：</strong>包括访问时间、浏览页面、操作系统、浏览器类型等信息。</li>
                  <li><strong>Cookies：</strong>我们使用Cookies收集您的浏览偏好，提升用户体验。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">三、信息使用</h2>
                <p>我们收集的信息将用于以下目的：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>为您提供产品演示和咨询服务</li>
                  <li>响应您的询问和需求</li>
                  <li>发送产品更新、活动通知等营销信息（您可随时退订）</li>
                  <li>改进我们的产品和服务</li>
                  <li>遵守法律法规要求</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">四、信息保护</h2>
                <p>我们采取严格的安全措施保护您的个人信息：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>采用加密技术传输敏感信息</li>
                  <li>限制员工访问个人信息的权限</li>
                  <li>定期进行安全审计</li>
                  <li>遵守相关法律法规进行数据存储和删除</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">五、信息共享</h2>
                <p>我们不会出售您的个人信息。在以下情况下，我们可能共享您的信息：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>获得您的明确同意</li>
                  <li>与可信赖的服务提供商共享（仅用于提供服务）</li>
                  <li>法律法规要求</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">六、您的权利</h2>
                <p>根据适用法律，您享有以下权利：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>访问您的个人信息</li>
                  <li>更正不准确的信息</li>
                  <li>删除您的个人信息</li>
                  <li>撤回同意</li>
                  <li>数据可携带权</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">七、未成年人隐私</h2>
                <p>我们的服务不面向未满18岁的未成年人。如您发现未成年人向我们提供了个人信息，请联系我们进行删除。</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">八、政策更新</h2>
                <p>我们可能不时更新本隐私政策。更新后我们将在页面显著位置通知您。如您继续使用我们的服务，即表示同意更新后的政策。</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">九、联系我们</h2>
                <p>如您对本隐私政策有任何疑问，请联系我们：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>邮箱：linliang@token-ai.com.cn</li>
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
