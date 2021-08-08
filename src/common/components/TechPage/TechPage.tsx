import React from "react";
import Slider from "react-slick";
import { ReactComponent as NextSlide } from "../../../images/next.svg";
import { ReactComponent as PrevSlide } from "../../../images/prev.svg";

import svgTitle from "../../../images/svg-title.svg";
import box1 from "../../../images/imgs/1.png";
import box2 from "../../../images/imgs/2.png";
// import box3 from "../../../images/imgs/3.png";
import box4 from "../../../images/imgs/4.png";
import box5 from "../../../images/imgs/5.png";

import classes from "./TechPage.module.scss";

export default function TechPage(): JSX.Element {
  const boxes = [box1, box2, box4, box5];

  return (
    <div className='page-wrapper'>
      <div className='bg-rects'>
        <div className='bg-rect bg-rect_left'></div>
        <div className='bg-rect bg-rect_left'></div>
      </div>
      <div className='bg-rects'>
        <div className='bg-rect bg-rect_right'></div>
        <div className='bg-rect bg-rect_right'></div>
        <div className='bg-rect bg-rect_right'></div>
      </div>
      <div className='container-wrapper container-wrapper_mb_med'>
        <section className='container'>
          <div className='title-svg'>
            <img src={svgTitle} alt='' className='title-svg__image' />
          </div>
        </section>
      </div>
      <div className='container-wrapper container-wrapper_mb_med'>
        <section className='container'>
          <div className='image-wrapper image-wrapper_1'>
            <div id='lottie-1' className='image image_first'></div>
            <div id='lottie-1-1' className='image image_second hide'></div>
          </div>
        </section>
      </div>
      <div className={`container-wrapper container-wrapper_mb_big ${classes.container_rewright}`}>
        <section className='container'>
          <h1 className='title title_first color_first'>Traceless BOX is</h1>
          <ul className='list'>
            <li className='list__item'>
              <div className='list__title'>Protection for your IOT devices</div>
              <div className='list__text'>
                The “Box” protects IOT devices located in the local network from external threats by
                hiding the IP addresses of initiator and addressee of every communication session
                and routing them through the decentralized network.
              </div>
            </li>
            <li className='list__item'>
              <div className='list__title'>Privacy for you</div>
              <div className='list__text'>
                Both parties of every communication session remain unknown and are connected to each
                other through the multiple intermediaries, without any of them knowing the origin
                and destination address.
              </div>
            </li>
            <li className='list__item'>
              <div className='list__title'>Post-Quantum encryption for your traffic</div>
              <div className='list__text'>
                Post-quantum encryption optionally applied to traffic and to the locally stored
                information to protect it from future threats.
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div className={`container-wrapper container-wrapper_mb_big ${classes.container_rewright}`}>
        <section className={`container ${classes.sliderWrapper}`}>
          <Slider
            dots={false}
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            fade
            nextArrow={<NextSlide />}
            prevArrow={<PrevSlide />}
          >
            {boxes.map((box, i) => (
              <div key={i} style={{ textAlign: "center", margin: "auto" }}>
                <img src={box} alt='box' className={classes.img} />
              </div>
            ))}
          </Slider>
        </section>
      </div>
      <div className='container-wrapper container-wrapper_mb_large'>
        <section className='container'>
          <h1 className='title title_first'>Protection for IOT devices</h1>
          <div className='image-wrapper image-wrapper_2'>
            <div id='lottie-2' className='image image_first'></div>
            <div id='lottie-2-2' className='image image_second hide'></div>
          </div>
          <ul className='list'>
            <li className='list__item'>
              <div className='list__title'>
                IOT gadgets can be accessed with the assistance of the traceless app
              </div>
              <div className='list__text'>
                “Traceless App” is a part of the ecosystem and it is introduced to let users
                securely communicate with IOT gadgets while outside of the home network.
              </div>
            </li>
            <li className='list__item'>
              <div className='list__title'>Hackers can't find them behind the Traceless Box</div>
              <div className='list__text'>
                None of the electronics accessible to user can be seen by others, as they can be
                accessed only through the known decentralized address that is dynamically changed.
              </div>
            </li>
            <li className='list__item'>
              <div className='list__title'>
                Even the cheapest electronics become fully protected
              </div>
              <div className='list__text'>
                Bluetooth, ZigBee, and WiFi enabled devices – All can be connected to the “Box” and
                controlled by user from the “Traceless App”, which is convenient, secure, and allows
                creating various interaction scenarios.
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div className='container-wrapper container-wrapper_mb_large'>
        <section className='container'>
          <h1 className='title title_first'>Privacy for you</h1>
          <div className='image-wrapper image-wrapper_3'>
            <div id='lottie-3' className='image image_first'></div>
            <div id='lottie-3-3' className='image image_second hide'></div>
          </div>
          <ul className='list'>
            <li className='list__item'>
              <div className='list__title'>Host encrypted content on the Traceless Box</div>
              <div className='list__text'>
                There is no one you can trust with your data, so have your own personal encrypted
                cloud that only you have physical access to.
              </div>
            </li>
            <li className='list__item'>
              <div className='list__title'>
                Make content downloadable and decryptable to the specified people, like your friends
                and family
              </div>
              <div className='list__text'>
                Share specific files or folders with others using unique links that can be set to
                expire after a period of time or dynamically change. Changing the link allows to
                ensure that only the person with the right pre-shared key will have the access to
                it.
              </div>
            </li>
            <li className='list__item'>
              <div className='list__title'>Access content that others shared with you</div>
              <div className='list__text'>
                When someone else shares the content with you in a simple manner, you may access it
                right away. In case of a protected link, “Traceless App” will help you to import
                pre-shared key and get the most updated link.
              </div>
            </li>
            <li className='list__item'>
              <div className='list__title'>
                Stream media files and live video on decentralized web
              </div>
              <div className='list__text'>
                Newly developed protocols allow establishing decentralized streaming service right
                from your “Box”. This means you can upstream video from your surveillance camera
                with much greater security than you would otherwise have in a traditional system.
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div className='container-wrapper container-wrapper_mb_small'>
        <section className='container'>
          <h1 className='title title_first'>Post-Quantium encryption for your traffic</h1>
          <div className='image-wrapper image-wrapper_4'>
            <div id='lottie-4' className='image image_first'></div>
            <div id='lottie-4-4' className='image image_second hide'></div>
          </div>
        </section>
      </div>
      <div className='container-wrapper container-wrapper_mb_small'>
        <section className='container'>
          <ul className='list list_big'>
            <li className='list__item'>
              <div className='list__title'>
                Have your connections encrypted against quantum computers
              </div>
              <div className='list__text'>
                As an additional security option, you may elect to have your traffic encrypted
                against quantum computers that will inevitably become a part of our lives soon.
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div className='container-wrapper container-wrapper_mb_small'>
        <section className='container'>
          <div className='image-wrapper image-wrapper_5 image-wrapper_dots'>
            <div id='lottie-5' className='image image_first'></div>
            <div id='lottie-5-5' className='image image_second hide'></div>
          </div>
          <ul className='list' style={{ marginTop: 0 }}>
            <li className='list__item'>
              <div className='list__title'>
                Have your personal files protected with post-quantum encryption
              </div>
              <div className='list__text'>
                The “Box” allow you to store files using its resources and share links to those
                files with the people you trust. In order to increase security, you may further
                encrypt stored files using one of the latest NIST-approved algorithms.
              </div>
            </li>
            <li className='list__item'>
              <div className='list__title'>
                Gain advantages of the embedded true Random Number Generator
              </div>
              <div className='list__text'>
                Hardware still plays crucial role when it comes to the security matters. Only a true
                random number generator can provide you with the highest degree of security, and
                this is what you get with the “Box”. QRNG Chip generates real random numbers from
                the photons emitted by the LED, all of that in a very small form factor.
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
