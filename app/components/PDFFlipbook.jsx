'use client';
import dynamic from 'next/dynamic';

const PDFFlipbook = dynamic(() => import('../../components/PDFFlipbookClient'), {
  ssr: false,
  loading: () => <p>Loading flipbook...</p>,
});

export default PDFFlipbook;
