const footer = `

 <!---Sticky contact button--->
    <div class="sticky-icon">
        <div class="wp-icon onclick=openwhatsapp() mb-3">

            <a href="https://wa.me/+919075403184" target="_blank"><i class="bi bi-whatsapp"></i></a>

        </div>
    </div>

  <hr class="mt-5">

    <!---Footer-contact section---->
    <section class="footer-contact-section">
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="footer-contact ">
                            <h5 class="d-flex justify-content-center pb-4">Contact US</h5>

                            <div class="footer-contact-icon pt-3 d-flex gap-4 ">
                                <i class="bi bi-envelope-fill "></i>
                                <span><a href=""
                                        class="text-decoration-none footer-contact-number ">saiserviceswaterpurifier@gmail.com</a></span>
                            </div>
                            <div class="footer-contact-icon pt-3 ">
                                <i class="bi bi-telephone-fill me-3 "></i>
                                <span><a href="" class="text-decoration-none footer-contact-number">
                                        +91 9075403184</a></span>
                            </div>


                            <div class="map-location mt-5">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.3651069139723!2d74.15446747451651!3d19.113442582098884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd27a3fda4d857%3A0x690137121d9a22d7!2sSai%20Services%20Water%20Purifier!5e1!3m2!1sen!2sin!4v1767548374049!5m2!1sen!2sin"
                                    style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5 ">
                        <div class="enquiry-form">

                            <h3 class="enquiry-title  enqq-title text-center mb-4 ">Enquiry Now </h3>

                            <form>

                                <div class="mb-3">
                                    <label class="form-label ">Full Name</label>
                                    <input type="text" class="form-control form-text" placeholder="Enter your name" required>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label ">Address</label>
                                    <input type="text" class="form-control form-text" placeholder="Enter your address" required>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label ">Contact Number</label>
                                    <input type="tel" class="form-control form-text" placeholder="Enter your mobile number"
                                        required>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Message</label>
                                    <textarea class="form-control form-text" rows="4" placeholder="Write your message"></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary submit-button w-100">
                                    Submit Enquiry
                                </button>

                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!----Footer section------>
    <section class="footer-section">
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="footer-logo">
                            <a href="/index.html">
                                <img src="/asset/Images/logo-main.png" alt="Sai Services logo">
                            </a>
                            <p class="footer-para mt-4">Sai Services Water Purifier is a trusted service provider
                                offering
                                sales, installation,
                                repair, and maintenance of domestic and commercial RO water purifiers. We focus on
                                delivering timely and reliable service through certified technicians. Our commitment
                                to
                                quality service and customer satisfaction makes us a reliable choice for pure and
                                safe
                                drinking water. <a href="/about.html">Read More...</a></p>

                            <div class="footer-address ">
                                <h5>Address: </h5>
                                <p>Belhe-Bori Road , near Mauli Bakery and Hotel Rassa Bhakari, Shivnerwadi, Belhe,
                                    Pune, Maharashtra 412410</p>
                            </div>


                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="footer-col-two  ">
                            <h5>Services: </h5>
                            <ul class="footer-services">
                                <li><a href="/ro-installation-uninstallation.html">RO Installation & Uninstallation</a>
                                </li>
                                <li><a href="/ro-repair-maintainance.html">RO Repair & Maintenance</a></li>
                                <li><a href="/ro-amc.html">RO AMC (Annual Maintenance Contract)</a></li>
                                <li><a href="/ro-wholesale-spare-parts.html">RO Water purifier Wholesale & Spare parts</a></li>

                            </ul>

                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="footer-col-two ">
                            <h5>Quick Links: </h5>
                            <ul class="footer-services">
                                <li><a href="/index.html">Home</a></li>
                                <li><a href="/about.html">About</a></li>
                                <li><a href="/ro-installation-uninstallation.html">Services</a></li>
                                <li><a href="/product.html">Products</a></li>
                                <li><a href="/blog.html">Blog</a></li>
                                <li><a href="/contact.html">Contact Us</a></li>


                            </ul>

                            <div class="footer-social-icon d-flex gap-3 pb-4 mt-3">
                        <a href="https://wa.me/919075403184"><i class="fa-brands fa-whatsapp social-one"></i></a>
                        <a href="https://www.instagram.com/saiservices_waterpurifier/?hl=en"><i class="fa-brands fa-instagram social-two"></i></a>
                        <a href="https://www.facebook.com/people/Sai-Services/61579870421416/"><i class="fa-brands fa-facebook social-three"></i></a>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
`

document.getElementById("my-footer").innerHTML = footer;


function openwhatsapp(){
 let number = "+91 9075403184"
 let message = encodeURIComponent("I would like to chat with you. ");
 window.opem(`https://wa.me/${number}?text${message}`, "_blank");
}