const AboutPage = {
        render() {
            return `
			<div class="about-section">
			<h1>About Us</h1>
			<p>TEAM WORK</p>
			<p>We are a team DEV</p>
		  </div>
		  
		  <h2 style="text-align:center">Our Team</h2>
		  <div class="row">
			<div class="column">
			  <div class="card">
				<img src="./images/profile-1-250x250.jpg" alt="Jane" >
				<div class="container">
				  <h2>Jane Doe</h2>
				  <p class="title">CEO & Founder</p>
				  <p>CEO and a Leader team</p>
				  <p>jane@example.com</p>
				  <p><button class="button">Contact</button></p>
				</div>
			  </div>
			</div>
		  
			<div class="column">
			  <div class="card">
				<img src="./images/profile-1-250x250.jpg" alt="Mike" >
				<div class="container">
				  <h2>Mike Ross</h2>
				  <p class="title">Art Director</p>
				  <p>Design template.</p>
				  <p>mike@example.com</p>
				  <p><button class="button">Contact</button></p>
				</div>
			  </div>
			</div>
			
			<div class="column">
			  <div class="card">
				<img src="./images/profile-1-250x250.jpg" alt="John">
				<div class="container">
				  <h2>John Doe</h2>
				  <p class="title">Developer Web</p>
				  <p>Coder.</p>
				  <p>john@example.com</p>
				  <p><button class="button">Contact</button></p>
				</div>
			  </div>
			</div>
		  </div>
            
            
            `
        }
}
export default AboutPage;