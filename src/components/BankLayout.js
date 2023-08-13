// // components/AlternateLayout.js
// const AlternateLayout = ({ children }) => {
//     return (
//       <div>
//         <nav>Alternate Navigation</nav>
//         {children}
//         <footer>Alternate Footer</footer>
//       </div>
//     );
//   };
  
//   export default AlternateLayout;

  export default function BankLayout( {children} ) {
    return (
      <div>
        <nav>Bank Layout</nav>
        {children}
        <footer>Alternate Footer</footer>
      </div>
    );
  }
  