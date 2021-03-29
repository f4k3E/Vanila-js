const ContactPage ={
 render(){
     return `
     <div class="container ">
     <div style="text-align:center">
       <h2>Contact Us</h2>
       <p>Liên hệ với chúng tôi bằng cách điền vào form dưới:</p>
     </div>
     <div class="row">
       <div class="column">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7448.597496007556!2d105.76466197677065!3d21.020729108869034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454af5398a549%3A0xbef9c5aad993ba1a!2zTeG7uSDEkMOsbmggMSwgTmFtIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1614775623888!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
       </div>
       <div class="column">
         <form action="/action_page.php">
           <label for="fname">First Name</label>
           <input type="text" id="fname" name="firstname" placeholder="Your name..">
           <label for="lname">Last Name</label>
           <input type="text" id="lname" name="lastname" placeholder="Your last name..">
           <label for="lname">Email</label>
           <input type="text" id="lname" name="email" placeholder="Your email..">
           <label for="country">Country</label>
           <select id="country" name="country">
             <option value="australia">VietNam</option>
             <option value="canada">China</option>
             <option value="usa">USA</option>
           </select>
           <label for="subject">Subject</label>
           <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
           <input type="submit" value="Submit">
         </form>
       </div>
     </div>
   </div>
   
     
     `
 }
}
export default ContactPage;