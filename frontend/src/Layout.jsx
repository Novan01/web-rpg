import React from 'react';
import Header from '../src/components/Header/Header'
//if I need any common formatting like header or footer - should add later
/*put header and footer  in <> tags later

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
*/
const Layout = ({children}) => {
    return (
        <>
        {/* <Header /> */}
           <main>{children}</main>
        </>
    );
};

export default Layout;