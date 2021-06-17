import React from 'react';

const Navbar = () => {
    return (
     
            <nav class="navbar navbar-expand-lg navbar-light bg-light pt-2" >
  <div class="container-fluid container">
    <a class="navbar-brand" href="..">e-Offer</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="..">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="..">Offer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="..">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="..">Moderator</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="..">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="..">Login</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
       
    );
};

export default Navbar;