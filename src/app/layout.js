import dynamic from 'next/dynamic'
import localFont from 'next/font/local'
import Provider from '@/store/provider'
import Script from 'next/script'
// 
import "./globals.css";
// 
export const metadata = {
  title: "Public APIs — A Directory of Free Public &amp; Open Rest APIs",
  description: "A collective list of more than 1000 Free Public and Open REST APIs for developers like movie APIs, Anime APIs, weather APIs, music APIs, games and comics APIs, currency APIs, sports APIs, science APIs, open data APIs, etc."
};
// 
const myFont = localFont({
  src: './NunitoSans.ttf',
  display: 'swap'
})
//  
const Loader = dynamic(() => import('@/components/loading'), {ssr:false});
const Header = dynamic(() => import('@/components/layout/header'), {ssr:false, loading:()=><Loader />})
const Footer = dynamic(() => import('@/components/layout/footer'), {ssr:false, loading:()=><Loader />})
const Modal = dynamic(() => import('@/components/modal'), {ssr:false})
// 
const Promotion = dynamic(() => import('@/components/home/promotion'), {ssr:false, loading:()=><Loader />})
const Category = dynamic(() => import('@/components/home/category'), {ssr:false, loading:()=><Loader />})
// 
export default ({ children }) =>
{
  return <html lang="en" className={myFont.className}>
    <head>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js" />
    </head>
    <body>
      <Provider>
        <Header />
        <div className='xl:w-[1400px] m-auto'>
          <Promotion />
          <Category /> 
        </div>
        {children}
        <Footer />
        <Modal />
      </Provider>
    </body>
  </html>
}