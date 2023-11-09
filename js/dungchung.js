function addHeader() {
    document.write(` 
    <div class="container">
    <nav>
      <div class="logo">
        <a href="#"><img src="/img/banner/logoo.png" alt="Logo" height="120px" width="120px"></a>
      </div>
      <ul>
        <li><a href="#">TÁC GIẢ</a></li>
        <li class="theloai" ><a href="#">THỂ LOẠI</a>
          <div class="menuu">
             <ul >
                <li><a href="kynangsong.html">Kỹ năng sống - Phát triển cá nhân</a></li>
                <li><a href="manga.html">Manga – Comic</a></li>
                <li><a href="nghethuat.html">Nghệ thuật – Văn hóa</a></li>
                <li><a href="tamly.html">Tâm lý – Trinh Thám</a></li>
                <li><a href="tieuthuyet.html">Tiểu thuyết  </a></li>
            </ul>
          </div>
        </li>
        <li><a href="#">SÁCH MỚI</a></li>
        <li><a href="#">KHUYẾN MÃI</a></li>
      </ul>
      

      <div class="box">
        <input type="checkbox" id="check">
        <div class="search-box">
          <input type="text" placeholder="Type here...">
          <label for="check" class="icon">
            <i class="fas fa-search"></i>
          </label>
        </div>
      </div>
      <div class="buttons">
        <a href="signupsignin.html" class="login"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkpJREFUSEvl1knIjVEcx/HPS+aNcWVnYSND5lKmiNgQC2RFyZBMCymlWFjItEBSNkRKSUJIFBtTkSHWZCEkRZGp/9u59bzPe+99njvUu3B2955zft/zH87vPB16aHT0EFcz4N4Yhynp0A/xHL8bCaJR8DIcxcgc5C0243JZeCPgw9haIHwIO8rAy4Ln42YSfIRdeJJ+T8L+TOrn4k4RvCz4FualWk7Gz5xwXzzGWFzHonaAe+Eb+mMTjtcQ3Yhj+Ioh+FMPXibi6OBnSWQxrtUQjCivprkxeNUqODr4XRJZhfM1BFfiXJqLPe9bBcf+TxiKel17ENvxESPaUePQ2IfdySSW4kpOeAkuIsxlD/a2CxyN9RKjkuD91MV9UifPTP+/Sa6W7/pu5yjTXJVN0WRnE6haQGGbUec4YOFoBBxicbU2YAGm41eKPO7uyaIrlD1No+DCSMouKAsehhmYhnCufjnAjxT5A0T9PxcdoAg8GAewltJP6N+U9p3JxaqeoR54OU5geGbn9+Ri1bx6PAZm1n7AelyqRq4Fjkc+0laZP40jeIGIqJZWPBJbsCYtiLVTUxm67KkGjpcmrsZoRIQLca+oZrn5WcnTIwOvEdnokqVq4LDFbUloHU41CK0sjzRHqWJ0s9pq4IhyAG6kaJvkdm67jfgwCM1B9e5xXJsw+RgrcKEVKlbjTNKIN/pLRS8f8cTMJ03UNqJuZWTf6LDc6J3OkQfPznwvzcHdVqioqZcHh2FMSLCn2dQ0eYCaekXO1SSveNv/B/4HUH5pHwh1c9gAAAAASUVORK5CYII="/></a>
        <a href="signupsignin.html" class="btn"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXRJREFUSEvt1r9LVlEcx/GX4Kbg6iRSkG4m4pZRQ2OCm4Tg/9AgKE6Co+i/ENLgEgRBS5CUm4I4BWKSe+DSmsSR88jj7V7v90TwODxnO+d8zud9vz+4fAf0aA30iOtfwIOYxkz+6CMc43dJECXgpF3FCkYqkEtsYCcKLwHvYqnFeBuvI/Ao+BXeZsOLbP4l759hC2N5/wKf2uBR8Hc8QErpI/ysGI/iDEM4wNz/AD/MpslrHZsNpul8DVe5B37dBY9E/ARfs8lLfGgwnMf7fDeL1O2NKwJONfycHZ5jv8Etqrt+XgUP4yTXs61MJffnmMJN+qvg1BSdbi0xjmifdpXsr4i70/UGPzCO5ezcOasD1em6z26VqRpxXZ2itSt6e6/Bkfo1aRqzFYm4Dy7JQD/VN7/bfnNF/1LRBrv/zTWJb9FwCnUTOO28qRsE3mGh0LRNvofFblEdOJ2lMeZxzaDQBqjep/nrEB+rF5HRpxQW0vcM/AcLDWsfXKwkoAAAAABJRU5ErkJggg=="/></a>
      </div>
    </nav>`)
}
function addFooter() {
    document.write(` 
<section class="contact" id="contact">
      <h2>Contact Us</h2>
      <p>Reach out to us for any inquiries or feedback.</p>
      <div class="row">
        <div class="col information">
          <div class="contact-details">
            <p><i class="fas fa-map-marker-alt"></i> 273 An Dương Vương, Quận 5</p>
            <p><a href="mailto:tuanron2004@gmail.com"><i class="fas fa-envelope"></i> tuanron2004@gmail.com</a></p>
            <p><a href="tel:0796553739"><i class="fas fa-phone"></i> (84) 796553739</a></p>
            <p><i class="fas fa-clock"></i> Monday - Saturday: 9:00 AM - 5:00 PM</p>
            <p><i class="fas fa-clock"></i> Sunday: Closed</p>
            <p><i class="fas fa-globe"></i> www.hatbook.com</p>
          </div>          
        </div>
      </div>
    </section>
    
  </div>
  
  </div>

    <footer>
      <div>
        <span>Copyright © 2023 All Rights Reserved</span>
        <span class="link">
            <a href="#">Home</a>
            <a href="#contact">Contact</a>
        </span>
      </div>
    </footer>`)
}