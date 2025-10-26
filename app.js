// Aspirana - JavaScript for Interactivity
// Modern & Functional

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth Scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Format Date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('id-ID', options);
}

// Format Time Ago
function timeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    
    if (seconds < 60) return 'baru saja';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} menit lalu`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} jam lalu`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} hari lalu`;
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} minggu lalu`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} bulan lalu`;
    const years = Math.floor(days / 365);
    return `${years} tahun lalu`;
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// FORM VALIDATION
// ============================================

function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    return isValid;
}

// File Upload Handler
function handleFileUpload(input, previewArea) {
    if (!input || !previewArea) return;
    
    input.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        
        files.forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const preview = document.createElement('div');
                    preview.className = 'file-preview';
                    preview.innerHTML = `
                        <img src="${e.target.result}" alt="Preview">
                        <button type="button" class="remove-file" onclick="this.parentElement.remove()">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
                    previewArea.appendChild(preview);
                };
                
                reader.readAsDataURL(file);
            }
        });
    });
}

// ============================================
// FILTER & SEARCH
// ============================================

// Filter Reports
function filterReports() {
    const category = document.getElementById('filter-category')?.value;
    const status = document.getElementById('filter-status')?.value;
    const reports = document.querySelectorAll('.report-card');
    
    reports.forEach(report => {
        let show = true;
        
        if (category && category !== 'all') {
            const reportCategory = report.querySelector('.report-category')?.classList;
            if (!reportCategory?.contains(category)) {
                show = false;
            }
        }
        
        if (status && status !== 'all') {
            const reportStatus = report.querySelector('.report-status')?.classList;
            if (!reportStatus?.contains(status)) {
                show = false;
            }
        }
        
        report.style.display = show ? 'block' : 'none';
    });
}

// Search Reports
function searchReports(query) {
    const reports = document.querySelectorAll('.report-card');
    const searchTerm = query.toLowerCase();
    
    reports.forEach(report => {
        const title = report.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = report.querySelector('p')?.textContent.toLowerCase() || '';
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            report.style.display = 'block';
        } else {
            report.style.display = 'none';
        }
    });
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// ============================================
// SUPPORT & COMMENT ACTIONS
// ============================================

function toggleSupport(button) {
    button.classList.toggle('active');
    const icon = button.querySelector('i');
    const count = button.querySelector('span');
    
    if (button.classList.contains('active')) {
        icon.className = 'fas fa-thumbs-up';
        const currentCount = parseInt(count.textContent) || 0;
        count.textContent = currentCount + 1;
        showNotification('Anda mendukung laporan ini', 'success');
    } else {
        icon.className = 'far fa-thumbs-up';
        const currentCount = parseInt(count.textContent) || 0;
        count.textContent = Math.max(0, currentCount - 1);
    }
}

function addComment(reportId) {
    const commentText = prompt('Masukkan komentar Anda:');
    if (commentText) {
        showNotification('Komentar berhasil ditambahkan', 'success');
    }
}

// ============================================
// DASHBOARD FUNCTIONS
// ============================================

function verifyReport(reportId) {
    if (confirm('Apakah Anda yakin ingin memverifikasi laporan ini?')) {
        showNotification('Laporan berhasil diverifikasi', 'success');
        // Update status logic here
    }
}

function processReport(reportId) {
    if (confirm('Mulai proses penanganan laporan ini?')) {
        showNotification('Laporan sedang diproses', 'info');
        // Update status logic here
    }
}

function resolveReport(reportId) {
    if (confirm('Tandai laporan ini sebagai selesai?')) {
        showNotification('Laporan ditandai selesai', 'success');
        // Update status logic here
    }
}

function deleteReport(reportId) {
    if (confirm('Apakah Anda yakin ingin menghapus laporan ini?')) {
        showNotification('Laporan berhasil dihapus', 'success');
        // Delete logic here
    }
}

// Export Data
function exportData() {
    showNotification('Data berhasil diekspor', 'success');
}

// ============================================
// LOCATION SERVICES
// ============================================

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                
                // Update form fields
                const latInput = document.getElementById('lat');
                const lngInput = document.getElementById('lng');
                
                if (latInput && lngInput) {
                    latInput.value = lat.toFixed(6);
                    lngInput.value = lng.toFixed(6);
                    showNotification('Lokasi berhasil didapatkan', 'success');
                }
            },
            function(error) {
                showNotification('Gagal mendapatkan lokasi', 'error');
                console.error('Geolocation error:', error);
            }
        );
    } else {
        showNotification('Geolocation tidak didukung', 'error');
    }
}

// ============================================
// ANIMATIONS & INTERACTIONS
// ============================================

// Add animation on scroll
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.stat-card, .feature-card, .report-card').forEach(el => {
        observer.observe(el);
    });
}

// Loading State
function showLoading(element) {
    if (element) {
        element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memuat...';
        element.disabled = true;
    }
}

function hideLoading(element, originalText) {
    if (element) {
        element.innerHTML = originalText;
        element.disabled = false;
    }
}

// ============================================
// FORUM FUNCTIONS
// ============================================

function createTopic() {
    const title = prompt('Judul topik:');
    const content = prompt('Isi topik:');
    
    if (title && content) {
        showNotification('Topik berhasil dibuat', 'success');
    }
}

function sortTopics(criteria) {
    showNotification(`Topik diurutkan berdasarkan: ${criteria}`, 'info');
}

// ============================================
// INITIALIZATION
// ============================================

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add active state to navigation links
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
    
    // Initialize tooltips
    const tooltips = document.querySelectorAll('[title]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            // Add tooltip functionality here if needed
        });
    });
    
    // Auto-hide notifications after 3 seconds
    setTimeout(() => {
        document.querySelectorAll('.notification').forEach(notif => {
            notif.classList.add('show');
            setTimeout(() => notif.remove(), 300);
        });
    }, 100);
});

// ============================================
// NOTIFICATION STYLING
// ============================================

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 9999;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    }
    
    .notification.show {
        opacity: 1;
        transform: translateX(0);
    }
    
    .notification.success { border-left: 4px solid #27ae60; }
    .notification.error { border-left: 4px solid #e74c3c; }
    .notification.info { border-left: 4px solid #3498db; }
    
    .notification i {
        font-size: 1.25rem;
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Export functions for use in HTML
window.smoothScroll = smoothScroll;
window.showNotification = showNotification;
window.validateForm = validateForm;
window.filterReports = filterReports;
window.searchReports = searchReports;
window.openModal = openModal;
window.closeModal = closeModal;
window.toggleSupport = toggleSupport;
window.addComment = addComment;
window.verifyReport = verifyReport;
window.processReport = processReport;
window.resolveReport = resolveReport;
window.deleteReport = deleteReport;
window.exportData = exportData;
window.getCurrentLocation = getCurrentLocation;
window.createTopic = createTopic;
window.sortTopics = sortTopics;

