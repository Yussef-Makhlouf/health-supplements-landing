import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 bg-white">
        <div className="container px-4 md:px-6 py-16 md:py-24 max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
              Terms of Service
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              Welcome to our website. These Terms and Conditions outline the rules and regulations for using our services. 
              By accessing or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, 
              you should discontinue using our website.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">1. General Terms</h2>
            <p className="text-gray-700 mb-8">
              By accessing this website, you agree to comply with all applicable laws and regulations and accept responsibility for your actions while using the site. 
              This website is available to users who are at least 18 years old. If you are under 18, you may not use this website.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">2. Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-8">
              All content, including but not limited to text, graphics, logos, images, videos, and software, is our property and is protected by applicable copyright, 
              trademark, and other intellectual property laws. You may not reproduce, redistribute, or use any content from our site without obtaining prior written permission from us.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">3. User Conduct</h2>
            <p className="text-gray-700 mb-4">
              You agree to use this website for lawful purposes only. You are prohibited from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>Engaging in any activity that violates any laws or regulations</li>
              <li>Attempting to gain unauthorized access to website, servers, or networks</li>
              <li>Using this website to harm or harass others, including engaging in abusive or fraudulent activity</li>
              <li>Uploading or transmitting any content that contains viruses, malware, or any other harmful component</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">4. Affiliate Disclosure</h2>
            <p className="text-gray-700 mb-8">
              Our website may contain affiliate links. This means that we may earn a commission if you click on a link and purchase a product or service. 
              However, this does not affect our recommendations, and we strive to provide honest and unbiased reviews.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">5. Product Reviews and Recommendations</h2>
            <p className="text-gray-700 mb-8">
              All product reviews and recommendations on this website are for informational purposes only. We do not guarantee the accuracy or reliability of any information provided in reviews. 
              The opinions expressed in reviews are those of the individual authors and do not represent the views of this website.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-8">
              To the fullest extent permitted by law, this website and its affiliates will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use this website. 
              This includes, but is not limited to, any errors, omissions, interruptions, or delays in the website's operation, or the accuracy of the information provided.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">7. Third-Party Links</h2>
            <p className="text-gray-700 mb-8">
              This website may contain links to third-party websites. These links are provided for your convenience only, and we do not endorse the content, products, or services offered by these third parties. 
              We are not responsible for the practices or policies of third-party websites, and you access them at your own risk.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">8. Modification of Terms</h2>
            <p className="text-gray-700 mb-8">
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this page. 
              It is your responsibility to review these terms regularly to ensure you are aware of any updates.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">9. Termination of Access</h2>
            <p className="text-gray-700 mb-8">
              We reserve the right to terminate or suspend your access to this website at any time, without prior notice, for any reason, including if you violate these Terms and Conditions. 
              Upon termination, you must immediately cease using our website and destroy any content you have downloaded or copied from our site.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">10. Indemnification</h2>
            <p className="text-gray-700 mb-8">
              You agree to indemnify and hold our website, its affiliates, partners, and employees harmless from any claims, liabilities, damages, losses, or expenses (including legal fees) arising out of your use of our website or any violation of these Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">11. Disclaimer</h2>
            <p className="text-gray-700 mb-8">
              Our website and all content provided are offered on an "as-is" and "as-available" basis, without warranties of any kind, either express or implied. 
              We do not guarantee that our website will be free of errors or uninterrupted or that the content is accurate, complete, or reliable.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">12. Governing Law</h2>
            <p className="text-gray-700 mb-8">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. 
              Any disputes arising from your use of our website shall be subject to the exclusive jurisdiction of the courts located in the United States.
            </p>

            <p className="text-gray-700 mb-12">
              <strong>By continuing to use our website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety.</strong>
            </p>

            {/* <div className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                Questions about these Terms of Service? Contact us:
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> legal@beautyrealmart.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> Beauty Realm Legal Department
              </p>
              <p className="text-gray-600 text-sm mt-4">
                We will respond to your inquiry within 30 days of receipt.
              </p>
            </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 