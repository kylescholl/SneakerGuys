navbar = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item active">
				<a class="nav-link" href="index.html">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="index.html">Store</a>
			</li>
			<li class="nav-item dropdown disabled">
				<a
					class="nav-link dropdown-toggle"
					href="#"
					id="navbarDropdown"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					>Categories</a
				>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item" href="#">Action</a
					><a class="dropdown-item" href="#">Another action</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="#">Something else here</a>
				</div>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="ProductManagement.html">Product MGMT</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="NewUser.html">Sign Up</a>
			</li>
		</ul>
	</div>
</nav>
`;
heading = `
<header class="bg-dark">
	<div class="container">
		<div class="text-center text--white">
			<h1 class="text--white" style="padding-top: 10px">SneakerGuys</h1>
			<h3
				class="text--white"
				style="
					font-weight: normal;
					font-style: italic;
					padding-bottom: 10px;
				"
			>
				Shop with Style!
			</h3>
		</div>
	</div>
</header>
`;
document.body.innerHTML = navbar + heading;
