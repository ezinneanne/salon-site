document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hamburger').addEventListener('click', function() {
      document.querySelector('.nav-menu ul').classList.toggle('show');
    });
  });
  