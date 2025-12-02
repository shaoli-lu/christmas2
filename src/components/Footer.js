export default function Footer() {
    return (
        <div className="glass-card" style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: '#ccc' }}>
            <p>&copy; 2020 Shaoli</p>
            <div style={{ margin: '1rem 0' }}>
                {/* Placeholder for QR Code */}
                <div style={{ width: '100px', height: '100px', background: 'white', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }}>
                    <img
                        src="/qrcode_shaoli-lu.github.io.png"
                        alt="QR Code"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                </div>
            </div>
            <div>
                <p>MySong Counter</p>
                {/* Counter placeholder */}
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent)' }}>12345</div>
            </div>
        </div>
    );
}
