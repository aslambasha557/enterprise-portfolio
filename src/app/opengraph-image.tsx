import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Aslam Basha | Enterprise AI Architecture & Network Security Automation';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#020617', // slate-950
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1e293b 2px, transparent 0)',
          backgroundSize: '50px 50px',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '9999px',
            padding: '8px 20px',
            color: '#22d3ee',
            fontSize: 20,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '32px',
          }}
        >
          Enterprise Portfolio
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-1px',
          }}
        >
          ASLAM BASHA
        </div>

        {/* Subtitle / Focus */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            background: 'linear-gradient(to right, #22d3ee, #3b82f6, #a855f7)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '40px',
          }}
        >
          Enterprise AI Architecture & Network Automation
        </div>

        {/* Core Pillars */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          {['Air-Gapped Private AI', 'SOAR Security Pipelines', '10+ Yrs Experience'].map((tag) => (
            <div
              key={tag}
              style={{
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '8px',
                padding: '10px 18px',
                color: '#94a3b8',
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}