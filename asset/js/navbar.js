const navbar = `
 <section class="top-navbar ">
        <div class="container-fluid top-nav-bg d-lg-block d-none">
            <div class="container">
                <div class="top-nav-contact d-flex justify-content-between align-items-center">
                    <div class="contact mt-1">
                        <i class="bi bi-telephone-fill "></i>
                        <a href="tel:+917498539800"> <span>+91 9075403184</span> </a>
                    </div>
                    <div class="contact mt-1">
                        <i class="bi bi-envelope-fill"></i>
                        <a href="mailto:saiserviceswaterpurifier@gmail.com"> <span>saiserviceswaterpurifier@gmail.com</span></a>
                    </div>
                    <div class="social-icon d-flex gap-4 mt-1">
                        <a href="https://wa.me/919075403184"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://www.instagram.com/saiservices_waterpurifier/?hl=en"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/people/Sai-Services/61579870421416/"><i class="fa-brands fa-facebook"></i></a>
                    </div>
                </div>

            </div>
        </div>
        <!---Top navbar end--->

        <!----Navbar---->
        <nav class="navbar navbar-expand-lg navbar-main d-lg-flex d-none">
            <div class="container">

                <a class="navbar-brand" href="/index.html"> <img src="/asset/Images/logo-main.png" alt=""
                        class="logo-main img-fluid"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto gap-4 ">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about.html">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link " href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Services
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                                <li><a class="dropdown-item" href="/ro-installation-uninstallation.html">RO Installation & Uninstallation</a></li>
                                <li><a class="dropdown-item" href="/ro-repair-maintainance.html">RO Repair & Maintenance</a></li>
                                <li><a class="dropdown-item" href="/ro-amc.html">RO AMC (Annual Maintenance Contract)</a></li>
                                <li><a class="dropdown-item" href="/ro-wholesale-spare-parts.html">RO Water purifier Wholesale & Spare parts</a></li>

                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/product.html">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blog.html">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact.html">Contact</a>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
        <!---Navbar end--->

        <!---Offcanvas Navbar--->
        <nav class="navbar d-lg-none ">
            <div class="container">
                <a class="navbar-brand fw-bold" href="/index.html">
                    <div class="logo">
                        <img src="/asset/Images/logo-main.png" alt="logo" class="img-fluid logo-main">
                        
                    </div>
                </a>

                <!----Toggler Button-->
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <div class="offcanvas-title" id="offcanvasExampleLabel">
                    <a class="navbar-brand" href="/index.html"> <img src="./Images/SaiServiceslogo.png" alt=""
                            class="logo-main img-fluid"></a>
                </div>

                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
                <ul class="navbar-nav gap-3">
                    <li class="nav-item">
                        <a class="nav-link active" href="/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about.html">About Us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link " href="#" id="mobileServicesDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="mobileServicesDropdown">
                            <li><a class="dropdown-item" href="/ro-installation-uninstallation.html">RO Installation &
                                    Uninstallation</a></li>
                            <li><a class="dropdown-item" href="/ro-repair-maintainance.html">RO Repair & Maintenance</a>
                            </li>
                            <li><a class="dropdown-item" href="/ro-amc.html">RO AMC (Annual Maintenance Contract)</a>
                            </li>
                            <li><a class="dropdown-item" href="/ro-wholesale-spare-parts.html">RO Water purifier
                                    Wholesale & Spare parts</a></li>


                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact.html">Contact Us</a>
                    </li>
                </ul>
            </div>

        </div>
        <!---Offcanvas Navbar end--->
    </section>

`

document.getElementById("my-navbar").innerHTML = navbar;