import ProductCard from "src/components/ProductCard";
import { stripe } from "src/utils/stripe"
import { useSession, signOut } from "next-auth/react";
import BankAccountSetUp from "src/components/BankAccountSetUp";
// import Link from "next/link";

export default function Home({ products }) {
  products = products.slice(0, 3);
  const { data: session } = useSession();
  if (session) {
    if (session.user.email === "jakirr.csesust@gmail.com") { // First log in
        return (
          <div>
            {/* Signed in as {session.user.email}
            <br />
            <button onClick={() => signOut()}>Sign out</button>
            <br /> */}
            <BankAccountSetUp />
          </div>
        )
    } else {
      return (
        <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
          <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
      </div>
      )
    }
  }
}

export async function getStaticProps() {
  const inventory = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 8,
  });

  const products = inventory.data.map(product => {
    const price = product.default_price
    return {
      currency: price.currency,
      id: product.id,
      name: product.name,
      price: price.unit_amount,
      image: product.images[0]
    }
  })

  return {
    props: {
      products
    }
  }
}