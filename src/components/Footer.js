"use client";

import { useState, useEffect } from 'react';

export default function Footer() {
    const [count, setCount] = useState(null);

    useEffect(() => {
        fetch('https://api.counterapi.dev/v1/shaoli-christmas/visits/up')
            .then(res => res.json())
            .then(data => setCount(data.count))
            .catch(err => console.error('Counter error:', err));
    }, []);

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
                <p>Visitor Counter</p>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                    {count !== null ? count : '...'}
                </div>
            </div>
        </div>
    );
}
