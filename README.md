
<h1>Authentication Frontend <img src="https://img.shields.io/badge/License-GNU%20v3-blue.svg"> </h1></h1>

<p align="center" >Welcome to the Authentication Frontend project! This Vue.js project serves as the frontend interface for interacting with our backend authentication APIs. Below, you'll find information on how to set up and run the frontend application.</p>
<p align="center">
    <img src="https://img.shields.io/badge/Node.js-v16.14.0-green.svg?logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/npm-v8.1.0-red.svg?logo=npm&logoColor=white">
    <a href="#Contribution" title="Contributions are welcome"><img src="https://img.shields.io/badge/contributions-welcome-green.svg"></a>
</p>

<h2>Features</h2>

<h3>Authentication</h3>
<ul>
  <li><strong>Sign Up</strong>: Register new accounts securely. ✅</li>
  <li><strong>Email Verification</strong>: Verify user emails for enhanced security. ✅</li>
  <li><strong>Sign In</strong>: Secure login mechanism for registered users. ✅</li>
  <li><strong>Password Reset</strong>: Secure process for users to reset their passwords. ✅</li>
</ul>

<h3>User Profile</h3>
<ul>
  <li><strong>Profile Image</strong>: Upload and update profile images. ✅</li>
  <li><strong>Bio</strong>: Add, modify, or delete biography information. ✅</li>
  <li><strong>Username</strong>: Change usernames as needed. ✅</li>
  <li><strong>Remove Full Account</strong>: Remove all user data from the database.</li>
</ul>

<h3>Security Options</h3>
<ul>
  <li><strong>Attribute-based Authorization</strong>: Control resource access based on user attributes. ✅</li>
  <li><strong>Input Validation and Output Encoding</strong>: Protect against web vulnerabilities by validating inputs and encoding outputs. ✅</li>
</ul>

<h2>Startup Project</h2>

<h3>Requirements</h3>
<ul>
  <li>Node.js</li>
  <li>npm (Node Package Manager)</li>
</ul>

<h3>Installation</h3>

Clone the Frontend Repository:
  <pre><code>git clone https://github.com/amiroooamiran/Vue.js_authentication.git</code></pre>

Install dependencies:
  <pre><code>cd Vue.js_authentication
npm install</code></pre>

<h3>Configuration</h3>
<ol>
  <li>Open the <code>main.js</code> file of your Vue.js project.</li>
  <li>Find the section where axios is configured and set the base URL to match your backend server address:</li>
  <pre><code>// Example: Change the baseURL to match your backend server address
axios.defaults.baseURL = "http://localhost:8000";</code></pre>
</ol>

<h3>Run the Project</h3>
<pre><code>npm run serve</code></pre>


<h2>Docker Support</h2>

<p>The project includes a Dockerfile, facilitating the deployment of the application within Docker containers. This simplifies the deployment process and ensures consistent behavior across various environments.</p>

<h3>Run</h3>
<p>Before running the application with Docker, ensure that Docker and docker-compose are installed on your system. If not, you can install them by following the <a href="https://docs.docker.com/manuals/">official documentation</a>.</p>

<p>To start Docker, use the following commands:</p>

```
sudo systemctl start docker
sudo systemctl enable docker
```
<p>after install Docker and Run docker on your ststem, move in project directory and up docker-compose file:</p>

```
sudo docker-compose up
```

<h2>Thank You!</h2>
<p>Thank you for choosing our Authentication Frontend project! If you have any questions or need further assistance, please don't hesitate to contact us. We're here to help ensure your experience with our project is smooth and successful.</p>
