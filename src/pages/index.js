import ProductCard from "src/components/ProductCard";
import { stripe } from "src/utils/stripe"
import { useSession, signOut } from "next-auth/react";
import BankAccountSetUp from "src/components/BankAccountSetUp";
// import AppLayout from "src/components/Layout";
// import Link from "next/link";

// function setSession() {
//   const { data: session } = useSession();
//   if (session) {
//     const email = session.user.email
//     sessionStorage.setItem('email', email);
//     console.log('added to session')
//     return email
//   } else {
//     return 'No data'
//   }
// }
// const { data: session } = useSession();
// if (session) {
//   const email = session.user.email
//   sessionStorage.setItem('email', email);
//   console.log('added to session')
// }

export default function Home({ products }) {
  //const email = setSession();
  products = products.slice(0, 3);
  const { data: session } = useSession();
  //const email = session.user.email

  if (session) {
    if (session.user.email === "jakirr.csesust@gmail.com") { // First log in
      // const email = session.user.email
      // sessionStorage.setItem('email', email);
        return (
          // <AppLayout>
          <div>
            {/* Signed in as {session.user.email}
            <br />
            <button onClick={() => signOut()}>Sign out</button>
            <br /> */}
            <BankAccountSetUp />
          </div>
          // </AppLayout>
        )
    } else {
      return (
        // <AppLayout>
        <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
          <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
        </div>
        // </AppLayout>
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