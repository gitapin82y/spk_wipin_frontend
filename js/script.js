document.addEventListener("DOMContentLoaded", function () {
  const spkToggle = document.querySelector(".spk-toggle");
  const spkSubmenu = document.getElementById("spk-submenu");
  const spkIcon = document.getElementById("spk-icon");

  // SPK submenu toggle
  spkToggle.addEventListener("click", function () {
    spkSubmenu.classList.toggle("show");
    spkIcon.classList.toggle("rotate-icon");
    spkToggle.setAttribute(
      "aria-expanded",
      spkSubmenu.classList.contains("show")
    );
  });

  // Set active class for all navigation links when clicked
  const allNavLinks = document.querySelectorAll(".nav-link, .sub-menu a");

  allNavLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Skip the SPK toggle button since it shouldn't navigate
      if (link.classList.contains("spk-toggle")) {
        return;
      }

      // Remove active class from all links
      allNavLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });

      // Add active class to clicked link
      this.classList.add("active");

      // If the clicked link is in a submenu, activate its parent toggle too
      if (this.closest(".sub-menu")) {
        const parentToggle = this.closest(".sub-menu").previousElementSibling;
        if (parentToggle) {
          parentToggle.classList.add("active");
        }
      }
    });
  });

  // Membuat item submenu juga dapat diklik
  const submenuItems = document.querySelectorAll(".sub-menu li");
  submenuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      // Prevent bubbling if clicking the link itself
      if (e.target.tagName === "A") return;

      const link = item.querySelector("a");
      if (link) {
        // Trigger the click on the link to handle active states
        link.click();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownTrigger = document.querySelector(".dropdown-trigger");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Toggle dropdown on click of either username or button
  dropdownTrigger.addEventListener("click", function () {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Close the dropdown when clicking outside
  window.addEventListener("click", function (event) {
    if (!dropdownTrigger.contains(event.target)) {
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      }
    }
  });

  // Add functionality to dropdown items
  const profileLink = document.querySelector('a[href="#profile"]');
  const logoutLink = document.querySelector('a[href="#logout"]');

  profileLink.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Profile clicked");
    alert("Profile section will open");
  });

  logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Logout clicked");
    if (confirm("Are you sure you want to logout?")) {
      alert("Logging out...");
    }
  });

  // Set initial active state based on current URL
  const setInitialActiveState = () => {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf("/") + 1);

    if (currentPage) {
      // Try to find matching link
      const matchingLink = document.querySelector(
        `.nav-link[href="${currentPage}"], .sub-menu a[href="${currentPage}"]`
      );

      if (matchingLink) {
        // Remove active class from all links
        document.querySelectorAll(".nav-link, .sub-menu a").forEach((link) => {
          link.classList.remove("active");
        });

        // Add active class to matching link
        matchingLink.classList.add("active");

        // If matching link is in submenu, expand the submenu and activate parent
        if (matchingLink.closest(".sub-menu")) {
          const submenu = matchingLink.closest(".sub-menu");
          submenu.classList.add("show");

          const parentToggle = submenu.previousElementSibling;
          if (parentToggle) {
            parentToggle.classList.add("active");
            const icon = parentToggle.querySelector(".fa-chevron-down");
            if (icon) icon.classList.add("rotate-icon");
          }
        }
      }
    }
  };

  // Call the initial active state function
  setInitialActiveState();
});
 // Additional functionality for this page
 document.addEventListener("DOMContentLoaded", function() {
  // Simulating sort functionality
  const sortIcons = document.querySelectorAll('.sort-icon');
  sortIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      alert('Sorting functionality will be implemented here');
    });
  });
  
  // Simulating edit functionality
  const editButtons = document.querySelectorAll('.edit-btn');
  editButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Edit functionality will be implemented here');
    });
  });
  
  // Simulating delete functionality
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      if(confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        alert('Delete functionality will be implemented here');
      }
    });
  });
  
  // Add new project score button
  const addButton = document.querySelector('button[style="background-color: #77b5fb"]');
  addButton.addEventListener('click', function() {
    alert('Form tambah nilai proyek akan ditampilkan');
  });
});

const employeeData = {
  '2024': [
    { id: 1, karyawan: 'Dihan', durasi: 4, kepuasan: 3, kualitas: 3, kesesuaian: 4, inisiatif: 3, skor: 100 },
    { id: 2, karyawan: 'Bagus', durasi: 3, kepuasan: 3, kualitas: 3, kesesuaian: 2, inisiatif: 2, skor: 90 },
    { id: 3, karyawan: 'Anita', durasi: 5, kepuasan: 4, kualitas: 4, kesesuaian: 3, inisiatif: 4, skor: 95 },
    { id: 4, karyawan: 'Zaenal', durasi: 2, kepuasan: 2, kualitas: 3, kesesuaian: 3, inisiatif: 2, skor: 85 },
    { id: 5, karyawan: 'Putri', durasi: 4, kepuasan: 5, kualitas: 4, kesesuaian: 4, inisiatif: 5, skor: 98 }
  ],
  '2023': [
    { id: 1, karyawan: 'Dihan', durasi: 3, kepuasan: 3, kualitas: 2, kesesuaian: 3, inisiatif: 2, skor: 88 },
    { id: 2, karyawan: 'Bagus', durasi: 2, kepuasan: 4, kualitas: 3, kesesuaian: 3, inisiatif: 3, skor: 92 },
    { id: 3, karyawan: 'Cindy', durasi: 4, kepuasan: 3, kualitas: 4, kesesuaian: 2, inisiatif: 3, skor: 90 }
  ],
  '2022': [
    { id: 1, karyawan: 'Roni', durasi: 5, kepuasan: 4, kualitas: 3, kesesuaian: 5, inisiatif: 4, skor: 97 },
    { id: 2, karyawan: 'Dihan', durasi: 3, kepuasan: 2, kualitas: 3, kesesuaian: 2, inisiatif: 2, skor: 82 }
  ]
};

document.addEventListener("DOMContentLoaded", function() {
  // Variables for pagination
  let currentPage = 1;
  let entriesPerPage = 10;
  let currentData = [...employeeData['2024']];
  let filteredData = [...currentData];
  let currentSortField = null;
  let currentSortDirection = 'asc';
  
  // Initialize the table
  renderTable();
  
  // Year selector functionality
  const yearSelector = document.getElementById('yearSelector');
  yearSelector.addEventListener('change', function() {
    const selectedYear = this.value;
    currentData = [...employeeData[selectedYear]];
    filteredData = [...currentData];
    currentPage = 1;
    renderTable();
  });
  
  // Entries selector functionality
  const entriesSelector = document.getElementById('entriesSelector');
  entriesSelector.addEventListener('change', function() {
    entriesPerPage = parseInt(this.value);
    currentPage = 1;
    renderTable();
  });
  
  // Column sorting functionality
  const sortIcons = document.querySelectorAll('.sort-icon');
  sortIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const column = this.getAttribute('data-column');
      
      // Remove active class from all icons
      sortIcons.forEach(i => {
        i.classList.remove('active-asc', 'active-desc');
      });
      
      // Set sort direction
      if (currentSortField === column) {
        currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        currentSortField = column;
        currentSortDirection = 'asc';
      }
      
      // Add active class to current icon
      this.classList.add(currentSortDirection === 'asc' ? 'active-asc' : 'active-desc');
      
      // Sort the data
      sortData(column, currentSortDirection);
      renderTable();
    });
  });
  
  // Sorting dropdown functionality
  const sortDropdownItems = document.querySelectorAll('.dropdown-item');
  sortDropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      const sortInfo = this.getAttribute('data-sort').split('-');
      const field = sortInfo[0];
      const direction = sortInfo[1];
      
      currentSortField = field;
      currentSortDirection = direction;
      
      // Map sort field names to column names
      const columnMap = {
        'nama': 'karyawan',
        'skor': 'skor'
      };
      
      sortData(columnMap[field] || field, direction);
      renderTable();
      
      // Update UI to show active sort
      document.querySelectorAll('.sort-icon').forEach(icon => {
        icon.classList.remove('active-asc', 'active-desc');
        if (icon.getAttribute('data-column') === (columnMap[field] || field)) {
          icon.classList.add(direction === 'asc' ? 'active-asc' : 'active-desc');
        }
      });
    });
  });
  
  // Function to sort data
  function sortData(field, direction) {
    filteredData.sort((a, b) => {
      if (direction === 'asc') {
        return a[field] < b[field] ? -1 : 1;
      } else {
        return a[field] > b[field] ? -1 : 1;
      }
    });
  }
  
  // Function to render table with current data and pagination
  function renderTable() {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';
    
    // Calculate pagination
    const start = (currentPage - 1) * entriesPerPage;
    const end = Math.min(start + entriesPerPage, filteredData.length);
    const paginatedData = filteredData.slice(start, end);
    
    // Render table rows
    if (paginatedData.length === 0) {
      const emptyRow = document.createElement('tr');
      emptyRow.innerHTML = `<td colspan="8" class="text-center">Tidak ada data yang ditemukan</td>`;
      tableBody.appendChild(emptyRow);
    } else {
      paginatedData.forEach((employee, index) => {
        const row = document.createElement('tr');
        row.classList.add('employee-row');
        row.innerHTML = `
          <td>${start + index + 1}</td>
          <td>${employee.karyawan}</td>
          <td>${employee.durasi}</td>
          <td>${employee.kepuasan}</td>
          <td>${employee.kualitas}</td>
          <td>${employee.kesesuaian}</td>
          <td>${employee.inisiatif}</td>
          <td class="score-cell">${employee.skor}</td>
        `;
        tableBody.appendChild(row);
      });
    }
    
    // Update pagination info
    const paginationInfo = document.getElementById('pagination-info');
    if (filteredData.length > 0) {
      paginationInfo.textContent = `Menampilkan ${start + 1} sampai ${end} dari ${filteredData.length} entri`;
    } else {
      paginationInfo.textContent = 'Tidak ada data yang ditemukan';
    }
    
    // Render pagination controls
    renderPagination();
    
    // Add row hover effect
    const rows = document.querySelectorAll('.employee-row');
    rows.forEach(row => {
      row.addEventListener('mouseenter', () => {
        row.classList.add('highlight');
      });
      row.addEventListener('mouseleave', () => {
        row.classList.remove('highlight');
      });
    });
  }
  
  // Function to render pagination controls
  function renderPagination() {
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.innerHTML = '';
    
    const totalPages = Math.ceil(filteredData.length / entriesPerPage);
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'btn btn-outline-secondary';
    prevButton.textContent = 'Sebelumnya';
    if (currentPage === 1) {
      prevButton.disabled = true;
    } else {
      prevButton.addEventListener('click', () => {
        currentPage--;
        renderTable();
      });
    }
    paginationControls.appendChild(prevButton);
    
    // Page numbers
    const maxVisiblePages = 5; // Max number of page buttons to show
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    for (let i = startPage; i <= endPage; i++) {
      const pageButton = document.createElement('button');
      pageButton.className = 'btn';
      if (i === currentPage) {
        pageButton.classList.add('active-page');
      } else {
        pageButton.classList.add('btn-outline-secondary');
      }
      pageButton.textContent = i;
      pageButton.addEventListener('click', () => {
        currentPage = i;
        renderTable();
      });
      paginationControls.appendChild(pageButton);
    }
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.className = 'btn btn-outline-secondary';
    nextButton.textContent = 'Selanjutnya';
    if (currentPage === totalPages || totalPages === 0) {
      nextButton.disabled = true;
    } else {
      nextButton.addEventListener('click', () => {
        currentPage++;
        renderTable();
      });
    }
    paginationControls.appendChild(nextButton);
  }
});

const karyawanData = [
  {
    nama: "Dihan",
    email: "dihan@gmail.com",
    username: "dihan_12312",
    posisi: "Web Developer"
  },
  {
    nama: "Bagus",
    email: "bagus@gmail.com",
    username: "bagus_12312",
    posisi: "Desain Grafis"
  },
  {
    nama: "Laras",
    email: "laras@gmail.com",
    username: "laras_56789",
    posisi: "UI/UX Designer"
  },
  {
    nama: "Rafi",
    email: "rafi@gmail.com",
    username: "rafi_98321",
    posisi: "Data Analyst"
  },
  {
    nama: "Alya",
    email: "alya@gmail.com",
    username: "alya_44123",
    posisi: "Project Manager"
  },
  {
    nama: "Fajar",
    email: "fajar@gmail.com",
    username: "fajar_11223",
    posisi: "Quality Assurance"
  },
  {
    nama: "Nina",
    email: "nina@gmail.com",
    username: "nina_88900",
    posisi: "Software Tester"
  }
];

function renderKaryawanTable() {
  const tbody = document.querySelector("#karyawan tbody");
  tbody.innerHTML = ""; // Bersihkan sebelum isi ulang

  karyawanData.forEach((karyawan, index) => {
    const row = `
      <tr>
        <td>${karyawan.nama}</td>
        <td>${karyawan.email}</td>
        <td>${karyawan.username}</td>
        <td>${karyawan.posisi}</td>
        <td>
         <a href="#" class="btn btn-hijau text-white me-3 btn-sm px-3 mb-1">Detail</a>
        <a href="#" class="btn btn-warning text-white me-3 btn-sm px-3 mb-1"><i class="fas fa-edit"></i></a>
        <a href="#" class="btn btn-danger btn-sm px-3"><i class="fas fa-trash-alt"></i></a>

        </td>
      </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", row);
  });
}

document.addEventListener("DOMContentLoaded", renderKaryawanTable);

