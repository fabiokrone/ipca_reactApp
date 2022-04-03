import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            //Put your HTML code here		
            <footer class="footer text-center">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Endereço</h4>
                            <p class="lead mb-0">
                                1269 Avenida Gustavo Fetter
                                <br />
                                Iporã do Oeste, 89899000
                            </p>
                        </div>

                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Sobre o autor</h4>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/fabio.krone"><i class="fab fa-fw fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://twitter.com/fabiokrone"><i class="fab fa-fw fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/fabiokrone/"><i class="fab fa-fw fa-linkedin-in"></i></a>
                    
                        </div>

                      
                    </div>
                </div>
                <div class="copyright py-4 text-center text-white">
                    <div class="container"><small>Copyright &copy; Fábio Krone 2022</small></div>
                </div>
            </footer>






        )
    }
};
export default Footer;