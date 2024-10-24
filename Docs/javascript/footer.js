// Get the current year
const currentYear = new Date().getFullYear();

const footerContent = `
        <footer class="back-darkGreen text-white lg:py-20 py-16 lg:px-20 px-5 lg:flex items-start justify-center gap-20">
            <div class="max-w-[25rem] w-full mb-10">
                <a href="/index.html">
                    <img src="/Docs/Assets/Images/home/footerLogo.svg" class="mb-12" alt="footer logo">
                </a>
                <p>Copyright © 2009-${currentYear} Natural Intelligence Ltd. All Rights Reserved. <br>
                    By using our content, products & services you agree to our <strong><a href="">Terms of Use</a></strong> 
                    and <strong><a href="">Privacy Policy</a></strong>.
                    <strong><a href="">NMLS Consumer Access</a></strong>
                </p> <br>
                <p>
                    Bestmoney is a dba of Natural Intelligence Technologies Inc.<br>
                    Natural Intelligence Technologies Inc. NMLS # 2084135 <br>
                    CT: Mortgage Broker only, not a mortgage lender or mortgage correspondent lender.
                </p> <br>
                <strong><a href="">Don't Sell My Personal Information</a></strong>
            </div>

            <div class="h-[2px] lg:hidden w-full bg-zinc-50 opacity-30 my-8"></div>

            <div class="max-w-[50rem] w-full">
                <ul class="flex lg:flex-row flex-col lg:items-center gap-5 font-semibold">
                    <li><a class="hover:opacity-70 transition-all duration-500" href="">About Us</a></li>
                    <li><a class="hover:opacity-70 transition-all duration-500" href="">Cookie Policy</a></li>
                    <li><a class="hover:opacity-70 transition-all duration-500" href="">Terms Of Use</a></li>
                    <li><a class="hover:opacity-70 transition-all duration-500" href="">Partner With Us</a></li>
                    <li><a class="hover:opacity-70 transition-all duration-500" href="">Privacy Policy</a></li>
                    <li><a class="hover:opacity-70 transition-all duration-500" href="">Contact</a></li>
                </ul>
                    <p class="mt-10">
        This website is designed to assist users in making informed decisions online by providing
        information about a wide range of products and services. Certain details, including but not
        limited to prices and special offers, are provided by our partners and are dynamic, meaning they
        may change at any time without prior notice. While we strive for accuracy through diligent
        research, the information shared on this site does not constitute legal, financial, or professional
        advice and should not be interpreted as such. The appearance of a company or product on this
        site does not imply endorsement. <br><br>
        We are not an investment adviser, loan provider, or broker, and do not offer loans or mortgages
        directly to end users. Instead, our platform allows users to connect with lending partners and
        platforms that may offer loans. All loan approvals, terms, and conditions are determined solely
        by the respective loan providers at the time of your application. Submitting a matching request
        through our website does not constitute a formal loan application. You must submit a separate
        loan application with the respective lender to receive a loan offer. We do not guarantee approval
        for any loan, nor do we warrant that the loan terms presented on our site will match the actual
        terms offered by the lender. <br><br>
        Insurance services on this site are provided by Natural Intelligence Technologies Inc., a licensed
        insurance producer (NPN: 19016703). Availability of services may vary by state. Additional
        licensing information can be found within our site. Insurance products are governed by the
        terms of the applicable insurance policy, and approval for coverage, premiums, commissions,
        fees, and other policy obligations are determined by the underwriting insurer. The information
        provided here does not alter or modify any insurance policy terms. <br><br>
        Reproduction of any part of this website, in whole or in part, is strictly prohibited.
    </p>

                <div class="h-[2px] w-full bg-zinc-50 opacity-30 my-8"></div>

                <p>
                    <span class="font-medium font-36">Advertising Disclosure for Creative Mind Ventures LLC, DBA Senior Savers</span> <br><br>
                            This website is a free online resource designed to provide helpful content and comparison tools
        for our visitors. We receive advertising compensation from companies featured on this site,
        which may affect the positioning and order in which brands (and/or their products) are displayed,
        as well as the ratings assigned to them. The appearance of a company or product on this page
        does not constitute an endorsement. Please note that we do not include all providers available
        in the market. Except as specifically provided in our Terms of Use, we make no representations
        or warranties regarding the accuracy or completeness of the information presented on this
        page. Pricing and other details listed on this site may change at any time without notice.
                </p>

            </div>
        </footer>
    `;

// Inject the footer content into the div with the ID 'dynamic-footer'
document.getElementById('dynamic-footer').innerHTML = footerContent;
