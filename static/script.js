const html5QrCode = new Html5Qrcode("reader");
let isScanning = true;

// 1. Start Camera
function startScanner() {
    html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        onScanSuccess
    ).catch(err => console.log("Camera Error:", err));
}

// 2. Handle Scan
function onScanSuccess(decodedText) {
    if (!isScanning) return;
    isScanning = false;
    html5QrCode.stop().then(() => checkProduct(decodedText));
}

// 3. Manual Search
function manualSearch() {
    const code = document.getElementById("manual-code").value;
    if (code) checkProduct(code);
}

// 4. Check Backend
async function checkProduct(barcode) {
    showModal();
    
    try {
        const res = await fetch('/api/scan', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ barcode: barcode })
        });
        const data = await res.json();
        
        // Update UI
        const statusEl = document.getElementById("status-badge");
        document.getElementById("p-name").innerText = data.product_name || "Unknown";
        document.getElementById("p-ing").innerText = data.ingredients || "No ingredients found.";

        if (data.halal_status && data.halal_status.includes("HARAM")) {
            statusEl.innerText = "❌ HARAM DETECTED";
            statusEl.style.background = "#ef4444"; // Red
        } else {
            statusEl.innerText = "✅ LIKELY HALAL";
            statusEl.style.background = "#10b981"; // Green
        }

    } catch (err) {
        document.getElementById("p-name").innerText = "Error";
        document.getElementById("p-ing").innerText = "Could not connect to server.";
    }
}

// 5. Animations
function showModal() {
    const modal = document.getElementById("result-modal");
    modal.classList.remove("hidden");
    gsap.to(".modal-content", { y: 0, opacity: 1, duration: 0.5, ease: "back.out" });
}

function closeModal() {
    const modal = document.getElementById("result-modal");
    gsap.to(".modal-content", { y: 50, opacity: 0, duration: 0.3, onComplete: () => {
        modal.classList.add("hidden");
        // Reset Text
        document.getElementById("status-badge").innerText = "Scanning...";
        document.getElementById("status-badge").style.background = "#334155";
        // Restart Camera
        isScanning = true;
        startScanner();
    }});
}

// Run on load
startScanner();
gsap.from(".logo", { y: -20, opacity: 0, duration: 1 });
gsap.from(".scanner-container", { scale: 0.9, opacity: 0, duration: 1, delay: 0.2 });