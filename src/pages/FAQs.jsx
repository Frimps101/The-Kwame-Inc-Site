import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import "./FAQs.css";

const FAQs = () => {

  const faq = useRef(null);
  const node = faq.current;

  // console.log(faq)
//   node.forEach(box => {
//     box.onclick = () => {
//         node.forEach(unbox => {
//             unbox.classList.remove('active');
//         })
//         box.classList.add('active');
//     }
// })

  return (
    <div>
      <Navbar />
      <PageHero
        title="FAQs"
        content="We work tirelessly to provide you with the highest level of service, empowered by complete transparency and user involvement."
      />

      <section class="spacer10" id="faq">
        <div class="container">
          <div class="row jc-between">
            <div class="box-faq col6 col12-s">
              <div class="box spacebottom5" ref={faq}>
                <div class="title row jc-between">
                  <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                  <i class="fas fa-angle-down size2 halfwhite"></i>
                </div>
                <p class="answer spacetop1 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates ratione ea officiis ad quam blanditiis, dignissimos
                  adipisci suscipit nobis temporibus molestias fugiat quas
                  possimus assumenda quod quae modi dolorem sed.
                </p>
              </div>
              <div class="box spacebottom5">
                <div class="title row jc-between">
                  <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                  <i class="fas fa-angle-down size2 halfwhite"></i>
                </div>
                <p class="answer spacetop1 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates ratione ea officiis ad quam blanditiis, dignissimos
                  adipisci suscipit nobis temporibus molestias fugiat quas
                  possimus assumenda quod quae modi dolorem sed.
                </p>
              </div>
              <div class="box spacebottom5">
                <div class="title row jc-between">
                  <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                  <i class="fas fa-angle-down size2 halfwhite"></i>
                </div>
                <p class="answer spacetop1 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates ratione ea officiis ad quam blanditiis, dignissimos
                  adipisci suscipit nobis temporibus molestias fugiat quas
                  possimus assumenda quod quae modi dolorem sed.
                </p>
              </div>
            </div>
            <div class="box-faq col6 col12-s">
              <div class="box spacebottom5">
                <div class="title row jc-between">
                  <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                  <i class="fas fa-angle-down size2 halfwhite"></i>
                </div>
                <p class="answer spacetop1 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates ratione ea officiis ad quam blanditiis, dignissimos
                  adipisci suscipit nobis temporibus molestias fugiat quas
                  possimus assumenda quod quae modi dolorem sed.
                </p>
              </div>
              <div class="box spacebottom5">
                <div class="title row jc-between">
                  <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                  <i class="fas fa-angle-down size2 halfwhite"></i>
                </div>
                <p class="answer spacetop1 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates ratione ea officiis ad quam blanditiis, dignissimos
                  adipisci suscipit nobis temporibus molestias fugiat quas
                  possimus assumenda quod quae modi dolorem sed.
                </p>
              </div>
              <div class="box spacebottom5">
                <div class="title row jc-between">
                  <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                  <i class="fas fa-angle-down size2 halfwhite"></i>
                </div>
                <p class="answer spacetop1 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates ratione ea officiis ad quam blanditiis, dignissimos
                  adipisci suscipit nobis temporibus molestias fugiat quas
                  possimus assumenda quod quae modi dolorem sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQs;
