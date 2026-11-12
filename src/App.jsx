import { motion } from 'framer-motion'
import {
  Heart,
  HandHeart,
  ShieldCheck,
  Sparkles,
  ArrowDown
} from 'lucide-react'
import './App.css'


function App() {


  const scrollToMission = () => {
    document.getElementById('maqsad')?.scrollIntoView({
      behavior: 'smooth'
    })
  }


  const scrollToDonation = () => {
    document.getElementById('donation')?.scrollIntoView({
      behavior: 'smooth'
    })
  }


  return (
    <main className="app">


      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <motion.p
            className="bismillah"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </motion.p>


          <motion.div
            className="ornament"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            ✦
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            NADDIPAR
          </motion.h1>


          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Apne Muhalle Ki Safai, Hifazat Aur Behtari
          </motion.p>


          <p className="hero-text">
            Ek chhoti si koshish apne muhalle ko
            pak-saaf, mehfooz aur behtar banane ki.
          </p>


          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={scrollToMission}
            >
              Hamara Maqsad
            </button>


            <button
              className="secondary-btn"
              onClick={scrollToDonation}
            >
              Donate Karein
            </button>

          </div>


          <ArrowDown className="scroll-icon" />

        </div>

      </section>



      {/* ========================================
          MISSION SECTION
      ======================================== */}

      <section
        id="maqsad"
        className="mission"
      >

        <div className="section-heading">

          <span>✦</span>

          <h2>Hamari Koshish</h2>

          <span>✦</span>

        </div>


        <p className="section-intro">
          Apne muhalle aur uski zaroori jagahon ki safai,
          hifazat aur behtari ke liye milkar kaam karna.
        </p>


        <div className="mission-cards">

          <div className="mission-card">

            <ShieldCheck />

            <h3>Hifazat</h3>

            <p>
              Kabristan ki boundary aur zaroori protection
              ko behtar banana.
            </p>

          </div>


          <div className="mission-card">

            <Sparkles />

            <h3>Safai</h3>

            <p>
              Kabristan aur aas-paas ke area ko
              saaf aur pak-saaf rakhna.
            </p>

          </div>


          <div className="mission-card">

            <HandHeart />

            <h3>Khidmat</h3>

            <p>
              Apne muhalle ke liye mil-jul kar
              khidmat aur behtari ka kaam karna.
            </p>

          </div>

        </div>

      </section>



      {/* ========================================
          CURRENT CONDITION SECTION
      ======================================== */}

      <section className="condition-section">

        <div className="section-heading">

          <span>✦</span>

          <h2>Aaj Ki Haalat</h2>

          <span>✦</span>

        </div>


        <p className="section-intro">
          Behtari ki shuruaat tab hoti hai jab hum
          apni zaroorat ko samjhein aur milkar uske liye
          ek kadam uthayein.
        </p>


        <div className="condition-grid">


          {/* Photo 1 */}

          <motion.div
            className="condition-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="condition-image">

              <img
                src="/kabristan-1.jpg"
                alt="Kabristan ki vartaman sthiti"
              />

            </div>


            <div className="condition-content">

              <span className="condition-number">
                01
              </span>


              <h3>Safai Ki Zaroorat</h3>

              <p>
                Kuch jagahon par safai aur dekhbhal ki
                zaroorat hai, jise milkar behtar banaya ja sakta hai.
              </p>

            </div>

          </motion.div>



          {/* Photo 2 */}

          <motion.div
            className="condition-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >

            <div className="condition-image">

              <img
                src="/kabristan-2.jpg"
                alt="Kabristan ki boundary aur hifazat ki zaroorat"
              />

            </div>


            <div className="condition-content">

              <span className="condition-number">
                02
              </span>


              <h3>Hifazat Ki Zaroorat</h3>

              <p>
                Kabristan ki boundary aur protection ko
                mazboot karna hamari aham zarooraton mein se ek hai.
              </p>

            </div>

          </motion.div>



          {/* Photo 3 */}

          <motion.div
            className="condition-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >

            <div className="condition-image">

              <img
                src="/kabristan-3.jpg"
                alt="Kabristan ko behtar banane ki zaroorat"
              />

            </div>


            <div className="condition-content">

              <span className="condition-number">
                03
              </span>


              <h3>Behtari Ki Zaroorat</h3>

              <p>
                Hamara maqsad sirf boundary banana nahi,
                balki is jagah ko saaf, mehfooz aur behtar banana hai.
              </p>

            </div>

          </motion.div>


        </div>


        <div className="condition-message">

          <Heart />

          <p>
            Ye tasveerein hamare safar ki shuruaat hain.
            Hamara maqsad hai ki kal isi jagah ko
            zyada saaf, mehfooz aur behtar dekhein.
          </p>

        </div>

      </section>



      {/* ========================================
          PROPOSED WORK / FENCING SECTION
      ======================================== */}

      <section className="proposed-section">

        <div className="section-heading">

          <span>✦</span>

          <h2>Hamari Agli Koshish</h2>

          <span>✦</span>

        </div>


        <p className="section-intro">
          Ab hamari koshish hai ki kabristan ko ek behtar,
          mehfooz aur saaf boundary di jaaye.
        </p>


        <div className="proposed-content">


          {/* Fencing Image */}

          <motion.div
            className="proposed-image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <img
              src="/fencing-plan.jpg"
              alt="Proposed kabristan fencing plan"
            />


            <span className="plan-badge">
              Hamari Yojna
            </span>

          </motion.div>



          {/* Information */}

          <motion.div
            className="proposed-info"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="proposed-label">
              AAGE KA KADAM
            </span>


            <h3>
              Ek Mazboot Aur Mehfooz Boundary
            </h3>


            <p>
              Hamari koshish hai ki kabristan ke aas-paas
              ek proper boundary taiyar ki jaaye, jisse jagah
              ki hifazat aur dekhbhal behtar ho sake.
            </p>


            <div className="proposed-points">

              <div>

                <ShieldCheck />

                <span>
                  Boundary ki hifazat
                </span>

              </div>


              <div>

                <Sparkles />

                <span>
                  Safai aur behtar dekhbhal
                </span>

              </div>


              <div>

                <HandHeart />

                <span>
                  Mil-jul kar khidmat
                </span>

              </div>

            </div>


            <p className="proposed-note">
              Ye tasveer hamare planned fencing work ka
              reference hai. InshaAllah, mil-jul kar is
              kaam ko haqeeqat mein badalne ki koshish hogi.
            </p>

          </motion.div>

        </div>

      </section>



      {/* ========================================
          DONATION SECTION
      ======================================== */}

      <section
        id="donation"
        className="donation-section"
      >

        <div className="section-heading">

          <span>✦</span>

          <h2>Is Nek Koshish Mein Saath Dein</h2>

          <span>✦</span>

        </div>


        <p className="section-intro">
          Kabristan ki safai, hifazat aur behtari ke is
          kaam mein aapka chhota sa sahyog bhi bahut maayne rakhta hai.
        </p>


        <div className="donation-content">


          {/* QR Code */}

          <motion.div
            className="donation-qr"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="qr-frame">

              <img
                src="/naddipar-qr.png"
                alt="NADDIPAR UPI QR Code"
              />

            </div>


            <p>
              QR Scan Karke Donate Karein
            </p>


            <a
              href="upi://pay?pa=9716107090@ybl&pn=MOHD%20FAISAL%20UZZAMA"
              className="pay-now-btn"
            >
              Pay Now
            </a>

          </motion.div>



          {/* Donation Information */}

          <motion.div
            className="donation-info"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="donation-label">
              AAPKA SAHYOG
            </span>


            <h3>
              Chhota Sa Yogdan,<br />
              Badi Si Madad
            </h3>


            <p>
              Aap apni ichha aur samarthya ke according
              is kaam mein sahyog kar sakte hain. Aapka yogdan
              kabristan ki safai, hifazat aur zaroori kaamon
              mein istemal kiya jayega.
            </p>


            <div className="donation-values">

              <div>

                <span>01</span>

                <p>
                  Safai
                </p>

              </div>


              <div>

                <span>02</span>

                <p>
                  Hifazat
                </p>

              </div>


              <div>

                <span>03</span>

                <p>
                  Behtari
                </p>

              </div>

            </div>


            <p className="donation-note">
              Allah aapke is nek kaam mein kiye gaye
              sahyog ko qubool farmaye. Ameen.
            </p>

          </motion.div>

        </div>

      </section>



      {/* ========================================
          MEMBERS SECTION
      ======================================== */}

      <section className="members-section">

        <div className="section-heading">

          <span>✦</span>

          <h2>Hamare Saathi</h2>

          <span>✦</span>

        </div>


        <p className="section-intro">
          Is nek koshish mein mil-jul kar khidmat karne wale
          hamare saathi.
        </p>


        <div className="members-grid">

          {[
            'Faisal',
            'Khalid',
            'Ishtiyaq',
            'Shafi',
            'Mosharraf',
            'Shameem',
            'Irshad',
            'Rinku',
            'Mintu',
            'Munna'
          ].map((member, index) => (

            <motion.div
              className="member-card"
              key={member}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05
              }}
            >

              <span className="member-number">
                {String(index + 1).padStart(2, '0')}
              </span>


              <h3>
                {member}
              </h3>

            </motion.div>

          ))}

        </div>

      </section>



      {/* ========================================
          CONTACT US SECTION
      ======================================== */}

      <section className="contact-section">

        <div className="section-heading">

          <span>✦</span>

          <h2>Contact Us</h2>

          <span>✦</span>

        </div>


        <p className="section-intro">
          NADDIPAR ke is nek kaam ke baare mein kisi bhi
          jaankari ya sahyog ke liye humse sampark karein.
        </p>


        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="contact-icon">
            📞
          </div>


          <div className="contact-info">

            <span>
              SAMPARK KE LIYE
            </span>

            <h3>
              +91 7975392942
            </h3>

            <p>
              Kisi bhi zaroori jaankari ke liye
              humse baat karein.
            </p>

          </div>


          <a
            href="tel:+917975392942"
            className="call-now-btn"
          >
            Call Now
          </a>

        </motion.div>

      </section>



      {/* ========================================
          PURPOSE SECTION
      ======================================== */}

      <section className="purpose">

        <Heart className="purpose-icon" />

        <h2>
          Deen Aur Duniya Dono Saath
        </h2>


        <p>
          Hamara maqsad sirf ek jagah ko behtar banana nahi,
          balki apne muhalle ko saaf, mehfooz aur khubsurat
          banana hai — jahan hum deen ki zimmedariyon ke
          saath duniya ki zarooriyat ko bhi samajh kar aage badhein.
        </p>

      </section>


{/* ========================================
    FOOTER
======================================== */}

<footer className="footer">

  <div className="footer-content">

    <div className="footer-logo">
      <span>✦</span>
      <h2>NADDIPAR</h2>
      <span>✦</span>
    </div>

    <p className="footer-tagline">
      Apne Muhalle Ki Safai, Hifazat Aur Behtari
    </p>

    <p className="footer-message">
      Ek chhoti si koshish, ek behtar muhalle ke liye.
    </p>

    <div className="footer-divider"></div>

    <p className="footer-copyright">
      © 2026 NADDIPAR. All Rights Reserved.
    </p>

    <p className="footer-made">
      Made with <span>♥</span> for Community
    </p>

  </div>

</footer>


    </main>
  )
}


export default App