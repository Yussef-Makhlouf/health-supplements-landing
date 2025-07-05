import LuxuryHeader from "@/components/luxury-header"

export default function ReturnPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <LuxuryHeader />
      
      <main className="flex-1 bg-white">
        <div className="container px-4 md:px-6 py-16 md:py-24 max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
              Refund and Returns Policy
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              If you are unsatisfied with your product for any reason, you will have 60 days from the date of purchase to return the product and request a refund. You may return any product purchased from our website in accordance with the terms outlined below:
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Return Authorization</h2>
            <p className="text-gray-700 mb-4">
              A return authorization must be requested and approved within 60 days of your purchase date. Contact our support team to request and receive a Return Merchandise Authorization (RMA).
            </p>
            <p className="text-gray-700 mb-4">
              The return authorization number must be included with your returned product.
            </p>
            <p className="text-gray-700 mb-4">
              Once you receive an RMA, please return the item and email us the RMA and tracking number so we can monitor your return. You will be responsible for covering the shipping costs.
            </p>
            <p className="text-gray-700 mb-8">
              Products must be returned to the provided address within 14 days of receiving the RMA to qualify for a refund.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Return Requirements</h2>
            <p className="text-gray-700 mb-4">
              Returned product(s) must be in good physical condition (not broken or damaged). All accessories originally included with the purchase must be returned.
            </p>
            <p className="text-gray-700 mb-8">
              To complete your return, we require proof of purchase.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Non-Returnable Items</h2>
            <p className="text-gray-700 mb-4">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>Gift cards</li>
              <li>Downloadable software products</li>
              <li>Certain health and personal care items</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Partial Refunds</h2>
            <p className="text-gray-700 mb-4">
              In some cases, partial refunds may be granted for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>Items with obvious signs of use</li>
              <li>Items not in original condition, damaged, or missing parts due to reasons other than our error</li>
              <li>Items returned more than 60 days after purchase</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Refunds</h2>
            <p className="text-gray-700 mb-8">
              Once your return is received and inspected, we will notify you via email of the approval or rejection of your refund. If approved, the refund will be processed, and a credit will be applied to your original payment method within a specified number of days.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Late or Missing Refunds</h2>
            <p className="text-gray-700 mb-4">
              If you haven't received your refund, please:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Check your bank account again</li>
              <li>Contact your credit card company; it may take some time for the refund to officially post</li>
              <li>Contact your bank, as there is often a processing time before a refund is posted</li>
            </ul>
            <p className="text-gray-700 mb-8">
              If you've done all of this and still haven't received your refund, contact us.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Sale Items</h2>
            <p className="text-gray-700 mb-8">
              Only regular-priced items may be refunded. Sale items are not eligible for refunds.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Exchanges</h2>
            <p className="text-gray-700 mb-4">
              We replace items if they are defective or damaged. If you need to exchange an item, email us for instructions.
            </p>
            <p className="text-gray-700 mb-8">
              Please note that exchanges are only accepted within 60 days of delivery.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Gifts</h2>
            <p className="text-gray-700 mb-4">
              If the item was marked as a gift during purchase and shipped directly to you, you'll receive a gift credit for the value of the return. Once the returned item is received, a gift certificate will be sent to you.
            </p>
            <p className="text-gray-700 mb-8">
              If the gift was not marked during the purchase, or the gift giver had the order shipped to themselves, the refund will be sent to the gift giver.
            </p>

           
          </div>
        </div>
      </main>
    </div>
  )
} 