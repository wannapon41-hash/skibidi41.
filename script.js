// โค้ด JavaScript สำหรับจัดการการโต้ตอบของปุ่มในเมนูหลัก

document.addEventListener('DOMContentLoaded', () => {
    // 1. ดึงปุ่มต่างๆ จาก DOM โดยใช้ ID
    const startGameButton = document.getElementById('start-game');
    const howToPlayButton = document.getElementById('how-to-play');
    const viewCreatorsButton = document.getElementById('view-creators');
    const exitGameButton = document.getElementById('exit-game');

    // 2. กำหนด Event Listener สำหรับปุ่ม "เริ่มภารกิจโค้ดดิ้ง"
    if (startGameButton) {
        startGameButton.addEventListener('click', () => {
            // เปลี่ยนไปหน้าเกมจริง (ต้องสร้างไฟล์ชื่อ game.html ในภายหลัง)
            window.location.href = 'game.html'; 
        });
    }

    // 3. กำหนด Event Listener สำหรับปุ่ม "คู่มือผู้สร้าง"
    if (howToPlayButton) {
        howToPlayButton.addEventListener('click', () => {
            // เปลี่ยนไปหน้าคำแนะนำ (ต้องสร้างไฟล์ชื่อ manual.html ในภายหลัง)
            window.location.href = 'manual.html';
        });
    }

    // 4. กำหนด Event Listener สำหรับปุ่ม "ห้องผู้จัดทำ"
    if (viewCreatorsButton) {
        viewCreatorsButton.addEventListener('click', () => {
            // เปลี่ยนไปหน้าแนะนำตัวผู้สร้าง (ต้องสร้างไฟล์ชื่อ creators.html ในภายหลัง)
            window.location.href = 'creators.html';
        });
    }

    // 5. กำหนด Event Listener สำหรับปุ่ม "ออกจากโปรเจกต์"
    if (exitGameButton) {
        exitGameButton.addEventListener('click', () => {
            alert('ขอบคุณที่ร่วมผจญภัยกับ CodeCrafters Duo! ปิดหน้าต่างเพื่อออกจากโปรเจกต์');
            // ในเว็บไซต์จริง การปิดหน้าต่างอาจไม่อนุญาต
            // แต่สามารถเปลี่ยนไปหน้าขอบคุณแทนได้
            // window.location.href = 'thankyou.html'; 
        });
    }

    console.log("Script loaded and event listeners attached.");
});