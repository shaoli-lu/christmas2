"use client";

import { useState, useEffect } from 'react';

export default function Footer() {
    const [count, setCount] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        let interval;
        let retryCount = 0;
        const maxRetries = 3;

        // Increment on mount
        fetch('/api/counter', { method: 'POST' })
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(data => {
                setCount(data.count);
                setError(false);
                retryCount = 0;
            })
            .catch(err => {
                console.error('Counter error:', err);
                setError(true);
            });

        // Poll for updates every 5 seconds (reduced frequency to avoid rate limiting)
        interval = setInterval(() => {
            if (retryCount >= maxRetries) {
                console.log('Max retries reached, stopping polling');
                clearInterval(interval);
                return;
            }

            fetch('/api/counter')
                .then(res => {
                    if (!res.ok) throw new Error('Network response was not ok');
                    return res.json();
                })
                .then(data => {
                    setCount(data.count);
                    setError(false);
                    retryCount = 0;
                })
                .catch(err => {
                    console.error('Counter poll error:', err);
                    retryCount++;
                    if (retryCount >= maxRetries) {
                        setError(true);
                    }
                });
        }, 5000);

        return () => {
            if (interval) clearInterval(interval);
        };
    }, []);

    return (
        <div className="glass-card" suppressHydrationWarning style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: '#ccc' }}>
            <p>
                <a
                    href="/copyright"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#ccc',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                    &copy; 2025 Shaoli
                </a>
            </p>
            <div style={{ margin: '1rem 0' }}>
                {/* Placeholder for QR Code */}
                <div style={{ width: '100px', height: '100px', background: 'white', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }}>
                    <img
                        src="/qrcode-colorful.png"
                        alt="QR Code"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                </div>
            </div>
            <div suppressHydrationWarning>
                <p>Visitor Counter</p>
                <div suppressHydrationWarning style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                    {error ? 'Unavailable' : (count !== null ? count : '...')}
                </div>
            </div>
        </div>
    );
}
