"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import "intersection-observer";

export default function Terms() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length > 0) {
          // Ordena por cercanía al tope del viewport
          const closestSection = visibleSections.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
          setActiveSection(closestSection.target.id);
        }
      },
      { threshold: 1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.termsContainer}>
      <div className={styles.termsSection}>
        <nav>
          <ul>
            <li>
              <Link
                href="#general"
                className={activeSection === "general" ? "active" : ""}
              >
                General
              </Link>
            </li>
            <li>
              <Link
                href="#terms-and-conditions"
                className={
                  activeSection === "terms-and-conditions" ? "active" : ""
                }
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                href="#usage-restrictions"
                className={
                  activeSection === "usage-restrictions" ? "active" : ""
                }
              >
                Usage Restrictions
              </Link>
            </li>
            <li>
              <Link
                href="#user-comments"
                className={activeSection === "user-comments" ? "active" : ""}
              >
                User Comments
              </Link>
            </li>
            <li>
              <Link
                href="#shipping-and-returns"
                className={
                  activeSection === "shipping-and-returns" ? "active" : ""
                }
              >
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link
                href="#disclaimer"
                className={activeSection === "disclaimer" ? "active" : ""}
              >
                Disclaimer
              </Link>
            </li>
            <li>
              <Link
                href="#propietary-rights"
                className={
                  activeSection === "propietary-rights" ? "active" : ""
                }
              >
                Proprietary Rights
              </Link>
            </li>
            <li>
              <Link
                href="#limitations-of-liability"
                className={
                  activeSection === "limitations-of-liability" ? "active" : ""
                }
              >
                Limitations of Liability
              </Link>
            </li>
            <li>
              <Link
                href="#modification-of-terms-of-use"
                className={
                  activeSection === "modification-of-terms-of-use"
                    ? "active"
                    : ""
                }
              >
                Modification of Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="#user-idemnification"
                className={
                  activeSection === "user-idemnification" ? "active" : ""
                }
              >
                User Indemnification
              </Link>
            </li>
            <li>
              <Link
                href="#privacy-policy"
                className={activeSection === "privacy-policy" ? "active" : ""}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#venue-for-disputes"
                className={
                  activeSection === "venue-for-disputes" ? "active" : ""
                }
              >
                Venue for Disputes
              </Link>
            </li>
            <li>
              <Link
                href="#contact-us"
                className={activeSection === "contact-us" ? "active" : ""}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.termsSection}>
        <section id="general">
          <h4>General</h4>
          <p>
            YOUR RIGHT TO USE THE WEBSITE IS PERSONAL TO YOU AND YOU AGREE NOT
            TO USE THE WEBSITE EXPECT FOR THE PURPOSE OF PURCHASING A PRODUCT OR
            SERVICE FROM US AND YOU MAY NOT RESELL THE USE OF THE WEBSITE. BY
            USING WEBSITE, ACQUIRING A PRODUCT OR SERVICE, USER WARRANTS THAT
            USER IS AT LEAST 18 YEARS OLD (OR THE MINIMUM LEGAL AGE IN THE
            JURISDICTION IN WHICH YOU ARE VIEWING THE WEBSITE, OR ACQUIRED THE
            PRODUCT OR SERVICE). USER MAY NOT USE THE WEBSITE FOR ANY UNLAWFUL
            PURPOSE. COMPANY MAY CHANGE ANY PROVISION IN THIS AGREEMENT AT ANY
            TIME WITHOUT NOTICE. ONCE THE CHANGES APPEAR IN THIS AGREEMENT,
            USER'S USE OF THE WEBSITE WILL CONSTITUTE USER'S AGREEMENT TO THE
            MODIFIED TERMS. USER MAY PRINT A COPY OF THE AGREEMENT FOR
            REFERENCE.
          </p>
        </section>
        <section id="terms-and-conditions">
          <h4>Terms and Conditions</h4>
          <p>
            IF YOU PURCHASE A PRODUCT FROM US, THEN YOU AGREE THAT THE SEPARATE
            TERMS AND CONDITIONS FOR PURCHASE TRANSACTIONS APPLIES TO THE
            TRANSACTION AND IS INCORPORATED INTO AND MADE A PART OF THE
            AGREEMENT.
          </p>
        </section>
        <section id="usage-restrictions">
          <h4>USAGE RESTRICTIONS</h4>
          <p>
            YOU MAY ACCESS AND VIEW THE CONTENT, SUCH AS ALL TEXT, IMAGES,
            MUSIC, SOUND, PHOTOGRAPHS, VIDEO, ILLUSTRATIONS, ICONS, GRAPHICS,
            MEDIA, HEADERS, DATA, FILES, INFORMATION, AND SOFTWARE (COLLECTIVELY
            “CONTENT”) APPEARING ON THIS WEBSITE FOR PERSONAL, NON-COMMERCIAL
            USE ONLY. YOU MAY DOWNLOAD AND/OR COPY CERTAIN PORTIONS OF THE
            CONTENT FOR PERSONAL, NON-COMMERCIAL USE ONLY, PROVIDED THAT (A) DO
            NOT MODIFY OR ALTER THE CONTENT IN ANY WAY, AND (B) DO NOT MAKE THE
            CONTENT AVAILABLE TO ANY THIRD PARTY. WE RETAIN ALL COPYRIGHT,
            TRADEMARK, OR OTHER PROPRIETARY NOTICES CONTAINED ON THE CONTENT, WE
            RESERVE COMPLETE TITLE AND FULL INTELLECTUAL PROPERTY RIGHTS IN ANY
            CONTENT THAT YOU DOWNLOAD FROM THIS WEBSITE.
          </p>
          <p>
            YOU AGREE TO USE THIS WEBSITE ONLY FOR LAWFUL PURPOSES. THE
            FOLLOWING ACTIVITIES ARE STRICTLY PROHIBITED: (A) MISREPRESENTING
            THE IDENTITY OF A USER; (B) TAMPERING WITH THIS WEBSITE; AND (C)
            CONDUCTING FRAUDULENT ACTIVITIES.
          </p>
        </section>
        <section id="user-comments">
          <h4>User Comments</h4>
          <p>
            WE WELCOME YOUR COMMENTS ABOUT OUR WEBSITE. HOWEVER, YOU REPRESENT
            AND WARRANT TO US, AND ACCEPT RESPONSIBILITY FOR, THE ACCURACY,
            APPROPRIATENESS, AND LEGALITY OF THE COMMENTS YOU MAKE TO US OR
            PLACE ON OUR WEBSITE OR A SOCIAL MEDIA PLATFORM IN REFERENCE TO OUR
            SOCIAL MEDIA ACCOUNT. NOTE THAT ANY COMMENTS, FEEDBACK, NOTES,
            MESSAGES, IDEAS, SUGGESTIONS, OR OTHER COMMUNICATIONS (COLLECTIVELY
            "COMMENTS") SENT TO OUR WEBSITE SHALL BE AND REMAIN THE EXCLUSIVE
            PROPERTY OF COMPANY.
          </p>
          <p>
            YOUR SUBMISSION OF ANY SUCH COMMENTS SHALL CONSTITUTE AN ASSIGNMENT
            TO COMPANY OF ALL WORLDWIDE RIGHTS, TITLES, AND INTERESTS IN ALL
            COPYRIGHTS AND OTHER INTELLECTUAL PROPERTY RIGHTS IN THE COMMENTS.
            WE ARE ENTITLED TO USE, REPRODUCE, DISCLOSE, PUBLISH, AND DISTRIBUTE
            ANY MATERIAL YOU SUBMIT FOR ANY PURPOSE WHATSOEVER, WITHOUT
            RESTRICTION AND WITHOUT COMPENSATING YOU IN ANY WAY.
          </p>
          <p>
            FOR THIS REASON, WE ASK THAT YOU NOT SEND US ANY COMMENTS THAT YOU
            DO NOT WISH TO ASSIGN TO US, INCLUDING ANY CONFIDENTIAL INFORMATION
            OR ANY ORIGINAL CREATIVE MATERIALS SUCH AS STORIES, PRODUCT IDEAS,
            COMPUTER CODE OR ORIGINAL ARTWORK.
          </p>
        </section>
        <section id="shipping-and-returns">
          <h4>Shipping & Returns</h4>
          <p>
            THE WEBSITE MAY CONTAIN LINKS TO OTHER WEBSITES THAT ARE NEITHER
            OWNED NOR OPERATED BY COMPANY, ALTHOUGH SOME SUCH SITES MAY HAVE AN
            AFFILIATION WITH COMPANY (COLLECTIVELY, "THIRD-PARTY SITES"). TO THE
            EXTENT OUR WEBSITE CONTAINS HYPERLINKS TO OUTSIDE SERVICES AND
            RESOURCES, THE AVAILABILITY AND CONTENT OF WHICH COMPANY DOES NOT
            CONTROL, ANY CONCERNS REGARDING ANY SUCH SERVICE OR RESOURCE, OR ANY
            HYPERLINK THERETO, SHOULD BE DIRECTED TO THE PARTICULAR OUTSIDE
            SERVICE OR RESOURCE.
          </p>
          <p>
            Links to Third-Party Sites are provided for your convenience only.
            Company makes no representations whatsoever about any Third-Party
            Sites which you may access through this Website, as we have no
            control over the content appearing on such Third-Party Sites.
            Moreover, a link to a Third-Party Site does not imply and does not
            constitute sponsorship, endorsement, approval, or responsibility for
            the content on, or the use of, such Third-Party Site. No rights to
            use or copy the information on this website or the Third-Party Site
            is granted or implied. Please Note: The Terms of Use and Privacy
            Policies applicable to Third-party Sites may differ significantly
            from this Agreement. You are encouraged to review the applicable
            privacy policies of such Third-Party Sites.
          </p>
        </section>
        <section id="disclaimer">
          <h4>Disclaimer</h4>
          <p>
            This website and all Content available on this website are provided
            on an "as is" basis without warranties of any kind, either express
            or implied, including without limitation warranties of title or
            implied warranties of merchantability or fitness for a particular
            purpose. You acknowledge that your use of this website is at your
            sole risk, that you assume full responsibility for all costs
            associated with all necessary servicing or repairs of any equipment
            you use in connection with your use of this website, and that we are
            not be liable for any damages of any kind related to your use of
            this website.
          </p>
          <p>
            We attempt to ensure that the Content on this website is complete
            and current. As indicated in the terms set forth below, we cannot
            guarantee that the information contained on this website will not
            contain errors, inaccuracies, or omissions. Such errors,
            inaccuracies, or omissions may relate to price or to product
            description or availability. We reserve the right to correct any
            error, inaccuracy, or omission, or to change or update the content
            without prior notice to you. Further, we reserve the right to refuse
            or cancel any orders containing any error, inaccuracy, or omission,
            whether or not the order has been submitted, confirmed and/or your
            credit card has been charged. If your credit card has been charged
            for the purchase and your order is canceled, we shall promptly issue
            a credit to your credit card.
          </p>
        </section>
        <section id="propietary-rights">
          <h4>Propietary Rights</h4>
          <p>
            Constant Practice logos and trademarks are the property of Company.
            Please see the trademark notice legend for more details. The
            trademarks, trade names and logos on this website related to
            products sold by us are the properties of their respective owners.
            You may not use, reproduce, copy, or manipulate such logos in any
            manner without the prior written consent of the owner.
          </p>
          <p>
            All Content is subject to copyright, trademark, or other proprietary
            rights or licenses held by us or a Company affiliate or by third
            parties who have licensed their rights to Company. All Content is
            copyrighted as a collective work under the U.S. and international
            copyright laws and Orvis owns, to the fullest extent allowed by such
            law, the copyright in the arrangement, coordination, enhancement,
            and selection of such Content or this website. Except as provided
            above, you may not make copy, modify, or create derivative works of
            the Content. In addition, you may not distribute, publish, transmit,
            reuse, repost, and "frame" the Content in any manner or sell or
            attempt to sell the Content.
          </p>
        </section>
        <section id="limitations-of-liability">
          <h4>Limitations of Libaility</h4>
          <p>
            IN NO EVENT SHALL COMPANY, ITS MANAGERS, OFFICERS, OWNERS,
            EMPLOYEES, STAFF, AGENTS, AFFILIATES, SUCCESSORS OR ASSIGNS OR OTHER
            REPRESENTATIVES BE LIABLE, WHETHER IN CONTRACT, WARRANTY, TORT
            (INCLUDING NEGLIGENCE-WHETHER ACTIVE, PASSIVE, OR IMPUTED), PRODUCT
            LIABILITY, STRICT LIABILITY OR OTHER THEORY, TO YOU OR ANY OTHER
            PERSON FOR ANY DAMAGES (INCLUDING, WITHOUT LIMITATION, ANY DIRECT,
            INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL
            DAMAGES) ARISING OUT OF OR IN CONNECTION WITH ANY USE OF, INABILITY
            TO USE, OR RESULTS OF USE OF, THIS WEBSITE OR ANY CONTENT ON THIS
            WEBSITE, EVEN IF COMPANY OR ITS REPRESENTATIVE HAS BEEN ADVISED OF
            THE POSSIBILITY OF SUCH DAMAGES. IF YOU ARE DISSATISFIED WITH THIS
            WEBSITE AND THE CONTENT THEREON, OR THE AGREEMENT, YOUR SOLE AND
            EXCLUSIVE REMEDY IS TO DISCONTINUE USE OF THIS WEBSITE. IF ANY
            PORTION OF THIS LIMITATION IS FOUND TO BE INVALID OR UNENFORCEABLE
            FOR ANY REASON, THEN COMPANY’S TOTAL LIABILITY TO YOU SHALL IN NO
            EVENT EXCEED TWENTY-FIVE DOLLARS ($25). SOME JURISDICTIONS PROHIBIT
            THE EXCLUSION OR LIMITATION OF LIABILITY FOR CERTAIN TYPES OF
            DAMAGES, IN WHICH CASE THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
          </p>
        </section>
        <section id="modification-of-terms-of-use">
          <h4>Modification of Terms of Use</h4>
          <p>
            User understands and agrees that Company may discontinue or change
            the website at any time, without notice. Also, User understands and
            agrees that Company may discontinue or restrict User's use of the
            website for any reason.
          </p>
        </section>
        <section id="user-idemnification">
          <h4>User Idemnification</h4>
          <p>
            User agrees to indemnify, hold harmless, and defend Company from all
            reasonable expenses it incurs, including reasonable court costs and
            legal fees, enforcing its rights under this Agreement upon a
            violation of the Agreement, including but not limited to User's
            misuse of the website, any Content, a Product or a Service, and the
            violation of any laws.
          </p>
        </section>
        <section id="privacy-policy">
          <h4>Privacy Policy</h4>
          <p>
            The Company privacy policy is viewable from the footer of the
            website homepage and is incorporated into this Agreement.
          </p>
        </section>
        <section id="venue-for-disputes">
          <h4>Venue for Disputes</h4>
          <p>
            User agrees that for purposes of this Agreement the operation of the
            website, the delivery of all Content, and User’s access to and use
            of the website and its Content are all deemed to occur solely within
            the Commonwealth of Virginia, United States of America. Any action
            relating to the use of the website, Products, Services, marketing
            materials, catalogs or any transaction with Company must be brought
            in the state or federal courts located in the City of Richmond,
            Virginia.
          </p>
        </section>
        <section id="contact-us">
          <h4>Contact Us</h4>
          <p>
            If you have any question about our Privacy Policy, please contact us
            at info@constant-practice.com (“Contact Us Email”).
          </p>
        </section>
      </div>
    </div>
  );
}
