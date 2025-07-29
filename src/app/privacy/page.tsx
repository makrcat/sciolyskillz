
import styles from './index.module.css';
import legalstyles from './privacy.module.css';
import clsx from "clsx";

export default function Docs() {
    return (
        <div>

            <div >
                <div className={clsx(styles.dots, "flex flex-col items-center justify-center h-72")}>

                    <h1 className="text-gray-800 ">

                        Privacy Policy
                    </h1>
                    <p className={clsx(legalstyles["legal"], "bg-white")}>
                        <em>Last updated July 27, 2025</em>

                    </p>

                </div>
<div
  className="w-full h-12 bg-repeat-x bg-center bg-[length:100px_40px] mb-2 -mt-2"
  style={{
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 100 40' preserveAspectRatio='none'><path d='M0,20 Q25,0 50,20 T100,20' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='square' stroke-linejoin='miter'/></svg>")`,
  }}
></div>





                <div className={clsx(
                    legalstyles["line-height"],
                    'policy-container mx-32 my-6'
                )}>



                    <div className="flex justify-center mb-6">
                        <img src="/static/img/term.svg" style={{ "height": "52px", "width": "auto" }} />
                    </div>


                    <pre className="whitespace-pre-wrap break-words bg-gray-100 px-6 border border-gray-300 rounded-md mb-4">
                        {`
TLDR; Site data is managed using firebase and firestore. It doesn't use google analytics yet.
Authentication data is completely private. 
User data can technically be seen by me (the creator of the site), but I won't bother to.
                                `}
                    </pre>

                    <p className={legalstyles["legal"]} >This Privacy Notice for sciolyskillz (doing business as sciolyskillz) ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:</p>

                    <ul className={legalstyles["legal"]} >
                        <li>Visit our website at <a className={legalstyles["link"]} href="https://sciolyskillz.vercel.app">https://sciolyskillz.vercel.app</a> or any website of ours that links to this Privacy Notice</li>
                        <li>Use sciolyskillz. A resource hub for science olympiad.</li>
                        <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                    </ul>

                    <p className={legalstyles["legal"]} >Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a className={legalstyles["link"]} href="mailto:makrcatlabs@gmail.com">makrcatlabs@gmail.com</a>.</p>

                    <h2>Summary of Key Points</h2>
                    <p className={legalstyles["legal"]} >This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link_upper following each key point or by using our table of contents below to find the section you are looking for.</p>

                    <ul className={legalstyles["legal"]} >
                        <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.</li>
                        <li><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</li>
                        <li><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</li>
                        <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.</li>
                        <li><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.</li>
                        <li><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.</li>
                        <li><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.</li>
                        <li><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</li>
                        <li><strong>Want to learn more about what we do with any information we collect?</strong> Review the Privacy Notice in full.</li>
                    </ul>

                    <h2>Table of Contents</h2>
                    <ol className={legalstyles["link_upper"]} >
                        <li><a className={legalstyles["link"]} href="#what-information-do-we-collect">What Information Do We Collect?</a></li>
                        <li><a className={legalstyles["link"]} href="#how-do-we-process-your-information">How Do We Process Your Information?</a></li>
                        <li><a className={legalstyles["link"]} href="#when-and-with-whom-do-we-share-your-personal-information">When and With Whom Do We Share Your Personal Information?</a></li>
                        <li><a className={legalstyles["link"]} href="#do-we-offer-artificial-intelligence-based-products">Do We Offer Artificial Intelligence-Based Products?</a></li>
                        <li><a className={legalstyles["link"]} href="#how-do-we-handle-your-social-logins">How Do We Handle Your Social Logins?</a></li>
                        <li><a className={legalstyles["link"]} href="#how-long-do-we-keep-your-information">How Long Do We Keep Your Information?</a></li>
                        <li><a className={legalstyles["link"]} href="#how-do-we-keep-your-information-safe">How Do We Keep Your Information Safe?</a></li>
                        <li><a className={legalstyles["link"]} href="#what-are-your-privacy-rights">What Are Your Privacy Rights?</a></li>
                        <li><a className={legalstyles["link"]} href="#controls-for-do-not-track-features">Controls for Do-Not-Track Features</a></li>
                        <li><a className={legalstyles["link"]} href="#do-united-states-residents-have-specific-privacy-rights">Do United States Residents Have Specific Privacy Rights?</a></li>
                        <li><a className={legalstyles["link"]} href="#do-we-make-updates-to-this-notice">Do We Make Updates to This Notice?</a></li>
                        <li><a className={legalstyles["link"]} href="#how-can-you-contact-us-about-this-notice">How Can You Contact Us About This Notice?</a></li>
                        <li><a className={legalstyles["link"]} href="#how-can-you-review-update-or-delete-the-data-we-collect-from-you">How Can You Review, Update, or Delete the Data We Collect From You?</a></li>
                    </ol>

                    <h2 id="what-information-do-we-collect">1. What Information Do We Collect?</h2>

                    <h3>Personal information you disclose to us</h3>
                    <p className={legalstyles["legal"]} ><strong>In Short:</strong> We collect personal information that you provide to us.</p>
                    <p className={legalstyles["legal"]} >We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

                    <h4>Personal Information Provided by You</h4>
                    <p className={legalstyles["legal"]} >The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                    <ul className={legalstyles["legal"]} >
                        <li>names</li>
                        <li>email addresses</li>
                        <li>usernames</li>
                    </ul>

                    <h4>Sensitive Information</h4>
                    <p className={legalstyles["legal"]} >We do not process sensitive information.</p>

                    <h4>Social Media Login Data</h4>
                    <p className={legalstyles["legal"]} >We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.</p>

                    <p className={legalstyles["legal"]} >All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

                    <p className={legalstyles["legal"]} ><strong>Google API</strong><br />Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>

                    <h2 id="how-do-we-process-your-information">2. How Do We Process Your Information?</h2>
                    <p className={legalstyles["legal"]} ><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>

                    <p className={legalstyles["legal"]} >We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
                    <ul className={legalstyles["legal"]} >
                        <li>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                    </ul>

                    <h2 id="when-and-with-whom-do-we-share-your-personal-information">3. When and With Whom Do We Share Your Personal Information?</h2>
                    <p className={legalstyles["legal"]} ><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
                    <p className={legalstyles["legal"]} >We may need to share your personal information in the following situations:</p>
                    <ul className={legalstyles["legal"]} >
                        <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                    </ul>

                    <h2 id="do-we-offer-artificial-intelligence-based-products">4. Do We Offer Artificial Intelligence-Based Products?</h2>
                    <p className={legalstyles["legal"]} ><strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>

                    <p className={legalstyles["legal"]} >As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.</p>

                    <h3>Use of AI Technologies</h3>
                    <p className={legalstyles["legal"]} >We provide the AI Products through third-party service providers ("AI Service Providers"), including OpenAI, which may process your personal information to provide the AI functionalities.</p>

                    <h3>Your Choices Regarding AI</h3>
                    <p className={legalstyles["legal"]} >You may choose not to use certain AI features within our Services. If you have any concerns about how AI is used, please contact us.</p>

                    <h2 id="how-do-we-handle-your-social-logins">5. How Do We Handle Your Social Logins?</h2>
                    <p className={legalstyles["legal"]} ><strong>In Short:</strong> If you choose to register or log in using a social media account, we may collect certain information from that account.</p>

                    <p className={legalstyles["legal"]} >Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, profile picture, and other information you choose to make public.</p>

                    <p className={legalstyles["legal"]} >We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>

                    <h2 id="how-long-do-we-keep-your-information">6. How Long Do We Keep Your Information?</h2>
                    <p className={legalstyles["legal"]} ><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>

                    <p className={legalstyles["legal"]} >We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than two years past the termination of your account.</p>

                    <h2 id="how-do-we-keep-your-information-safe">7. How Do We Keep Your Information Safe?</h2>
                    <p className={legalstyles["legal"]} ><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</p>

                    <p className={legalstyles["legal"]} >We have implemented appropriate technical and organizational security measures designed to protect the security of your personal information. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</p>

                    <h2 id="what-are-your-privacy-rights">8. What Are Your Privacy Rights?</h2>
                    <p className={legalstyles["legal"]} ><strong>In Short:</strong> You have rights that allow you greater access to and control over your personal information. You have the right under certain circumstances to request access to and correction of your personal information.</p>

                    <h2 id="controls-for-do-not-track-features">9. Controls for Do-Not-Track Features</h2>
                    <p className={legalstyles["legal"]} >Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>

                    <h2 id="do-united-states-residents-have-specific-privacy-rights">10. Do United States Residents Have Specific Privacy Rights?</h2>
                    <p className={legalstyles["legal"]} ><strong>In Short:</strong> Yes, if you are a resident of the United States, you may have specific rights under state privacy laws.</p>

                    <p className={legalstyles["legal"]} >California Residents: You have the right to request information regarding the disclosure of your personal information to third parties for their direct marketing purposes. To make such a request, please submit your request to us using the contact information provided below.</p>

                    <p className={legalstyles["legal"]} >Under the California Consumer Privacy Act (CCPA), California residents have the right to:</p>
                    <ul className={legalstyles["legal"]} >
                        <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                        <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                        <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
                    </ul>

                    <p className={legalstyles["legal"]} >If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

                    <h2 id="do-we-make-updates-to-this-notice">11. Do We Make Updates to This Notice?</h2>
                    <p className={legalstyles["legal"]} ><strong>In Short:</strong> Yes, we will update this notice as necessary to comply with relevant laws.</p>

                    <p className={legalstyles["legal"]} >We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>

                    <h2 id="how-can-you-contact-us-about-this-notice">12. How Can You Contact Us About This Notice?</h2>
                    <p className={legalstyles["legal"]} >If you have questions or comments about this notice, you may email <a className={legalstyles["link"]} href="mailto:makrcatlabs@gmail.com">makrcatlabs@gmail.com.</a></p>

                    <h2 id="how-can-you-review-update-or-delete-the-data-we-collect-from-you">13. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
                    <p className={legalstyles["legal"]} >Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request to us by emailing <a className={legalstyles["link"]} href="mailto:makrcatlabs@gmail.com">makrcatlabs@gmail.com</a>. We will respond to your request within 30 days.</p>

                </div>






            </div>
        </div>
    );
}
