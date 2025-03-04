<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
            
                <link rel="stylesheet" href="styles.css" />
                <title>Epic Games</title>
            </head>
            <body>
       <header>
        <div class="logo">
          <a href="../Principal/index.html"><img src="https://cdn2.unrealengine.com/Unreal+Engine%2Feg-logo-filled-1255x1272-0eb9d144a0f981d1cbaaa1eb957de7a3207b31bb.png" alt="logo"/></a>
        </div>
        <div class="res-menu">
          <img src="../Principal/assets/icons8-menu-30.png" alt="menu" />
        </div>
        <div class="primary-menu">
          <a href="" class="primary-menu-item store-font">STORE</a>
          <a href="" class="primary-menu-item">SUPPORT</a>
          <a href="" class="primary-menu-item">DISTRIBUTE</a>
        </div>
        <div class="header-options">
          <div class="auth">
            
          </div>
          <button class="download-btn">
            DOWNLOAD
          </button>
        </div>
    </header>
    <section id="new-release">
    <div class="container">
      <h3 class="heading">DOWNLOADED</h3>

      <div class="new-games-list">
        <!-- Por cada uno de los juegos del xml, se renderiza el div del single-game -->
        <xsl:for-each select="games/game">
            <div class="single-game">
                <div class="img-box">
                    <a href="">
                        <img class="game-img">
                            <xsl:attribute name="src">
                                <xsl:value-of select="photos/photo"/>
                            </xsl:attribute>
                        </img>
                    </a>
                </div>
                <h3 class="title"><xsl:value-of select="title"/></h3>
                <div class="sub-title"><xsl:value-of select="description"/></div>
            </div>
        </xsl:for-each>


       
      </div>
    </div>
  </section>





                <footer>
                    <div class="top-content">
                        <div class="socials">
                            <img src="../Principal/assets/icons8-facebook-32.png" alt="fb" class="social" />
                            <img src="../Principal/assets/icons8-twitter-50.png" alt="twitter" class="social" />
                            <img src="../Principal/assets/icons8-play-button-50.png" alt="yt" class="social" />
                        </div>
                        <div class="small-nav">
                            <a href="index.html">
                                <img src="../Principal/assets/icons8-slide-up-50.png" />
                            </a>
                        </div>
                    </div>
                    <div class="res-madeby">
                        <div class="resources">
                            <h3 class="small-title">Resources</h3>
                            <div class="content">
                                <ul class="resource-ctr">
                                    <li>Support-A-Creator</li>
                                    <li>Publish on Epic Games</li>
                                    <li>Careers</li>
                                </ul>
                                <ul class="resource-ctr">
                                    <li>Company</li>
                                    <li>Fan Art Policy</li>
                                    <li>UX Research</li>
                                </ul>
                                <ul class="resource-ctr">
                                    <li>Store EULA</li>
                                    <li>Online Services</li>
                                    <li>Community Rules</li>
                                </ul>
                            </div>
                        </div>
                        <div class="made-by">
                            <h3 class="small-title">Made By Epic Games</h3>
                            <div class="content">
                                <ul class="madeby-ctr">
                                    <li>Battle Breakers</li>
                                    <li>Fortnite</li>
                                    <li>Infinity Blade</li>
                                    <li>Robo Recall</li>
                                </ul>
                                <ul class="madeby-ctr">
                                    <li>Shadow Complex</li>
                                    <li>Spyjinx</li>
                                    <li>Unreal Tournament</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="text-cont">
                        &amp;copy; 2019, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, 
                        Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, 
                        and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. 
                        in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. 
                        Non-US transactions through Epic Games International, S.à r.l.
                    </div>
                    <div class="down-content">
                        <div class="left-cont">
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Store Refund Policy</li>
                        </div>
                        <div class="right-cont">
                            <img src="../Principal/assets/Epic_Games_logo.png" alt="logo" />
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
