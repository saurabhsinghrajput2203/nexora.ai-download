document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-btn');
    const loader = document.getElementById('loader');
    const downloadInfo = document.getElementById('download-info');
    const privacyBtn = document.getElementById('privacy-btn');
    
    // Replace with your actual APK file name and path
    const apkFileName = 'AiChatBot-v2025.08-byTahmid.apk';
    const apkFilePath = `${apkFileName}`;
    
    // Download button functionality
    downloadBtn.addEventListener('click', function() {
        // Show loading animation
        downloadBtn.style.display = 'none';
        loader.style.display = 'block';
        
        // Simulate download delay (remove this in production)
        setTimeout(function() {
            // Create a temporary anchor element to trigger download
            const link = document.createElement('a');
            link.href = apkFilePath;
            link.download = apkFileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Hide loader and show download info
            loader.style.display = 'none';
            downloadInfo.style.display = 'block';
            downloadInfo.textContent = 'Download started! Check your notifications.';
            
            // Reset after 5 seconds
            setTimeout(function() {
                downloadInfo.style.display = 'none';
                downloadBtn.style.display = 'inline-flex';
            }, 5000);
        }, 1500);
    });
    
    // Privacy Policy button functionality
    privacyBtn.addEventListener('click', function() {
        window.location.href = 'https://gamingtahmid1yt.github.io/aichatbot-privacy-policy/';
    });
});
