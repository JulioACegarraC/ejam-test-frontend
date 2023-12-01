import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

import Header from './components/header/header'
import IsBigScreen from "./components/is-big-screen/IsBigScreen";

import './App.css'

function App() {
  const [isWide, setIsWide] = useState(false);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 1399px)' });


  return (
    <div className='container dis-flex flex-dir-col text-ali-cen'>
      <Header></Header>
      <main className='main box-center dis-flex flex-dir-col ali-itm-cen'>

        <section className='main-title dis-flex flex-dir-col ali-itm-cen jus-cont-sb'>
          
          <div>
          <span>Wait ! your order in progress.</span>

          </div>
          
          <span>Lorem ipsum dolor sit amet, consectetur </span>
        
        </section>

        {isSmallScreen ? <section className='main-buying-process-icons dis-flex jus-cont-sb'>
          
          <article>

            <img className='dis-blo box-center' src="check-mark-1.svg" alt="Step 1" />

            <span>Cart Review</span>

          </article>
          
          <article>

            <img className='dis-blo box-center' src="check-mark-1.svg" alt="Step 1" />

            <span>Checkout</span>

          </article>
          
          <article>

            <img className='dis-blo box-center' src="solid-number-3.svg" alt="Step 1" />

            <span><strong>Special Offer</strong></span>

          </article>
          
          <article>

            <img className='dis-blo box-center' src="empty-number-4.svg" alt="Step 1" />

            <span>Confirmation</span>

          </article>

        </section>:
        <section className='main-buying-process-icons dis-flex jus-cont-sb'>
          
          <article className="dis-flex ali-itm-cen">

            <img className='dis-blo' src="check-mark-1.svg" alt="Step 1" />

            <span>Cart Review</span>

          </article>
          
          <article className="dis-flex ali-itm-cen">

            <img className='dis-blo' src="check-mark-1.svg" alt="Step 1" />

            <span>Checkout</span>

          </article>
          
          <article className="dis-flex ali-itm-cen">

            <img className='dis-blo' src="solid-number-3.svg" alt="Step 1" />

            <span><strong>Special Offer</strong></span>

          </article>
          
          <article className="dis-flex ali-itm-cen">

            <img className='dis-blo' src="empty-number-4.svg" alt="Step 1" />

            <span>Confirmation</span>

          </article>

        </section>}

        {isSmallScreen ? <section className='main-buying-detail dis-flex flex-dir-col'>

          <article className='main-buying-detail-title text-ali-cen'>

            <span> <em>ONE TIME ONLY</em> Special Price For 6 Extra Clarifion For Only <em>$14 each</em> ($84.00 Total!)</span>

          </article>

          <article className='main-buying-detail-product'>

            <img src="product-detail-1.png" alt="Product Detail" />

          </article>

          <article className='main-buying-detail-product-stock dis-flex flex-dir-col'>

            <section className='main-buying-detail-product-stock-card dis-flex jus-cont-sb ali-itm-cen'>

              <img src="product-card-1.svg" alt="Product" />

              <article className='dis-flex flex-dir-col jus-cont-sb'>

                <header className='dis-flex flex-dir-row- jus-cont-sb text-ali-cen ali-itm-cen'>

                  <span className='dis-blo' style={{ fontSize: "14px", fontWeight: 400 }}>Clarifion Air Ionizer</span>

                  <div className='dis-flex flex-dir-row jus-cont-sb ali-itm-cen'>

                    <span className='dis-blo' style={{ fontSize: "10px", fontWeight: 600 }}><del>$180</del></span>

                    <span className='dis-blo' style={{ fontSize: "14px", fontWeight: 600 }}><em>$84</em></span>

                  </div>

                </header>

                <aside className='dis-flex jus-cont-sb'>

                  <img src="star-filled.svg" alt="Star" />

                  <img src="star-filled.svg" alt="Star" />

                  <img src="star-filled.svg" alt="Star" />

                  <img src="star-filled.svg" alt="Star" />

                  <img src="star-filled.svg" alt="Star" />

                </aside>

                <footer className='dis-flex ali-itm-cen jus-cont-sb'>

                  <img src="select-mark-1.svg" alt="Mark" />

                  <span>12 left in Stock</span>

                </footer>

              </article>

            </section>

            <section className='main-buying-detail-product-instructions text-ali-cen dis-flex'>

              <span>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</span>

            </section>

          </article>

          <article className='main-buying-detail-advantage dis-flex flex-dir-col jus-cont-sb'>
            
            <aside className='dis-flex ali-itm-cen'>

              <img src="check-mark-2.svg" alt="Check" />

              <span>Negative Ion Technology may <strong>help with allergens</strong></span>

            </aside>

            <aside className='dis-flex ali-itm-cen'>

              <img src="check-mark-2.svg" alt="Check" />

              <span>Designed for <strong>air rejuvenation</strong></span>

            </aside>

            <aside className='dis-flex ali-itm-cen'>

              <img src="check-mark-2.svg" alt="Check" />

              <span><strong>Perfect for every room</strong> in all types of places.</span>

            </aside>

          </article>

          <article className='main-buying-detail-saving dis-flex ali-itm-cen jus-cont-se'>

            <img src="percentage.svg" alt="Percentage" />

            <div className='dis-flex ali-itm-cen jus-cont-cen'>

              <span>Save <em>53%</em> and get <em>6 extra Clarifision</em> for only <em>$14 Each</em>.</span>

            </div>

          </article>

          <article className='main-buying-detail-discount dis-flex flex-dir-col'>

            <div className='dis-flex ali-itm-cen jus-cont-cen'>
              <span className='text-white'>Yes - Claim my discount</span>
              <img src="right-arrow.svg" alt="Rigth" />
            </div>

            <aside className='dis-flex flex-dir-col ali-itm-cen jus-cont-se'>

              <header className='dis-flex ali-itm-cen jus-cont-sb'>

                <section className='dis-flex jus-cont-cen'>

                  <span>Free shipping</span>
                
                </section>

                <img src="line-vertical.svg" alt="Linea" />

                <section className='dis-flex jus-cont-cen'>

                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_78_440)">
  <path d="M9.625 5.99902H2.625C2.07272 5.99902 1.625 6.44674 1.625 6.99902V10.499C1.625 11.0513 2.07272 11.499 2.625 11.499H9.625C10.1773 11.499 10.625 11.0513 10.625 10.499V6.99902C10.625 6.44674 10.1773 5.99902 9.625 5.99902Z" stroke="#696969" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.62598 5.99902V3.99902C3.62598 3.33598 3.88937 2.7001 4.35821 2.23126C4.82705 1.76242 5.46294 1.49902 6.12598 1.49902C6.78902 1.49902 7.4249 1.76242 7.89374 2.23126C8.36258 2.7001 8.62598 3.33598 8.62598 3.99902V5.99902" stroke="#696969" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_78_440">
  <rect width="12" height="12" fill="white" transform="translate(0.5 0.5)"/>
  </clipPath>
  </defs>
                  </svg>

                  <span>Secure 256-bit SSL encryption</span>

                </section>

              </header>
              <hr />
              
              <footer className='dis-flex jus-cont-sb'>
                <img src="visa.svg" alt="Visa" />
                <img src="shop.svg" alt="Shop Pay" />
                <img src="paypal.svg" alt="Paypal" />
                <img src="mastercard.svg" alt="Master Card" />
                <img src="google.svg" alt="Google Pay" />
                <img src="apple.svg" alt="Apple Pay" />
                <img src="amex.svg" alt="American Express" />
              </footer>

            </aside>

            <p>NO THANKS, I DON'T WANT THIS.</p>
          </article>

          <article className='main-buying-detail-warranty dis-flex jus-cont-sb ali-itm-s'>
            <img src="100%.svg" alt="Warranty" />
            <p>If you are not completely thrilled with your Clarifion - We have a <strong>30 day satisfaction guarantee</strong>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
          </article>

        </section>: <IsBigScreen></IsBigScreen>}
      </main>
    
      {isSmallScreen ? <footer className='footer bg-blue text-white dis-flex flex-dir-col jus-cont-se'>

        <article className='footer-copyright box-center dis-flex jus-cont-sb'>
          <small>Copyright (©) 2023</small>
          <img src="line-vertical-withe.svg" alt="Linea" />
          <small>Clarifionsupport@clarifion.com</small>
        </article>

        <article className='footer-secure box-center dis-flex ali-itm-cen jus-cont-sb'>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1667 7.33203H2.83333C2.09695 7.33203 1.5 7.92898 1.5 8.66536V13.332C1.5 14.0684 2.09695 14.6654 2.83333 14.6654H12.1667C12.903 14.6654 13.5 14.0684 13.5 13.332V8.66536C13.5 7.92898 12.903 7.33203 12.1667 7.33203Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.16797 7.33203V4.66536C4.16797 3.78131 4.51916 2.93346 5.14428 2.30834C5.7694 1.68322 6.61725 1.33203 7.5013 1.33203C8.38536 1.33203 9.2332 1.68322 9.85832 2.30834C10.4834 2.93346 10.8346 3.78131 10.8346 4.66536V7.33203" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <small>
            Secure 256-bit SSL encryption.
          </small>
        </article>

      </footer> : 
      <footer className='footer bg-blue text-white dis-flex flex-dir-row jus-cont-sb ali-itm-cen'>

        <article className='footer-copyright dis-flex jus-cont-sb'>
          <small>Copyright (©) 2023</small>
          <img src="line-vertical-withe.svg" alt="Linea" />
          <small>Clarifionsupport@clarifion.com</small>
        </article>

        <article className='footer-secure dis-flex ali-itm-cen jus-cont-sb'>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1667 7.33203H2.83333C2.09695 7.33203 1.5 7.92898 1.5 8.66536V13.332C1.5 14.0684 2.09695 14.6654 2.83333 14.6654H12.1667C12.903 14.6654 13.5 14.0684 13.5 13.332V8.66536C13.5 7.92898 12.903 7.33203 12.1667 7.33203Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.16797 7.33203V4.66536C4.16797 3.78131 4.51916 2.93346 5.14428 2.30834C5.7694 1.68322 6.61725 1.33203 7.5013 1.33203C8.38536 1.33203 9.2332 1.68322 9.85832 2.30834C10.4834 2.93346 10.8346 3.78131 10.8346 4.66536V7.33203" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <small>
            Secure 256-bit SSL encryption.
          </small>
        </article>

      </footer> }
    </div>
  )
}

export default App
 