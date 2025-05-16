document.addEventListener('DOMContentLoaded', function() {
    // Create mobile toggle button
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-toggle d-md-none';
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileToggle.setAttribute('aria-label', 'Toggle sidebar');
    document.body.appendChild(mobileToggle);
    
    // Toggle sidebar on mobile
    mobileToggle.addEventListener('click', function() {
      const sidebar = document.querySelector('aside.sidebar');
      sidebar.classList.toggle('show');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
      const sidebar = document.querySelector('aside.sidebar');
      const mobileToggle = document.querySelector('.mobile-toggle');
      
      if (window.innerWidth < 576) {
        if (!sidebar.contains(event.target) && !mobileToggle.contains(event.target) && sidebar.classList.contains('show')) {
          sidebar.classList.remove('show');
        }
      }
    });
    
    // Make table responsive
    const tableHeaders = document.querySelectorAll('th[data-sort]');
    tableHeaders.forEach(header => {
      header.addEventListener('click', function() {
        // Your sorting logic here if needed
      });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
      const sidebar = document.querySelector('aside.sidebar');
      if (window.innerWidth >= 576 && sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
      }
    });
  });