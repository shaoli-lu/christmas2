import Image from 'next/image';

export default function Header() {
    return (
        <div style={{ width: '100%', padding: '1rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '300px', aspectRatio: '1/1' }}>
                <Image
                    src="/christmas-song.gif"
                    alt="Christmas Song"
                    fill
                    style={{ objectFit: 'contain', borderRadius: '16px' }}
                    priority
                    unoptimized
                />
            </div>
        </div>
    );
}
