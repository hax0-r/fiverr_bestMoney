// Get the current year
const currentYear = new Date().getFullYear();

const footerContent = `
        <footer class="back-darkGreen text-white lg:py-20 py-16 lg:px-20 px-5 lg:flex items-start justify-center gap-20">
            <div class="max-w-[25rem] w-full mb-10">
                <a href="./index.html">
                    <img src="./Docs/Assets/Images/home/footerLogo.svg" class="mb-12" alt="footer logo">
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
                    Designed to help users make confident decisions online, this website contains information about a wide
                    range of products and services. Certain details, including but not limited to prices and special offers,
                    are provided to us directly from our partners and are dynamic and subject to change at any time without
                    prior notice. Though based on meticulous research, the information we share does not constitute legal or
                    professional advice or forecast, and should not be treated as such. Company listings on this site DO NOT
                    imply endorsement. <br>

                    We are not an investment adviser, loan provider, or a broker and we do not offer loans or mortgages
                    directly to end users, but only allows users to match with lending partners and platforms that may
                    extend a loan. All loan approval decisions and terms are determined by the loan providers at the time of
                    your application with them. Any matching request submitted through our website does not constitute a
                    loan application and you will have to submit a loan application to the respective lender before the
                    lender provides you with an actual offer. We do not warrant that you will be approved for a loan, nor
                    that you will be offered a loan with the same terms presented on our website. <br>

                    Insurance services are offered through Natural Intelligence Technologies Inc., a licensed insurance
                    producer (NPN: 19016703). Services may not be available in all states. Additional licensing information
                    can be found <strong><a href="" class="underline">here</a></strong>. Insurance products are governed by
                    the terms in the applicable insurance policy.
                    Approval for coverage, premiums, commissions and fees, and other policy obligations are the sole
                    responsibility of the underwriting insurer. The information on this site does not modify any insurance
                    policy terms in any way. <br>
                    Reproduction in whole or in part is strictly prohibited.
                </p>

                <div class="h-[2px] w-full bg-zinc-50 opacity-30 my-8"></div>

                <p>
                    <span class="font-medium">Advertising Disclosure</span> <br><br>
                    This site is a free online resource that strives to offer helpful content and comparison features to our
                    visitors. We accept advertising compensation from companies that appear on the site, which may impact
                    the location and order in which brands (and/or their products) are presented, and may also impact the
                    score that is assigned to it. Company listings on this page DO NOT imply endorsement. We do not feature
                    all providers on the market. Except as expressly set forth in our Terms of Use, all representations and
                    warranties regarding the information presented on this page are disclaimed. The information, including
                    pricing, which appears on this site is subject to change at any time
                </p>

            </div>
        </footer>
    `;

// Inject the footer content into the div with the ID 'dynamic-footer'
document.getElementById('dynamic-footer').innerHTML = footerContent;
