import ProductCard from "src/components/ProductCard";
import { stripe } from "src/utils/stripe"
import { useSession, signOut } from "next-auth/react";
import BankAccountSetUp from "src/components/BankAccountSetUp";
import axios from "axios";

export default function Home({ products }) {
  products = products.slice(0, 3);
  const { data: session } = useSession();

  if (session) {
      const email = session.user.email
      sessionStorage.setItem('email', email);
      console.log("Email\n", email)
    // Todo: retrieve info
    // axios.post('http://localhost:3000/api/bank/getUser',{email}).then(res=>{
    //   console.log("--------------Data\n")
    //   console.log(res.data)
    //   console.log("----------------------Data\n")
    //   sessionStorage.setItem('accountNo', res.data.accountNo);
    //   sessionStorage.setItem('balance', res.data.balance);
    //   sessionStorage.setItem('name', res.data.name);
    // }).catch(e=>{
    //     console.log("error")
    // })
    //return

    
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