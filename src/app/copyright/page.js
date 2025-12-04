"use client";

export default function Copyright() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '2rem',
            lineHeight: '1.8'
        }}>
            <h1 style={{
                fontSize: '2rem',
                marginBottom: '2rem',
                color: 'var(--accent)',
                textAlign: 'center'
            }}>
                Copyright Notice
            </h1>

            <div className="glass-card" style={{
                padding: '2rem',
                fontSize: '1rem'
            }}>
                <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                    Copyright © 2020 Shaoli. All rights reserved.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                    All content on this website, including text, graphics, logos, images, and software, is the property of Shaoli and is protected by United States and international copyright laws. This website is intended for personal use only and may not be used for commercial purposes. Unauthorized use, reproduction, modification, distribution, or duplication of any content on this website without the express written permission of Shaoli is strictly prohibited.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                    If you have any questions or concerns about your legal obligations related to copyright or any other legal matter, it is advisable to consult with a licensed attorney in your jurisdiction.
                </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button
                    onClick={() => window.close()}
                    style={{
                        color: 'var(--accent)',
                        background: 'transparent',
                        border: '1px solid var(--accent)',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'var(--accent)';
                        e.target.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'var(--accent)';
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
